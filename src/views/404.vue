<template>
  <div class="error404">
      <div>
        <h2>Oops</h2>
        <!-- <p>page not found</p> -->
        <p>The Page you are looking for does not exist or an other error occured.</p>
        <p class="home404"><RouterLink to="/">go home</RouterLink></p>
      </div>
  </div>
</template>

<style lang="scss">
 .error404 {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.error404 h2 {
    font-size: 100px;
    font-family: "Signature";
    text-align: center;
    padding-left: 20px;
    color: #00513f;
    
}

.error404 p {
    text-align: center;
    font-size:10px;
    color:#ededed;
}

.error404 .home404 a {
    font-family: "Signature";
    font-size: 26px;
    text-decoration: none;
    color: #ededed;
}
</style>