import "dotenv/config";
import "reflect-metadata";
import path from "path";
import { DataSource, DataSourceOptions} from "typeorm";
import { Contact } from "./entities/contacts.entity";
import { User } from "./entities/users.entity";
import { InitialMigration1679945715876 as migration} from "./migrations/1679945715876-InitialMigration";

const dataSourceConfig = (): DataSourceOptions => {
  const dbUrl: string | undefined = process.env.DATABASE_URL;

  const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{js,ts}"
  );

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL' ");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [User,Contact],
    migrations: [migration],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
