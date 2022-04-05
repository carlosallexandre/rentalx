import { inject, injectable } from "tsyringe";

import { ICategoriesRepository, ICreateCategoryDTO } from "../../repositories";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: ICreateCategoryDTO) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    await this.categoriesRepository.create({ name, description });
  }
}

export default CreateCategoryUseCase;
