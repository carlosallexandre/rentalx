import Category, { ICategoryProps } from "../model/Category";

type ICreateCategoryDTO = Pick<ICategoryProps, "name" | "description">;

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
