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
		<p class="reset">Reset Password</p>
		<p class="email">Enter your e-mail address below</p>

		{#if !hideForm}
			<AuthForm on:submit={onForgotPassword} showForgotPasswordLink={false} 
			btnName="Forgot Password" forgotPassword={true} />
		{/if}	

		
	</div>
</div>


<style>
	.reset{
		font-family: Inter Black, sans-serif;
		font-size: 2vw;
		font-weight: bolder;
		text-align: center;
		text-shadow: 1px 0 0 #736D69;
		color:#736D69;
	}

	.email{
		font-family: inter, sans-serif; 
		text-align: center;
		font-size: 1.1vw;
		color:#736D69;
		font-weight: 500;
		margin-bottom: 20%;	
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
		float: right;
		margin-top:-30px;
		margin-right:-30px;	
	}

	.container {
		position: absolute;
		margin-left: 6%;
		margin-top: 2%;
		padding: 3% 3%;
		max-width: 33%;
		max-height: 70%;
		background-color: rgba(255, 255, 255, 0.6);
	}
</style>

