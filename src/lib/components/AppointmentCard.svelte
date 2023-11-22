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
		<img src={main_picture} alt="" style="width: 150px;" />
		<div class="d-flex flex-column justify-content-evenly pt-3" style="width: 65%;">
			<h4>{name}</h4>
			<h5>{position}</h5>
			<p>
				{description}
			</p>
		</div>
		<div class="d-flex flex-column-reverse" style="padding-bottom: 10px;">
			<button on:click={confirmAppointment} type="submit" class="btn btn-primary">
				Make Appointment
			</button>
		</div>
	</div>
</div>
