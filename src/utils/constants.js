export const DB_URL = "mongodb://localhost:27017/r_mini";
export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || "retailo-mini";
export const JWT_EXPIRY = "100d";
export const PROCESS_TYPES = {
  SIGN_IN: "Sign In",
  SIGN_UP: "Sign Up",
  LISTING: "Product Listing",
};
