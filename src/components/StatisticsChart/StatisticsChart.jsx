// import ReactECharts from 'echarts-for-react'
// import * as echarts from 'echarts'
// const StatisticsChart = () => {

//     const option = {
//         color: ['var(--orange)'],

//         toolbox: {
//             feature: {
//                 saveAsImage: {},
//             }
//         },

//         tooltip: {
//             trigger: "axis",
//             axisPointer: {
//                 type: "cross"
//             },
//             backgroundColor: "rgba(0, 0, 0, 0.59)",
//             borderWidth: 0,
//         },
//         grid: {
//             left: "3%",
//             right: "4%",
//             bottom: "3%",
//             containLabel: true,
//             show: false,
//         },

//         xAxis: [
//             {
//                 type: "category",
//                 boundaryGap: false,
//                 data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
//             }
//         ],
//         yAxis: [
//             {
//                 type: "value",
//                 splitLine: {
//                     show: false,
//                 }
//             }
//         ],
//         series: [
//             {
//                 type: "line",
//                 smooth: true,
//                 lineStyle: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                         {
//                             offset: 0,
//                             color: "rgb(255, 191, 0)",
//                         },
//                         {
//                             offset: 1,
//                             color: "#F450D3"
//                         }
//                     ]),
//                     width: 4
//                 },
//                 areaStyle: {
//                     opacity: .5,
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
//                         {
//                             offset: 0,
//                             color: "#FE4C00"
//                         },
//                         {
//                             offset: 1,
//                             color: "rgba(255,144,70,0.1)"
//                         }
//                     ])
//                 },
//                 emphasis: {
//                     focus: "series",
//                 },
//                 showSymbol: false,
//                 data: [28000, 19000, 32000, 18000, 41000, 30000, 26000]
//             }
//         ]
//     }

//     return (
//         <ReactECharts option={option}
//         />
//     )
// }

// export default StatisticsChart


//==================================================================================================================






// import React, { useEffect, useState } from 'react';
// import * as echarts from 'echarts';
// import ReactECharts from 'echarts-for-react';
// import { fetchUserDataFromFirebase } from '../../data';
// import moment from 'moment';

// const StatisticsChart = () => {
//     const [queryData, setQueryData] = useState([]);

//     useEffect(() => {
//         const unsubscribe = fetchUserDataFromFirebase((userDataFromFirebase) => {
//             // Extract dates from the query data
//             const dates = userDataFromFirebase.map(data => moment(data.Date, 'ddd MMM DD YYYY').format('YYYY-MM-DD'));

//             // Count the number of queries received on each date
//             const queryCounts = dates.reduce((acc, date) => {
//                 acc[date] = (acc[date] || 0) + 1;
//                 return acc;
//             }, {});

//             // Convert the counts to an array of objects for chart data
//             const chartData = Object.entries(queryCounts).map(([date, count]) => ({ date, count }));
//             setQueryData(chartData);
//         });

//         return () => unsubscribe();
//     }, []);

//     const option = {
//         color: ['#3398DB'],
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {
//                 type: 'shadow'
//             }
//         },
//         xAxis: {
//             type: 'category',
//             data: queryData.map(item => item.date),
//             axisTick: {
//                 alignWithLabel: true
//             }
//         },
//         yAxis: {
//             type: 'value'
//         },
//         series: [{
//             name: 'Number of Queries',
//             type: 'bar',
//             barWidth: '60%',
//             data: queryData.map(item => item.count)
//         }]
//     };

//     return <ReactECharts option={option} />;
// };

// export default StatisticsChart;



import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { fetchUserDataFromFirebase } from '../../data';
import moment from 'moment';

const StatisticsChart = () => {
    const [queryData, setQueryData] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchUserDataFromFirebase((userDataFromFirebase) => {
            // Extract dates from the query data
            const dates = userDataFromFirebase.map(data => moment(data.Date, 'ddd MMM DD YYYY').format('YYYY-MM-DD'));

            // Count the number of queries received on each date
            const queryCounts = dates.reduce((acc, date) => {
                acc[date] = (acc[date] || 0) + 1;
                return acc;
            }, {});

            // Convert the counts to an array of objects for chart data
            const chartData = Object.entries(queryCounts).map(([date, count]) => ({ date, count }));
            setQueryData(chartData);
        });

        return () => unsubscribe();
    }, []);

    const option = {
        title: {
            text: 'Query Over Date',
            left: 'center',
            top: 'top',
        },
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: queryData.map(item => item.date),
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                show: false // Hide x-axis line
            },
            splitLine: {
                show: false // Hide grid lines
            }
        },
        yAxis: {
            type: 'value',
            
            axisLine: {
                show: false // Hide y-axis line
            },
            splitLine: {
                show: false // Hide grid lines
            }
        },
        series: [{
            name: 'Number of Queries',
            type: 'bar',
            barWidth: '60%',
            data: queryData.map(item => item.count)
        }]
    };

    return <ReactECharts option={option} />;
};
const AgeChart = () => {
    const [ageData, setAgeData] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchUserDataFromFirebase((userDataFromFirebase) => {
            // Count the occurrences of each age
            const ageCounts = userDataFromFirebase.reduce((acc, data) => {
                const age = parseInt(data.Age); // Assuming "Age" is a field in your data
                acc[age] = (acc[age] || 0) + 1;
                return acc;
            }, {});

            // Convert the counts to an array of objects for chart data
            const chartData = Object.entries(ageCounts).map(([age, count]) => ({ age: parseInt(age), count }));
            setAgeData(chartData);
        });

        return () => unsubscribe();
    }, []);

    const option = {
        title: {
            text: 'Query over Age',
            left: 'center',
            top: 'top',
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a} <br/>{b} years: {c} queries'
        },
        xAxis: {
            type: 'value',
            name: 'Age',
            axisLine: {
                show: false // Hide y-axis line
            },
            splitLine: {
                show: false // Hide grid lines
            }
        },
        yAxis: {
            type: 'value',
            
            axisLine: {
                show: false // Hide y-axis line
            },
            splitLine: {
                show: false // Hide grid lines
            }
        },
        series: [{
            symbolSize: 10,
            data: ageData.map(item => [item.age, item.count]),
            type: 'scatter'
        }]
    };

    return <ReactECharts option={option} />;
};




