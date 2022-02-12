import Specification from "../../model/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: ISpecificationsRepository;

  public static getInstance() {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
  }

  private constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  create({ description, name }: ICreateSpecificationDTO): Specification {
    const specification = new Specification({
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);

    return specification;
  }
}

export default SpecificationsRepository;
