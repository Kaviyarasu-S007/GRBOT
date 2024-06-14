// import Orders from '../../components/Orders/Orders';
// import Statistics from '../../components/Statistics/Statistics';
// import { cardsData, groupNumber } from '../../data';
// import css from './Dashboard.module.css';
// const Dashboard = () => {
//   return <div className={css.container}>

//     {/* left side */}
//     <div className={css.dashboard}>
      
//       <div className={`${css.dashboardHead} theme-container`}>
//         <div className={css.head}>
//           <span>Dashboard</span>

//           <div className={css.durationButton}>
//             <select>
//               <option value="">1 week</option>
//               <option value="">1 month</option>
//               <option value="">1 year</option>
//             </select>
//           </div>
//         </div>
//           <div className={css.cards}>
//             {
//               cardsData.map((card, index)=> (
//                 <div className={css.card}>
//                   <div className={css.cardHead}>
//                     <span>{card.title}</span>
//                     <span>+{card.change}</span>
//                   </div>

//                   <div className={css.cardAmount}>
//                     <span>$</span>
//                     <span>{groupNumber(card.amount)}</span>
//                   </div>
//                 </div>
//               ))
//             }
//           </div>
//       </div>



//       <Statistics/>

//     </div>


//       <Orders/>
//   </div>
// }

// export default Dashboard;
//================================================================================================================================

//Dashboard.jsx

import React, { useEffect, useState } from 'react';
import Statistics from '../../components/Statistics/Statistics';
import Orders from '../../components/Orders/Orders';
import { getCardsData, fetchUserDataFromFirebase } from '../../data';
import css from './Dashboard.module.css';

const Dashboard = () => {
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchUserDataFromFirebase((userDataFromFirebase) => {
      // Update total data count
      setTotalDataCount(userDataFromFirebase.length);

      // Update cards data with the total count
      const updatedCardsData = getCardsData(userDataFromFirebase.length);
      setCardsData(updatedCardsData);
    });

    return () => {
      // Unsubscribe from Firebase listener when component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <div className={css.container}>
      {/* Left side */}
      <div className={css.dashboard}>
        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>

            <div className={css.durationButton}>
              <select>
                <option value="">1 week</option>
                <option value="">1 month</option>
                <option value="">1 year</option>
              </select>
            </div>
          </div>
          <div className={css.cards}>
            {cardsData.map((card, index) => (
              <div key={index} className={css.card}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span></span>
                </div>

                <div className={css.cardAmount}>
                  <span></span>
                  <span>{card.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Statistics />
      </div>

      <Orders />
    </div>
  );
};

export default Dashboard;
