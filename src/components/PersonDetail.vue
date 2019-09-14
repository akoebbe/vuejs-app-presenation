<template>
    <div class="person-detail">
        <NavigationBar></NavigationBar>
        <h1 v-text="person.name"></h1>
        <img :src="person.photoUrl">
        <dt>Phone:</dt><dd v-text="person.phone"></dd>
        <dt>Email:</dt><dd v-text="person.email"></dd>
        <section class="bio">{{person.bio}}</section>
    </div>
</template>

<script>
    import NavigationBar from "./NavigationBar";
    export default {
        name: "PersonDetail",
        components: {NavigationBar},
        data() {
            return {
                person: {}
            }
        },
        mounted() {
            axios
                .get('/data/staff/' + this.$route.params.id + '.json')
                .then(response => this.person = response.data)
        }
    }
</script>

<style scoped lang="scss">
    .person-detail {
        text-align: left;
        max-width: 60rem;
        margin: auto;
    }
    img {
        float: right;
        margin: .25rem 1rem;
    }
    .bio {
        margin-top: 1rem;
    }

</style>