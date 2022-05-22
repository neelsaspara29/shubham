import { connect, set } from "mongoose";

connect('mongodb://localhost:27017/LeaseBooks', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("conection sucsesfull.")
}).catch((err) => {
    console.log(err);
});
// set('useNewUrlParser', true);
// set('useFindAndModify', false);
// set('useCreateIndex', true);




