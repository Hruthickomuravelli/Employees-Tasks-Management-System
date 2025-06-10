// import React from 'react';

// const CreateTask = () => {
//   return (
//     <div className="p-8 bg-gray-800 rounded-lg shadow-xl max-w-4xl mx-auto my-10">
//       <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Create New Task</h2>
//       <form className="flex flex-wrap -mx-4">
//         {/* Left Column - Task Details */}
//         <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
//           <div className="mb-6">
//             <label htmlFor="taskTitle" className="block text-sm font-semibold text-gray-300 mb-2">
//               Task Title
//             </label>
//             <input
//               id="taskTitle"
//               className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
//               type="text"
//               placeholder="e.g., Design homepage UI"
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="taskDate" className="block text-sm font-semibold text-gray-300 mb-2">
//               Due Date
//             </label>
//             <input
//               id="taskDate"
//               className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
//               type="date"
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="assignTo" className="block text-sm font-semibold text-gray-300 mb-2">
//               Assign To
//             </label>
//             <input
//               id="assignTo"
//               className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
//               type="text"
//               placeholder="e.g., John Doe"
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="category" className="block text-sm font-semibold text-gray-300 mb-2">
//               Category
//             </label>
//             <input
//               id="category"
//               className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
//               type="text"
//               placeholder="e.g., Design, Development, Marketing"
//             />
//           </div>
//         </div>

//         {/* Right Column - Description and Button */}
//         <div className="w-full md:w-1/2 px-4 flex flex-col">
//           <label htmlFor="description" className="block text-sm font-semibold text-gray-300 mb-2">
//             Description
//           </label>
//           <textarea
//             id="description"
//             className="w-full flex-grow p-3 bg-gray-700 text-white border border-gray-600 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200 mb-6"
//             rows="10"
//             placeholder="Provide a detailed description of the task..."
//           ></textarea>

//           <button
//             type="submit"
//             className="w-full bg-emerald-600 text-white py-3 rounded-md font-bold text-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300"
//           >
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;


import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            taskCategory: category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };

        // Create a deep copy of userData to avoid direct state mutation
        const updatedData = [...userData].map(user => {
            if (assignTo === user.firstName) {
                return {
                    ...user,
                    tasks: [...(user.tasks || []), newTask],
                    taskCounts: {
                        ...user.taskCounts,
                        newTask: (user.taskCounts?.newTask || 0) + 1
                    }
                };
            }
            return user;
        });

        setUserData(updatedData);
        
        // Reset form fields
        setTaskTitle('');
        setCategory('');
        setAssignTo('');
        setTaskDate('');
        setTaskDescription('');
    };

    return (
        <div className="p-8 bg-gray-800 rounded-lg shadow-xl max-w-4xl mx-auto my-10">
            <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Create New Task</h2>
            <form onSubmit={submitHandler} className="flex flex-wrap -mx-4">
                {/* Left Column - Task Details */}
                <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                    <div className="mb-6">
                        <label htmlFor="taskTitle" className="block text-sm font-semibold text-gray-300 mb-2">
                            Task Title
                        </label>
                        <input
                            id="taskTitle"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                            type="text"
                           
                            placeholder="e.g., Design homepage UI"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="taskDate" className="block text-sm font-semibold text-gray-300 mb-2">
                            Due Date
                        </label>
                        <input
                            id="taskDate"
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                            type="date"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="assignTo" className="block text-sm font-semibold text-gray-300 mb-2">
                            Assign To
                        </label>
                        <input
                            id="assignTo"
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                            type="text"
                            placeholder="e.g., John Doe"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="category" className="block text-sm font-semibold text-gray-300 mb-2">
                            Category
                        </label>
                        <input
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                            type="text"
                            placeholder="e.g., Design, Development, Marketing"
                            required
                        />
                    </div>
                </div>

                {/* Right Column - Description and Button */}
                <div className="w-full md:w-1/2 px-4 flex flex-col">
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-300 mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="w-full flex-grow p-3 bg-gray-700 text-white border border-gray-600 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200 mb-6"
                        rows="10"
                        placeholder="Provide a detailed description of the task..."
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-3 rounded-md font-bold text-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
