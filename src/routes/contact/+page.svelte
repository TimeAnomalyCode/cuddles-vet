<script>
	import { enhance } from '$app/forms';

	export let form;
	$: if (form && form.success === false) {
		submitting = false;
	}

	function submitForm(e) {
		submitting = true;
	}
</script>

<div class="section1">
	<div class="row">
		<div class="col">
			<div class="contactbox">
				<div class="image-content">
					<img src="contact1.png" alt="Dog and cat" class="image1" />
					
					<div class="content">
						<h1>Contact Us</h1>
						<p>Let's hear from you!</p>
						<div>
							<form on:submit={submitForm} use:enhance enctype="multipart/form-data" method="POST">
								<label for="name">Name*</label>
								<input type="text" id="name" name="name" required />

								<label for="email">Email*</label>
								<input type="email" id="email" name="email" required />

								<label for="message">Message</label>
								<textarea id="message" name="message" rows="4" required />

								<button type="submit">Done</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<svelte:head>
	<title>Cuddles Vet - Contact</title>
</svelte:head>

<style>
	.section1 {
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter;
		color: #736d69;
		text-align: center;
	}

	.contactbox {
		background-color: white;
		display: flex;
		width: 90%;
		margin-left: 5%;
		margin-top: 6%;
		margin-bottom: 6%;
	}

	.image-content {
		position: relative;
		display: flex;
	}

	.image1 {
		width: 40%;
	}

	.content {
		margin-top: 3%;
		margin-left: 20%; /* Add some space between the image and content */
		width: 23%;
		margin-bottom: 3%;
	}

	h1 {
		font-size: 2.6vw;
		font-weight: 800;
		text-shadow: 1.3px 0 0 #736d69;
	}

	p {
		font-size: 1.2vw;
		font-weight: 500;
	}

	form {
		margin-left: -55%;
		text-align: center;
	}

	/* Style form labels */
	label {
		display: block;
		margin-top: 4.5%;
		font-weight: bold;
		text-align: left;
	}

	/* Style form input fields and textarea */
	input[type='text'],
	input[type='email'],
	textarea {
		width: 131%;
		margin-top: 2%;
		border: 1px solid rgba(92, 89, 87, 0.5);
		border-radius: 4px;
		height:4vh;
	}

	input[type='message'],
	textarea {
		height:15vh;
	}

	/* Style the submit button */
	button[type='submit'] {
		background-color: #736d69;
		color: rgba(255, 255, 255, 0.7);
		padding: 3% 35%;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		margin-top: 5%;
		margin-left: 25%;
	}

	/* Change button color on hover */
	button[type='submit']:hover {
		background-color: rgba(115, 109, 105, 0.25);
	}
</style>
