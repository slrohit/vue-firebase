<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Add New User</h3>
        </div>
        <div class="panel-body">
          <form id="addUserForm" class="form-inline" v-on:submit.prevent="addUser">
            <div class="form-group">
              <label for="firstname">firstname</label>
              <input type="text" id="firstname" class="form-control" v-model="newUser.firstname">
            </div>
            <div class="form-group">
              <label for="lastname">lastname</label>
              <input type="text" id="lastname" class="form-control" v-model="newUser.lastname">
            </div>
            <div class="form-group">
              <label for="age">age</label>
              <input type="number" id="age" class="form-control" v-model="newUser.age">
            </div>
            <div class="form-group">
              <label for="email">email</label>
              <input type="email" id="email" class="form-control" v-model="newUser.email">
            </div>
            <div class="submit-div">
              <input type="submit" class="btn btn-primary" value="Add User">
            </div>
          </form>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>{{title}}</h3>
        </div>
        <div class="panel-body">
          <table class="table table-stripped">
            <thead>
              <tr>
                <th> first name </th>
                <th> last name </th>
                <th> age </th>
                <th> email </th>
                <th> delete </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users">
                <td>{{user.firstname}}</td>
                <td>{{user.lastname}}</td>
                <td>{{user.age}}</td>
                <td>{{user.email}}</td>
                <td><span class="glyphicon glyphicon-trash" v-on:click="removeUser(user)"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../db/FirebaseDb'
import toaster from 'toaster'

let usersRef = db.ref('users')

export default {
  name: 'User',
  firebase: {
    users: usersRef
  },
  data() {
    return {
      title: 'Users List',
      newUser: {
        firstname: '',
        lastname: '',
        age: '',
        email: ''
      }
    }
  },
  methods: {
    addUser: function() {
      usersRef.push(this.newUser)
      this.newUser.firstname = this.newUser.lastname = this.newUser.age = this.newUser.email = ''
      toaster.success("User Added")
    },
    removeUser: function (user) {
      usersRef.child(user['.key']).remove().then(function() {
        console.log("User "+user.firstname+" removed from firebase")
        toaster.success("User deleted")
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.submit-div{
  text-align: center;
  margin-top: 10px;
}
</style>
