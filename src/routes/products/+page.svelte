<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	export let data;

	const user_id = data.user?.id;
	const allProducts = data.products;

	let searchValue = '';
	let products = allProducts;

	function filterProducts() {
		products = allProducts.filter((product) => {
			return product.name.includes(searchValue);
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
		<button type="submit" class="btn btn-primary" on:click={filterProducts}>Search</button>
	</div>
	<br />
	{#if products.length == 0}
		<p>No products found by that name</p>
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
	.btn{
		background-color: #736D69; 
		color: rgba(255, 255, 255, 0.7); 
		border: none; 
		padding: 1%; 
		border-radius: 10px; 
		cursor: pointer; 
		font-size:1vw;
	}
	.btn:hover {
		background-color: rgba(115, 109, 105, 0.25);;
	}

	.form-control{
		height:6vh;
	}
</style>