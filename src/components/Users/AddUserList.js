import Card from "../UI/Card";
import classes from "./AddUserList.module.css";

const AddUserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user)=> (
          <li>
            {user.name} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default AddUserList;
