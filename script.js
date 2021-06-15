let userInputs;

window.addEventListener("load", function () {
   let form = document.querySelector("form");
   userInputs = document.querySelectorAll("input");

   // Form Submission
   form.addEventListener("submit", function (event) {

      // Don't refresh page
      event.preventDefault();

      let isValid = inputValidation();
      if (isValid) {
         updateShuttle();
      }
   });
});

function inputValidation() {
   let missingInput = false;
   let missingString = false;
   let missingNum = false;
   let isValid = true;

   // Check each input for missing value
   userInputs.forEach(function (input) {
      if (input.value === "") {
         missingInput = true;
      }
   });

   // Alert if missing input or invalid input type
   if (missingInput) {
      alert("All fields are required.");
   } else if (typeof userInputs[0].value !== "string" || typeof userInputs[1].value !== "string") {
      alert("Please enter a name for Pilot Name and Co-pilot Name.");
      missingString = true;
   } else if (isNaN(userInputs[2].value) || isNaN(userInputs[3].value)) {
      alert("Please enter a number for Fuel Level and Cargo Mass.");
      missingNum = true;
   }

   // If any parts aren't valid
   if (missingInput === true || missingString === true || missingNum === true) {
      isValid = false;
   }

   return isValid;
}

function updateShuttle() {
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let launchStatus = document.getElementById("launchStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   // Add names to pilotStatus & copilotStatus
   pilotStatus.innerHTML = `Pilot ${userInputs[0].value} is ready.`;
   copilotStatus.innerHTML = `Co-Pilot ${userInputs[1].value} is ready.`;

   // Update status if fuel level is too low
   if (userInputs[2].value < 10000) {
      faultyItems.style = "visibility: visible";
      fuelStatus.innerHTML = "Fuel level too low for journey";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style = "color: red";
   }

   // Update status if cargo weight is too heavy 
   if (userInputs[3].value > 10000) {
      faultyItems.style = "visibility: visible";
      cargoStatus.innerHTML = "Cargo mass too high to take off";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style = "color: red";
   }

   // Shuttle is ready for launch
   if (userInputs[2].value > 10000 && userInputs[3].value < 10000) {
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style = "color: green";
      fuelStatus.innerHTML = "Fuel level high enough for launch";
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
   }
}