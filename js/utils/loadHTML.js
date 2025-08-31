export default async (id, file) => {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Fail to load ${file}`);
    }

    const data = await response.text();

    const currentEl = document.getElementById(id);
    if (!currentEl) {
      throw new Error(`Element with ID "${id}" not found!`);
    }

    const temp = document.createElement("div");
    temp.innerHTML = data.trim();

    const newContent = temp.firstElementChild;

    if (!newContent) {
      throw new Error(`File ${file} doesn't contain a valid element!`);
    }

    currentEl.replaceWith(newContent);
  } catch (error) {
    console.error(error);
  }
};