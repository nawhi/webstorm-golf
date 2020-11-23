// Convert to a single parameter object (Par: TODO)
function hash(
  status: "OK" | "ERROR", pressure: number, speed: number,
  mileage: number, consumption: number, temperature: number) {
  return [
    status, pressure, speed, mileage, consumption, temperature
  ].join("|");
}
