import { Router } from "express";
import multer from "multer";

import {
  createCategoryController,
  importCategoriesController,
  listCategoriesController,
} from "../modules/cars/useCases";

const categoriesRoutes = Router();
const upload = multer({ dest: "tmp/" });

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);
categoriesRoutes.post(
  "/upload",
  upload.single("file"),
  importCategoriesController.handle
);

export default categoriesRoutes;
