/////////////// Partial Required Readonly

interface UserPRR {
    name: string;
    age?: number;
    email: string;
}

type partial = Partial<UserPRR>;
const p1: partial = {};

type required = Required<UserPRR>;
type readonly = Readonly<UserPRR>;

type requiredNReadonly = Required<Readonly<UserPRR>>;

////////////// Omit Pick Extract Exclude
interface PaymentPersistentO {
    id: number;
    sum: number;
    from: string;
    to: string;
}

type PaymentO = Omit<PaymentPersistentO, 'id'>;
type PaymentRequisits = Pick<PaymentPersistentO, 'from' | 'to'>;

type ExtractEx = Extract<'from' | 'to' | PaymentO, string>;
type ExcludeEx = Exclude<'from' | 'to' | Payment, string>;
