import { EnsureFunction, EnsureOptions } from '../ensure';

type PlainObjectEnsureOptions = {allowedKeys?: string[], ensurePropertyValue?: EnsureFunction} | EnsureOptions;

declare function ensurePlainObject(value: any, options?: PlainObjectEnsureOptions): object;
export default ensurePlainObject;
