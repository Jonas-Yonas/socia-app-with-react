import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({ profile }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src={ `${PF}gift.png` } alt="" />
                    <span className="birthdayText">
                        <b>Jonas Yonas</b> and <b>2 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src={ `${PF}ad.png` } alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">Complicated</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/1.jpeg`} alt="" />
                        <span className="rightbarFollowingName">Neil Adams</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/2.jpeg`} alt="" />
                        <span className="rightbarFollowingName">Neil Adams</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/3.jpeg`} alt="" />
                        <span className="rightbarFollowingName">Neil Adams</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/4.jpeg`} alt="" />
                        <span className="rightbarFollowingName">Neil Adams</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/5.jpeg`} alt="" />
                        <span className="rightbarFollowingName">Neil Adams</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src={`${PF}person/6.jpeg`} alt="" />
                        <span className="rightbarFollowingName">Neil Adams</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
