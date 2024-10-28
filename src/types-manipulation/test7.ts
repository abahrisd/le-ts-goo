
interface IForm {
    name: string;
    // surname: string;
    password: string;
}

const form: IForm = {
    name: 'Vasya',
    // surname: 'Vasin',
    password: '123',
}

////////////////////////////
type IFormValidationResult = {
    isValid: true,
} | {
    isValid: false,
    errorMessage: string
}

type IFormValidation<T> = {
    [Property in keyof T]: IFormValidationResult;
}

const formValidation: IFormValidation<IForm> = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'Password is required'},
}