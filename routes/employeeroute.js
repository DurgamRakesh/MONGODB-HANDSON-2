const express = require('express');
const employeeController = require('../controller/employeecontroller');
const router = express.Router();

router.post('/employee', employeeController.employeeEnroll);
router.get('/employee', employeeController.gettingEmpdata);
router.get('/employee/30k', employeeController.empmore30k);
router.get('/employee/2yrs', employeeController.empmore2yrs);
router.get('/employee/1yrs', employeeController.empgandexp1yrs);
router.put('/employee', employeeController.updateemp);
router.delete('/employee', employeeController.deleteemp);

module.exports = router;