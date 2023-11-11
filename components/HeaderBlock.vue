<template lang="pug">
.header
    NuxtLink(to="/")
        NuxtImg.logo(src="Logo.png" height="32" densities="x1 x2")
</template>

<style lang="scss">
.header {
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>