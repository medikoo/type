import { EnsureOptions } from '../ensure';

type LengthwiseObject = { length: number } & object;
type ArrayLikeEnsureOptions = { allowString?: boolean } | EnsureOptions;

declare function ensureArrayLike<T>(value: any, options?: ArrayLikeEnsureOptions): T[] | string | LengthwiseObject;
export default ensureArrayLike;
