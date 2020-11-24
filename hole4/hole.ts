function hashConfig(
  status: "OK" | "ERROR", pressure: number, speed: number,
  mileage: number, consumption: number, temperature: number) {
  return [
    status, pressure, speed, mileage, consumption, temperature
  ].join("|");
}
