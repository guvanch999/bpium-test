const app = require("./app");

const PORT = process.env.PORT || 8474;
const server = app.listen(PORT, "0.0.0.0", async () => {
    console.log(`Server started and listening on port ${PORT}...`);
})

