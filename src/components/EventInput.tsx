"use client"; // Astro フレームワーク用のディレクティブ
import { useState, useEffect } from "react";

export default function EventInput() {
  const [events, setEvents] = useState([]);
  const [decodedString, setDecodedString] = useState(""); 

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const eventsValue = searchParams.getAll("selectedEvents");

    if (eventsValue.length > 0) {
      setEvents(eventsValue);
    }
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const decodedValues = events.map(value => {
        return decodeURIComponent(escape(atob(value)));
      });
      setDecodedString(decodedValues.join(", "));
    }
  }, [events]);
  
  return (
    <>
     {decodedString}
    </>
  );
}
