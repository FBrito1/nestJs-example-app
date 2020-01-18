import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany
} from "typeorm";
import * as bcrypt from "bcrypt";
import { Task } from "src/tasks/task.entity";

@Entity()
@Unique(["username"])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  // the eager property when is set to true
  // gives the relation data for the given entity
  @OneToMany(
    type => Task,
    task => task.user,
    { eager: true }
  )
  tasks: Task[];

  async validatePasssoword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);

    return hash === this.password;
  }
}
