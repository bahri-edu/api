"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
const mongoose_1 = require("mongoose");
const logoSchema = new mongoose_1.Schema({
    titleAr: {
        type: String,
        require: true,
    },
    titleEn: {
        type: String,
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
logoSchema.statics.build = (attrs) => {
    return new exports.Logo(attrs);
};
exports.Logo = (0, mongoose_1.model)("logo", logoSchema);
//# sourceMappingURL=model.js.map