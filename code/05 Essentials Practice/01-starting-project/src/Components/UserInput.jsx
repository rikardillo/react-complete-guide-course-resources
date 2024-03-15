import Input from "./Input";
import { calculateInvestmentResults } from "../util/investment";



export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input label={`initial investment`}/>
        <Input label={`annual investment`}/>
        <Input label={`expected return`}/>
        <Input label={`duration`}/>
      </div>
    </div>
  );
}
