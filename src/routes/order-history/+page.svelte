<script>
	import { goto } from '$app/navigation';

	/** @type {import('./$types').PageData} */
	export let data;
	const orders = data.orders.sort((a, b) => {
		return new Date(b.order_date) - new Date(a.order_date);
	});
	console.log(data);

	function backToProfile() {
		goto('/profile');
	}
</script>

<div class="p-3">
	<h2>Order History</h2>
	<div class="container">
		{#each orders as order (order.id)}
			<div class="row" style="background-color: cornsilk">
				<div class="col">
					<strong>Order ID</strong>
					<p>{order.id}</p>
				</div>
				<div class="col">
					<strong>Order Date</strong>
					<p>{new Date(order.order_date).toDateString()}</p>
				</div>
				<div class="col">
					<strong>Items</strong>
					{#each order.cart_items as item (item.id)}
						<p>{item.name} x {item.qty}</p>
					{/each}
				</div>
				<div class="col">
					<strong>Order Total</strong>
					<p>RM {order.total_price.toFixed(2)}</p>
				</div>
				<div class="col">
					<strong>Status</strong>
					<p>{order.is_approved[0].toUpperCase() + order.is_approved.slice(1)}</p>
				</div>
			</div>
			<br />
		{/each}
	</div>
	<button on:click={backToProfile} class="btn btn-primary">Back</button>
</div>
