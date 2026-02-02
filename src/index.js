const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const config = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`✅ Bot online como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.trim() !== "!ip") return;

  const embed = new EmbedBuilder()
    .setColor(0x9b59b6)
    .setTitle("🌐 IP Oficial do HyWar")
    .setDescription(
      "**Conecte-se agora!**\n\n" +
        `🔹 **IP:** \`${config.serverIP}\`\n` +
        "🔹 **Versão:** Hytale\n\n" +
        "⚔️ Domine reinos. Faça história."
    )
    .setFooter({ text: "HyWar • Guerra entre Reinos" })
    .setTimestamp();

  await message.channel.send({ embeds: [embed] });
});

client.login(config.token);
