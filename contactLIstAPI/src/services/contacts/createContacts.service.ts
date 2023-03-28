import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/appError.errors";
import {IContactRequest } from "../../interfaces/contacts";
import responseContactsSchema from "../../schemas/contacts/responseContacts.schemas";

const createContactsService = async (
  newContact: IContactRequest,
  userId: string
): Promise<{}> => {
  const ContactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userExist = await userRepository.findOne({
    where: { id: userId },
  });

  if (!userExist) {
    throw new AppError("User not found!", 404);
  }

  const ContactResponse: Contact = ContactRepository.create(newContact);

  const userResponse = await responseContactsSchema.validate(newContact, {
    stripUnknown: true,
    abortEarly: false,
  });
  await ContactRepository.save(ContactResponse);

  await ContactRepository.update(
    { id: ContactResponse.id },
    { user: userExist }
  );


  return ContactResponse;
};

export default createContactsService;
