import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState(''); 123

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)'); 123
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
