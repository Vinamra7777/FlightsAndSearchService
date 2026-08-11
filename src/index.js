const CityRepository = require("./repository/city-repository");
const express = require("express");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {

    const app = express();

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);

        const cityRepository = new CityRepository();

        const city = await cityRepository.createCity({
            name: "Delhi"
        });

        console.log(city);
    });
};

setupAndStartServer();