<template>
    <section class="mobile-nav">
        <div class="row">
            <div class="col-sm menu-img">
                <img src="@/assets/images/image3.jpg" class="slideshow-image">
                <img src="@/assets/images/image14.jpg" class="slideshow-image">
                <img src="@/assets/images/image7.jpg" class="slideshow-image">
            </div>
            <div class="col-sm menu-links">
                <div class="row">
                <div class="col-sm">
                    <ul>
                        <li class="menu-link"><RouterLink to="/">Home</RouterLink></li>
                        <li class="menu-link"><RouterLink to="/menu">Menu</RouterLink></li>
                        <li class="menu-link"><RouterLink to="/events">Events</RouterLink></li>
                        <li class="next-col menu-link"><RouterLink to="/about">About</RouterLink></li>
                        <li class="next-col menu-link"><RouterLink to="/contact">Contact</RouterLink></li>
                    </ul>
                </div>
            </div>
            <div class="d-flex menu-footer">
                <span class="copy-icons">
                    <a href="https://www.twitter.com/fkadcln" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/n.aryeh" target="_blank"><i class="fab fa-instagram"></i></a>
                </span>
                <hr>
                <span class="copyright">2022 © Aduane Urban Restaurant. All rights reserved.
                </span>
            </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @import './src/scss/components/slideshow';
</style>