// Replace this URL with your Google Apps Script Web App URL
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyRco-JQhst-nK8owqOMcBXmMp8xjixcMzZ-9jjTfmu7q9V0G-dkOVGJ-KjwyxV9DJC/exec";

document.getElementById("registrationForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const college = document.getElementById("college").value;
    const branch = document.getElementById("branch").value;
    const year = document.getElementById("year").value;

    // Prepare data to send
    const formData = {
        name,
        email,
        contact,
        college,
        branch,
        year,
    };

    try {
        // Send POST request to Google Apps Script
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();

        // Display response message
        const responseMessage = document.getElementById("responseMessage");
        if (result.success) {
            responseMessage.textContent = "Registration successful!";
            responseMessage.style.color = "green";
        } else {
            responseMessage.textContent = `Error: ${result.message}`;
            responseMessage.style.color = "red";
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
