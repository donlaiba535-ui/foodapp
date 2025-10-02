console.log("atm")

const users = [
    {
        id:1,
        username: "umer",
        password:"1234",
        balance:1234
    },
    {
        id:2,
        username: "",
        password: "4321",
        balance: 2222,
    },
    {
        id:3,
        username:"noor",
        password: "1111",
        balance: 1111,
    },
]
(async () => {
    let id = +await q("ID: ");
    let user = users.find(x => x.id === id);

    if (!user) {
        console.log("User nahi mila");
        return rl.close();
    }

    let pass = await q("Password: ");
    if (pass !== user.password) {
        console.log("Wrong password");
        return rl.close();
    }

    console.log(`Welcome ${user.username}`);

    while (true) {
        let opt = await q("1 - Balance  2 - Exit: ");
        if (opt === "1") {
            console.log("Balance:", user.balance);
        } else {
            break;
        }
    }

    rl.close();
})();