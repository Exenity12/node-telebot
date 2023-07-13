import { adapterNode, BasicBot, BasicBotQuestion } from "telebot-lib";
import { token } from "./config.js";
import url from 'url';

import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '_simpleStorage.json');

const settings = {
    token: token,
    botName: "botName",
    fileStoragePath: filePath,
  };

// const bot = adapterNode(BasicBot, settings);
// bot.start();
const bot = adapterNode(BasicBotQuestion, settings);
bot.start();