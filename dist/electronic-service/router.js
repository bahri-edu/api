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
exports.eServiceRouter = void 0;
const common_1 = require("@meemsd/common");
const express_1 = require("express");
const db_helper_1 = require("../helpers/db.helper");
const model_1 = require("./model");
const validator_1 = require("./validator");
const router = (0, express_1.Router)();
exports.eServiceRouter = router;
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const historicalBackgrounds = yield model_1.EService.find().sort({ seqNo: 1 });
        res.status(200).json(historicalBackgrounds);
    }
    catch (error) {
        throw new common_1.InternalServerError();
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const eService = yield model_1.EService.findById(id);
        if (!eService)
            throw new common_1.NotFoundError();
        res.status(200).json(eService);
    }
    catch (error) {
        throw new common_1.NotFoundError();
    }
}));
router.post("/", validator_1.eServiceValidator, common_1.validationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eService = yield model_1.EService.build(req.body).save();
        return res.status(201).json(eService);
    }
    catch (error) {
        throw new common_1.InternalServerError();
    }
}));
router.put("/:id", validator_1.eServiceUpdateValidator, common_1.validationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const eService = yield model_1.EService.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!eService)
            throw new common_1.NotFoundError();
        return res.status(200).json(eService);
    }
    catch (error) {
        console.log(error);
        throw new common_1.InternalServerError(JSON.stringify(error));
    }
}));
router.post("/sort", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sort } = req.body;
        const bulkArr = (0, db_helper_1.BulkArray)(sort);
        model_1.EService.bulkWrite(bulkArr);
        return res.status(200).json({ message: "sort successful" });
    }
    catch (error) {
        throw new common_1.InternalServerError();
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const eService = yield model_1.EService.findByIdAndDelete(id);
        if (!eService)
            throw new common_1.NotFoundError();
        res.status(200).json({ message: "dlete succssful" });
    }
    catch (error) {
        throw new common_1.NotFoundError();
    }
}));
//# sourceMappingURL=router.js.map