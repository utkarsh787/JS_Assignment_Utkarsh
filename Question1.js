document.getElementById("fetchUsers").addEventListener("click", function() {
    const userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = "<p>Loading...</p>";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            userContainer.innerHTML = "";
            users.forEach(user => {
                const userCard = document.createElement("div");
                userCard.classList.add("user-card");
                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
                `;
                userContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            userContainer.innerHTML = "<p>Error fetching users.</p>";
            console.error("Error fetching users:", error);
        });
});