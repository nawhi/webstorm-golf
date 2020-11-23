interface Config {
  status: "OK" | "ERROR";
  pressure: number;
  speed: number;
  mileage: number;
  consumption: number;
  temperature: number;
}

// Convert parameters to a single argument (Par: 10)
function hashConfig(
  {status, pressure, speed, mileage, consumption, temperature}: Config) {
  return [
    status, pressure, speed, mileage, consumption, temperature
  ].join("|");
}
