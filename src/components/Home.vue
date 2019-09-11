<template>
  <div class="home">
    <h1>This is the home page</h1>
    <NavigationBar></NavigationBar>

    <p>Stuff below the navigation bar.</p>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";
export default {
  name: 'Home',
  components: { NavigationBar },
}
</script>