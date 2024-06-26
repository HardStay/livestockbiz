import Groq from "groq-sdk";
import "dotenv/config";
import {
  getPenjualanByJenisHewan,
  getJumlahHewanTerjual,
} from "./penjualanHewanTernakController.js";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const getAi = async (req, res) => {
  try {
    const { selectedAi } = req.body;
    const { tanggal } = req.body;
    const prompt = [];
    if (selectedAi === "PrediksiHarga") {
      const { jenisHewan } = req.body;
      const penjualan = await getPenjualanByJenisHewan(jenisHewan);
      prompt.push(
        "Generate a prediction of livestock prices based on recorded sales like the following:"
      );
      prompt.push(
        penjualan
          .map((p) => `Price: ${p.harga}, Date: ${p.tanggalPenjualan}`)
          .join("\n")
      );
      prompt.push(
        `Give me a prediction of livestock prices for ${tanggal}, give the lower limit price and final limit price and translate all your answer to Bahasa Indonesia`
      );
    } else if (selectedAi === "PrediksiPenjualanHarian") {
      const jumlahHewan = await getJumlahHewanTerjual();
      console.log(jumlahHewan);
      prompt.push(
        "Generate a sales prediction of livestock trend based on recorded sales like the following:"
      );
      prompt.push(
        jumlahHewan
          .map(
            (j) =>
              `Date: ${j.dataValues.tanggal}, Total: ${j.dataValues.jumlahTerjual}`
          )
          .join("\n")
      );
      prompt.push(
        `Give me a sales prediction of livestock for ${tanggal} and translate all your answer to Bahasa Indonesia`
      );
    }
    console.log(`Prompt received: ${prompt.join("\n")}`);
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt.join("\n"),
        },
      ],
      model: "llama3-70b-8192",
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
    });
    res.send(completion.choices[0].message.content);
  } catch (error) {
    console.error(error.message);
  }
};
