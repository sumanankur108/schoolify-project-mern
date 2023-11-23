function scheduleEvent() {
    const eventDate = document.getElementById("event-date").value;
    const eventTitle = document.getElementById("event-title").value;
    const eventDescription = document.getElementById("event-description").value;

    if (eventDate && eventTitle && eventDescription) {
        displayEvent(eventDate, eventTitle, eventDescription);
        alert(`Event Scheduled!\nDate: ${eventDate}\nTitle: ${eventTitle}\nDescription: ${eventDescription}`);
    } else {
        alert("Please fill in all the details.");
    }
}

function displayEvent(date, title, description) {
    const eventsContainer = document.getElementById("events-container");
    const eventItem = document.createElement("div");
    eventItem.classList.add("event-item");
    eventItem.innerHTML = `<strong>${date}</strong>: ${title}<br>${description}`;
    eventsContainer.appendChild(eventItem);
}