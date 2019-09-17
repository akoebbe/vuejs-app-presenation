<template>
    <div class="person-detail">
        <NavigationBar></NavigationBar>
        <h1 v-text="person.name"></h1>

        <section class="details">
            <section class="copy">
                <h2 v-text="person.title"></h2>
                <dt>Phone:</dt>
                <dd v-text="person.phone"></dd>
                <dt>Email:</dt>
                <dd v-text="person.email"></dd>
                <div class="bio" v-text="person.bio"></div>
            </section>
            <section class="photo">
                <img :src="person.photoUrl">
            </section>
        </section>
    </div>
</template>

<script>
    import NavigationBar from "./NavigationBar";
    export default {
        name: "PersonDetail",
        components: {NavigationBar},
        computed: {
            person() {
                return this.$store.getters['staff/getPersonById'](this.$route.params.id)
            }
        },
        created() {
            this.$store.dispatch('staff/getAllStaff')
        }

    }
</script>

<style scoped lang="scss">
    h1 {
        margin-bottom: 0;
    }
    .person-detail {
        text-align: left;
        max-width: 60rem;
        margin: auto;
    }
    .details{
        display: flex;
        flex-shrink: 1;
    }
    .copy {
        flex: 2;
    }
    .photo {
        flex: 1;
        margin-left: 1rem;
    }
    img {
        float: right;
        width: 100%;
        height: auto;
        box-shadow: 0 4px 10px rgba(#000000, .5);
    }
    .bio {
        margin-top: 1rem;
    }
</style>