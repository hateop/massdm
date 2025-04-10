const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', {
  totalShards: 10,
  token: 'Token of bot',
});

manager.on('shardCreate', shard => {
  console.log(`Shard ${shard.id} is ready!!`);
});

manager.spawn();
