document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const dueDate = document.getElementById('dueDate');
    const priority = document.getElementById('priority');
    const category = document.getElementById('category');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const taskDueDate = dueDate.value;
        const taskPriority = priority.value;
        const taskCategory = category.value;

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>
                <strong>${taskText}</strong> 
                (Due: ${taskDueDate || 'No due date'}, Priority: ${taskPriority}, Category: ${taskCategory})
            </span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';
        dueDate.value = '';
        priority.value = 'low';
        category.value = 'work';

        taskItem.querySelector('.complete-btn').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskItem.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    });
});
