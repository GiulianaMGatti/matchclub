const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const clubs = [
    { id: 1, name: "Posta Padel", location: "Carlos Tejedor" },
    { id: 2, name: "Club Argentino", location: "Carlos Tejedor" },
    { id: 3, name: "Club Los Vazcos", location: "Carlos Tejedor" },
    { id: 4, name: "Club Gorra de Cuero", location: "Carlos Tejedor" },
    { id: 5, name: "Club Huracan", location: "Carlos Tejedor" },
  ];

  res.json(clubs);
});

module.exports = router;