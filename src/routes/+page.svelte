<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
</head>
<div class=section1>
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
<img src="homepage2.png" alt="Dog and cat with stethoscope 2"  class= "image2">
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
<img src="Paw Prints.png" alt="Paw prints"  class= "image3">

<script>
    let currentIndex = 0;
  
    const images = ['gallery1.jpg','gallery2.jpg','gallery3.jpg'];
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      }
    
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
</script>
<div class="slideshow">
    <img src={images[currentIndex]} alt="Gallery" />
</div>
<div class="controls">
    <button on:click={prevSlide}>Previous</button>
    <button on:click={nextSlide}>Next</button>
  </div>

<style>

    .section1{
        margin-left:-110px;
        width: 1517.5px;
        background-color: #D0C4BE4D;
        height: 450px;
        
    }

    .image1{
        float:right;
        padding: 0px 60px 0;
        margin-right:90px;
    
    }

    .image2{
        float:left;
        margin-top:-110px;
        margin-left: 130px;
        width:550px;
        height:390px;
    }

    .title{
        margin-left:120px;
        padding: 50px 60px 0;
        font-size:72px;
        font-family: 'Inter', sans-serif;
        font-weight: 900;
        text-shadow: 3px 0 #736D69;
        color: #736D69;

    }

    .slogan{
        margin-left:120px;
        padding: 5px 60px 0;
        font-size:15px;
        font-family: 'Inter', sans-serif;
        color: #736D69;
    }
    .info{
        margin-left:120px;
        padding: 20px 60px 0;
        font-size:13px;
        font-family: 'Inter', sans-serif;
        color: #736D69;
    }
    .icon{
        width:20px;
        height:20px;
    }
    .paragraph1 {
        float: right; /* Float the content container to the right */
        width: 50%; /* Adjust the width as needed */
        margin-top:-310px;
        font-size:15px;
        color: #736D69B3;
        padding-left:90px;
        text-indent:50px;

    }
    .paragraph2 {
        float: right; /* Float the content container to the right */
        width: 50%; /* Adjust the width as needed */
        margin-top:-180px;
        font-size:15px;
        color: #736D69B3;
        padding-left:90px;
        text-indent:50px;

    }
    .title2{
        font-size: 125px;
        color:#736D6933;
        font-weight:800;
        margin:0 auto;
        width: fit-content;
        white-space: nowrap;
        padding: 60px;
    }

    .title3{
        font-size: 125px;
        color:#736D6933;
        font-weight:800;
        white-space: nowrap;
        width: fit-content;
        padding:213px;
        margin-top:120px;

    }

    .image3{
        float:left;
        margin-top:-310px;
        margin-left:100px;
        width:190px;
        height:200px;
    }

    .slideshow {
    display: flex;
    margin-top:-150px;
    justify-content: center;
  }

  .controls{
    margin-top:100px;
    margin-left:500px;
  }

</style>