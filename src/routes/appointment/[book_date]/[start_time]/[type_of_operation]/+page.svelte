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
	<div>
		<div class="d-flex justify-content-center flex-column text-center gap-3">
			<h3>Give your pet the best care. Book an appointment now!</h3>
			<form on:submit={submitForm} use:enhance enctype="multipart/form-data" method="POST">
				<div class="d-flex flex-row gap-3 justify-content-center info">
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
					<h4>No doctors available. Please search a different date/time</h4>
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

<style>
	h3 {
		font-family: inter Black, sans-serif;
		font-weight: bolder;
		font-size: 1.8vw;
		color: #5c5957;
		text-align: center;
		margin-bottom: 3%;
	}

	h4 {
		font-family: inter, sans-serif;
		font-weight: regular;
		font-size: 1.5vw;
		color: black;
		text-align: center;
		margin-bottom: 3%;
	}

	.info{
		font-family: inter, sans-serif;
		font-size: 1.5vw;
		color: #ffffff;
		text-align: left;
	}

	input[type='date'],
	input[type='time'],
	select {
		border: none;
		background-color: #5c5957;
		color: #ffffff;
		cursor: pointer;
		width: 260px;
		height: 45px;
		text-align: center;
		margin-right: 10px;
	}

	input[type='date']::-webkit-calendar-picker-indicator,
	input[type='time']::-webkit-calendar-picker-indicator {
		filter: invert(1);
		cursor: pointer;
		margin-right: 5%;
	}

	.button{
		background-color: #5c5957; /* Button background color */
		color: #ffffff; /* Button text color */
		border-radius: 15px; /* Remove button border */
		cursor: pointer; /* Show a hand cursor on hover */
		border: none;
		width: 120px;
		height: 45px;
	}

	.card{
		background-color: rgba(208, 196, 190, 0.3);
		height: 100%;
		width: 100%;
		padding: 2%;
	}
</style>