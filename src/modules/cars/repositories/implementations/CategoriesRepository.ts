import Category from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: ICategoriesRepository;

  public static getInstance() {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  private constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category({
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((category) => category.name === name);
  }
}

export default CategoriesRepository;
