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

<div class="row">
	<div class="col">
		<img src="SignUpBg.png" alt="background" class="image1">
		
	</div>
	<div class="container">
		<h5>Sign in to</h5>
		<h2>Cuddles Veterinary Clinic</h2>
		<LoginWithGoogle />
		<p>or</p>
		<AuthForm btnName="Login" on:submit={onLogin} />
		
		<div class="row">
			<div class="col">
				<a href="/forgot-password" class="btn btn-warning w-100">Forgot Password</a>
			</div>
		</div>
		<div class="signup">
			<p>
				Don't have an account? <a href="/signup">Create one now</a>
			</p>
		</div>
	</div>
</div>



<style>
	h5, h2, p{
		font-family: inter;
		text-align: center;
		font-weight: bold;
	}
	.image1{
  		/* Control the height of the image */
  		width: 100%;

  		/* Center and scale the image nicely */
  		background-position: center;
 		background-repeat: no-repeat;
  		background-size: cover;
  		position: relative;
	}

	.container {
		position: absolute;
		left: 120px;
		margin: 20px;
		max-width: 35%;
		padding: 20px;
		background-color: rgba(255, 255, 255, 0.7);
	}
</style>
