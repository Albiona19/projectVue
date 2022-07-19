<template>
  <div class="container">
    <div class="about-section">
      <h1>About Us Page</h1>
      <p>Some text about who we are and what we do.</p>
      <p>Resize the browser window to see that this page is responsive by the way.</p>
    </div>
    <h2>Our Team</h2>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="card">
          <img src="../assets/albiona.jpg" alt="Albiona" style="width:100%;">
          
          <div class="container">
            <h2>Albiona Berisha</h2>
            <p class="title">CEO & Founder</p>
            <p>I am a young professional with enterprise aiming to continue my development as a programmer. I have great
                knowledge in some programming languages like Java, Python and C #. In terms of results and objectives, I am
                enthusiastic and work with determination and conviction. I have a proactive attitude and find positive ways to
                stimulate and engage with people.</p>
            <p>ab47853@ubt-uni.net</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="card">
          <img src="../assets/fortesa.jpg" alt="Fortesa" style="width:100%">
          <div class="container">
            <h2>Fortesa Reqica</h2>
            <p class="title">CEO & Founder</p>
               <p>I am a young professional with enterprise aiming to continue my development as a programmer. I have great
                knowledge in some programming languages like Java, Python and C #. In terms of results and objectives, I am
                enthusiastic and work with determination and conviction. I have a proactive attitude and find positive ways to
                stimulate and engage with people.</p>
            <p>Fortesa@ubt-uni.net</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
       <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="card">
          <img src="../assets/nora.jpg" alt="Leonora" style="width:100%">
          <div class="container">
            <h2>Leonora Mavriqi</h2>
            <p class="title">CEO & Founder</p>
               <p>I am a young professional with enterprise aiming to continue my development as a programmer. I have great
                knowledge in some programming languages like Java, Python and C #. In terms of results and objectives, I am
                enthusiastic and work with determination and conviction. I have a proactive attitude and find positive ways to
                stimulate and engage with people.</p>
            <p>nora@ubt-uni.net</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="card">
          <img src="../assets/edona.jpg" alt="Edona" style="width:100%">
          <div class="container">
            <h2>Edona Berisha</h2>
            <p class="title">CEO & Founder</p>
               <p>I am a young professional with enterprise aiming to continue my development as a programmer. I have great
                knowledge in some programming languages like Java, Python and C #. In terms of results and objectives, I am
                enthusiastic and work with determination and conviction. I have a proactive attitude and find positive ways to
                stimulate and engage with people.</p>
            <p>eb47854@ubt-uni.net</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
      </div>
    </div>

</template>


<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.card {
  box-shadow: 0 4px 8px 0 #c1dde1;
  margin: 8px;
  
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: #c1dde1;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #474e5d;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

</style>