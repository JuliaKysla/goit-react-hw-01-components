import styles from './Friendslist.module.css'


const FriendslistItem = ({avatar, name, isOnline}) => {
    return (
    
    <li className={styles.item}>
    <span className={isOnline? styles.isOnline : styles.isOffline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>

    )
};

export const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
        {friends.map(friend => {
          return (
            <FriendslistItem
              key={friend.id}
              isOnline={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
            />
          );
        })}
      </ul>
    )
}

export default FriendList;