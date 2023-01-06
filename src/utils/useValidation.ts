import { RegularExpressions } from './regularExpressions';

const ErrorMessages = {
    isRequired: 'This field is required',
    email: 'Wrong format. Example: test@example.com',
    password: 'Wrong format: only latin chars, at least 8 chars, at least 1 uppercase and lowercase letter, at least 1 punctuation char'
}

interface IValidation {
    formData: any;
    setFormErrors: (state: any) => void;
}

interface IIsNotEmpty {
    formData: any;
    key: string;
    setFormErrors: (state: any) => void;
}

export const UseValidation = () => {
    const isNotEmpty = ({ formData, key, setFormErrors }: IIsNotEmpty) => {
        if (!formData[key]) {
            setFormErrors((state: any) => {
                return {
                    ...state,
                    [key]: ErrorMessages.isRequired
                }
            });
            return false;
        }
        return true;
    };

   const isEmailValid = ({ formData, setFormErrors }: IValidation) => {
        if (!isNotEmpty({ formData, key: 'email', setFormErrors })) return false;

        if (!RegularExpressions.email.test(formData.email)) {
            setFormErrors((state: any) => {
                return {
                    ...state,
                    email: ErrorMessages.email,
                }
            });
            return false;
        }
        return true;
    };

   const isPasswordValid = ({ formData, setFormErrors }: IValidation) => {
       if (!isNotEmpty({ formData, key: 'password', setFormErrors })) return false;

        if (!RegularExpressions.password.test(formData.password)) {
            setFormErrors((state: any) => {
                return {
                    ...state,
                    password: ErrorMessages.password
                }
            });
            return false;
        }
        return true;
   };

   return { isEmailValid, isPasswordValid }
}