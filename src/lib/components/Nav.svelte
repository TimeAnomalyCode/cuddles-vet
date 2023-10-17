<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { logout } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';

	export let isLoggedIn;

	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	async function onLogout() {
		try {
			await logout();
			await goto('/');
		} catch (e) {
			console.log(e);
			messagesStore.showError();
		}
	}
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
		<span style="font-size: 25px">
			<img
				src="Logo.png"
				alt="Logo"
				width="64"
				height="70"
				class="d-inline-block align-text-center"
			/>
			Cuddles Vet Clinic
		</span>
		<div class:show={isOpen} class="nav justify-content-center" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class:active={$page.url.pathname === '/'} class="nav-link" aria-current="page" href="/"
						>Home</a
					>
				</li>
				<li class="nav-item">
					<a
						class:active={$page.url.pathname === '/appointment'}
						class="nav-link"
						href="/appointment">Appointment</a
					>
				</li>
				<li class="nav-item">
					<a class:active={$page.url.pathname === '/products'} class="nav-link" href="/products"
						>Products</a
					>
				</li>
				<li class="nav-item">
					<a class:active={$page.url.pathname === '/contact'} class="nav-link" href="/contact"
						>Contact</a
					>
				</li>
			</ul>
		</div>
		<div class:show={isOpen} id="navbarNav">
			<ul class="navbar-nav">
				{#if isLoggedIn}
					<li class="nav-item">
						<a class:active={$page.url.pathname === '/profile'} class="nav-link" href="/profile"
							>Profile</a
						>
					</li>
					<li class="nav-item">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<span on:click={onLogout} class="nav-link">Logout</span>
					</li>
				{:else}
					<!-- Not Logged In -->
					<li class="nav-item">
						<a class:active={$page.url.pathname === '/login'} class="nav-link" href="/login">
							<img src="Profile.png" alt="Login" width="36" height="36" />
						</a>
					</li>
					<li class="nav-item">
						<a class:active={$page.url.pathname === '/cart'} class="nav-link" href="/cart">
							<img src="Cart.png" alt="Cart" width="36" height="36" />
						</a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</nav>

<style>
	.nav-item > span {
		cursor: pointer;
	}
	div {
		font-family: inter;
		color: #5c5957;
		font-weight: bold;
	}
	div div ul li {
		float: left;
		padding: 20px;
		color: #5c5957;
		text-decoration: none;
		font-size: large;
	}
</style>
