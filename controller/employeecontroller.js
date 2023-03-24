const mongoclient = require('../database/connection');

const employeeEnroll = async (req, res) => {
    const employeedata = req.body;
    try {
        const result = await mongoclient.insertManyTODB(employeedata);
        console.log('employee data inserting:',result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('employee data not inserting');
        return res.status(500).send({message:"employee data not inserting"})
    }
}


const gettingEmpdata = async (req, res) => {
    const queryparam = req.body;
    console.log(queryparam);
    try {
        const result = await mongoclient.findINDB(queryparam);
        console.log('getting employee data:',result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('employee data not getting');
        return res.status(500).send({message:"employee data not getting"})
    }
}

const empmore30k = async (req, res) => {
    const queryparam = {"salary":{$gt:"30000"}};
    console.log(queryparam);
    try {
        const result = await mongoclient.findmore30k(queryparam);
        console.log('getting employee data:',result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('employee data not getting');
        return res.status(500).send({message:"employee data not getting"})
    }
}

const empmore2yrs = async (req, res) => {
    const queryparam = {"overallExp":{$gt:"2"}};
    console.log(queryparam);
    try {
        const result = await mongoclient.findexpmorethan2yrs(queryparam);
        console.log('getting employee data:',result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('employee data not getting');
        return res.status(500).send({message:"employee data not getting"})
    }
}

const empgandexp1yrs = async (req, res) => {
    const queryparam = {"yearGrad":{"$gt":"2015"}}&&{"overallExp":{"$gt":"1"}};
    console.log(queryparam);
    try {
        const result = await mongoclient.gradandexpmorethan1yrs(queryparam);
        console.log('getting employee data:',result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('employee data not getting');
        return res.status(500).send({message:"employee data not getting"})
    }
}

const updateemp = async (req, res) => {
    const updatedata = req.query;
    const filter = updatedata.filter;
    const value = {$set:updatedata.value};
    console.log(updatedata);
    console.log(filter);
    console.log(value);

    try {
        const result = await mongoclient.updatesalary(filter,value);
        console.log('updating employee data:',result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('employee data not updating');
        return res.status(500).send({message:"employee data not updating"})
    }
}
const deleteemp = async (req, res) => {
    const condition = req.query;

    try {
        const result = await mongoclient.deletedata(condition);
        console.log('deleting employee data:',result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('employee data not deleting');
        return res.status(500).send({message:"employee data not deleting"})
    }
}
module.exports = {
    employeeEnroll,
    gettingEmpdata,
    empmore30k,
    empmore2yrs,
    empgandexp1yrs,
    updateemp,
    deleteemp
}