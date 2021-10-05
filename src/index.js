const Intern = require('../lib/intern');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const inquirer = require('inquirer');
let internArray = [];
let managerArray = [];
let engineerArray = [];


function startMenu() {

    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add a team member?",
            choices: ["Manager", "Intern", "Engineer", "Exit Application"],
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

    ]).then(function({employeeName, employeeId, employeeEmail, officeNum}){
        var currentManager = new Manager(employeeName, employeeId, employeeEmail, officeNum);
        managerArray.push(currentManager);
        startMenu();
    })
}
startMenu();