import { config } from "dotenv";

class DotEnvConfig {
  _config;
  constructor() {
    const { error, parsed } = config();
    if (error) {
      throw new Error("File .env not found");
    }
    if (!parsed) {
      throw new Error("Empty file .env");
    }
    this._config = parsed;
  }
  get(key) {
    const res = this._config[key];
    if (!res) {
      throw new Error(`There is no such key (${key})`);
    }
    return res;
  }
}
export default DotEnvConfig;
