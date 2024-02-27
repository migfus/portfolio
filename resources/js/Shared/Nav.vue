<template>
  <h1>Links</h1>
  <li>
    <NavLink href="/" :active="$page.component == 'Home'">Home</NavLink>
    <NavLink href="/settings" :active="$page.component == 'Settings'">Settings</NavLink>
    <NavLink href="/users" :active="$page.component == 'Users'">Users</NavLink>
    <Link href="/logout" method="post" as="button" preserved-scroll>Logout</Link>
  </li>
</template>

<script setup lang="ts">
import NavLink from './NavLink.vue'

</script>
