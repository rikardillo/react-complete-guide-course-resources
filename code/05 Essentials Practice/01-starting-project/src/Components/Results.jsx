import { calculateInvestmentResults } from "../util/investment";

const userData = {
  initialInvestment: 100,
  annualInvestment: 100,
  expectedReturn: 100,
  duration: 10,
}

export default function Results({
  year,
  investmentValue,
  interest,
  totalInterest,
  investedCapital,
}) {

  console.log(calculateInvestmentResults(userData));


  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{(year = `1`)}</td>
          <td>{(investmentValue = `100`)}</td>
          <td>{(interest = `100`)}</td>
          <td>{(totalInterest = `100`)}</td>
          <td>{(investedCapital = `100`)}</td>
        </tr>
      </tbody>
    </table>
  );
}
