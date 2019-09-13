<template>
    <div class="staff-page">
        <h1>Our Staff</h1>
        <NavigationBar></NavigationBar>
        <section class="staff-list">
            <Person v-for="person in staff" :key="person.id" :name="person.name" :title="person.title" :photo-url="person.photoUrl"></Person>
        </section>
    </div>
</template>

<script>
    import Person from "./Person";
    import NavigationBar from "./NavigationBar";
    export default {
        name: "Staff",
        components: {NavigationBar, Person},
        data() {
            return {
                staff: [
                    // { id: 1, name: 'Andrew Koebbe', title: 'Presenter', photoUrl: 'http://lorempixel.com/256/256/animals/1/'},
                    // { id: 2, name: 'Dangeresque', title: 'Crooked Cop/Private Eye', photoUrl: 'http://lorempixel.com/256/256/animals/1/'},
                    // { id: 3, name: 'Crack Stuntman', title: 'Panda Outfitter', photoUrl: 'http://lorempixel.com/256/256/animals/1/'},
                    // { id: 4, name: 'Dolph Hauldhagen', title: 'Battle Axeing Instructor', photoUrl: 'http://lorempixel.com/256/256/animals/1/'},
                    // { id: 5, name: 'Litigation Jackson', title: 'Legal Counsel', photoUrl: 'http://lorempixel.com/256/256/animals/1/'},
                    // { id: 6, name: 'Trogdor Burninator', title: 'The Heavy', photoUrl: 'http://lorempixel.com/256/256/animals/1/'},
                    // { id: 7, name: 'Lem Sportsinterviews', title: 'Author', photoUrl: 'http://lorempixel.com/256/256/animals/1/'},
                ]
            }
        },
        mounted() {
            axios
                .get('/data/staff.json')
                .then(response => this.staff = response.data)
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