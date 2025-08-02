import React from 'react';
import MaterialChart from './MaterialChart';
// import { Card } from 'antd';

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <MaterialChart 
      work_center = {"装配一车间"}
      tableData = {[
        { key: '1', name: '物料A', code: 'MA001', demand: 100, outbound: 80, ratio: 0.8 },
        { key: '2', name: '物料B', code: 'MB002', demand: 150, outbound: 120, ratio: 0.8 },
        { key: '3', name: '物料C', code: 'MC003', demand: 200, outbound: 180, ratio: 0.9 },
        { key: '4', name: '物料D', code: 'MD004', demand: 80, outbound: 70, ratio: 0.875 },
        { key: '5', name: '物料E', code: 'ME005', demand: 120, outbound: 100, ratio: 0.833 },
        { key: '6', name: '物料F', code: 'MF006', demand: 120, outbound: 100, ratio: 0.833 },
        { key: '7', name: '物料G', code: 'MG007', demand: 120, outbound: 100, ratio: 0.833 },
      ]}
      />

      <MaterialChart 
      work_center = {"装配二车间"}
      tableData = {[
        { key: '1', name: '物料A', code: 'MA001', demand: 100, outbound: 80, ratio: 0.8 },
        { key: '2', name: '物料B', code: 'MB002', demand: 150, outbound: 120, ratio: 0.8 },
        { key: '3', name: '物料C', code: 'MC003', demand: 200, outbound: 180, ratio: 0.9 },
        { key: '4', name: '物料D', code: 'MD004', demand: 80, outbound: 70, ratio: 0.875 },
      ]}
      />
      
      <MaterialChart 
      work_center = {"装配三车间"}
      tableData = {[
        { key: '1', name: '物料A', code: 'MA001', demand: 100, outbound: 80, ratio: 0.8 },
        { key: '2', name: '物料B', code: 'MB002', demand: 150, outbound: 120, ratio: 0.8 },
        { key: '3', name: '物料C', code: 'MC003', demand: 200, outbound: 180, ratio: 0.9 },
        { key: '4', name: '物料D', code: 'MD004', demand: 80, outbound: 70, ratio: 0.875 },
        { key: '5', name: '物料E', code: 'ME005', demand: 120, outbound: 100, ratio: 0.833 },
        { key: '6', name: '物料F', code: 'MF006', demand: 120, outbound: 100, ratio: 0.833 },
      ]}
      />
    </div>
  );
}
