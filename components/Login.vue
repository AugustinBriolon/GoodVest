<template>
  <div class="w-96 rounded-md bg-white">
    <div>
      <img src="img/loginImg.png" class="rounded-t-lg" />
    </div>

    <div class="p-8">
      <h1 class="text-4xl text-center pb-2 title">Sign in</h1>

      <div class="flex flex-col pt-2">
        <label class="font-bold pb-1">Username or email</label>
        <input
          type="text"
          placeholder="Your username or email"
          class="rounded-md border-2 border-gray-300 p-3"
        />
      </div>

      <div class="flex flex-col pt-5">
        <label class="font-bold pb-1">Password</label>
        <input
          type="password"
          placeholder="Your password"
          class="rounded-md border-2 border-gray-300 p-3"
        />
        <p class="text-purple-700 font-bold">Forgot password?</p>
      </div>
    </div>

    <hr />

    <div class="flex flex-row justify-between items-center px-7 py-4">
      <p>Don't have an account? <a class="text-purple-700">Sign up</a></p>
      <button class="bg-purple-700 text-white w-24 rounded-md p-2">Sign In</button>
    </div>
  </div>
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: Playfair Display;
  src: url(assets/font/PlayfairDisplay-MediumItalic.ttf) format("truetype");
}

.title {
  font-family: Playfair Display;
  font-style: italic;
}
</style>
