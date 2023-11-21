<script>
	import { goto } from '$app/navigation';
	import messagesStore from '$lib/stores/messages.store';
	import { redirect } from '@sveltejs/kit';
	/** @type {import('./$types').PageData} */
	export let data;
	const param_info = data.params;
	// console.log(param_info);

	function cancelAppointment() {
		goto('/appointment2');
	}

	function addAppointment() {
		goto(
			`/makeAppointment/${param_info.user_id}/${param_info.doctor_id}/${param_info.appointment_date}/${param_info.appointment_start_time}/${param_info.appointment_end_time}/${param_info.type_of_operation}`
		);
	}
</script>

<div class="p-3">
	<h1>Confirm Appointment</h1>
	<p><strong>Doctor Name</strong>: {param_info.doctor_name}</p>
	<p>
		<strong>Date</strong>: {new Date(param_info.appointment_date).getDate()}/{new Date(
			param_info.appointment_date
		).getMonth()}/{new Date(param_info.appointment_date).getFullYear()}
	</p>
	<p>
		<strong>Start Time</strong>: {new Date(param_info.appointment_start_time).getHours()}:{new Date(
			param_info.appointment_start_time
		).getMinutes()}
	</p>
	<p>
		<strong>End Time</strong>: {new Date(param_info.appointment_end_time).getHours()}:{new Date(
			param_info.appointment_end_time
		).getMinutes()}
	</p>
	<p><strong>Type of Operation</strong>: {param_info.type_of_operation}</p>
	<button on:click={cancelAppointment} type="submit" class="btn btn-danger">Cancel</button>
	<button on:click={addAppointment} type="submit" class="btn btn-primary">Confirm</button>
</div>
