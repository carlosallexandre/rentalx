import { parse } from "csv-parse";
import fs from "fs";

import { ICategoriesRepository, ICreateCategoryDTO } from "../../repositories";

class ImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<ICreateCategoryDTO[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: ICreateCategoryDTO[] = [];
      const parser = parse();

      stream.pipe(parser);

      parser
        .on("error", (err) => reject(err))
        .on("end", async () => {
          await fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("readable", () => {
          let chunk = parser.read();

          while (chunk !== null) {
            const [name, description] = chunk;
            categories.push({ name, description });
            chunk = parser.read();
          }
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.forEach((category) => {
      const categoryAlreadyExists = this.categoriesRepository.findByName(
        category.name
      );

      if (categoryAlreadyExists) return;

      this.categoriesRepository.create(category);
    });
  }
}

export default ImportCategoriesUseCase;
