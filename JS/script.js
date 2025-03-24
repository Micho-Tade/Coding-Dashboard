// Clock Function (Updates every second)
function updateTime() {
    let now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);

// To-Do List Functionality
const todoList = document.getElementById("todo-list");

// Add a new task
function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `⬜ ${taskText}`;
        li.addEventListener("click", toggleTask); // Attach event
        todoList.appendChild(li);
    }
}

// Toggle task (Mark as done/undone)
function toggleTask() {
    if (this.innerHTML.startsWith("⬜")) {
        this.innerHTML = this.innerHTML.replace("⬜", "✔");
    } else {
        this.innerHTML = this.innerHTML.replace("✔", "⬜");
    }
}

// Attach event to existing tasks
document.querySelectorAll("#todo-list li").forEach((task) => {
    task.addEventListener("click", toggleTask);
});

// Algorithm Progress Tracker
function updateAlgoProgress() {
    let algoInput = document.getElementById("algo-input").value;
    let progressBar = document.getElementById("coding-progress");
    let progressText = document.getElementById("progress-text");

    if (algoInput < 0) algoInput = 0;
    if (algoInput > 1000) algoInput = 1000;

    progressBar.value = algoInput;
    progressText.innerText = `${algoInput} / 1000`;
}

// Dark Mode / Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerText = "☀️ Light Mode";
    } else {
        themeToggle.innerText = "🌙 Dark Mode";
    }
});
