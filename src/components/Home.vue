<template>
  <div class="container features">
   <section class="sliderDiv" id="container">
      <div class="container">
        <div class="caption">
           
          <h1 style="font-size:82px">JOB PORTAL</h1>
        </div>
        
      </div>
      
    </section>
    <div style="margin:40px">
      <h1>Welcome to the Home Page!</h1>
      <p id="par">The #1 job site to find remote, work from home, and flexible job opportunities since 2007. Millions of people are searching for jobs, salary information, company reviews, and interview questions. See what others are looking for on JobPortal today.</p>
    </div>
    <br/>
    <h1>Read About the job of Programmer And Apply</h1>
    <hr>
        <h5 style=" font-family: 'Dancing Script', cursive;
font-family: 'Shadows Into Light', cursive; font-size:30px; text-align:center;">Read about the full stack developer!</h5>

<br/>
<p class=" full" style="text-align:left; margin-top:50px;"><i>Full stack developers merge front 
 
  end and back end web development skills, tackling a wide variety of tasks in building and maintaining 
  
  a digital entity (e.g., app, web page). <mark>The position is predicated upon versatility, innovative 
    
    thinking, and a blend of technical programming knowledge and high-level client communication.</mark></i></p>

    <div class="video">
      
      <iframe width="460" height="315" src="https://www.youtube.com/embed/8KaJRw-rfn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
     <img src="../assets/full.png" alt="full" style="margin-right:500px; margin-top: -500px;"  width=" 350px"
    height=" 250px;">
    <br/>
    <h5>Read for the front end development</h5>
    <br/>
    <p><i>A front-end developer is someone who works on software, like desktop or mobile websites, that users interact with. Specifically, a front-end developer spends time on the side of technology that the user touches and sees. The front end is also commonly referred to as the client side, or more broadly</i></p>
    <br>
    
    <div class="video2"><iframe width="360" height="315" src="https://www.youtube.com/embed/qyHyFsT7Hig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    </div>
    
    <br/>
    
    
     <img src="../assets/front.jpg" alt="front"  style="margin-right:500px; margin-top: -500px;"  width=" 350px"
    height=" 250px;">

    <h5>Read for the Back end development</h5>
    <br/>
    <p><i>ack-end languages will differ in file size, performance, <mark>compatibility, how many lines of code required, and the style of programming. Some back-end scripting languages are object-oriented programming languages, a style of programming that bundles attributes and functions within objects.</mark> </i></p>
    <br>
    
    <div class="video2"><iframe width="460" height="315" src="https://www.youtube.com/embed/0Kv_k4ypj6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    </div>
    
    <br/>
    
    
     <img src="../assets/back.png" alt="front"  style="margin-right:500px; margin-top: -500px;"  width=" 350px"
    height=" 250px;">
    <hr>
    <br/>

    <div class="map">
      <h1 class="visit">Visit Us</h1>
      <br/>
       <br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93880.25360912201!2d21.088686730877544!3d42.666484995353045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354f2cbab67d493%3A0x5c97e5834932545a!2sNEWBORN!5e0!3m2!1sen!2s!4v1647176782695!5m2!1sen!2s" 
      
      width="1405" class="mapp-img" height="300" style="border:2px; margin-left:-150px;" allowfullscreen="" loading="lazy" ></iframe>
   </div>
    <div class="row">
      <div class="container card col-12 col-sm-12 col-md-4 col-lg-3" style="width: 18rem; margin-bottom:20px" 
        v-for="job in jobfields" :key="job._id">
        <img class="card-img-top" :src="photo" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title" style="font-weight:600">{{ job.title }}</h5>
          <p class="card-text">{{ job.description }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><em>Category: </em> {{ job.category }}</li>
          <li class="list-group-item"><em>City: </em>{{ job.city }}</li>
        </ul>
      </div>
    </div> 
  </div>
</template>

<script>

/* eslint-disable */
import axios from 'axios'
export default {
  name: 'CreateJobs',
  data () {
    return {
      photo:"https://banner2.cleanpng.com/20180529/osf/kisspng-job-hunting-intern-employment-website-cover-letter-job-search-5b0d9f89959ea1.4692299715276194656129.jpg",
      jobfields:{},
      jobs: {}
    }
  },created () {
    axios.get(`http://localhost:4000/jobs`)
    .then(response => {
      this.jobfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  // methods: {
  //   onSubmit (evt) {
  //     evt.preventDefault()
  //     axios.post(`http://localhost:4000/jobs`, this.jobs)
  //     .then(function (response) {
  //       console.log(response);
  //       })
      
  //   }
  // }
}
</script>
<style scoped>
  .main-banner{
    background-size:cover !important;
    background-position:center !important;
    padding:14% 0;
    position:relative;
    text-align:center;
    color:#ffffff;
    margin:0;
  }
  .main-banner .caption{
    position:relative;
  }
  .main-banner:before{
    content:"";
    display:block;
    top:0;
    bottom:0;
    left:0;
    right:0;
    position:absolute;
    background:rgba(12,20,25,0.3);
  }
  .video{
    margin: 2;
    margin-left: 700px;
    margin-bottom: 100px;
  }
  /* .full{
    margin-top: 100%;
    margin-right: 500px;
    
  } */
  .video2{
    margin: 2;
    margin-left: 700px;
    margin-bottom: 100px;
  }
  /* img{
    width: 40%;
    height: 30%;
  } */
  .map{
    margin-right: 700px;
  }
  
    .sliderDiv{
	width: 800px;
	height:400px;
	background-image: url('../assets/3.jpg');
	margin: 50px auto;
	animation: slide 20s infinite;
}

@keyframes slide{
	25%{
		background-image: url('../assets/1.jpg');
	}

	50%{
		background-image: url('../assets/2.jpg');
	}

	75%{
		background-image: url('../assets/3.jpg');
	}

	100%{
		background-image: url('../assets/4.jpg');
	}
}
@media(max-width:1500px){
	.emailH4{
		margin-right:100px;
	}
}

@media(max-width:800px){
	.slider{
		height:500px;
	}
	.sliderDiv{
		width:533px;
		height:266px;
	}
}

@media(max-width:760px){
	.ContactInfo > div > img{
		display:none;
	}
}

@media(max-width:560px){
	.slider{
		height:500px;
		
	}
	.home{
		padding-left:0;
	}
	
	.sliderDiv{
		width:321px;
		height:160px;
  }

    
  }
  @media(max-width:560px){
      .map-img{
	width: 670px;
	height:300px;
}
   }
 
</style>