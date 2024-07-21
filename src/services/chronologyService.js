export const getEvents = async () => {
    const response = await fetch('/chronology.json');
    console.log('helloooooooooooooooo');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const eventsData = await response.json();
    console.log('Events data:', eventsData);
    return eventsData;
};
  