import { API_KEY } from "./config.js";

const API_URL = "https://api.thecatapi.com/v1";

const headers = {
  "Content-Type": "application/json",
  "x-api-key": API_KEY
};

// GET all cat breeds
export async function getBreeds() {
  const response = await fetch(`${API_URL}/breeds`, {
    headers: headers
  });

  if (!response.ok) {
    throw new Error("Could not load the cat breeds.");
  }

  const data = await response.json();
  return data;
}

// GET cat images using the selected breed
export async function getCatsByBreed(breedId) {
  const response = await fetch(
    `${API_URL}/images/search?limit=6&breed_ids=${breedId}`,
    {
      headers: headers
    }
  );

  if (!response.ok) {
    throw new Error("Could not load the cat images.");
  }

  const data = await response.json();
  return data;
}

// POST an image to the user's favorites
export async function addFavorite(imageId) {
  const response = await fetch(`${API_URL}/favourites`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      image_id: imageId
    })
  });

  if (!response.ok) {
    throw new Error("Could not add this cat to favorites.");
  }

  const data = await response.json();
  return data;
}