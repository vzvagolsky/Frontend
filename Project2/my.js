 
    // Получение данных о продуктах с помощью fetch API
fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    
    displayProducts(data);
  })
  .catch(error => console.error('Error fetching products:', error));


function displayProducts(data) {
  const productsContainer = document.getElementById('products-container');
  
  
  productsContainer.innerHTML = '';
  
  // Добавление каждого продукта в контейнер
  data.products.forEach(product => {
	  //console.log(product);
	  
	  
    const productElement = document.createElement('div');
    productElement.classList.add('productcard');
    productElement.innerHTML = `
	   <div>
	   <img src=${product.thumbnail} width=50%>
	   </div>
	   <p> ${product.thumbnail}    </p>
	   
	   
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>Price: ${product.price}</p>
	  
    `;
    productsContainer.appendChild(productElement);
	
	
	
  });
}

