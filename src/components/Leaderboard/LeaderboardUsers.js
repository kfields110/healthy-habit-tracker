import { useCollection } from '../../hooks/useCollection'
import Avatar from '../Profile/Avatar'


import './LeaderboardUsers.css'

//Requirement 4.2.0

export default function LeaderboardUsers(){
    const {error, documents} = useCollection('users')

    return(
        <div className="user-list">
            {error && <div className="error">{error}</div>}
            {documents && documents.map(user => (
                <div key={user.id} className="user-list-item">
                    <span>{user.displayName}: {user.totalPoints}</span>
                   <Avatar src={user.photoURL}/>
                 </div>   
            ))}
        </div>
    )
}