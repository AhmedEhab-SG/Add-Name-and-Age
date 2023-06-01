import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorMsg from "../UI/ErrorMsg";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState()

  const usernameHanddler = (event) => {
    setUsername(event.target.value);
  };
  const ageHanddler = (event) => {
    setAge(event.target.value);
  };

  const AddUserhanddler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "inavild input",
        msg: "please enter a valid name and age (not empty)"
      })
      return;
    } else if (+age < 1) {
      setError({
        title: "inavild input",
        msg: "please enter a valid age (> 0)"
      })
      return;
    }
    props.onAddUser(username, age);
    setAge("");
    setUsername("");
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorMsg title = {error.title} msg = {error.msg} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={AddUserhanddler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={usernameHanddler}
            type="text"
          />
          <label htmlFor="username">Age (Year)</label>
          <input id="age" value={age} onChange={ageHanddler} type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
