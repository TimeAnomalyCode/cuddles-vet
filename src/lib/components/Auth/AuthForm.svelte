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
		width:89%;
		margin: 0 auto; /* Horizontally center the text boxes */
		
	}
	.form-control {
		padding: 4.5% 4.5%;
		border: 1px solid #5C5957; 
		font-family: inter;
	}

	.btn{
		width:89%;
		background-color: #736D69;
    	color: rgba(255, 255, 255, 0.8);
		font-size: 0.86vw;
		margin-top:3.5%;
		margin-left:5.3%;
    	padding: 4.5% 4.5%;
    	border: none;
    	border-radius: 10px;
    	cursor: pointer;
		font-family: inter;
		margin-left:5.3%;
	}
	
	.forgotpass{
		font-family: inter;
		font-weight: bold;
		text-align: right;
		max-width: 90%;
	}

</style>