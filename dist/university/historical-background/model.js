"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricalBackground = void 0;
const mongoose_1 = require("mongoose");
const historicalBackgroundSchema = new mongoose_1.Schema({
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
historicalBackgroundSchema.statics.build = (attrs) => {
    return new exports.HistoricalBackground(attrs);
};
exports.HistoricalBackground = (0, mongoose_1.model)("historical-background", historicalBackgroundSchema);
//# sourceMappingURL=model.js.map