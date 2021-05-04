import { MongooseModuleOptions } from "@nestjs/mongoose";

require('dotenv').config();

class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) { }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getMongooseConfig(): MongooseModuleOptions {
    return {
      uri: this.getValue('MONGODB_URI'),
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    };
  }

}

const configService = new ConfigService(process.env)
  .ensureValues([
    'MONGODB_URI'
  ]);

export { configService };