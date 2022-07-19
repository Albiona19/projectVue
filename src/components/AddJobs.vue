<template>
  <div class="container">
    <div>
      <h2>Add Jobs</h2>
    </div>
    <div class="row">
      <div class="container col-7">
        <form @submit="onSubmit">
          <label>Title</label>
          <input type="text" required id="title" name="title" placeholder="Enter the title" v-model="jobs.title">
          <label>Category</label>
            <select id="category" required name="category" v-model="jobs.category">
              <option value="FrontEnd">FrontEnd</option>
              <option value="BackEnd">BackEnd</option>
              <option value="FullStack">FullStack</option>
              <option value="Security">Security</option>
              <option value="Database">Database</option>
              <option value="Others">Others</option>
            </select>
          <label>City</label>
            <select id="city" required name="city" v-model="jobs.city">
              <option value="prishtine">Prishtine</option>
              <option value="mitrovice">Mitrovice</option>
              <option value="peje">Peje</option>
              <option value="prizren">Prizren</option>
              <option value="ferizaj">Ferizaj</option>
              <option value="gjilan">Gjilan</option>
              <option value="gjakove">Gjakove</option>
            </select>
          <label for="subject">Subject</label>
          <textarea id="subject" required name="subject" placeholder="Write something.." rows="6" v-model="jobs.description"></textarea>
         
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>
</template>


<script>
/* eslint-disable */
//Axios eshte nje interpretim i API, ose nje paket official e vuejs qe sherben per me dergu te dhena.
import axios from 'axios'
import router from '@/router'
export default {
  name: 'CreateJobs',
  data () {
    return {
      jobs:{},
    }
  },
  methods: {
    onSubmit () {  
      axios.post(`http://localhost:4000/jobs`, this.jobs)
      .then(response => {
        router.push({
          name: 'home',
        })
      })    
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}

/* Style inputs */
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

/* Style the container/contact section */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

</style>