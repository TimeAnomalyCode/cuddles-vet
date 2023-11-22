<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import AppointmentCard from '$lib/components/AppointmentCard.svelte';
	import { onMount } from 'svelte';

	export let form;
	export let data;
	const doctors = data.doctors;
	let submitting = false;

	onMount(() => {
		if (!data.isLoggedIn) {
			goto('/login');
		}
	});

	// console.log(data);

	$: if (form && form.success === false) {
		submitting = false;
	}

	function submitForm(e) {
		submitting = true;
		console.log(e);
	}
</script>

<div class="card">
	<img class="card-img-top" src="/Background.png" alt="" />
	<div class="card-img-overlay">
		<div class="d-flex justify-content-center flex-column text-center gap-3">
			<h3>Give your pet the best care. Book an appointment now!</h3>
			<form on:submit={submitForm} use:enhance enctype="multipart/form-data" method="POST">
				<div class="d-flex flex-row gap-3 justify-content-center">
					<input type="date" id="book_date" name="book_date" required />
					<input type="time" id="start_time" name="start_time" min="09:00" max="22:00" required />
					<select id="type" name="type_of_operation" autocomplete="off" required>
						<option value="" selected>Select Appointment Type</option>
						<option value="Vaccination">Vaccination - 1 hr</option>
						<option value="Health Check-Up">Health Check-Up - 2 hrs</option>
					</select>
					<input type="submit" value="Search" class="button" />
				</div>
			</form>
		</div>
		<hr />
		<div class="d-flex flex-column gap-3">
			{#if doctors.length === 0}
				<div class="d-flex justify-content-center flex-column text-center">
					<h4>No Doctors available. Please search a different date/time</h4>
				</div>
			{/if}
			{#if data.isLoggedIn}
				{#each doctors as doctor (doctor.id)}
					<AppointmentCard
						doctor_id={doctor.id}
						name={doctor.name}
						position={doctor.position}
						description={doctor.description}
						main_picture={doctor.main_picture}
						type_of_operation={data.params_info.type_of_operation}
						user_id={data.user.id}
						date={data.params_info.book_date}
						start_time={data.params_info.start_time}
						end_time={data.params_info.end_time}
					/>
				{/each}
			{/if}
		</div>
	</div>
</div>

<svelte:head>
	<title>Cuddles Vet - Appointment</title>
</svelte:head>
