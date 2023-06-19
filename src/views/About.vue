<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Hoang Luu</strong>, a newly graduated university student.<br/> 
        My education focuses on game development.      
      </div>

      <div style="margin-top: 20px;">Throughout my education I've worked on some <router-link to="/game-projects">Game</router-link>, as well as some <router-link to="/other-projects">Other Project</router-link>.<br/>
        I also do a bit of pixelart for fun, say hello to Bob the Blob -->.
      </div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game developer to gain more experience. You can reach me at <a href="mailto:hoangluu021600@gmail.com">hoangluu021600@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/bobrevised.gif" alt="gif of slime jumping" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;

}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>