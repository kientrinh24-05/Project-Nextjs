import { useAppDispatch, useAppSelector } from 'hooks';
import { decrement, increment, selectCount } from '@features/counter';
import styles from './HomePage.module.scss';
import { fetchUsers, usersSelector } from '@features/users';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const { data, loading, error } = useAppSelector(usersSelector);
  console.log(data, 'data');
  
  return (
    <div className={styles.content}>
      <h2>
        The current number is {` `}
        {count}
      </h2>
      <div className={styles['action-btn']}>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
      <br />
      <div>
        <h2>User List</h2>
        {loading && <p>Loading...</p>}
        {data &&
          data.users &&
          data.users.map((u) => <p key={u.email}>{u.email}</p>)}
        {error && <p>Oops, something went wrong</p>}
        <button onClick={() => dispatch(fetchUsers())} disabled={loading}>
          Load
        </button>
      </div>
    </div>
  );
};

export default HomePage;
