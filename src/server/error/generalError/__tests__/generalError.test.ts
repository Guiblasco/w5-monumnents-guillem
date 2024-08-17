import { type NextFunction, type Request, type Response } from "express";
import { generalError } from "../generalError.js";
import ServerError from "../../ServerError/ServerError.js";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the funcion generalError", () => {
  describe("When it receives a request with error's code 404 and message 'Not found'", () => {
    const expectStatusCode = 404;
    const expectErrorMessage = { message: "Not found" };
    const error = new ServerError("Not found", 404);
    const req: Partial<Request> = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next: NextFunction = jest.fn();

    test("Then it should call a response's method status with error's status code 404", () => {
      generalError(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectStatusCode);
    });
    test("Then it should call a response's method json an object property message value 'Not found'", () => {
      generalError(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectErrorMessage);
    });
  });
});
