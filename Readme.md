# 🚀 Mass DM  Discord Bot

A **supercharged**, **ultra-fast**, sharded Mass DM bot built on **Discord.js v14**. Designed for performance at scale, this bot uses **10 shards** to blast messages to users based on their **presence status** across multiple servers—perfect for community-wide alerts, pings, and presence-based messages.

> This project is intended **for educational purposes only**. Misuse may result in violation of Discord’s Terms of Service.

---

## 🌐 GitHub Repository

[https://github.com/hateop/massdm/tree/main](https://github.com/hateop/massdm/tree/main)



## ✅ Features

- Blazing-fast DM delivery using Discord's Sharding API
- Two powerful commands: `!online` and `!offline`
- Presence-aware filtering:
  - `!online`: Sends DMs to `online`, `idle`, `dnd`
  - `!offline`: Sends DMs to users who are `offline`
- Customized bot status (Playing `.gg/faasle`)
- Fully scalable for large communities
- Only executes for a specific owner ID
- Silent error handling (e.g. for closed DMs or blocks)

---

## 🧠 Usage Example

### Bot Status:
```
Playing .gg/faasle
```

### Command Usage:
- `!online` → DMs all online users
- `!offline` → DMs all offline users  
(*Only usable by your Discord ID*)

---

## 🛠️ Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/hateop/massdm.git
cd massdm
```

### 2. Install Dependencies

```bash
npm install discord.js
```

---

## ⚙️ Files You Must Configure

### `shard.js`

```js
const manager = new ShardingManager('./bot.js', {
  totalShards: 10,
  token: 'YOUR_BOT_TOKEN', // CHANGE THIS
});
```

Replace:
```js
'YOUR_BOT_TOKEN'
```
with your **Discord bot token** from the [Developer Portal](https://discord.com/developers/applications).

---

### `bot.js`

```js
if (userId !== 'YOUR_DISCORD_USER_ID') return;
```
Replace:
```js
'YOUR_DISCORD_USER_ID'
```
with **your actual Discord user ID** to restrict access to DM commands.

---

```js
client.user.setPresence({
  status: 'dnd',
  activities: [{
    name: '.gg/faasle', // CHANGE THIS
    type: ActivityType.Playing
  }]
});
```
Change `.gg/faasle` to your **custom bot status** if desired.

---

```js
member.send("Your DM message") // CHANGE THIS
```
Replace with your **custom DM message** to be sent to users.

---

## ▶️ Run the Bot

```bash
node shard.js
```

You should see:

```
Shard 0 is ready!!
Shard 1 is ready!!
...
DM sent to User#1234
DM sent to User#5678
```

---

## ❗ Requirements

- Enable `MESSAGE CONTENT`, `GUILD MEMBERS`, and `PRESENCE INTENTS` in the [Discord Developer Portal](https://discord.com/developers/applications)
- The bot must share a server with users
- Users must have DMs enabled from server members

---

## 🤝 Support

For help or questions, DM **omkar.dxddy** on Discord.

---

## ⚠️ Disclaimer

> This project is strictly for **educational purposes only**.  
> You are solely responsible for how you use it.  
> Do **NOT** violate [Discord Terms of Service](https://discord.com/terms).  
> The creator holds no responsibility for any misuse.

---

## 📄 License

MIT License
