<script>
	export let data;

	const isEmpty = false;
	const name = 'John';
	const address = 'asdadasda asdads';
	const productList = [];
</script>

<div class="p-3">
	<h1>Cart</h1>
	{#if isEmpty}
		<p>Cart is Empty</p>
	{/if}

	<p>Delivery Address</p>
	<span>
		Name: {name} | Adresss: <input type="text" id="address" name="address" value={address} />
		<button type="submit" class="btn btn-primary"> Save Address </button>
	</span>
	<hr />

	<div class="d-flex flex-column gap-3">
		<div style="background-color: #D0C4BE;" class="rounded">
			<div class="d-flex flex-row justify-content-between">
				<img src="/favicon.png" alt="Product" />
				<h2>Product Name</h2>
				<img src="/trash.svg" alt="" />
			</div>
			<span class="d-flex flex-row-reverse gap-3">
				<p>RM 100</p>
				<img src="/plus-circle.svg" alt="" />
				<p>1</p>
				<img src="/dash-circle.svg" alt="" />
			</span>
		</div>

		<div style="background-color: #D0C4BE;" class="rounded">
			<div class="d-flex flex-row justify-content-between">
				<img src="/favicon.png" alt="Product" />
				<h2>Product Name</h2>
				<img src="/trash.svg" alt="" />
			</div>
			<span class="d-flex flex-row-reverse gap-3">
				<p>RM 100</p>
				<img src="/plus-circle.svg" alt="" />
				<p>1</p>
				<img src="/dash-circle.svg" alt="" />
			</span>
		</div>
	</div>
	<hr />
	<div class="d-flex justify-content-between">
		<p>Item Total</p>
		<p>RM 100</p>
	</div>
	<div class="d-flex justify-content-between">
		<p>Delivery Fee</p>
		<p>RM 4.90</p>
	</div>
	<div class="d-flex justify-content-between">
		<strong>Order Total (2 items)</strong>
		<strong>RM 104.90</strong>
	</div>
	<hr />
	<div class="d-flex flex-row-reverse">
		<button type="submit" class="btn btn-primary"> Place Order </button>
	</div>
</div>

<svelte:head>
	<title>Cuddles Vet - Cart</title>
</svelte:head>
