// Upcoming Events data array
const eventsData = [
    {
        id: 1,
        title: "Spring Break",
        date: "March 25 - April 1",
        borderColor: "primary",
        priority: "high"
    },
    {
        id: 2,
        title: "Drama Club Performance",
        date: "April 5, 7:00 PM",
        borderColor: "info",
        priority: "medium"
    },
    {
        id: 3,
        title: "College Fair",
        date: "April 12, 10:00 AM",
        borderColor: "success",
        priority: "high"
    },
    {
        id: 4,
        title: "Spring Sports Tryouts",
        date: "April 15-17",
        borderColor: "warning",
        priority: "medium"
    },
    {
        id: 5,
        title: "Final Exams Week",
        date: "May 1-5",
        borderColor: "danger",
        priority: "high"
    },
    {
        id: 6,
        title: "Graduation Ceremony",
        date: "May 20, 2:00 PM",
        borderColor: "primary",
        priority: "high"
    }
];

// All News data array
const newsData = [
    {
        id: 1,
        image: "assets/images/news-updates/news1.png",
        alt: "Science fair",
        badge: {
            text: "Press Release",
            class: "badge-success"
        },
        title: "CSU Math Whizzes Seek to UnCOVER the Pandemic Situations in Caraga Region",
        description: "Mathematics researchers of the university put their minds together to uncover the challenging situations associated with the COVID-19 ...",
        date: "Februrary 18, 2021",
        link: "https://www.carsu.edu.ph/csu-math-whizzes-seek-to-uncover-the-pandemic-situations-in-caraga-region/"
    },
    {
        id: 2,
        image: "assets/images/news-updates/news2.png",
        alt: "Research conference",
        badge: {
            text: "Press Release",
            class: "badge-success"
        },
        title: "OVPRE Trains CSU Researchers on Writing for Journal Publication",
        description: "CThe Office of the Vice President for Research and Extension (OVPRE), through its Publication Unit trained forty-four (44) ...",
        date: "June 29, 2018",
        link: "https://www.carsu.edu.ph/ovpre-trains-csu-researchers-on-writing-for-journal-publication/"
    },
    {
        id: 3,
        image: "assets/images/news-updates/news3.png",
        alt: "Student achievement",
        badge: {
            text: "Press Release",
            class: "badge-success"
        },
        title: "CSU Launches Utility of the New CAS Multipurpose Building",
        description: "Caraga State University has recently launched the left wing of its new multi-purpose building as Phase 1 of ...",
        date: "February 14, 2018",
        link: "https://www.carsu.edu.ph/csu-launches-utility-of-the-new-cas-multipurpose-building/"
    },
    {
        id: 4,
        image: "assets/images/news-updates/news4.png",
        alt: "Partnership announcement",
        badge: {
            text: "Press Release",
            class: "badge-success"
        },
        title: "CSU Participates 2nd International Conference on INREM",
        description: "Five (5) faculty members of Caraga State University (CSU) participated the 2nd International Conference on Integrated Natural Resources and Environmental Management (INREM 2019) ...",
        date: "November 20 – 22, 2019",
        link: "https://www.carsu.edu.ph/csu-math-whizzes-seek-to-uncover-the-pandemic-situations-in-caraga-region/"
    },
    {
        id: 5,
        image: "assets/images/news-updates/news5.png",
        alt: "Partnership announcement",
        badge: {
            text: "Press Release",
            class: "badge-success"
        },
        title: "Two CSU Faculty Bag Best Paper Awards in International Conferences",
        description: "The event was held in Westin Resort Hotel, Guam, USA last October 31 to November 3, 2018. She presented her paper entitled “Characterization of Selected Hybrids of Abaca (Musa textilis Nee) For Resistance to Bunchy Top ...",
        date: "November 3, 2018",
        link: "https://www.carsu.edu.ph/two-csu-faculty-bag-best-paper-awards-in-international-conferences/"
    },
    {
        id: 6,
        image: "assets/images/news-updates/news6.png",
        alt: "Partnership announcement",
        badge: {
            text: "Press Release",
            class: "badge-success"
        },
        title: "CSU Teams Up with UTM in STEM",
        description: "The CSU party was met by Prof. Dr. Abdull Rahim Mohd Yusoff, the Dean of the Faculty of Science, Prof. Dr. Fadhilah Yusof, Department of Mathematics Chairperson, and the rest of the management committee of the Faculty of Science ...",
        date: "July 18, 2019",
        link: "https://www.carsu.edu.ph/two-csu-faculty-bag-best-paper-awards-in-international-conferences/"
    }
];




