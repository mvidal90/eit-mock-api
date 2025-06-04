
const BASE_URL = "https://6838e0b36561b8d882ae6fcd.mockapi.io/api/"

const createMusic = async event => {
    event.preventDefault()

    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const date = document.getElementById("date").value;
    const autor = document.getElementById("autor").value;
    const views = document.getElementById("views").value;
    const image = document.getElementById("image").value;
    const awarded = document.getElementById("awarded").checked;

    const resp = await axios.post(BASE_URL + "/music", {
        title,
        genre,
        date,
        autor,
        views,
        image,
        awarded
    })

    console.log(resp)
    alert("Cancion cargada correctamente")
}