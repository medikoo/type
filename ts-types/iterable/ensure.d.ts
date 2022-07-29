import { EnsureFunction, EnsureOptions } from '../ensure';

type IterableEnsureOptions = { ensureItem?: EnsureFunction, allowString?: boolean, denyEmpty?: boolean} | EnsureOptions;

declare function ensureIterable<T>(value: any, options?: IterableEnsureOptions): T[];
export default ensureIterable;
