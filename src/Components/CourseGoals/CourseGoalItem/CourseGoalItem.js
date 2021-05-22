import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
    margin: 1rem 0;
    background: #8b005d;
    display:flex;
    justify-content: space-between;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    color: white;
    padding: 1rem 2rem;
    cursor: pointer;

    &:hover {
        background: orange;
        color: #fff
    }
`;

const CourseGoalItem = props => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <ListItem className="goal-item" onClick={deleteHandler}>
      {props.children}
      <span onClick={deleteHandler}>X</span>
    </ListItem>
  );
};

export default CourseGoalItem;
