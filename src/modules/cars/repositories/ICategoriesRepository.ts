import Category, { ICategoryProps } from "../entities/Category";

type ICreateCategoryDTO = Pick<ICategoryProps, "name" | "description">;

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
