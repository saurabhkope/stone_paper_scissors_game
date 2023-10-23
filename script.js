function makeChoice(userChoice) {
  const choices = ["stone", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const outcome = getOutcome(userChoice, computerChoice);
  const computerImage = document.getElementById("computerImage");
  const computerChoiceElement = document.querySelector(".computer_choice_option");
  
  if (outcome === "win") {
    computerImage.textContent = "😞";
  } else if (outcome === "lose") {
    computerImage.textContent = "🎉";
  } else {
    computerImage.textContent = "🤝";
  }
  
  computerChoiceElement.textContent = computerChoice; // Display computer's choice
  
  displayResult(outcome);
}
  
  function getOutcome(userChoice, computerChoice) {
    if (
      (userChoice === "stone" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "stone") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "win";
    } else if (userChoice === computerChoice) {
      return "draw";
    } else {
      return "lose";
    }
  }
  
  function displayResult(outcome) {
    const resultElement = document.querySelector(".outcome");
    let message;
  
    if (outcome === "win") {
      message = "You win!";
    } else if (outcome === "lose") {
      message = "You lose!";
    } else {
      message = "It's a draw!";
    }
  
    resultElement.textContent = message;
  }
