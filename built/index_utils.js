"use strict";
window.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://api.github.com/users/leomonta/repos")
        .then(function (x) { return x.json(); })
        .then(function (data) {
        // get the nav dropdown menu
        var nav_projects = document.getElementById("gh-projects");
        data.forEach(function (repo) {
            if (!repo.fork) {
                // create a list item
                var li = document.createElement("li");
                // and a link
                var link = document.createElement("a");
                // set the link class and href
                link.setAttribute("class", "dropdown-item");
                link.setAttribute("href", "./projects/".concat(repo.name, ".html"));
                // gives it a name
                link.innerText = repo.name;
                // add it to the list item
                li.appendChild(link);
                // and add the list item to the nav dropdown
                nav_projects.appendChild(li);
            }
        });
    });
});
