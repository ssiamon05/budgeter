import FormConfig from "store/types/formConfig";

export const initialFormState: FormConfig = {
    'hasSubmit': false,
    budgetName: '',
    budgetType: 'income',
    amount: 0,
    occurance: 'monthly',
    id: Infinity
}

function formReducer(action: {type:string, payload:FormConfig}, state: FormConfig = initialFormState) {
    switch (action.type) {
        case 'updateAmount':
            return {
                ...state,
                'amount': action.payload.amount
            }
            break;
        case 'updateBudgetType':
            return {
                ...state,
                'budgetType': action.payload.budgetType
            }
            break;
        case 'updateBudgetName':
            return {
                ...state,
                'budgetName': action.payload.budgetName
            }
            break;
        case 'updateHasSubmit':
            return {
                ...state,
                'hasSubmit': action.payload.hasSubmit
            }
            break;
        case 'resetForm':
            return {
                ...state
            }
            break;
        default:
            return action.payload;
            break;

    }
}

export default formReducer;