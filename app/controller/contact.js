const nodemailer = require("nodemailer");
const User = require("../models/user");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@address.com",
    pass: "yourpassword",
  },
});

const contact = async (req, res, next) => {
  try {
    if (req.body.sellerId && req.body.buyerId && req.body.title) {
      const seller = await User.findById(req.body.sellerId, "email -_id");
      const buyer = await User.findById(
        req.body.buyerId,
        "name contact address email -_id"
      );
      const mailOptions = {
        from: "sender@email.com", // sender address
        to: seller.email, // list of receivers
        subject: `Someone showed interest in ${req.body.title}`, // Subject line
        html: `<p>
                <strong> Contact Details </strong><br>
                Name: ${buyer.name} <br>
                Contact: ${buyer.contact} <br>
                Email: ${buyer.email} <br>
                Address: ${buyer.address.addressLine}, ${buyer.address.locality} <br>
                City: ${buyer.address.city}, ${buyer.address.state} <br>
            </p>`, // plain text body
      };
      await transporter.sendMail(mailOptions);
      res.status(200).send({
        code: 200,
        status: "success",
        message: "Mail sent successfully",
      });
    } else throw new Error("Incomplete Details");
  } catch (error) {
    res.status(400).send({
      code: 400,
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = contact;
