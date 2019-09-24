module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    'ac013f5cdf23e0d31b4b84b94d0ed695f9ebc077293967d52c6bb794e51f5887',
  SECRET:
    process.env.SECRET ||
    '4b20a4bcb044eccdea5d460a78b2977e9d7092acf5506e477e41ea1807c689ab',
  CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000'
};
