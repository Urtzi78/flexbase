function liburutegia() {

    let irudia = document.querySelector(".book-cover");
    let izenburuaInput = document.getElementById("izenburu");
    let egileaInput = document.getElementById("egilea");
    let isbnInput = document.getElementById("isbn");
    let dataInput = document.getElementById("data");

    let db = [
        {
            "isbn": "1617293563",
            "egilea": "Raoul-Gabriel Urma",
            "data": "Nov 15, 2018",
            "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
            "filename": "8508261-L.jpg"
        },

        {
            "isbn": "9781617291302",
            "egilea": "Benjamin Muschko",
            "data": "Mar 09, 2014",
            "izenburua": "Gradle in Action",
            "filename": "8514400-L.jpg"
        },

        {
            "isbn": "1883601126",
            "egilea": "Matt Welsh",
            "data": "1995",
            "izenburua": "The Linux bible",
            "filename": "6764181-L.jpg"
        },

        {
            "isbn": "9781617293290",
            "egilea": "Dmitry Jemerov",
            "data": "Feb 19, 2017",
            "izenburua": "Kotlin in Action",
            "filename": "8507716-L.jpg"
        }
    ]

    let ind = 0;

    function liburuaEguneratu() {
        let oraingoLiburua = db[ind];
        irudia.src = "https://covers.openlibrary.org/b/id/" + oraingoLiburua.filename;
        izenburuaInput.value = oraingoLiburua.izenburua;
        egileaInput.value = oraingoLiburua.egilea;
        isbnInput.value = oraingoLiburua.isbn;
        dataInput.value = oraingoLiburua.data;
    }

    liburuaEguneratu();

    document.getElementById("hurrengo").addEventListener("click", () => {
        if (ind != db.length - 1)
            ind++;
        liburuaEguneratu();
    });

    document.getElementById("aurreko").addEventListener("click", () => {
        if (ind != 0)
            ind--;
        liburuaEguneratu();
    });

}

window.onload = liburutegia;