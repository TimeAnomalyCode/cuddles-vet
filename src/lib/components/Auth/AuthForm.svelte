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
			/>
		</div>
	{/if}
	<button type="submit" class="btn btn-success ">{btnName}</button>
</form>

<style>
	.mb-3{
		width:320px;
		margin: 0 auto; /* Horizontally center the text boxes */
		
	}
	.form-control {
		height: 50px; /* Adjust the height to your preference */
	}

	.btn{
		width:320px;
		background-color: #736D69;
    	color: #ffffff;
		margin-top:10px;
		margin-left:20px;
    	padding: 15px 20px;
    	border: none;
    	border-radius: 10px;
    	cursor: pointer;
    	font-size: 13px;
		font-family: inter;

	}
</style>