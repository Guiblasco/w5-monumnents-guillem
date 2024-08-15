import { type NextFunction, type Request, type Response } from "express";
import HealthyCheckController from "../HealthyCheckController";

describe("Given getPing method of healthyChekController class", () => {
  describe("When it receives a request", () => {
    const healthyCheckController = new HealthyCheckController();
    const req: Partial<Request> = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next: NextFunction = jest.fn();

    test("Then it should call response's status method with 200", () => {
      healthyCheckController.getPing(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
