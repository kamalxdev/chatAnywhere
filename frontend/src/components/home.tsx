import { memo, useMemo, useState } from "react"
import { useLocation } from "react-router-dom";



function Home() {
    const location = useLocation();
    const [name, setName] = useState<string>("");
    useMemo(()=>{
            localStorage.setItem("username", name);
    },[name])
    return <div className="w-screen h-screen flex justify-center items-center">
        <div >
        <input type="text" required placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
        <button type="submit" onClick={()=>{ name?location.hash="/chat":alert("Please enter your name")}} className="bg-black px-5 py-3 rounded-sm text-white">Start a Chat</button>
        </div>
    </div>
}

export default memo(Home)