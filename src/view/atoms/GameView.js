import CountryView from "./CountryView";

export default function GameView({ country1, country2 }) {
  return (
    <div>
      <div>
        <CountryView country={country1} />
      </div>
      <div>
        <CountryView country={country2} />
      </div>
    </div>
  );
}
