import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

interface ISpecificationProps {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;
}

@Entity("specifications")
class Specification implements ISpecificationProps {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Specification;
export { ISpecificationProps };
