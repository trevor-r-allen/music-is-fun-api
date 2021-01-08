export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId || data.id;

    
  }

  get activeTemplate(){
    return /*html*/`
    <img src="${this.albumArt}" class="img-fluid \${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
    <h5>${this.title}</h5>
    <h6>${this.artist} - ${this.album}</h6>
    <p>${this.price}</p>
    <p>${this.preview}</p>
    <button type="button" class="btn btn-success" onclick="app.songsController.addSong()">Add to Playlist</button>

    `
  }
  
  get storeTemplate() {
    return /*html*/`
    <div class="card" onclick="app.songsController.setActiveFromSongs(${this.id})">
    <img class="card-img-top" src="${this.albumArt}" alt="">
    <div class="card-body">
        <h4 class="card-title">${this.album}</h4>
        <p class="card-text">${this.artist}</p>
    </div>
</div>
        `;
  }


  get playlistTemplate() {
    return /*html*/`
    <div class="card" onclick="app.songsController.setActiveFromPlaylist(${this.id})">
    <img class="card-img-top" src="${this.albumArt}" alt="">
    <div class="card-body">
        <h4 class="card-title">${this.album}</h4>
        <p class="card-text">${this.artist}</p>
    </div>
</div>
        `;
  }
}
