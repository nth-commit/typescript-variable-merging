declare function ensureTypeIsExactly<T, U>(): T extends U ? U extends T ? true : false : false;

const isDeclarationFileUsed: true = ensureTypeIsExactly<typeof checkThisDeclarationFileIsUsed, 'yup'>();

const isLocationTypeMerged: true = ensureTypeIsExactly<typeof location, Location | unknown>(); // Error: Type 'false' is not assignable to type 'true'.
