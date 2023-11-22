<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { logout } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	export let isLoggedIn;
	export let name;
	export let main_picture;

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

<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

<body>
	<div class="wrapper hover_collapse click_collapse">
		<div class="top_navbar">
			<div class="logo">
				<a class:active={$page.url.pathname === '/'} aria-current="page" href="/"
					><img src="/Logo.png" alt="logo" style="width:64px; height:70px" />
					Cuddles Vet Clinic
				</a>
			</div>
			<div class="menu">
				<div class:show={isOpen} id="navbarNav" class="profile_wrap">
					{#if isLoggedIn}
						<div class="profile">
							<a class:active={$page.url.pathname === '/profile'} href="/profile">
								<span class="name">Hi, {name ? name : '...'}</span>
								<img src={main_picture ? main_picture : '/Profile.png'} alt="Login" />
							</a>
						</div>
						<div class="cart">
							<a class:active={$page.url.pathname === '/cart'} href="/cart">
								<img src="/Cart.png" alt="Cart" />
							</a>
						</div>
						<div class="logout">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<span on:click={onLogout}>
								<img src="/logout.png" alt="Logout" />
							</span>
						</div>
					{:else}
						<!-- Not Logged In -->
						<div class="profile_wrap">
							<div class="profile">
								<a class:active={$page.url.pathname === '/login'} href="/login">
									<img src="/Profile.png" alt="Login" />
								</a>
							</div>
							<div class="cart"> 
								<a class="nav-link disabled" aria-disabled="true" href="/cart">
									<img src="/Cart.png" alt="Cart" />
								</a>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
		<div class="sidebar">
			<div class="sidebar_inner" class:show={isOpen} id="navbarNav">
				<ul>
					<li>
						<a class:active={$page.url.pathname === '/appointment'} href="/appointment">
							<span class="icon">
								<i class="bx bx-book-content" />
							</span>
						</a>
					</li>
					<li>
						<a class:active={$page.url.pathname === '/products'} href="/products">
							<span class="icon">
								<i class="bx bx-shopping-bag" />
							</span>
						</a>
					</li>
					<li>
						<a class:active={$page.url.pathname === '/contact'} href="/contact">
							<span class="icon">
								<i class="bx bx-envelope" />
							</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="main_container" />
	</div>

</body>

<style>
	* {
		font-family: 'Inter', sans-serif;
		color: #736d69;
		list-style: none;
		text-decoration: none;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.wrapper {
		margin: 0 10px;
	}

	.top_navbar {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 80px;
		background: #ffffff;
		display: flex;
		align-items: center;
		box-shadow: 1px 0 2px #736d69;
	}

	.top_navbar .logo {
		width: 300px;
		font-size: 22.5px;
		font-weight: bolder;
		padding: 0 10px;
	}

	.top_navbar .menu {
		width: calc(100% - 310px);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.top_navbar .profile_wrap {
		margin-left: auto;
		align-items: center;
		display: flex;
	}

	.top_navbar .profile_wrap img {
		width: 36px;
		height: 36px;
		margin-right: 10px;
	}

	.top_navbar .profile .name {
		margin: 0 15px;
		font-weight: 500;
	}

	.top_navbar .logout span {
		cursor: pointer;
	}
	.sidebar {
		position: absolute;
		top: 81px;
		left: 0;
		width: 280px;
		height: 100%;
		background: #ffffff;
	}

	.sidebar ul li a {
		display: block;
		padding: 15px 25px;
		border-bottom: 1px solid #736d69;
		transition: all 0.3s ease;
	}

	.sidebar ul li a .icon {
		font-size: 25px;
		vertical-align: middle;
	}

	.sidebar ul li a:hover {
		background-color: rgba(115, 109, 105, 0.4);
	}
	
	.hover_collapse .sidebar {
		width: 74px;
	}

	.main_container {
		margin-top: 80px;
		margin-left: 75px;
		width: calc(100% - 75px);
	}
</style>
