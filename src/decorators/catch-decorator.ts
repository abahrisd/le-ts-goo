class UserCatched {
    name: string;

    @CatchDec()
    setName(name: string) {
        throw new Error("Method not implemented.");
    }
}
function CatchDec(isThrow = true) {
    return (target: Object,
            propertyKey: string | Symbol,
            descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ) => {
        const oldValue = descriptor.value;
        descriptor.value = async (...args: any) => {
            try {
                return await oldValue?.apply(target, args);
            } catch (error) {
                if (error instanceof Error) {
                    console.log('Error occurred')

                    if (isThrow) {
                        throw error;
                    }
                }
            }
        }
    }
}

console.log(new UserCatched().setName(''),)