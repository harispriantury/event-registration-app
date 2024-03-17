import { Event, Registration } from "@prisma/client";

let regist: Registration;
export const useValidateRegis: any | null = (
  eventId: number,
  name: string,
  email: string,
  phoneNumber: string,
  status: string
) => {
  let errors: any | null = {};
  if (!eventId) {
    errors.event_id = "event id is required";
  }
  if (!name) {
    errors.name = "name is required";
  }

  if (!email) {
    errors.email = "email is required";
  }

  if (!phoneNumber) {
    errors.phoneNumber = "phoneNumber is required";
  }

  if (!status) {
    errors.status = "status is required";
  }

  if (Object.values(errors).length == 0) {
    return null;
  } else {
    return errors;
  }
};
