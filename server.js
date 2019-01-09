var bs = require("browser-sync").create()

// 开启静态资源监听
bs.watch("./src/*.html").on("change", bs.reload)
bs.watch("./src/css/*.css", function (event, file) {
  if (event === "change") {
      bs.reload("./src/css/*.css")
  }
})

// 启动本地服务
bs.init({
    server: {
      baseDir: "./src",
      index: "./article.html"
    }
});
