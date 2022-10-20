interface Repository {
	name: string;
	html_url: string;
}

window.addEventListener("DOMContentLoaded", (event) => {
	fetch("https://api.github.com/users/leomonta/repos")
		.then((x) => x.json())
		.then((data) => {
			// get the nav dropdown menu
			let nav_projects = document.getElementById("gh-projects")!;

			data.forEach((repo: Repository) => {

				// create a list item
				let li = document.createElement("li");
				
				// and a link
				let link = document.createElement("a");

				// set the link class and href
				link.setAttribute("class", "dropdown-item");
				link.setAttribute("href", `./projects/${repo.name}.html`);

				// gives it a name
				link.innerText = repo.name;

				// add it to the list item
				li.appendChild(link);

				// and add the list item to the nav dropdown
				nav_projects.appendChild(li);
			});
		});
});
