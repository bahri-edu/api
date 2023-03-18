"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoUpdateValidator = exports.logoValidator = void 0;
const express_validator_1 = require("express-validator");
exports.logoValidator = [
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
exports.logoUpdateValidator = [
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
//# sourceMappingURL=validator.js.map