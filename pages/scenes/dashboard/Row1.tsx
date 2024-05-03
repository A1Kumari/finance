import React, { useEffect, useRef } from 'react';
import DashboardBox from '../../components/DashboardBox';
import Chart from 'chart.js/auto';

const Row1 = () => {
  const barChartRef = useRef(null);
  const donutChartRef = useRef(null);

  useEffect(() => {
    // Bar Chart
    const barLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const barData = {
      labels: barLabels,
      datasets: [{
        label: 'Bar Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };
    const barChartConfig = {
      type: 'bar' as const, // Correctly typed 'bar'
      data: barData,
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    };
    const barCtx = barChartRef.current.getContext('2d');
    new Chart(barCtx, barChartConfig);

    // Donut Chart
    const donutLabels = ['Red', 'Blue', 'Yellow'];
    const donutData = {
      labels: donutLabels,
      datasets: [{
        label: 'Donut Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
    const donutChartConfig = {
      type: 'doughnut' as const, // Correctly typed 'doughnut'
      data: donutData,
    };
    const donutCtx = donutChartRef.current.getContext('2d');
    new Chart(donutCtx, donutChartConfig);
  }, []);

  return (
    <>
      <DashboardBox gridArea="a">
        Fianancial asset net worth
        <div>
          <h2>Yearly Expenses (Bar Chart)</h2>
          <canvas ref={barChartRef} />
        </div>
      </DashboardBox>
      <DashboardBox gridArea="b">
        Investment Portfolio Management
        <div>
          <h2>Donut Chart</h2>
          <canvas ref={donutChartRef} />
        </div>
      </DashboardBox>
    </>
  );
};

export default Row1;
