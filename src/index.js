import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";

const token = process.env.DISCORD_TOKEN;

if (!token) {
  throw new Error("Defina a variável de ambiente DISCORD_TOKEN antes de iniciar o bot.");
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

async function fetchPublicIp() {
  const response = await fetch("https://api.ipify.org?format=json");
  if (!response.ok) {
    throw new Error(`Falha ao buscar IP: ${response.status}`);
  }
  const data = await response.json();
  return data.ip;
}

client.once("ready", () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.trim() !== "!ip") return;

  try {
    const ip = await fetchPublicIp();
    const embed = new EmbedBuilder()
      .setColor(0x5865f2)
      .setTitle("🌐 IP Público do Servidor")
      .setDescription("Aqui está o IP público solicitado:")
      .addFields({ name: "Endereço IP", value: `\`${ip}\``, inline: false })
      .setThumbnail("https://cdn-icons-png.flaticon.com/512/126/126509.png")
      .setFooter({ text: "Solicitado via comando !ip" })
      .setTimestamp(new Date());

    await message.channel.send({ embeds: [embed] });
  } catch (error) {
    console.error("Erro ao responder !ip:", error);
    await message.channel.send(
      "Não consegui buscar o IP agora. Tente novamente em instantes."
    );
  }
});

client.login(token);
