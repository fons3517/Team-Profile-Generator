const Intern = require('../lib/intern');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const inquirer = require('inquirer');

function startMenu() {
    inquire.prompt([
        {
            type: "list",
            message: "Would you like to add a team member?",
            choices: ["Manager", "Intern", "Engineer", "Exit Application"],
            name: "userChoice"
        }
    ]).then(function({userChoice}){
        switch(userChoice) {
            case "Manager":
                createManager();
                break;
                case "Intern":
                    createIntern();
                    break;
                    case "Engineer":
                        createEngineer();
                        break;
        
    
        }
    });
}
