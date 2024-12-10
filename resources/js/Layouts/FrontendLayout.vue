<script setup>
import Navbar from "@/Components/Navbar.vue";
</script>


<template>
    <div>
        <Navbar/>
        <main class="main">
            <div class="containermain">
                <slot/>
            </div>

        </main>
    </div>
</template>


<style scoped>

</style>
