<svelte:head>
	<title>Cuddles Vet - Products</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"/>
</svelte:head>

<script>
	/**
	 * @typedef {Object} Product
	 * @property {string} name - The name of the product.
	 * @property {string} price - The price of the product.
	 * @property {string} image - The image URL of the product.
	 */
	
   	/** @type {Product | null} */
  	let selectedProduct = null;

	// Original product list (used for resetting)
	const originalProducts = [
    {
      name: "Product 1",
      price: "Product 1 Price",
      image: "product1.png",
    },
    {
      name: "Product 2",
      price: "Product 2 Price",
      image: "product2.jpg",
    },
    {
      name: "Product 3",
      price: "Product 3 Price",
      image: "product3.jpg",
    },
    {
      name: "Product 4",
      price: "Product 4 Price",
      image: "product4.jpg",
    },
    {
      name: "Product 5",
      price: "Product 5 Price",
      image: "product5.jpg",
    },
	{
      name: "Product 6",
      price: "Product 6 Price",
      image: "product6.jpg",
    },
    // Add more products as needed
  	];

  
  	let products = originalProducts.slice(); // Create a copy of the original
	
	/** @type {string} */
	let searchQuery = ""; // Initialize searchQuery variable
	function search() {
    // Convert the searchQuery to lowercase for case-insensitive search
    const query = searchQuery.toLowerCase();

    // Filter the products based on the search query
    const filteredProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.price.toLowerCase().includes(query)
      );
    });

    // Update the products array with the filtered results
    products = filteredProducts;
  	}

	/** Reset the search query and restore original products. */
  	function resetSearch() {
    searchQuery = ""; // Clear the search query
    products = originalProducts.slice();
  	}
</script>

<div class = "body">
	<div class="section1">
		<div class="row">
			<div class="col">
				<div class="search-bar">
					<input
						class="search-input"
						type="text"
						placeholder="What are you looking for?"
						bind:value={searchQuery} 
					/>
					<button class="search-button" on:click={search}>
						<img src="searchicon.png" alt="Search" /> <!-- Add your image source here -->
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="section2">
		<div class="row">
			{#each products as product, index (product.name)}
			<div class="col-md-4 {index >= 3 ? 'second-row-product' : ''}">
				<div class="product" 
				role="button" 
				tabindex="0" 
				on:click={() => (selectedProduct = product)}
				on:keydown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
					  selectedProduct = product;
					}
				}}>
					<img src={product.image} alt={product.name}>
					<p>{product.name}</p>
					<p>{product.price}</p>
				</div>
			</div>
			{/each}
		</div>
	</div>
</div>

{#if selectedProduct}
<div class="popup">
    <div class="popup-content">
		<button class="icon1"
			on:click={() => (selectedProduct = null)} 
			on:keydown={(e) => { if (e.key === "Enter" || e.key === " ") { selectedProduct = null; } }}>
			<img src="cross.png" alt= "cross icon">
		</button>
		<div class="popup-info">
			<img id="popup-image"src={selectedProduct.image} alt={selectedProduct.name}>
			<div class="text-info">
				<p id="popup-product-name">{selectedProduct.name}</p>
				<p id="popup-product-price">{selectedProduct.price}</p>
			</div>
		</div>
		<div class="popup-action-container">
			<button class="plus-qty" on:click={() => { /* Implement quantity increase logic */ }}>
			<img src="plusqty.png" alt="Add product quantity">
			</button>
			<button class="minus-qty" on:click={() => { /* Implement quantity decrease logic */ }}>
			<img src="minusqty.png" alt="Minus product quantity">
			</button>
			<button class="add-to-cart" on:click={() => { /* Implement add to cart logic */ }}>
			Add to Cart
			</button>
		</div>
		
		
    </div>
</div>

{/if}


<style>
	.body{
		display: flex; /* Add Flexbox to center the content vertically */
		flex-direction: column; /* Stack items vertically */
		justify-content: flex-start; /* Align content at the top */
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter;
		width: 100%; /* Use viewport width to cover the whole width of the page */
		height: 100vh;
		font-size:1.2vw;

	}
	.section1 {
		 color: #736D69;
	}
  
	.search-input {
		background-color: #ffffffb3;
		width: 81%;
		height:5vh;
		margin-top:3%;
		margin-left:9.5%;
		border:none;
	}
	.search-button{
		margin-left:-4.1%;
		width:3.5%;
		height:4.3vh;
		border:none;
		background-color: rgba(115, 109, 105, 0.2);
		border-radius: 4px;;
	}

	.search-button img{
		width:60%;
	}

	.search-button:hover {
	background-color: rgba(92, 89, 87, 0.5);
	}
	.section2 {
		margin: 1.5% 9.6%;

	}

	.row {
		display: flex;
		flex-wrap: wrap;
	}

	.col-md-4 {
		flex: 0 0 33.33%; /* Each column occupies 33.33% of the row (4 out of 12 columns) */
		box-sizing: border-box;
	}

	.product {
		display: flex;
		flex-direction: column; /* Stack items vertically */
  		align-items: center; 
		margin-top: 3%;
		border: 1px solid rgba(92, 89, 87, 0.5);
		text-align: left;
		padding: 3%;
		background-color: rgba(255, 255, 255, 0.7);
	}

	.product img {
		max-width: 36%;
		margin-bottom: 1rem;
	}

	.product p {
		flex-grow: 1;
	}

	.second-row-product {
		margin-top: 1.5%;
	}
	
	#popup-product-name{
		font-size: 2.5vw;
	}

  	.popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
  	}

  	.popup-content {
		position: relative;
		background: #fff;
		padding: 2%;
		border-radius: 8px;
		max-width: 56rem;
		height: auto;
		width: 100%;
		text-align: left;
		display: flex; /* Add flexbox to align items horizontally */
    	align-items: center;
  	}

	.icon1{
		max-width: 5%;
		position: absolute; 
		top: 2%;
    	right: 1%;
  		/* Control the height of the image */
  		cursor: pointer;
		background: none;
  		border: none;
	}

	.icon1 img{
		width:100%;
	}

	#popup-image{
		width:23%;
		margin-left:10%;
		margin-top:3%;
	}

	.popup-info {
        display: flex;
        align-items: center;
    }

	.popup-action-container {
    	position: absolute;
  		bottom: 5%;
  		right: -45%;

  		display: flex;
  		align-items: center;
	}

	.add-to-cart{
		margin-left:10%;
		background-color: #736D69; /* Set the background color for the button */
		color: rgba(255, 255, 255, 0.7); /* Set the text color */
		border: none; /* Remove the button border */
		padding: 1.5%; /* Add some padding to the button */
		border-radius: 10px; /* Add rounded corners */
		cursor: pointer; /* Change the cursor to a hand pointer on hover */
		width:20%;
	}

	.add-to-cart:hover {
		background-color: rgba(115, 109, 105, 0.25);;
	}

	.popup-action-container img{
    	width:50%;
	
	}

	.plus-qty, .minus-qty{
		width:10%;
		border:none;
		background-color: rgba(255, 255, 255, 0.0);
	}
	
	.popup-content img{
		margin-top:10%;
		margin-left: -15%;
	}

</style>


	

  
