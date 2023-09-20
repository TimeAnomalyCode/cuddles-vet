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

<div class="row">
	<div class="col">
		<h1>Forgot Password</h1>
	</div>
</div>

{#if !hideForm}
	<AuthForm on:submit={onForgotPassword} btnName="Forgot Password" forgotPassword={true} />
{/if}

<svelte:head>
	<title>Cuddles Vet - Forgot Password</title>
</svelte:head>
