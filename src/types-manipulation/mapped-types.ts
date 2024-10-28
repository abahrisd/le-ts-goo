type Modifier = 'read' | 'updater' | 'create';

type UserRolesMpd = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier,
}

type ModifierToAccess<Type> = {
    // +readonly [Property in keyof Type]-?: boolean; //-? - all required, +readonly - all readonly
    +readonly [Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccessadminPanel'>]-?: boolean; //-? - all required, +readonly - all readonly
}

type UserAccess2 = ModifierToAccess<UserRolesMpd>; // rely on UserRolesMpd

// didn't update in case of update UserRolesMpd
type UserAccess1 = {
    customers?: boolean,
    projects?: boolean,
    adminPanel?: boolean,
}