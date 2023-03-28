import { Repository } from "typeorm";
import AppDataSource from "../../data-source";

import { User } from "../../entities/users.entity";
import { IUser, IUserRequest } from "../../interfaces/users";
import responseCreateUserSchemas from "../../schemas/users/responseUser.schemas";

const createUserService = async (
  newUser: IUserRequest
): Promise<IUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userResponse: User = userRepository.create(newUser);
 

  await userRepository.save(userResponse);

  return userResponse;
};

export default createUserService;
