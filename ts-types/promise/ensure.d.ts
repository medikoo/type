import { EnsureOptions } from '../ensure';

declare function ensurePromise<T>(value: any, options?: EnsureOptions): Promise<T>;
export default ensurePromise;
