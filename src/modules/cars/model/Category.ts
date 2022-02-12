import { v4 as uuidv4 } from "uuid";

interface ICategoryProps {
  id?: string;
  name: string;
  description: string;
  created_at: Date;
}

class Category implements ICategoryProps {
  id: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({
    id = uuidv4(),
    name,
    description,
    created_at,
  }: ICategoryProps) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }
}

export default Category;
export { ICategoryProps };
