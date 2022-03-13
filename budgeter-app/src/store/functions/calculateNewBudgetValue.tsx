import OccuranceConfig from "store/types/occurranceConfig";

export default function calculateNewBudgetValue(itemValue: number, occuranceQuery: OccuranceConfig) {
    let value: number = Infinity;
    switch (occuranceQuery) {
        case 'weekly':
            value = itemValue;
            break;
        case 'biweekly':
            value = (itemValue * 2.00);
            break;
        case 'monthly':
            value = (itemValue * 4.00);
            break;
        case 'semianually':
            value = (itemValue * 26.00);
            break;
        case 'anually':
            value = (itemValue * 52.00);
            break;
        default:
            break;

    }
    return value;
}