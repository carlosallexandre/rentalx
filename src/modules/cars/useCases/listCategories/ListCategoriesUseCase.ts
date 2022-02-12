import { CategoriesRepository } from "../../repositories";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute() {
    return this.categoriesRepository.list();
  }
}

export default ListCategoriesUseCase;
