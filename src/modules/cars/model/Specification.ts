import { v4 as uuidv4 } from "uuid";

interface ISpecificationProps {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;
}

class Specification implements ISpecificationProps {
  id: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({
    id = uuidv4(),
    name,
    description,
    created_at = new Date(),
  }: ISpecificationProps) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }
}

export default Specification;
export { ISpecificationProps };
