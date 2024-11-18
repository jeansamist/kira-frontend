import { BaseModelInterface } from "./base-model.interface";
import { RoleInterface } from "./role.interface";

export interface UserInterface extends BaseModelInterface {
  username: string;
  password: string;
  role: RoleInterface;
}
