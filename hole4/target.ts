interface Config {
  status: "OK" | "ERROR";
  pressure: number;
  speed: number;
  mileage: number;
  consumption: number;
  temperature: number;
}

function hashConfig(
  {status, pressure, speed, mileage, consumption, temperature}: Config) {
  return [
    status, pressure, speed, mileage, consumption, temperature
  ].join("|");
}
