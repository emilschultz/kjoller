const songService = require("../services/songService");

const getAllSongs = (req, res) => {
  const { title, text, album } = req.query;

  try {
    const allSongs = songService.getAllSongs({ title, text, album });

    res.send({ status: "OK", data: allSongs });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
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
