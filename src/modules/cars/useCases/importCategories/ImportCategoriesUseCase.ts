import { parse } from "csv-parse";
import fs from "fs";
import { injectable, inject } from "tsyringe";

import { ICategoriesRepository, ICreateCategoryDTO } from "../../repositories";

@injectable()
class ImportCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

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

    // eslint-disable-next-line no-restricted-syntax
    for (const category of categories) {
      // eslint-disable-next-line no-await-in-loop
      const categoryAlreadyExists = await this.categoriesRepository.findByName(
        category.name
      );

      // eslint-disable-next-line no-continue
      if (categoryAlreadyExists) continue;

      // eslint-disable-next-line no-await-in-loop
      await this.categoriesRepository.create(category);
    }
  }
}

export default ImportCategoriesUseCase;
