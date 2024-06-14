// import css from './Statistics.module.css'
// import { BsArrowUpShort } from 'react-icons/bs'
// import { groupNumber } from '../../data'
// import {StatisticsChart, LocationQueryChart} from '../StatisticsChart/StatisticsChart'


// const Statistics = () => {
//     return (
//         <div className={`${css.container} theme-container`}>
//             <span className={css.title}>Overview Statistics</span>

//             <div className={`${css.cards} grey-container`}>

//                 <div>
//                     <div className={css.arrowIcon}>
//                         <BsArrowUpShort />
//                     </div>

//                     <div className={css.card}>
//                         <span>Top item this month</span><span>Office comps</span>
//                     </div>
//                 </div>

//                 <div className={css.card}>
//                     <span>Items</span><span>$ {groupNumber(455)}</span>
//                 </div>

//                 <div className={css.card}>
//                     <span>Profit</span><span>$ {groupNumber(370000)}</span>
//                 </div>

//                 <div className={css.card}>
//                     <span>Daily Average</span><span>$ {groupNumber(2000)}</span>
//                 </div>
//             </div>


//             <StatisticsChart/>
//         </div>
//     )
// }

// export default Statistics


//========================================================================================================================

// import React, { useEffect, useState } from 'react';
// import css from './Statistics.module.css';
// import { BsArrowUpShort } from 'react-icons/bs';
// import { groupNumber, fetchUserDataFromFirebase } from '../../data';
// import { StatisticsChart,  LocationQueryChart, QueryPercentageChart, TimeSeriesChart,DatePlot, GaugeChart } from '../StatisticsChart/StatisticsChart';
// // import LocationQueryChart from '../StatisticsChart/LocationQueryChart'; // Import both chart components

// const Statistics = () => {
//     const [totalDataCount, setTotalDataCount] = useState(0);

//     useEffect(() => {
//         const unsubscribe = fetchUserDataFromFirebase((userDataFromFirebase) => {
//             // Update total data count
//             setTotalDataCount(userDataFromFirebase.length);
//         });

//         return () => {
//             // Unsubscribe from Firebase listener when component unmounts
//             unsubscribe();
//         };
//     }, []);

//     return (
//         <div className={`${css.container} theme-container`}>
//             <span className={css.title}>Overview Statistics</span>

//             <div className={`${css.cards} grey-container`}>
//                 <div>
//                     <div className={css.arrowIcon}>
//                         <BsArrowUpShort />
//                     </div>

//                     <div className={css.card}>
//                         <span>Top item this month</span><span>Office comps</span>
//                     </div>
//                 </div>

//                 <div className={css.card}>
//                     <span>Items</span><span>$ {groupNumber(totalDataCount)}</span>
//                 </div>

//                 <div className={css.card}>
//                     <span>Profit</span><span>$ {groupNumber(totalDataCount * 100)}</span> {/* Example data */}
//                 </div>

//                 <div className={css.card}>
//                     <span>Daily Average</span><span>$ {groupNumber(totalDataCount * 10)}</span> {/* Example data */}
//                 </div>
//             </div>

//             {/* Render both StatisticsChart and LocationQueryChart components */}
//             <div className={css.chartsContainer}>
//                 <div className={css.chart}>
//                     <StatisticsChart />
//                 </div>
//                 <div className={css.chart}>
//                     <LocationQueryChart />
//                 </div>
//                 <div className={css.chart}>
//                     <QueryPercentageChart />
//                 </div>
//                 <div className={css.chart}>
//                     <TimeSeriesChart />
//                 </div>
//                 <div className={css.chart}>
//                     <DatePlot />
//                 </div>
//                 <div className={css.chart}>
//                     <GaugeChart />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Statistics;


//====================================================================================================================================================================

import React, { useEffect, useState } from 'react';
import css from './Statistics.module.css';
import { BsArrowUpShort } from 'react-icons/bs';
import { groupNumber, fetchUserDataFromFirebase } from '../../data';
import { StatisticsChart, AgeChart, QueryPercentageChart, TimeSeriesChart, DatePlot, GaugeChart } from '../StatisticsChart/StatisticsChart';

const Statistics = () => {
    const [totalDataCount, setTotalDataCount] = useState(0);

    useEffect(() => {
        const unsubscribe = fetchUserDataFromFirebase((userDataFromFirebase) => {
            // Update total data count
            setTotalDataCount(userDataFromFirebase.length);
        });

        return () => {
            // Unsubscribe from Firebase listener when component unmounts
            unsubscribe();
        };
    }, []);

    return (
        <div >
            {/* <span className={css.title}>Overview Statistics</span> */}

           

            <div className={css.chartsContainer}>
                <div className={css.chartContainer}>
                    <StatisticsChart />
                </div>
                <div className={css.chartContainer}>
                    <AgeChart />
                </div>
                <div className={css.chartContainer}>
                    <QueryPercentageChart />
                </div>
                <div className={css.chartContainer}>
                    <TimeSeriesChart />
                </div>
                <div className={css.chartContainer}>
                    <DatePlot />
                </div>
                <div className={css.chartContainer}>
                    <GaugeChart />
                </div>
            </div>
        </div>
    );
};

export default Statistics;
