import { EnvVars } from "../const/env-var.enum.js";
import  DotEnvConfig  from "../dotenv-config/dotenv.config.js";
import { Migrator } from "@mikro-orm/migrations";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import  UserEntity from "../entity/users.entity.js";
import * as path from "path";
import { fileURLToPath } from 'url';
import JavaScriptMetadataProvider from "@mikro-orm/core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dotEnvConfig = new DotEnvConfig();

export default {
  // entities: [path.resolve(__dirname, "../modules/**/*.js")],
  entities: [UserEntity],
  host: dotEnvConfig.get(EnvVars.POSTGRES_HOST),
  user: dotEnvConfig.get(EnvVars.POSTGRES_USER),
  password: dotEnvConfig.get(EnvVars.POSTGRES_PASSWORD),
  dbName: dotEnvConfig.get(EnvVars.POSTGRES_DB),
  port: +dotEnvConfig.get(EnvVars.POSTGRES_PORT),
  metadataProvider: JavaScriptMetadataProvider,
  debug: true,
  driver: PostgreSqlDriver,
  migrations: {
    tableName: "mikro_orm_migrations",
    path: path.join(__dirname, "../migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    transactional: true,
    disableForeignKeys: true,
    emit: "js",
  },
  extensions: [Migrator],
};
