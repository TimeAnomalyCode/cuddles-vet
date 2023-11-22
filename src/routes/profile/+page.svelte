<script>
	export let data;
	// console.log(data);
</script>

<div class="p-3">
	<h1 class="title">My Profile</h1>
	<div class="rounded">
		<div class="d-flex flex-row gap-500 justify-content-evenly">
			<div class="d-flex flex-column gap-3" id="col1">
				<img src={data.profile.main_picture} alt="" class="rounded-circle" style="width: 100px;" />
				<button type="submit" class="btn btn-primary"> Edit Details </button>
			</div>
			<div class="d-flex flex-column" id="col2">
				<p>Name: {data.profile.name}</p>
				<p>E-mail: {data.user.email}</p>
				<p>Birthday: {data.profile.birthday}</p>
				<p>Address: {data.profile.address}</p>
				<p>Tel No: {data.profile.phone_number}</p>
			</div>
			<div class="d-flex flex-column gap-3" id="col3">
				<a href="/order-history">Order History</a>
				<a href="/appointment-history">Appointment History</a>
			</div>
		</div>
	</div>
</div>

<svelte:head>
	<title>Cuddles Vet - Profile</title>
</svelte:head>

<style>
	.p-3 {
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter;
		color: #736d69;
	}
	.title {
		margin-top: 2%;
		color: #5c5957;
		font-size: 1.5vw;
		margin-left: 7.5%;
		font-weight: 900;
	}

	.rounded {
		background-color: rgba(255, 255, 255, 0.7);
		width: 85%;
		margin: auto;
	}

	.btn {
		background-color: #736d69;
		color: rgba(255, 255, 255, 0.7);
		width: 100%;
		border: none;
	}

	button[type='submit']:hover {
		background-color: rgba(115, 109, 105, 0.25);
	}

	.d-flex {
		margin-top: 2%;
		margin-bottom: 2%;
		font-weight: 900;
	}

	#col2 {
		width: 48%;
	}
</style>