// Configuration for calendar link and button text
const eventsConfig = {
    calendarLink: "#",
    buttonText: "View Full Calendar",
    showButton: true,
    maxEvents: 6 // Limit number of events to display
};

// Function to create a single event item
function createEventItem(event, isLast = false) {
    return `
                <div class="event-border-left border-warning-left pl-3 mb-3${event.borderColor}">
                    <div class="font-weight-bold">${event.title}</div>
                    <small class="text-muted">${event.date}</small>
                </div>
                ${!isLast ? '<hr />' : ''}
            `;
}

// Function to render all events
function renderEvents() {
    const container = document.getElementById('events-container');
    const displayEvents = eventsData.slice(0, eventsConfig.maxEvents);

    let eventsHTML = displayEvents
        .map((event, index) => createEventItem(event, index === displayEvents.length - 1))
        .join('');

    // Add calendar button if enabled
    if (eventsConfig.showButton) {
        eventsHTML += `
                    <a href="${eventsConfig.calendarLink}" 
                       class="btn btn-outline-dark btn-sm w-100 mt-3">
                        ${eventsConfig.buttonText}
                    </a>
                `;
    }

    container.innerHTML = eventsHTML;
}

// Events Manager for dynamic operations
const EventsManager = {
    // Add new event
    addEvent: function (event) {
        const newEvent = {
            id: Date.now(),
            borderColor: event.borderColor || 'secondary',
            priority: event.priority || 'medium',
            ...event
        };
        eventsData.push(newEvent);
        this.render();
    },

    // Remove event by ID
    removeEvent: function (id) {
        const index = eventsData.findIndex(event => event.id === id);
        if (index > -1) {
            eventsData.splice(index, 1);
            this.render();
        }
    },

    // Update event
    updateEvent: function (id, updatedData) {
        const index = eventsData.findIndex(event => event.id === id);
        if (index > -1) {
            eventsData[index] = { ...eventsData[index], ...updatedData };
            this.render();
        }
    },

    // Sort events by date (basic alphabetical sort - you can enhance this)
    sortByDate: function () {
        eventsData.sort((a, b) => a.date.localeCompare(b.date));
        this.render();
    },

    // Filter events by priority
    filterByPriority: function (priority) {
        const filtered = eventsData.filter(event => event.priority === priority);
        this.renderFiltered(filtered);
    },

    // Filter events by border color/category
    filterByCategory: function (borderColor) {
        const filtered = eventsData.filter(event => event.borderColor === borderColor);
        this.renderFiltered(filtered);
    },

    // Search events
    searchEvents: function (query) {
        const filtered = eventsData.filter(event =>
            event.title.toLowerCase().includes(query.toLowerCase()) ||
            event.date.toLowerCase().includes(query.toLowerCase())
        );
        this.renderFiltered(filtered);
    },

    // Render filtered events
    renderFiltered: function (filteredData) {
        const container = document.getElementById('events-container');
        const displayEvents = filteredData.slice(0, eventsConfig.maxEvents);

        let eventsHTML = displayEvents
            .map((event, index) => createEventItem(event, index === displayEvents.length - 1))
            .join('');

        if (eventsConfig.showButton) {
            eventsHTML += `
                        <a href="${eventsConfig.calendarLink}" 
                           class="btn btn-outline-dark btn-sm w-100 mt-3">
                            ${eventsConfig.buttonText}
                        </a>
                        <button onclick="EventsManager.render()" 
                                class="btn btn-link btn-sm w-100 mt-1">
                            Show All Events
                        </button>
                    `;
        }

        container.innerHTML = eventsHTML;
    },

    // Get events by priority
    getHighPriorityEvents: function () {
        return eventsData.filter(event => event.priority === 'high');
    },

    // Get upcoming events (you can enhance this with actual date parsing)
    getUpcomingEvents: function (limit = 3) {
        return eventsData.slice(0, limit);
    },

    // Update configuration
    updateConfig: function (newConfig) {
        Object.assign(eventsConfig, newConfig);
        this.render();
    },

    // Render all events
    render: function () {
        renderEvents();
    },

    // Get all events data
    getAllEvents: function () {
        return eventsData;
    },

    // Get events count
    getEventsCount: function () {
        return eventsData.length;
    }
};

