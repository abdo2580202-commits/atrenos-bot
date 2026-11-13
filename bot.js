const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'ArabCraft123.aternos.me',
    port: 30812,
    username: 'dream',
    version: '1.21.4'
  });

  bot.on('spawn', () => {
    console.log('اللاعب dream دخل السيرفر!');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 20000);
  });

  bot.on('end', () => {
    console.log('فصل، جاري إعادة الاتصال...');
    setTimeout(createBot, 5000);
  });

  bot.on('kicked', console.log);
  bot.on('error', err => console.log(err.message));
}

createBot();
