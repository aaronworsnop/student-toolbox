"use client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./styles/timetable.css";
import TimetableEventModal from "./TimetableEventModal";
import TimetableDeleteModal from "./TimetableDeleteModal";

/**
 * Calendar component for displaying and managing events.
 *
 * @param {Object} props - Component props
 * @param {string} props.username - The username of the user whose events are displayed.
 * @returns {JSX.Element} The rendered component.
 */
export default function Timetable({ username }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  /**
   * Fetches events for the specified user and sets them in state.
   *
   * @returns {Promise<void>}
   */
  useEffect(() => {
    if (username) {
      async function fetchEvents() {
        const response = await fetch(`/api/user/${username}/event`);
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        }
      }

      fetchEvents();
    } else console.log("No username provided yet");
  }, [username]);

  /**
   * Handles date/time selection in the calendar.
   *
   * @param {Object} selectInfo - Information about the selected date.
   * @returns {void}
   */
  const handleDateSelect = (selectInfo) => {
    setSelectedInfo(selectInfo);
    setModalIsOpen(true);
  };

  /**
   * Handles clicking on an event in the calendar table.
   *
   * @param {Object} clickInfo - Information about the clicked event.
   * @returns {void}
   */
  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setDeleteModalIsOpen(true);
  };

  /**
   * Handles existing event updates (e.g., drag and drop or resize).
   *
   * @param {Object} eventInfo - Information about the updated event.
   * @returns {Promise<void>}
   */
  const handleEventUpdate = async (eventInfo) => {
    const updatedEvent = {
      id: eventInfo.event.id,
      title: eventInfo.event.title,
      start: eventInfo.event.start.toISOString(),
      end: eventInfo.event.end.toISOString(),
      backgroundColor: eventInfo.event.backgroundColor,
      borderColor: eventInfo.event.borderColor,
    };

    const response = await fetch(`/api/user/${username}/event`, {
      method: "PATCH",
      body: JSON.stringify({
        eventId: eventInfo.event.id,
        updatedEvent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Event updated successfully");
    } else {
      alert("Failed to update event");
    }
  };

  return (
    <div className={"calendar-main"}>
      {/* Button group for uploading and removing background image */}
      <div className={"button-group"}>
        <input
          type="file"
          accept="image/*"
          onChange={handleBackgroundImageUpload}
          style={{ display: "none" }}
          id="background-image-upload"
        />

        {backgroundImage && (
          <button
            onClick={handleRemoveBackgroundImage}
            className={"remove-button"}
          >
            &times;
          </button>
        )}
      </div>

      {/* Render the FullCalendar component with the necessary plugins */}
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        editable={true}
        selectable={true}
        events={events}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventDrop={handleEventUpdate}
        eventResize={handleEventUpdate}
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          omitZeroMinute: false,
        }}
        allDaySlot={false}
        height={700}
      />

      {/* Render EventModal if the modalIsOpen state is true */}
      {modalIsOpen && (
        <TimetableEventModal
          isOpen={modalIsOpen}
          setIsOpen={setModalIsOpen}
          selectedInfo={selectedInfo}
          setEvents={setEvents}
        />
      )}

      {/* Render DeleteModal if the deleteModalIsOpen state is true */}
      {deleteModalIsOpen && (
        <TimetableDeleteModal
          isOpen={deleteModalIsOpen}
          setIsOpen={setDeleteModalIsOpen}
          selectedEvent={selectedEvent}
          setEvents={setEvents}
        />
      )}
    </div>
  );
}

Timetable.propTypes = {
  username: PropTypes.string.isRequired,
};
