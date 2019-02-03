var appRouter = function(app) {

app.get("/api/test", function(req, res) {
    res.send("Hello World");
});


app.get("/api/users", function(req, res) {
    res.send("[Kranthi,Chandu,Abhilash,Yash,Roop]");
});

}


module.exports = appRouter;
