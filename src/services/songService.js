const Song = require("../databse/Song.js");

const getAllSongs = () => {
  const allSongs = Song.getAllSongs();
  return allSongs;
};

const getOneSong = (songId) => {
  const song = Song.getOneSong(songId);
  return song;
};

module.exports = {
  getAllSongs,
  getOneSong,
};
