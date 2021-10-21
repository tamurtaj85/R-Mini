export const dbMessages = {
  requiredFields(fieldName, processType) {
    `You can't leave ${fieldName} field empty in ${processType}!`;
  },
};

export const errorMessages = {
  userEM: {
    NOT_AUTHORIZED: "User is not authorized to access this resource!",
    WRONG_INFO: "Either email or password provided is wrong!",
    USER_NOT_FOUND: "No such user found!",
    SOMETHING_WW: "Something went wrong!",
  },
};
