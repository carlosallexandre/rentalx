import { DataSource } from "typeorm";

const postgresDb = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_CONTAINER_NAME,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

export default postgresDb;
