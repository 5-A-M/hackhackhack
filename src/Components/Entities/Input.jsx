const Input= (props)=> {
    return (
        <input onChange={(e)=> props.setValue(e.target.value)} value={props.value} placeholder={props.placeholder} className={props.className} tabIndex={props.tabIndex} type={props.type} autoComplete={"off"} />
    )
}

export default Input