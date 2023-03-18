"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const common_1 = require("@meemsd/common");
require("express-async-errors");
const college_1 = require("./college");
const news_1 = require("./news");
const university_1 = require("./university");
const administration_1 = require("./administration");
const electronic_service_1 = require("./electronic-service");
const app = (0, express_1.default)();
exports.app = app;
const port = 4000;
exports.port = port;
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello from dashboard api");
});
//
app.use("/api/colleges", college_1.collegeRouter);
app.use("/api/news", news_1.newsRouter);
// university rouert group
app.use("/api/vision-mission", university_1.visionMissionRouter);
app.use("/api/historical-background", university_1.historicalBackgroundRouter);
app.use("/api/fact-and-figure", university_1.factAndFigureRouter);
app.use("/api/logo", university_1.logoRouter);
app.use("/api/council", university_1.councilRouter);
// administration routerd
app.use("/api/vice-chancellor-message", administration_1.viceChancellorMessageRouter);
app.use("/api/current-administration", administration_1.currentAdministrationRouter);
// electronic-service
app.use("/api/electronic-service", electronic_service_1.eServiceRouter);
app.all("*", () => {
    throw new common_1.NotFoundError();
});
app.use(common_1.errorHandlerMiddleware);
//# sourceMappingURL=app.js.map