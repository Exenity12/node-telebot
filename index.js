import { adapterNode, BasicBot } from "telebot-lib";
import { token } from "./config.js";
import url from 'url';

//import fs from 'fs';
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '_simpleStorage.json');
// const fd = fs.readFileSync(filePath, 'utf-8');
// console.log(fd)

const settings = {
    token: token,
    botName: "botName",
    fileStoragePath: filePath,
  };

const bot = adapterNode(BasicBot, settings);
bot.start();