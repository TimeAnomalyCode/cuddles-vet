<svelte:head>
	<title>Cuddles Vet - Appointment</title>
</svelte:head>

<script type="text/javascript">
	let date = new Date()

	$: if (date < Date.now()) {
		console.log("AHHHHHHHHHHHHHHHHHHHHH")
	}

	function formatInputDate(date) {
		const day = date.getDate();
		const month = date.toLocaleString('default', { month: 'long' });
		const year = date.getFullYear();
		return `${day} ${month} ${year}`;
	}

</script>

<div class="row">
	<div class="col">
		<img src="Background.png" alt="background" class="image1">
	</div>
	<div class="container">
		<p class="title">Give your pet the best care. Book an appointment now!</p>
		<div class="content">
			<form>
				<table class="table1">
					<tr>
						<td>
							<input type="date" 
								value={formatInputDate(date)}
								placeholder="Select Date"
							/>
						</td>
						<td class="time">
							<input type="time"/>
						</td>
						<td>
							<select id="type" name="selectedOption">
								<option value="option1">Vaccination - 1 hr</option>
								<option value="option2">Health Check-Up - 2 hrs</option>
							</select>
						</td>
						<td>
							<input type="button" value="Search" class="button"/>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</div>
</div>

<style>
	.table1{
		border:1px solid black
	}

	.table1 td{
		border:1px solid black
	}
	.container{
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		padding: 2% 2%;
		width: 80%;
    	height: 80%;
		background-color: rgba(255, 255, 255, 0.6);
	}

	.container .title {
		font-family: inter Black, sans-serif;
		font-weight: bolder;
		font-size: 1.8vw;
		color: #5C5957;
		text-align: center;
		margin-bottom: 3%;
	}

	.container tr td{
		width: 4%;
	}

	.container .button{
		width: 60%;
		background-color: #5C5957; /* Button background color */
		color: #FFFFFF; /* Button text color */
		border-radius: 30px; /* Remove button border */
		cursor: pointer; /* Show a hand cursor on hover */
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

	.container .content {
		font-family: inter, sans-serif;
		font-weight: bolder;
		font-size: 1.5vw;
		color: #5C5957;
		text-align: center;
	}

	.content input[type="date"]{
		padding: 5%; /* Increase padding for a more attractive look */
		width: 90%; /* Make input fields span the entire width of the container */
		border: none;
		background-color: #5C5957; /* Background color for input fields */
		color: #FFFFFF;
		font-size: 1.2vw; /* Adjust the font size for better readability */
	}

	.content input[type="time"]{
		padding: 5%; /* Increase padding for a more attractive look */
		width: 90%; /* Make input fields span the entire width of the container */
		border: none;
		background-color: #5C5957; /* Background color for input fields */
		color: #FFFFFF;
		font-size: 1.2vw; /* Adjust the font size for better readability */
	}

	.content select {
		padding: 5%; /* Increase padding for a more attractive look */
		width: 90%; /* Make input fields span the entire width of the container */
		border: none;
		background-color: #5C5957; /* Background color for input fields */
		color: #FFFFFF;
		font-size: 1.2vw; /* Adjust the font size for better readability */
	}

</style>