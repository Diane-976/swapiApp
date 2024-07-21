import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/chronologyService';
import { Chrono } from 'react-chrono';

const Timeline = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const items = events.map(event => ({
    title: event.title,
    cardTitle: event.date,
    cardSubtitle: event.title,
    cardDetailedText: event.description + (event.details ? "\n\nDetails:\n" + event.details.map(detail => `${detail.title} - ${detail.date}`).join('\n') : ''),
  }));

  return (
    <div style={{ width: "100%", height: "calc(100vh - 56px)", padding: "20px 20px 76px 20px" }}>
      <Chrono items={items} mode="VERTICAL" />
    </div>
  );
};

export default Timeline;
