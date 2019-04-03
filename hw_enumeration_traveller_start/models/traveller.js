const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter( (journey) => {
    if ( journey.transport === transport ){
      return true;
    };
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter( (journey) => {
    if ( journey.distance >= minDistance ){
      return true;
    };
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const journeyDistances = this.journeys.map((journey) => {
    return journey.distance;
  });
  const totalDistance = journeyDistances.reduce( (sum, num) => {
    return sum + num;
  });
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let transportModes = this.journeys.map((journey) => {
    return journey.transport;
  });
  let uniqueList = [...new Set(transportModes)];
  return uniqueList;
};


module.exports = Traveller;
