<script>
	import { enhance } from '$app/forms';

	export let form;
	let submitting = false;

	$: if (form && form.success === false) {
		submitting = false;
	}

	function submitForm(e) {
		submitting = true;
	}
</script>

<form on:submit={submitForm} use:enhance enctype="multipart/form-data" method="POST">
	<div class="mb-3">
		<label for="name" class="form-label">Name</label>
		<input
			type="text"
			name="name"
			class="form-control"
			id="name"
			value={form?.name || ''}
			class:is-invalid={form?.error_name}
			placeholder="Book name"
		/>
		{#if form?.error_name}
			<div class="invalid-feedback">{form?.error_name}</div>
		{/if}
	</div>
	<div class="mb-3">
		<label for="position" class="form-label">Position</label>
		<input
			value={form?.position || ''}
			class:is-invalid={form?.error_position}
			type="text"
			name="position"
			class="form-control"
			id="position"
			placeholder="position"
		/>
		{#if form?.error_position}
			<div class="invalid-feedback">{form?.error_position}</div>
		{/if}
	</div>
	<div class="mb-3">
		<label class="form-label" for="description">Description</label>
		<textarea
			class="form-control"
			placeholder="Book Description here"
			id="description"
			name="description"
			value={form?.description || ''}
			class:is-invalid={form?.error_description}
			style="height: 100px"
		/>
		{#if form?.error_description}
			<div class="invalid-feedback">{form?.error_description}</div>
		{/if}
	</div>
	<div class="mb-3">
		<label for="main_picture" class="form-label">Main Doctor Picture</label>
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
	</div>
	<button disabled={submitting} type="submit" class="btn btn-primary w-100">
		{#if submitting}
			Submitting...
		{:else}
			Submit
		{/if}
	</button>
</form>
