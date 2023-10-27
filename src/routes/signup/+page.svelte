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
		<h5>Sign up for</h5>
		<h2>Cuddles Veterinary Clinic</h2>
		<LoginWithGoogle />

		<p>or</p>
			<AuthForm on:submit={register} btnName="Create Account" />

		<div class="signup">
			<p>
				Already have an account? <a href="/login">Log in</a>
			</p>
		</div>
	</div>
</div>





<style>
	h5, h2, p{
		font-family: inter;
		text-align: center;
		color:#736D69
	}
	h5, p, .signup{
		font-size:16px;
		font-weight: bold;
		
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

	.btn{
		width:320px;
		background-color: #736D69;
    	color: #ffffff;
		margin-top:15px;
    	padding: 15px 20px;
    	border: none;
    	border-radius: 10px;
    	cursor: pointer;
    	font-size: 13px;
		font-family: inter;
		margin-left:20px;

	}

	.signup{
		margin-top:20px;
	}

	
</style>