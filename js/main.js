"use strict";

import { Countries } from "./countries.js";

const input = document.getElementById("searchbar");
const searchButton = document.getElementById("search");
const resultsDiv = document.getElementById("results");

function displayResults(data) {
    resultsDiv.innerHTML = "";

    if (data && data.response && data.response.length > 0) {
        const countryList = data.response.map((country) => `<li>${country}</li>`).join("");
        resultsDiv.innerHTML = `<ul>${countryList}</ul>`;
    } else {
        resultsDiv.innerHTML = "<p>No countries found.</p>";
    }
}

const countries = new Countries();

async function searchCountries() {
    const query = input.value.trim();
    if (query.length >= 3) {
        try {
            const data = await countries.fetchCountries(query);
            displayResults(data); 
        } catch (error) {
            resultsDiv.innerHTML = `<p class="text-danger">${error.message}</p>`;
        }
    } else {
        resultsDiv.innerHTML = "<p>Type at least 3 characters!</p>"; 
    }

}

searchButton.addEventListener("click", searchCountries);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchCountries();
    }
});