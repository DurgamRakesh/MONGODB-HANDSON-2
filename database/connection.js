const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://durgamrakesh11:rakesh123@cluster0.usg6nwc.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);


const insertManyTODB = async (data) => {
    await client.connect();
    const database = client.db('Human_Resource');
    const collection = database.collection('employee');
    const dbresponse = await collection.insertMany(data);
    await client.close();
    return dbresponse;
}

// Query the collection ""employee"" and list all the documents:
const findINDB = async (query) => {
    await client.connect();
    const database = client.db('Human_Resource');
    const collection = database.collection('employee');
    const dbresponse = await collection.find(query).toArray();
    await client.close();
    return dbresponse;
}

// Query the collection ""employee"" and list the employees who are having salary more than 30000:
const findmore30k = async (query) => {
    await client.connect();
    const database = client.db('Human_Resource');
    const collection = database.collection('employee');
    const dbresponse = await collection.find(query).toArray();
    await client.close();
    return dbresponse;
}


// Query the collection ""employee"" and list the employees who are having experience more than 2 years:
const findexpmorethan2yrs = async (query) => {
    await client.connect();
    const database = client.db('Human_Resource');
    const collection = database.collection('employee');
    const dbresponse = await collection.find(query).toArray();
    await client.close();
    return dbresponse;
}

// Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year:
const gradandexpmorethan1yrs = async (query) => {
    await client.connect();
    const database = client.db('Human_Resource');
    const collection = database.collection('employee');
    const dbresponse = await collection.find(query).toArray();
    await client.close();
    return dbresponse;
}

// Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000:
const updatesalary = async (filcon, value) => {
    await client.connect();
    const database = client.db('Human_Resource');
    const collection = database.collection('employee');
    const dbresponse = await collection.updateMany(filcon,value);
    await client.close();
    return dbresponse;
}

// Delete all the documents from ""employee"" where last company is Y":
const deletedata = async (filcon) => {
    await client.connect();
    const database = client.db('Human_Resource');
    const collection = database.collection('employee');
    const dbresponse = await collection.deleteMany(filcon);
    await client.close();
    return dbresponse;
}

module.exports  = {
    insertManyTODB,
    findINDB,
    findmore30k,
    findexpmorethan2yrs,
    gradandexpmorethan1yrs,
    updatesalary,
    deletedata
}
