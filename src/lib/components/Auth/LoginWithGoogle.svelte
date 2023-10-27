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
		width: 320px;
		height:50px;
		padding: 10px;
		background-color: rgba(255,255,255,0.0);
		font-weight: 600;
  		color: #5C5957;
 	 	border: 1px solid #5C5957; 
		border-radius: 5px;
        margin: 0 auto;
        display: block;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	button:hover {
		background-color: #5C5957; 
		color: #ffffff; border: 1px solid #5C5957; /* Change border color on hover (if needed) */
  	}

	.icon{
		display: inline-block;
  		width: 24px;
		height: 24px;
		text-decoration: none;
		margin-right:5px;
		margin-bottom:1px;
	}
</style>
