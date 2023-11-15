<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import AuthForm from '$lib/components/Auth/AuthForm.svelte';
	import LoginWithGoogle from '$lib/components/Auth/LoginWithGoogle.svelte';
	import { registerEmailandPassword } from '$lib/firebase/auth.client';
	import { afterLogin } from '$lib/helpers/route.helper';
	import messagesStore from '$lib/stores/messages.store';

	async function register(event) {
		try {
			const formData = new FormData(event.target);
			const email = formData.get('email');
			const password = formData.get('password');

			if (!email || !password) {
				messagesStore.showError('Please enter a valid email/password');
				return;
			}

			if (password.length < 6) {
				messagesStore.showError('Password must be 6 characters or more');
				return;
			}

			const user = await registerEmailandPassword(email, password);
			await afterLogin($page.url, user.uid);
		} catch (err) {
			if (err.code === 'auth/email-already-in-use') {
				messagesStore.showError('You have already registered. Please login!');
				await goto('/login');
				return;
			}

			console.log(err);
			messagesStore.showError();
		}
	}
</script>

<svelte:head>
	<title>Cuddles Vet - Sign up</title>
</svelte:head>

<div class="row">
	<div class="col">
		<img src="SignUpBg.png" alt="background" class="image1">
	</div>
	<div class="container">
		<p class="signup">Sign up for</p>
		<h2>Cuddles Veterinary Clinic</h2>
		<LoginWithGoogle />
		<p>or</p>

			<AuthForm on:submit={register} showForgotPasswordLink={false} btnName="Create Account" />

		<div class="login">
			<p>
				Already have an account? <a href="/login">Log in</a>
			</p>
		</div>
	</div>
</div>


<style>
	p{
		font-family: inter, sans-serif; 
		text-align: center;
		font-size: 1.1vw;
		color:#736D69;
		font-weight: 500;
	}

	.signup{
		margin-bottom: 2%;
	}

	h2{
		font-family: Inter Black, sans-serif;
		font-size: 2vw;
		font-weight: bolder;
		text-align: center;
		text-shadow: 1px 0 0 #736D69;
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
		margin-left: 6%;
		margin-top: 2%;
		padding: 3% 3%;
		max-width: 33%;
		max-height: 85%;
		background-color: rgba(255, 255, 255, 0.6);
	}

	.container a{
		text-decoration: none;
	}

	.container a:hover{
		text-decoration: underline;
	}
</style>