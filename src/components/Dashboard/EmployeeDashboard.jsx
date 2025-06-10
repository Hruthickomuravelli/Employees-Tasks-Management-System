// import React from 'react'
// import Header from '../others/header'
// import TaskListNum from '../others/TaskListNum'
// import TaskList from '../TaskList/TaskList'

// const EmployeeDashboard = (props) => {
  
//   return (
//     <div className='p-10 bg-[1C1C1C] h-screen'>
//         <Header changeUser={props.changeUser} data={props.data}/>
//         <TaskListNum data={props.data}/>
//         <TaskList data={props.data}/>
//     </div>
//   )
// }

// export default EmployeeDashboard

import React from 'react';
import Header from '../others/header';
import TaskListNum from '../others/TaskListNum';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className='p-6 md:p-10 bg-gray-50 min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNum data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