//3

const QueryPercentageChart = () => {
    const [queryData, setQueryData] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchUserDataFromFirebase((userDataFromFirebase) => {
            const totalQueries = userDataFromFirebase.length;
            const queryCounts = userDataFromFirebase.reduce((acc, data) => {
                acc[data.Address] = (acc[data.Address] || 0) + 1; // Change to Address field
                return acc;
            }, {});
            const chartData = Object.entries(queryCounts).map(([address, count]) => ({ // Change to address
                name: address, // Change to address
                value: (count / totalQueries) * 100 // Calculate percentage
            }));
            setQueryData(chartData);
        });

        return () => unsubscribe();
    }, []);

    const option = {
        title: {
            text: 'Query Percentage',
            left: 'center',
            top: 'top',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%' // Change b to show address instead of query
        },
        series: [
            {
                
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: queryData
            }
        ]
    };

    return <ReactECharts option={option} />;
};

//4
const TimeSeriesChart = () => {
    const [timeSeriesData, setTimeSeriesData] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchUserDataFromFirebase((userDataFromFirebase) => {
            // Extract time from the query data
            const queryTimes = userDataFromFirebase.map(data => moment(data.Time, 'HH:mm:ss').format('HH:mm'));

            // Count the number of queries received at each time
            const queryCounts = queryTimes.reduce((acc, time) => {
                acc[time] = (acc[time] || 0) + 1;
                return acc;
            }, {});

            // Convert the counts to an array of objects for chart data
            const chartData = Object.entries(queryCounts).map(([time, count]) => ({ time, count }));
            setTimeSeriesData(chartData);
        });

        return () => unsubscribe();
    }, []);

    const option = {
        title: {
            text: 'Query over Time',
            left: 'center',
            top: 'top',
        },
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: {
            type: 'category',
            data: timeSeriesData.map(item => item.time),
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                show: false // Hide x-axis line
            },
            splitLine: {
                show: false // Hide grid lines
            }
        },
        yAxis: {
            type: 'value',
           
            axisLine: {
                show: false // Hide y-axis line
            },
            splitLine: {
                show: false // Hide grid lines
            }
        },
        series: [{
            name: 'Number of Queries',
            type: 'line',
            smooth: true,
            data: timeSeriesData.map(item => item.count)
        }]
    };

    return <ReactECharts option={option} />;
};

//5
const DatePlot = () => {
    const [dateData, setDateData] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchUserDataFromFirebase((userDataFromFirebase) => {
            // Extract dates from the query data
            const dates = userDataFromFirebase.map(data => moment(data.Date, 'ddd MMM DD YYYY').format('YYYY-MM-DD'));

            // Count the number of occurrences of each date
            const dateCounts = dates.reduce((acc, date) => {
                acc[date] = (acc[date] || 0) + 1;
                return acc;
            }, {});

            // Convert the counts to an array of objects for chart data
            const chartData = Object.entries(dateCounts).map(([date, count]) => ({ date, count }));
            setDateData(chartData);
        });

        return () => unsubscribe();
    }, []);

    const option = {
        title: {
            text: 'Query Occurences',
            left: 'center',
            top: 'top',
        },
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        xAxis: {
            type: 'category',
            data: dateData.map(item => item.date),
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                show: false // Hide y-axis line
            },
            splitLine: {
                show: false // Hide grid lines
            }
        },
        yAxis: {
            type: 'value',
            
            axisLine: {
                show: false // Hide y-axis line
            },
            splitLine: {
                show: false // Hide grid lines
            }
        },
        series: [{
            name: 'Number of Occurrences',
            type: 'line',
            data: dateData.map(item => item.count)
        }]
    };

    return <ReactECharts option={option} />;
};

//6
const GaugeChart = () => {
    // Value to indicate completion (e.g., 45%)
    const completedValue = 45;

    // ECharts option for the gauge chart
    const option = {
        title: {
            text: 'Query Status',
            left: 'center',
            top: 'top',
        },
        series: [
            {
                type: 'gauge',
                detail: { formatter: '{value}%' },
                data: [{ value: completedValue, name: 'Queries Completed' }],
                axisLabel: { show: false },
                axisLine: {
                    lineStyle: {
                        width: 20,
                        color: [
                            [0, '#32cd32'],       // Green (Start of the gauge)
                            [completedValue / 100, '#32cd32'],  // Green (Up to the completion value)
                            [completedValue / 100, 'red'],      // Red (From completion value to 100%)
                            [1, 'white'],           // Red (End of the gauge)
                        ],
                    },
                },
                splitLine: { length: 20 },
                pointer: { width: 5 },
            },
        ],
    };

    return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export { StatisticsChart, AgeChart, QueryPercentageChart, TimeSeriesChart, DatePlot, GaugeChart };