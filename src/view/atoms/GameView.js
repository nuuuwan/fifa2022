import CountryView from "./CountryView";

const STYLE_GAME = {
  border: "1px gray solid",
  borderRadius: 6,
  padding: 6,
  margin: 6,
};

export default function GameView({ country1, country2 }) {
  return (
    <div style={STYLE_GAME}>
      <div>
        <CountryView country={country1} />
      </div>
      <div>
        <CountryView country={country2} />
      </div>
    </div>
  );
}
