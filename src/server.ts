import app from "./app";
import { settings } from "./core/config/application";
import { logger } from "./core/utils/logger";

const startServer = async (): Promise<void> => {
    app.listen(settings.app_port, () => {
        logger.info(`
            ###############################################################
            ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️ App listening on port: ${settings.app_port} ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️
            ###############################################################
            `);
      });
};

startServer();
