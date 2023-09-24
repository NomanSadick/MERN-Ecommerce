const express = require('express');
const BrandController = require('../controllers/BrandController'); // Import BrandController
const CategoryController = require('../controllers/CategoryController'); // Import CategoryController
const ProductController = require('../controllers/ProductController'); // Import ProductController
const UserController = require('../controllers/UserController'); // Import ProductController
const ProfileController = require('../controllers/ProfileController'); // Import ProductController
const InvoiceController = require('../controllers/InvoiceController'); // Import ProductController
const AuthVerification = require('../middlewares/AuthVerification'); // Import ProductController


const router = express.Router();

// Brand Category
router.get('/BrandList', BrandController.BrandList);
router.get('/CategoryList', CategoryController.CategoryList);

// Rest of your routes using ProductController
router.get('/SlideList', ProductController.SlideList);
router.get('/ListByCategory', ProductController.ListByCategory);
router.get('/ListBySimilar', ProductController.ListBySimilar);
router.get('/ListByBrand', ProductController.ListByBrand);
router.get('/ListByKeyword', ProductController.ListByKeyword);
router.get('/ListReview', ProductController.ListReview);
router.get('/ProductDetails', ProductController.ProductDetails);
router.get('/ListByRemark', ProductController.ListByRemark);
router.get('/WishList', ProductController.WishList);
router.get('/CreateWishList', ProductController.CreateWishList);
router.get('/RemoveWishList', ProductController.RemoveWishList);
router.get('/CartList', ProductController.CartList);
router.get('/CreateCartList', ProductController.CreateCartList);
router.get('/RemoveCartList', ProductController.RemoveCartList);

// User
router.get('/UserLogin/:email', UserController.UserLogin)
router.get('/VerifyLogin/:email/:otp', UserController.VerifyLogin);
router.get('/UserLogout', UserController.UserLogout);


// Profile
router.post('/CreateProfile', AuthVerification, ProfileController.CreateProfile);
router.post('/UpdateProfile', AuthVerification, ProfileController.UpdateProfile)
router.get('/ReadProfile', AuthVerification, ProfileController.ReadProfile)

// Invoice
router.get('/InvoiceCreate', AuthVerification, InvoiceController.InvoiceCreate)
router.get('/InvoiceList', AuthVerification, InvoiceController.InvoiceList)
router.get('/InvoiceProductList', AuthVerification, InvoiceController.InvoiceProductList)


router.get('/PaymentSuccess', InvoiceController.PaymentSuccess)
router.get('/PaymentCancel', InvoiceController.PaymentCancel)
router.get('/PaymentFail', InvoiceController.PaymentFail)
router.get('/PaymentIPN', InvoiceController.PaymentIPN)

module.exports = router;
