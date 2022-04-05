import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

interface ICategoryProps {
  id?: string;
  name: string;
  description: string;
  created_at: Date;
}

@Entity("categories")
class Category implements ICategoryProps {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Category;
export { ICategoryProps };
