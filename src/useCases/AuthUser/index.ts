import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { AuthUserController } from "./AuthUserController";
import { AuthUserUseCase } from "./AuthUserUseCase";

const postgresUserRepository = new PostgresUserRepository();
const authUserUseCase = new AuthUserUseCase(postgresUserRepository);
const authUserController = new AuthUserController(authUserUseCase);

export { authUserUseCase, authUserController };