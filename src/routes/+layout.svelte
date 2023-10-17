<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import Nav from '$lib/components/Nav.svelte';
	import messagesStore from '$lib/stores/messages.store';
	import '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';
	import { sendJWTToken } from '$lib/firebase/auth.client';
	import authStore from '$lib/stores/auth.store.js';

	export let data;

	let isLoggedIn = data.isLoggedIn;

	$: isLoggedIn = $authStore.isActive ? $authStore.isLoggedIn : data.isLoggedIn;

	let timerId;

	async function sendServerToken() {
		try {
			await sendJWTToken();
		} catch (err) {
			clearInterval(timerId);
			messagesStore.showError();
			console.log(err);
		}
	}

	onMount(async () => {
		try {
			await sendServerToken();
			timerId = setInterval(async () => {
				await sendServerToken();
			}, 1000 * 60 * 10);
		} catch (err) {
			console.log(err);
			messagesStore.showError();
		}

		return () => {
			clearInterval(timerId);
		};
	});

	function closeMessage() {
		messagesStore.hide();
	}
</script>

<Nav {isLoggedIn} />
<main class="container">
	{#if $messagesStore.show}
		<div class="row mt-3">
			<div class="col">
				<div
					class:alert-danger={$messagesStore.type === 'error'}
					class:alert-success={$messagesStore.type === 'success'}
					class="alert alert-dismissible"
					role="alert"
				>
					<strong>{$messagesStore.type === 'error' ? 'Error' : 'Success'}:</strong>
					{$messagesStore.message}
					<button type="button" on:click={closeMessage} class="btn-close" aria-label="Close" />
				</div>
			</div>
		</div>
	{/if}
	<slot />
</main>
