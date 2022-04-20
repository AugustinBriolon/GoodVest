module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      width: {
        'xl': '35em',
      },
      backgroundImage: {
        'loginImg': "url('assets/img/loginImg.png')",
      }
    }
  },
  plugins: [],
}
