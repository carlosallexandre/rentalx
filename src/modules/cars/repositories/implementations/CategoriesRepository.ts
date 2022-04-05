import { Repository } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import postgresDb from "../../../../database";
import Category from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = postgresDb.getRepository("categories");
  }

  async create({ name, description }: ICreateCategoryDTO) {
    const category = this.repository.create({
      id: uuidv4(),
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    return this.repository.findOneBy({ name });
  }
}

export default CategoriesRepository;
