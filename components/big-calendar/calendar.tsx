'use client'

import React, { Fragment, useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Calendar, DateLocalizer, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { getJobOrders, jobOrders, setJobOrders } from "../../app/data/people";
import moment from "moment";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/sass/styles.scss";
import "../../app/styles/calendar.css";
// import ModalComponent from "./Modal";

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

export default function CalendarComponent() {
  const [myEvents, setMyEvents] = useState(getJobOrders);
  const [selectedTask, setSelectedTask] = useState<any>(jobOrders[0]);
  const [isOpen, setIsOpen] = useState(false);

  const moveEvent = useCallback(
    ({
      event,
      start,
      end,
      isAllDay: droppedOnAllDaySlot = false,
    }: {
      event: any;
      start: any;
      end: any;
      isAllDay?: boolean;
    }) => {
      const { allDay } = event;
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true;
      }
      if (allDay && !droppedOnAllDaySlot) {
        event.allDay = false;
      }
      let newEvents: any[] = [];
      setMyEvents((prev: any[]) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? ({} as any);
        const filtered = prev.filter((ev) => ev.id !== event.id);
        newEvents = [
          ...filtered,
          { ...existing, start, end, allDay: event.allDay },
        ];
        return newEvents;
      });
      setJobOrders(newEvents);
    },
    [setMyEvents, setJobOrders]
  );
  const resizeEvent = useCallback(
    ({ event, start, end }: { event: any; start: any; end: any }) => {
      let newEvents: any[] = [];
      setMyEvents((prev: any[]) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? ({} as any);
        const filtered = prev.filter((ev) => ev.id !== event.id);
        newEvents = [...filtered, { ...existing, start, end }];
        return newEvents;
      });
      setJobOrders(newEvents);
    },
    [setMyEvents, setJobOrders]
  );
  const onClickModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <DragAndDropCalendar
        onSelectEvent={(event) => {
          setSelectedTask(event);
          onClickModal();
        }}
        defaultDate={moment().toDate()}
        defaultView="month"
        events={myEvents}
        localizer={localizer}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        resizable
        style={{ height: "100vh" }}
      />
      {/* <ModalComponent
        isOpen={isOpen}
        onClickModal={onClickModal}
        item={selectedTask}
      /> */}
    </Fragment>
  );
}
CalendarComponent.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
};
