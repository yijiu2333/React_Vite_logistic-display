const XLSX = require('xlsx');

// 读取Excel文件
const workbook = XLSX.readFile('dataset.xlsx');

// 获取第一张表
const firstSheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[firstSheetName];

// 将工作表转换为JSON（header:1表示原始行数据）
const data = XLSX.utils.sheet_to_json(worksheet, {header:1});

// 获取第四行数据（索引为3，因为数组从0开始）
const fourthRow = data[3];

console.log('第四行数据:', fourthRow);