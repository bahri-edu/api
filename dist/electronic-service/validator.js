"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eServiceUpdateValidator = exports.eServiceValidator = void 0;
const express_validator_1 = require("express-validator");
exports.eServiceValidator = [
    (0, express_validator_1.body)("titleAr")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic title require"),
    (0, express_validator_1.body)("titleEn")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english title require"),
    (0, express_validator_1.body)("icon")
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("icon require"),
];
exports.eServiceUpdateValidator = [
    (0, express_validator_1.check)("titleAr")
        .if((0, express_validator_1.body)("titleAr").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("arabic title require"),
    (0, express_validator_1.check)("titleEn")
        .if((0, express_validator_1.body)("titleEn").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage("english title require"),
    (0, express_validator_1.check)("icon")
        .if((0, express_validator_1.body)("icon").exists())
        .notEmpty({
        ignore_whitespace: true,
    })
        .withMessage(" icon require"),
];
//# sourceMappingURL=validator.js.map