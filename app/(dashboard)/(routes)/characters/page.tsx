"use client";

import { Heading } from "@/components/Heading";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CharacterPage = () => {
  const [characterName, setCharacterName] = useState("");
  const [animeName, setAnimeName] = useState("");
  const [topCharacters, setTopCharacters] = useState([]);

  // Load top characters from local storage
  useEffect(() => {
    const storedTopCharacters =
      JSON.parse(localStorage.getItem("topCharacters")) || [];
    setTopCharacters(storedTopCharacters);
  }, []);

  // Update local storage when top characters change
  useEffect(() => {
    localStorage.setItem("topCharacters", JSON.stringify(topCharacters));
  }, [topCharacters]);

  const addCharacter = () => {
    if (
      characterName.trim() !== "" &&
      animeName.trim() !== "" &&
      topCharacters.length < 15
    ) {
      setTopCharacters([...topCharacters, { characterName, animeName }]);
      setCharacterName("");
      setAnimeName("");
    }
  };

  const removeCharacter = (index) => {
    const newTopCharacters = [...topCharacters];
    newTopCharacters.splice(index, 1);
    setTopCharacters(newTopCharacters);
  };

  const moveUp = (index) => {
    if (index > 0) {
      const newTopCharacters = [...topCharacters];
      [newTopCharacters[index - 1], newTopCharacters[index]] = [
        newTopCharacters[index],
        newTopCharacters[index - 1],
      ];
      setTopCharacters(newTopCharacters);
    }
  };

  const moveDown = (index) => {
    if (index < topCharacters.length - 1) {
      const newTopCharacters = [...topCharacters];
      [newTopCharacters[index], newTopCharacters[index + 1]] = [
        newTopCharacters[index + 1],
        newTopCharacters[index],
      ];
      setTopCharacters(newTopCharacters);
    }
  };

  const handleKeyDown = (e) => {
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
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Top Characters</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Character Name"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            className="border p-2 mr-2"
            onKeyDown={handleKeyDown}
          />
          <input
            type="text"
            placeholder="Enter Anime Name"
            value={animeName}
            onChange={(e) => setAnimeName(e.target.value)}
            className="border p-2"
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={addCharacter}
            className="bg-blue-500 text-white px-4 py-2 ml-2"
          >
            Add Character
          </button>
        </div>
        {topCharacters.length === 0 ? (
          <div className="flex items-center justify-center h-40">
            <p className="text-gray-600">
              Your list is empty. Add your top characters!
            </p>
          </div>
        ) : (
          <table className="border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">#</th>
                <th className="border p-2">Character Name</th>
                <th className="border p-2">Anime Name</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {topCharacters.map((character, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{character.characterName}</td>
                  <td className="border p-2">{character.animeName}</td>
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
                      onClick={() => removeCharacter(index)}
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

export default CharacterPage;
