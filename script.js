function addTask() {
    const taskNameInput = document.getElementById('taskName');
    const taskPrioritySelect = document.getElementById('taskPriority');
    const taskName = taskNameInput.value.trim();
    const taskPriority = taskPrioritySelect.value;
    taskNameInput.focus();
    

    if (taskName === '') {
        alert('Por favor, insira o nome da tarefa.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add(taskPriority);
    taskItem.innerHTML = `
        <span>${taskName}</span>
        <span>
            <button onclick="deleteTask(this)">Excluir</button>
            <button onclick="completeTask(this)">Concluída</button>
        </span>
    `;

    document.getElementById('pendingTasks').appendChild(taskItem);

    taskNameInput.value = '';
    taskPrioritySelect.value = 'baixa';
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.add('completed');

    const now = new Date();
    const dateTime = now.toLocaleString('pt-BR');

    taskItem.innerHTML = `
        <span>${taskItem.textContent} - Concluída em: ${dateTime}</span>
        <span>
            <button onclick="deleteTask(this)">Excluir</button>
        </span>
    `;

    document.getElementById('completedTasks').appendChild(taskItem);
}
