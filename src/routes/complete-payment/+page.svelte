<script>
	/** @type {import('./$types').PageData} */
	export let data;
	export let form;

	import { enhance } from '$app/forms';

	let submitting = false;

	$: if (form && form.success === false) {
		submitting = false;
	}

	function submitForm(e) {
		submitting = true;
	}
</script>

<div class="p-3">
	<div class="d-flex justify-content-center">
		<div class="d-flex flex-column justify-content-center gap-3">
			<strong>Scan To Pay</strong>
			<img src="/cuddles-qr.png" alt="" style="width: 200px;" />
			<p>RM 100</p>
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
