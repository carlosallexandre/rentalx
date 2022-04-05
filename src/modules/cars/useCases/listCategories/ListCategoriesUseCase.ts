import { injectable, inject } from "tsyringe";

import { CategoriesRepository } from "../../repositories";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository
  ) {}

  execute() {
    return this.categoriesRepository.list();
  }
}

export default ListCategoriesUseCase;
