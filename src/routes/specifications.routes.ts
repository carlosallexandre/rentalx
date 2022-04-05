import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases";

const specificationsRoutes = Router();

specificationsRoutes.post("/", createSpecificationController.handle);

export default specificationsRoutes;
