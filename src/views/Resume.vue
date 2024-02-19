<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Hoang Luu</strong>, A recent game development graduate known for a positive
      attitude and strong work ethic, I bring adaptability and time
      management skills to the table. With a proven track record of
      meeting deadlines, I thrive both independently and in team
      environments. I am also a quick learner, ready to tackle any
      problems that come my way.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Hoang CV.pdf" download><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <!--<div class="photo">
      <img src="img/me.jpg" alt="Photo of me" />
    </div> -->

    <div style="clear:both"></div>

    <div class="full-content">
     <!--  <h2>Work experience</h2>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2018-2019</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2015-2017</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Even more Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2012-2015</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div> -->

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming Languages</h3>
        <SkillRate name="C#" :rate="3" />
        <SkillRate name="Java" :rate="2" />
        <SkillRate name="C++" :rate="2" />
        <SkillRate name="HTML" :rate="3" />
        <SkillRate name="CSS" :rate="3" />
        <SkillRate name="SQL" :rate="3" />
        
         <h3>Google Workspace</h3>
        <SkillRate name="Drive" :rate="5" />
        <SkillRate name="Docs" :rate="4" />
        <SkillRate name="Sheets" :rate="3" />
        <SkillRate name="Forms" :rate="3" />
        <SkillRate name="Slides" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Soft Skills</h3>
        <SkillRate name="Communication" :rate="4" />
        <SkillRate name="Problem-solving" :rate="4" />
        <SkillRate name="Teamwork" :rate="5" />
        <SkillRate name="Creativity" :rate="4" />
        <SkillRate name="Time Management" :rate="4" />

      </div>


      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Malmö University 2020-2023</h3>
      <h4>Bachelor of Science(B.sc) in Game Development</h4>
      <div>Thesis: “Developing a Roguelike Deckbuilding Design Tool with Slay the Spire Modding API”<br>
      <router-link to="/other-projects/project-6" >Click here for more details</router-link></div>


      <h2>Languages</h2> 
 
      <h3>Swedish</h3>
      <div>Proficient</div>

      <h3>English</h3>
      <div>Proficient</div>

      <h3>Vietnamese</h3>
      <div>Native Speaker</div>

      <!-- <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Violence</h3>
        <div>I find it really soothing to just shoot at bad guys</div>

        <h3>I 🧡 Sports</h3>
        <div>I used to be thin but then I ingested 10 kilos of steroids and proteins a day while doing 1000 push-ups.</div>

        <h3>I 💛 Politics</h3>
        <div>I hope I can have a career here someday but I might have temper issues.</div>

        <h3>I 💚 Flowers</h3>
        <div>Especially the big ones, with the trunk and leaves.</div>

      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>