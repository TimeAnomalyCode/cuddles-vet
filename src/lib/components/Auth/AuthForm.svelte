<script>
	export let btnName;
	export let forgotPassword = false;
  	export let showForgotPasswordLink = true;

</script>

<form on:submit|preventDefault>
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
				placeholder="*********"
				required
			/>
		</div>
	{/if}

	{#if showForgotPasswordLink}
		<p class="forgotpass">
			<a href="/forgot-password">Forgot Password?</a>
		</p>
  	{/if}

	<button type="submit" class="btn">{btnName}</button>
</form>

<style>
	.mb-3{
		width: 87%;
		margin: 0 auto; /* Horizontally center the text boxes */
		
	}
	.form-control {
		padding: 4% 4%;
		border: 1px solid #5C5957; 
		font-family: inter, sans-serif;
		font-size: 1.1vw;
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
		max-width: 90%;
		font-size: 1.1vw;
		margin-left:4%;
	}

</style>