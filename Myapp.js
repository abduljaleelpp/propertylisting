const properties = document.querySelectorAll('.property');
const form = document.querySelector('form');
const select = document.querySelector('select');
const input = document.querySelector('input');
const pagination = document.querySelector('.pagination');

form.addEventListener('submit', async event => {
    event.preventDefault();
    try {
        const filterType = select.value;
        const searchValue = input.value.toLowerCase();
        const data = { filterType, searchValue };
        console.log(data.filterType,data.searchValue);

        // Send a POST request to the server with the search criteria
        const response = await fetch('/properties', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const filteredProperties = await response.json();

        // Loop through each property and check if it is in the filtered properties array
        properties.forEach(property => {
            const id = property.getAttribute('data-property-id');
            if (filteredProperties.indexOf(id) === -1) {
                property.style.display = 'none';
            } else {
                property.style.display = 'block';
            }
        });
    } catch (error) {
        console.error(error);
        // Show an error message to the user
    }
});

pagination.addEventListener('click', async event => {
    const target = event.target;
    if (target.tagName === 'A') {
        try {
            const pageNumber = target.textContent;
            // Send a GET request to the server to fetch the properties for the selected page
            const response = await fetch(`/properties?page=${pageNumber}`);

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const propertiesData = await response.json();

            // Clear the current properties
            properties.forEach(property => property.remove());

            // Display the new properties
            propertiesData.forEach(propertyData => {
                const property = createPropertyElement(propertyData);
                propertyList.appendChild(property);
            });
        } catch (error) {
            console.error(error);
            // Show an error message to the user
        }
    }
});

// Helper function to create a property element from the data
function createPropertyElement(propertyData) {
    // Create the property element using the data
    // ...
    return property;
}
