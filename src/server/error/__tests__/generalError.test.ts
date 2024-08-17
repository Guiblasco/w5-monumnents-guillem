import type { NextFunction, Response, Request } from "express";
import { generalError } from "../generalError/generalError.js";
import ServerError from "../ServerError/ServerError.js";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the funcion generalError", () => {
  describe("When it receives a request", () => {
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
