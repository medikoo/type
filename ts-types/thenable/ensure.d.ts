import { EnsureFunction, EnsureOptions } from '../ensure';
type ThenableObject = { then: EnsureFunction } & object;

declare function ensureThenable<T>(value: any, options?: EnsureOptions): Promise<T> | ThenableObject;
export default ensureThenable;
