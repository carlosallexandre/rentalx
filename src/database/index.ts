import { DataSource } from "typeorm";

const postgresDb = new DataSource({
<<<<<<< HEAD
  type: "postgres",
  host: process.env.POSTGRES_CONTAINER_NAME,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
=======
  name: "default",
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
>>>>>>> dev
});

export default postgresDb;
