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
  ["254710770837", "Dorn Dickence", true],
  [""],
  [""],
  [""],
];

global.animxscans = ["254710770837"];
global.suittag = ["254710770837"];
global.mods = ["254710770837"];
global.prems = ["254710770837"];

global.packname = "Stickers Dorn ChatBot";
global.author = " D\n O\n R\n N";
global.wm = "© DornChatBotAI";
global.wm2 = "Dorn : 𝗕𝗈𝗍";
global.azami = "DORN";
global.cb = "DornChatBotAI";

global.vs = "1.0.2";
global.library = "Baileys";
global.baileys = "@whiskeysockets/baileys";
global.lenguaje = "Enlish";
global.menudi = ["⛶", "❏", "⫹⫺"];
global.dev = "254710770837";

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.yellow("Se actualizo el archivo config.js"));
  import(`${file}?update=${Date.now()}`);
});
