import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const postgresUserRepository = new PostgresUserRepository();
const updateUserUseCase = new UpdateUserUseCase(postgresUserRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserUseCase, updateUserController };