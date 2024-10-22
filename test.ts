
const tetsObj: TestObj = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
};
declare const NominalType: unique symbol

interface TestObj {
    officeId: number;
    isOpened: boolean;
    contacts: Contacts;
}

type PhoneString = string; // & { readonly [NominalType]: 'PhoneString' };
type EmailString = string; // & { readonly [NominalType]: 'EmailString' };

interface Address {
    city: string;
}

interface Contacts {
    "phone": PhoneString,
    "email": EmailString,
    "address": Address
}