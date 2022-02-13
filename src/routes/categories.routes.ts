import { Router } from "express";
import multer from "multer";

import {
  createCategoryController,
  importCategoriesController,
  listCategoriesController,
} from "../modules/cars/useCases";

const categoriesRoutes = Router();
const upload = multer({ dest: "tmp/" });

categoriesRoutes.post("/", upload.single("file"), (request, response) =>
  createCategoryController.handle(request, response)
);
categoriesRoutes.get("/", (request, response) =>
  listCategoriesController.handle(request, response)
);
categoriesRoutes.post("/upload", upload.single("file"), (request, response) =>
  importCategoriesController.handle(request, response)
);

export default categoriesRoutes;
