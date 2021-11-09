const makeupE1 = document.getElementById('makeup');
getData();
async function getData()
{
	const res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick');
	const result = await res.json();
	displayData(result);
}
function displayData(result) {
	makeupE1.innerHTML = '';

	result.forEach(data => {
		const dataEl = document.createElement('div');
		dataEl.classList.add('card');
        
		dataEl.innerHTML = `
            <div>
            <h3 class="data-name">Product ID : ${data.id}</h3>
                <img src="${data.image_link}" alt="Image can't be loaded as it is not available in API" />
            </div>
            <div class="card-body">
            <p>
            <strong>Product Name : </strong>
            ${data.name}
        </p>
                
                <p class="data-region">
                    <strong>Brand : </strong>
                    ${data.brand}
                </p>
                <p>
                    <strong>Price : </strong>
                    ${data.price_sign}${data.price}
                </p>
                <p><form action="${data.product_link}">
                <input class="button" type="submit" value="Product Link" />
                </form></p>
                <p>
                    <strong>Description of Product : </strong>
                    ${data.description}
                </p>
                </div>`
		makeupE1.appendChild(dataEl);
        
	});
}
