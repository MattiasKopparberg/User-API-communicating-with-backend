const users = document.querySelector(".users");

function getUserData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then(data => {
            data.forEach(user => {
                const userDiv = document.createElement("article");
                userDiv.classList.add("user");

                userDiv.innerHTML = `
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <button class="showMoreBTN">Click for more info</button>
                    <p class="hidden"><strong>City:</strong> ${user.address.city}</p>
                    <p class="hidden"><strong>Phone:</strong> ${user.phone}</p>
                    <p class="hidden"><strong>Company:</strong> ${user.company.name}</p>
                `;

                users.appendChild(userDiv);

                showMoreInfo(userDiv);
            });
        });
}

function showMoreInfo(userElement) {
    const showMoreBTN = userElement.querySelector(".showMoreBTN");
    const moreInfo = userElement.querySelectorAll(".hidden");

    showMoreBTN.addEventListener("click", () => {
        moreInfo.forEach(info => {
            info.classList.toggle("hidden");
        });
        showMoreBTN.textContent = moreInfo[0].classList.contains("hidden")
            ? "Click for more info"
            : "Hide info";
    });
}

getUserData();
