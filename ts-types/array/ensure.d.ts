import { EnsureFunction, EnsureOptions } from '../ensure';

type EnsureArrayOptions = { ensureItem?: EnsureFunction } | EnsureOptions;

declare function ensureArray<T>(value: any, options?: EnsureArrayOptions): T[];
export default ensureArray;
