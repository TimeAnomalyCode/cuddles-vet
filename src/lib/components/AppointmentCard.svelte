<script>
	import { goto } from '$app/navigation';

	export let doctor_id;
	export let name;
	export let position;
	export let description;
	export let main_picture;
	export let type_of_operation;

	export let user_id;
	export let date;
	export let start_time;
	export let end_time;

	function confirmAppointment() {
		goto(
			`/complete-appointment/${user_id}/${doctor_id}/${name}/${date}/${start_time}/${end_time}/${type_of_operation}`
		);
	}
</script>

<div class="card">
	<div class="d-flex flex-row gap-3">
		<img src={main_picture} alt=""/>
		<div class="d-flex flex-column container">
			<h4>{name}</h4>
			<h5>{position}</h5>
			<p>
				{description}
			</p>
		</div>
		<div class="btn-container">
			<button on:click={confirmAppointment} type="submit" class="btn">
				Make Appointment
			</button>
		</div>
	</div>
</div>

<style>
	.card{
		padding: 2% 1.5%;
		background-color: #ffffff;
		width: 80%;
		height: 30%;
		margin-left: auto;
		margin-right: auto;
		border: none;
	}

	img {
		width: 150px;
	}
	.container{
		font-family: inter, sans-serif;
		color: #5c5957;
		text-align: left;
	}

	.container h4{
		font-weight: bolder;
		font-size: 1.6vw;
		margin-top: 0px;
		margin-bottom: 0px;
	}
	.container h5{
		font-weight: 600;
		font-size: 1.2vw;
		margin-top: 8px;
		margin-bottom: 15px;
	}
	.container p{
		font-size: 1.1vw;
		width: 100%;
	}
	.btn-container {
		margin-left: 78%;
		margin-top: 18%;;
		position: absolute;
	}
	.btn{
		background-color: #736d69;
		color: rgba(255, 255, 255, 0.7);
		border: none;
		width: 100%;
		height: 35px;
		border-radius: 5px;
	}

	.btn[type='submit']:hover {
		background-color: rgba(115, 109, 105, 0.3);
		color: white;
	}
</style>