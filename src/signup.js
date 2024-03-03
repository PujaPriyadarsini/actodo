import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Signup(props)
{
    const navigate= useNavigate()
    const users= props.users
    const setuser= props.setuser
    const[eusername,seteusername]= useState()
    const[epassword,setepassword]= useState()

    function handleUInput(evt){
        seteusername(evt.target.value)
    }
    function handlePInput(evt){
        setepassword(evt.target.value)
    }
    function addUser(){
        setuser([...users,{username:eusername, Password:epassword}])
        navigate("/")
    }

return(
<div className=" bg-black p-10">
<div className="bg-[#EFEFEF] p-10 border rounded-md">
<h1 className="text-3xl font-medium">Hey Hi</h1>
<p>I help you manage your activities after you login </p>
<div className="flex flex-col gap-2 my-2">
<input type="text" onClick={handleUInput}
className="w-52 ☐ border-black p-1 bg-transparent border rounded-md" placeholder="username"/>

<input type="text" onClick={handlePInput}
className="w-52 ☐ border-black p-1 bg-transparent border rounded-md" placeholder="password"/>

<input type="text"
className="w-52 ☐ border-black p-1 bg-transparent border rounded-md" placeholder="conform password"/>

<button onClick={addUser} className="bg-[#FCA201] w-24 rounded-md p-1">Sign Up</button>
<p>Already have an accout? <Link to="/" className="text-red-500 underline">login</Link></p>

</div>
</div>
</div>
)
}
export default Signup