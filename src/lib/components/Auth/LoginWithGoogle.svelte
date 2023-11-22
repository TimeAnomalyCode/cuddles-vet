<script>
	import { page } from '$app/stores';
	import { loginWithGoogle } from '$lib/firebase/auth.client';
	import { afterLogin } from '$lib/helpers/route.helper';
	import messagesStore from '$lib/stores/messages.store';

	async function loginGoogle() {
		try {
			const user = await loginWithGoogle();
			await afterLogin($page.url, user.uid);
			// console.log(user);
		} catch (err) {
			if (err.code === 'auth/popup-closed-by-user') {
				return;
			}
			console.log(err);
			messagesStore.showError();
		}
	}
</script>

<div class="row">
	<div class="col">
		<button on:click={loginGoogle}><img src="Icongoogle.png" alt="google" class="icon"/>
			Continue with Google
		</button>
	</div>
</div>

<style>
	button{
		width: 83%;
		margin: 4.5% 8.5%; /* Center the button horizontally */
		align-items: center;
		background-color: rgba(255, 255, 255, 0);
		color: #5C5957;
		font-size: 1.1vw;
		font-weight: 600;
		font-family: inter, sans-serif;
		padding: 3% 3%;
		border: 1px solid #5C5957;
		border-radius: 5px;
		cursor: pointer;
	}

	button:hover {
		background-color: #5C5957; 
		color: #ffffff;  
  	}

	.icon{
		display: inline-block;
  		width: 8%;
		height: 8%;
		text-decoration: none;
		margin-right:5px;
		margin-bottom:1px;
	}
</style>