// Initialize events when page loads
document.addEventListener('DOMContentLoaded', function () {
    renderEvents();
});

// Example usage functions (uncomment to test):

// Add new event
// EventsManager.addEvent({
//     title: "Science Fair",
//     date: "June 10, 9:00 AM",
//     borderColor: "info",
//     priority: "high"
// });

// Filter high priority events
// EventsManager.filterByPriority("high");

// Search for specific events
// EventsManager.searchEvents("Spring");

// Update configuration
// EventsManager.updateConfig({
//     maxEvents: 4,
//     buttonText: "See More Events",
//     calendarLink: "/calendar"
// });

// Console helper functions for easy testing
window.EventsHelper = {
    addSampleEvent: () => {
        EventsManager.addEvent({
            title: "Sample Event",
            date: "Tomorrow, 3:00 PM",
            borderColor: "success",
            priority: "medium"
        });
    },
    showHighPriority: () => EventsManager.filterByPriority("high"),
    showAll: () => EventsManager.render(),
    getStats: () => {
        console.log(`Total Events: ${EventsManager.getEventsCount()}`);
        console.log(`High Priority: ${EventsManager.getHighPriorityEvents().length}`);
    }
};

// Function to create a single news card
function createNewsCard(newsItem) {
    return `
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="card h-100">
                        <img
                            src="${newsItem.image}"
                            alt="${newsItem.alt}"
                            class="card-img-top news-card-image"
                        />
                        <div class="card-body d-flex flex-column">
                            <div class="mb-2">
                                <span class="badge ${newsItem.badge.class} me-2">${newsItem.badge.text}</span>
                            </div>
                            <h5 class="card-title">${newsItem.title}</h5>
                            <p class="card-text text-muted mb-3 flex-grow-1">
                                ${newsItem.description}
                            </p>
                            <div class="mb-3">
                                <small class="text-muted me-3">
                                    <i class="bi bi-calendar mr-1"></i>${newsItem.date}
                                </small>
                            </div>
                            <a href="${newsItem.link}" class="btn btn-outline-dark btn-sm mt-auto">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            `;
}

// Function to render all news cards
function renderNewsCards() {
    const container = document.getElementById('news-container');
    const newsHTML = newsData.map(createNewsCard).join('');
    container.innerHTML = newsHTML;
}

// Additional utility functions for dynamic management
const NewsManager = {
    // Add new news item
    addNews: function (newsItem) {
        newsData.push({
            id: Date.now(), // Simple ID generation
            ...newsItem
        });
        this.render();
    },

    // Remove news item by ID
    removeNews: function (id) {
        const index = newsData.findIndex(item => item.id === id);
        if (index > -1) {
            newsData.splice(index, 1);
            this.render();
        }
    },

    // Update news item
    updateNews: function (id, updatedData) {
        const index = newsData.findIndex(item => item.id === id);
        if (index > -1) {
            newsData[index] = { ...newsData[index], ...updatedData };
            this.render();
        }
    },

    // Filter news by badge type
    filterByBadge: function (badgeText) {
        const filtered = newsData.filter(item =>
            item.badge.text.toLowerCase().includes(badgeText.toLowerCase())
        );
        this.renderFiltered(filtered);
    },

    // Search news by title or description
    search: function (query) {
        const filtered = newsData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );
        this.renderFiltered(filtered);
    },

    // Render filtered results
    renderFiltered: function (filteredData) {
        const container = document.getElementById('news-container');
        const newsHTML = filteredData.map(createNewsCard).join('');
        container.innerHTML = newsHTML;
    },

    // Render all news
    render: function () {
        renderNewsCards();
    },

    // Get all news data
    getAllNews: function () {
        return newsData;
    }
};

// Initialize the news cards when page loads
document.addEventListener('DOMContentLoaded', function () {
    renderNewsCards();
});