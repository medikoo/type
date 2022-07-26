export type EnsureFunction = (...args: any[]) => any;
export interface EnsureOptions {
	name?: string;
	isOptional?: boolean;
	default?: any;
	errorMessage?: string;
	errorCode?: number;
	Error?: ErrorConstructor;
}

type ValidationDatum = [argumentName: string, inputValue: any, ensureFunction: EnsureFunction, options?: object];
type ValidationDatumList = ValidationDatum[];

declare function ensure<T>(...args: [...ValidationDatumList, EnsureOptions]): T;
declare function ensure<T>(...args: [...ValidationDatumList]): T;
export default ensure;
