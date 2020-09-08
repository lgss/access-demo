<template>
  <root>
    <header>
      <h1>Page 2</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <input name="search" type="text" />
    </header>
    <main>
      <article>
        <h2>How not to do a review of a service</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <img href="assets/img1.jpg" />
        <a href="#">Author Name</a>
      </article>
      <article>
        <h2>Here's another article</h2>
        <p>This is me talking about nothing.</p>
        <p>
          If you want to learn about nothing,
          <a href="#">click here</a>
        </p>
        <a href="#">Find out more about nothing.</a>
      </article>
      <form>
        <strong>Please enter your contact details</strong>
        <label for="name">* Full Name</label>
        <input name="name" type="text" id="name" />
        <label for="email">* Email address</label>
        <input name="email" type="text" id="email" />
        <label for="number">Contact Number</label>
        <input name="number" type="text" id="number" />
        <input type="submit" />
      </form>
    </main>
    <footer></footer>
  </root>
</template>

<script>
export default {
  name: "App",
  components: {
    // Imported .Vue components
  },
  data: () => ({
    // Page data
  }),
  created() {
    // Run on creation
  },
  computed: {
    // Computed properties
  },
};
</script>

<style scoped>
</style>