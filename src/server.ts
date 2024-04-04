import express from "express";
import app from "./app";
import { settings } from "./core/config/application";
import { logger } from "./core/utils/logger";
import { AppDataSource } from "./core/database/data-source";

app.use(express.json());

const startServer = async (): Promise<void> => {
    
    await AppDataSource.initialize();

    app.listen(settings.app_port, () => {
      logger.info(`
        ###############################################################
        ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️ App listening on port: ${settings.app_port} ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️
        ###############################################################
      `);
    });
};

startServer();
