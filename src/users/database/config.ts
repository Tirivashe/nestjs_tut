import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./models/user.model";

export const config: SequelizeModule = {
    dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'shamzio3000',
      database: 'nestjs_tutorial',
      synchronize: true,
      autoLoadModels: true,
      models: [User],
  }