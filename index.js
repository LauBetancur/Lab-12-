import { getCharacter } from "./utils.js";

const render = async () => {
  const response = await getCharacter();
  console.log(response);

  const characters = document.querySelector(".characters");
  for (const character of response) {
    
    const container = document.createElement("div");
    container.classList.add("container");

    const left = document.createElement("div");
    left.classList.add("left");
    container.appendChild(left);

    const displayImg = document.createElement("img");
    displayImg.src = character.displayIcon;
    left.appendChild(displayImg);

    const right = document.createElement("div");
    right.classList.add("right");
    container.appendChild(right);

    const displayName = document.createElement("h2");
    displayName.textContent = character.displayName;
    right.appendChild(displayName);

    const description = document.createElement("p");
    description.textContent = character.description;
    right.appendChild(description);

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btnDiv");
    right.appendChild(btnDiv);

    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "View Details";
    btnDiv.appendChild(button); 

    button.addEventListener("click", () => {
      window.location.href = `./characters.html?id=${character.uuid}`;  
    });

    const trash = document.createElement("i");
    trash.classList.add("fas", "fa-trash", "fa-3x");
    btnDiv.appendChild(trash);
    
    trash.addEventListener("click", async () => {
      container.remove();
    });

    characters.appendChild(container);
  }
};

document.addEventListener("DOMContentLoaded", render);
