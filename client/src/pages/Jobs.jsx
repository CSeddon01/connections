import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Jobcard from '../components/jobcard/Jobcard';
import Map from '../components/googlemaps/Map';
import { useQuery } from '@apollo/client';
import { QUERY_ALLJOBS } from '../utils/queries';

// export default function Jobs() {
//     return (
//         <React.Fragment>
//             <Navbar></Navbar>
//             <div className='relative flex space-between'>
//                 <div className='min-h-full flex justify-center px-4 absolute left-0'>
//                     {/* <div className='max-w-2xl mt-6 w-full space-y-6'>
//                         <div className='md:grid md:grid-cols-3 md:gap-6'>
//                             <div className='md:col-span-1'>
//                                 <div className='px-4 sm:px-0'> */}
//                                     <Jobcard></Jobcard>
//                                     <Jobcard></Jobcard>
                               
//                                     {/* <div className='bg-gray-100'>
//                 <div className='min-h-full flex justify-center px-4 '>
//                     <div className='max-w-2xl mt-6 w-full space-y-6 '>
//                         <div className='md:grid md:grid-cols-3 md:gap-6 '>
//                             <div className='md:col-span-1 '> */}
//                                 <div className='px-4 sm:px-0'>
//                                     <Map></Map>
//                                     </div>
//                                 {/* </div>
//                             </div>
//                         </div>
//                     </div> */}
//                 </div>
//             </div>
//             {/* </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div> */}
         
export default function Jobs () {
    const { loading, data } = useQuery(QUERY_ALLJOBS);

    if (loading) {
        return <h3>Loading...</h3>
    }

    const { jobPosts } = data;
    
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Jobcard jobPosts={jobPosts}></Jobcard>
            <Map></Map>
        </React.Fragment>
    )
}