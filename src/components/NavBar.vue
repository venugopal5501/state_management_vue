<template>
    <nav>
        <router-link to="/">VueX</router-link>
        <ul>
            <li>
                <router-link to="/counter">Counter</router-link>
            </li>
            <br>
            <li>
                <router-link to="/employee">Employee</router-link>
            </li>
            <br>
            <li>
                <router-link to="/users">User List</router-link>
            </li>
            <br>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style></style>