"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsUpdateValidator = exports.newsValidator = void 0;
const express_validator_1 = require("express-validator");
exports.newsValidator = [
    (0, express_validator_1.body)("titleAr")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic title require")
        .isString()
        .withMessage("arabic title must be string"),
    (0, express_validator_1.body)("titleEn")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english title require")
        .isString()
        .withMessage("english title must be string"),
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
        .withMessage("english description require")
        .isString()
        .withMessage("arabic description must be string"),
];
exports.newsUpdateValidator = [
    (0, express_validator_1.check)("titleAr")
        .if((0, express_validator_1.body)("titleAr").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic title require")
        .isString()
        .withMessage("arabic title must be string"),
    (0, express_validator_1.check)("titleEn")
        .if((0, express_validator_1.body)("titleEn").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english title require")
        .isString()
        .withMessage("english title must be string"),
    (0, express_validator_1.check)("descriptionAr")
        .if((0, express_validator_1.body)("descriptionAr").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic description require")
        .isString()
        .withMessage("arabic description must be string"),
    (0, express_validator_1.check)("descriptionEn")
        .if((0, express_validator_1.body)("descriptionEn").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english description require")
        .isString()
        .withMessage("arabic description must be string"),
];
//# sourceMappingURL=validator.js.map