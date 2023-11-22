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
	<div class="container" >
		{#each orders as order (order.id)}
			<div class="row">
				<div class="col col-width-long">
					<strong>Order ID</strong>
					<p>{order.id}</p>
				</div>
				<div class="col col-width">
					<strong>Order Date</strong>
					<p>{new Date(order.order_date).toDateString()}</p>
				</div>
				<div class="col col-width-long">
					<strong>Items</strong>
					{#each order.cart_items as item (item.id)}
						<p>{item.name} x {item.qty}</p>
					{/each}
				</div>
				<div class="col col-width">
					<strong>Order Total</strong>
					<p>RM {order.total_price.toFixed(2)}</p>
				</div>
				<div class="col col-width">
					<strong>Status</strong>
					<p>{order.is_approved[0].toUpperCase() + order.is_approved.slice(1)}</p>
				</div>
			</div>
			<br />
		{/each}
	</div>
	<button on:click={backToProfile} class="btn btn-primary">Back</button>
</div>

<style>

	.p-3 {
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter;
		color: #736d69;
		font-size: 1.1vw;
	}
	h2{
		margin-top: 2%;
		color: #5c5957;
		font-size: 23px;
		margin-left: 5%;
		font-weight: 900;
	}
	

	.container{
		width:90%;
	}

	.row{
		background-color:rgba(255, 255, 255, 0.7);
		padding:1rem;

	}

	.btn {
		background-color: #736d69;
		color: rgba(255, 255, 255, 0.7);
		border: none;
		font-size: 1.1vw;
		margin-left: 5%;
	}

	.btn:hover {
		background-color: rgba(115, 109, 105, 0.3);
	}

	.col-width-long {
		width: 19%; /* Adjust the width for the Order ID column */
	}
	.col-width {
		width: 11%;
	}

	.col {
		flex: 1 1 auto; /* Make columns equal width */
		 /* Adjust the space between columns */
	}

	.col:last-child {
		margin-right: 0;
	}

</style>