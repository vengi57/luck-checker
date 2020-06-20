import React, { useState }  from "react";
 const Text = (props)=>{

    const [sendText,setProps] = useState("Vengi")


    return(
    <button onClick={()=>props.showAlert(sendText)}>{props.text}</button>
    )
}
export default Text;