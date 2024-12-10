

<script setup>

import FilterSection from "@/Components/FilterSection.vue";
import Card from "@/Components/card.vue";
import Paginating from "@/Components/paginating.vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
</script>


<template>
  <FrontendLayout>

            <FilterSection/>
            <Card/>
            <Paginating/>

  </FrontendLayout>
</template>



<style scoped>

</style>
