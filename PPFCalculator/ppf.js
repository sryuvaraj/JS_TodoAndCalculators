function calculatePPF() {
    const investment = parseFloat(document.getElementById('investment').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);
  
    if (isNaN(investment) || isNaN(rate) || isNaN(years)) {
      document.getElementById('result').innerHTML = '<p>Please enter valid numbers.</p>';
      return;
    }
  
    const maturityAmount = investment * Math.pow(1 + rate / 100, years);
    const interestEarned = maturityAmount - investment;
  
    const resultHTML = `
      <h2>PPF Calculation Result</h2>
      <p>Investment Amount: ₹${investment.toFixed(2)}</p>
      <p>Annual Interest Rate: ${rate}%</p>
      <p>Investment Period: ${years} years</p>
      <p>Maturity Amount: ₹${maturityAmount.toFixed(2)}</p>
      <p>Interest Earned: ₹${interestEarned.toFixed(2)}</p>
    `;
  
    document.getElementById('result').innerHTML = resultHTML;
  }
  