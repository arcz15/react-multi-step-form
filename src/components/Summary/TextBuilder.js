import { useSelector } from 'react-redux';
import { Plans } from '../../redux/formDataSlice.js';

export default function TextBuilder() {

    const data = useSelector((state) => state.formData.data);

    const isYearlyRenewed = data.isYearlyRenewed;

    const mode = isYearlyRenewed ? 'yr' : 'mo';

    const getPlan = () => {
        let text;
        switch (data.plan) {
            case Plans.ARCADE:
                text = 'Arcade';
                break;
            case Plans.ADVANCED:
                text = 'Advanced';
                break;
            case Plans.PRO:
                text = 'Pro';
                break;
            default:
                text = 'ERROR';
        }
        return text + ` (${ isYearlyRenewed ? 'Yearly' : 'Monthly' })`;
    }

    const getCost = () => {
        let cost;
        switch (data.plan) {
            case Plans.ARCADE:
                cost = isYearlyRenewed ? 90 : 9;
                break;
            case Plans.ADVANCED:
                cost = isYearlyRenewed ? 120 : 12;
                break;
            case Plans.PRO:
                cost = isYearlyRenewed ? 150 : 15;
                break;
            default:
                cost = 'ERROR';
        }
        return `$${cost}/${ isYearlyRenewed ? 'yr' : 'mo'}`;
    }

    const getAddonsCost = () => {
        let onlineServiceCost = isYearlyRenewed ? 10 : 1;
        let largerStorageCost = isYearlyRenewed ? 20 : 2;
        let customizableProfileCost = isYearlyRenewed ? 20 : 2;

        return {
            onlineService: `+${onlineServiceCost}/${mode}`,
            largerStorageCost: `+${largerStorageCost}/${mode}`,
            customizableProfileCost: `+${customizableProfileCost}/${mode}`,
        }
    }

    const getTotalCost = () => {
        let cost = 0;
        switch (data.plan) {
            case Plans.ARCADE:
                cost += isYearlyRenewed ? 90 : 9;
                break;
            case Plans.ADVANCED:
                cost += isYearlyRenewed ? 120 : 12;
                break;
            case Plans.PRO:
                cost += isYearlyRenewed ? 150 : 15;
                break;
        }
        if(data.addons.onlineService) {
            cost += isYearlyRenewed ? 10 : 1;
        }
        if(data.addons.largerStorage) {
            cost += isYearlyRenewed ? 20 : 2;
        }
        if(data.addons.customizableProfile) {
            cost += isYearlyRenewed ? 20 : 2;
        }
        return `$${cost}/${mode}`;
    }

    return {
        plan: getPlan(),
        cost: getCost(),
        addonsCost: getAddonsCost(),
        totalCost: getTotalCost(),
    }
}