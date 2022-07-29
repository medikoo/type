import { EnsureFunction, EnsureOptions } from '../ensure';

declare function ensureConstructor(value: any, options?: EnsureOptions): EnsureFunction | object;
export default ensureConstructor;
