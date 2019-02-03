var appRouter = function(app) {

app.get("/api/test", function(req, res) {
    res.send("Hello World");
});

}

module.exports = appRouter;
