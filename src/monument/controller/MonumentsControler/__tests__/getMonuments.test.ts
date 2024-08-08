import type { Request, Response } from "express";
import MonumentsController from "../MonumentsController.js";

describe("Given the metoth getMonuments", () => {
  const monumentController = new MonumentsController();
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };

  describe("When it's called with metoth getMonuments on response status 200", () => {
    test("Then it should return the metoth getMonuments status with 200", () => {
      monumentController.getMonuments(req as Request, res as Response);

      expect(res.status).toHaveBeenCalled();
    });
  });

  describe("When it's called with metoth getMonuments with response json with monuments array", () => {
    test("Then it shoud return one array with monuments ", () => {
      monumentController.getMonuments(req as Request, res as Response);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
