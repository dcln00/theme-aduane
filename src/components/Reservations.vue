<template>
    <section id="reservations" class="container">
            <div class="row g-4">
                <div class="col-sm-6 ">
                    <div class=" column">
                        <span class="rsv-text">Make a</span>
                        <span class="rsv-title">Reservation</span>
                    </div>
                </div>
                <div class="col-sm-6 frm">
                    <div class="column">
                        <form>
                        <div class="row">
                            <div class="col-sm-4">
                                <select class="form-select" aria-label="Default select">
                                    <option selected disabled>Person</option>
                                    <option value="1">1 Person</option>
                                    <option value="2">2 People</option>
                                    <option value="3">3 People</option>
                                    <option value="4">4 People</option>
                                    <option value="5">5 People</option>
                                    <option value="6">6 Or More</option>
                                </select>
                            </div>
                            <div class="col-sm-4">
                                <input placeholder="Date" class="textbox-n" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date">
                            </div>
                            <div class="col-sm-4">
                                <select class="form-select" aria-label="Default select">
                                    <option selected disabled>Time</option>
                                    <option value="1">10:00 am</option>
                                    <option value="2">11:00 am</option>
                                    <option value="3">12:00 pm</option>
                                    <option value="4">1:00 pm</option>
                                    <option value="5">2:00 pm</option>
                                    <option value="6">3:00 pm</option>
                                    <option value="7">4:00 pm</option>
                                    <option value="8">5:00 pm</option>
                                    <option value="9">6:00 pm</option>
                                    <option value="10">7:00 pm</option>
                                    <option value="11">8:00 pm</option>
                                    <option value="12">9:00 pm</option>
                                    <option value="13">10:00 pm</option>
                                </select>
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