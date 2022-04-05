import { SpecificationsRepository } from "../../repositories";
import CreateSpecificationController from "./CreateSpecificationController";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

function createSpecificationController() {
  const specificationsRepository = new SpecificationsRepository();

  const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
  );

  return new CreateSpecificationController(createSpecificationUseCase);
}

export default createSpecificationController;
