<template>
    <div class="person">
        <router-link :to="'/staff/' + id">
            <img :src="photoUrl">
        </router-link>
        <h2 v-text="name"></h2>
        <h3 v-text="title"></h3>
    </div>
</template>

<script>
import NavigationBar from "./NavigationBar";
export default {
    name: "Person",
    components: {NavigationBar},
    props: {
        id: Number,
        name: String,
        title: String,
        photoUrl: URL
    }
}
</script>

<style lang="scss" scoped>
img {
    border-radius: 50%;
    display: block;
}
h2, h3 {
    margin: .25rem 0;
}
</style>