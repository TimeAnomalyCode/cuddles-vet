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
	{/if}
	<button type="submit" class="btn">{btnName}</button>
</form>

<style>
	.mb-3{
		width:320px;
		margin: 0 auto; /* Horizontally center the text boxes */
		
	}
	.form-control {
		padding: 4.5% 4.5%;
	}

	.btn{
		width:89%;
		background-color: #736D69;
    	color: rgba(255, 255, 255, 0.8);
		font-size: 13.5px;
		margin-top:10px;
		margin-left:20px;
    	padding: 15px 20px;
    	border: none;
    	border-radius: 10px;
    	cursor: pointer;
		font-family: inter;
		margin-left:5.3%;

	}
</style>