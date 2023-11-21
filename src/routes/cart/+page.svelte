<script>
	import CartCard from '$lib/components/CartCard.svelte';
	export let data;

	const user_id = data.user?.id;
	const name = data.user.name;
	let current_address = data.profile.address;
	let address = current_address;

	const cart = data.cart;
	// console.log(data);

	const isEmpty = cart.items.length === 0;
	const deliveryFee = 4.9;
	const total = cart.items.reduce((accumulator, object) => {
		return accumulator + object.price * object.qty;
	}, 0);
	const nett_total = total + deliveryFee;
	// console.log(total);

	let is_edit_address = false;
	function editAddress() {
		is_edit_address = !is_edit_address;
		if (!is_edit_address) {
			current_address = address;
		}
	}
	function cancelAddress() {
		is_edit_address = !is_edit_address;
		address = current_address;
	}
</script>

<div class="p-3">
	{#if isEmpty}
		<p>Cart is Empty</p>
	{/if}

	<h2>Delivery Address</h2>
	<span>
		{#if is_edit_address}
			<strong>Name</strong>: {name} | <strong>Address</strong>:
			<input type="text" id="address" name="address" bind:value={address} />
			<button type="submit" on:click={editAddress} class="btn btn-primary"> Save Address </button>
			<button type="submit" on:click={cancelAddress} class="btn btn-primary"> Cancel </button>
		{/if}
		{#if !is_edit_address}
			<strong>Name</strong>: {name} | <strong>Address</strong>: {current_address}
			<button type="submit" on:click={editAddress} class="btn btn-primary"> Edit Address </button>
		{/if}
	</span>
	<hr />
	<div class="d-flex flex-column gap-3">
		<CartCard
			product_name={'John'}
			counter={1}
			product_id={''}
			product_price={10}
			user_id={''}
			image_path={''}
		/>
	</div>

	<hr />
	<div class="d-flex justify-content-between">
		<p>Item Total</p>
		<p>RM {total.toFixed(2)}</p>
	</div>
	<div class="d-flex justify-content-between">
		<p>Delivery Fee</p>
		<p>RM {deliveryFee.toFixed(2)}</p>
	</div>
	<div class="d-flex justify-content-between">
		<strong>Order Total (2 items)</strong>
		<strong>RM {nett_total.toFixed(2)}</strong>
	</div>
	<hr />
	<div class="d-flex flex-row-reverse">
		<button type="submit" class="btn btn-primary"> Place Order </button>
	</div>
</div>

<svelte:head>
	<title>Cuddles Vet - Cart</title>
</svelte:head>

<style>
	.p-3 {
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter;
		color: #736d69;
	}

	.rounded {
		background-color: rgba(255, 255, 255, 0.7);
	}

	.btn {
		background-color: #736d69;
		color: rgba(255, 255, 255, 0.7);
		border: none;
	}

	button[type='submit']:hover {
		background-color: rgba(115, 109, 105, 0.25);
	}
</style>
