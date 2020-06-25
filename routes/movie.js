var express = require("express");
var router = express.Router();

const Movie = require("../models/Movie");
router.get("/", (req, res) => {
  const promise = Movie.aggregate([
    {
      $lookup: {
        from: "directors",
        localField: "director_id",
        foreignField: "_id",
        as: "director",
      },
    },
    {
      $unwind: "$director",
    }
  ]);
  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/top10", (req, res, next) => {
  const promise = Movie.find({}).limit(10).sort({ imdb: -1 });
  promise
    .then((data) => {
      if (!data) {
        next({ message: "movie not found", statusCode: 404 });
      }

      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:movie_id", (req, res, next) => {
  const promise = Movie.findById(req.params.movie_id);
  promise
    .then((data) => {
      if (!data) {
        next({ message: "movie not found", statusCode: 404 });
      }

      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:movie_id", (req, res, next) => {
  const promise = Movie.findByIdAndUpdate(req.params.movie_id, req.body, {
    new: true,
  });
  promise
    .then((data) => {
      if (!data) next({ message: "movie not found", statusCode: 404 });
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.delete("/:movie_id", (req, res, next) => {
  const promise = Movie.findByIdAndDelete(req.params.movie_id);
  promise
    .then((data) => {
      if (!data) next({ message: "movie not found", statusCode: 404 });
      res.json("deleted film");
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res, next) => {
  const newMovie = new Movie(req.body);
  const promise = newMovie.save();
  promise.then((data) => {
    res.json(data);
  });
  promise.catch((err) => {
    res.json(err);
  });
});

//SORTING
router.get("/between/:up/:to", (req, res, next) => {
  const { up, to } = req.params;
  console.log(up);
  const promise = Movie.find({
    year: { $gte: parseInt(up), $lte: parseInt(to) },
  });
  promise
    .then((data) => {
      if (!data) next({ message: "movie not found", statusCode: 404 });
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
