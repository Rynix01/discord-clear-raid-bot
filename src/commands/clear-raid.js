const {
  EmbedBuilder,
  PermissionsBitField,
  Colors,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  PermissionFlagsBits,
} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear-raid")
    .setDescription("It cleans the traces of the raid on your server.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
      .setTitle("Rynix Clear Raid Bot")
      .setDescription(
        "Hey man, I heard the server got raided. That's why I'm here. Now I'm going to delete all channels and roles, do you know and confirm that there is no going back?"
      )
      .setColor(Colors.Red);
    const approve = new ButtonBuilder()
      .setLabel("Approve")
      .setEmoji("✅")
      .setStyle(ButtonStyle.Success)
      .setCustomId("approve");
    const row = new ActionRowBuilder().addComponents(approve);
    interaction
      .reply({ embeds: [embed], components: [row], ephemeral: true })
      .catch(() => {});
  },
};
