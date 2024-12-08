import 'dotenv/config'
import app from "./app"

import config from "./config/index";

const { PORT } = config;

async function startServer() {

    app.listen(PORT, () => {
        console.log("Server Started");
    })

}

startServer()