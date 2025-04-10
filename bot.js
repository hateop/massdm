const { Client, GatewayIntentBits, ActivityType, Events } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildPresences
  ],
  partials: ['CHANNEL']
});

client.once(Events.ClientReady, () => {
  console.log(`Ready on shard ${client.shard.ids[0]} as ${client.user.tag}`);
  client.user.setPresence({
    status: 'dnd',
    activities: [{
      name: 'Your bot status',
      type: ActivityType.Playing
    }]
  });
});

client.on(Events.MessageCreate, async message => {
  if (!message.guild || message.author.bot) return;

  const userId = message.author.id;
  if (userId !== 'owner id') return;

//To send dm to online users

  if (message.content === '!online') {
    await message.reply('Sending DMs...');
    client.guilds.cache.forEach(guild => {
      guild.members.fetch().then(members => {
        members.forEach(member => {
          if (
            member.presence &&
            ['online', 'dnd', 'idle', 'streaming'].includes(member.presence.status)
          ) {
            member.send("Message to send to online users")
              .then(() => console.log(`DM sent to ${member.user.tag}`))
              .catch(() => {});
          }
        });
      });
    });
  }

//To send message to offline members 

  if (message.content === '!offline') {
    await message.reply('Sending DMs...');
    client.guilds.cache.forEach(guild => {
      guild.members.fetch().then(members => {
        members.forEach(member => {
          if (!member.presence || member.presence.status === 'offline') {
            member.send("Your dm message for offline users.")
              .then(() => console.log(`DM sent to ${member.user.tag}`))
              .catch(() => {});
          }
        });
      });
    });
  }
});

client.login('Bot Token');
