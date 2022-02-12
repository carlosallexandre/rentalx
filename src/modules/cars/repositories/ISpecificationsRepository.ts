import Specification, { ISpecificationProps } from "../model/Specification";

type ICreateSpecificationDTO = Pick<
  ISpecificationProps,
  "name" | "description"
>;

interface ISpecificationsRepository {
  create(params: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification | undefined;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
