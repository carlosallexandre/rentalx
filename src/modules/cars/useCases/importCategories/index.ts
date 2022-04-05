import { CategoriesRepository } from "../../repositories";
import ImportCategoriesController from "./ImportCategoriesController";
import ImportCategoriesUseCase from "./ImportCategoriesUseCase";

function importCategoriesController() {
  const categoriesRepository = new CategoriesRepository();

  const importCategoriesUseCase = new ImportCategoriesUseCase(
    categoriesRepository
  );

  return new ImportCategoriesController(importCategoriesUseCase);
}

export default importCategoriesController;
