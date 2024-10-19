'use client'

import React from "react";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import { Fragment, useState } from "react";
import { getJobOrders, jobOrders, setJobOrders } from "../../app/data/people";
import ViewSwitcher from "./gantt-view-switcher";
import { DialogDemo } from "@/components/ui/dialog-index";
// import ModalComponent from "./Modal";

export const getStartEndDateForProject = (tasks: Task[], projectId: string) => {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
};

export default function GanttComponent() {
  const [view, setView] = useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = useState<Task[]>(getJobOrders());
  const [isChecked, setIsChecked] = useState(true);
  const [selectedTask, setSelectedTask] = useState<Task>(jobOrders[0]);
  const [isOpen, setIsOpen] = useState(false);

  let columnWidth = 60;
  if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const handleTaskChange = (task: Task) => {
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const findIndex = newTasks.findIndex((t) => t.id === task.project);
      const project = newTasks[findIndex];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t) =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
    setJobOrders(newTasks);
  };
  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };
  const handleDblClick = (task: Task) => {
    setSelectedTask(task);
    onClickModal();
  };
  const onClickModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <ViewSwitcher
        onViewModeChange={(viewMode: ViewMode) => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      />
      <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={handleTaskChange}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
        onDoubleClick={handleDblClick}
      />
      <DialogDemo/>
    </Fragment>
  );
}
