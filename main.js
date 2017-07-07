var inquirer = require("inquirer");

var BasicCard = require('./BasicCard.js');

var ClozeCard = require('./ClozeCard.js');

inquirer
  .prompt([
    {
      type: "list",
      message: "What type of flashcard do you want to create?",
      choices: ["Basic Card", "Cloze Card"],
      name: "flashcard"
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.flashcard === "Basic Card") {
      
      inquirer.prompt([
        {
         type: "input",
         message: "Please enter the front of your card:",
         name: "front"
        },
        {
         type: "input",
         message: "Please enter the back of your card:",
         name: "back"
        }
     ]).then(function(answers) {
     var firstPresident = new BasicCard(answers.front, answers.back);
     console.log("\n"); 
     console.log("The front of your basic flashcard: " + firstPresident.front);
     console.log("The back of your basic flashcard: " + firstPresident.back);
     })
      
    }
    else {
inquirer
  .prompt([
        {
         type: "input",
         message: "Please enter the full text:",
         name: "text"
        },
        {
         type: "input",
         message: "Please enter the cloze argument:",
         name: "cloze"
        }
     ]).then(function(answers) {
     var firstPresidentCloze = new ClozeCard(answers.text, answers.cloze);    
     console.log("\n");
     console.log("Text with clozed deletion removed: " + firstPresidentCloze.partial);
     
     })

    }
    
  });