
const taskBtn = document.getElementById('taskBtn');
const locationBtn = document.getElementById('locationBtn');
const taskView = document.getElementById('taskView');
const locationView = document.getElementById('locationView');
const openTaskModal = document.getElementById('openTaskModal');
const taskModal = document.getElementById('taskModal');
const cancelTaskButton = document.querySelector('.cancel');

taskBtn.addEventListener('click', () => {
    taskBtn.classList.add('active-button');
    taskBtn.classList.remove('inactive-button');
    locationBtn.classList.remove('active-button');
    locationBtn.classList.add('inactive-button');
    taskView.style.display = 'block';
    locationView.style.display = 'none';
});

locationBtn.addEventListener('click', () => {
    locationBtn.classList.add('active-button');
    locationBtn.classList.remove('inactive-button');
    taskBtn.classList.remove('active-button');
    taskBtn.classList.add('inactive-button');
    taskView.style.display = 'none';
    locationView.style.display = 'block';
});

openTaskModal.addEventListener('click', () => {
    taskModal.style.display = 'block';
});

window.addEventListener('click', (event) => {
    if (event.target === taskModal) {
        taskModal.style.display = 'none';
        clearTaskModalInputs();
    }
});

const modalContent = document.querySelector('.modal-content');
modalContent.addEventListener('click', (event) => {
    event.stopPropagation();
});

cancelTaskButton.addEventListener('click', () => {
    taskModal.style.display = 'none';
    clearTaskModalInputs();
});
function clearTaskModalInputs() {
    document.getElementById('text-area-summary').value = '';
    document.getElementById('text-area-description').value = '';
    document.querySelector('.date-input').value = '';
}
const okTaskButton = document.getElementById('okTaskButton');
const incompleteTasks = document.getElementById('incompleteTasks');
const miniPage = document.querySelector('.modal');

okTaskButton.addEventListener('click', () => {
    const summary = document.getElementById('text-area-summary').value;
    const dueDate = document.querySelector('.date-input').value;

    if (summary.trim() !== '') {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');

        const titleAndDateContainer = document.createElement('div');
        titleAndDateContainer.classList.add('title-date-container');

        const title = document.createElement('span');
        title.classList.add('title');
        title.textContent = summary;

        const date = document.createElement('span');
        date.classList.add('tododate');
        date.textContent = dueDate;

        titleAndDateContainer.appendChild(title);
        titleAndDateContainer.appendChild(date);

        todoItem.appendChild(checkbox);
        todoItem.appendChild(titleAndDateContainer);

        incompleteTasks.appendChild(todoItem);

        miniPage.style.display = 'none';

        clearTaskModalInputs();

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                todoItem.classList.add('completed');
                completedTasks.appendChild(todoItem);
                checkbox.disabled = true;
            }
        });

    }
});
const locationAdd = document.getElementById('locationAdd');
const locationModal = document.getElementById('locationModal');
const locationDescription = document.getElementById('location-description');
const locationNotes = document.getElementById('location-notes');
const CurrentLocation = document.getElementById('CurrentLocation');

// Function to show the location modal
openLocationModal.addEventListener('click', () => {
    locationModal.style.display = 'block';
});

// Function to hide the location modal
function hideLocationModal() {
    locationModal.style.display = 'none';
    clearLocationInputs();
}
window.addEventListener('click', (event) => {
    if (event.target === locationModal) {
        locationModal.style.display = 'none';
        clearTaskModalInputs();
    }
});


// Function to clear the input fields
function clearLocationInputs() {
    locationDescription.value = '';
    locationNotes.value = '';
}

// Function to add a new location
locationAdd.addEventListener('click', () => {
    const description = locationDescription.value;
    const notes = locationNotes.value;

    if (description.trim() !== '') {
        const locationItem = document.createElement('li');
        locationItem.classList.add('location-item');

        const title = document.createElement('h3');
        title.classList.add('location-title');
        title.textContent = `📍 ${description}`;

        const descriptionSpan = document.createElement('span');
        descriptionSpan.classList.add('location-description');
        descriptionSpan.textContent = notes;


        locationItem.appendChild(title);
        locationItem.appendChild(descriptionSpan);

        if (CurrentLocation.childElementCount > 0) {
            // Move the existing items to the "Previous Locations" section
            const existingLocationItems = Array.from(CurrentLocation.children);
            existingLocationItems.forEach(item => {
                item.classList.add('Previous');
                PreviousLocation.appendChild(item);
            });
        }

        CurrentLocation.innerHTML = ''; // Clear the "Current Location" list
        CurrentLocation.appendChild(locationItem); // Add the new location

        hideLocationModal(); // Hide the modal after adding the location
    }
});

const logOutButton = document.getElementById('logOut')
logOutButton.addEventListener('click', () => {
    // Replace 'next-page.html' with the URL of the page you want to navigate to
    window.location.href = 'Todo App via Figma.html';
});