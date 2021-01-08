import { ProxyState } from "../AppState.js";
import songService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawActive(){
  let template = ''
  if(ProxyState.activeSong){
    template = ProxyState.activeSong.activeTemplate
  }
  document.getElementById('activeSong').innerHTML = template
}

function _drawResults() {
  let template = ""
  let results = ProxyState.songs
  results.forEach(s => template += s.storeTemplate)
  document.getElementById("songs").innerHTML = template
}

/**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let template = ""
  let results = ProxyState.playlist
  results.forEach(s => template += s.playlistTemplate)
  document.getElementById("playlist").innerHTML = template
}

//Public
export default class SongsController {
  constructor() {
    ProxyState.on("songs", _drawResults)
    ProxyState.on("playlist", _drawPlaylist)
    ProxyState.on("activeSong", _drawActive)
    this.getMySongs()
    
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      songService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }
  setActiveFromSongs(id){
    try{
      songService.setActiveFromSongs(id)
    }
    catch(error){
      console.error(error);
    }
    
  }
  setActiveFromPlaylist(id){
    debugger
    try{
      songService.setActiveFromPlaylist(id)
    }
    catch(error){
      console.error(error);
    }
  }
getMySongs(){
  try{
    songService.getMySongs()
  }
  catch(error){
    console.error(error);
  }
}
  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   */
  addSong() {
    try{
      songService.addSong()
    }
    catch(error){
      console.error(error);
    }
  }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {
    try{
      songService.removeSong(id)
    }
    catch(error){
      console.error(error);
    }
  }
}
