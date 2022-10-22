const DB = require("./db.json");

const getAllSongs = () => {
  return DB.songs;
};

const getOneSong = (songId) => {
  const song = DB.songs.find((song) => song.id === songId);
  if (!song) {
    return;
  }
  return song;
};

module.exports = { getAllSongs, getOneSong };
