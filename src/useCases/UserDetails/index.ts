import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { UserDetailsController } from "./UserDetailsController";
import { UserDetailsUseCase } from "./UserDetailsUseCase";

const postgresUserRepository = new PostgresUserRepository();
const userDetailsUseCase = new UserDetailsUseCase(postgresUserRepository);
const userDetailsController = new UserDetailsController(userDetailsUseCase);

export { userDetailsUseCase, userDetailsController };