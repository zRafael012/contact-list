export interface IContactRequest {
  email: string;
  secondEmail?: string;
  phone: string;
  secondPhone?: string;
  name: string;
}

export interface IContactResponse {
  email?: string;
  secondEmail?: string;
  phone: string;
  secondPhone?: string;
  name: string;
}

export interface IContactUpdate {
  email?: string;
  secondEmail?: string;
  phone?: string;
  secondPhone?: string;
  name?: string;
}
