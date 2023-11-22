<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	export let data;

	const user_id = data.user?.id;
	const allProducts = data.products;

	let searchValue = '';
	let products = allProducts;

	function filterProducts() {
		products = allProducts.filter((product) => {
			return product.name.toLowerCase().includes(searchValue.toLowerCase());
		});
	}
</script>

<div class="p-5" style="background-color: rgba(208, 196, 190, 0.3);">
	<div class="d-flex gap-3">
		<input
			type="search"
			name="searchbox"
			id="searchbox"
			placeholder="What would you like to buy?"
			bind:value={searchValue}
			class="form-control"
		/>
		<button type="submit" on:click={filterProducts}>Search</button>
	</div>
	<br />
	{#if products.length == 0}
	<div class="p-3 d-flex flex-column gap-3">
		<img src="walkdog.gif" alt="Animated GIF" class="gif">
		<h2 class="align-self-center" id="no-product1">Oops! No products match that name.</h2>
		<p class="align-self-center" id="no-product2">Keep exploring and enjoy your shopping journey!</p>
	</div>
	{/if}
	<div class="row row-cols-3 g-4">
		{#each products as product (product.id)}
			<div class="col">
				<ProductCard
					product_name={product.name}
					num_of_sold={product.num_of_sold}
					product_id={product.id}
					description={product.description}
					price={product.price.toFixed(2)}
					image_path={product.main_picture}
					{user_id}
				/>
			</div>
		{/each}
	</div>
</div>

<svelte:head>
	<title>Cuddles Vet - Products</title>
</svelte:head>

<style>
	button {
		background-color: #736d69;
		color: rgba(255, 255, 255, 0.7);
		border: none;
		padding: 1%;
		border-radius: 10px;
		cursor: pointer;
		font-size: 1vw;
	}
	button:hover {
		background-color: rgba(115, 109, 105, 0.25);
	}

	.form-control {
		height: 6vh;
	}

	#searchbox, p{
		font-size:1vw;
	}

	.gif{
		width: 20%;
		margin: auto;
	}

	#no-product2{
		font-size:1.2vw;
	}

	#no-product1{
		font-size:1.8vw;
		font-weight: 800;
	}
</style>
