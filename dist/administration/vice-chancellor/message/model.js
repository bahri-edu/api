"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViceChancellorMessage = void 0;
const mongoose_1 = require("mongoose");
const viceChancellorMessageSchema = new mongoose_1.Schema({
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
viceChancellorMessageSchema.statics.build = (attrs) => {
    return new exports.ViceChancellorMessage(attrs);
};
exports.ViceChancellorMessage = (0, mongoose_1.model)("ViceChancellorMessage", viceChancellorMessageSchema);
//# sourceMappingURL=model.js.map