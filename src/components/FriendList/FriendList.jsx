import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import Style from "./FriendList.module.scss";

function FriendList({ friends }) {
  if (friends.length === 0) return null;
  return (
    <>
      <ul className={Style.friendList}>
        {friends.map((item) => (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        ))}
      </ul>
    </>
  );
}
FriendList.defaultProps = {
  friends: [],
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
