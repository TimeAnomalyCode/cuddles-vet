<script>
	import { goto } from '$app/navigation';

	/** @type {import('./$types').PageData} */
	export let data;
	const appointments = data.appointments;
	// console.log(appointments);
	function backToProfile() {
		goto('/profile');
	}
</script>

<div class="p-3">
	<h2>Appointment History</h2>
	<div class="container">
		{#each appointments as apt (apt.id)}
			<div class="row" style="background-color: cornsilk">
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
		<button on:click={backToProfile} class="btn btn-primary">Back</button>
	</div>
</div>
