const express = require('express');

const UserController = require('./controllers/UserController');

const MoneyController = require('./controllers/MoneyController');

const PaymentController = require('./controllers/PaymentController');

const routes = express.Router();

routes.post('/add', UserController.create);

routes.post('/login', UserController.login);

routes.post('/balance', UserController.balance);

routes.post('/addMoney', MoneyController.createMoney);

routes.get('/searchMoney', MoneyController.findMoney);

routes.post('/searchMoneyByDate', MoneyController.searchMoneyByDate);

routes.post('/searchMoneyByYear', MoneyController.searchMoneyByYear);

routes.post('/alterMoney', MoneyController.alterMoney);

routes.post('/addPayment', PaymentController.createPayment);

routes.get('/searchPayment', PaymentController.searchPayment);

routes.post('/searchPaymentByDate', PaymentController.searchPaymentByDate);

routes.put('/alterPayment', PaymentController.alterPayment);

routes.post('/searchPaymentByYear', PaymentController.searchPaymentByYear);

routes.delete('/deletDebt', PaymentController.deletDebt);

routes.delete('/deletInvoice', MoneyController.deletInvoice);

routes.post('/updatePayment', PaymentController.updatePayment);

routes.post('/updateMoney', MoneyController.updateMoney);

module.exports = routes;
