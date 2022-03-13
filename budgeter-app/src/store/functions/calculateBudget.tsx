import BudgetItemConfig from "store/types/budgetItemConfig";
import OccuranceConfig from "store/types/occurranceConfig";
import calculateItemValue from "./calculateItemValue";
import calculateNewBudgetValue from "./calculateNewBudgetValue";

export default function calculateBudget(arr:Array<BudgetItemConfig>, occuranceQuery:OccuranceConfig) {
    let currentTotal:number = 0;
    for (let item of arr) {
        if (item.budgetType === 'income') {
            currentTotal += calculateNewBudgetValue(calculateItemValue(item.amount, item.occurance), occuranceQuery)
        } else {
            currentTotal -= calculateNewBudgetValue(calculateItemValue(item.amount, item.occurance), occuranceQuery)
        }
    }
    return currentTotal;
}