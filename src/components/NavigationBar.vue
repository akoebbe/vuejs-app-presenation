<template>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/staff">Staff</router-link></li>
        <li><router-link to="/foo">World</router-link></li>
        <li><router-link to="/bar">Solar System</router-link></li>
    </ul>
</template>

<script>
    export default {
        name: "NavigationBar"
    }
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    padding: 0;
    text-align: center;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
    &.router-link-exact-active {
        color: #2c3e50;
    }
}
</style>