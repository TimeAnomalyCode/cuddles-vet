<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
    <style>
        .body{
            margin: 0;
            padding: 0;
        }

        .section1 {
            width: 100%;
            background-color: #D0C4BE4D;
            height: 450px;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .image1 {
            float: right;
            padding: 0 60px 0;
            margin-right: 90px;
        }

        .image2 {
            float: left;
            margin-top: -110px;
            margin-left: 130px;
            width: 550px;
            height: 390px;
        }

        .title {
            margin-left: 100px;
            padding: 50px 60px 0;
            font-size: 72px;
            font-family: 'Inter', sans-serif;
            font-weight: 900;
            text-shadow: 3px 0 #736D69;
            color: #736D69;
        }

        .slogan {
            margin-left: 100px;
            padding: 5px 60px 0;
            font-size: 15px;
            font-family: 'Inter', sans-serif;
            color: #736D69;
        }

        .info {
            margin-left: 100px;
            padding: 20px 60px 0;
            font-size: 13px;
            font-family: 'Inter', sans-serif;
            color: #736D69;
        }

        .icon {
            width: 20px;
            height: 20px;
        }

        .paragraph1 {
            float: right;
            width: 50%;
            margin-top: -310px;
            font-size: 15px;
            color: #736D69B3;
            padding-left: 90px;
            text-indent: 50px;
        }

        .paragraph2 {
            float: right;
            width: 50%;
            margin-top: -180px;
            font-size: 15px;
            color: #736D69B3;
            padding-left: 90px;
            text-indent: 50px;
        }

        .title2 {
            font-size: 125px;
            color: #736D6933;
            font-weight: 800;
            margin: 0 auto;
            width: fit-content;
            white-space: nowrap;
            padding: 60px;
        }

        .title3 {
            font-size: 125px;
            color: #736D6933;
            font-weight: 800;
            white-space: nowrap;
            width: fit-content;
            padding: 213px;
            margin-top: 120px;
        }

        .image3 {
            float: left;
            margin-top: -200px;
            margin-left: 100px;
            width: 190px;
            height: 200px;
        }

        .slideshow {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .slideshow img {
            object-fit: cover;
            width: 1200px;
            height: 600px;
            object-fit: cover;
            justify-content: center;
            margin-top: 25px;
        }

        .slideshow_text {
            margin-top: -200px;
            text-align: center;
            font-size: 15px;
            color: #736D69B3;
        }

        .controls {
            margin-top: -300px;
            margin-left: 500px;
            display: flex;
        }

        .arrow {
            cursor: pointer;
            width: 40px;
            height: 70px;
        }

        #prevArrow {
            margin-left: -500px;
        }

        #nextArrow {
            margin-left: auto;
        }
    </style>
</head>
<body class="body">
    <div class="section1" >
        <img src="/homepage1.png" alt="Dog and cat with stethoscope 1" class="image1">
        <h1 class="title">
            Cuddles
            <br>Veterinary
            <br>Clinic
        </h1>
        <p1 class="slogan">
            Where Every Paw Finds Compassion
            <br>
        </p1>
        <div class="info">
            <p>
                <img src="tel.png" alt="Telephone icon" class="icon">
                012-714 1538
            </p>
            <p>
                <img src="operatingHours.png" alt="Telephone icon" class="icon">
                9:00 a.m. - 10:00 p.m.
            </p>
        </div>
    </div>
    <h1 class="title2">OUR HISTORY</h1>
    <img src="homepage2.png" alt="Dog and cat with stethoscope 2" class="image2">
    <div class="paragraph1">
        <p>
            Cuddles Veterinary Clinic's history is a
            <br>heartwarming tale of dedication and compassion.
            <br>Founded in [Year] by the visionary Dr. [Founder's
            <br>Name], our journey began with a singular mission:
            <br>to champion the well-being of pets in [Location].
            <br>
            <br>
        </p>
    </div>
    <div class="paragraph2">
        <p>
            Through the years, Cuddles Veterinary
            <br>Clinic has earned its place as a trusted institution,
            <br>deeply rooted in our love for animals and our
            <br>commitment to delivering exceptional veterinary
            <br>services. Our story is one of countless tails
            <br>wagged, purrs of contentment, and families finding
            <br>solace in our care.
        </p>
    </div>
    <h1 class="title3">
        OUR GALLERY
    </h1>
    <p class="slideshow_text">
        Explore heartwarming moments, furry friends, and our dedicated team, showcasing our world of 
        <br>compassionate care and happy tails.
    </p>
    <img src="Paw Prints.png" alt="Paw prints" class="image3">
    <div class="slideshow">
        <img src="slideshow1.jpg" alt="Gallery" />
    </div>

    <div class="controls">
        <div id="prevArrow" class="arrow-container" role="button" tabindex="0">
            <img src="previous_arrow.png" alt="Previous" class="arrow" />
        </div>
        <div id="nextArrow" class="arrow-container" role="button" tabindex="0">
            <img src="next_arrow.png" alt="Next" class="arrow" />
        </div>
    </div>

    <script>
        let currentIndex = 0;
        const images = ['slideshow1.jpg', 'slideshow2.jpg', 'slideshow3.jpg', 'slideshow4.jpg'];
  
        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlideshow();
        }
  
        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlideshow();
        }
  
        function updateSlideshow() {
            // Update the image displayed in the slideshow
            const slideshowImage = document.querySelector('.slideshow img');
            if (slideshowImage !== null && slideshowImage instanceof HTMLImageElement) {
                slideshowImage.src = images[currentIndex];
            } else {
                console.error('Slideshow image not found or is not an image element.');
            }
        }
  
        document.getElementById('prevArrow').addEventListener('click', function() {
            prevSlide();
        });

        document.getElementById('nextArrow').addEventListener('click', function() {
            nextSlide();
        });

        document.getElementById('prevArrow').addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === 'Space') {
                prevSlide();
            }
        });

        document.getElementById('nextArrow').addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === 'Space') {
                nextSlide();
            }
        });

        // Function to automatically advance to the next slide
        function autoRotate() {
            nextSlide();
        }

        // Set an interval to call the autoRotate function every 5000 milliseconds (5 seconds)
        setInterval(autoRotate, 5000);
        
    </script>
    
</body>
</html>
