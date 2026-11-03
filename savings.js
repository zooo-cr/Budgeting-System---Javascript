function addGoal() {
    // Get the values from the HTML inputs
    let name = document.getElementById("goalName").value;
    let target = Number(document.getElementById("targetAmount").value);
    let saved = Number(document.getElementById("amountSaved").value);

    // Check if the inputs are valid
    if (name === "" || target <= 0 || saved < 0) {
        alert("Please enter valid goal details.");
        return;
    }

    // Calculate progress percentage
    let progress = (saved / target) * 100;

    // Prevent progress from exceeding 100%
    progress = Math.min(progress, 100);

    // Display the goal
    let goalList = document.getElementById("goalList");

    let goal = document.createElement("div");

    goal.innerHTML = `
        <h3>${name}</h3>
        <p>Target: ₱${target}</p>
        <p>Saved: ₱${saved}</p>
        <p>Progress: ${progress.toFixed(1)}%</p>
        <progress value="${progress}" max="100"></progress>
    `;

    goalList.appendChild(goal);
}
