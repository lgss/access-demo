<template>
    <root>
        <a href='#content'>skip to content</a>
        <header>
        <img src="./assets/img2.png" alt="cambridgeshire county council logo" />
        <h1>news article</h1>
        <nav>
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">about</a></li>
                <li><a href="">blog</a></li>
                <li><a href="">contact</a></li>
            </ul>
            <input type="text" name="search" id="search" > &#128269;
        </nav>
    </header>
    <h2 id='content'>How not to do a review of a service</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    <a href="/">Author name</a>
    <img src="./assets/img1.jpg" alt="Image of a neon sign saying no stupid people beyond this point">
    <h2>here's another article</h2>
    <p>This is me talking about nothing.</p>
    <p>This is me talking about nothing.<a href="/">click here.</a></p>
    <a href="/">Find out more about nothing.</a>
    <form action="/action_page.php">
        <label for="fname">Full name *</label><br>
        <input type="text" id="fname" name="fname" required><br><br>
        <label for="emailaddress">Email address *</label><br>
        <input type="text" id="emailaddress" name="emailaddress" required><br><br>
        <label for="cnumber">Contact number</label><br>
        <input type="text" id="cnumber" name="cnumber" value=""><br><br>
        <input type="submit" value="Submit">
    </form> 
    </root>
</template>

<script>
export default {
    name: "App",
    components: {
        // Imported .Vue components
    },
    data: () =>({
        // Page data
    }),
    created() {
        // Run on creation
    },
    computed: {
        // Computed properties
    }
}
</script>

<style scoped>
header {
    background-color: rgb(43, 120, 228);
}
li {
    display: inline-block;
    border-right: 1px solid black;
    padding: 5px;
}
h1{
    font-family: 'comic sans ms';
}
* {
    font-family: 'comic sans ms';
    line-height: 1.5em;
}
input {
    border: 1px solid black
}
#search {
    width:100px;
    display: inline-block;
    background-color: white;
}
</style>