<script>
	import { enhance } from '$app/forms';

	export let form;
	export let edit = false;
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
			placeholder="Full Name"
		/>
		{#if form?.error_name}
			<div class="invalid-feedback">{form?.error_name}</div>
		{/if}
	</div>
	<div class="mb-3">
		<label for="birthday" class="form-label">Birthday</label>
		<input
			value={form?.birthday || ''}
			class:is-invalid={form?.error_birthday}
			type="date"
			name="birthday"
			class="form-control"
			id="birthday"
			placeholder="Birthday"
		/>
		{#if form?.error_birthday}
			<div class="invalid-feedback">{form?.error_birthday}</div>
		{/if}
	</div>
	<div class="mb-3">
		<label for="phone_number" class="form-label">Phone Number</label>
		<input
			value={form?.phone_number || ''}
			class:is-invalid={form?.error_phone_number}
			type="number"
			name="phone_number"
			class="form-control"
			id="phone_number"
			placeholder="Phone Number"
		/>
		{#if form?.error_phone_number}
			<div class="invalid-feedback">{form?.error_phone_number}</div>
		{/if}
	</div>
	<div class="mb-3">
		<label class="form-label" for="address">Address</label>
		<textarea
			class="form-control"
			placeholder="Address"
			id="address"
			name="address"
			value={form?.address || ''}
			class:is-invalid={form?.error_address}
			style="height: 100px"
		/>
		{#if form?.error_address}
			<div class="invalid-feedback">{form?.error_address}</div>
		{/if}
	</div>
	{#if edit}
		<div class="mb-3">
			<label for="main_picture" class="form-label">Profile Picture</label>
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
	{/if}
	<button disabled={submitting} type="submit" class="btn">
		{#if submitting}
			Submitting...
		{:else}
			Submit
		{/if}
	</button>
</form>

<style>
	.btn{
		width:87%;
		background-color: #736D69;
    	color: rgba(255, 255, 255, 0.8);
		font-size: 1.1vw;
		margin-top: 3%;
		margin-bottom: 5%;
		margin-left: 5.9%;
    	padding: 4% 4%;
    	border: none;
    	border-radius: 10px;
    	cursor: pointer;
		font-family: inter, sans-serif;
	}
</style>