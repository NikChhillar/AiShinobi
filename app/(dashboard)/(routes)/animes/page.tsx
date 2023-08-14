"use client";

import { Heading } from "@/components/Heading";
import { VideoIcon } from "lucide-react";
import { useEffect, useState } from "react";

const AnimePage = () => {
  const [animeName, setAnimeName] = useState<string>("");
  const [topAnimes, setTopAnimes] = useState<string[]>([]);

  // Load top animes from local storage
  useEffect(() => {
    const storedTopAnimes = JSON.parse(
      localStorage.getItem("topAnimes") || "[]"
    );
    setTopAnimes(storedTopAnimes);
  }, []);

  // Update local storage when top animes change
  useEffect(() => {
    localStorage.setItem("topAnimes", JSON.stringify(topAnimes));
  }, [topAnimes]);

  const addAnime = () => {
    if (animeName.trim() !== "" && topAnimes.length < 15) {
      setTopAnimes([...topAnimes, animeName]);
      setAnimeName("");
    } else {
      alert(`Can't add more`);
    }
  };

  const removeAnime = (index: number) => {
    const newTopAnimes = [...topAnimes];
    newTopAnimes.splice(index, 1);
    setTopAnimes(newTopAnimes);
  };

  const moveUp = (index: number) => {
    if (index > 0) {
      const newTopAnimes = [...topAnimes];
      [newTopAnimes[index - 1], newTopAnimes[index]] = [
        newTopAnimes[index],
        newTopAnimes[index - 1],
      ];
      setTopAnimes(newTopAnimes);
    }
  };

  const moveDown = (index: number) => {
    if (index < topAnimes.length - 1) {
      const newTopAnimes = [...topAnimes];
      [newTopAnimes[index], newTopAnimes[index + 1]] = [
        newTopAnimes[index + 1],
        newTopAnimes[index],
      ];
      setTopAnimes(newTopAnimes);
    }
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      addAnime();
    }
  };

  return (
    <div>
      <Heading
        title="Top 15 Anime Curation"
        description="Craft Your Definitive List of Anime Favorites..."
        icon={VideoIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Top 15 Animes</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Anime Name"
            value={animeName}
            onChange={(e) => setAnimeName(e.target.value)}
            className="border p-2"
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={addAnime}
            className="bg-blue-500 text-white px-4 py-2 ml-2"
          >
            Add Anime
          </button>
        </div>
        {topAnimes.length === 0 ? (
          <div className="flex items-center justify-center h-40">
            <p className="text-gray-600">
              Your list is empty. Add your top animes!
            </p>
          </div>
        ) : (
          <table className="border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">#</th>
                <th className="border p-2">Anime Name</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {topAnimes.map((anime, index) => (
                <tr key={anime} className="hover:bg-gray-100">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{anime}</td>
                  <td className="border p-2 flex items-center">
                    <button
                      onClick={() => moveUp(index)}
                      className="text-gray-600 mr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        ></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => moveDown(index)}
                      className="text-gray-600 mr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        ></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => removeAnime(index)}
                      className="text-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AnimePage;
