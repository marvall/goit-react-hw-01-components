import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import Style from "./FriendList.module.scss";

function FriendList({ state }) {
  function collection(state) {
    return state.map((item) => {
      if (item === "NOT DATA") {
        return <FriendListItem name={item} />;
      }
      return (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      );
    });
  }
  return (
    <>
      <ul className={Style.friendList}>{collection(state)}</ul>
    </>
  );
}
FriendList.defaultProps = {
  stats: ["NOT DATA"],
};
FriendList.propTypes = {
  stats: PropTypes.array.isRequired,
};
export default FriendList;
