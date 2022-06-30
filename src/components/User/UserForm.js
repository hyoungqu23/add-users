import React from 'react';
import styled from 'styled-components';

const UserForm = () => {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="userName">Username</label>
          <input type="text" id="userName" placeholder="Max" />
        </div>
        <div>
          <label htmlFor="userAge">Age(Years)</label>
          <input type="text" id="userAge" placeholder="32" />
        </div>
        <div>
          <button type="submit">Add New User</button>
        </div>
      </form>
    </section>
  );
};

export default UserForm;

const StyledUserForm = styled.section``;
