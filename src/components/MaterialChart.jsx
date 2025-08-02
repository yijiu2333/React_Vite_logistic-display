import React from 'react';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div className="text-red-500 p-4">图表渲染出错，请稍后再试</div>;
    }
    return this.props.children;
  }
}

const MaterialChart = ({
  work_center = "车间",
  tableData = [
    { key: '1', name: '物料A', code: 'MA001', demand: 100, outbound: 80, ratio: 0.8 },
    { key: '2', name: '物料B', code: 'MB002', demand: 150, outbound: 120, ratio: 0.8 },
    { key: '3', name: '物料C', code: 'MC003', demand: 200, outbound: 180, ratio: 0.9 },
    { key: '4', name: '物料D', code: 'MD004', demand: 80, outbound: 70, ratio: 0.875 },
    { key: '5', name: '物料E', code: 'ME005', demand: 120, outbound: 100, ratio: 0.833 },
    { key: '5', name: '物料E', code: 'ME005', demand: 120, outbound: 100, ratio: 0.833 },
  ]
}) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    let chartInstance = null;
    
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      // 销毁之前的图表实例
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: lineData.map(item => item.day),
          datasets: [{
            label: '配送比',
            data: lineData.map(item => item.ratio),
            backgroundColor: 'rgba(201, 202, 202, 0.7)',
            borderColor: 'rgb(95, 93, 93, 0)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              suggestedMin: 80,
              suggestedMax: 120,
              grid: {
                display: false
              }
            },
            x: {
              grid: {
                display: false
              }
            },
          },
          plugins: {
            title: {
              display: true,
              text: '周配送完成率柱状图',
              position: 'top'
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  return `${(context.raw * 100).toFixed(1)}%`;
                }
              }
            }
          }
        },
        plugins: [{
          afterDraw: function(chart) {
            const ctx = chart.ctx;
            ctx.font = '12px Arial';
            ctx.fillStyle = '#666';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            
            chart.data.datasets.forEach((dataset, i) => {
              const meta = chart.getDatasetMeta(i);
              meta.data.forEach((bar, index) => {
                const data = dataset.data[index];
                const x = bar.x;
                const y = bar.y - 5;
                ctx.fillText(`${(data).toFixed(1)}%`, x, y);
              });
            });
          } 
        }]
      });
      
      // 保存图表实例引用
      chartRef.current.chart = chartInstance;
    }
    
    // 清理函数
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const lineData = [
    { day: '周一', ratio: 80 },
    { day: '周二', ratio: 83 },
    { day: '周三', ratio: 85 },
    { day: '周四', ratio: 88 },
    { day: '周五', ratio: 90 },
    { day: '周六', ratio: 92 },
    { day: '周日', ratio: 95 },
  ];

  const columns = [
    { title: '品号', dataIndex: 'name', key: 'name' },
    { title: '编码', dataIndex: 'code', key: 'code' },
    { title: '需求', dataIndex: 'demand', key: 'demand' },
    { title: '实配数字', dataIndex: 'outbound', key: 'outbound' },
    { title: '配送比', dataIndex: 'ratio', key: 'ratio', render: ratio => (
      <div className="flex items-center space-x-2">
        <div className="relative w-12 h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-300">
          <div 
            className={`absolute top-0 left-0 h-full rounded-full ${ratio >= 0.9 ? 'bg-green-500' : 'bg-yellow-500'} shadow-sm`}
            style={{ width: `${Math.min(100, ratio * 100)}%` }}
          />
        </div>
        <span className={`text-xs font-medium ${ratio >= 0.9 ? 'text-green-600' : 'text-yellow-600'}`}>
          {(ratio * 100).toFixed(1)}%
        </span>
      </div>
    ),}
  ];

  return (
    <div className="bg-white/90 rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <i className="fa fa-box text-green-500 mr-2"></i>
          {work_center}物料配送明细
        </h2>
        <div className="text-sm text-gray-500">
          {/* 数据截止至2025年6月27日 */}
        </div>
      </div>
      <div className="flex gap-6 min-h-[200px]">
        <div className="flex-1 overflow-x-auto overflow-y-auto scrollbar-hide" style={{ height: '250px' }}>
          <table className="w-full">
            <thead>
              <tr>
                {columns.map(col => (
                  <th key={col.key} className="text-left p-2 border-b">{col.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map(row => (
                <tr key={row.key} className="border-b">
                  {columns.map(col => (
                    <td key={`${row.key}-${col.key}`} className="p-2">
                      {col.render ? col.render(row[col.dataIndex], row) : row[col.dataIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-1">
        <ErrorBoundary>
          <canvas ref={chartRef} />
        </ErrorBoundary>
      </div>
      </div>
    </div>
  );
};

export default MaterialChart;