<template>
    <section id="reservations" class="container">
            <div class="row g-4">
                <div class="col-sm-6 ">
                    <div class=" column">
                        <span class="rsv-text">Make a</span>
                        <span class="rsv-title">Reservation</span>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="column /bg-primary">
                        <form>
                        <div class="row">
                            <div class="col-sm-4">
                                <input type="text" name="name" id="name"  required  autocomplete="off" placeholder="1 person" >
                            </div>
                            <div class="col-sm-4">
                                <input type="text" name="name" id="name"  required  autocomplete="off" placeholder="select date">
                            </div>
                            <div class="col-sm-4">
                                <input type="text" name="name" id="name"  required  autocomplete="off" placeholder="time" >
                            </div>
                        </div>
                        <button type="submit">Reserve a Table</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
</template>

<style lang="scss">
    @import './src/scss/components/reservations';
</style>