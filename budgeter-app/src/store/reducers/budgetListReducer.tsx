import BudgetListConfig from "store/types/budgetListConfig";
import BudgetItemConfig from "store/types/budgetItemConfig";

export const exampleIncomeItem:BudgetItemConfig = {
    amount: 5000,
    occurance: 'monthly',
    budgetName: 'My Income',
    budgetType: 'income',
    id:0
}

export const exampleExpenseItem:BudgetItemConfig = {
    amount: 100,
    occurance: 'weekly',
    budgetName: 'Groceries',
    budgetType: 'expense',
    id: 1
}

export const initialState:BudgetListConfig = {
    budgetList: [exampleIncomeItem, exampleExpenseItem]
}

export default function budgetListReducer(action:{type:string, payload:BudgetItemConfig}, state:BudgetListConfig = initialState) {
        switch(action.type) {
            case 'addToList':
                return {
                    ...state,
                    budgetList: [...state.budgetList, action.payload]
                }
                break;
            case 'deleteFromList':
                const itemToDelete:BudgetItemConfig = action.payload;
                const newList:Array<BudgetItemConfig> = state.budgetList.filter(elem => elem.id === itemToDelete.id);
                return {...state, budgetList: newList};
                break;
            default:
                break;
        }

}