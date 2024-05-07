import express from "express";
import app from "./app";
import { settings } from "./core/config/application";
import { logger } from "./core/utils/logger";
import { AppDataSource } from "./core/datasource/data-source";

app.use(express.json());

const startServer = async (): Promise<void> => {
  AppDataSource.initialize()
  .then(() => {
    logger.info("Connected to the database!")
  })
  .catch((error) => logger.error(error.message))

    app.listen(settings.app_port, () => {
      logger.info(`
        ###############################################################
        ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️ App listening on port: ${settings.app_port} ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️
        ###############################################################
      `);
    });
};

startServer();
