const Intern = require('../lib/intern');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const inquirer = require('inquirer');
const fs = require('fs');
let internArray = [];
let managerArray = [];
let engineerArray = [];

function startMenu() {

    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add a team member, or exit application?",
            choices: ["Intern", "Manager", "Engineer", "Exit Application"],
            name: "userChoice"
        }
    ]).then(function ({ userChoice }) {
        switch (userChoice) {
            case "Manager":
                createManager();
                break;
            case "Intern":
                createIntern();
                break;
            case "Engineer":
                createEngineer();
                break;
            default:
                createHTML();


        }
    });
}
function createManager() {
    console.log("Add Manager")
    console.log("------------")
    inquirer.prompt([
        {
            type: "text",
            name: "employeeName",
            message: "Enter Employee name",


        },
        {
            type: "text",
            name: "employeeId",
            message: "Enter Employee id",

        },
        {
            type: "text",
            name: "employeeEmail",
            message: "Enter Employee email",

        },
        {
            type: "text",
            name: "officeNum",
            message: "Enter office number",

        }

    ]).then(function ({ employeeName, employeeId, employeeEmail, officeNum }) {
        var currentManager = new Manager(employeeName, employeeId, employeeEmail, officeNum);
        managerArray.push(currentManager);
        startMenu();
    })
}
function createIntern() {
    console.log("Add Intern")
    console.log("------------")
    inquirer.prompt([
        {
            type: "text",
            name: "employeeName",
            message: "Enter Employee name",


        },
        {
            type: "text",
            name: "employeeId",
            message: "Enter Employee id",

        },
        {
            type: "text",
            name: "employeeEmail",
            message: "Enter Employee email",

        },
        {
            type: "text",
            name: "school",
            message: "Enter school name",

        }

    ]).then(function ({ employeeName, employeeId, employeeEmail, school }) {
        var currentIntern = new Intern(employeeName, employeeId, employeeEmail, school);
        internArray.push(currentIntern);
        startMenu();
    })
}
function createEngineer() {
    console.log("Add Engineer")
    console.log("------------")
    inquirer.prompt([
        {
            type: "text",
            name: "employeeName",
            message: "Enter Employee name",


        },
        {
            type: "text",
            name: "employeeId",
            message: "Enter Employee id",

        },
        {
            type: "text",
            name: "employeeEmail",
            message: "Enter Employee email",

        },
        {
            type: "text",
            name: "github",
            message: "Enter GitHub username",

        }

    ]).then(function ({ employeeName, employeeId, employeeEmail, github }) {
        var currentEngineer = new Engineer(employeeName, employeeId, employeeEmail, github);
        engineerArray.push(currentEngineer);
        startMenu();
    });
};
function createHTML() {
    const employeeArray = [];
    let internTemplate = "";
    internArray.forEach(intern => {
    internTemplate =
            `
        <div class="Card">
            <h1>Intern</h1>
            <h4>${intern.name}</h4>
            <h4>${intern.id}</h4>
            <h4>${intern.email}</h4>
            <h4>${intern.school}</h4>
        </div>
        `;
        employeeArray.push(internTemplate);
    });
    console.log(employeeArray);
        let managerTemplate = "";
    managerArray.forEach(manager => {
    managerTemplate +=
            `
        <div class="Card">
            <h1>Manager</h1>
            <h4>${manager.name}</h4>
            <h4>${manager.id}</h4>
            <h4>${manager.email}</h4>
            <h4>${manager.officeNum}</h4>
        </div>    
        `;
        employeeArray.push(managerTemplate);
    });
    console.log(employeeArray);
     let engineerTemplate="";
    engineerArray.forEach(engineer => {
         engineerTemplate +=
            `
        <div class="Card">
            <h1>Engineer</h1>
            <h4>Name:${engineer.name}</h4>
            <h4>ID:${engineer.id}</h4>
            <h4>Email:${engineer.email}</h4>
            <h4>Github Name:${engineer.githubName}</h4>
        </div>
        `;
        employeeArray.push(engineerArray);
    });
    console.log(employeeArray);

    const HTMLTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Manager Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    </head>
    <body>
    <header class="bg-primary text-center">
    <h1>Team Profile Generator</h1>
    </header>
    <main class="d-flex">
    ${managerTemplate}
    ${internTemplate}
    ${engineerTemplate}
    </main>
    </body>
</html>
`;


    fs.writeFileSync("index.html", HTMLTemplate, (err) =>
        err ? console.log(err) : console.log('Success!!!')
    );
    console.log(HTMLTemplate)
};
startMenu();