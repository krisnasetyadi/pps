'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { IoPersonCircle } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { RiOilFill } from "react-icons/ri";
import { PiEngineFill } from "react-icons/pi";
import { MoreHorizontal } from "lucide-react"

interface Task {
  id: string;
  title: string;
  assignee: string;
  tool: string;
  consumable: string;
  machine: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: 'task-1', title: 'Task 1', assignee: 'John Doe', tool: 'Hammer', consumable: 'Nails', machine: 'Drill' },
      { id: 'task-2', title: 'Task 2', assignee: 'Jane Smith', tool: 'Screwdriver', consumable: 'Screws', machine: 'Saw' },
      { id: 'task-3', title: 'Task 3', assignee: 'Bob Johnson', tool: 'Wrench', consumable: 'Oil', machine: 'Lathe' },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [],
  },
];

const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [newTaskContent, setNewTaskContent] = useState('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColIndex = columns.findIndex(col => col.id === source.droppableId);
    const destColIndex = columns.findIndex(col => col.id === destination.droppableId);

    const newColumns = [...columns];
    const sourceCol = {...newColumns[sourceColIndex]};
    const destCol = {...newColumns[destColIndex]};

    const [task] = sourceCol.tasks.splice(source.index, 1);
    destCol.tasks.splice(destination.index, 0, task);

    newColumns[sourceColIndex] = sourceCol;
    newColumns[destColIndex] = destCol;

    setColumns(newColumns);
  };

  const addNewTask = () => {
    if (newTaskContent.trim() === '') return;

    const newTask: Task = {
      id: `task-${Date.now()}`,
      title: newTaskContent,
      assignee: 'Unassigned',
      tool: 'None',
      consumable: 'None',
      machine: 'None',
    };

    const newColumns = [...columns];
    newColumns[0].tasks.push(newTask);
    setColumns(newColumns);
    setNewTaskContent('');
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const saveEditedTask = () => {
    if (!editingTask) return;

    const newColumns = columns.map(column => ({
      ...column,
      tasks: column.tasks.map(task =>
        task.id === editingTask.id ? editingTask : task
      )
    }));

    setColumns(newColumns);
    setEditingTask(null);
    setIsModalOpen(false);
  };

  const moveTask = (taskId: string, sourceColumnId: string, destinationColumnId: string) => {
    const newColumns = columns.map(column => {
      if (column.id === sourceColumnId) {
        return {
          ...column,
          tasks: column.tasks.filter(task => task.id !== taskId)
        };
      }
      if (column.id === destinationColumnId) {
        const taskToMove = columns.find(col => col.id === sourceColumnId)?.tasks.find(task => task.id === taskId);
        if (taskToMove) {
          return {
            ...column,
            tasks: [...column.tasks, taskToMove]
          };
        }
      }
      return column;
    });

    setColumns(newColumns);
  };

  const Card: React.FC<{ task: Task, index: number, columnId: string }> = ({ task, index, columnId }) => {
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`bg-white p-4 mb-2 rounded shadow ${snapshot.isDragging ? 'opacity-50' : ''}`}
            onClick={() => handleEditTask(task)}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEditTask(task)}>Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {columns.filter(col => col.id !== columnId).map(col => (
                    <DropdownMenuItem key={col.id} onClick={() => moveTask(task.id, columnId, col.id)}>
                      Move to {col.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <IoPersonCircle className="mr-2 text-blue-500" />
                <span>{task.assignee}</span>
              </div>
              <div className="flex items-center">
                <FaTools className="mr-2 text-blue-500" />
                <span>{task.tool}</span>
              </div>
              <div className="flex items-center">
                <RiOilFill className="mr-2 text-blue-500" />
                <span>{task.consumable}</span>
              </div>
              <div className="flex items-center">
                <PiEngineFill className="mr-2 text-blue-500" />
                <span>{task.machine}</span>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-around p-4">
        {columns.map((column) => (
          <div key={column.id} className="bg-gray-100 p-4 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">{column.title}</h2>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="min-h-[500px]"
                >
                  {column.tasks.map((task, index) => (
                    <Card key={task.id} task={task} index={index} columnId={column.id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              Edit the details of your task below.
            </DialogDescription>
          </DialogHeader>
          {editingTask && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={editingTask.title}
                  onChange={(e) => setEditingTask({...editingTask, title: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="assignee" className="text-right">
                  Assignee
                </Label>
                <Input
                  id="assignee"
                  value={editingTask.assignee}
                  onChange={(e) => setEditingTask({...editingTask, assignee: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tool" className="text-right">
                  Tool
                </Label>
                <Input
                  id="tool"
                  value={editingTask.tool}
                  onChange={(e) => setEditingTask({...editingTask, tool: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="consumable" className="text-right">
                  Consumable
                </Label>
                <Input
                  id="consumable"
                  value={editingTask.consumable}
                  onChange={(e) => setEditingTask({...editingTask, consumable: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="machine" className="text-right">
                  Machine
                </Label>
                <Input
                  id="machine"
                  value={editingTask.machine}
                  onChange={(e) => setEditingTask({...editingTask, machine: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button type="submit" onClick={saveEditedTask}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add New Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogDescription>
              Enter the details of your new task below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task-content" className="text-right">
                Task
              </Label>
              <Input
                id="task-content"
                value={newTaskContent}
                onChange={(e) => setNewTaskContent(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={addNewTask}>Add Task</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DragDropContext>
  );
};

export default KanbanBoard;