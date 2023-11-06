<svelte:head>
	<title>Cuddles Vet - Appointment</title>
</svelte:head>

<script>
	let date = new Date()
	let apptData = null;
	let isSubmitted = false;

	$: if (date < Date.now()) {
		console.log("AHHHHHHHHHHHHHHHHHHHHH")
	}

	function handleSubmit(event) {
		event.preventDefault();
		isSubmitted = true;
		// Get selected date, time, and type
		const selectedDate = event.target.apptdate.value;
		const selectedTime = event.target.appttime.value;
		const selectedType = event.target.selectedOption.value;

		apptData = {
			date: selectedDate,
			time: selectedTime,
			type: selectedType
		};
	}

</script>

<div class="row">
	<div class="col">
		<img src="Background.png" alt="background" class="image1 {isSubmitted ? 'bg-color' : ''}">
	</div>
	<div class="container">
		<p class="title">Give your pet the best care. Book an appointment now!</p>
		<div>
			<div class="content">
				<form id="appointmentform" on:submit={handleSubmit}>
				<table>
					<tr>
						<td>
							<input type="date" id="apptdate" required/>
						</td>
						<td>
							<input type="time" id="appttime" min="09:00" max="22:00" required/>
						</td>
						<td>
							<select id="type" name="selectedOption" autocomplete="off" required>
								<option value="" selected>Select Appointment Type</option>
								<option value="Vaccination">Vaccination - 1 hr</option>
								<option value="Health Check-Up">Health Check-Up - 2 hrs</option>
							</select>
						</td>
						<td style="text-align:right; width:150px;">
							<input type="submit" value="Search" class="button"/>
						</td>
					</tr>
				</table>
			</form>
			</div>
			<div>
				{#if apptData !== null}
					<div class="vet-info">
						<table>
							<tr>
								<td>
									<img src="vet1.png" alt="vet1" class="vetimage">
								</td>
								<td>
									<h2>Appointment Details</h2>
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
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	
	.container{
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
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		min-height: 85vh;
	}

	.bg-color {
		position: relative;
		background-size: cover;
		background-repeat: repeat;
		opacity: 0.6;
		background-color: #D0C4BE;
	}
	
	.container .title {
		font-family: inter Black, sans-serif;
		font-weight: bolder;
		font-size: 1.8vw;
		color: #5C5957;
		text-align: center;
		margin-bottom: 3%;
	}
	
	.container .content {
		font-family: inter, sans-serif;
		font-weight: bolder;
		font-size: 1.5vw;
		color: #FFFFFF;
		text-align: left;
		margin-bottom: 6%;
	}
	table{
		width: 100%;
	}
	table tr td{
		width: 250px;
		height: 45px;
	}
	.content input[type="date"],
	.content input[type="time"],
	.content select{
		border: none;
		background-color: #5C5957;
		color: #FFFFFF;
		cursor: pointer;
		width: 95%;
		height: 100%;
		text-align: center;
	}

	.content input[type="date"]::-webkit-calendar-picker-indicator, 

	.content input[type="time"]::-webkit-calendar-picker-indicator {
		filter: invert(1);
		cursor: pointer;
	}

	.container .button{
		background-color: #5C5957; /* Button background color */
		color: #FFFFFF; /* Button text color */
		border-radius: 30px; /* Remove button border */
		cursor: pointer; /* Show a hand cursor on hover */
		border: none;
		width: 80%;
		height: 100%;
	}

	.vet-info {
		padding: 2% 2%;
		background-color: #ffffff;
		height: 30%;
	}

	.vetimage {
		width: 40%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		min-height: 85vh;
	}


</style>