import { characterById } from "./utils.js"

const render = async () => {

    // Sync ID
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const character = await characterById(id);

    // Set header with character name
    const headTitle= document.querySelector("#headTitle");
    headTitle.textContent = `${character.displayName} Character`;

    // Character image + div
    const Character = document.querySelector(".Character");
    const leftImg = document.createElement("div");
    leftImg.className = "leftImg";
    const img = document.createElement("img");
    img.src = character.fullPortrait;
    leftImg.appendChild(img);
    Character.appendChild(leftImg);

    // Character info + div
    const rightInfo = document.createElement("div");
    rightInfo.className = "rightInfo";
    Character.appendChild(rightInfo);

    const displayName = document.createElement('h1');
    displayName.textContent = character.displayName;
    rightInfo.appendChild(displayName);

    const description = document.createElement('p');
    description.textContent = character.description;
    rightInfo.appendChild(description);

    const h3 = document.createElement('h3');
    h3.textContent = "Role: " + character.role.displayName;
    rightInfo.appendChild(h3);

    const roleDescription = document.createElement('p');
    roleDescription.textContent = character.role.description;
    rightInfo.appendChild(roleDescription);

    const btnBackDiv = document.createElement('div');
    btnBackDiv.className = "btnBackDiv";
    rightInfo.appendChild(btnBackDiv);

    const btnBack = document.createElement('button');
    btnBack.classList.add("btnBack");
    btnBack.textContent = "Back to characters";
    btnBackDiv.appendChild(btnBack);

    btnBack.addEventListener("click", () => {
        window.location.href = './index.html'
    });

}

document.addEventListener("DOMContentLoaded", render);
