<script>
	let searchTerm = '';
	let products = [
	  { name: 'Product 1' },
	  { name: 'Product 2' },
	  { name: 'Product 3' },
	];
  </script>
  
  <div class="container">
	<h1>Products </h1>
  
	<div class="search-bar">
	  <input
		type="text"
		placeholder="Search for products"
		bind:value={searchTerm}
	  />
	</div>
  
	<div class="product-list">
	  {#each products as product (product.name)}
		<div class="product">{product.name}</div>
	  {/each}
	</div>
  </div>
  
  <style>
	.container {
	  	max-width: 6000px;
	  	margin: 0 auto;
	  	padding: 20px;
	}
  
	.search-bar {
		max-width: 6000px;
	  	margin-bottom: 20px;
	}
  
	.product {
		border: 1px solid #ccc;
	  	padding: 10px;
	  	margin: 10px 0;
	}
  </style>