import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "0.0.0.0",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "taskmanagement",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true
};
