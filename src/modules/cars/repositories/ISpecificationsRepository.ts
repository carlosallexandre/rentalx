import Specification, { ISpecificationProps } from "../entities/Specification";

type ICreateSpecificationDTO = Pick<
  ISpecificationProps,
  "name" | "description"
>;

interface ISpecificationsRepository {
  create(params: ICreateSpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification | undefined>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
