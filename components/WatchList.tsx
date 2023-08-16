"use client";

import { useState, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";


const rankingColors = [
  'bg-purple-300', 'bg-purple-200',  // Purple shades
  'bg-blue-300', 'bg-blue-200',        // Blue shades
  'bg-green-300', 'bg-green-200',    // Green shades
  'bg-orange-300', 'bg-orange-200',  // Orange shades
  'bg-red-300', 'bg-red-200',        // Red shades
];

interface Anime {
  id: string;
  name: string;
}

const WatchLists = () => {
  const [currentlyWatching, setCurrentlyWatching] = useState<Anime[]>([]);
  const [watchLater, setWatchLater] = useState<Anime[]>([]);
  const [completed, setCompleted] = useState<Anime[]>([]);
  const [animeName, setAnimeName] = useState<string>("");

  const { toast } = useToast()

  // Load watchlists from local storage
  useEffect(() => {
    const storedCurrentlyWatching: Anime[] = JSON.parse(
      localStorage.getItem("currentlyWatching") || "[]"
    );
    setCurrentlyWatching(storedCurrentlyWatching);

    const storedWatchLater: Anime[] = JSON.parse(
      localStorage.getItem("watchLater") || "[]"
    );
    setWatchLater(storedWatchLater);

    const storedCompleted: Anime[] = JSON.parse(
      localStorage.getItem("completed") || "[]"
    );
    setCompleted(storedCompleted);
  }, []);

  // Update local storage when watchlists change
  useEffect(() => {
    localStorage.setItem(
      "currentlyWatching",
      JSON.stringify(currentlyWatching)
    );
    localStorage.setItem("watchLater", JSON.stringify(watchLater));
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [currentlyWatching, watchLater, completed]);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    const sourceList = getList(source.droppableId);
    const destinationList = getList(destination.droppableId);

    if (destinationList.length < 11) {
      if (sourceList === destinationList) {
        const reorderedList = reorder(
          sourceList,
          source.index,
          destination.index
        );
        updateList(destinationList, reorderedList);
      } else {
        if (destinationList.length < 10) {
          const movedItem = sourceList[source.index];
          const newSourceList = removeItem(sourceList, source.index);
          const updatedDestinationList = insertItem(
            destinationList,
            destination.index,
            movedItem
          );

          updateList(sourceList, newSourceList);
          updateList(destinationList, updatedDestinationList);
        }
        else {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: 'Possible reason: The list is full'
          })
        }
      }
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: 'Possible reason: The list is full'
      })
    }
  };

  const getList = (listId: string): Anime[] => {
    if (listId === "currentlyWatchingList") {
      return currentlyWatching;
    } else if (listId === "watchLaterList") {
      return watchLater;
    } else if (listId === "completedList") {
      return completed;
    }
    return [];
  };

  const reorder = (
    list: Anime[],
    startIndex: number,
    endIndex: number
  ): Anime[] => {
    const newList = [...list];
    const [removed] = newList.splice(startIndex, 1);
    newList.splice(endIndex, 0, removed);
    return newList;
  };

  const removeItem = (list: Anime[], index: number): Anime[] => {
    const newList = [...list];
    newList.splice(index, 1);
    return newList;
  };

  const insertItem = (list: Anime[], index: number, item: Anime): Anime[] => {
    const newList = [...list];
    newList.splice(index, 0, item);
    return newList;
  };

  const updateList = (list: Anime[], updatedList: Anime[]) => {
    if (list === currentlyWatching) {
      setCurrentlyWatching(updatedList);
    } else if (list === watchLater) {
      setWatchLater(updatedList);
    } else if (list === completed) {
      setCompleted(updatedList);
    }
  };

  const handleAddAnime = (
    list: Anime[],
    setList: React.Dispatch<React.SetStateAction<Anime[]>>
  ) => {
    if (animeName.trim() !== "") {
      if (list.length < 10) {
        setList([...list, { id: Date.now().toString(), name: animeName }]);
        setAnimeName("");
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: 'Possible reason: The list is full'
        })
      }
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="mb-4 flex flex-col md:flex-row justify-center flex-wrap gap-2">
        <Input
          type="text"
          placeholder="Anime...."
          value={animeName}
          onChange={(e) => setAnimeName(e.target.value)}
          className="w-[250px]"
        />
        <div>
          <Button
            onClick={() =>
              handleAddAnime(currentlyWatching, setCurrentlyWatching)
            }
          >
            Ongoing
          </Button>
          <Button
            onClick={() => handleAddAnime(watchLater, setWatchLater)}
            className="ml-2 p-4"
          >
            WatchList
          </Button>
          <Button
            onClick={() => handleAddAnime(completed, setCompleted)}
            className=" ml-2"
          >
            Completed
          </Button>
        </div>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <WatchList
            list={currentlyWatching}
            listId="currentlyWatchingList"
            title="Currently Watching"
            updateList={updateList}
          />
          <WatchList
            list={watchLater}
            listId="watchLaterList"
            title="Watch Later"
            updateList={updateList}
          />
          <WatchList
            list={completed}
            listId="completedList"
            title="Completed"
            updateList={updateList}
          />
        </div>
      </DragDropContext>
    </div>
  );
};

interface WatchListProps {
  list: Anime[];
  listId: string;
  title: string;
  updateList: (list: Anime[], updatedList: Anime[]) => void;
}

const WatchList: React.FC<WatchListProps> = ({
  list,
  listId,
  title,
  updateList,
}) => {
  const handleDelete = (index: number) => {
    const updatedList = removeItem(list, index);
    updateList(list, updatedList);
  };
  return (
    <div className="border p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <Droppable droppableId={listId}>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {list.map((anime, index) => (
              <Draggable key={anime.id} draggableId={anime.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`flex items-center justify-between p-2 rounded mt-2 ${rankingColors[index % rankingColors.length]}`}
                  >
                    <span className="text-gray-400 mr-2">#{index + 1}</span>
                    <span className="text-sm mr-2">{anime.name}</span>
                    <button onClick={() => handleDelete(index)}>❌</button>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

const removeItem = <T extends any[]>(list: T, index: number): T => {
  const newList = [...list];
  newList.splice(index, 1);
  return newList as T;
};

export default WatchLists;
