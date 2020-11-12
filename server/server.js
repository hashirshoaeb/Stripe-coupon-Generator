const app = require(`${__dirname}/app.js`);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App RUNNING on PORT: ${PORT}`));