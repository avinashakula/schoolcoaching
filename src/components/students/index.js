import React, { useCallback } from 'react';
import Heading from '../general/Heading';
import { useSelector, useDispatch } from 'react-redux';
import StudentsList from './studentsList';
import { removeUser, updating } from '../../store/slices/Registration';

export default function Students() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((store) => store.register);

  const [count, setCount] = React.useState(1);

  const removeHandler = useCallback((id) => {
    console.log("Removable Id is ", id);
    dispatch(updating())
    dispatch(removeUser(id))
  }, []);

  const increments = () => {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <Heading title={"Students"} />
      <p>Count is {count}</p>
      <button onClick={increments}>Increment</button>
      {users && <StudentsList users={users} onRemove={removeHandler} loading={loading} />}
    </div>
  );
}