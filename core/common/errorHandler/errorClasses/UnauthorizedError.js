import ErrorResponse from '../errorResponse.js';

export default class UnauthorizedError extends ErrorResponse {
  constructor(message="Unauthorised") {
    super(message);
  }
}