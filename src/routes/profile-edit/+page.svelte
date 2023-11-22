<script>
	import ProfileEditForm from '$lib/components/Forms/ProfileEditForm.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	export let form;
</script>

<div class="p-3">
	<p class="title">Edit Profile
		<i class='bx bx-edit-alt' style='color:#5c5957; font-size: 20px; margin-left: 10px;' ></i>
	</p>
		<div>
			<ProfileEditForm form={{ ...data.profile, ...form }} />
		</div>
</div>

<style>
	.p-3 {
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter, sans-serif;
		color: #736d69;
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