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
              <tr class="tbl-row" v-for="user in users" v-transition>
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
import toastr from 'toastr'

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

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
    validate: function (user) {
      return (user.firstname && user.firstname.length > 0 && user.email && user.email.length > 0 && user.age && user.age > 0 ) ? true: false
    },
    addUser: function() {
      if(this.validate(this.newUser)){
        usersRef.push(this.newUser)
        this.newUser.firstname = this.newUser.lastname = this.newUser.age = this.newUser.email = ''
        toastr.success("User Added")
      }else{
        toastr.error("Invalid User info")
      }
    },
    removeUser: function (user) {
      usersRef.child(user['.key']).remove().then(function() {
        console.log("User "+user.firstname+" removed from firebase")
        toastr.success("User deleted")
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
.tbl-row{
  transition: all .3s ease;
   height: 30px;
   padding: 10px;
   background-color: #eee;
   overflow: hidden;
}
.tbl-row.v-enter, .msg.v-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
}
</style>
