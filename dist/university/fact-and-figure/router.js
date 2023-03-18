"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.factAndFigureRouter = void 0;
const common_1 = require("@meemsd/common");
const express_1 = require("express");
const model_1 = require("./model");
const validator_1 = require("./validator");
const router = (0, express_1.Router)();
exports.factAndFigureRouter = router;
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const factAndFigures = yield model_1.FactAndFigure.find();
        res.status(200).json(factAndFigures);
    }
    catch (error) {
        throw new common_1.InternalServerError();
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const factAndFigure = yield model_1.FactAndFigure.findById(id);
        if (!factAndFigure)
            throw new common_1.NotFoundError();
        res.status(200).json(factAndFigure);
    }
    catch (error) {
        throw new common_1.NotFoundError();
    }
}));
router.post("/", validator_1.factAndFigureValidator, common_1.validationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const factAndFigure = yield model_1.FactAndFigure.build(req.body).save();
        return res.status(201).json(factAndFigure);
    }
    catch (error) {
        throw new common_1.InternalServerError();
    }
}));
router.put("/:id", validator_1.factAndFigureUpdateValidator, common_1.validationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const factAndFigure = yield model_1.FactAndFigure.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!factAndFigure)
            throw new common_1.NotFoundError();
        return res.status(200).json(factAndFigure);
    }
    catch (error) {
        console.log(error);
        throw new common_1.InternalServerError(JSON.stringify(error));
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const factAndFigure = yield model_1.FactAndFigure.findByIdAndDelete(id);
        if (!factAndFigure)
            throw new common_1.NotFoundError();
        res.status(200).json({ message: "dlete succssful" });
    }
    catch (error) {
        throw new common_1.NotFoundError();
    }
}));
//# sourceMappingURL=router.js.map