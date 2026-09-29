# Welcome to flight service

# Project Setup
- Clone the project on your local
- Execute `npm install` on the same path as your root diretory of the download
- Create the `.env` file in your root directory and add the the following environment variables:
    - `PORT=3000`
    - `SYNC_DB=true` (inorder to sync the database for association and then remove it later)
- Inside the `config` folder, create a new file `config.json` and add the following piece of json

```

{
    "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```

```
- Once you have added the db config as listed above, go to the src folder and execute `npx sequelize db:create`
and then execute
`npx sequelize db:migrate`

```

## DB Design
    - Airplane Table
    - Flight
    - City
    - Airport

    - A flight only belongs to one airplane but an airplane can have multiple flights
    - A city has many airports but an airport belongs to one city
    - One airport can have multiple flights, but a flight belongs to one airport 

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
  Relationship -> City has many airports and airport belongs to a city (one to many)