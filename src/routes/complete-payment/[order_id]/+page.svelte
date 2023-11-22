<script>
	import { browser } from '$app/environment';

	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;
	export let form;

	import { enhance } from '$app/forms';
	import { getAnalytics, logEvent } from 'firebase/analytics';

	let submitting = false;
	const nett_total = data.order.total_price;

	/**
	 * @type {{ item_id: any; item_name: any; price: any; quantity: any; }[]}
	 */
	const itemToLog = [];
	data.order.cart_items.forEach((val) => {
		let item = {
			item_id: val.id,
			item_name: val.name,
			price: val.price,
			quantity: val.qty
		};
		itemToLog.push(item);
	});

	// console.log(itemToLog);

	$: if (form && form.success === false) {
		submitting = false;
	}

	function submitForm(e) {
		submitting = true;
		if (browser) {
			logEvent(getAnalytics(), 'add_to_cart', {
				currency: 'MYR',
				value: nett_total,
				items: itemToLog
			});
		}
	}
</script>

<div class="p-3">
	<div class="d-flex justify-content-center">
		<div class="d-flex flex-column justify-content-center gap-3">
			<h2 class="align-self-center">Scan To Pay</h2>
			<img class="align-self-center" src="/cuddles-qr.png" alt="" style="width: 200px;" />
			<h3 class="align-self-center">RM {nett_total.toFixed(2)}</h3>
			<form on:submit={submitForm} use:enhance enctype="multipart/form-data" method="POST">
				<label for="main_picture" class="form-label">Upload Proof of Payment</label>
				<input
					class="form-control form-control-lg"
					id="main_picture"
					accept="image/*"
					name="main_picture"
					class:is-invalid={form?.error_main_picture}
					type="file"
				/>
				{#if form?.error_main_picture}
					<div class="invalid-feedback">{form?.error_main_picture}</div>
				{/if}
				<br />
				<button disabled={submitting} type="submit" class="btn btn-primary w-100">
					{#if submitting}
						Submitting...
					{:else}
						Submit
					{/if}
				</button>
			</form>
		</div>
	</div>
</div>

<style>
	.p-3{
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter;
		color: #736d69;
	}

	h2,h3{
		font-weight:800;
		font-size:1.8vw;
	}

	.form-label{
		font-weight:800;
		font-size:1.2vw;
	}

	button[type='submit'] {
		background-color: #736d69;
		color: rgba(255, 255, 255, 0.7);
		padding: 3% 35%;
		border: none;
		border-radius: 10px;
		cursor: pointer;
	}

	/* Change button color on hover */
	button[type='submit']:hover {
		background-color: rgba(115, 109, 105, 0.25);
	}

</style>
