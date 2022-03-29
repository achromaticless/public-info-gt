const CUI_REG_EXP = /^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/;

const MUNICIPALITIES_BY_DEPARTMENT = [ 17, 8, 16, 16, 13, 14, 19, 8, 24, 21, 9, 30, 32, 21, 8, 17, 14, 5, 11, 11, 7, 17];

export function isValidCUI(cui: string): boolean {
    if (CUI_REG_EXP.test(cui)) {
        const normalizedCUI = cui.replace(/\s/, '');

        const numberAsString = normalizedCUI.substring(0, 8);
        const verification = parseInt(normalizedCUI.substring(8, 9));
        const department = parseInt(normalizedCUI.substring(9, 11));
        const municipality = parseInt(normalizedCUI.substring(11, 13));

        const isValidDepartment = department > 0 && department <= MUNICIPALITIES_BY_DEPARTMENT.length;
        const isValidMunicipality = municipality > 0 && municipality <= MUNICIPALITIES_BY_DEPARTMENT[department - 1];

        if (isValidDepartment && isValidMunicipality) {
            let total = 0;
            for (let i = 0; i < numberAsString.length; i++) {
                const numberInIndex = parseInt(numberAsString[i]);
                if (!isNaN(numberInIndex)) {
                    total += numberInIndex * (i + 2);
                }
            }

            const module = total % 11;

            return module === verification;
        }

    }
    return false;
}