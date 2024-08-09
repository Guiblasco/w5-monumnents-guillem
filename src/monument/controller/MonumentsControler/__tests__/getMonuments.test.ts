import type { Request, Response } from "express";
import MonumentsController from "../MonumentsController.js";
import { monuments } from "../../../data.js";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the getMonuments method of monumentsController class", () => {
  const monumentController = new MonumentsController(monuments);
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  describe("When it receives a response", () => {
    test("Then it should call response's status method with 200", () => {
      monumentController.getMonuments(req as Request, res as Response);

      expect(res.status).toHaveBeenCalled();
    });
  });

  describe("When it receives response", () => {
    test("Then it call response's method json with monuments list", () => {
      monumentController.getMonuments(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ monuments });
    });
  });
});
