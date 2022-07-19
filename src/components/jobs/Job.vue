<template>
  <div class="container">
    <table class="table" >
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">City</th>
          <th scope="col">Description</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in jobs" :key="job._id">
          <td>{{ job.title }}</td>
          <td>{{ job.category }}</td>
          <td>{{ job.city }}</td>
          <td>{{ job.description }}</td>
          <td>{{ job.UploadImg }}</td>
          <button type="button" style="margin-right:5px" class="btn btn-primary" @click.stop="editjob(job._id)">Edit</button>
          <button type="button" class="btn btn-danger" @click.stop="deletejob(job._id)">Delete</button>
        </tr>
        
      </tbody>
      
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
  export default {
    name: 'ShowJobs',
      data(){
        return{
          jobs:{}
        }
      },
      created () {
      axios.get(`http://localhost:4000/jobs/`)
        .then(response => {
          this.jobs = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
      methods: {
        editjob(jobid){
          this.$router.push({
          name: 'jobedit',
          params: { id: jobid }
        })
      },
        deletejob(jobid){
          axios.delete('http://localhost:4000/jobs/' + jobid)
          .then((result) => {
            //refresh on same page
            this.$router.go({
              
            })
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }

</script>