<script>
	import ProfileSetupForm from '$lib/components/Forms/ProfileSetupForm.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	export let form;
</script>

<div class="p-5">
	<div class="row">
		<div class="col">
			<h1>Profile Setup</h1>
		</div>
		<ProfileSetupForm form={{ ...data.profile, ...form }} edit={false} />
	</div>
</div>
