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
		<h5>Sign in to</h5>
		<h2>Cuddles Veterinary Clinic</h2>
		<LoginWithGoogle />
		<p>or</p>

		<AuthForm btnName="Login" on:submit={onLogin} />

		<div class="row">
			<div class="col">
				<a href="/forgot-password" class="btn">Forgot Password</a>
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
	h5, p{
		
		font-family: inter; 
		text-align: center;
<<<<<<< HEAD
		color:#736D69
	}
	h5, p, .signup{
		font-size:1.05vw;
=======
		color:#736D69;
		font-size: 16px;
>>>>>>> fd3c04b580af788f86a580018377f425c0e9de6e
		font-weight: bold;
	}
	.signup{
		font-size: 16px;
		font-weight: bold;
		margin-top:20px;
	}

	h2{
<<<<<<< HEAD
		font-size:1.8vw;
		font-weight:900;
		text-shadow: 0.8px 0 0 #736D69;
=======
		font-size: 28px;
		font-weight: 700;
		text-align: center;
		text-shadow: 1px 0 #736D69;
		color:#736D69;
>>>>>>> fd3c04b580af788f86a580018377f425c0e9de6e
	}
	.image1{
  		/* Control the height of the image */
  		width: 100%;
		height: 100%;
  		/* Center and scale the image nicely */
  		background-position: center;
 		background-repeat: no-repeat;
  		background-size: cover;
  		position: relative;
		min-height: 85vh;
	}

	.container {
		position: absolute;
<<<<<<< HEAD
		margin-left: 7%;
		margin-top: 3%;
		width: 29%;
		height: 80%;
		padding: 3% 3%;
=======
		left: 120px;
		margin-left: 50px;
		margin-top: 30px;
		max-width: 35%;
		max-height: 90%;
>>>>>>> fd3c04b580af788f86a580018377f425c0e9de6e
		background-color: rgba(255, 255, 255, 0.6);
	}

	.btn{
		width:89%;
		background-color: #736D69;
    	color: rgba(255, 255, 255, 0.8);
<<<<<<< HEAD
		font-size: 0.86vw;
		margin-top:3.5%;
    	padding: 4.5% 4.5%;
=======
		font-size: 13.5px;
		margin-top: 15px;
    	padding: 15px;
>>>>>>> fd3c04b580af788f86a580018377f425c0e9de6e
    	border: none;
    	border-radius: 10px;
    	cursor: pointer;
		font-family: inter;
		margin-left:5.3%;

	}

	.signup{
		margin-top:9%;
		
	}

	
</style>
