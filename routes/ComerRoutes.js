import express, { Router } from "express";
import { createComer, deleteComer, getAllComer, getComer, updateComer } from "../controllers/ComerController.js";

const comerRouter = express.Router()

comerRouter.get('/', getAllComer)
comerRouter.get('/:id', getComer)
comerRouter.post('/', createComer)
comerRouter.put('/:id', updateComer)
comerRouter.delete('/:id', deleteComer)

export default comerRouter