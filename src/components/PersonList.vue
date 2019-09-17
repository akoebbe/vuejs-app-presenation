<template>
    <div class="person">
        <router-link :to="'/staff/' + id">
            <img :src="photoUrl">
        </router-link>
        <h2 v-text="name"></h2>
        <h3 v-text="title"></h3>
        <div @click="$emit('person-delete', id)">delete</div>
    </div>
</template>

<script>
export default {
    name: "PersonList",
    props: {
        id: Number,
        name: String,
        title: String,
        photoUrl: String
    }
}
</script>

<style lang="scss" scoped>
img {
    border-radius: 50%;
    display: block;
    width: 256px;
    height: 256px;
    box-shadow: 0 4px 10px rgba(#000000, .5);
}
h2, h3 {
    margin: .25rem 0;
}
</style>