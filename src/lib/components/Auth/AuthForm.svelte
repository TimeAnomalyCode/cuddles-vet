<script>
	export let btnName;
	export let forgotPassword = false;
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
		<p class="forgotpass">
			<a href="/forgot-password">Forgot Password?</a>
		</p>
	{/if}

	<button type="submit" class="btn">{btnName}</button>
</form>

<style>
	.mb-3{
		width: 90%;
		margin: 0 auto; /* Horizontally center the text boxes */
		
	}
	.form-control {
		height: 50px; /* Adjust the height to your preference */
		border: 1px solid #5C5957; 
		font-family: inter;
	}

	.btn{
		width: 90%;
		background-color: #736D69;
    	color: rgba(255, 255, 255, 0.8);
		font-size: 15px;
		margin-top:10px;
		margin-left:20px;
    	padding: 15px;
    	border: none;
    	border-radius: 10px;
    	cursor: pointer;
		font-family: inter;
	}

	.forgotpass{
		font-family: inter;
		font-weight: bold;
		text-align: right;
		max-width: 90%;
	}

</style>