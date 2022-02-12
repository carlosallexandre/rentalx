import { Router } from "express";

import {
  createCategoryController,
  listCategoriesController,
} from "../modules/cars/useCases";

const categoriesRoutes = Router();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);

export default categoriesRoutes;
