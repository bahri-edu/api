import express, { Router } from "express";
import cors from "cors";
import { json } from "body-parser";
import { errorHandlerMiddleware, NotFoundError } from "@meemsd/common";
import "express-async-errors";
import { collegeRouter } from "./college";
import { newsRouter } from "./news";

//university module
import {
  historicalBackgroundRouter,
  visionMissionRouter,
  factAndFigureRouter,
  logoRouter,
  councilRouter,
  uploadFileRouter,
} from "./university";

//administration module
import {
  currentAdministrationRouter,
  universityAdministrationRouter,
  viceChancellorMessageRouter,
} from "./administration";

//others module
import { eServiceRouter } from "./electronic-service";
import { contactRouter } from "./contact";
import { relatedSiteRouter } from "./related-site";
import {
  deanshipAdministrationRouter,
  deanshipDepartmentRouter,
  deanshipRouter,
  deanshipStudentServiceRouter,
} from "./deanship";
import { staffRouter } from "./staff";

const app = express();
const port = 4000;

app.use(json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from dashboard api");
});

//
app.use("/api/colleges", collegeRouter);
app.use("/api/news", newsRouter);

// university rouert group
app.use("/api/vision-mission", visionMissionRouter);
app.use("/api/historical-background", historicalBackgroundRouter);
app.use("/api/fact-and-figure", factAndFigureRouter);
app.use("/api/logo", logoRouter);
app.use("/api/council", councilRouter);
app.use("/api/upload-files", uploadFileRouter);

// administration routerd
app.use("/api/vice-chancellor/message", viceChancellorMessageRouter);
app.use("/api/current-administration", currentAdministrationRouter);
app.use("/api/university-administration", universityAdministrationRouter);

// electronic-service
app.use("/api/electronic-service", eServiceRouter);

app.use("/api/contact", contactRouter);
app.use("/api/related-site", relatedSiteRouter);

// deanship
app.use("/api/deanship", deanshipRouter);
app.use("/api/deanship-administration", deanshipAdministrationRouter);
app.use("/api/deanship-student-service", deanshipStudentServiceRouter);
app.use("/api/deanship-department", deanshipDepartmentRouter);

//staff

app.use("/api/staff", staffRouter);
app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandlerMiddleware);

export { app, port };
