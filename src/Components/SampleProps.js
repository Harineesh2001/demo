const SampleProps=(props)=>{
    console.log(props)
 

    return(
        <div>
        <h4>hello React{props.name} {props.role}</h4>
        {props.children}
        </div>
    )
}
export default SampleProps;