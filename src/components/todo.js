import React, { useState, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import { FiTrash2 } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";

function TodoList () {
  const columns = [
    {
      id: "column-1",
      title: "To Do",
      tasks: [],
    },
    {
      id: "column-2",
      title: "In Progress",
      tasks: [],
    },
    {
      id: "column-3",
      title: "Done",
      tasks: [],
    },
  ];
  const [boardColumns, setBoardColumns] = useState(columns);
  const [newTask, setNewTask] = useState("");
  const [showForm, setShowForm] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") {
      alert("Task name cannot be empty");
      return;
    }
    const todoColumn = boardColumns.find((column) => column.title === "To Do");
    if (todoColumn) {
      const newTaskId = `${Math.random().toString(36)}`;
      setBoardColumns(
        boardColumns.map((column) => {
          if (column.title === "To Do") {
            return {
              ...column,
              tasks: [...column.tasks, { id: newTaskId, content: newTask }],
            };
          }
          return column;
        })
      );
    } else {
      const newTaskId = `task-1`;
      setBoardColumns([
        ...boardColumns,
        {
          id: "column-1",
          title: "To Do",
          tasks: [{ id: newTaskId, content: newTask }],
        },
      ]);
    }
    setNewTask("");
    setShowForm(false);
  };
  
  const handleCreateTasks = () => {
    setShowForm(true); // show the form when the button is clicked
  };
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleDelete = (columnId, taskId) => {
    setBoardColumns(
      boardColumns.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            tasks: column.tasks.filter((task) => task.id !== taskId),
          };
        }
        return column;
      })
    );
  };
  useEffect(() => {
    const storedData = localStorage.getItem("boardColumns");
    if (storedData) {
      try {
        setBoardColumns(JSON.parse(storedData));
      } catch (error) {
        throw new Error(`Error parsing stored data: ${error}`);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("boardColumns", JSON.stringify(boardColumns));
  }, [boardColumns]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = boardColumns.find(
      (column) => column.id === source.droppableId
    );
    const destColumn = boardColumns.find(
      (column) => column.id === destination.droppableId
    );
    if (!sourceColumn || !destColumn) {
      return;
    }

    // Copy source tasks
    const sourceTasks = [...sourceColumn.tasks];

    // Copy dest tasks
    const destTasks = [...destColumn.tasks];

    // Splice out the dropped task from the copy of source tasks
    const [removedTask] = sourceTasks.splice(source.index, 1);

    // If moving within the column, splice the dropped task back into the copy of source tasks
    if (destination.droppableId === source.droppableId) {
      sourceTasks.splice(destination.index, 0, removedTask);
    } else {
      // If moving between columns, splice the dropped task into the copy of dest tasks
      destTasks.splice(destination.index, 0, removedTask);
    }

    // Set the board columns into state
    setBoardColumns(
      boardColumns.map((column) => {
        if (column.id === source.droppableId) {
          return { ...column, tasks: sourceTasks };
        }
        if (column.id === destination.droppableId) {
          return { ...column, tasks: destTasks };
        }
        return column;
      })
    );
  };

  return (
    <div>
      <div className="mb-10 dark:bg-agencyGrey p-8 outline outline-2 outline-agencyOutline">
        <div className="flex mb-4 justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-1 text-white">Tasks</h2>
          </div>
          <div className="flex items-center">
            <button className="flex items-center px-4 py-1 dark:bg-agencyBackground text-white rounded-md mr-2">
              <BsFilter className="mr-1" size={18} color="white" />
              <span className="ml-1">Filter</span>
            </button>
            <button
              onClick={handleCreateTasks}
              className="flex items-center px-4 py-1 dark:bg-agencyBackground text-white rounded-md mr-2"
            >
              <IoMdAdd className="mr-1" size={20} color="white" />
              <span className="ml-1">Create Tasks</span>
            </button>
            <div className="flex items-center px-4 py-1 bg-agencyBlue text-white rounded-md mr-2">
              <AiFillCalendar className="mr-1" size={20} color="white" />
              <span className="ml-1">
                Today,{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
        {showForm && (
          <form onSubmit={handleSubmit} className="flex flex-row items-center">
            <input
              type="text"
              value={newTask}
              onChange={handleChange}
              className="flex-1 p-2 mr-2 rounded-md text-black"
              placeholder="Enter a new task"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-agencyBlue text-white rounded-md"
            >
              Add Task
            </button>
          </form>
        )}
        <hr className="h-px my-8 bg-zinc-200 border-0 dark:bg-agencyOutline"></hr>
        <DragDropContext onDragEnd={onDragEnd}>
          {boardColumns.map((column) => (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="rounded-lg dark:bg-agencyBackground text-white p-2 w-1200 min-h-12 mt-8 outline outline-2 outline-agencyOutline"
                >
                  <h4 className="mb-6 ml-3 mt-3">
                    {column.title}{" "}
                    <span className="text-agencyBlue">
                      ({column.tasks.length})
                    </span>
                  </h4>
                  {column.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`outline outline-2 outline-agencyOutline rounded-lg select-none p-3 my-3 mb-4 min-h-30 dark:bg-agencyGrey text-white ${
                            snapshot.isDragging ? "bg-blue-100" : ""
                          }`}
                          style={provided.draggableProps.style}
                        >
                          {task.content}
                          <button
                            className="float-right bg-transparent border-0"
                            onClick={() => handleDelete(column.id, task.id)}
                          >
                            <FiTrash2 size={20} color="white" />
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};

export default TodoList;