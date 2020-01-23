const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

class teamViewer {
    confirmManager() {
        inquirer
        .prompt([
            {
                type: "confirm"
                , message: "Are you a manager?"
                , name: "managerConfirm"
            }
        ]).then(res => {
            if (res.managerConfirm) {
                this.createManager()
            } else {
                console.log("Sorry, only managers can configure a team.")
                process.exit(0);
            }
        })
};

        createManager() {
            inquirer
            .prompt([
                {
                   type: "input"
                   , message: "Please enter your name"
                   , name: "managerName"
                },
                {
                   type: "input"
                   , message: "Please enter your ID number"
                   , name: "managerID"
                },
                {
                   type: "input"
                   , message: "Please enter your office phone number"
                   , name: "managerPhone"
                },
                {
                   type: "input"
                   , message: "Please enter your email"
                   , name: "managerEmail"
                },
            ]).then(res => {
                const manager = new Manager(res.managerName, res.managerID, res.managerEmail, res.managerPhone);
                team.push(manager);
                this.createTeam();
            });
    };

        createTeam() {
            inquirer
            .prompt([
                {
                    type: "input"
                    , message: "Please enter the engineer's name"
                    , name: "engineerName"
                },
                {
                    type: "input"
                    , message: "Please enter the engineer's ID number"
                    , name: "engineerID"
                },
                {
                    type: "input"
                    , message: "Please enter the engineer's GitHub"
                    , name: "engineerPhone"
                },
                {
                    type: "input"
                    , message: "Please enter the engineer's email"
                    , name: "engineerEmail"
                },
            ]).then(res => {
                const engineer = new Engineer(res.engineerName, res.engineerID, res.engineerEmail, res.engineerPhone);
                team.push(engineer);
                this.createTeam();
            });
    };
        createIntern() {
            inquirer
            .prompt([
                {
                    type: "input"
                    , message: "Please enter the intern's name"
                    , name: "internName"
                },
                {
                    type: "input"
                    , message: "Please enter the intern's ID number"
                    , name: "internID"
                },
                {
                    type: "input"
                    , message: "Please enter the intern's school"
                    , name: "internSchool"
                },
                {
                    type: "input"
                    , message: "Please enter the intern's email"
                    , name: "internEmail"
                },
            ]).then(res => {
                const intern = new Intern(res.internName, res.internID, res.internEmail, res.internSchool);
                team.push(intern);
                this.createTeam();
            });
        }
 }
     