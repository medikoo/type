import { EnsureOptions } from '../ensure';

declare function ensureMap<K, V>(value: any, options?: EnsureOptions): Map<K, V>;
export default ensureMap;
