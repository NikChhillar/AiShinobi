"use client";

import { Heading } from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const rankingColors = [
  'bg-purple-300', 'bg-purple-200', 'bg-purple-100', // Purple shades
  'bg-blue-300', 'bg-blue-200', 'bg-blue-100',       // Blue shades
  'bg-green-300', 'bg-green-200', 'bg-green-100',    // Green shades
  'bg-orange-300', 'bg-orange-200', 'bg-orange-100', // Orange shades
  'bg-red-300', 'bg-red-200', 'bg-red-100',          // Red shades
];

const CharacterPage = () => {
  const [characterName, setCharacterName] = useState<string>("");
  const [animeName, setAnimeName] = useState<string>("");
  const [topCharacters, setTopCharacters] = useState<any[]>([]);

  // Load top characters from local storage
  useEffect(() => {
    const storedTopCharacters =
      JSON.parse(localStorage.getItem("topCharacters") || '[]');
    setTopCharacters(storedTopCharacters);
  }, []);

  // Update local storage when top characters change
  useEffect(() => {
    localStorage.setItem("topCharacters", JSON.stringify(topCharacters));
  }, [topCharacters]);

  const addCharacter = () => {
    if (
      characterName.trim() !== '' &&
      animeName.trim() !== '' &&
      characterName.length <= 35 &&
      animeName.length <= 35 &&
      topCharacters.length < 15
    ) {
      setTopCharacters([...topCharacters, { characterName, animeName }]);
      setCharacterName("");
      setAnimeName("");
    }
    else {
      alert(
        'Character name and anime name should not exceed 35 characters, and the list should have less than 15 characters.'
      );
    }
  };

  const removeCharacter = (index: number) => {
    const newTopCharacters = [...topCharacters];
    newTopCharacters.splice(index, 1);
    setTopCharacters(newTopCharacters);
  };

  const moveUp = (index: number) => {
    if (index > 0) {
      const newTopCharacters = [...topCharacters];
      [newTopCharacters[index - 1], newTopCharacters[index]] = [
        newTopCharacters[index],
        newTopCharacters[index - 1],
      ];
      setTopCharacters(newTopCharacters);
    }
  };

  const moveDown = (index: number) => {
    if (index < topCharacters.length - 1) {
      const newTopCharacters = [...topCharacters];
      [newTopCharacters[index], newTopCharacters[index + 1]] = [
        newTopCharacters[index + 1],
        newTopCharacters[index],
      ];
      setTopCharacters(newTopCharacters);
    }
  };

  const handleKeyDown = (e: { key: string; }) => {
    if (e.key === "Enter") {
      addCharacter();
    }
  };

  return (
    <div>
      <Heading
        title="Iconic Character Showcase"
        description="Explore Beloved Characters that Leave a Marks..."
        icon={UserIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="flex flex-col items-center justify-center">
        <div className=" py-4 px-2 md:p-8 w-full max-w-lg">
          <div className="mb-4 flex">
            <Input
              type="text"
              placeholder="Character..."
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              autoComplete="off"
              onKeyDown={handleKeyDown}
            />
            <Input
              type="text"
              placeholder="Anime..."
              value={animeName}
              onChange={(e) => setAnimeName(e.target.value)}
              autoComplete="off"
              onKeyDown={handleKeyDown}
              className="ml-2"
            />
            <Button
              onClick={addCharacter}
              className=" ml-2"
            >
              Add
            </Button>
          </div>
          {topCharacters.length === 0 ? (
            <div className="flex items-center justify-center h-40">
              <p className="text-gray-600">
                Your list is empty. Add your top characters!
              </p>
            </div>
          ) : (
            <table className="border-collapse border w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2 md:py-2 md:px-4">#</th>
                  <th className="border p-2 md:py-2 md:px-4">Character</th>
                  <th className="border p-2 md:py-2 md:px-4">Anime</th>
                  <th className="border p-2 md:py-2 md:px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {topCharacters.map((character, index) => (
                  <tr key={index} className={` ${rankingColors[index % rankingColors.length]}`}
                  >
                    <td className="border text-sm  p-2 md:py-2 md:px-4">{index + 1}</td>
                    <td className="border text-sm  p-2 md:py-2 md:px-4">{character.characterName}</td>
                    <td className="border text-sm p-2 md:py-2 md:px-4">{character.animeName}</td>
                    <td className="border-t p-2 md:py-2 md:px-4 flex items-center">
                      <button
                        onClick={() => moveUp(index)}
                        className="text-gray-600 mr-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4"
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
                          className="w-4 h-4"
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
                        onClick={() => removeCharacter(index)}
                        className="text-red-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4"
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
    </div>
  );
};

export default CharacterPage;
