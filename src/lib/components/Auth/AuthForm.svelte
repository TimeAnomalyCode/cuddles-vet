<script>
	export let btnName;
	export let forgotPassword = false;
  	export let showForgotPasswordLink = true;
	import { onMount } from "svelte";

	let password;
	let passIconSrc = "pass-hide.png";

	onMount(() => {
	password = document.querySelector("#password");
	});

	function pass() {
		if (password.type === "password") {
			password.type = "text";
			passIconSrc = "pass-show.png";
		} else {
			password.type = "password";
			passIconSrc = "pass-hide.png";
		}
	}

</script>

<body>
	<form on:submit|preventDefault>
	<div>
		<div class="mb-3">
			<input type="email" name="email" class="form-control" id="email" placeholder="Email" required />
		</div>
		{#if !forgotPassword}
		<div class="mb-3">
			<input
				type="password"
				name="password"
				class="form-control"
				id="password"
				placeholder="Password"
				required
			/>
			<button type="button" on:click={pass} class="pass-button">
				<img src={passIconSrc} alt="pass-icon" class="pass-icon" id="passicon">
			</button>
		</div>
		{/if}
		
		{#if showForgotPasswordLink}
		<p class="forgotpass">
			<a href="/forgot-password">Forgot Password?</a>
		</p>
  		{/if}

		<button type="submit" class="btn">{btnName}</button>
	</div>
</form>
</body>


<style>
	body{
		background-color: rgba(255, 255, 255, 0);
	}
	.mb-3{
		width: 87%;
		margin: 0 auto; /* Horizontally center the text boxes */
		position: relative;
	}
	.pass-button {
		position: absolute;
		background: none;
		border: none;
		padding: 0;
		top: 50%;
		right: 1px;
	}
	.pass-icon{
		width: 35px;
		position: absolute;
		top: 55%;
		right: 5px;
		transform: translateY(-55%);
		padding: 5px;
	}
	.form-control {
		padding: 4% 4%;
		border: 1px solid #5C5957; 
		font-family: inter, sans-serif;
		font-size: 1.1vw;
		height:7vh;
	}

	.btn{
		width:87%;
		background-color: #736D69;
    	color: rgba(255, 255, 255, 0.8);
		font-size: 1.1vw;
		margin-top: 3%;
		margin-bottom: 5%;
		margin-left: 5.9%;
    	padding: 4% 4%;
    	border: none;
    	border-radius: 10px;
    	cursor: pointer;
		font-family: inter, sans-serif;
	}

	.forgotpass{
		font-family: inter, sans-serif;
		font-weight: 500;
		text-align: right;
		width: 90%;
		font-size: 1.1vw;
		margin-left:4%;
		top: 1%;
	}

	.forgotpass a{
		text-decoration: none;
	}

	.forgotpass a:hover{
		text-decoration: underline;
	}
</style>