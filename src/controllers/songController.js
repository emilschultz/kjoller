const songService = require("../services/songService");

const getAllSongs = (req, res) => {
  const allSongs = songService.getAllSongs();
  res.send({ status: "OK", data: allSongs });
};

const getOneSong = (req, res) => {
  const {
    params: { songId },
  } = req;
  if (!songId) {
    return;
  }
  const song = songService.getOneSong(songId);
  res.send({ status: "OK", data: song });
};

module.exports = {
  getAllSongs,
  getOneSong,
};
