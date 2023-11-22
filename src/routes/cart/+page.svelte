<script>
	import { goto } from '$app/navigation';
	import CartCard from '$lib/components/CartCard.svelte';
	import { redirect } from '@sveltejs/kit';
	export let data;

	const user_id = data.user?.id;
	const name = data.user.name;
	let current_address = data.profile.address;
	let address = current_address;

	let cart = data.cart;
	// console.log(data);

	const isEmpty = !data.has_cart || cart.items.length === 0;
	const deliveryFee = 4.9;
	const total = getTotal();
	const nett_total = total + deliveryFee;
	// console.log(cart);
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

	function getTotal() {
		if (data.has_cart) {
			return cart.items.reduce((accumulator, object) => {
				return accumulator + object.price * object.qty;
			}, 0);
		}
		return 0;
	}

	async function placeOrder() {
		const res = await fetch(
			`/api/addToOrder/${user_id}/${data.cart_id}/${current_address}/${nett_total}`,
			{
				method: 'POST'
			}
		);

		if (res.status === 200) {
			const { order_id } = await res.json();
			goto(`/complete-payment/${order_id}`);
		}
	}
</script>

{#if isEmpty}
	<div class="p-3 d-flex flex-column gap-3">
		<h2 class="align-self-center">Cart is Empty</h2>
		<p class="align-self-center">You can order in the products section</p>
	</div>
{/if}
{#if !isEmpty}
	<div class="p-3">
		<div class="d-flex justify-content-between">
			<div class="d-flex gap-3 align-items-center">
				<img src="addressicon.png" alt="address" class="image1" />
				<h2 id="address">Delivery Address</h2>
			</div>
		</div>
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
			{#each cart.items as item (item.id)}
				<CartCard
					product_name={item.name}
					counter={item.qty}
					product_id={item.id}
					product_price={item.price.toFixed(2)}
					{user_id}
					image_path={item.main_picture}
				/>
			{/each}
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
			<strong>Order Total ({cart.items.length} {cart.items.length === 1 ? 'item' : 'items'})</strong
			>
			<strong>RM {nett_total.toFixed(2)}</strong>
		</div>
		<hr />
		<div class="d-flex flex-row-reverse">
			<button type="submit" class="btn btn-primary" on:click={placeOrder}> Place Order </button>
		</div>
	</div>
{/if}

<svelte:head>
	<title>Cuddles Vet - Cart</title>
</svelte:head>

<style>
	.p-3 {
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter;
		color: #736d69;
		font-size: 1vw;
	}

	.btn {
		background-color: #736d69;
		color: rgba(255, 255, 255, 0.7);
		border: none;
		font-size: 1vw;
	}

	button[type='submit']:hover {
		background-color: rgba(115, 109, 105, 0.25);
	}

	#address {
		font-size: 1.2vw;
		font-weight: 900;
	}

	.image1 {
		height: 50%;
		width: 10%;
		margin-bottom: -5%;
	}

	hr {
		border-color: rgb(42, 40, 39);
		border-width: 1.5px;
	}
</style>
