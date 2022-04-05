import { CategoriesRepository } from "../../repositories";
import CreateCategoryController from "./CreateCategoryController";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

function createCategoryController() {
  const categoriesRepository = new CategoriesRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  return new CreateCategoryController(createCategoryUseCase);
}

export default createCategoryController;
