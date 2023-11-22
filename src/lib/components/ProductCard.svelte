<script>
	import { goto } from '$app/navigation';
	import messagesStore from '$lib/stores/messages.store';

	export let product_name;
	export let num_of_sold;
	export let counter = 1;
	export let product_id;
	export let user_id;
	export let price = 0;
	export let image_path = '/product1.png';
	export let description = '';

	async function addToCart() {
		if (!user_id) {
			goto('/login');
			return;
		}
		try {
			const res = await fetch(`/api/addToCart/${user_id}/${product_id}/${counter}`, {
				method: 'POST'
			});

			if (res.status == 200 && counter > 0) {
				messagesStore.showSuccess(`${counter} x ${product_name} has been added to cart!`);
				counter = 1;
			}

			if (res.status == 200 && counter == 0) {
				messagesStore.showSuccess(`${product_name} has been removed from cart!`);
				counter = 1;
			}

			return;
		} catch {
			messagesStore.showError('Failed to add to cart!');
		}

		messagesStore.showError('Failed to add to cart!');
	}
</script>

<div class="card">
	<div class="d-flex justify-content-center">
		<img src={image_path} alt="" class="card-img-top" style="width: 40%;" />
	</div>
	<div class="card-body">
		<div class="d-flex justify-content-between">
			<h5 id="name">{product_name}</h5>
			<h6 class="align-self-center" id="num-sold">{num_of_sold} sold</h6>
		</div>
		<p>{description}</p>
		<h5 id="price">RM {price}</h5>
		<div class="d-flex gap-3 justify-content-between">
			<div class="d-flex gap-3" id="plus-minus">
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					src="/dash-circle.svg"
					alt=""
					on:click={() => {
						if (counter > 0) {
							counter -= 1;
						}
					}}
					style="width: 3.4vh; height: 3.4vh;"
				/>
				<p class="pt-3">{counter}</p>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img
					src="/plus-circle.svg"
					alt=""
					on:click={() => {
						counter += 1;
					}}
					style="width: 3.4vh; height: 3.4vh;"
				/>
			</div>
			<button
				type="submit"
				class:btn-primary={counter != 0}
				class:btn-danger={counter == 0}
				class="btn"
				on:click={addToCart}>{counter == 0 ? 'Remove Item' : 'Add to Cart'}</button
			>
		</div>
	</div>
</div>

<style>
	.btn{
		background-color: #736D69; 
		color: rgba(255, 255, 255, 0.7); 
		border: none; 
		padding: 2.5%; 
		border-radius: 10px; 
		cursor: pointer;
		height:100%;
		margin-top:2%;
		font-size:1vw;
		
	}

	.btn:hover {
		background-color: rgba(115, 109, 105, 0.25);
	}

	.card{
		font-family: Inter;
		color: #5C5957;
		font-size:1vw;
		padding:1rem;
	}

	#name, #price {
		font-weight:900;
		font-size:1.3vw;
	}

    #plus-minus {
        align-items: center; /* Align items vertically in the center */
    }

	#num-sold{
		font-size:1vw;
	}

	
</style>
