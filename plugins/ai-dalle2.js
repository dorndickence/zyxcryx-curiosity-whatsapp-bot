import fetch from "node-fetch";

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `*⚠️ INGRESE UN TEXTO PARA CREAR UNA IMAGEN Y ASI USAR LA FUNCIÓN DE DALLE-E 2*\n\n❕ EJEMPLO\n*${
      usedPrefix + command
    }* gatitos llorando`;
  await conn.sendMessage(
    m.chat,
    { text: "*❗ REALIZANDO IMAGEN, AGUARDE UN MOMENTO.*" },
    { quoted: m }
  );
  try {
    const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
    const json1 = await tiores1.json();
    await conn.sendMessage(
      m.chat,
      { image: { url: json1.data } },
      { quoted: m }
    );
  } catch {
    console.log("⚠️ ERROR EN LA API NÚMERO 1 DE DALL-E 2.");
    try {
      let tiores2 = await conn.getFile(
        `https://vihangayt.me/tools/midjourney?q=${text}`
      );
      await conn.sendMessage(
        m.chat,
        { image: { url: tiores2.data } },
        { quoted: m }
      );
    } catch {
      console.log("⚠️ ERROR EN LA API NÚMERO 2 DE DALL-E 2.");
      try {
        let tiores3 = await fetch(
          `https://vihangayt.me/tools/lexicaart?q=${text}`
        );
        let json3 = await tiores3.json();
        await conn.sendMessage(
          m.chat,
          { image: { url: json3.data[0].images[0].url } },
          { quoted: m }
        );
      } catch {
        console.log("⚠️ ERROR EN LA API NÚMERO 3 DE DALL-E 2.");
        try {
          const tiores4 = await conn.getFile(
            `https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`
          );
          await conn.sendMessage(
            m.chat,
            { image: { url: tiores4.data } },
            { quoted: m }
          );
        } catch {
          console.log("⚠️ ERROR, NINGUNA API FUNCIONA.");
          throw `*⚠️ ERROR, NO SE OBTUVIERON RESULTADOS.*`;
        }
      }
    }
  }
};
handler.help = ["dall2"];
handler.tags = ["ai"];
handler.command = /^(dall2)/i;

export default handler;
