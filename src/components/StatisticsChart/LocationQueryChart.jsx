import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { fetchUserDataFromFirebase } from '../../data';

const LocationQueryChart = () => {
    const [locationData, setLocationData] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchUserDataFromFirebase((userDataFromFirebase) => {
            // Count the number of queries for each unique address
            const locationCounts = {};
            userDataFromFirebase.forEach(data => {
                const address = data.Location;
                locationCounts[address] = (locationCounts[address] || 0) + 1;
            });

            // Convert the location counts to an array of objects with address and count
            const chartData = Object.keys(locationCounts).map(address => ({
                address,
                count: locationCounts[address]
            }));
            setLocationData(chartData);
        });

        return () => unsubscribe();
    }, []);

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: params => {
                const data = params.data;
                return `${data.address}: ${data.count}`;
            }
        },
        xAxis: {
            type: 'category',
            data: locationData.map(item => item.address), // Use addresses as x-axis data
            axisTick: {
                alignWithLabel: true
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            type: 'scatter', // Use a scatter plot
            data: locationData.map(item => ({
                name: item.address,
                value: [item.address, item.count]
            }))
        }]
    };

    return <ReactECharts option={option} />;
};

export default LocationQueryChart;
