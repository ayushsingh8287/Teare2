document.addEventListener("DOMContentLoaded", function () {
    // Gender Feedback Pie Chart
    new Chart(document.getElementById("genderChart"), {
        type: "pie",
        data: {
            labels: ["Male", "Female"],
            datasets: [{
                data: [65.7, 34.21],
                backgroundColor: ["#007BFF", "#FFC107"]
            }]
        }
    });

    // Patient Satisfaction Pie Chart
    new Chart(document.getElementById("satisfactionChart"), {
        type: "pie",
        data: {
            labels: ["Excellent", "Good", "Average", "Poor"],
            datasets: [{
                data: [56.19, 34.5, 8.51, 2.8],
                backgroundColor: ["#28A745", "#17A2B8", "#FFC107", "#DC3545"]
            }]
        }
    });

    // Average Visit Length Bar Chart
    new Chart(document.getElementById("visitChart"), {
        type: "bar",
        data: {
            labels: ["Cardiology", "Dermatology", "Neurology", "Ophthalmology", "Orthopedics", "Pediatrics"],
            datasets: [{
                label: "Consulting Time",
                data: [40, 25, 30, 20, 22, 18],
                backgroundColor: "#007BFF"
            }]
        }
    });

    // Average Wait Time Bar Chart
    new Chart(document.getElementById("waitChart"), {
        type: "bar",
        data: {
            labels: ["Cardiology", "Dermatology", "Neurology", "Ophthalmology", "Orthopedics", "Pediatrics"],
            datasets: [{
                label: "Waiting Time",
                data: [30, 28, 29, 27, 31, 28.5],
                backgroundColor: "#17A2B8"
            }]
        }
    });
});