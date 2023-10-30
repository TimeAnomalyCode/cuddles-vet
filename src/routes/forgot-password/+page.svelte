<script>
	import AuthForm from '$lib/components/Auth/AuthForm.svelte';
	import { mailResetPasswordEmail } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';

	let hideForm = false;

	async function onForgotPassword(event) {
		try {
			console.log(event);
			const formData = new FormData(event.target);
			const email = formData.get('email');
			await mailResetPasswordEmail(email);
			// alert('Email sent. Please check your inbox');
			hideForm = true;
			messagesStore.showSuccess('Reset Password Email sent!');
		} catch (err) {
			console.log(err);
			if (err.code === 'auth/user-not-found') {
				messagesStore.showError('Email not found, please try again.');
				return;
			}
			messagesStore.showError();
		}
	}
</script>

<svelte:head>
	<title>Cuddles Vet - Forgot Password</title>
</svelte:head>

<div class="row">
	<div class="col">
		<img src="SignUpBg.png" alt="background" class="image1">
		
	</div>
	<div class="container">
		<a href="/login">
			<img src="cross.png" alt= "cross icon" class="icon1">
		</a>
		<h2>Reset Password</h2>
		<h5>Enter your e-mail address below</h5>

		{#if !hideForm}
			<AuthForm on:submit={onForgotPassword} btnName="Forgot Password" forgotPassword={true} />
		{/if}	

		
	</div>
</div>


<style>
	h5, h2 {
		font-family: inter;
		text-align: center;
		color:#736D69
	}
	h5{
		font-size:16px;
		font-weight: bold;
		margin-bottom:50px;
		
	}

	h2{
		font-size:28px;
		font-weight:900;
		text-shadow: 1px 0 #736D69;
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

	.icon1{
  		/* Control the height of the image */
  		width: 20px;
		float:right;
		margin-top:-30px;
		margin-right:-30px;

  		
	}

	.container {
		position: absolute;
		left: 120px;
		margin-left: 50px;
		margin-top: 50px;
		max-width: 29%;
		padding: 40px;
		background-color: rgba(255, 255, 255, 0.6);
	}

	
	
	
</style>

