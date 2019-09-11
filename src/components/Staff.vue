<template>
    <div class="staff-page">
        <h1>Our Staff</h1>
        <NavigationBar></NavigationBar>
        <section class="staff-list">
            <Person name="Andrew Koebbe" title="Presenter" photo-url="http://lorempixel.com/256/256/animals/1/"></Person>
            <Person name="Dangeresque" title="Crooked Cop/Private Eye" photo-url="http://lorempixel.com/256/256/animals/2/"></Person>
            <Person name="Crack Stuntman" title="Panda Outfitter" photo-url="http://lorempixel.com/256/256/animals/3/"></Person>
            <Person name="Dolph Hauldhagen" title="Battle Axeing Instructor" photo-url="http://lorempixel.com/256/256/animals/4/"></Person>
            <Person name="Litigation Jackson" title="Legal Counsel" photo-url="http://lorempixel.com/256/256/animals/5/"></Person>
            <Person name="Trogdor Burninator" title="The Heavy" photo-url="http://lorempixel.com/256/256/animals/6/"></Person>
            <Person name="Lem Sportsinterviews" title="Author" photo-url="http://lorempixel.com/256/256/animals/7/"></Person>
        </section>
    </div>
</template>

<script>
    import Person from "./Person";
    import NavigationBar from "./NavigationBar";
    export default {
        name: "Staff",
        components: {NavigationBar, Person}
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