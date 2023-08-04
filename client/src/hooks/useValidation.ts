import React from 'react';
import { validationsType } from '../types/validationTypes';

export const useValidation = (value:string, validations:validationsType) => {
    const [minLenghtError, setMinLenghtError] = React.useState(false);

    React.useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength': 
                    value.length < validations[validation] ? setMinLenghtError(true) : setMinLenghtError(false); 
                    break;
            }
        }

    }, [value])

    return {
        minLenghtError,
    }

}
