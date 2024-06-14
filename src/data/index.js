// import moment from "moment/moment";
// import { collection, getDocs, onSnapshot } from 'firebase/firestore';
// import { firestore } from './firebase';  // Update this with your actual Firebase path

// export const cardsData = [
//   {
//     title: "Revenue",
//     change: 24,
//     amount: 42056,
//   },
//   {
//     title: "Orders",
//     change: -14,
//     amount: 52125.03,
//   },
//   {
//     title: "Expenses",
//     change: 18,
//     amount: 1216.5,
//   },
//   {
//     title: "Profit",
//     change: 12,
//     amount: 10125.0,
//   },
// ];

// export const ordersData = [
//   {
//     name: "Skateboard",
//     type: "Illustration",
//     items: 58,
//     change: 290,
//   },
//   {
//     name: "Language courses",
//     type: "Illustration",
//     items: 12,
//     change: 72
//   },
//   {
//     name: "Office Collaboration",
//     type: "Illustration",
//     items: 7,
//     change: 70
//   },
//   {
//     name: "Robot",
//     type: "Illustration",
//     items: 21,
//     change: 15
//   }
// ];

// export const groupNumber = (number) => {
//   return parseFloat(number.toFixed(2)).toLocaleString("en", {
//     useGrouping: true,
//   });
// };

// let eventGuid = 0;
// let todayStr = moment().format("YYYY-MM-DD");

// export const INITIAL_EVENTS = [
//   {
//     id: createEventId(),
//     title: 'Lunch Party',
//     start: todayStr + 'T09:00:00',
//   },
//   {
//     id: createEventId(),
//     title: 'Timed event',
//     start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
//   },
//   {
//     id: createEventId(),
//     title: "Head Meetup",
//     start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
//   },
//   {
//     id: createEventId(),
//     title: "VC Meeting",
//     start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
//   },
//   {
//     id: createEventId(),
//     title: "Payment Schedules",
//     start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
//   },
//   {
//     id: createEventId(),
//     title: "VC Meeting",
//     start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
//   },
// ];

// export function createEventId() {
//   return String(eventGuid++);
// }

// export const boardData = {
//   columns: [
//     {
//       id: 1,
//       title: "Backlog",
//       cards: [
//         {
//           id: 1,
//           title: "Database Setup",
//           description: "Firebase Integration"
//         },
//         {
//           id: 2,
//           title: "Data Flow",
//           description: "Setup Diagram with other developers"
//         },
//       ]
//     },
//     {
//       id: 2,
//       title: "TODO",
//       cards: [
//         {
//           id: 9,
//           title: "Data Table Page",
//           description: "Server side Pagination",
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: "Doing",
//       cards: [
//         {
//           id: 10,
//           title: "Full Calendar Extension",
//           description: "Make new events and store in global states"
//         },
//         {
//           id: 11,
//           title: "Custom Kanban Board",
//           description: "Setup react-kanban dep within Dashboard as a separate page"
//         }
//       ]
//     },
//     {
//       id: 4,
//       title: "Completed",
//       cards: [
//         {
//           id: 12,
//           title: "Vite Server Setup",
//           description: "Configure required modules and starters"
//         },
//         {
//           id: 13,
//           title: "Modular structure",
//           description: "Write CSS in the form of modules to reduce naming conflicts"
//         }
//       ]
//     }
//   ]
// };

// export const fetchUserDataFromFirebase = (updateCallback) => {
//   try {
//     const adminCollection = collection(firestore, 'Admin');
//     const unsubscribe = onSnapshot(adminCollection, (snapshot) => {
//       const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       const userDataFromFirebase = data.map((item) => ({
//         name: item.Name,
//         address: item.Address,
//         email: item.Email,
//         age: item.Age,
//         date: moment(item.Date, 'ddd MMM DD YYYY').format('YYYY-MM-DD'),
//         time: item.Time,
//         query: item.Query,
//       }));
//       updateCallback(userDataFromFirebase);
//     });

//     return unsubscribe;
//   } catch (error) {
//     console.error('Error fetching data from Firebase:', error);
//     return () => {}; // Return an empty function to avoid errors
//   }
// };

// export const userData = [];  // Initial data, will be updated by fetchUserDataFromFirebase


//=======================================================================================================================



import moment from "moment/moment";
import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from './firebase';  // Update this with your actual Firebase path

export const getCardsData = (totalDataCount) => {
  return [
    {
      title: "Complaints",
      change: 24,
      amount: totalDataCount,
    },
    {
      title: "Solved",
      change: -14,
      amount: 52125.03,
    },
    {
      title: "Fund",
      change: 18,
      amount: 1216.5,
    },
    {
      title: "Consumers",
      change: 12,
      amount: 10125.0,
    },
  ];
};

export const ordersData = [
  {
    name: "Skateboard",
    type: "Illustration",
    items: 58,
    change: 290,
  },
  {
    name: "Language courses",
    type: "Illustration",
    items: 12,
    change: 72
  },
  {
    name: "Office Collaboration",
    type: "Illustration",
    items: 7,
    change: 70
  },
  {
    name: "Robot",
    type: "Illustration",
    items: 21,
    change: 15
  }
];

export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};

let eventGuid = 0;
let todayStr = moment().format("YYYY-MM-DD");

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Lunch Party',
    start: todayStr + 'T09:00:00',
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Payment Schedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
];

export function createEventId() {
  return String(eventGuid++);
}

export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration"
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Data Table Page",
          description: "Server side Pagination",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Calendar Extension",
          description: "Make new events and store in global states"
        },
        {
          id: 11,
          title: "Custom Kanban Board",
          description: "Setup react-kanban dep within Dashboard as a separate page"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Vite Server Setup",
          description: "Configure required modules and starters"
        },
        {
          id: 13,
          title: "Modular structure",
          description: "Write CSS in the form of modules to reduce naming conflicts"
        }
      ]
    }
  ]
};

export const fetchUserDataFromFirebase = (updateCallback) => {
  try {
    const adminCollection = collection(firestore, 'Admin');
    const unsubscribe = onSnapshot(adminCollection, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // Update the state or invoke callback with the updated data
      updateCallback(data);
    });

    return unsubscribe;
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    return () => {}; // Return an empty function to avoid errors
  }
};

export const userData = [];  // Initial data, will be updated by fetchUserDataFromFirebase
