"use strict";

export class Countries {
    async fetchCountries(query) {
        const url = `https://covid-193.p.rapidapi.com/countries?search=${query}`;
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "a8a3861fe9msh5865c7c537792d8p1db0b6jsn12f5374e0e38",
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error("Error getting API data.");
            }
            return await response.json();
        } catch (error) {
            throw error;
        }
    }
}
