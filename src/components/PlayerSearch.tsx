"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Player {
  player_id: number;
  name: string;
  team: string;
  position: string;
}

interface PlayerSearchProps {
  onSelect?: (player: Player) => void;
  placeholder?: string;
}

const PlayerSearch: React.FC<PlayerSearchProps> = ({
  onSelect,
  placeholder,
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Player[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const fetchPlayers = async () => {
      try {
        const res = await fetch(`/api/playerSearch?search=${query}`);
        const data = await res.json();
        setResults(data.players || []);
        setShowDropdown(true);
      } catch (err) {
        console.error("Failed to fetch players", err);
      }
    };

    const delayDebounce = setTimeout(fetchPlayers, 300);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (player: Player) => {
    if (onSelect) {
      onSelect(player);
    } else {
      router.push(`/player/${player.player_id}`);
    }
    setShowDropdown(false);
    setQuery("");
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder || "Search for a player..."}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowDropdown(true);
        }}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
      />

      {showDropdown && results.length > 0 && (
        <ul className="absolute z-10 w-full text-black bg-white border border-gray-200 rounded-md mt-1 max-h-60 overflow-y-auto shadow-md">
          {results.map((player) => (
            <li
              key={player.player_id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(player)}
            >
              {player.name} – {player.team} ({player.position})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlayerSearch;
