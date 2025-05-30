
const BASE_URL = "https://6838e0b36561b8d882ae6fcd.mockapi.io/api/"

document.addEventListener("DOMContentLoaded", () => getMusic() )

const getMusic = async (query) => {
    try {
        const musicData = await axios.get(BASE_URL + `music${query ? `?${query}` : ""}`)
    
        const musicContainer = document.getElementById("music_container");
        
        musicContainer.innerHTML = "";

        if (musicContainer) {
            musicData.data.forEach(({id, image, title, date, genre, autor, views, awarded }) => {
                const year = (new Date(date)).getFullYear()
                const card = `
                    <div id=${id} class="col-xs-12 col-md-6 card mb-3">
                        <img src="${image}" alt="Imagen de ${title}" width="150px">
                        <div class="pl-3">
                            <h3>${title} (${year}) ${awarded ? '<i class="fa-solid fa-star ml-2"></i>' : ""}</h3>
                            <span>${genre} - ${autor}</span>
                            <p>Reproducciones: ${views}</p>
                            <button type="button" class="btn btn__secondary-outline mb-2" onclick="handleDelete(event)"><i class="fa-solid fa-trash mr-2"></i>Eliminar serie</button>
                        </div>
                    </div>    
                `
                musicContainer.innerHTML = musicContainer.innerHTML.concat(card)
            });
        }
    } catch (error) {
        console.log(error)
    }
}

const searchMusic = event => {
    event.preventDefault()
    const value = document.getElementById("search")?.value;

    if (value) {
        getMusic(`title=${value}`)
    } else {
        getMusic()
    }
}