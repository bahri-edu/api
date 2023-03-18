"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionMission = void 0;
const mongoose_1 = require("mongoose");
const visionMissionSchema = new mongoose_1.Schema({
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
    icon: {
        type: String,
        require: true,
    },
    seqNo: {
        type: Number,
        require: true,
        default: 99,
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
visionMissionSchema.statics.build = (attrs) => {
    return new exports.VisionMission(attrs);
};
exports.VisionMission = (0, mongoose_1.model)("vision-mission", visionMissionSchema);
//# sourceMappingURL=model.js.map