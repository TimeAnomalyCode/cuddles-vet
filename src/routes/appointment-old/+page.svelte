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

<svelte:head>
	<title>Cuddles Vet - Appointment</title>
</svelte:head>

<section>
	<div class="row">
		<div class="col">
			<img src="Background.png" alt="background" class="image1 {submitting ? 'bg-color' : ''}" />
		</div>
		<div class="container">
			<p class="title">Give your pet the best care. Book an appointment now!</p>
			<div>
				<div class="content">
					<form
						id="appointmentform"
						on:submit={handleSubmit}
						use:enhance
						enctype="multipart/form-data"
						method="POST"
					>
						<table>
							<tr>
								<td>
									<input type="date" id="apptdate" name="book_date" required />
								</td>
								<td>
									<input
										type="time"
										id="appttime"
										name="start_time"
										min="09:00"
										max="22:00"
										required
									/>
								</td>
								<td>
									<select id="type" name="selectedOption" autocomplete="off" required>
										<option value="" selected>Select Appointment Type</option>
										<option value="Vaccination">Vaccination - 1 hr</option>
										<option value="Health Check-Up">Health Check-Up - 2 hrs</option>
									</select>
								</td>
								<td style="text-align:right; width:150px;">
									<input type="submit" value="Search" class="button" />
								</td>
							</tr>
						</table>
					</form>
				</div>

				<div class="d-flex flex-column">
					<div class="vet-info">
						<table>
							<tr>
								<td style="width: 80px">
									<img src="/favicon.png" alt="vet1" class="vetimage" />
								</td>
								<td style="width: 100px">
									<p class="name">John</p>
									<p class="specialty">Help</p>
									<p class="desc">Dood desc</p>
									<div style="text-align:right;">
										<input class="button" type="button" value="Book Appointment" />
									</div>
								</td>
							</tr>
						</table>

						<!--<p>Date: {apptData.date}</p>
								<p>Time: {apptData.time}</p>
								<p>Type: {apptData.type}</p>
								<h2>Veterinarian</h2>
								<p>Name: {apptData.vetName}</p>
								<p>Specialty: {apptData.vetSpecialty}</p>-->
						<!-- Add more vet details here -->
					</div>
					<div class="vet-info">
						<table>
							<tr>
								<td style="width: 80px">
									<img src="/favicon.png" alt="vet1" class="vetimage" />
								</td>
								<td style="width: 100px">
									<p class="name">John</p>
									<p class="specialty">Help</p>
									<p class="desc">Dood desc</p>
									<div style="text-align:right;">
										<input class="button" type="button" value="Book Appointment" />
									</div>
								</td>
							</tr>
						</table>

						<!--<p>Date: {apptData.date}</p>
								<p>Time: {apptData.time}</p>
								<p>Type: {apptData.type}</p>
								<h2>Veterinarian</h2>
								<p>Name: {apptData.vetName}</p>
								<p>Specialty: {apptData.vetSpecialty}</p>-->
						<!-- Add more vet details here -->
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		padding: 2% 2%;
		width: 80%;
		height: 80%;
	}

	.image1 {
		width: 100%;
		background-position: center;
		background-repeat: repeat;
		position: relative;
		min-height: 85vh;
	}

	.bg-color {
		position: relative;
		background-size: cover;
		background-repeat: repeat;
		opacity: 0.6;
		background-color: #d0c4be;
	}

	.container .title {
		font-family: inter Black, sans-serif;
		font-weight: bolder;
		font-size: 1.8vw;
		color: #5c5957;
		text-align: center;
		margin-bottom: 3%;
	}

	.container .content {
		font-family: inter, sans-serif;
		font-weight: bolder;
		font-size: 1.5vw;
		color: #ffffff;
		text-align: left;
		margin-bottom: 6%;
	}
	table {
		width: 100%;
	}
	table tr td {
		width: 250px;
		height: 45px;
	}
	.content input[type='date'],
	.content input[type='time'],
	.content select {
		border: none;
		background-color: #5c5957;
		color: #ffffff;
		cursor: pointer;
		width: 95%;
		height: 100%;
		text-align: center;
	}

	.content input[type='date']::-webkit-calendar-picker-indicator,
	.content input[type='time']::-webkit-calendar-picker-indicator {
		filter: invert(1);
		cursor: pointer;
	}

	.container .button {
		background-color: #5c5957; /* Button background color */
		color: #ffffff; /* Button text color */
		border-radius: 30px; /* Remove button border */
		cursor: pointer; /* Show a hand cursor on hover */
		border: none;
		width: 80%;
		height: 100%;
	}

	/* Vet */
	.vet-info {
		padding: 1% 2%;
		background-color: #ffffff;
		height: 30%;
	}

	.vetimage {
		width: 90%;
		height: 280px;
		position: center;
	}
	.container .content1 {
		font-family: inter, sans-serif;
		font-weight: bolder;
		color: #5c5957;
		text-align: left;
	}

	.vl {
		border-left: 1px solid #5c5957;
		width: 5px;
		height: 150px;
	}

	.content1 p {
		width: 95%;
	}

	.content1 .name {
		font-size: 2vw;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.content1 .specialty {
		font-size: 1.2vw;
		margin-top: 0px;
		margin-bottom: 4%;
	}

	.content1 .desc {
		font-size: 1.2vw;
		font-weight: 400;
		width: 100%;
	}

	.content1 .button {
		width: 220px;
		height: 45px;
		border-radius: 5px;
	}
</style>
