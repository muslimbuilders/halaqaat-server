export default class BadRequestError extends ErrorResponse {
  constructor(message="Bad request.") {
    super(message, 400);
  }
}