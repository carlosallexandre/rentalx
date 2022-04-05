import { DataSource } from "typeorm";

const postgresDb = new DataSource({
  name: "default",
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
});

export default postgresDb;
