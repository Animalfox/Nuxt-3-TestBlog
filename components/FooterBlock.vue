<template lang="pug">
footer.footer
    .maxwidth
        .footer__row
            .footer__column
                NuxtImg.footer__logo(src="Logo.png" height="32")
                p.footer__description Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
            .footer__column.footer__column-right
                div
                    p.footer__email-placeholder email
                    a(href="mailto:testblogsupport@gmail.com").footer__email testblogsupport@gmail.com
                    .footer__socials
                        NuxtImg.footer__logo(src="facebook.png" height="30" width="30")
                        NuxtImg.footer__logo(src="vk.png" height="30" width="30")
                        NuxtImg.footer__logo(src="instagram.png" height="30" width="30")
                        NuxtImg.footer__logo(src="telegram.png" height="30" width="30")
    slot
</template>

<style lang="scss">
.footer {
    border-top: 1px solid #8D959C;
    margin: 80px auto 0;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
    align-content: center;
    &__row {
        margin-bottom: 70px;
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    &__column {
        width: 426px;
    }
    &__column-right {
        display: flex;
        justify-content: center;
    }
    &__description,
    &__email-placeholder {
        color: var(--Gray, #8D959C);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        margin-top: 20px;
    }
    &__socials {
        margin-top: 24px;
        display: flex;
        gap: 20px;
    }
}
</style>
