import react from "react";

function EyesOnMe(){
    return(
        <div>
            <button onFocus={()=>{console.log("Good!")}} onBlur={()=>{console.log("Hey! Eyes on me!")}} type="Button">Eyes on me</button>
        </div>
    )
}
export default EyesOnMe