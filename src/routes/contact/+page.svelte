<svelte:head>
	<title>Cuddles Vet - Contact</title>
</svelte:head>

<div class="section1">
    <div class="row">
        <div class="col">
			<div class="contactbox">
				<div class="image-content">
					<img src="contact1.png" alt="Dog and cat" class="image1">
					<div class="icons">
						<a href="https://www.facebook.com/Cuddlesvet/" target="_blank">
							<img src="facebook.png" alt="Facebook icon" class="icon">
						</a>
						<a href="https://instagram.com/cuddlesvet?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
							<img src="insta.png" alt="Instagram icon" class="icon">
						</a>
						<a href="https://www.twitter.com" target="_blank">
							<img src="twt.png" alt="Twitter icon" class="icon">
						</a>
					</div>
					<div class="content">
						<h1>Contact Us</h1>
						<p>Let's hear from you!</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.section1 {
		background-color: rgba(208, 196, 190, 0.3);
		font-family: Inter;
		color: #736D69;
		text-align:center;
	}

	.contactbox {
		background-color: white;
		display: flex;
		width: 90%;
		margin-left: 5%;
		margin-top: 6%;
		margin-bottom: 6%;
	}

	.image-content {
		position: relative;
		display: flex;
	}

	.image1 {
		width: 40%;
	}

	.icons {
		position: absolute;
		display: flex;
		margin-top:3%;
		margin-left:10%;
	}

	.icon {
		margin-right: 10%; /* Add some space between the icons */
		width:45%;

	}

	.content {
		margin-top:4%;
		margin-left: 21%; /* Add some space between the image and content */
	}

	h1 {
		font-size: 2.6vw;
		font-weight: 800;
		text-shadow: 1.3px 0 0 #736D69;
	}

	p {
		font-size: 1.2vw;
		font-weight: 500;
	}

</style>
