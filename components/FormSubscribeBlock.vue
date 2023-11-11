<template lang="pug">
form.maxwidth.row.form-subscribe
    p.form-subscribe__name Подпишись на рассылку
    input.form-subscribe__email(placeholder="Email")
    button.form-subscribe__btn(type="submit") Подписаться
</template>

<style lang="scss">
.form-subscribe {
    background: #1B1B1B;
    display: flex;
    padding: 27px 30px;
    gap: 37px;
    align-items: center;
    margin: 0 auto;
    &__name {
        color: #FEFEFE;
        font-family: Montserrat;
        font-size: 22px;
        font-style: normal;
        font-weight: 800;
        line-height: 30px; /* 136.364% */
        flex: 1;
        position: relative;
        top: 2px;
    }
    &__email {
        display: inline-flex;
        width: 353px;
        height: 42px;
        border-radius: 2px;
        border: 1px solid transparent;
        background: transparent;
        justify-content: center;
        align-items: center;
        padding: 0 8px 2px 8px;
        border-bottom-color: #8D959C;
        color: #8D959C;
        &:focus {
            outline: none;
        }
    }
    &__btn {
        display: inline-flex;
        width: 223px;
        height: 46px;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        border: 1px solid #3657D3;
        background: #3657D3;
        color: white;
    }
}
</style>