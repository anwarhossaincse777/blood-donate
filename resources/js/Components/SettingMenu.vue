
<script setup>
defineProps(['modelValue','label'])
defineEmits(['update:modelValue'])
</script>


<template>
    <!--------------------- setting-menu ---------------------------------------->
    <div  @input="$emit('update:modelValue',$event.target.value)">
        <button>ami use kori</button>
    </div>
</template>



<style scoped>

</style>
