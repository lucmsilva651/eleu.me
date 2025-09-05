async function getProjects() {
    const url = "https://api.github.com/users/lucmsilva651/repos";
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

function getSortedProjects(projects) {
    return projects.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 8);
}

export default async () => {
    const projects = await getProjects();
    const projectSorted = getSortedProjects(projects);
    const grid = document.querySelector('.project-grid');
    grid.innerHTML = "";

    projectSorted.forEach(project => {
        const li = document.createElement('li');
        const { html_url, full_name, stargazers_count, description } = project;
        const nameProject = full_name.replace('lucmsilva651/', '');
        li.innerHTML = `
            <a href="${html_url}" target="_blank">
                <p>${nameProject}</p>
                <p>Stars: <span>${stargazers_count}</span></p>
                <p class="description">${description !== null ? description : 'No description provided'}</p>
            </a>
        `;
        grid.appendChild(li);
    });
}