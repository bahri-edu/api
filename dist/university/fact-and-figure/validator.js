"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factAndFigureUpdateValidator = exports.factAndFigureValidator = void 0;
const express_validator_1 = require("express-validator");
exports.factAndFigureValidator = [
    (0, express_validator_1.body)("count")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage(" count require")
        .isNumeric()
        .withMessage(" count must be number"),
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
exports.factAndFigureUpdateValidator = [
    (0, express_validator_1.check)("count")
        .if((0, express_validator_1.body)("count").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("count require")
        .isNumeric()
        .withMessage("count must be number"),
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