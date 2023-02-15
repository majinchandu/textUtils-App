import React from 'react'
function Alert(props) {
    return (
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {/*upar wali statemengt ka matlab ye hai ki pehle props.alert ko evaluate karo agar wo NULL nikle to operation udhar hi rokdo agar nhi to && ke baad wali statement ko evaluate karo */}
            <strong>{props.alert.type}</strong> : {props.alert.msg}
        </div >
    )
}
export default Alert