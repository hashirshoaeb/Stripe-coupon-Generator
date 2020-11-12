const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const stripe = require("stripe")(
  `${process.env.STRIP_API}`
);

exports.getAllCoupons = (req, res) => {
  stripe.coupons
    .list()
    .then((value) => {
      res.status(200).json(value);
    })
    .catch((reason) => {
      res.status(404).json(reason);
    });
};

exports.getCoupon = (req, res) => {
  console.log(req.body);
  stripe.coupons
    .retrieve(req.body)
    .then((value) => {
      res.status(200).json(value);
      console.log("Good", value);
    })
    .catch((reason) => {
      res.status(404).json(reason);
      console.log("Bad", reason);
    });
};

exports.createCoupon = (req, res) => {
  const {
    name,
    duration,
    percent_off,
    currency,
    amount_off,
    duration_in_months,
  } = req.body;
  stripe.coupons
    .create({
      name,
      duration,
      percent_off,
      currency,
      amount_off,
      duration_in_months,
    })
    .then((value) => {
      res.status(200).json(value);
    })
    .catch((reason) => {
      res.status(404).json(reason);
      console.log("Bad", reason);
    });
};

exports.updateCoupon = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "<TEMPORARY>",
  });
};

exports.deleteCoupon = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  stripe.coupons
    .del(id)
    .then((value) => {
      res.status(200).json(value);
    })
    .catch((reason) => {
      res.status(404).json(reason);
      console.log("Bad", reason);
    });
};
