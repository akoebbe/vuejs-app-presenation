<template>
    <div class="staff-page">
        <h1>Our Staff</h1>
        <NavigationBar></NavigationBar>
        <section class="staff-list">
            <PersonList
                v-for="person in staff"
                :key="person.id" :id="person.id"
                :name="person.name"
                :title="person.title"
                :photo-url="person.photoUrl"
                v-on:person-delete="onDeletePerson"
            ></PersonList>
        </section>
    </div>
</template>

<script>
    import PersonList from "./PersonList";
    import NavigationBar from "./NavigationBar";
    import { mapState } from 'vuex'
    export default {
        name: "Staff",
        components: {PersonList, NavigationBar},
        computed: mapState({
            staff: state => state.staff.all
        }),
        methods: {
            onDeletePerson(id) {
                this.$store.commit('staff/deleteStaff', id)
            }
        },
        created() {
            this.$store.dispatch('staff/loadAllStaff')
        }
    }
</script>

<style lang="scss" scoped>
.staff-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    .person {
        padding: 1rem 3rem;
    }
}
</style>