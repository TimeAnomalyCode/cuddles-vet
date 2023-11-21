<script>
	import { goto } from '$app/navigation';
	import messagesStore from '$lib/stores/messages.store';

	export let product_name = 'Product Name';
	export let counter = 1;
	export let product_id;
	export let product_price = 0;
	export let user_id;
	export let image_path = '/product1.png';

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
			}

			if (res.status == 200 && counter == 0) {
				messagesStore.showSuccess(`${product_name} has been removed from cart!`);
			}

			return;
		} catch {
			messagesStore.showError('Failed to add to cart!');
		}

		messagesStore.showError('Failed to add to cart!');
	}
</script>

<div class="card">
	<div class="d-flex flex-row gap-3">
		<img src={image_path} alt="" style="width: 100px;" />
		<div class="d-flex flex-column justify-content-between">
			<h2>{product_name}</h2>
			<div class="d-flex gap-3">
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					src="/dash-circle.svg"
					alt=""
					on:click={async () => {
						if (counter > 0) {
							counter -= 1;
							await addToCart();
						}
					}}
				/>
				<p class="pt-3">{counter}</p>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img
					src="/plus-circle.svg"
					alt=""
					on:click={async () => {
						counter += 1;
						await addToCart();
					}}
				/>
			</div>
		</div>
		<div class="d-flex flex-column ms-auto gap-3 pt-3 pe-3 pb-3 justify-content-between">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<img
				src="/trash.svg"
				alt=""
				class="align-self-center"
				style="width: 30px;"
				on:click={async () => {
					counter = 0;
					await addToCart();
				}}
			/>
			<strong>RM {product_price}</strong>
		</div>
	</div>
</div>
