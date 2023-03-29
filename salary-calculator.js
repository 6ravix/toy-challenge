function calculateNetSalary(basicSalary, benefits) {
    // Tax rates for different income brackets
    const taxRates = [
      { bracket: 12298, rate: 0.1 },
      { bracket: 23885, rate: 0.15 },
      { bracket: 35472, rate: 0.2 },
      { bracket: 47059, rate: 0.25 },
      { bracket: Infinity, rate: 0.3 },
    ];
  
    // NHIF and NSSF rates
    const nhifRates = [150, 300, 400, 500, 600, 750, 850, 900, 1000];
    const nssfRate = 0.06;
  
    // Determine the applicable NHIF rate based on the gross salary
    let nhifRate;
    if (benefits <= 5999) {
      nhifRate = nhifRates[0];
    } else if (benefits <= 7999) {
      nhifRate = nhifRates[1];
    } else if (benefits <= 11999) {
      nhifRate = nhifRates[2];
    } else if (benefits <= 14999) {
      nhifRate = nhifRates[3];
    } else if (benefits <= 19999) {
      nhifRate = nhifRates[4];
    } else if (benefits <= 24999) {
      nhifRate = nhifRates[5];
    } else if (benefits <= 29999) {
      nhifRate = nhifRates[6];
    } else if (benefits <= 34999) {
      nhifRate = nhifRates[7];
    } else {
      nhifRate = nhifRates[8];
    }
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate taxable income
    const taxableIncome = grossSalary - (nhifRate * 12) - (nssfRate * grossSalary);
  
    // Calculate payee (i.e. tax)
    let tax = 0;
    for (let i = 0; i < taxRates.length; i++) {
      const { bracket, rate } = taxRates[i];
      if (bracket === Infinity || taxableIncome <= bracket) {
        tax += taxableIncome * rate;
        break;
      } else {
        tax += bracket * rate;
      }
    }
  
    // Calculate NHIF deductions
    const nhifDeductions = nhifRate * 12;
  
    // Calculate NSSF deductions
    const nssfDeductions = grossSalary * nssfRate;
  
    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
  
    // Print the results
    console.log("Gross Salary:", grossSalary);
    console.log("Payee (Tax):", tax);
    console.log("NHIF Deductions:", nhifDeductions);
    console.log("NSSF Deductions:", nssfDeductions);
    console.log("Net Salary:", netSalary);
  }
  