export class AuthRequiredError extends Error {
  constructor(message = "Authentication required to access this feature") {
    super(message);
    this.name = "AuthRequiredError";
  }
}
