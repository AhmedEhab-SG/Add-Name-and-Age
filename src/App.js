import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import AddUserList from "./components/Users/AddUserList";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: userName, age: userAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <AddUserList users={userList} />
    </div>
  );
}

export default App;
