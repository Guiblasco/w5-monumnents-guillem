import type { NextFunction, Request, Response } from "express";
import MonumentsController from "../MonumentsController.js";
import { type Monument } from "../../../types.js";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the getMonuments method of monumentsController class", () => {
  const monumentsTest: Monument[] = [
    {
      id: "1",
      name: "Neptune Fountain",
      city: "Bologna",
      country: "Italy",
      description: "",
      imageUrl: "",
    },
    {
      id: "2",
      name: "Coliseum",
      city: "Roma",
      country: "Italy",
      description: "",
      imageUrl: "",
    },
  ];

  const monumentController = new MonumentsController(monumentsTest);
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a response", () => {
    test("Then it should call response's status method with 200", () => {
      monumentController.getMonuments(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalled();
    });
  });

  describe("When it receives response", () => {
    test("Then it call response's method json with monuments list", () => {
      monumentController.getMonuments(req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ monuments: monumentsTest });
    });
  });
});
