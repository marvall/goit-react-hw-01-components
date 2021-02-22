import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statictics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import data from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import Style from "./App.module.scss";

function App() {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.item}>
          <Profile state={data} />
          <Statistics stats={statisticalData} title="Upload stats" />
          <Statistics stats={statisticalData} />
        </div>
        <div className={Style.item}>
          <FriendList state={friends} />
        </div>
        <div className={Style.item}>
          <TransactionHistory items={transactions} />
        </div>
      </div>
    </>
  );
}

export default App;
