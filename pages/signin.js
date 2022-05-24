import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

function signin() {
   const router = useRouter();
   const [formobj, setformobj] = useState({ enroll: "", password: "" })
   const changeformobj = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setformobj((data) => {
         return ({ ...data, [name]: [value] });
      })
   }
   const run =async () => {
      let signin_res=await  axios({
            method: 'post',
            url: "http://localhost:3000/api/signin",
            contentType:"application/json",
            headers: {}, 
            data: formobj
      });
      if (String(signin_res.status) == "200") {
            router.push("/books?dep=" + "Computer Engineering");
         } else {
            alert("invalid")
         }
      }
  return (
     <div className="container">
   <dive >
       <h1>Sign in</h1>
       <form >
        <div  className="line">
           <p><label for="enroll">Enrollment Number</label></p>
           <input onChange={changeformobj} type="text" id="enroll" name="enroll" value={formobj.enroll} required />
        </div>
        <div>
           <p><label for="userNmae">Password</label></p>
           <input onChange={changeformobj} type="password" id="password" name="password" value={formobj.password}  required />
        </div>
        <button onClick={()=>run()} type="button" id="btn">Sign in Now</button>
        <p>Not a register user? <Link href={"/signup"} ><span className="signUPbtn"> Sign Up</span></Link></p>
       </form>
        
       
   </dive>
   <div className="section2"> 
       <img src="https://www.hmablogs.com/wp-content/uploads/2021/07/musicImg.png" alt="Music Image" />
   </div>
</div>

  )
}

export default signin