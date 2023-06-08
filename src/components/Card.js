export const Card = (props) => {
    // console.log(props.country)
    return <div className="card">
        {props.country.name.common}
    </div>
}