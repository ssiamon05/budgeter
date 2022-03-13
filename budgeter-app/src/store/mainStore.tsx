import formReducer from './reducers/formReducer';
import budgetListReducer from './reducers/budgetListReducer';
import StoreConfig from './types/storeConfig';
import { initialStates } from './initialStates/initialStates';
import calculateBudget from './functions/calculateBudget';


const mainStore:StoreConfig = {
   reducers: {
      form: formReducer,
      budgetList: budgetListReducer,
   },
   states: {
      form: initialStates.form,
      budgetList: initialStates.budgetList,
      currentBudget: calculateBudget(initialStates.budgetList.budgetList, 'biweekly'),
   }
}

export default mainStore;