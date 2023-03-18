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
exports.newsRouter = void 0;
const common_1 = require("@meemsd/common");
const express_1 = require("express");
const model_1 = require("./model");
const validator_1 = require("./validator");
const router = (0, express_1.Router)();
exports.newsRouter = router;
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, type } = req.query;
        const colleges = yield model_1.News.find(Object.assign({}, (type && { type })))
            .sort({ createdAt: -1 })
            .limit(+limit);
        res.status(200).json(colleges);
    }
    catch (error) {
        throw new common_1.InternalServerError();
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const college = yield model_1.News.findById(id);
        if (!college)
            throw new common_1.NotFoundError();
        res.status(200).json(college);
    }
    catch (error) {
        throw new common_1.NotFoundError();
    }
}));
router.post("/", validator_1.newsValidator, common_1.validationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const college = yield model_1.News.build(req.body).save();
        return res.status(201).json(college);
    }
    catch (error) {
        throw new common_1.InternalServerError(JSON.stringify(error));
    }
}));
router.put("/:id", validator_1.newsUpdateValidator, common_1.validationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const college = yield model_1.News.findByIdAndUpdate(id, req.body, { new: true });
        if (!college)
            throw new common_1.NotFoundError();
        return res.status(201).json(college);
    }
    catch (error) {
        throw new common_1.InternalServerError(JSON.stringify(error));
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const college = yield model_1.News.findByIdAndDelete(id);
        if (!college)
            throw new common_1.NotFoundError();
        res.status(200).json({ message: "dlete succssful" });
    }
    catch (error) {
        throw new common_1.NotFoundError();
    }
}));
//# sourceMappingURL=router.js.map