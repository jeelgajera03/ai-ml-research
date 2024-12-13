class AuthenticationFailedError extends Error {
  constructor(errorCode, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthenticationFailedError);
    }
    this.name = 'AuthenticationFailedError';
    // Custom debugging information
    this.errorCode = errorCode;
    this.httpStatusCode = 401;
    this.date = new Date();
  }
}
module.exports = AuthenticationFailedError;
