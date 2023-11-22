<script>
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	import Carousel from 'svelte-carousel';
	const images = ['slideshow1.jpg', 'slideshow2.jpg', 'slideshow3.jpg', 'slideshow4.jpg'];

	let carousel;
	const handleNextClick = () => {
		carousel.goToNext();
	};

	onMount(() => {
		invalidateAll();
	});
</script>

<div class="section1">
	<div class="row">
		<div class="col">
			<div class="container1">
				<h1 class="title1">
					Cuddles
					<br />Veterinary
					<br />Clinic
				</h1>
				<p class="slogan">
					Where Every Paw Finds Compassion
					<br />
				</p>
				<div class="info">
					<p>
						<img src="tel.png" alt="Telephone icon" class="icon" />
						012 - 714 1538
						<br />
						<img src="operatinghours.png" alt="Operating Hours icon" class="icon" />
						9:00 a.m. - 10:00 p.m.
					</p>
				</div>
				<img src="/homepage1.png" alt="Dog and cat with stethoscope 1" class="image1" />
			</div>
		</div>
	</div>
</div>
<div class="section2">
	<div class="row">
		<div class="col">
			<h1 class="title2">OUR HISTORY</h1>
			<div class="paragraph">
				<p>
					Cuddles Veterinary Clinic's history is a
					<br />heartwarming tale of dedication and compassion. Founded
					<br />in [Year] by the visionary, Dr. [Founder's Name], our
					<br />journey began with a singular mission: to champion the
					<br />well-being of pets in [Location].
				</p>
				<p>
					Through the years, Cuddles Veterinary Clinic
					<br />has earned its place as a trusted institution, deeply rooted
					<br />in our love for animals and our commitment to delivering
					<br />exceptional veterinary services. Our story is one of
					<br />countless tails wagged, purrs of contentment, and families
					<br />finding solace in our care.
				</p>
			</div>
			<img src="homepage2.png" alt="Dog and cat with stethoscope 2" class="image2" />
		</div>
	</div>
</div>
<div class="section3">
	<div class="row">
		<div class="col">
			<h1 class="title2" id="title3">OUR GALLERY</h1>
			<p class="slideshow_text">
				Explore heartwarming moments, furry friends, and our dedicated team, showcasing our world of
				<br />compassionate care and happy tails.
			</p>
			<div class="container2">
				<img src="pawprints.png" alt="Paw prints" class="image3" />
			</div>
			<!-- HERE IS SLIDEs -->
			{#if browser}
				<Carousel bind:this={carousel} autoplay autoplayDuration={3000}>
					{#each images as path}
						<div class="slideshow">
							<img src={path} alt="gallery-image" />
						</div>
					{/each}
				</Carousel>
			{/if}
		</div>
	</div>
</div>

<svelte:head>
	<title>Cuddles Vet - Homepage</title>
</svelte:head>

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: Inter Black, sans-serif;
	}

	.section1 {
		width: 100%;
		height: 45%;
		background-color: #d0c4be4d;
		color: #736d69;
		display: flex;
		flex-direction: column;
	}

	.image1 {
		margin-left: 45%;
		margin-top: -38%;
		width: 46%;
	}

	.container1 {
		margin-left: 10%;
	}

	.title1 {
		margin-top: 6%;
		font-size: 5vw;
		font-weight: 900;
		line-height: 1.1;
	}

	.slogan {
		margin-top: -0.5%;
		font-size: 1.15vw;
	}

	.info {
		margin-top: 1.8%;
		font-size: 1vw;
	}
	.icon {
		width: 2%;
		height: 2%;
	}

	.section2,
	.section3 {
		color: #736d6933;
	}

	.title2 {
		font-size: 9.5vw;
		font-weight: 900;
		margin: 0 auto;
		width: fit-content;
		margin-top: 5.5%;
		letter-spacing: -4px;
	}

	.paragraph {
		margin-left: 55%;
		color: #736d69b3;
		text-indent: 12%;
		font-size: 1.15vw;
		margin-top: 3%;
	}
	.image2 {
		margin-left: 5%;
		margin-top: -35%;
		width: 45%;
		height: 65%;
	}

	.slideshow_text {
		text-align: center;
		font-size: 1.15vw;
		color: #736d69b3;
	}

	.image3 {
		float: left;
		margin-top: -15%;
		margin-left: -5%;
		width: 15%;
		height: 60%;
	}

	.slideshow {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 85%;
	}

	.slideshow img {
		max-width: 80%; /* Make sure the image does not exceed the container width */
		max-height: 100%; /* Make sure the image does not exceed the container height */
	}

	@media (max-width: 768px) {
		.image2 {
			width: 45%; /* Set the width to 100% to make it responsive */
			height: auto; /* Allow the height to adjust proportionally */
			margin-top: -38%; /* Adjust the margin-top as needed */
		}
	}
</style>