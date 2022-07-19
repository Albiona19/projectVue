<template>
  <div class="container features">
    <h3 id="h3edit">Edit the job</h3>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-centered">
        <form @submit="onSubmit">
          <div class="form-group">
            <input type="text" required class="form-control" placeholder="Title" v-model="jobs.title">
          </div>
          <div class="form-group">
            <label id="labeledit">Category:</label>   
           <select id="category" required name="category" v-model="jobs.category">
              <option value="FrontEnd">FrontEnd</option>
              <option value="BackEnd">BackEnd</option>
              <option value="FullStack">FullStack</option>
              <option value="Security">Security</option>
              <option value="Database">Database</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div class="form-group">
            <label id="labeledit">City:</label>   
            <select id="city" required name="city" v-model="jobs.city">
              <option value="prishtine">Prishtine</option>
              <option value="mitrovice">Mitrovice</option>
              <option value="peje">Peje</option>
              <option value="prizren">Prizren</option>
              <option value="ferizaj">Ferizaj</option>
              <option value="gjilan">Gjilan</option>
              <option value="gjakove">Gjakove</option>
            </select>
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="4" placeholder="Description" 
            v-model="jobs.description"></textarea>
          </div>
            <input type="submit" class="btn btn-secondary" value="Send">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'Editjobs',
  data () {
    return {
      jobs: {}
    }
  },
  created () {
    axios.get(`http://localhost:4000/jobs/` + this.$route.params.id)
    .then(response => {
      this.jobs = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit () {
      axios.put(`http://localhost:4000/jobs/` + this.$route.params.id, this.jobs)
      .then(response => {
        this.$router.push({
          name: 'job',
          //params: { id: this.$route.params.id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
<style scoped>
.col-centered{
  float: none;
  margin: 0 auto;
}
</style>