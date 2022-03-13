import OccuranceConfig from "store/types/occurranceConfig";

export default function calculateItemValue(itemAmount: number, itemOccurrance: OccuranceConfig) {
    let value: number = Infinity;
    switch (itemOccurrance) {
        case 'weekly':
            value = itemAmount;
            break;
        case 'biweekly':
            value = (itemAmount / 2.00);
            break;
        case 'monthly':
            value = (itemAmount / 4.00);
            break;
        case 'semianually':
            value = (itemAmount / 26.00);
            break;
        case 'anually':
            value = (itemAmount / 52.00);
            break;
        default:
            break;

    }
    return value;
}