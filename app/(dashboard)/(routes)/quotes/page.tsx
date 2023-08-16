"use client";

import { Heading } from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { QuoteIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const rankingColors = [
  'bg-purple-300', 'bg-purple-200', 'bg-purple-100', // Purple shades
  'bg-blue-300', 'bg-blue-200', 'bg-blue-100',       // Blue shades
  'bg-green-300', 'bg-green-200', 'bg-green-100',    // Green shades
  'bg-orange-300', 'bg-orange-200', 'bg-orange-100', // Orange shades
  'bg-red-300', 'bg-red-200', 'bg-red-100',          // Red shades
];

const QuotePage = () => {
  const [quote, setQuote] = useState<string>("");
  const [quoteSource, setQuoteSource] = useState<string>("");
  const [topQuotes, setTopQuotes] = useState<any[]>([]);

  const { toast } = useToast()

  // Load top quotes from local storage
  useEffect(() => {
    const storedTopQuotes = JSON.parse(
      localStorage.getItem("topQuotes") || "[]"
    );
    setTopQuotes(storedTopQuotes);
  }, []);

  // Update local storage when top quotes change
  useEffect(() => {
    localStorage.setItem("topQuotes", JSON.stringify(topQuotes));
  }, [topQuotes]);

  const addQuote = () => {
    if (
      quote.trim() !== "" &&
      quoteSource.trim() !== "" &&
      topQuotes.length < 15
    ) {
      setTopQuotes([...topQuotes, { quote, quoteSource }]);
      setQuote("");
      setQuoteSource("");
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: 'Possible reasons: Either list is full Or input field is empty..'

      })
    }
  };

  const removeQuote = (index: number) => {
    const newTopQuotes = [...topQuotes];
    newTopQuotes.splice(index, 1);
    setTopQuotes(newTopQuotes);
  };

  const moveUp = (index: number) => {
    if (index > 0) {
      const newTopQuotes = [...topQuotes];
      [newTopQuotes[index - 1], newTopQuotes[index]] = [
        newTopQuotes[index],
        newTopQuotes[index - 1],
      ];
      setTopQuotes(newTopQuotes);
    }
  };

  const moveDown = (index: number) => {
    if (index < topQuotes.length - 1) {
      const newTopQuotes = [...topQuotes];
      [newTopQuotes[index], newTopQuotes[index + 1]] = [
        newTopQuotes[index + 1],
        newTopQuotes[index],
      ];
      setTopQuotes(newTopQuotes);
    }
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      addQuote();
    }
  };

  return (
    <div>
      <Heading
        title="Unforgettable Anime Quotes"
        description="Capture Moments with Memorable Anime Lines..."
        icon={QuoteIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="p-8">
        <div className="mb-4 flex">
          <Input
            type="text"
            placeholder="Quote..."
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            autoComplete="off"
            onKeyDown={handleKeyDown}
          />
          <Input
            type="text"
            placeholder="Source..."
            value={quoteSource}
            onChange={(e) => setQuoteSource(e.target.value)}
            autoComplete="off"
            className="ml-2"
            onKeyDown={handleKeyDown}
          />
          <Button
            onClick={addQuote}
            className="ml-2"
          >
            Add
          </Button>
        </div>
        {topQuotes.length === 0 ? (
          <div className="flex items-center justify-center h-40">
            <p className="text-gray-600">
              Your list is empty. Add your top quotes!
            </p>
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {topQuotes.map((quoteItem, index) => (
              <div key={index}
                className={`border p-4 rounded-lg shadow ${rankingColors[index % rankingColors.length]}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 text-sm">#{index + 1}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => moveUp(index)}
                      className="text-gray-600"
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
                      className="text-gray-600"
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
                      onClick={() => removeQuote(index)}
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
                  </div>
                </div>
                <p className="mb-2">{quoteItem.quote}</p>
                <p className="text-gray-500 lowercase text-sm">@{quoteItem.quoteSource}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotePage;
