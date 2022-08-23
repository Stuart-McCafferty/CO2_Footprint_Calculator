use co2_app_users;
db.dropDatabase();

db.app_users.insertMany([
    {
        name: "Andy",
        location: "Edinburgh",
        transport: 4.3,
        food: 198,
        travel: 631,
        score: 831.5
    },
    {
        name: "Hideo",
        location: "Tokyo",
        transport: 2,
        food: 232,
        travel: 298,
        score: 532
    },
    {
        name: "David",
        location: "London",
        transport: 7,
        food: 174,
        travel: 200,
        score: 441
    },
    {
        name: "Jayson",
        location: "Boston, MA",
        transport: 10,
        food: 298,
        travel: 430,
        score: 742.5
    },
    {
        name: "Marie",
        location: "Paris",
        transport: 12,
        food: 400,
        travel: 224,
        score: 664
    },
    {
        name: "Chen",
        location: "Beijing",
        transport: 15,
        food: 78,
        travel: 309,
        score: 502
    },
    {
        name: "Monica",
        location: "Rome",
        transport: 3.7,
        food: 402,
        travel: 232,
        score: 792
    },
    {
        name: "Don",
        location: "Madrid",
        transport: 3,
        food: 233,
        travel: 144,
        score: 958.5
    }
])