import TeamView from "./TeamView";

export default function GameView({ t1, t2 }) {
  return (
    <div>
      <div>
        <TeamView t={t1} />
      </div>
      <div>
        <TeamView t={t2} />
      </div>
    </div>
  );
}
