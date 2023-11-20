<script>
	import messagesStore from '$lib/stores/messages.store';

	export let product_name;
	export let num_of_sold;
	export let counter = 1;
	export let product_id;
	export let user_id;
	export let image_path = '/product1.png';
	export let description = '';

	async function addToCart() {
		try {
			const res = await fetch(`/api/addToCart/${user_id}/${product_id}/${counter}`, {
				method: 'POST'
			});

			if (res.status == 200) {
				messagesStore.showSuccess(`${counter} x ${product_name} has been added to cart!`);
				counter = 1;
			} else {
				messagesStore.showError('Failed to add to cart!');
			}
		} catch {
			messagesStore.showError('Failed to add to cart!');
		}
	}
</script>

<div class="card">
	<div class="d-flex justify-content-center">
		<img src={image_path} alt="" class="card-img-top" style="width: 100px;" />
	</div>
	<div class="card-body">
		<div class="d-flex justify-content-between">
			<h5>{product_name}</h5>
			<h6 class="align-self-center">{num_of_sold} sold</h6>
		</div>
		<p>{description}</p>
		<div class="d-flex gap-3 justify-content-between">
			<div class="d-flex gap-3">
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					src="/dash-circle.svg"
					alt=""
					on:click={() => {
						if (counter > 1) {
							counter -= 1;
						}
					}}
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
				/>
			</div>
			<button type="submit" class="btn btn-primary" on:click={addToCart}>Add to Cart</button>
		</div>
	</div>
</div>
