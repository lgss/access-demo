<template>
  <v-app id="why-are-we-doing-this">
    <v-app-bar app color="#ff77ff">
      <v-toolbar-title><img alt="the smily face logo for a happy people production" title="the smily face logo for a happy people production" width="65px" src="https://www.netclipart.com/pp/m/268-2689287_transparent-smiley-face-drawing.png"/></v-toolbar-title>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Home</v-tab>
          <v-tab>About</v-tab>
          <v-tab>Blog</v-tab>
          <v-tab>Contact</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main class="pa-12 mt-12">
      <v-container fluid>
        <v-row
          align="center"
          justify="center">
          <v-col class="text-center">
                <h1>How to review a service</h1>
                <ol class="text--xl">
                    <li>Take a good hard look at yourself</li>
                    <li>Take a good hard look at your page</li>
                    <li>Ask yourself, why does Comic Sans exist in the world?</li>
                    <li>Replace Comic Sans</li>
                    <li>Know you are better human being</li>
                    <li>Run some tests</li>
                    <li>Make some changes</li>
                    <li>Have a cup of tea</li>
                    <li>Doneski</li>
                </ol>

                <img width="50%" src="https://www.greengeeks.com/blog/wp-content/uploads/2019/08/using-lighthouse.jpg"
                    title="Josh Watson enthusiastically points to his laptop, which is displaying Google Lighthouse; a tool to test accessibility"
                    alt="Josh Watson enthusiastically points to his laptop, which is displaying Google Lighthouse; a tool to test accessibility"/>
          </v-col>
        </v-row>
        <v-row>
            <v-col>
                <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Further information about good services</a>
            </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }} happy people production</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
  }
</script>

<style scoped>
    ol {
        text-align: left;
    }

    .v-tab:not(.v-tab--active) {
        color: #000000cc !important
    }
</style>