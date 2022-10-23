const DB = require("./db.json");

const getAllSongs = (filterParams) => {
  try {
    let songs = DB.songs;
    // get by title
    if (filterParams.title) {
      return DB.songs.filter((song) =>
        song.title.toLowerCase().includes(filterParams.title)
      );
    }
    // get by author
    if (filterParams.text) {
      return DB.songs.filter((song) =>
        song.text.toLowerCase().includes(filterParams.text)
      );
    }
    // get by album/appears on
    if (filterParams.album) {
      return DB.songs.filter((song) =>
        song.appears_on.album_title.toLowerCase().includes(filterParams.album)
      );
    }
    return songs;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneSong = (songId) => {
  try {
    const song = DB.songs.find((song) => song.id === songId);
    if (!song) {
      throw {
        status: 400,
        message: `Can't find song with the id '${songId}'`,
      };
    }
    return song;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getAllSongs, getOneSong };
