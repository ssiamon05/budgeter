import FormConfig from './formConfig'
import BudgetListConfig from './budgetListConfig';


interface StoreConfig {
   'reducers': {
       'form':any,
       'budgetList':any
    },
    'states': {
        'form':FormConfig,
        'budgetList': BudgetListConfig,
        'currentBudget': number
   }
}

export default StoreConfig;