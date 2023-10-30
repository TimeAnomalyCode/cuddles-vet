<script>
	import { page } from '$app/stores';
	import AuthForm from '$lib/components/Auth/AuthForm.svelte';
	import LoginWithGoogle from '$lib/components/Auth/LoginWithGoogle.svelte';
	import { loginWithEmailandPassword } from '$lib/firebase/auth.client';
	import { afterLogin } from '$lib/helpers/route.helper';
	import messagesStore from '$lib/stores/messages.store';

	async function onLogin(event) {
		try {
			const formData = new FormData(event.target);
			const email = formData.get('email');
			const password = formData.get('password');

			const user = await loginWithEmailandPassword(email, password);
			await afterLogin($page.url, user.uid);
		} catch (err) {
			console.log(err);
			if (['auth/invalid-email', 'auth/user-not-found', 'auth/wrong-password'].includes(err.code)) {
				messagesStore.showError('Invalid email and password');
				return;
			}

			// console.log(err);
			messagesStore.showError();
		}
	}
</script>

<svelte:head>
	<title>Cuddles Vet - Login</title>
</svelte:head>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
<div class="row">
	<div class="col">
		<img src="SignUpBg.png" alt="background" class="image1">
		
	</div>
	<div class="container">
		<p class="signin">Sign in to</p>
		<p class="signin">Sign in to</p>
		<h2>Cuddles Veterinary Clinic</h2>
		<LoginWithGoogle />
		<p>or</p>

		<AuthForm btnName="Log In" on:submit={onLogin} showForgotPasswordLink={true}/>
		<div>
		<AuthForm btnName="Log In" on:submit={onLogin} showForgotPasswordLink={true}/>
		<div>
			<p>
				Don't have an account? <a href="/signup">Create one now</a>
			</p>
		</div>
	</div>
</div>



<style>
	p{
		font-family: inter, sans-serif; 
	p{
		font-family: inter, sans-serif; 
		text-align: center;
		font-size: 1.3vw;
		font-size: 1.3vw;
		color:#736D69;
		font-weight: 500;
		font-weight: 500;
	}

	.signin{
		margin-bottom: 2%;

	.signin{
		margin-bottom: 2%;
	}

	h2{
		font-family: Inter Black, sans-serif;
		font-size: 2.2vw;
		font-weight: bolder;
		font-family: Inter Black, sans-serif;
		font-size: 2.2vw;
		font-weight: bolder;
		text-align: center;
		text-shadow: 1px 0 #736D69;
		color:#736D69;
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
	.container {
		position: absolute;
		margin-left: 7%;
		margin-top: 2%;
		margin-top: 2%;
		padding: 3% 3%;
		max-width: 35%;
		max-height: 95%;
		max-height: 95%;
		background-color: rgba(255, 255, 255, 0.6);
	}	
	}	
</style>