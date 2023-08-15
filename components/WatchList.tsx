"use client";

import { useState, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

interface Anime {
  id: string;
  name: string;
}

const WatchLists = () => {
  const [currentlyWatching, setCurrentlyWatching] = useState<Anime[]>([]);
  const [watchLater, setWatchLater] = useState<Anime[]>([]);
  const [completed, setCompleted] = useState<Anime[]>([]);
  const [animeName, setAnimeName] = useState<string>("");

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

    if (destinationList.length < 10) {
      if (sourceList === destinationList) {
        const reorderedList = reorder(
          sourceList,
          source.index,
          destination.index
        );
        updateList(destinationList, reorderedList);
      } else {
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
    } else {
      alert("List is full");
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
        alert("You cannot add more than 10 animes to this list.");
      }
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Watch Lists</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Anime Name"
          value={animeName}
          onChange={(e) => setAnimeName(e.target.value)}
          className="border p-2"
        />
        <button
          onClick={() =>
            handleAddAnime(currentlyWatching, setCurrentlyWatching)
          }
          className="bg-blue-500 text-white px-4 py-2 ml-2"
        >
          Add to Currently Watching
        </button>
        <button
          onClick={() => handleAddAnime(watchLater, setWatchLater)}
          className="bg-blue-500 text-white px-4 py-2 ml-2"
        >
          Add to Watch Later
        </button>
        <button
          onClick={() => handleAddAnime(completed, setCompleted)}
          className="bg-blue-500 text-white px-4 py-2 ml-2"
        >
          Add to Completed
        </button>
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
                    className="flex items-center justify-between p-2 bg-gray-100 rounded mt-2"
                  >
                    <span>{anime.name}</span>
                    <span className="text-gray-400">Rank {index + 1}</span>
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
