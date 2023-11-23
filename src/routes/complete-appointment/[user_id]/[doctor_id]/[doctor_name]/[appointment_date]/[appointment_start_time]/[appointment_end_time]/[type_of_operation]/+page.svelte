<script>
	import { goto } from '$app/navigation';
	import messagesStore from '$lib/stores/messages.store';
	import { redirect } from '@sveltejs/kit';
	/** @type {import('./$types').PageData} */
	export let data;
	const param_info = data.params;
	// console.log(param_info);

	function cancelAppointment() {
		goto('/appointment');
	}

	async function addAppointment() {
		const res = await fetch(
			`/api/makeAppointment/${param_info.user_id}/${param_info.doctor_id}/${param_info.appointment_date}/${param_info.appointment_start_time}/${param_info.appointment_end_time}/${param_info.type_of_operation}`,
			{ method: 'POST' }
		);

		if (res.status === 200) {
			messagesStore.showSuccess(`Booking with ${param_info.doctor_name} is set. See you soon!`);
		} else {
			messagesStore.showError(
				`Booking Failed. Please try to rebook again. Sorry for any inconvienience`
			);
		}
		goto('/');
	}
</script>

<div class="p-3">
	<h1>Confirm Appointment</h1>
	<div class="container">
		<p><strong>Doctor Name</strong>: {param_info.doctor_name}</p>
		<p>
			<strong>Date</strong>: {new Date(param_info.appointment_date).toDateString()}
		</p>
		<p>
			<strong>Start Time</strong>: {new Date(param_info.appointment_start_time).toTimeString()}
		</p>
		<p>
			<strong>End Time</strong>: {new Date(param_info.appointment_end_time).toTimeString()}
		</p>
		<p><strong>Type of Operation</strong>: {param_info.type_of_operation}</p>
	</div>
	<button on:click={cancelAppointment} type="submit" class="btn btn-danger">Cancel</button>
	<button on:click={addAppointment} type="submit" class="btn btn-custom">Confirm</button>	
</div>

<style>
	.p-3 {
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter, sans-serif;
		color: #736d69;
		font-size: 1.2vw;
	}

	h1{
		margin-top: 2%;
		margin-bottom: 2%;
		color: #5c5957;
		font-size: 23px;
		margin-left: 5%;
		font-weight: 900;
	}
	.container{
		width: 40%;
		height: 200px;
		background-color:rgba(255, 255, 255, 0.7);
		padding: 1rem;
		margin-left: 5%;
	}
	.btn-danger{
		border: none;
		font-size: 1.1vw;
		margin-left: 5%;
		width: 100px;
		margin-top: 2%;
	}
	.btn-custom{
		background-color: #736d69;
		color: white;
		border: none;
		font-size: 1.1vw;
		margin-left: 1%;
		width: 100px;
		margin-top: 2%;
	}

	.btn-custom:hover {
		background-color: rgba(115, 109, 105, 0.3);
		color: white;
	}
</style>