<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	export let data;

	const user_id = data.user.id;
	const allProducts = [
		{
			name: 'John1',
			num_of_sold: 100,
			description: 'Please go buy',
			id: 'asdadadsadasdadsadsadsd4'
		},
		{
			name: 'John2',
			num_of_sold: 100,
			description: 'Please go buy',
			id: 'asdadadsadasdadsadsadsd3'
		},
		{
			name: 'John3',
			num_of_sold: 100,
			description: 'Please go buy',
			id: 'asdadadsadasdadsadsadsd2'
		},
		{
			name: 'John4',
			num_of_sold: 100,
			description: 'Please go buy',
			id: 'asdadadsadasdadsadsadsd1'
		}
	];

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
					{user_id}
				/>
			</div>
		{/each}
	</div>
</div>

<svelte:head>
	<title>Cuddles Vet - Products</title>
</svelte:head>
