import UserModel from "../lib/models/user.models";
import { connectToDB } from "../lib/mongoose";
import * as pc from "picocolors";

const prompt = require("prompt-sync")();

class CreateAdmin {
    private name: string = "";
    private email: string = "";
    private password: string = "";

    constructor() {
        connectToDB();
        this.name = prompt("Enter your name: ");
        this.email = prompt("Enter your email: ");
        this.password = prompt("Enter your password: ");
    }

    async CreateAdminUser() {
        const oldUser = await UserModel.findOne({
            email: this.email,
            name: this.name,
            role: "admin",
        });

        if (oldUser) {
            console.log(pc.red("User already exists"));
            return;
        }

        try {
            await UserModel.create({
                email: this.email,
                name: this.name,
                role: "admin",
                password: this.password,
            });
            console.log(pc.green("Successfully created admin user."));
            return;
        } catch (error) {
            console.log(pc.red("Error creating admin user"));
            return;
        }
    }
}

async function Run() {
    const admin = new CreateAdmin();
    await admin.CreateAdminUser();
    process.exit(0);
}

Run();