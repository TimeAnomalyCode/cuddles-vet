<script>
	import { enhance } from '$app/forms';

	export let form;
	let submitting = false;

	$: if (form && form.success === false) {
		submitting = false;
	}

	function submitForm(e) {
		submitting = true;
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
		<div class="d-flex justify-content-center flex-column text-center">
			<h4>No Doctors available. Please search a different date/time</h4>
		</div>
	</div>
</div>

<svelte:head>
	<title>Cuddles Vet - Appointment</title>
</svelte:head>
