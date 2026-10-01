function showProject(project) {

    let title = document.getElementById("projectTitle");
    let description = document.getElementById("projectDescription");
    let modal = document.getElementById("projectModal");


    if (project === "fundamentals") {

        title.textContent = "Fundamentals of Programming";

        description.textContent =
            "This project focuses on the basic concepts of programming, " +
            "such as variables, data types, conditions, loops, functions, " +
            "and problem solving. It helped me understand the fundamentals " +
            "of writing and organizing computer programs.";

    }


    if (project === "embedded") {

        title.textContent = "Embedded System";

        description.textContent =
            "This project focuses on an embedded system that combines " +
            "hardware and software to perform a specific task. It helped " +
            "me understand how programming can be used to control and " +
            "interact with electronic components.";

    }


    modal.style.display = "flex";
}


function closeProject() {

    document.getElementById("projectModal").style.display = "none";

}


/* Close popup when clicking outside the box */

window.onclick = function(event) {

    let modal = document.getElementById("projectModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};