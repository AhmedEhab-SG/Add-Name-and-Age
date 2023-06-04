import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import AddUserList from "./components/Users/AddUserList";
import Wrapper from "./components/Helper/wrapper";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: userName, age: userAge }];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <AddUserList users={userList} />
    </Wrapper>
  );
}

export default App;
