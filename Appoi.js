document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filter");
    const appointments = document.querySelectorAll(".appointment");

    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            // Remove active class from all filters
            filters.forEach(f => f.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            // Show/Hide appointments based on filter
            appointments.forEach(appointment => {
                if (filterValue === "all") {
                    appointment.style.display = "block";
                } else if (appointment.classList.contains(filterValue)) {
                    appointment.style.display = "block";
                } else {
                    appointment.style.display = "none";
                }
            });
        });
    });
});