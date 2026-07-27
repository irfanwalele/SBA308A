// Add cat breeds to the dropdown
export function displayBreeds(breeds) {
  const breedSelect = document.getElementById("breed-select");

  breeds.forEach((breed) => {
    const option = document.createElement("option");

    option.value = breed.id;
    option.textContent = breed.name;

    breedSelect.appendChild(option);
  });
}

// Display cat images on the page
export function displayCats(cats) {
  const catContainer = document.getElementById("cat-container");

  catContainer.innerHTML = "";

  if (cats.length === 0) {
    catContainer.innerHTML = "<p>No cats were found.</p>";
    return;
  }

  cats.forEach((cat) => {
    const catCard = document.createElement("div");
    catCard.classList.add("cat-card");

    const image = document.createElement("img");
    image.src = cat.url;
    image.alt = "Cat";

    const favoriteButton = document.createElement("button");
    favoriteButton.textContent = "Add to Favorites";
    favoriteButton.classList.add("favorite-button");
    favoriteButton.dataset.imageId = cat.id;

    catCard.appendChild(image);
    catCard.appendChild(favoriteButton);
    catContainer.appendChild(catCard);
  });
}

// Show messages to the user
export function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
}