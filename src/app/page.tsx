import Image from "next/image";
import PlayerSearch from "@/components/PlayerSearch";

export default function Home() {
  return (
    <div>
      <div className="md:flex items-center justify-between p-7">
        <div>
          <h1 className="pl-9 font-bold text-[36px] max-w-[400px]">
            Level up your fantasy team with FPL Analytics
          </h1>
          <p className="pl-9 font-bold text-[26px]">
            Every Goal, Assist, and Stat—All in One Place
          </p>
          <p className="pl-9 font-bold text-[19px]">
            Your Ultimate FPL Analytics Hub
          </p>
        </div>

        <img
          className="w-[400px] sm:w-[500px]"
          src="https://fantasy.premierleague.com/static/media/player-comp-5-2x.d02a3f06.png"
          alt="FPL Player Graphic"
        />
      </div>

      {/* 🔍 Add Player Search Below Hero */}
      <div className="mt-10 px-4">
        <PlayerSearch />
      </div>
    </div>
  );
}
