window.addEventListener("load", function () {
  let listedPlanets;
  let listedPlanetsResponse = myFetch();

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      let chosenPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        chosenPlanet.name,
        chosenPlanet.diameter,
        chosenPlanet.star,
        chosenPlanet.distance,
        chosenPlanet.moons,
        chosenPlanet.image
      );
    });

  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    pilotInput = document.querySelector("input[name=pilotName]");
    pilotValue = pilotInput.value;
    copilotInput = document.querySelector("input[name=copilotName]");
    copilotValue = copilotInput.value;
    fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    fuelLevelValue = fuelLevelInput.value;
    cargoLevelInput = document.querySelector("input[name=cargoMass]");
    cargoLevelValue = cargoLevelInput.value;

    let list = document.getElementById("faultyItems");
    formSubmission(
      document,
      list,
      pilotValue,
      copilotValue,
      fuelLevelValue,
      cargoLevelValue
    );
  });
});
