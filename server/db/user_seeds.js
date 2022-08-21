use co2_app_users;
db.dropDatabase();

db.app_users.insertMany([
    {
        name: "Andy",
        location: "Edinburgh",
        score: 831.5
    },
    {
        name: "Hideo",
        location: "Tokyo",
        score: 532
    },
    {
        name: "David",
        location: "London",
        score: 441
    },
    {
        name: "Jayson",
        location: "Boston, MA",
        score: 742.5
    },
    {
        name: "Marie",
        location: "Paris",
        score: 664
    },
    {
        name: "Chen",
        location: "Beijing",
        score: 502
    },
    {
        name: "Monica",
        location: "Rome",
        score: 792
    },
    {
        name: "Don",
        location: "Madrid",
        score: 958.5
    }
])