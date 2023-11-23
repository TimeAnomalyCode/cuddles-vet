<script>
	import ProfileSetupForm from '$lib/components/Forms/ProfileSetupForm.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	export let form;
</script>

<div class="p-3">
	<p class="title">Profile Setup</p>
		<div>
			<ProfileSetupForm form={{ ...data.profile, ...form }} edit={false} />
		</div>
</div>

<style>
	.p-3 {
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter, sans-serif;
		color: #736d69;
		font-size: 1.1vw;
	}
	.title{
		margin-top: 2%;
		color: #5c5957;
		font-size: 23px;
		margin-left: 7.5%;
		font-weight: 900;
		margin-bottom: 1.5%;
	}
</style>