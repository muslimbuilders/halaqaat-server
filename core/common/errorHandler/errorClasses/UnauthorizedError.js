import ErrorResponse from '../errorResponse.js';

export default class UnauthorizedError extends ErrorResponse {
  constructor(message, status) {
    super("Unauthorised", 401);
  }
}