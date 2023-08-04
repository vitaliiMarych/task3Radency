import { useRef, useState } from "react";
import { validationsType } from "../types/validationTypes";
import { useValidation } from "./useValidation";

export const useInput = (value: string, validations: validationsType) => {
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations)

    const onBlur = (e: React.FocusEvent) => {
        setDirty(true);
    }

    return {
        isDirty,
        onBlur,
        ...valid
    }

}
