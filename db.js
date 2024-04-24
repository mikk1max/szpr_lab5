const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mikki_max:2004maKS3@mikki.h5fvwc9.mongodb.net/?retryWrites=true&w=majority&appName=mikki", { useNewUrlParser: true })
    .then((result) => {
        console.log("Połączono z bazą")
    }).catch((err) => {
        console.log("Nie można połączyć się z MongoDB. Błąd: " + err)
    })

module.exports = mongoose