<template>
    <div class="person">
        <img :src="photoUrl">
        <h2 v-text="name"></h2>
        <h3 v-text="title"></h3>
    </div>
</template>

<script>
export default {
    name: "Person",
    props: {
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