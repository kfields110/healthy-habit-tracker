import './Avatar.css'
//Requirement 6.1
export default function Avatar({src}){
    return (
        <div className="avatar">
            <img src={src} alt=""/>
        </div>
    )
}