const app = require("./src/app");

const PORT = 3055

const server = app.listen(PORT, () => {
    console.log(`Web service e-commerce start with ${PORT}`)
})

// process.on('SIGINT', () => {
//     server.close(() => console.log(`Exit Server Epress`))
//     // notify.send(ping...)
// })