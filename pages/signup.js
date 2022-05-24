import React,{useState} from 'react'
const axios = require('axios');
import { useRouter } from 'next/router'

function signup() {
   const router = useRouter();
   const [formobj, setformobj] = useState({ enroll: "", mobile: "", name: "", password: "" })
   const changeformdata = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setformobj((data) => {
         return({...data,[name]:[value]})
      })
   }
   const run =async () => {
   let data=await  axios({
         method: 'post',
         url: "http://localhost:3000/api/signup",
         contentType:"application/json",
         headers: {}, 
         data: formobj
   })
      if (String(data.status)=="200") {
         router.push('/signin');
      } else {
         alert("invalid")
      }
   }
  return (
    <div className="container">
   <dive >
       <h5>Welcome to our - BookWorld</h5>
       <form >
        <div  className="line">
           <p><label for="name">Full Name</label></p>
           <input onChange={changeformdata} type="text"  value={formobj.name} id="name" name="name" required />
        </div>
        <div  className="line">
           <p><label for="enroll">Enrollment Number</label></p>
           <input onChange={changeformdata} type="number" value={formobj.enroll} id="enroll" name="enroll" required />
        </div>
        <div  className="line">
           <p><label for="mobile">Mobile Number</label></p>
           <input onChange={changeformdata} type="number" value={formobj.mobile} id="mobile" name="mobile" required />
        </div>
        <div className="line">
           <p><label for="password">Password</label></p>
           <input onChange={changeformdata} type="password" value={formobj.password} id="password" name="password" required />
        </div>
        <button type="button" id="btn" onClick={()=>{run()}}>Connect ME</button>
       </form>
      
       
   </dive>
   <div className="section2"> 
       <img src="https://www.hmablogs.com/wp-content/uploads/2021/07/musicImg.png" alt="Music Image" />
   </div>
</div>
  )
}

export default signup