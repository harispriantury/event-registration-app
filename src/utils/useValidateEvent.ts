import { Event } from "@prisma/client";

export const useValidateEvents: any | null = (
  name: string,
  description: string,
  location: string,
  capacity: number
) => {
  let errors: any | null = {};
  if (!name) {
    errors.name = "name is required";
  }
  if (!description) {
    errors.description = "description is required";
  }

  if (!location) {
    errors.location = "location is required";
  }

  if (!capacity) {
    errors.capacity = "capacity is required";
  }

  if (Object.values(errors).length == 0) {
    return null;
  } else {
    return errors;
  }
};
