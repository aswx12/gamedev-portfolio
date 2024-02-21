import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "The Creator", "img/projects/Creator/CreatorFullApp.png", `
    <div class="paragraph">
      <strong>The Creator</strong> is a UI for the StS-modding API, allowing users to create custom cards for the game without programming experience. The program was written in Java.
            </div>
              <div class="paragraph center">
                <img class="main-screenshot" src="img/projects/Creator/CreatorFullApp.png/" alt="Full app screenshot" />
                <br>
                <a href="https://github.com/aswx12/MTS" target="_blank">Source Code<img src="img/projects/GitHub-Mark.png" alt="GitHub-link" /></a>
              </div>
            <div style="margin-top:20px; margin-bottom:20px;">
              <a class="download-link" href="d/Thesis.pdf" download><i class="fa fa-download fa-lg fa-fw"></i> Download Thesis PDF 🇬🇧</a>
              <div style="clear:both"></div>
      </div>
          <div class="paragraph">
            Main features :
            <ul>
              <li>Creating your own custom card including (more details in the Thesis above, section 5.1):
                <ol>
                  <li>Card's name</li>
                  <li>Card's type</li> 
                  <li>Over 55 actions to choose from, some actions also have extra options(it is possible to add every action to a card)</li>
                  <li>Choose to add or remove an action when you upgrade the card</li> 
                  <li>Card's base cost and upgraded cost</li> 
                  <li>Card's rarity</li> 
                  <li>Target of the card</li> 
                  <li>Card's description</li> 
                  <li>Card's state</li> 
                </ol>
              </li>
              <li>Data collection, collecting battle data of each turn. (more details in the Thesis above, section 5.2)</li>

            </ul>
          </div>

          <div class="paragraph center">
            <div class="screenshots">
              <div class="leftColl">
                <img class="pc-screenshot" src="img/projects/Creator/cardSC.png/" alt="portfolioCard" />
                <figcaption >Custom Card</figcaption><br>
                <img class="pc-screenshot" src="img/projects/Creator/dataCollection1.png/" alt="data collection 1" />
                <figcaption >Data Collection: Player's & enemies' info</figcaption>
              </div>
              <div class="rightColl">
                <img class="pc-screenshot" src="img/projects/Creator/dataCollection2.png/" alt="data collection 2" /> 
                <figcaption >Data Collection: Turn's result</figcaption><br>
                <img class="phone-screenshot" src="img/projects/Creator/dataCollection3.png/" alt="data collection 3" /> 
                <figcaption>Data Collection: Battle Result</figcaption>
              </div>
            </div>
          </div>
    `, "#c10606", false, true),
    new ProjectData("project-7", "Drew Blood", "img/projects/project-7-icon.png", `
    <div class="paragraph">
                <strong>Drew Blood</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@karolina-grabowska">Karolina Grabowska</a>.
            </div>

            <div class="paragraph">
              Main features :
              <ul>
              <li>Some stuff</li>
              <li>Some great stuff</li>
              <li>More awesome stuff</li>
              <li>And then some</li>
              </ul>
          </div>

            <div class="paragraph">
              <div class="notice">
                You can download and try the app for free or purchase it directly from <a href="http://www.somewbsite.com/" target="_blank">Some website</a>
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" /> 
            </div>`, "#1ca1e2"),
    new ProjectData("project-8", "The Art of Walking", "img/projects/project-8-icon.png", `
    <div class="paragraph">
                <strong>The Art of Walking</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
            </div>

            <div class="paragraph center">
              <a href="https://play.google.com/store/apps/details?id=someapp" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
          </div>

          <div class="paragraph">
          Main features :
          <ul>
          <li>Some stuff</li>
          <li>Some great stuff</li>
          <li>More awesome stuff</li>
          <li>And then some</li>
          </ul>
      </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
              </div>
            </div>

            <div class="paragraph center">
                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />
                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />
            </div>`),
    new ProjectData("project-9", "Nikolable", "img/projects/project-9-icon.png", `
     <div class="paragraph">
                <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.
            </div>

            <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
              </div>
            </div>`),
];