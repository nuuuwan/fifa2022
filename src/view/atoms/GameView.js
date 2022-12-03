import CountryView from "./CountryView";

const STYLE_GAME = {
  border: "1px gray solid",
  borderRadius: 6,
  padding: 6,
  margin: 6,
};

export default function GameView({ country1, country2, winner }) {
  return (
    <div style={STYLE_GAME}>
      <div>
        <CountryView country={country1} isWinner={winner === country1} />
      </div>
      <div>
        <CountryView country={country2} isWinner={winner === country2} />
      </div>
    </div>
  );
}
