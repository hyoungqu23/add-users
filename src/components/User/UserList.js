import React from 'react';
import styled from 'styled-components';

const UserList = ({ users }) => {
  return (
    <section>
      <ul>
        {users.map((user) => {
          return (
            <li
              key={Math.random().toString()}
            >{`${user.name} (${user.age} years old)`}</li>
          );
        })}
      </ul>
    </section>
  );
};

export default UserList;

const StyledUserList = styled.section``;
