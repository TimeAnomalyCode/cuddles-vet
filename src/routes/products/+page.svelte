<svelte:head>
	<title>Cuddles Vet - Products</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"/>
</svelte:head>

<script>

	// Original product list (used for resetting)
	const originalProducts = [
    {
      name: "Product 1",
      price: "Product 1 Price",
      image: "product1.jpg",
	  rating: "Product 1 rating",
	  sold: "xxx sold"
    },
    {
      name: "Product 2",
      price: "Product 2 Price",
      image: "product2.jpg",
	  rating: "Product 2 rating",
	  sold: "xxx sold"
    },
    {
      name: "Product 3",
      price: "Product 3 Price",
      image: "product3.jpg",
	  rating: "Product 3 rating",
	  sold: "xxx sold"
    },
    {
      name: "Product 4",
      price: "Product 4 Price",
      image: "product4.jpg",
	  rating: "Product 4 rating",
	  sold: "xxx sold"
    },
    {
      name: "Product 5",
      price: "Product 5 Price",
      image: "product3.jpg",
	  rating: "Product 5 rating",
	  sold: "xxx sold"
    },
    // Add more products as needed
  ];

  	let products = originalProducts.slice(); // Create a copy of the original

	let searchQuery = ""; // Initialize searchQuery variable
	function search() {
    // Convert the searchQuery to lowercase for case-insensitive search
    const query = searchQuery.toLowerCase();

    // Filter the products based on the search query
    const filteredProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.price.toLowerCase().includes(query)||
		product.rating.toLowerCase().includes(query)
      );
    });

    // Update the products array with the filtered results
    products = filteredProducts;
  }

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
	<div class = "section2">
		<div class="row">
			<div class="row">
				<div class="divider"></div>
				<div class="category-bar">
					<div class="category">Food</div>
					<div class="category">Supplements</div>
					<div class="category">Grooming</div>
				</div>
				<div class="divider" id="div2"></div>
				<button class="filter-button">
					<img src="sortby.png" alt="Sort By Icon">
					Filter By
					<img src="downarrow.png" alt="Down Arrow">
				</button>
			</div>
		</div>
	</div>
	<div class="section3">
		<div class="row">
			{#each products as product, index (product.name)}
			  <div class="col-md-4 {index >= 3 ? 'second-row-product' : ''}">
				<div class="product">
					<img src={product.image} alt={product.name}>
					<p>{product.name}</p>
					<p>{product.price}</p>
					<div class="product-details">
						<p >{product.rating}</p>
						<p id="sold">{product.sold}</p>
					</div>
				  <div class="action-container">
					<button class= plus-qty>
						<img src="plusqty.png" alt="Add product quantity">
					</button>
					<button class= minus-qty>
						<img src="minusqty.png" alt="Minus product quantity">
					</button>
					<button class="add-to-cart">Add to Cart</button>
				  </div>
				</div>
			  </div>
			{/each}
		</div>
	</div>
</div>

<style>
	.body{
		display: flex; /* Add Flexbox to center the content vertically */
		flex-direction: column; /* Stack items vertically */
		justify-content: flex-start; /* Align content at the top */
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter;
		width: 100%; /* Use viewport width to cover the whole width of the page */
		height: 100vh;
		font-size:1vw;

	}
	.section1 {
		 color: #736D69;
	}
  
	.search-input {
		background-color: #ffffffb3;
		width: 80%;
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
	
	.section2{
		color: #736D69;
	}
	.divider{
		width: 90%; /* Set the same width as the search bar */
		height: 0.3px; /* Set the height of the divider line */
		background-color: rgba(92, 89, 87, 0.5); /* Set the color of the divider line */
		margin-left: 5.5%; /* Match the margin-left of the search bar */
		margin-top:3%;
	}

	#div2{
		margin-top:1%;
	}

	.category-bar {
		width: 40%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top:1%;
  	}

  	.filter-button {
		background-color: rgba(115, 109, 105, 0.5); /* Set the background color for the button */
		color: rgba(255, 255, 255, 0.7); /* Set the text color */
		border: none; /* Remove the button border */
		padding: 0.7% 0.7%; /* Add some padding to the button */
		border-radius: 10px; /* Add rounded corners */
		cursor: pointer; /* Change the cursor to a hand pointer on hover */
		margin-top: 1.5%; /* Adjust the top margin as needed */
		width:11%;
		margin-left:10.5%;
	}

	.filter-button:hover {
		background-color: #5C5957; 
		color: #ffffff; 
	}

	.filter-button img{
		width:15%;
	}

	.section3 {
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
		border: 1px solid rgba(92, 89, 87, 0.5);
		text-align: left;
		padding: 3%;
		background-color: rgba(255, 255, 255, 0.7);
	}

	.product img {
		max-width: 100%;
		height: auto;
	}

	.product p {
		margin-top: 1.2%;
	}

	.second-row-product {
		margin-top: 2%;
	}

	.product-details {
		display: flex;
		justify-content: space-between;
	}

	#sold{
		margin-right:1.6%;
	}
	.action-container {
    	display: flex;
    	align-items: center;
	}
	.add-to-cart{
		margin-left:40%;
		background-color: #736D69; /* Set the background color for the button */
		color: rgba(255, 255, 255, 0.7); /* Set the text color */
		border: none; /* Remove the button border */
		padding: 3%; /* Add some padding to the button */
		border-radius: 10px; /* Add rounded corners */
		cursor: pointer; /* Change the cursor to a hand pointer on hover */
		width:85%;
		font-size:0.9vw;
	}
	.add-to-cart:hover {
		background-color: rgba(115, 109, 105, 0.25);;
	}

	.plus-qty, .minus-qty{
		width:30%;
		border:none;
		background-color: rgba(255, 255, 255, 0.7);
	}

	
</style>
  
