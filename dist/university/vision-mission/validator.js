"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visionMissionSortValidator = exports.visionMissionUpdateValidator = exports.visionMissionValidator = void 0;
const express_validator_1 = require("express-validator");
exports.visionMissionValidator = [
    (0, express_validator_1.body)("titleAr")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic name require")
        .isString()
        .withMessage("arabic name must be string"),
    (0, express_validator_1.body)("titleEn")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english name require"),
    (0, express_validator_1.body)("descriptionAr")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic description require")
        .isString()
        .withMessage("arabic description must be string"),
    (0, express_validator_1.body)("descriptionEn")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english description require"),
];
exports.visionMissionUpdateValidator = [
    (0, express_validator_1.check)("titleAr")
        .if((0, express_validator_1.body)("titleAr").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic name require"),
    (0, express_validator_1.check)("titleEn")
        .if((0, express_validator_1.body)("titleEn").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english name require"),
    (0, express_validator_1.check)("descriptionAr")
        .if((0, express_validator_1.body)("descriptionAr").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic description require"),
    (0, express_validator_1.check)("descriptionEn")
        .if((0, express_validator_1.body)("descriptionEn").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english description require"),
];
exports.visionMissionSortValidator = [
    (0, express_validator_1.body)("sort").isArray().withMessage("sort must be array"),
    (0, express_validator_1.body)("sort.*.id").notEmpty().withMessage("sort id require"),
    (0, express_validator_1.body)("sort.*.seqNo").notEmpty().withMessage("sort seqNo require"),
];
//# sourceMappingURL=validator.js.map