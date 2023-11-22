<script>
	import { goto } from '$app/navigation';

	/** @type {import('./$types').PageData} */
	export let data;
	const appointments = data.appointments.sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});
	// console.log(appointments);
	function backToProfile() {
		goto('/profile');
	}
</script>

<div class="p-3">
	<h2>Appointment History</h2>
	<div class="container">
		{#each appointments as apt (apt.id)}
			<div class="row">
				<div class="col">
					<strong>Appointment ID</strong>
					<p>{apt.id}</p>
				</div>
				<div class="col">
					<strong>Date</strong>
					<p>
						{new Date(apt.date).toDateString()}
					</p>
				</div>
				<div class="col">
					<strong>Start Time</strong>
					<p>{new Date(apt.start_time).toTimeString()}</p>
				</div>
				<div class="col">
					<strong>Doctor Name</strong>
					<p>{apt.doctor.name}</p>
				</div>
				<div class="col">
					<strong>Type of Operation</strong>
					<p>{apt.type_of_operation}</p>
				</div>
			</div>
			<br />
		{/each}
	</div>
	<button on:click={backToProfile} class="btn">Back</button>
</div>

<style>
	.p-3 {
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter, sans-serif;
		color: #736d69;
		font-size: 1.1vw;
	}

	h2{
		margin-top: 2%;
		margin-bottom: 2%;
		color: #5c5957;
		font-size: 23px;
		margin-left: 5%;
		font-weight: 900;
	}

	.container{
		width: 90%;
		background-color:rgba(255, 255, 255, 0.7);
		padding: 10px 30px;
	}

	.btn {
		background-color: #736d69;
		color: rgba(255, 255, 255, 0.7);
		border: none;
		font-size: 1.1vw;
		margin-left: 5%;
		width: 100px;
		margin-top: 2%;
	}

	.btn:hover {
		background-color: rgba(115, 109, 105, 0.3);
		color: white;
	}
</style>