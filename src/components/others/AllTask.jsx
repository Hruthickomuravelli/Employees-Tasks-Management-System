import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
AuthContext
const AllTask = () => {
  const [userData,setUserData] =  useContext(AuthContext)

   
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
        {userData.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium  w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
        
        
    </div>
  )
}

export default AllTask



// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../context/AuthProvider';

// const AllTask = () => {
//   const [userData, setUserData] = useContext(AuthContext);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [taskType, setTaskType] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openTaskModal = (employee, type) => {
//     setSelectedEmployee(employee);
//     setTaskType(type);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEmployee(null);
//     setTaskType('');
//   };

//   return (
//     <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
//       {/* Table Header */}
//       <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
//         <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
//         <h3 className='text-lg font-medium w-1/5'>New Task</h3>
//         <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
//         <h5 className='text-lg font-medium w-1/5'>Completed</h5>
//         <h5 className='text-lg font-medium w-1/5'>Failed</h5>
//         <h5 className='text-lg font-medium w-1/5'>Actions</h5>
//       </div>
      
//       {/* Table Body - List of Employees */}
//       <div className=''>
//         {userData?.length > 0 ? (
//           userData.map((employee, idx) => (
//             <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between items-center rounded hover:bg-[#2a2a2a] transition-colors'>
//               <h2 className='text-lg font-medium w-1/5 truncate' title={employee.firstName}>
//                 {employee.firstName} {employee.lastName}
//               </h2>
//               <h3 className='text-lg font-medium w-1/5 text-blue-400'>{employee.taskCounts?.newTask || 0}</h3>
//               <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{employee.taskCounts?.active || 0}</h5>
//               <h5 className='text-lg font-medium w-1/5 text-green-400'>{employee.taskCounts?.completed || 0}</h5>
//               <h5 className='text-lg font-medium w-1/5 text-red-600'>{employee.taskCounts?.failed || 0}</h5>
//               <div className='flex space-x-2 w-1/5'>
//                 <button 
//                   onClick={() => openTaskModal(employee, 'assigned')}
//                   className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm'
//                 >
//                   Assigned
//                 </button>
//                 <button 
//                   onClick={() => openTaskModal(employee, 'completed')}
//                   className='bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm'
//                 >
//                   Completed
//                 </button>
//                 <button 
//                   onClick={() => openTaskModal(employee, 'failed')}
//                   className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm'
//                 >
//                   Failed
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className='text-center py-4 text-gray-400'>
//             No employee data available
//           </div>
//         )}
//       </div>

//       {/* Task Details Modal */}
//       {isModalOpen && selectedEmployee && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-[#2a2a2a] p-6 rounded-lg w-1/2 max-h-[80vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold">
//                 {taskType === 'assigned' && 'Assigned Tasks'}
//                 {taskType === 'completed' && 'Completed Tasks'}
//                 {taskType === 'failed' && 'Failed Tasks'}
//                 <span className="ml-2 text-blue-400">
//                   ({selectedEmployee.firstName} {selectedEmployee.lastName})
//                 </span>
//               </h3>
//               <button 
//                 onClick={closeModal}
//                 className="text-gray-400 hover:text-white text-2xl"
//               >
//                 &times;
//               </button>
//             </div>
            
//             <div className="space-y-3">
//               {selectedEmployee.tasks?.[taskType]?.length > 0 ? (
//                 selectedEmployee.tasks[taskType].map((task, index) => (
//                   <div key={index} className="border-b border-gray-700 pb-3 mb-3">
//                     <h4 className="font-medium text-lg">{task.title}</h4>
//                     <p className="text-gray-400">{task.description}</p>
//                     <div className="flex justify-between mt-2 text-sm">
//                       <span>Due: {task.dueDate}</span>
//                       <span>Priority: 
//                         <span className={`ml-1 ${
//                           task.priority === 'high' ? 'text-red-500' :
//                           task.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'
//                         }`}>
//                           {task.priority}
//                         </span>
//                       </span>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-400 text-center py-4">
//                   No {taskType} tasks found for this employee.
//                 </p>
//               )}
//             </div>
            
//             <div className="mt-4 flex justify-end">
//               <button
//                 onClick={closeModal}
//                 className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllTask;