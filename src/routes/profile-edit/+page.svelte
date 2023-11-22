<script>
	import ProfileEditForm from '$lib/components/Forms/ProfileEditForm.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	export let form;
</script>

<div class="p-5">
	<div class="row">
		<div class="col">
			<h1>Profile Edit</h1>
		</div>
		<ProfileEditForm form={{ ...data.profile, ...form }} />
	</div>
</div>
