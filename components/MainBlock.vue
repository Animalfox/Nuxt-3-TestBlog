<template lang="pug">
main.main
    slot
</template>

<style lang="scss">
.main {
    flex:1;
    display: flex;
    flex-direction: column;
    gap: 100px;
}
</style>