import { Profile } from './profile/Profile';
import user from './profile/user.json';
import Statistic from './statistic/Statistic';
import Data from './statistic/data.json';
import FriendList from './friendslist/FriendList';
import friends from './friendslist/friends.json'
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';



export const App = () => {
  return (
    <>
      <Profile{...user}/>
      <Statistic title= 'uploads Data' stats={Data}/>
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
