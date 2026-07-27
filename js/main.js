import {
  getBreeds,
  getCatsByBreed,
  addFavorite
} from "./api.js";

import {
  displayBreeds,
  displayCats,
  showMessage
} from "./ui.js";

const breedForm = document.getElementById("breed-form");
const breedSelect = document.getElementById("breed-select");
const catContainer = document.getElementById("cat-container");

// Load the breed dropdown when the page opens
async function loadBreeds() {
  try {
    showMessage("Loading cat breeds...");

    const breeds = await getBreeds();

    displayBreeds(breeds);
    showMessage("Select a breed to begin.");
  } catch (error) {
    showMessage(error.message);
    console.error(error);
  }
}

// Search for cats when the form is submitted
breedForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const breedId = breedSelect.value;

  if (breedId === "") {
    showMessage("Please select a cat breed.");
    return;
  }

  try {
    showMessage("Loading cats...");

    const cats = await getCatsByBreed(breedId);

    displayCats(cats);
    showMessage(`${cats.length} cats were found.`);
  } catch (error) {
    showMessage(error.message);
    console.error(error);
  }
});

// Add a cat to favorites
catContainer.addEventListener("click", async function (event) {
  if (!event.target.classList.contains("favorite-button")) {
    return;
  }

  const button = event.target;
  const imageId = button.dataset.imageId;

  try {
    button.disabled = true;
    button.textContent = "Saving...";

    await addFavorite(imageId);

    button.textContent = "Added to Favorites";
    showMessage("Cat added to favorites.");
  } catch (error) {
    button.disabled = false;
    button.textContent = "Add to Favorites";

    showMessage(error.message);
    console.error(error);
  }
});

loadBreeds();