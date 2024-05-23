import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config.js";

export async function initializeDatabase() {
  return await MikroORM.init(mikroOrmConfig);
}