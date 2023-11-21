<script>
	import { goto } from '$app/navigation';
	import messagesStore from '$lib/stores/messages.store';
	import { redirect } from '@sveltejs/kit';
	/** @type {import('./$types').PageData} */
	export let data;

	function cancelAppointment() {
		goto('/appointment2');
	}
</script>

<div class="p-3">
	<h1>Confirm Appointment</h1>
	<p>Doctor Name:</p>
	<p>Date:</p>
	<p>Time:</p>
	<p>Type of Operation:</p>
	<button on:click={cancelAppointment} type="submit" class="btn btn-danger">Cancel</button>
	<button type="submit" class="btn btn-primary">Confirm</button>
</div>
