import React, {Fragment, useState} from 'react';
import UserCard from "./UserCard/UserCard";
import Container from "../Container/Container";
import {useInfiniteQuery} from "react-query";
import {getUsers} from "../../APIs/usersAPI";
import styles from './Users.module.scss'
import {User} from "../../types/Users";
import Button from "../UIKit/Button/Button";

const Users = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    'users',
    ({ pageParam = 1 }) => getUsers(pageParam),
    {
      getNextPageParam: (lastPage) => {
        console.log('lastPage', lastPage);
        const url = new URL(lastPage.links.next_url);
        const nextPage = url.searchParams.get('page');
        return nextPage ? Number(nextPage) : undefined;
      }
    }
  );

  console.log('data', data)

  return (
    <section className={styles.wrapper}>
      <Container className={styles.users}>
        <h2 className={styles.title}>Working with GET request</h2>
        <div className={styles.userList}>
          {data?.pages.map((page, index) => (
            <Fragment key={index}>
              {page.users.map((user: User) => (
                <UserCard key={user.id} photo={user.photo} name={user.name} email={user.email} position={user.position} phone={user.phone}/>
              ))}
            </Fragment>
          ))}
        </div>
        {hasNextPage && (
          <Button variant= 'yellow' onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            Show more
          </Button>
        )}
      </Container>
    </section>
  );
};

export default Users;