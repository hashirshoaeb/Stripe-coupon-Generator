const express = require("express");
const couponRouter = express.Router();
const {
  getAllCoupons,
  getCoupon,
  createCoupon,
  updateCoupon,
  deleteCoupon,
} = require(`${__dirname}/controller.js`);

// GET 
// /v1/coupons
// POST 
// /v1/coupons
// GET 
// /v1/coupons/:id
// POST 
// /v1/coupons/:id
// DELETE 
// /v1/coupons/:id

couponRouter.route("/")
  .get(getAllCoupons)
  .post(createCoupon);
couponRouter
  .route("/:id")
  .get(getCoupon)
  .patch(updateCoupon)
  .delete(deleteCoupon);

module.exports = couponRouter;