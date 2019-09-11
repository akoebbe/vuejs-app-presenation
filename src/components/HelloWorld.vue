<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <NavigationBar></NavigationBar>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar"

export default {
  name: 'HelloWorld',
  components: {NavigationBar},
  props: {
    msg: String
  }
}
</script>