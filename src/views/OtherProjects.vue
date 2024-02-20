<template>
  <div>
    <h1>Apps and tools</h1>

    <div style="margin-bottom: 30px;">
      The following are some apps or tools I've made or heavily contributed to. 
    </div>
    <!-- <ProjectsList v-bind:projects="projects" /> -->
      <ProjectsList :projects="projects" @projectSelected="openOverlay" />
    <!-- Include the overlay component -->
    <ProjectDetailsOverlay
      :visible="overlayVisible"
      :color="overlayColor"
      :title="overlayTitle"
      :htmlContent="overlayHtmlContent"
      @close="closeOverlay"
    />
  </div>
</template>

<script lang="ts">  
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
    ProjectDetailsOverlay,
  },
   data() {
    return {
      projects: otherProjectsData,
      overlayVisible: false,
      overlayColor: "",
      overlayTitle: "",
      overlayHtmlContent: "",
    };
  },
  // data: function () {
  //   return {
  //     projects: otherProjectsData,
  //   };
  // },
    methods: {
    openOverlay(project: any) {
      // Emit event to pass project data to the overlay
      this.overlayColor = project.accentColor;
      this.overlayTitle = project.name;
      this.overlayHtmlContent = project.htmlDescription;
      this.overlayVisible = true;
    },
    closeOverlay() {
      this.overlayVisible = false;
    },
    openOverlayForId(id: string) {
      const project = this.projects.find((p: any) => p.id === id);
      if (project) {
        this.openOverlay(project);
      }
    },
  },
  created() {
    const projectId = this.$route.params.id;
    if (projectId) {
      this.openOverlayForId(projectId);
    }
  },
});
</script>
