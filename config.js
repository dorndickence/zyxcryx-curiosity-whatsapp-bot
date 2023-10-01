import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import fs from "fs";
import cheerio from "cheerio";
import fetch from "node-fetch";
import axios from "axios";
import path, { join } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import moment from "moment-timezone";
import { platform } from "process";
global.__filename = function filename(
  pathURL = import.meta.url,
  rmPrefix = platform !== "win32"
) {
  return rmPrefix
    ? /file:\/\/\//.test(pathURL)
      ? fileURLToPath(pathURL)
      : pathURL
    : pathToFileURL(pathURL).toString();
};
global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
};
global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};
const __dirname = global.__dirname(import.meta.url);

global.owner = [
  ["51955715506", "Julius A. Sauco", true],
  ["51904264739"],
  ["3197010266380"],
  ["51904354571"],
];

global.animxscans = ["400359205"];
global.suittag = ["994400359205"];
global.mods = [];
global.prems = [];

global.packname = "Stickers Zycryx ChatBot";
global.author = " Z\n Y\n X";
global.wm = "© ZycryxChatBotAI";
global.wm2 = "Zycryx : 𝗕𝗈𝗍";
global.azami = "JuliusSauco";
global.cb = "ZycryxChatBotAI";

global.vs = "1.0.2";
global.library = "Baileys";
global.baileys = "@whiskeysockets/baileys";
global.lenguaje = "Español";
global.menudi = ["⛶", "❏", "⫹⫺"];
global.dev = "51955715506";

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.yellow("Se actualizo el archivo config.js"));
  import(`${file}?update=${Date.now()}`);
});
