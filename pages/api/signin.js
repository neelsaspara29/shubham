import { MongoClient } from "mongodb";
import { setCookies} from 'cookies-next'
// const bcrypt = require('bcrypt');


const fun = async (enroll, password) => {
    try {

        const uri = "mongodb://localhost:27017/LeaseBooks";
        const client = new MongoClient(uri);
        await client.connect();
        let data = await client.db('LeaseBooks').collection('user').findOne({
            enrollment: enroll,
            password: password
        })
        client.close();
        if (data != null) {
            // client.db('LeaseBooks').collection('loginsession').insertOne({
            //     "createdAt": new Date(),
            //     "uid": enroll,
            //     "logMessage": "Success!"
            //   })
            return data.enrollment;
        }
        else
            return false;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export default async function handler(req, res) {
    const { enroll, password } = req.body;
    let data = await fun(enroll[0], password[0])
    if (data) {
        setCookies("uid", enroll[0],{req,res, maxAge: 60 * 60 * 24})
        res.status(200).json({ data: data });
        
    }
    else {
        
        res.status(404).send({
            message: 'Invalid info'
        });
    }
}
