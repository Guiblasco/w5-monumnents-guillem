import { type NextFunction, type Request, type Response } from "express";
import ServerError from "../../error/ServerError/ServerError";
import { unknownPath } from "../unknownEndpoint";

describe("Given the function unknownPath", () => {
  describe("When it receives a request with an unknownPath", () => {
    test("Then it sohuld call response's method next with error code 404", () => {
      const error = new ServerError("Path not found", 404);
      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      const next: NextFunction = jest.fn().mockReturnThis();

      unknownPath(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
