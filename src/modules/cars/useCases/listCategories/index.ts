import { CategoriesRepository } from "../../repositories";
import ListCategoriesController from "./ListCategoriesController";
import ListCategoriesUseCase from "./ListCategoriesUseCase";

function listCategoriesController() {
  const categoriesRepository = new CategoriesRepository();

  const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

  return new ListCategoriesController(listCategoriesUseCase);
}

export default listCategoriesController;
