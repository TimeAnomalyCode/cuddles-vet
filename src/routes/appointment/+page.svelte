<svelte:head>
	<title>Cuddles Vet - Appointment</title>
</svelte:head>

<script>
	let date = new Date()

	$: if (date < Date.now()) {
		console.log("AHHHHHHHHHHHHHHHHHHHHH")
	}
</script>

<div class="row">
	<div class="col">
		<img src="Background.png" alt="background" class="image1">
	</div>
	<div class="container">
		<p class="title">Give your pet the best care. Book an appointment now!</p>
		<div class="content">
			<form id="appointmentform">
				<table>
					<tr>
						<td>
							<input type="date" id="apptdate" required/>
						</td>
						<td>
							<input type="time" id="time" name="appttime" min="09:00" max="22:00" required/>
						</td>
						<td>
							<select id="type" name="selectedOption" autocomplete="off" required>
								<option value="" selected>Select Appointment Type</option>
								<option value="vaccination">Vaccination - 1 hr</option>
								<option value="checkup">Health Check-Up - 2 hrs</option>
							</select>
						</td>
						<td style="text-align:right; width:150px;">
							<input type="submit" value="Search" class="button"/>
						</td>
					</tr>
				</table>
			</form>
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

	.image1{
		/* Control the height of the image */
		width: 100%;
		/* Center and scale the image nicely */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		min-height: 85vh;
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

</style>