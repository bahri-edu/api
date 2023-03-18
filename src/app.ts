import express, { Router } from "express";
import cors from "cors";
import { json } from "body-parser";
import { errorHandlerMiddleware, NotFoundError } from "@meemsd/common";
import "express-async-errors";
import { collegeRouter } from "./college";
import { newsRouter } from "./news";
import {
  historicalBackgroundRouter,
  visionMissionRouter,
  factAndFigureRouter,
  logoRouter,
  councilRouter,
} from "./university";
import {
  currentAdministrationRouter,
  viceChancellorMessageRouter,
} from "./administration";
import { eServiceRouter } from "./electronic-service";
import { contactRouter } from "./contact";
import { relatedSiteRouter } from "./related-site";

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

// administration routerd
app.use("/api/vice-chancellor-message", viceChancellorMessageRouter);
app.use("/api/current-administration", currentAdministrationRouter);

// electronic-service
app.use("/api/electronic-service", eServiceRouter);

app.use("/api/contact", contactRouter);
app.use("/api/related-site", relatedSiteRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandlerMiddleware);

export { app, port };
