import Simulate from "../../nonview/core/Simulate";

export default function HomePage() {
  const simulationResults = Simulate.random();
  return JSON.stringify(simulationResults);
}
