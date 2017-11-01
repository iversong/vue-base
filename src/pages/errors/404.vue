<template>
  <div class="page-container">
    <h1>Oops!</h1>
    <h2>We can't seem to find the page you're looking for.</h2>
    <h5>Error code: 404</h5>
    <ul>
      <li>Here are some helpful links instead:</li>
      <!-- <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  data () {
    return {
      msg: 'We can\'t seem to find the page you\'re looking for.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
