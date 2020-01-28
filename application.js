artist = document.getElementById("artist").value;
song = document.getElementById("song").value;
output = document.getElementById("output")
document.getElementById("submit").addEventListener('click',findLyrics);

async function findLyrics(e) {
    e.preventDefault();

    document.getElementById("loader").style.display = "block";

    artist = document.getElementById("artist").value;
    song = document.getElementById("song").value;
    console.log(artist);
    console.log(song);

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(showPage), 2000)
      })

     await promise;

    showPage();

    fetch(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${song}&q_artist=${artist}&apikey=e90fea75c1f62a873a2ff413cf4ebeab`)
        .then(data => data.json())
        .then(lyrics => {
            console.log(lyrics);
            output.innerHTML = `${lyrics.message.body.lyrics.lyrics_body}`
        })
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("output").style.display = "block";
  }