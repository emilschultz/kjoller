const Song = require("../database/Song.js");

const getAllSongs = (filterParams) => {
  try {
    const allSongs = Song.getAllSongs(filterParams);
    return allSongs;
  } catch (error) {
    throw error;
  }
};

const getOneSong = (songId) => {
  const song = Song.getOneSong(songId);
  return song;
};

module.exports = {
  getAllSongs,
  getOneSong,
};
