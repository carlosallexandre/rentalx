import { Repository } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import postgresDb from "../../../../database";
import Specification from "../../entities/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = postgresDb.getRepository("specifications");
  }

  async findByName(name: string): Promise<Specification | undefined> {
    return this.repository.findOneBy({ name });
  }

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      id: uuidv4(),
      name,
      description,
    });

    await this.repository.save(specification);

    return specification;
  }
}

export default SpecificationsRepository;
