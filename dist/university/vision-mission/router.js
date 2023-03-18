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
exports.visionMissionRouter = void 0;
const common_1 = require("@meemsd/common");
const express_1 = require("express");
const db_helper_1 = require("../../helpers/db.helper");
const model_1 = require("./model");
const validator_1 = require("./validator");
const router = (0, express_1.Router)();
exports.visionMissionRouter = router;
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const visionMissions = yield model_1.VisionMission.find().sort({ seqNo: 1 });
        res.status(200).json(visionMissions);
    }
    catch (error) {
        throw new common_1.InternalServerError();
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const visionMission = yield model_1.VisionMission.findById(id);
        if (!visionMission)
            throw new common_1.NotFoundError();
        res.status(200).json(visionMission);
    }
    catch (error) {
        throw new common_1.NotFoundError();
    }
}));
router.post("/", validator_1.visionMissionValidator, common_1.validationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const visionMission = yield model_1.VisionMission.build(req.body).save();
        return res.status(201).json(visionMission);
    }
    catch (error) {
        throw new common_1.InternalServerError();
    }
}));
router.put("/:id", validator_1.visionMissionUpdateValidator, common_1.validationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const visionMission = yield model_1.VisionMission.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!visionMission)
            throw new common_1.NotFoundError();
        return res.status(200).json(visionMission);
    }
    catch (error) {
        console.log(error);
        throw new common_1.InternalServerError(JSON.stringify(error));
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const visionMission = yield model_1.VisionMission.findByIdAndDelete(id);
        if (!visionMission)
            throw new common_1.NotFoundError();
        res.status(200).json({ message: "dlete succssful" });
    }
    catch (error) {
        throw new common_1.NotFoundError();
    }
}));
router.post("/sort", validator_1.visionMissionSortValidator, common_1.validationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sort } = req.body;
        const bulkArr = (0, db_helper_1.BulkArray)(sort);
        model_1.VisionMission.bulkWrite(bulkArr);
        return res.status(200).json({ message: "sort successful" });
    }
    catch (error) {
        throw new common_1.InternalServerError();
    }
}));
//# sourceMappingURL=router.js.map