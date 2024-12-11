// Collapsible FAQ JavaScript
document.addEventListener('DOMContentLoaded', function () {
    var coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            // Toggle the clicked question
            this.classList.toggle("active");
            var content = this.nextElementSibling;

            // Close all other questions
            for (let j = 0; j < coll.length; j++) {
                if (coll[j] !== this) {
                    coll[j].classList.remove("active");
                    coll[j].nextElementSibling.style.display = "none"; // Close other content
                }
            }

            // Toggle the clicked content
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});


