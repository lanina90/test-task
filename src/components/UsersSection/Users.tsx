import React, {Fragment} from 'react';
import UserCard from "./UserCard/UserCard";
import Container from "../Container/Container";
import {useInfiniteQuery} from "react-query";
import {getUsers} from "../../APIs/usersAPI";
import {ApiResponse, User} from "../../types/Users";
import Button from "../UIKit/Button/Button";
import {ReactComponent as Loader} from "../../assets/images/loader/loader.svg";
import styles from './Users.module.scss'

const Users = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    'users',
    ({ pageParam = 1 }) => getUsers({page: pageParam}),
    {
      getNextPageParam: (lastPage: ApiResponse) => {
        if (lastPage.links && lastPage.links.next_url) {
          const url = new URL(lastPage.links.next_url);
          const nextPage = url.searchParams.get('page');
          return nextPage ? Number(nextPage) : undefined;
        } else {
          return undefined;
        }
      }
    }
  );

  const totalUsers = data?.pages[0]?.total_users;
  return (
    <section className={styles.wrapper}>
        <Container className={styles.users}>
          <h2 className={styles.title}>Working with GET request</h2>
          {isLoading ? <Loader/>
            :
          <div className={styles.userList}>
            {data?.pages.map((page, index) => (
              <Fragment key={index}>
                {page.users.map((user: User) => (
                  <UserCard key={user.id} photo={user.photo} name={user.name} email={user.email} position={user.position} phone={user.phone}/>
                ))}
              </Fragment>
            ))}
          </div>}
          {(totalUsers && totalUsers > 6) && hasNextPage && (
            <Button variant= 'yellow' onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
              Show more
            </Button>
          )}
        </Container>
    </section>
  );
};

export default Users;