"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactAndFigure = exports.FactType = void 0;
const mongoose_1 = require("mongoose");
var FactType;
(function (FactType) {
    FactType["STUDENT"] = "STUDENT";
    FactType["STAFF"] = "STAFF";
})(FactType = exports.FactType || (exports.FactType = {}));
const factAndFigureSchema = new mongoose_1.Schema({
    count: {
        type: Number,
        require: true,
    },
    descriptionAr: {
        type: String,
        require: true,
    },
    descriptionEn: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        default: FactType.STUDENT,
    },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
    timestamps: true,
});
factAndFigureSchema.statics.build = (attrs) => {
    return new exports.FactAndFigure(attrs);
};
exports.FactAndFigure = (0, mongoose_1.model)("facts-and-figures", factAndFigureSchema);
//# sourceMappingURL=model.js.map