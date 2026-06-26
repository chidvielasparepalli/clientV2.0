require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/book", upload.array("images"), async (req, res) => {
  try {
    const { name, email, phone, style, date, message } = req.body;

    const attachments = (req.files || []).map((file) => ({
      filename: file.originalname,
      content: file.buffer,
    }));

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🖋️ New Tattoo Booking - ${name}`,
      html: `
        <h2>New Tattoo Booking</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Tattoo Style:</strong> ${style}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      attachments,
    });

    res.json({
      success: true,
      message: "Booking submitted successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});