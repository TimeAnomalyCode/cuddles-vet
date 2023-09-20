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

<div class="row">
	<div class="col">
		<h1>Sign Up</h1>
	</div>
</div>
<hr />
<AuthForm on:submit={register} btnName="Sign Up!" />
<hr />
<LoginWithGoogle />

<svelte:head>
	<title>Cuddles Vet - Sign up</title>
</svelte:head>
