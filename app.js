// Select DOM elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Event listener for adding a new task
addTaskBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value;
    if (taskText.trim() === "") return; // Prevent adding empty tasks

    // Create a new list item for the task
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');
    listItem.textContent = taskText;

    // Add the item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    newTaskInput.value = '';

    // Add delete functionality
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    // Mark task as completed on click (but not when clicking the delete button)
    listItem.addEventListener('click', function(event) {
        if (event.target !== deleteBtn) {
            listItem.classList.toggle('completed');
        }
    });
}); 