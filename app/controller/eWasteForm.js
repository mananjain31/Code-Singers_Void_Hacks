const EWaste = require("../models/eWaste");

const eWasteInfo = async (req, res, next) => {
  try {
    if (req.body.title) {
      const newPost = new EWaste();
      newPost.title = req.body.title;
      newPost.description = req.body.description;
      // console.log(req.body);
      newPost.image = req.file.filename;
      //console.log(req.userId);
      newPost.user = req.userId;
      await newPost.save();
      res.status(200).json({
        code: 200,
        status: "success",
        message: `added new post`,
      });
    } else throw new Error("incomplete form!!");
  } catch (error) {
    res.status(400).send({
      code: 400,
      status: "fail",
      message: error.message,
    });
  }

  next();
};

module.exports = eWasteInfo;
