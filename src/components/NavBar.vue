<template>
    <nav>
        <router-link to="/">VueX</router-link>
        <ul>
            <li>
                <router-link to="/counter">Counter</router-link>
            </li>
            <li>
                <router-link to="/employee">Employee</router-link>
            </li>
            <li>
                <router-link to="/userlist">User List</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style></style>