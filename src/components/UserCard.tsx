import { Link } from 'react-router-dom'
import '~/styles/account.css'

export default function UserCard({ iconSrc, userType }: { iconSrc: string, userType: "student" | "teacher" }) {
    return (
        <Link to={userType === "student" ? '/test' : `/login`} className='user-card'>
            <div className={`centered-grid card-image`}>
                <div className='centered-grid ring outline'>
                    <img src={iconSrc} alt={`${userType} icon`} width={50} height={50} />
                </div>
            </div>
            <div className='card-text bg-sec'>{userType}</div>
        </Link>
    )
}
