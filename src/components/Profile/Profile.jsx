import css from "./Profile.module.css"

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={css.profileContainer}>
            <div className={css.profileTop}>
                <img className={css.profileImg} src={avatar} alt="User Avatar" />
                <p className={css.profileUsername}>{username}</p>
                <p className={css.profileTag}>@ {tag}</p>
                <p className={css.profileLocation}>{location}</p>
            </div>
            <ul className={css.profileStatsList}>
                <li className={css.profileStatsItem}>
                    <span className={css.profileStatsTop}>Followers </span>
                    <span className={css.profileStatsBot}>{stats.followers}</span>
                </li>
                <li className={css.profileStatsItem}>
                    <span className={css.profileStatsTop}>Views </span>
                    <span className={css.profileStatsBot}>{stats.views}</span>
                </li>
                <li className={css.profileStatsItem}>
                    <span className={css.profileStatsTop}>Likes </span>
                    <span className={css.profileStatsBot}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
