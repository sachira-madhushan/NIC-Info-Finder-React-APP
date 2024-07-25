import "./DetailsPanel.css"
/* eslint-disable react/prop-types */
export default function DetailsPanel({title,value}){
    return(
        <>
            <div className="background">
                <p>{title}</p>
                <h3>{value}</h3>
            </div>
        </>
    )
}