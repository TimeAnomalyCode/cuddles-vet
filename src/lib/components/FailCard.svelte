<script>
	import { PUBLIC_ERROR_MESSAGE } from '$env/static/public';

	/**
	 * @type {string}
	 */
	export let message;
</script>

<div class="vh-100 d-flex justify-content-center align-items-center">
	<div class="col-md-4 bg-white shadow-md p-5">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
			<path
				fill-rule="evenodd"
				d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
				clip-rule="evenodd"
			/>
		</svg>
		<div class="text-center">
			<h1>Failed!</h1>
			<p>{message || PUBLIC_ERROR_MESSAGE}</p>
		</div>
	</div>
</div>
