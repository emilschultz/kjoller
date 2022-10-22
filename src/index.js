const express = require("express");
const v1SongRouter = require("./v1/routes/songRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/songs", v1SongRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
