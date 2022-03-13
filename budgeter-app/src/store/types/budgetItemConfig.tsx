import OccurranceConfig from  './occurranceConfig';

interface BudgetItemConfig {
    budgetName: string,
    budgetType: 'income' | 'expense',
    amount: number,
    occurance: OccurranceConfig,
    id:number
}

export default BudgetItemConfig;