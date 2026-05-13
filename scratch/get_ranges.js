const ExcelJS = require('exceljs');

async function getNamedRanges() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('../models/builds/2026-05-12-pnj-financials.xlsx');
    
    const definedNames = workbook.definedNames.model;
    console.log(`Found ${definedNames.length} named ranges.`);
    
    let count = 0;
    for (const nameObj of definedNames) {
        if (!nameObj.name.startsWith('_') && !nameObj.name.startsWith('RATIO_')) {
            console.log(`- ${nameObj.name}: ${nameObj.ranges[0]}`);
            count++;
        }
    }
    console.log(`Total input ranges: ${count}`);
}

getNamedRanges().catch(console.error);
