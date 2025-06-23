
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model gameweeks
 * 
 */
export type gameweeks = $Result.DefaultSelection<Prisma.$gameweeksPayload>
/**
 * Model merged_gw_summary
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type merged_gw_summary = $Result.DefaultSelection<Prisma.$merged_gw_summaryPayload>
/**
 * Model mergedgw
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type mergedgw = $Result.DefaultSelection<Prisma.$mergedgwPayload>
/**
 * Model player_stats
 * 
 */
export type player_stats = $Result.DefaultSelection<Prisma.$player_statsPayload>
/**
 * Model players
 * 
 */
export type players = $Result.DefaultSelection<Prisma.$playersPayload>
/**
 * Model teams
 * 
 */
export type teams = $Result.DefaultSelection<Prisma.$teamsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Gameweeks
 * const gameweeks = await prisma.gameweeks.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Gameweeks
   * const gameweeks = await prisma.gameweeks.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.gameweeks`: Exposes CRUD operations for the **gameweeks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gameweeks
    * const gameweeks = await prisma.gameweeks.findMany()
    * ```
    */
  get gameweeks(): Prisma.gameweeksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.merged_gw_summary`: Exposes CRUD operations for the **merged_gw_summary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merged_gw_summaries
    * const merged_gw_summaries = await prisma.merged_gw_summary.findMany()
    * ```
    */
  get merged_gw_summary(): Prisma.merged_gw_summaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mergedgw`: Exposes CRUD operations for the **mergedgw** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mergedgws
    * const mergedgws = await prisma.mergedgw.findMany()
    * ```
    */
  get mergedgw(): Prisma.mergedgwDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player_stats`: Exposes CRUD operations for the **player_stats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Player_stats
    * const player_stats = await prisma.player_stats.findMany()
    * ```
    */
  get player_stats(): Prisma.player_statsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.players`: Exposes CRUD operations for the **players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.players.findMany()
    * ```
    */
  get players(): Prisma.playersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.teamsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    gameweeks: 'gameweeks',
    merged_gw_summary: 'merged_gw_summary',
    mergedgw: 'mergedgw',
    player_stats: 'player_stats',
    players: 'players',
    teams: 'teams'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "gameweeks" | "merged_gw_summary" | "mergedgw" | "player_stats" | "players" | "teams"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      gameweeks: {
        payload: Prisma.$gameweeksPayload<ExtArgs>
        fields: Prisma.gameweeksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gameweeksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameweeksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gameweeksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameweeksPayload>
          }
          findFirst: {
            args: Prisma.gameweeksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameweeksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gameweeksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameweeksPayload>
          }
          findMany: {
            args: Prisma.gameweeksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameweeksPayload>[]
          }
          create: {
            args: Prisma.gameweeksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameweeksPayload>
          }
          createMany: {
            args: Prisma.gameweeksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gameweeksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameweeksPayload>[]
          }
          delete: {
            args: Prisma.gameweeksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameweeksPayload>
          }
          update: {
            args: Prisma.gameweeksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameweeksPayload>
          }
          deleteMany: {
            args: Prisma.gameweeksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gameweeksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gameweeksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameweeksPayload>[]
          }
          upsert: {
            args: Prisma.gameweeksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gameweeksPayload>
          }
          aggregate: {
            args: Prisma.GameweeksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameweeks>
          }
          groupBy: {
            args: Prisma.gameweeksGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameweeksGroupByOutputType>[]
          }
          count: {
            args: Prisma.gameweeksCountArgs<ExtArgs>
            result: $Utils.Optional<GameweeksCountAggregateOutputType> | number
          }
        }
      }
      merged_gw_summary: {
        payload: Prisma.$merged_gw_summaryPayload<ExtArgs>
        fields: Prisma.merged_gw_summaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.merged_gw_summaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merged_gw_summaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.merged_gw_summaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merged_gw_summaryPayload>
          }
          findFirst: {
            args: Prisma.merged_gw_summaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merged_gw_summaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.merged_gw_summaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merged_gw_summaryPayload>
          }
          findMany: {
            args: Prisma.merged_gw_summaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merged_gw_summaryPayload>[]
          }
          create: {
            args: Prisma.merged_gw_summaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merged_gw_summaryPayload>
          }
          createMany: {
            args: Prisma.merged_gw_summaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.merged_gw_summaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merged_gw_summaryPayload>[]
          }
          delete: {
            args: Prisma.merged_gw_summaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merged_gw_summaryPayload>
          }
          update: {
            args: Prisma.merged_gw_summaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merged_gw_summaryPayload>
          }
          deleteMany: {
            args: Prisma.merged_gw_summaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.merged_gw_summaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.merged_gw_summaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merged_gw_summaryPayload>[]
          }
          upsert: {
            args: Prisma.merged_gw_summaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merged_gw_summaryPayload>
          }
          aggregate: {
            args: Prisma.Merged_gw_summaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerged_gw_summary>
          }
          groupBy: {
            args: Prisma.merged_gw_summaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Merged_gw_summaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.merged_gw_summaryCountArgs<ExtArgs>
            result: $Utils.Optional<Merged_gw_summaryCountAggregateOutputType> | number
          }
        }
      }
      mergedgw: {
        payload: Prisma.$mergedgwPayload<ExtArgs>
        fields: Prisma.mergedgwFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mergedgwFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mergedgwPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mergedgwFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mergedgwPayload>
          }
          findFirst: {
            args: Prisma.mergedgwFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mergedgwPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mergedgwFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mergedgwPayload>
          }
          findMany: {
            args: Prisma.mergedgwFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mergedgwPayload>[]
          }
          create: {
            args: Prisma.mergedgwCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mergedgwPayload>
          }
          createMany: {
            args: Prisma.mergedgwCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mergedgwCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mergedgwPayload>[]
          }
          delete: {
            args: Prisma.mergedgwDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mergedgwPayload>
          }
          update: {
            args: Prisma.mergedgwUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mergedgwPayload>
          }
          deleteMany: {
            args: Prisma.mergedgwDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mergedgwUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mergedgwUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mergedgwPayload>[]
          }
          upsert: {
            args: Prisma.mergedgwUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mergedgwPayload>
          }
          aggregate: {
            args: Prisma.MergedgwAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMergedgw>
          }
          groupBy: {
            args: Prisma.mergedgwGroupByArgs<ExtArgs>
            result: $Utils.Optional<MergedgwGroupByOutputType>[]
          }
          count: {
            args: Prisma.mergedgwCountArgs<ExtArgs>
            result: $Utils.Optional<MergedgwCountAggregateOutputType> | number
          }
        }
      }
      player_stats: {
        payload: Prisma.$player_statsPayload<ExtArgs>
        fields: Prisma.player_statsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.player_statsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.player_statsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          findFirst: {
            args: Prisma.player_statsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.player_statsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          findMany: {
            args: Prisma.player_statsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>[]
          }
          create: {
            args: Prisma.player_statsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          createMany: {
            args: Prisma.player_statsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.player_statsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>[]
          }
          delete: {
            args: Prisma.player_statsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          update: {
            args: Prisma.player_statsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          deleteMany: {
            args: Prisma.player_statsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.player_statsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.player_statsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>[]
          }
          upsert: {
            args: Prisma.player_statsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_statsPayload>
          }
          aggregate: {
            args: Prisma.Player_statsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer_stats>
          }
          groupBy: {
            args: Prisma.player_statsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Player_statsGroupByOutputType>[]
          }
          count: {
            args: Prisma.player_statsCountArgs<ExtArgs>
            result: $Utils.Optional<Player_statsCountAggregateOutputType> | number
          }
        }
      }
      players: {
        payload: Prisma.$playersPayload<ExtArgs>
        fields: Prisma.playersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          findFirst: {
            args: Prisma.playersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          findMany: {
            args: Prisma.playersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>[]
          }
          create: {
            args: Prisma.playersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          createMany: {
            args: Prisma.playersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>[]
          }
          delete: {
            args: Prisma.playersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          update: {
            args: Prisma.playersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          deleteMany: {
            args: Prisma.playersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.playersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>[]
          }
          upsert: {
            args: Prisma.playersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playersPayload>
          }
          aggregate: {
            args: Prisma.PlayersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayers>
          }
          groupBy: {
            args: Prisma.playersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.playersCountArgs<ExtArgs>
            result: $Utils.Optional<PlayersCountAggregateOutputType> | number
          }
        }
      }
      teams: {
        payload: Prisma.$teamsPayload<ExtArgs>
        fields: Prisma.teamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          findFirst: {
            args: Prisma.teamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          findMany: {
            args: Prisma.teamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          create: {
            args: Prisma.teamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          createMany: {
            args: Prisma.teamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          delete: {
            args: Prisma.teamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          update: {
            args: Prisma.teamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          deleteMany: {
            args: Prisma.teamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.teamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          upsert: {
            args: Prisma.teamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          aggregate: {
            args: Prisma.TeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeams>
          }
          groupBy: {
            args: Prisma.teamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    gameweeks?: gameweeksOmit
    merged_gw_summary?: merged_gw_summaryOmit
    mergedgw?: mergedgwOmit
    player_stats?: player_statsOmit
    players?: playersOmit
    teams?: teamsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GameweeksCountOutputType
   */

  export type GameweeksCountOutputType = {
    player_stats: number
  }

  export type GameweeksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player_stats?: boolean | GameweeksCountOutputTypeCountPlayer_statsArgs
  }

  // Custom InputTypes
  /**
   * GameweeksCountOutputType without action
   */
  export type GameweeksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameweeksCountOutputType
     */
    select?: GameweeksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameweeksCountOutputType without action
   */
  export type GameweeksCountOutputTypeCountPlayer_statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_statsWhereInput
  }


  /**
   * Count Type PlayersCountOutputType
   */

  export type PlayersCountOutputType = {
    player_stats: number
  }

  export type PlayersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player_stats?: boolean | PlayersCountOutputTypeCountPlayer_statsArgs
  }

  // Custom InputTypes
  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayersCountOutputType
     */
    select?: PlayersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeCountPlayer_statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_statsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model gameweeks
   */

  export type AggregateGameweeks = {
    _count: GameweeksCountAggregateOutputType | null
    _avg: GameweeksAvgAggregateOutputType | null
    _sum: GameweeksSumAggregateOutputType | null
    _min: GameweeksMinAggregateOutputType | null
    _max: GameweeksMaxAggregateOutputType | null
  }

  export type GameweeksAvgAggregateOutputType = {
    gw_id: number | null
    gw_number: number | null
  }

  export type GameweeksSumAggregateOutputType = {
    gw_id: number | null
    gw_number: number | null
  }

  export type GameweeksMinAggregateOutputType = {
    gw_id: number | null
    season: string | null
    gw_number: number | null
    start_date: Date | null
    end_date: Date | null
  }

  export type GameweeksMaxAggregateOutputType = {
    gw_id: number | null
    season: string | null
    gw_number: number | null
    start_date: Date | null
    end_date: Date | null
  }

  export type GameweeksCountAggregateOutputType = {
    gw_id: number
    season: number
    gw_number: number
    start_date: number
    end_date: number
    _all: number
  }


  export type GameweeksAvgAggregateInputType = {
    gw_id?: true
    gw_number?: true
  }

  export type GameweeksSumAggregateInputType = {
    gw_id?: true
    gw_number?: true
  }

  export type GameweeksMinAggregateInputType = {
    gw_id?: true
    season?: true
    gw_number?: true
    start_date?: true
    end_date?: true
  }

  export type GameweeksMaxAggregateInputType = {
    gw_id?: true
    season?: true
    gw_number?: true
    start_date?: true
    end_date?: true
  }

  export type GameweeksCountAggregateInputType = {
    gw_id?: true
    season?: true
    gw_number?: true
    start_date?: true
    end_date?: true
    _all?: true
  }

  export type GameweeksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gameweeks to aggregate.
     */
    where?: gameweeksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameweeks to fetch.
     */
    orderBy?: gameweeksOrderByWithRelationInput | gameweeksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gameweeksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameweeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameweeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gameweeks
    **/
    _count?: true | GameweeksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameweeksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameweeksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameweeksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameweeksMaxAggregateInputType
  }

  export type GetGameweeksAggregateType<T extends GameweeksAggregateArgs> = {
        [P in keyof T & keyof AggregateGameweeks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameweeks[P]>
      : GetScalarType<T[P], AggregateGameweeks[P]>
  }




  export type gameweeksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameweeksWhereInput
    orderBy?: gameweeksOrderByWithAggregationInput | gameweeksOrderByWithAggregationInput[]
    by: GameweeksScalarFieldEnum[] | GameweeksScalarFieldEnum
    having?: gameweeksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameweeksCountAggregateInputType | true
    _avg?: GameweeksAvgAggregateInputType
    _sum?: GameweeksSumAggregateInputType
    _min?: GameweeksMinAggregateInputType
    _max?: GameweeksMaxAggregateInputType
  }

  export type GameweeksGroupByOutputType = {
    gw_id: number
    season: string
    gw_number: number
    start_date: Date | null
    end_date: Date | null
    _count: GameweeksCountAggregateOutputType | null
    _avg: GameweeksAvgAggregateOutputType | null
    _sum: GameweeksSumAggregateOutputType | null
    _min: GameweeksMinAggregateOutputType | null
    _max: GameweeksMaxAggregateOutputType | null
  }

  type GetGameweeksGroupByPayload<T extends gameweeksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameweeksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameweeksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameweeksGroupByOutputType[P]>
            : GetScalarType<T[P], GameweeksGroupByOutputType[P]>
        }
      >
    >


  export type gameweeksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gw_id?: boolean
    season?: boolean
    gw_number?: boolean
    start_date?: boolean
    end_date?: boolean
    player_stats?: boolean | gameweeks$player_statsArgs<ExtArgs>
    _count?: boolean | GameweeksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameweeks"]>

  export type gameweeksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gw_id?: boolean
    season?: boolean
    gw_number?: boolean
    start_date?: boolean
    end_date?: boolean
  }, ExtArgs["result"]["gameweeks"]>

  export type gameweeksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gw_id?: boolean
    season?: boolean
    gw_number?: boolean
    start_date?: boolean
    end_date?: boolean
  }, ExtArgs["result"]["gameweeks"]>

  export type gameweeksSelectScalar = {
    gw_id?: boolean
    season?: boolean
    gw_number?: boolean
    start_date?: boolean
    end_date?: boolean
  }

  export type gameweeksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gw_id" | "season" | "gw_number" | "start_date" | "end_date", ExtArgs["result"]["gameweeks"]>
  export type gameweeksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player_stats?: boolean | gameweeks$player_statsArgs<ExtArgs>
    _count?: boolean | GameweeksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gameweeksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type gameweeksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $gameweeksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gameweeks"
    objects: {
      player_stats: Prisma.$player_statsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      gw_id: number
      season: string
      gw_number: number
      start_date: Date | null
      end_date: Date | null
    }, ExtArgs["result"]["gameweeks"]>
    composites: {}
  }

  type gameweeksGetPayload<S extends boolean | null | undefined | gameweeksDefaultArgs> = $Result.GetResult<Prisma.$gameweeksPayload, S>

  type gameweeksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gameweeksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameweeksCountAggregateInputType | true
    }

  export interface gameweeksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gameweeks'], meta: { name: 'gameweeks' } }
    /**
     * Find zero or one Gameweeks that matches the filter.
     * @param {gameweeksFindUniqueArgs} args - Arguments to find a Gameweeks
     * @example
     * // Get one Gameweeks
     * const gameweeks = await prisma.gameweeks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gameweeksFindUniqueArgs>(args: SelectSubset<T, gameweeksFindUniqueArgs<ExtArgs>>): Prisma__gameweeksClient<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gameweeks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gameweeksFindUniqueOrThrowArgs} args - Arguments to find a Gameweeks
     * @example
     * // Get one Gameweeks
     * const gameweeks = await prisma.gameweeks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gameweeksFindUniqueOrThrowArgs>(args: SelectSubset<T, gameweeksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gameweeksClient<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gameweeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameweeksFindFirstArgs} args - Arguments to find a Gameweeks
     * @example
     * // Get one Gameweeks
     * const gameweeks = await prisma.gameweeks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gameweeksFindFirstArgs>(args?: SelectSubset<T, gameweeksFindFirstArgs<ExtArgs>>): Prisma__gameweeksClient<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gameweeks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameweeksFindFirstOrThrowArgs} args - Arguments to find a Gameweeks
     * @example
     * // Get one Gameweeks
     * const gameweeks = await prisma.gameweeks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gameweeksFindFirstOrThrowArgs>(args?: SelectSubset<T, gameweeksFindFirstOrThrowArgs<ExtArgs>>): Prisma__gameweeksClient<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gameweeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameweeksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gameweeks
     * const gameweeks = await prisma.gameweeks.findMany()
     * 
     * // Get first 10 Gameweeks
     * const gameweeks = await prisma.gameweeks.findMany({ take: 10 })
     * 
     * // Only select the `gw_id`
     * const gameweeksWithGw_idOnly = await prisma.gameweeks.findMany({ select: { gw_id: true } })
     * 
     */
    findMany<T extends gameweeksFindManyArgs>(args?: SelectSubset<T, gameweeksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gameweeks.
     * @param {gameweeksCreateArgs} args - Arguments to create a Gameweeks.
     * @example
     * // Create one Gameweeks
     * const Gameweeks = await prisma.gameweeks.create({
     *   data: {
     *     // ... data to create a Gameweeks
     *   }
     * })
     * 
     */
    create<T extends gameweeksCreateArgs>(args: SelectSubset<T, gameweeksCreateArgs<ExtArgs>>): Prisma__gameweeksClient<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gameweeks.
     * @param {gameweeksCreateManyArgs} args - Arguments to create many Gameweeks.
     * @example
     * // Create many Gameweeks
     * const gameweeks = await prisma.gameweeks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gameweeksCreateManyArgs>(args?: SelectSubset<T, gameweeksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gameweeks and returns the data saved in the database.
     * @param {gameweeksCreateManyAndReturnArgs} args - Arguments to create many Gameweeks.
     * @example
     * // Create many Gameweeks
     * const gameweeks = await prisma.gameweeks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gameweeks and only return the `gw_id`
     * const gameweeksWithGw_idOnly = await prisma.gameweeks.createManyAndReturn({
     *   select: { gw_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gameweeksCreateManyAndReturnArgs>(args?: SelectSubset<T, gameweeksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gameweeks.
     * @param {gameweeksDeleteArgs} args - Arguments to delete one Gameweeks.
     * @example
     * // Delete one Gameweeks
     * const Gameweeks = await prisma.gameweeks.delete({
     *   where: {
     *     // ... filter to delete one Gameweeks
     *   }
     * })
     * 
     */
    delete<T extends gameweeksDeleteArgs>(args: SelectSubset<T, gameweeksDeleteArgs<ExtArgs>>): Prisma__gameweeksClient<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gameweeks.
     * @param {gameweeksUpdateArgs} args - Arguments to update one Gameweeks.
     * @example
     * // Update one Gameweeks
     * const gameweeks = await prisma.gameweeks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gameweeksUpdateArgs>(args: SelectSubset<T, gameweeksUpdateArgs<ExtArgs>>): Prisma__gameweeksClient<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gameweeks.
     * @param {gameweeksDeleteManyArgs} args - Arguments to filter Gameweeks to delete.
     * @example
     * // Delete a few Gameweeks
     * const { count } = await prisma.gameweeks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gameweeksDeleteManyArgs>(args?: SelectSubset<T, gameweeksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gameweeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameweeksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gameweeks
     * const gameweeks = await prisma.gameweeks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gameweeksUpdateManyArgs>(args: SelectSubset<T, gameweeksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gameweeks and returns the data updated in the database.
     * @param {gameweeksUpdateManyAndReturnArgs} args - Arguments to update many Gameweeks.
     * @example
     * // Update many Gameweeks
     * const gameweeks = await prisma.gameweeks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gameweeks and only return the `gw_id`
     * const gameweeksWithGw_idOnly = await prisma.gameweeks.updateManyAndReturn({
     *   select: { gw_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends gameweeksUpdateManyAndReturnArgs>(args: SelectSubset<T, gameweeksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gameweeks.
     * @param {gameweeksUpsertArgs} args - Arguments to update or create a Gameweeks.
     * @example
     * // Update or create a Gameweeks
     * const gameweeks = await prisma.gameweeks.upsert({
     *   create: {
     *     // ... data to create a Gameweeks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gameweeks we want to update
     *   }
     * })
     */
    upsert<T extends gameweeksUpsertArgs>(args: SelectSubset<T, gameweeksUpsertArgs<ExtArgs>>): Prisma__gameweeksClient<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gameweeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameweeksCountArgs} args - Arguments to filter Gameweeks to count.
     * @example
     * // Count the number of Gameweeks
     * const count = await prisma.gameweeks.count({
     *   where: {
     *     // ... the filter for the Gameweeks we want to count
     *   }
     * })
    **/
    count<T extends gameweeksCountArgs>(
      args?: Subset<T, gameweeksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameweeksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gameweeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameweeksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameweeksAggregateArgs>(args: Subset<T, GameweeksAggregateArgs>): Prisma.PrismaPromise<GetGameweeksAggregateType<T>>

    /**
     * Group by Gameweeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameweeksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gameweeksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gameweeksGroupByArgs['orderBy'] }
        : { orderBy?: gameweeksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gameweeksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameweeksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gameweeks model
   */
  readonly fields: gameweeksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gameweeks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gameweeksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player_stats<T extends gameweeks$player_statsArgs<ExtArgs> = {}>(args?: Subset<T, gameweeks$player_statsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gameweeks model
   */
  interface gameweeksFieldRefs {
    readonly gw_id: FieldRef<"gameweeks", 'Int'>
    readonly season: FieldRef<"gameweeks", 'String'>
    readonly gw_number: FieldRef<"gameweeks", 'Int'>
    readonly start_date: FieldRef<"gameweeks", 'DateTime'>
    readonly end_date: FieldRef<"gameweeks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gameweeks findUnique
   */
  export type gameweeksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameweeksInclude<ExtArgs> | null
    /**
     * Filter, which gameweeks to fetch.
     */
    where: gameweeksWhereUniqueInput
  }

  /**
   * gameweeks findUniqueOrThrow
   */
  export type gameweeksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameweeksInclude<ExtArgs> | null
    /**
     * Filter, which gameweeks to fetch.
     */
    where: gameweeksWhereUniqueInput
  }

  /**
   * gameweeks findFirst
   */
  export type gameweeksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameweeksInclude<ExtArgs> | null
    /**
     * Filter, which gameweeks to fetch.
     */
    where?: gameweeksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameweeks to fetch.
     */
    orderBy?: gameweeksOrderByWithRelationInput | gameweeksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gameweeks.
     */
    cursor?: gameweeksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameweeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameweeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gameweeks.
     */
    distinct?: GameweeksScalarFieldEnum | GameweeksScalarFieldEnum[]
  }

  /**
   * gameweeks findFirstOrThrow
   */
  export type gameweeksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameweeksInclude<ExtArgs> | null
    /**
     * Filter, which gameweeks to fetch.
     */
    where?: gameweeksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameweeks to fetch.
     */
    orderBy?: gameweeksOrderByWithRelationInput | gameweeksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gameweeks.
     */
    cursor?: gameweeksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameweeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameweeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gameweeks.
     */
    distinct?: GameweeksScalarFieldEnum | GameweeksScalarFieldEnum[]
  }

  /**
   * gameweeks findMany
   */
  export type gameweeksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameweeksInclude<ExtArgs> | null
    /**
     * Filter, which gameweeks to fetch.
     */
    where?: gameweeksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gameweeks to fetch.
     */
    orderBy?: gameweeksOrderByWithRelationInput | gameweeksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gameweeks.
     */
    cursor?: gameweeksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gameweeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gameweeks.
     */
    skip?: number
    distinct?: GameweeksScalarFieldEnum | GameweeksScalarFieldEnum[]
  }

  /**
   * gameweeks create
   */
  export type gameweeksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameweeksInclude<ExtArgs> | null
    /**
     * The data needed to create a gameweeks.
     */
    data: XOR<gameweeksCreateInput, gameweeksUncheckedCreateInput>
  }

  /**
   * gameweeks createMany
   */
  export type gameweeksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gameweeks.
     */
    data: gameweeksCreateManyInput | gameweeksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gameweeks createManyAndReturn
   */
  export type gameweeksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * The data used to create many gameweeks.
     */
    data: gameweeksCreateManyInput | gameweeksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gameweeks update
   */
  export type gameweeksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameweeksInclude<ExtArgs> | null
    /**
     * The data needed to update a gameweeks.
     */
    data: XOR<gameweeksUpdateInput, gameweeksUncheckedUpdateInput>
    /**
     * Choose, which gameweeks to update.
     */
    where: gameweeksWhereUniqueInput
  }

  /**
   * gameweeks updateMany
   */
  export type gameweeksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gameweeks.
     */
    data: XOR<gameweeksUpdateManyMutationInput, gameweeksUncheckedUpdateManyInput>
    /**
     * Filter which gameweeks to update
     */
    where?: gameweeksWhereInput
    /**
     * Limit how many gameweeks to update.
     */
    limit?: number
  }

  /**
   * gameweeks updateManyAndReturn
   */
  export type gameweeksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * The data used to update gameweeks.
     */
    data: XOR<gameweeksUpdateManyMutationInput, gameweeksUncheckedUpdateManyInput>
    /**
     * Filter which gameweeks to update
     */
    where?: gameweeksWhereInput
    /**
     * Limit how many gameweeks to update.
     */
    limit?: number
  }

  /**
   * gameweeks upsert
   */
  export type gameweeksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameweeksInclude<ExtArgs> | null
    /**
     * The filter to search for the gameweeks to update in case it exists.
     */
    where: gameweeksWhereUniqueInput
    /**
     * In case the gameweeks found by the `where` argument doesn't exist, create a new gameweeks with this data.
     */
    create: XOR<gameweeksCreateInput, gameweeksUncheckedCreateInput>
    /**
     * In case the gameweeks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gameweeksUpdateInput, gameweeksUncheckedUpdateInput>
  }

  /**
   * gameweeks delete
   */
  export type gameweeksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameweeksInclude<ExtArgs> | null
    /**
     * Filter which gameweeks to delete.
     */
    where: gameweeksWhereUniqueInput
  }

  /**
   * gameweeks deleteMany
   */
  export type gameweeksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gameweeks to delete
     */
    where?: gameweeksWhereInput
    /**
     * Limit how many gameweeks to delete.
     */
    limit?: number
  }

  /**
   * gameweeks.player_stats
   */
  export type gameweeks$player_statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
    where?: player_statsWhereInput
    orderBy?: player_statsOrderByWithRelationInput | player_statsOrderByWithRelationInput[]
    cursor?: player_statsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Player_statsScalarFieldEnum | Player_statsScalarFieldEnum[]
  }

  /**
   * gameweeks without action
   */
  export type gameweeksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameweeksInclude<ExtArgs> | null
  }


  /**
   * Model merged_gw_summary
   */

  export type AggregateMerged_gw_summary = {
    _count: Merged_gw_summaryCountAggregateOutputType | null
    _avg: Merged_gw_summaryAvgAggregateOutputType | null
    _sum: Merged_gw_summarySumAggregateOutputType | null
    _min: Merged_gw_summaryMinAggregateOutputType | null
    _max: Merged_gw_summaryMaxAggregateOutputType | null
  }

  export type Merged_gw_summaryAvgAggregateOutputType = {
    element: number | null
    games_played: number | null
    total_minutes: number | null
    total_goals: number | null
    total_assists: number | null
    total_clean_sheets: number | null
    yellow_cards: number | null
    red_cards: number | null
    total_points: number | null
    avg_value: number | null
    avg_xp: Decimal | null
    first_gw: number | null
    last_gw: number | null
  }

  export type Merged_gw_summarySumAggregateOutputType = {
    element: number | null
    games_played: bigint | null
    total_minutes: bigint | null
    total_goals: bigint | null
    total_assists: bigint | null
    total_clean_sheets: bigint | null
    yellow_cards: bigint | null
    red_cards: bigint | null
    total_points: bigint | null
    avg_value: number | null
    avg_xp: Decimal | null
    first_gw: number | null
    last_gw: number | null
  }

  export type Merged_gw_summaryMinAggregateOutputType = {
    element: number | null
    name: string | null
    position: string | null
    team: string | null
    games_played: bigint | null
    total_minutes: bigint | null
    total_goals: bigint | null
    total_assists: bigint | null
    total_clean_sheets: bigint | null
    yellow_cards: bigint | null
    red_cards: bigint | null
    total_points: bigint | null
    avg_value: number | null
    avg_xp: Decimal | null
    first_gw: number | null
    last_gw: number | null
  }

  export type Merged_gw_summaryMaxAggregateOutputType = {
    element: number | null
    name: string | null
    position: string | null
    team: string | null
    games_played: bigint | null
    total_minutes: bigint | null
    total_goals: bigint | null
    total_assists: bigint | null
    total_clean_sheets: bigint | null
    yellow_cards: bigint | null
    red_cards: bigint | null
    total_points: bigint | null
    avg_value: number | null
    avg_xp: Decimal | null
    first_gw: number | null
    last_gw: number | null
  }

  export type Merged_gw_summaryCountAggregateOutputType = {
    element: number
    name: number
    position: number
    team: number
    games_played: number
    total_minutes: number
    total_goals: number
    total_assists: number
    total_clean_sheets: number
    yellow_cards: number
    red_cards: number
    total_points: number
    avg_value: number
    avg_xp: number
    first_gw: number
    last_gw: number
    _all: number
  }


  export type Merged_gw_summaryAvgAggregateInputType = {
    element?: true
    games_played?: true
    total_minutes?: true
    total_goals?: true
    total_assists?: true
    total_clean_sheets?: true
    yellow_cards?: true
    red_cards?: true
    total_points?: true
    avg_value?: true
    avg_xp?: true
    first_gw?: true
    last_gw?: true
  }

  export type Merged_gw_summarySumAggregateInputType = {
    element?: true
    games_played?: true
    total_minutes?: true
    total_goals?: true
    total_assists?: true
    total_clean_sheets?: true
    yellow_cards?: true
    red_cards?: true
    total_points?: true
    avg_value?: true
    avg_xp?: true
    first_gw?: true
    last_gw?: true
  }

  export type Merged_gw_summaryMinAggregateInputType = {
    element?: true
    name?: true
    position?: true
    team?: true
    games_played?: true
    total_minutes?: true
    total_goals?: true
    total_assists?: true
    total_clean_sheets?: true
    yellow_cards?: true
    red_cards?: true
    total_points?: true
    avg_value?: true
    avg_xp?: true
    first_gw?: true
    last_gw?: true
  }

  export type Merged_gw_summaryMaxAggregateInputType = {
    element?: true
    name?: true
    position?: true
    team?: true
    games_played?: true
    total_minutes?: true
    total_goals?: true
    total_assists?: true
    total_clean_sheets?: true
    yellow_cards?: true
    red_cards?: true
    total_points?: true
    avg_value?: true
    avg_xp?: true
    first_gw?: true
    last_gw?: true
  }

  export type Merged_gw_summaryCountAggregateInputType = {
    element?: true
    name?: true
    position?: true
    team?: true
    games_played?: true
    total_minutes?: true
    total_goals?: true
    total_assists?: true
    total_clean_sheets?: true
    yellow_cards?: true
    red_cards?: true
    total_points?: true
    avg_value?: true
    avg_xp?: true
    first_gw?: true
    last_gw?: true
    _all?: true
  }

  export type Merged_gw_summaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which merged_gw_summary to aggregate.
     */
    where?: merged_gw_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merged_gw_summaries to fetch.
     */
    orderBy?: merged_gw_summaryOrderByWithRelationInput | merged_gw_summaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: merged_gw_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merged_gw_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merged_gw_summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned merged_gw_summaries
    **/
    _count?: true | Merged_gw_summaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Merged_gw_summaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Merged_gw_summarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Merged_gw_summaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Merged_gw_summaryMaxAggregateInputType
  }

  export type GetMerged_gw_summaryAggregateType<T extends Merged_gw_summaryAggregateArgs> = {
        [P in keyof T & keyof AggregateMerged_gw_summary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerged_gw_summary[P]>
      : GetScalarType<T[P], AggregateMerged_gw_summary[P]>
  }




  export type merged_gw_summaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: merged_gw_summaryWhereInput
    orderBy?: merged_gw_summaryOrderByWithAggregationInput | merged_gw_summaryOrderByWithAggregationInput[]
    by: Merged_gw_summaryScalarFieldEnum[] | Merged_gw_summaryScalarFieldEnum
    having?: merged_gw_summaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Merged_gw_summaryCountAggregateInputType | true
    _avg?: Merged_gw_summaryAvgAggregateInputType
    _sum?: Merged_gw_summarySumAggregateInputType
    _min?: Merged_gw_summaryMinAggregateInputType
    _max?: Merged_gw_summaryMaxAggregateInputType
  }

  export type Merged_gw_summaryGroupByOutputType = {
    element: number
    name: string | null
    position: string | null
    team: string | null
    games_played: bigint | null
    total_minutes: bigint | null
    total_goals: bigint | null
    total_assists: bigint | null
    total_clean_sheets: bigint | null
    yellow_cards: bigint | null
    red_cards: bigint | null
    total_points: bigint | null
    avg_value: number | null
    avg_xp: Decimal | null
    first_gw: number | null
    last_gw: number | null
    _count: Merged_gw_summaryCountAggregateOutputType | null
    _avg: Merged_gw_summaryAvgAggregateOutputType | null
    _sum: Merged_gw_summarySumAggregateOutputType | null
    _min: Merged_gw_summaryMinAggregateOutputType | null
    _max: Merged_gw_summaryMaxAggregateOutputType | null
  }

  type GetMerged_gw_summaryGroupByPayload<T extends merged_gw_summaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Merged_gw_summaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Merged_gw_summaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Merged_gw_summaryGroupByOutputType[P]>
            : GetScalarType<T[P], Merged_gw_summaryGroupByOutputType[P]>
        }
      >
    >


  export type merged_gw_summarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    element?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    games_played?: boolean
    total_minutes?: boolean
    total_goals?: boolean
    total_assists?: boolean
    total_clean_sheets?: boolean
    yellow_cards?: boolean
    red_cards?: boolean
    total_points?: boolean
    avg_value?: boolean
    avg_xp?: boolean
    first_gw?: boolean
    last_gw?: boolean
  }, ExtArgs["result"]["merged_gw_summary"]>

  export type merged_gw_summarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    element?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    games_played?: boolean
    total_minutes?: boolean
    total_goals?: boolean
    total_assists?: boolean
    total_clean_sheets?: boolean
    yellow_cards?: boolean
    red_cards?: boolean
    total_points?: boolean
    avg_value?: boolean
    avg_xp?: boolean
    first_gw?: boolean
    last_gw?: boolean
  }, ExtArgs["result"]["merged_gw_summary"]>

  export type merged_gw_summarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    element?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    games_played?: boolean
    total_minutes?: boolean
    total_goals?: boolean
    total_assists?: boolean
    total_clean_sheets?: boolean
    yellow_cards?: boolean
    red_cards?: boolean
    total_points?: boolean
    avg_value?: boolean
    avg_xp?: boolean
    first_gw?: boolean
    last_gw?: boolean
  }, ExtArgs["result"]["merged_gw_summary"]>

  export type merged_gw_summarySelectScalar = {
    element?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    games_played?: boolean
    total_minutes?: boolean
    total_goals?: boolean
    total_assists?: boolean
    total_clean_sheets?: boolean
    yellow_cards?: boolean
    red_cards?: boolean
    total_points?: boolean
    avg_value?: boolean
    avg_xp?: boolean
    first_gw?: boolean
    last_gw?: boolean
  }

  export type merged_gw_summaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"element" | "name" | "position" | "team" | "games_played" | "total_minutes" | "total_goals" | "total_assists" | "total_clean_sheets" | "yellow_cards" | "red_cards" | "total_points" | "avg_value" | "avg_xp" | "first_gw" | "last_gw", ExtArgs["result"]["merged_gw_summary"]>

  export type $merged_gw_summaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "merged_gw_summary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      element: number
      name: string | null
      position: string | null
      team: string | null
      games_played: bigint | null
      total_minutes: bigint | null
      total_goals: bigint | null
      total_assists: bigint | null
      total_clean_sheets: bigint | null
      yellow_cards: bigint | null
      red_cards: bigint | null
      total_points: bigint | null
      avg_value: number | null
      avg_xp: Prisma.Decimal | null
      first_gw: number | null
      last_gw: number | null
    }, ExtArgs["result"]["merged_gw_summary"]>
    composites: {}
  }

  type merged_gw_summaryGetPayload<S extends boolean | null | undefined | merged_gw_summaryDefaultArgs> = $Result.GetResult<Prisma.$merged_gw_summaryPayload, S>

  type merged_gw_summaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<merged_gw_summaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Merged_gw_summaryCountAggregateInputType | true
    }

  export interface merged_gw_summaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['merged_gw_summary'], meta: { name: 'merged_gw_summary' } }
    /**
     * Find zero or one Merged_gw_summary that matches the filter.
     * @param {merged_gw_summaryFindUniqueArgs} args - Arguments to find a Merged_gw_summary
     * @example
     * // Get one Merged_gw_summary
     * const merged_gw_summary = await prisma.merged_gw_summary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends merged_gw_summaryFindUniqueArgs>(args: SelectSubset<T, merged_gw_summaryFindUniqueArgs<ExtArgs>>): Prisma__merged_gw_summaryClient<$Result.GetResult<Prisma.$merged_gw_summaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Merged_gw_summary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {merged_gw_summaryFindUniqueOrThrowArgs} args - Arguments to find a Merged_gw_summary
     * @example
     * // Get one Merged_gw_summary
     * const merged_gw_summary = await prisma.merged_gw_summary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends merged_gw_summaryFindUniqueOrThrowArgs>(args: SelectSubset<T, merged_gw_summaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__merged_gw_summaryClient<$Result.GetResult<Prisma.$merged_gw_summaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merged_gw_summary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merged_gw_summaryFindFirstArgs} args - Arguments to find a Merged_gw_summary
     * @example
     * // Get one Merged_gw_summary
     * const merged_gw_summary = await prisma.merged_gw_summary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends merged_gw_summaryFindFirstArgs>(args?: SelectSubset<T, merged_gw_summaryFindFirstArgs<ExtArgs>>): Prisma__merged_gw_summaryClient<$Result.GetResult<Prisma.$merged_gw_summaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merged_gw_summary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merged_gw_summaryFindFirstOrThrowArgs} args - Arguments to find a Merged_gw_summary
     * @example
     * // Get one Merged_gw_summary
     * const merged_gw_summary = await prisma.merged_gw_summary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends merged_gw_summaryFindFirstOrThrowArgs>(args?: SelectSubset<T, merged_gw_summaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__merged_gw_summaryClient<$Result.GetResult<Prisma.$merged_gw_summaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Merged_gw_summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merged_gw_summaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merged_gw_summaries
     * const merged_gw_summaries = await prisma.merged_gw_summary.findMany()
     * 
     * // Get first 10 Merged_gw_summaries
     * const merged_gw_summaries = await prisma.merged_gw_summary.findMany({ take: 10 })
     * 
     * // Only select the `element`
     * const merged_gw_summaryWithElementOnly = await prisma.merged_gw_summary.findMany({ select: { element: true } })
     * 
     */
    findMany<T extends merged_gw_summaryFindManyArgs>(args?: SelectSubset<T, merged_gw_summaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merged_gw_summaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Merged_gw_summary.
     * @param {merged_gw_summaryCreateArgs} args - Arguments to create a Merged_gw_summary.
     * @example
     * // Create one Merged_gw_summary
     * const Merged_gw_summary = await prisma.merged_gw_summary.create({
     *   data: {
     *     // ... data to create a Merged_gw_summary
     *   }
     * })
     * 
     */
    create<T extends merged_gw_summaryCreateArgs>(args: SelectSubset<T, merged_gw_summaryCreateArgs<ExtArgs>>): Prisma__merged_gw_summaryClient<$Result.GetResult<Prisma.$merged_gw_summaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Merged_gw_summaries.
     * @param {merged_gw_summaryCreateManyArgs} args - Arguments to create many Merged_gw_summaries.
     * @example
     * // Create many Merged_gw_summaries
     * const merged_gw_summary = await prisma.merged_gw_summary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends merged_gw_summaryCreateManyArgs>(args?: SelectSubset<T, merged_gw_summaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merged_gw_summaries and returns the data saved in the database.
     * @param {merged_gw_summaryCreateManyAndReturnArgs} args - Arguments to create many Merged_gw_summaries.
     * @example
     * // Create many Merged_gw_summaries
     * const merged_gw_summary = await prisma.merged_gw_summary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merged_gw_summaries and only return the `element`
     * const merged_gw_summaryWithElementOnly = await prisma.merged_gw_summary.createManyAndReturn({
     *   select: { element: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends merged_gw_summaryCreateManyAndReturnArgs>(args?: SelectSubset<T, merged_gw_summaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merged_gw_summaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Merged_gw_summary.
     * @param {merged_gw_summaryDeleteArgs} args - Arguments to delete one Merged_gw_summary.
     * @example
     * // Delete one Merged_gw_summary
     * const Merged_gw_summary = await prisma.merged_gw_summary.delete({
     *   where: {
     *     // ... filter to delete one Merged_gw_summary
     *   }
     * })
     * 
     */
    delete<T extends merged_gw_summaryDeleteArgs>(args: SelectSubset<T, merged_gw_summaryDeleteArgs<ExtArgs>>): Prisma__merged_gw_summaryClient<$Result.GetResult<Prisma.$merged_gw_summaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Merged_gw_summary.
     * @param {merged_gw_summaryUpdateArgs} args - Arguments to update one Merged_gw_summary.
     * @example
     * // Update one Merged_gw_summary
     * const merged_gw_summary = await prisma.merged_gw_summary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends merged_gw_summaryUpdateArgs>(args: SelectSubset<T, merged_gw_summaryUpdateArgs<ExtArgs>>): Prisma__merged_gw_summaryClient<$Result.GetResult<Prisma.$merged_gw_summaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Merged_gw_summaries.
     * @param {merged_gw_summaryDeleteManyArgs} args - Arguments to filter Merged_gw_summaries to delete.
     * @example
     * // Delete a few Merged_gw_summaries
     * const { count } = await prisma.merged_gw_summary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends merged_gw_summaryDeleteManyArgs>(args?: SelectSubset<T, merged_gw_summaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merged_gw_summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merged_gw_summaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merged_gw_summaries
     * const merged_gw_summary = await prisma.merged_gw_summary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends merged_gw_summaryUpdateManyArgs>(args: SelectSubset<T, merged_gw_summaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merged_gw_summaries and returns the data updated in the database.
     * @param {merged_gw_summaryUpdateManyAndReturnArgs} args - Arguments to update many Merged_gw_summaries.
     * @example
     * // Update many Merged_gw_summaries
     * const merged_gw_summary = await prisma.merged_gw_summary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Merged_gw_summaries and only return the `element`
     * const merged_gw_summaryWithElementOnly = await prisma.merged_gw_summary.updateManyAndReturn({
     *   select: { element: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends merged_gw_summaryUpdateManyAndReturnArgs>(args: SelectSubset<T, merged_gw_summaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merged_gw_summaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Merged_gw_summary.
     * @param {merged_gw_summaryUpsertArgs} args - Arguments to update or create a Merged_gw_summary.
     * @example
     * // Update or create a Merged_gw_summary
     * const merged_gw_summary = await prisma.merged_gw_summary.upsert({
     *   create: {
     *     // ... data to create a Merged_gw_summary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merged_gw_summary we want to update
     *   }
     * })
     */
    upsert<T extends merged_gw_summaryUpsertArgs>(args: SelectSubset<T, merged_gw_summaryUpsertArgs<ExtArgs>>): Prisma__merged_gw_summaryClient<$Result.GetResult<Prisma.$merged_gw_summaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Merged_gw_summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merged_gw_summaryCountArgs} args - Arguments to filter Merged_gw_summaries to count.
     * @example
     * // Count the number of Merged_gw_summaries
     * const count = await prisma.merged_gw_summary.count({
     *   where: {
     *     // ... the filter for the Merged_gw_summaries we want to count
     *   }
     * })
    **/
    count<T extends merged_gw_summaryCountArgs>(
      args?: Subset<T, merged_gw_summaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Merged_gw_summaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merged_gw_summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Merged_gw_summaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Merged_gw_summaryAggregateArgs>(args: Subset<T, Merged_gw_summaryAggregateArgs>): Prisma.PrismaPromise<GetMerged_gw_summaryAggregateType<T>>

    /**
     * Group by Merged_gw_summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merged_gw_summaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends merged_gw_summaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: merged_gw_summaryGroupByArgs['orderBy'] }
        : { orderBy?: merged_gw_summaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, merged_gw_summaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerged_gw_summaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the merged_gw_summary model
   */
  readonly fields: merged_gw_summaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for merged_gw_summary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__merged_gw_summaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the merged_gw_summary model
   */
  interface merged_gw_summaryFieldRefs {
    readonly element: FieldRef<"merged_gw_summary", 'Int'>
    readonly name: FieldRef<"merged_gw_summary", 'String'>
    readonly position: FieldRef<"merged_gw_summary", 'String'>
    readonly team: FieldRef<"merged_gw_summary", 'String'>
    readonly games_played: FieldRef<"merged_gw_summary", 'BigInt'>
    readonly total_minutes: FieldRef<"merged_gw_summary", 'BigInt'>
    readonly total_goals: FieldRef<"merged_gw_summary", 'BigInt'>
    readonly total_assists: FieldRef<"merged_gw_summary", 'BigInt'>
    readonly total_clean_sheets: FieldRef<"merged_gw_summary", 'BigInt'>
    readonly yellow_cards: FieldRef<"merged_gw_summary", 'BigInt'>
    readonly red_cards: FieldRef<"merged_gw_summary", 'BigInt'>
    readonly total_points: FieldRef<"merged_gw_summary", 'BigInt'>
    readonly avg_value: FieldRef<"merged_gw_summary", 'Float'>
    readonly avg_xp: FieldRef<"merged_gw_summary", 'Decimal'>
    readonly first_gw: FieldRef<"merged_gw_summary", 'Int'>
    readonly last_gw: FieldRef<"merged_gw_summary", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * merged_gw_summary findUnique
   */
  export type merged_gw_summaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
    /**
     * Filter, which merged_gw_summary to fetch.
     */
    where: merged_gw_summaryWhereUniqueInput
  }

  /**
   * merged_gw_summary findUniqueOrThrow
   */
  export type merged_gw_summaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
    /**
     * Filter, which merged_gw_summary to fetch.
     */
    where: merged_gw_summaryWhereUniqueInput
  }

  /**
   * merged_gw_summary findFirst
   */
  export type merged_gw_summaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
    /**
     * Filter, which merged_gw_summary to fetch.
     */
    where?: merged_gw_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merged_gw_summaries to fetch.
     */
    orderBy?: merged_gw_summaryOrderByWithRelationInput | merged_gw_summaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for merged_gw_summaries.
     */
    cursor?: merged_gw_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merged_gw_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merged_gw_summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of merged_gw_summaries.
     */
    distinct?: Merged_gw_summaryScalarFieldEnum | Merged_gw_summaryScalarFieldEnum[]
  }

  /**
   * merged_gw_summary findFirstOrThrow
   */
  export type merged_gw_summaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
    /**
     * Filter, which merged_gw_summary to fetch.
     */
    where?: merged_gw_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merged_gw_summaries to fetch.
     */
    orderBy?: merged_gw_summaryOrderByWithRelationInput | merged_gw_summaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for merged_gw_summaries.
     */
    cursor?: merged_gw_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merged_gw_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merged_gw_summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of merged_gw_summaries.
     */
    distinct?: Merged_gw_summaryScalarFieldEnum | Merged_gw_summaryScalarFieldEnum[]
  }

  /**
   * merged_gw_summary findMany
   */
  export type merged_gw_summaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
    /**
     * Filter, which merged_gw_summaries to fetch.
     */
    where?: merged_gw_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merged_gw_summaries to fetch.
     */
    orderBy?: merged_gw_summaryOrderByWithRelationInput | merged_gw_summaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing merged_gw_summaries.
     */
    cursor?: merged_gw_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merged_gw_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merged_gw_summaries.
     */
    skip?: number
    distinct?: Merged_gw_summaryScalarFieldEnum | Merged_gw_summaryScalarFieldEnum[]
  }

  /**
   * merged_gw_summary create
   */
  export type merged_gw_summaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
    /**
     * The data needed to create a merged_gw_summary.
     */
    data?: XOR<merged_gw_summaryCreateInput, merged_gw_summaryUncheckedCreateInput>
  }

  /**
   * merged_gw_summary createMany
   */
  export type merged_gw_summaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many merged_gw_summaries.
     */
    data: merged_gw_summaryCreateManyInput | merged_gw_summaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * merged_gw_summary createManyAndReturn
   */
  export type merged_gw_summaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
    /**
     * The data used to create many merged_gw_summaries.
     */
    data: merged_gw_summaryCreateManyInput | merged_gw_summaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * merged_gw_summary update
   */
  export type merged_gw_summaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
    /**
     * The data needed to update a merged_gw_summary.
     */
    data: XOR<merged_gw_summaryUpdateInput, merged_gw_summaryUncheckedUpdateInput>
    /**
     * Choose, which merged_gw_summary to update.
     */
    where: merged_gw_summaryWhereUniqueInput
  }

  /**
   * merged_gw_summary updateMany
   */
  export type merged_gw_summaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update merged_gw_summaries.
     */
    data: XOR<merged_gw_summaryUpdateManyMutationInput, merged_gw_summaryUncheckedUpdateManyInput>
    /**
     * Filter which merged_gw_summaries to update
     */
    where?: merged_gw_summaryWhereInput
    /**
     * Limit how many merged_gw_summaries to update.
     */
    limit?: number
  }

  /**
   * merged_gw_summary updateManyAndReturn
   */
  export type merged_gw_summaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
    /**
     * The data used to update merged_gw_summaries.
     */
    data: XOR<merged_gw_summaryUpdateManyMutationInput, merged_gw_summaryUncheckedUpdateManyInput>
    /**
     * Filter which merged_gw_summaries to update
     */
    where?: merged_gw_summaryWhereInput
    /**
     * Limit how many merged_gw_summaries to update.
     */
    limit?: number
  }

  /**
   * merged_gw_summary upsert
   */
  export type merged_gw_summaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
    /**
     * The filter to search for the merged_gw_summary to update in case it exists.
     */
    where: merged_gw_summaryWhereUniqueInput
    /**
     * In case the merged_gw_summary found by the `where` argument doesn't exist, create a new merged_gw_summary with this data.
     */
    create: XOR<merged_gw_summaryCreateInput, merged_gw_summaryUncheckedCreateInput>
    /**
     * In case the merged_gw_summary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<merged_gw_summaryUpdateInput, merged_gw_summaryUncheckedUpdateInput>
  }

  /**
   * merged_gw_summary delete
   */
  export type merged_gw_summaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
    /**
     * Filter which merged_gw_summary to delete.
     */
    where: merged_gw_summaryWhereUniqueInput
  }

  /**
   * merged_gw_summary deleteMany
   */
  export type merged_gw_summaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which merged_gw_summaries to delete
     */
    where?: merged_gw_summaryWhereInput
    /**
     * Limit how many merged_gw_summaries to delete.
     */
    limit?: number
  }

  /**
   * merged_gw_summary without action
   */
  export type merged_gw_summaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merged_gw_summary
     */
    select?: merged_gw_summarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the merged_gw_summary
     */
    omit?: merged_gw_summaryOmit<ExtArgs> | null
  }


  /**
   * Model mergedgw
   */

  export type AggregateMergedgw = {
    _count: MergedgwCountAggregateOutputType | null
    _avg: MergedgwAvgAggregateOutputType | null
    _sum: MergedgwSumAggregateOutputType | null
    _min: MergedgwMinAggregateOutputType | null
    _max: MergedgwMaxAggregateOutputType | null
  }

  export type MergedgwAvgAggregateOutputType = {
    element: number | null
    xp: number | null
    assists: number | null
    bonus: number | null
    bps: number | null
    clean_sheets: number | null
    creativity: number | null
    expected_assists: number | null
    expected_goal_involvements: number | null
    expected_goals: number | null
    expected_goals_conceded: number | null
    fixture: number | null
    goals_conceded: number | null
    goals_scored: number | null
    ict_index: number | null
    influence: number | null
    minutes: number | null
    opponent_team: number | null
    own_goals: number | null
    penalties_missed: number | null
    penalties_saved: number | null
    red_cards: number | null
    round: number | null
    saves: number | null
    selected: number | null
    starts: number | null
    team_a_score: number | null
    team_h_score: number | null
    threat: number | null
    total_points: number | null
    transfers_balance: number | null
    transfers_in: number | null
    transfers_out: number | null
    value: number | null
    yellow_cards: number | null
    gw: number | null
  }

  export type MergedgwSumAggregateOutputType = {
    element: number | null
    xp: number | null
    assists: number | null
    bonus: number | null
    bps: number | null
    clean_sheets: number | null
    creativity: number | null
    expected_assists: number | null
    expected_goal_involvements: number | null
    expected_goals: number | null
    expected_goals_conceded: number | null
    fixture: number | null
    goals_conceded: number | null
    goals_scored: number | null
    ict_index: number | null
    influence: number | null
    minutes: number | null
    opponent_team: number | null
    own_goals: number | null
    penalties_missed: number | null
    penalties_saved: number | null
    red_cards: number | null
    round: number | null
    saves: number | null
    selected: number | null
    starts: number | null
    team_a_score: number | null
    team_h_score: number | null
    threat: number | null
    total_points: number | null
    transfers_balance: number | null
    transfers_in: number | null
    transfers_out: number | null
    value: number | null
    yellow_cards: number | null
    gw: number | null
  }

  export type MergedgwMinAggregateOutputType = {
    name: string | null
    element: number | null
    position: string | null
    team: string | null
    xp: number | null
    assists: number | null
    bonus: number | null
    bps: number | null
    clean_sheets: number | null
    creativity: number | null
    expected_assists: number | null
    expected_goal_involvements: number | null
    expected_goals: number | null
    expected_goals_conceded: number | null
    fixture: number | null
    goals_conceded: number | null
    goals_scored: number | null
    ict_index: number | null
    influence: number | null
    kickoff_time: Date | null
    minutes: number | null
    modified: boolean | null
    opponent_team: number | null
    own_goals: number | null
    penalties_missed: number | null
    penalties_saved: number | null
    red_cards: number | null
    round: number | null
    saves: number | null
    selected: number | null
    starts: number | null
    team_a_score: number | null
    team_h_score: number | null
    threat: number | null
    total_points: number | null
    transfers_balance: number | null
    transfers_in: number | null
    transfers_out: number | null
    value: number | null
    was_home: boolean | null
    yellow_cards: number | null
    gw: number | null
  }

  export type MergedgwMaxAggregateOutputType = {
    name: string | null
    element: number | null
    position: string | null
    team: string | null
    xp: number | null
    assists: number | null
    bonus: number | null
    bps: number | null
    clean_sheets: number | null
    creativity: number | null
    expected_assists: number | null
    expected_goal_involvements: number | null
    expected_goals: number | null
    expected_goals_conceded: number | null
    fixture: number | null
    goals_conceded: number | null
    goals_scored: number | null
    ict_index: number | null
    influence: number | null
    kickoff_time: Date | null
    minutes: number | null
    modified: boolean | null
    opponent_team: number | null
    own_goals: number | null
    penalties_missed: number | null
    penalties_saved: number | null
    red_cards: number | null
    round: number | null
    saves: number | null
    selected: number | null
    starts: number | null
    team_a_score: number | null
    team_h_score: number | null
    threat: number | null
    total_points: number | null
    transfers_balance: number | null
    transfers_in: number | null
    transfers_out: number | null
    value: number | null
    was_home: boolean | null
    yellow_cards: number | null
    gw: number | null
  }

  export type MergedgwCountAggregateOutputType = {
    name: number
    element: number
    position: number
    team: number
    xp: number
    assists: number
    bonus: number
    bps: number
    clean_sheets: number
    creativity: number
    expected_assists: number
    expected_goal_involvements: number
    expected_goals: number
    expected_goals_conceded: number
    fixture: number
    goals_conceded: number
    goals_scored: number
    ict_index: number
    influence: number
    kickoff_time: number
    minutes: number
    modified: number
    opponent_team: number
    own_goals: number
    penalties_missed: number
    penalties_saved: number
    red_cards: number
    round: number
    saves: number
    selected: number
    starts: number
    team_a_score: number
    team_h_score: number
    threat: number
    total_points: number
    transfers_balance: number
    transfers_in: number
    transfers_out: number
    value: number
    was_home: number
    yellow_cards: number
    gw: number
    _all: number
  }


  export type MergedgwAvgAggregateInputType = {
    element?: true
    xp?: true
    assists?: true
    bonus?: true
    bps?: true
    clean_sheets?: true
    creativity?: true
    expected_assists?: true
    expected_goal_involvements?: true
    expected_goals?: true
    expected_goals_conceded?: true
    fixture?: true
    goals_conceded?: true
    goals_scored?: true
    ict_index?: true
    influence?: true
    minutes?: true
    opponent_team?: true
    own_goals?: true
    penalties_missed?: true
    penalties_saved?: true
    red_cards?: true
    round?: true
    saves?: true
    selected?: true
    starts?: true
    team_a_score?: true
    team_h_score?: true
    threat?: true
    total_points?: true
    transfers_balance?: true
    transfers_in?: true
    transfers_out?: true
    value?: true
    yellow_cards?: true
    gw?: true
  }

  export type MergedgwSumAggregateInputType = {
    element?: true
    xp?: true
    assists?: true
    bonus?: true
    bps?: true
    clean_sheets?: true
    creativity?: true
    expected_assists?: true
    expected_goal_involvements?: true
    expected_goals?: true
    expected_goals_conceded?: true
    fixture?: true
    goals_conceded?: true
    goals_scored?: true
    ict_index?: true
    influence?: true
    minutes?: true
    opponent_team?: true
    own_goals?: true
    penalties_missed?: true
    penalties_saved?: true
    red_cards?: true
    round?: true
    saves?: true
    selected?: true
    starts?: true
    team_a_score?: true
    team_h_score?: true
    threat?: true
    total_points?: true
    transfers_balance?: true
    transfers_in?: true
    transfers_out?: true
    value?: true
    yellow_cards?: true
    gw?: true
  }

  export type MergedgwMinAggregateInputType = {
    name?: true
    element?: true
    position?: true
    team?: true
    xp?: true
    assists?: true
    bonus?: true
    bps?: true
    clean_sheets?: true
    creativity?: true
    expected_assists?: true
    expected_goal_involvements?: true
    expected_goals?: true
    expected_goals_conceded?: true
    fixture?: true
    goals_conceded?: true
    goals_scored?: true
    ict_index?: true
    influence?: true
    kickoff_time?: true
    minutes?: true
    modified?: true
    opponent_team?: true
    own_goals?: true
    penalties_missed?: true
    penalties_saved?: true
    red_cards?: true
    round?: true
    saves?: true
    selected?: true
    starts?: true
    team_a_score?: true
    team_h_score?: true
    threat?: true
    total_points?: true
    transfers_balance?: true
    transfers_in?: true
    transfers_out?: true
    value?: true
    was_home?: true
    yellow_cards?: true
    gw?: true
  }

  export type MergedgwMaxAggregateInputType = {
    name?: true
    element?: true
    position?: true
    team?: true
    xp?: true
    assists?: true
    bonus?: true
    bps?: true
    clean_sheets?: true
    creativity?: true
    expected_assists?: true
    expected_goal_involvements?: true
    expected_goals?: true
    expected_goals_conceded?: true
    fixture?: true
    goals_conceded?: true
    goals_scored?: true
    ict_index?: true
    influence?: true
    kickoff_time?: true
    minutes?: true
    modified?: true
    opponent_team?: true
    own_goals?: true
    penalties_missed?: true
    penalties_saved?: true
    red_cards?: true
    round?: true
    saves?: true
    selected?: true
    starts?: true
    team_a_score?: true
    team_h_score?: true
    threat?: true
    total_points?: true
    transfers_balance?: true
    transfers_in?: true
    transfers_out?: true
    value?: true
    was_home?: true
    yellow_cards?: true
    gw?: true
  }

  export type MergedgwCountAggregateInputType = {
    name?: true
    element?: true
    position?: true
    team?: true
    xp?: true
    assists?: true
    bonus?: true
    bps?: true
    clean_sheets?: true
    creativity?: true
    expected_assists?: true
    expected_goal_involvements?: true
    expected_goals?: true
    expected_goals_conceded?: true
    fixture?: true
    goals_conceded?: true
    goals_scored?: true
    ict_index?: true
    influence?: true
    kickoff_time?: true
    minutes?: true
    modified?: true
    opponent_team?: true
    own_goals?: true
    penalties_missed?: true
    penalties_saved?: true
    red_cards?: true
    round?: true
    saves?: true
    selected?: true
    starts?: true
    team_a_score?: true
    team_h_score?: true
    threat?: true
    total_points?: true
    transfers_balance?: true
    transfers_in?: true
    transfers_out?: true
    value?: true
    was_home?: true
    yellow_cards?: true
    gw?: true
    _all?: true
  }

  export type MergedgwAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mergedgw to aggregate.
     */
    where?: mergedgwWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mergedgws to fetch.
     */
    orderBy?: mergedgwOrderByWithRelationInput | mergedgwOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mergedgwWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mergedgws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mergedgws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mergedgws
    **/
    _count?: true | MergedgwCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MergedgwAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MergedgwSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MergedgwMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MergedgwMaxAggregateInputType
  }

  export type GetMergedgwAggregateType<T extends MergedgwAggregateArgs> = {
        [P in keyof T & keyof AggregateMergedgw]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMergedgw[P]>
      : GetScalarType<T[P], AggregateMergedgw[P]>
  }




  export type mergedgwGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mergedgwWhereInput
    orderBy?: mergedgwOrderByWithAggregationInput | mergedgwOrderByWithAggregationInput[]
    by: MergedgwScalarFieldEnum[] | MergedgwScalarFieldEnum
    having?: mergedgwScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MergedgwCountAggregateInputType | true
    _avg?: MergedgwAvgAggregateInputType
    _sum?: MergedgwSumAggregateInputType
    _min?: MergedgwMinAggregateInputType
    _max?: MergedgwMaxAggregateInputType
  }

  export type MergedgwGroupByOutputType = {
    name: string | null
    element: number
    position: string | null
    team: string | null
    xp: number | null
    assists: number | null
    bonus: number | null
    bps: number | null
    clean_sheets: number | null
    creativity: number | null
    expected_assists: number | null
    expected_goal_involvements: number | null
    expected_goals: number | null
    expected_goals_conceded: number | null
    fixture: number | null
    goals_conceded: number | null
    goals_scored: number | null
    ict_index: number | null
    influence: number | null
    kickoff_time: Date | null
    minutes: number | null
    modified: boolean | null
    opponent_team: number | null
    own_goals: number | null
    penalties_missed: number | null
    penalties_saved: number | null
    red_cards: number | null
    round: number | null
    saves: number | null
    selected: number | null
    starts: number | null
    team_a_score: number | null
    team_h_score: number | null
    threat: number | null
    total_points: number | null
    transfers_balance: number | null
    transfers_in: number | null
    transfers_out: number | null
    value: number | null
    was_home: boolean | null
    yellow_cards: number | null
    gw: number | null
    _count: MergedgwCountAggregateOutputType | null
    _avg: MergedgwAvgAggregateOutputType | null
    _sum: MergedgwSumAggregateOutputType | null
    _min: MergedgwMinAggregateOutputType | null
    _max: MergedgwMaxAggregateOutputType | null
  }

  type GetMergedgwGroupByPayload<T extends mergedgwGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MergedgwGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MergedgwGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MergedgwGroupByOutputType[P]>
            : GetScalarType<T[P], MergedgwGroupByOutputType[P]>
        }
      >
    >


  export type mergedgwSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    element?: boolean
    position?: boolean
    team?: boolean
    xp?: boolean
    assists?: boolean
    bonus?: boolean
    bps?: boolean
    clean_sheets?: boolean
    creativity?: boolean
    expected_assists?: boolean
    expected_goal_involvements?: boolean
    expected_goals?: boolean
    expected_goals_conceded?: boolean
    fixture?: boolean
    goals_conceded?: boolean
    goals_scored?: boolean
    ict_index?: boolean
    influence?: boolean
    kickoff_time?: boolean
    minutes?: boolean
    modified?: boolean
    opponent_team?: boolean
    own_goals?: boolean
    penalties_missed?: boolean
    penalties_saved?: boolean
    red_cards?: boolean
    round?: boolean
    saves?: boolean
    selected?: boolean
    starts?: boolean
    team_a_score?: boolean
    team_h_score?: boolean
    threat?: boolean
    total_points?: boolean
    transfers_balance?: boolean
    transfers_in?: boolean
    transfers_out?: boolean
    value?: boolean
    was_home?: boolean
    yellow_cards?: boolean
    gw?: boolean
  }, ExtArgs["result"]["mergedgw"]>

  export type mergedgwSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    element?: boolean
    position?: boolean
    team?: boolean
    xp?: boolean
    assists?: boolean
    bonus?: boolean
    bps?: boolean
    clean_sheets?: boolean
    creativity?: boolean
    expected_assists?: boolean
    expected_goal_involvements?: boolean
    expected_goals?: boolean
    expected_goals_conceded?: boolean
    fixture?: boolean
    goals_conceded?: boolean
    goals_scored?: boolean
    ict_index?: boolean
    influence?: boolean
    kickoff_time?: boolean
    minutes?: boolean
    modified?: boolean
    opponent_team?: boolean
    own_goals?: boolean
    penalties_missed?: boolean
    penalties_saved?: boolean
    red_cards?: boolean
    round?: boolean
    saves?: boolean
    selected?: boolean
    starts?: boolean
    team_a_score?: boolean
    team_h_score?: boolean
    threat?: boolean
    total_points?: boolean
    transfers_balance?: boolean
    transfers_in?: boolean
    transfers_out?: boolean
    value?: boolean
    was_home?: boolean
    yellow_cards?: boolean
    gw?: boolean
  }, ExtArgs["result"]["mergedgw"]>

  export type mergedgwSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    element?: boolean
    position?: boolean
    team?: boolean
    xp?: boolean
    assists?: boolean
    bonus?: boolean
    bps?: boolean
    clean_sheets?: boolean
    creativity?: boolean
    expected_assists?: boolean
    expected_goal_involvements?: boolean
    expected_goals?: boolean
    expected_goals_conceded?: boolean
    fixture?: boolean
    goals_conceded?: boolean
    goals_scored?: boolean
    ict_index?: boolean
    influence?: boolean
    kickoff_time?: boolean
    minutes?: boolean
    modified?: boolean
    opponent_team?: boolean
    own_goals?: boolean
    penalties_missed?: boolean
    penalties_saved?: boolean
    red_cards?: boolean
    round?: boolean
    saves?: boolean
    selected?: boolean
    starts?: boolean
    team_a_score?: boolean
    team_h_score?: boolean
    threat?: boolean
    total_points?: boolean
    transfers_balance?: boolean
    transfers_in?: boolean
    transfers_out?: boolean
    value?: boolean
    was_home?: boolean
    yellow_cards?: boolean
    gw?: boolean
  }, ExtArgs["result"]["mergedgw"]>

  export type mergedgwSelectScalar = {
    name?: boolean
    element?: boolean
    position?: boolean
    team?: boolean
    xp?: boolean
    assists?: boolean
    bonus?: boolean
    bps?: boolean
    clean_sheets?: boolean
    creativity?: boolean
    expected_assists?: boolean
    expected_goal_involvements?: boolean
    expected_goals?: boolean
    expected_goals_conceded?: boolean
    fixture?: boolean
    goals_conceded?: boolean
    goals_scored?: boolean
    ict_index?: boolean
    influence?: boolean
    kickoff_time?: boolean
    minutes?: boolean
    modified?: boolean
    opponent_team?: boolean
    own_goals?: boolean
    penalties_missed?: boolean
    penalties_saved?: boolean
    red_cards?: boolean
    round?: boolean
    saves?: boolean
    selected?: boolean
    starts?: boolean
    team_a_score?: boolean
    team_h_score?: boolean
    threat?: boolean
    total_points?: boolean
    transfers_balance?: boolean
    transfers_in?: boolean
    transfers_out?: boolean
    value?: boolean
    was_home?: boolean
    yellow_cards?: boolean
    gw?: boolean
  }

  export type mergedgwOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "element" | "position" | "team" | "xp" | "assists" | "bonus" | "bps" | "clean_sheets" | "creativity" | "expected_assists" | "expected_goal_involvements" | "expected_goals" | "expected_goals_conceded" | "fixture" | "goals_conceded" | "goals_scored" | "ict_index" | "influence" | "kickoff_time" | "minutes" | "modified" | "opponent_team" | "own_goals" | "penalties_missed" | "penalties_saved" | "red_cards" | "round" | "saves" | "selected" | "starts" | "team_a_score" | "team_h_score" | "threat" | "total_points" | "transfers_balance" | "transfers_in" | "transfers_out" | "value" | "was_home" | "yellow_cards" | "gw", ExtArgs["result"]["mergedgw"]>

  export type $mergedgwPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mergedgw"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string | null
      element: number
      position: string | null
      team: string | null
      xp: number | null
      assists: number | null
      bonus: number | null
      bps: number | null
      clean_sheets: number | null
      creativity: number | null
      expected_assists: number | null
      expected_goal_involvements: number | null
      expected_goals: number | null
      expected_goals_conceded: number | null
      fixture: number | null
      goals_conceded: number | null
      goals_scored: number | null
      ict_index: number | null
      influence: number | null
      kickoff_time: Date | null
      minutes: number | null
      modified: boolean | null
      opponent_team: number | null
      own_goals: number | null
      penalties_missed: number | null
      penalties_saved: number | null
      red_cards: number | null
      round: number | null
      saves: number | null
      selected: number | null
      starts: number | null
      team_a_score: number | null
      team_h_score: number | null
      threat: number | null
      total_points: number | null
      transfers_balance: number | null
      transfers_in: number | null
      transfers_out: number | null
      value: number | null
      was_home: boolean | null
      yellow_cards: number | null
      gw: number | null
    }, ExtArgs["result"]["mergedgw"]>
    composites: {}
  }

  type mergedgwGetPayload<S extends boolean | null | undefined | mergedgwDefaultArgs> = $Result.GetResult<Prisma.$mergedgwPayload, S>

  type mergedgwCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mergedgwFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MergedgwCountAggregateInputType | true
    }

  export interface mergedgwDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mergedgw'], meta: { name: 'mergedgw' } }
    /**
     * Find zero or one Mergedgw that matches the filter.
     * @param {mergedgwFindUniqueArgs} args - Arguments to find a Mergedgw
     * @example
     * // Get one Mergedgw
     * const mergedgw = await prisma.mergedgw.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mergedgwFindUniqueArgs>(args: SelectSubset<T, mergedgwFindUniqueArgs<ExtArgs>>): Prisma__mergedgwClient<$Result.GetResult<Prisma.$mergedgwPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mergedgw that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mergedgwFindUniqueOrThrowArgs} args - Arguments to find a Mergedgw
     * @example
     * // Get one Mergedgw
     * const mergedgw = await prisma.mergedgw.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mergedgwFindUniqueOrThrowArgs>(args: SelectSubset<T, mergedgwFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mergedgwClient<$Result.GetResult<Prisma.$mergedgwPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mergedgw that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mergedgwFindFirstArgs} args - Arguments to find a Mergedgw
     * @example
     * // Get one Mergedgw
     * const mergedgw = await prisma.mergedgw.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mergedgwFindFirstArgs>(args?: SelectSubset<T, mergedgwFindFirstArgs<ExtArgs>>): Prisma__mergedgwClient<$Result.GetResult<Prisma.$mergedgwPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mergedgw that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mergedgwFindFirstOrThrowArgs} args - Arguments to find a Mergedgw
     * @example
     * // Get one Mergedgw
     * const mergedgw = await prisma.mergedgw.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mergedgwFindFirstOrThrowArgs>(args?: SelectSubset<T, mergedgwFindFirstOrThrowArgs<ExtArgs>>): Prisma__mergedgwClient<$Result.GetResult<Prisma.$mergedgwPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mergedgws that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mergedgwFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mergedgws
     * const mergedgws = await prisma.mergedgw.findMany()
     * 
     * // Get first 10 Mergedgws
     * const mergedgws = await prisma.mergedgw.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const mergedgwWithNameOnly = await prisma.mergedgw.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends mergedgwFindManyArgs>(args?: SelectSubset<T, mergedgwFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mergedgwPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mergedgw.
     * @param {mergedgwCreateArgs} args - Arguments to create a Mergedgw.
     * @example
     * // Create one Mergedgw
     * const Mergedgw = await prisma.mergedgw.create({
     *   data: {
     *     // ... data to create a Mergedgw
     *   }
     * })
     * 
     */
    create<T extends mergedgwCreateArgs>(args: SelectSubset<T, mergedgwCreateArgs<ExtArgs>>): Prisma__mergedgwClient<$Result.GetResult<Prisma.$mergedgwPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mergedgws.
     * @param {mergedgwCreateManyArgs} args - Arguments to create many Mergedgws.
     * @example
     * // Create many Mergedgws
     * const mergedgw = await prisma.mergedgw.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mergedgwCreateManyArgs>(args?: SelectSubset<T, mergedgwCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mergedgws and returns the data saved in the database.
     * @param {mergedgwCreateManyAndReturnArgs} args - Arguments to create many Mergedgws.
     * @example
     * // Create many Mergedgws
     * const mergedgw = await prisma.mergedgw.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mergedgws and only return the `name`
     * const mergedgwWithNameOnly = await prisma.mergedgw.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mergedgwCreateManyAndReturnArgs>(args?: SelectSubset<T, mergedgwCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mergedgwPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mergedgw.
     * @param {mergedgwDeleteArgs} args - Arguments to delete one Mergedgw.
     * @example
     * // Delete one Mergedgw
     * const Mergedgw = await prisma.mergedgw.delete({
     *   where: {
     *     // ... filter to delete one Mergedgw
     *   }
     * })
     * 
     */
    delete<T extends mergedgwDeleteArgs>(args: SelectSubset<T, mergedgwDeleteArgs<ExtArgs>>): Prisma__mergedgwClient<$Result.GetResult<Prisma.$mergedgwPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mergedgw.
     * @param {mergedgwUpdateArgs} args - Arguments to update one Mergedgw.
     * @example
     * // Update one Mergedgw
     * const mergedgw = await prisma.mergedgw.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mergedgwUpdateArgs>(args: SelectSubset<T, mergedgwUpdateArgs<ExtArgs>>): Prisma__mergedgwClient<$Result.GetResult<Prisma.$mergedgwPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mergedgws.
     * @param {mergedgwDeleteManyArgs} args - Arguments to filter Mergedgws to delete.
     * @example
     * // Delete a few Mergedgws
     * const { count } = await prisma.mergedgw.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mergedgwDeleteManyArgs>(args?: SelectSubset<T, mergedgwDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mergedgws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mergedgwUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mergedgws
     * const mergedgw = await prisma.mergedgw.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mergedgwUpdateManyArgs>(args: SelectSubset<T, mergedgwUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mergedgws and returns the data updated in the database.
     * @param {mergedgwUpdateManyAndReturnArgs} args - Arguments to update many Mergedgws.
     * @example
     * // Update many Mergedgws
     * const mergedgw = await prisma.mergedgw.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mergedgws and only return the `name`
     * const mergedgwWithNameOnly = await prisma.mergedgw.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mergedgwUpdateManyAndReturnArgs>(args: SelectSubset<T, mergedgwUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mergedgwPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mergedgw.
     * @param {mergedgwUpsertArgs} args - Arguments to update or create a Mergedgw.
     * @example
     * // Update or create a Mergedgw
     * const mergedgw = await prisma.mergedgw.upsert({
     *   create: {
     *     // ... data to create a Mergedgw
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mergedgw we want to update
     *   }
     * })
     */
    upsert<T extends mergedgwUpsertArgs>(args: SelectSubset<T, mergedgwUpsertArgs<ExtArgs>>): Prisma__mergedgwClient<$Result.GetResult<Prisma.$mergedgwPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mergedgws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mergedgwCountArgs} args - Arguments to filter Mergedgws to count.
     * @example
     * // Count the number of Mergedgws
     * const count = await prisma.mergedgw.count({
     *   where: {
     *     // ... the filter for the Mergedgws we want to count
     *   }
     * })
    **/
    count<T extends mergedgwCountArgs>(
      args?: Subset<T, mergedgwCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MergedgwCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mergedgw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MergedgwAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MergedgwAggregateArgs>(args: Subset<T, MergedgwAggregateArgs>): Prisma.PrismaPromise<GetMergedgwAggregateType<T>>

    /**
     * Group by Mergedgw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mergedgwGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mergedgwGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mergedgwGroupByArgs['orderBy'] }
        : { orderBy?: mergedgwGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mergedgwGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMergedgwGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mergedgw model
   */
  readonly fields: mergedgwFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mergedgw.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mergedgwClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mergedgw model
   */
  interface mergedgwFieldRefs {
    readonly name: FieldRef<"mergedgw", 'String'>
    readonly element: FieldRef<"mergedgw", 'Int'>
    readonly position: FieldRef<"mergedgw", 'String'>
    readonly team: FieldRef<"mergedgw", 'String'>
    readonly xp: FieldRef<"mergedgw", 'Float'>
    readonly assists: FieldRef<"mergedgw", 'Int'>
    readonly bonus: FieldRef<"mergedgw", 'Int'>
    readonly bps: FieldRef<"mergedgw", 'Int'>
    readonly clean_sheets: FieldRef<"mergedgw", 'Int'>
    readonly creativity: FieldRef<"mergedgw", 'Float'>
    readonly expected_assists: FieldRef<"mergedgw", 'Float'>
    readonly expected_goal_involvements: FieldRef<"mergedgw", 'Float'>
    readonly expected_goals: FieldRef<"mergedgw", 'Float'>
    readonly expected_goals_conceded: FieldRef<"mergedgw", 'Float'>
    readonly fixture: FieldRef<"mergedgw", 'Int'>
    readonly goals_conceded: FieldRef<"mergedgw", 'Int'>
    readonly goals_scored: FieldRef<"mergedgw", 'Int'>
    readonly ict_index: FieldRef<"mergedgw", 'Float'>
    readonly influence: FieldRef<"mergedgw", 'Float'>
    readonly kickoff_time: FieldRef<"mergedgw", 'DateTime'>
    readonly minutes: FieldRef<"mergedgw", 'Int'>
    readonly modified: FieldRef<"mergedgw", 'Boolean'>
    readonly opponent_team: FieldRef<"mergedgw", 'Int'>
    readonly own_goals: FieldRef<"mergedgw", 'Int'>
    readonly penalties_missed: FieldRef<"mergedgw", 'Int'>
    readonly penalties_saved: FieldRef<"mergedgw", 'Int'>
    readonly red_cards: FieldRef<"mergedgw", 'Int'>
    readonly round: FieldRef<"mergedgw", 'Int'>
    readonly saves: FieldRef<"mergedgw", 'Int'>
    readonly selected: FieldRef<"mergedgw", 'Int'>
    readonly starts: FieldRef<"mergedgw", 'Int'>
    readonly team_a_score: FieldRef<"mergedgw", 'Int'>
    readonly team_h_score: FieldRef<"mergedgw", 'Int'>
    readonly threat: FieldRef<"mergedgw", 'Float'>
    readonly total_points: FieldRef<"mergedgw", 'Int'>
    readonly transfers_balance: FieldRef<"mergedgw", 'Int'>
    readonly transfers_in: FieldRef<"mergedgw", 'Int'>
    readonly transfers_out: FieldRef<"mergedgw", 'Int'>
    readonly value: FieldRef<"mergedgw", 'Float'>
    readonly was_home: FieldRef<"mergedgw", 'Boolean'>
    readonly yellow_cards: FieldRef<"mergedgw", 'Int'>
    readonly gw: FieldRef<"mergedgw", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mergedgw findUnique
   */
  export type mergedgwFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
    /**
     * Filter, which mergedgw to fetch.
     */
    where: mergedgwWhereUniqueInput
  }

  /**
   * mergedgw findUniqueOrThrow
   */
  export type mergedgwFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
    /**
     * Filter, which mergedgw to fetch.
     */
    where: mergedgwWhereUniqueInput
  }

  /**
   * mergedgw findFirst
   */
  export type mergedgwFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
    /**
     * Filter, which mergedgw to fetch.
     */
    where?: mergedgwWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mergedgws to fetch.
     */
    orderBy?: mergedgwOrderByWithRelationInput | mergedgwOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mergedgws.
     */
    cursor?: mergedgwWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mergedgws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mergedgws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mergedgws.
     */
    distinct?: MergedgwScalarFieldEnum | MergedgwScalarFieldEnum[]
  }

  /**
   * mergedgw findFirstOrThrow
   */
  export type mergedgwFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
    /**
     * Filter, which mergedgw to fetch.
     */
    where?: mergedgwWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mergedgws to fetch.
     */
    orderBy?: mergedgwOrderByWithRelationInput | mergedgwOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mergedgws.
     */
    cursor?: mergedgwWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mergedgws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mergedgws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mergedgws.
     */
    distinct?: MergedgwScalarFieldEnum | MergedgwScalarFieldEnum[]
  }

  /**
   * mergedgw findMany
   */
  export type mergedgwFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
    /**
     * Filter, which mergedgws to fetch.
     */
    where?: mergedgwWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mergedgws to fetch.
     */
    orderBy?: mergedgwOrderByWithRelationInput | mergedgwOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mergedgws.
     */
    cursor?: mergedgwWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mergedgws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mergedgws.
     */
    skip?: number
    distinct?: MergedgwScalarFieldEnum | MergedgwScalarFieldEnum[]
  }

  /**
   * mergedgw create
   */
  export type mergedgwCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
    /**
     * The data needed to create a mergedgw.
     */
    data?: XOR<mergedgwCreateInput, mergedgwUncheckedCreateInput>
  }

  /**
   * mergedgw createMany
   */
  export type mergedgwCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mergedgws.
     */
    data: mergedgwCreateManyInput | mergedgwCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mergedgw createManyAndReturn
   */
  export type mergedgwCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
    /**
     * The data used to create many mergedgws.
     */
    data: mergedgwCreateManyInput | mergedgwCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mergedgw update
   */
  export type mergedgwUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
    /**
     * The data needed to update a mergedgw.
     */
    data: XOR<mergedgwUpdateInput, mergedgwUncheckedUpdateInput>
    /**
     * Choose, which mergedgw to update.
     */
    where: mergedgwWhereUniqueInput
  }

  /**
   * mergedgw updateMany
   */
  export type mergedgwUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mergedgws.
     */
    data: XOR<mergedgwUpdateManyMutationInput, mergedgwUncheckedUpdateManyInput>
    /**
     * Filter which mergedgws to update
     */
    where?: mergedgwWhereInput
    /**
     * Limit how many mergedgws to update.
     */
    limit?: number
  }

  /**
   * mergedgw updateManyAndReturn
   */
  export type mergedgwUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
    /**
     * The data used to update mergedgws.
     */
    data: XOR<mergedgwUpdateManyMutationInput, mergedgwUncheckedUpdateManyInput>
    /**
     * Filter which mergedgws to update
     */
    where?: mergedgwWhereInput
    /**
     * Limit how many mergedgws to update.
     */
    limit?: number
  }

  /**
   * mergedgw upsert
   */
  export type mergedgwUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
    /**
     * The filter to search for the mergedgw to update in case it exists.
     */
    where: mergedgwWhereUniqueInput
    /**
     * In case the mergedgw found by the `where` argument doesn't exist, create a new mergedgw with this data.
     */
    create: XOR<mergedgwCreateInput, mergedgwUncheckedCreateInput>
    /**
     * In case the mergedgw was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mergedgwUpdateInput, mergedgwUncheckedUpdateInput>
  }

  /**
   * mergedgw delete
   */
  export type mergedgwDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
    /**
     * Filter which mergedgw to delete.
     */
    where: mergedgwWhereUniqueInput
  }

  /**
   * mergedgw deleteMany
   */
  export type mergedgwDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mergedgws to delete
     */
    where?: mergedgwWhereInput
    /**
     * Limit how many mergedgws to delete.
     */
    limit?: number
  }

  /**
   * mergedgw without action
   */
  export type mergedgwDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mergedgw
     */
    select?: mergedgwSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mergedgw
     */
    omit?: mergedgwOmit<ExtArgs> | null
  }


  /**
   * Model player_stats
   */

  export type AggregatePlayer_stats = {
    _count: Player_statsCountAggregateOutputType | null
    _avg: Player_statsAvgAggregateOutputType | null
    _sum: Player_statsSumAggregateOutputType | null
    _min: Player_statsMinAggregateOutputType | null
    _max: Player_statsMaxAggregateOutputType | null
  }

  export type Player_statsAvgAggregateOutputType = {
    stat_id: number | null
    player_id: number | null
    gw_id: number | null
    xp: number | null
    assists: number | null
    bonus: number | null
    bps: number | null
    clean_sheets: number | null
    creativity: number | null
    expected_assists: number | null
    expected_goal_involvements: number | null
    expected_goals: number | null
    expected_goals_conceded: number | null
    fixture: number | null
    goals_conceded: number | null
    goals_scored: number | null
    ict_index: number | null
    influence: number | null
    minutes: number | null
    own_goals: number | null
    penalties_missed: number | null
    penalties_saved: number | null
    red_cards: number | null
    saves: number | null
    selected: number | null
    starts: number | null
    team_a_score: number | null
    team_h_score: number | null
    threat: number | null
    total_points: number | null
    transfers_balance: number | null
    transfers_in: number | null
    transfers_out: number | null
    value: number | null
    yellow_cards: number | null
  }

  export type Player_statsSumAggregateOutputType = {
    stat_id: number | null
    player_id: number | null
    gw_id: number | null
    xp: number | null
    assists: number | null
    bonus: number | null
    bps: number | null
    clean_sheets: number | null
    creativity: number | null
    expected_assists: number | null
    expected_goal_involvements: number | null
    expected_goals: number | null
    expected_goals_conceded: number | null
    fixture: number | null
    goals_conceded: number | null
    goals_scored: number | null
    ict_index: number | null
    influence: number | null
    minutes: number | null
    own_goals: number | null
    penalties_missed: number | null
    penalties_saved: number | null
    red_cards: number | null
    saves: number | null
    selected: number | null
    starts: number | null
    team_a_score: number | null
    team_h_score: number | null
    threat: number | null
    total_points: number | null
    transfers_balance: number | null
    transfers_in: number | null
    transfers_out: number | null
    value: number | null
    yellow_cards: number | null
  }

  export type Player_statsMinAggregateOutputType = {
    stat_id: number | null
    player_id: number | null
    gw_id: number | null
    xp: number | null
    assists: number | null
    bonus: number | null
    bps: number | null
    clean_sheets: number | null
    creativity: number | null
    expected_assists: number | null
    expected_goal_involvements: number | null
    expected_goals: number | null
    expected_goals_conceded: number | null
    fixture: number | null
    goals_conceded: number | null
    goals_scored: number | null
    ict_index: number | null
    influence: number | null
    kickoff_time: Date | null
    minutes: number | null
    modified: boolean | null
    opponent_team: string | null
    own_goals: number | null
    penalties_missed: number | null
    penalties_saved: number | null
    red_cards: number | null
    saves: number | null
    selected: number | null
    starts: number | null
    team_a_score: number | null
    team_h_score: number | null
    threat: number | null
    total_points: number | null
    transfers_balance: number | null
    transfers_in: number | null
    transfers_out: number | null
    value: number | null
    was_home: boolean | null
    yellow_cards: number | null
  }

  export type Player_statsMaxAggregateOutputType = {
    stat_id: number | null
    player_id: number | null
    gw_id: number | null
    xp: number | null
    assists: number | null
    bonus: number | null
    bps: number | null
    clean_sheets: number | null
    creativity: number | null
    expected_assists: number | null
    expected_goal_involvements: number | null
    expected_goals: number | null
    expected_goals_conceded: number | null
    fixture: number | null
    goals_conceded: number | null
    goals_scored: number | null
    ict_index: number | null
    influence: number | null
    kickoff_time: Date | null
    minutes: number | null
    modified: boolean | null
    opponent_team: string | null
    own_goals: number | null
    penalties_missed: number | null
    penalties_saved: number | null
    red_cards: number | null
    saves: number | null
    selected: number | null
    starts: number | null
    team_a_score: number | null
    team_h_score: number | null
    threat: number | null
    total_points: number | null
    transfers_balance: number | null
    transfers_in: number | null
    transfers_out: number | null
    value: number | null
    was_home: boolean | null
    yellow_cards: number | null
  }

  export type Player_statsCountAggregateOutputType = {
    stat_id: number
    player_id: number
    gw_id: number
    xp: number
    assists: number
    bonus: number
    bps: number
    clean_sheets: number
    creativity: number
    expected_assists: number
    expected_goal_involvements: number
    expected_goals: number
    expected_goals_conceded: number
    fixture: number
    goals_conceded: number
    goals_scored: number
    ict_index: number
    influence: number
    kickoff_time: number
    minutes: number
    modified: number
    opponent_team: number
    own_goals: number
    penalties_missed: number
    penalties_saved: number
    red_cards: number
    saves: number
    selected: number
    starts: number
    team_a_score: number
    team_h_score: number
    threat: number
    total_points: number
    transfers_balance: number
    transfers_in: number
    transfers_out: number
    value: number
    was_home: number
    yellow_cards: number
    _all: number
  }


  export type Player_statsAvgAggregateInputType = {
    stat_id?: true
    player_id?: true
    gw_id?: true
    xp?: true
    assists?: true
    bonus?: true
    bps?: true
    clean_sheets?: true
    creativity?: true
    expected_assists?: true
    expected_goal_involvements?: true
    expected_goals?: true
    expected_goals_conceded?: true
    fixture?: true
    goals_conceded?: true
    goals_scored?: true
    ict_index?: true
    influence?: true
    minutes?: true
    own_goals?: true
    penalties_missed?: true
    penalties_saved?: true
    red_cards?: true
    saves?: true
    selected?: true
    starts?: true
    team_a_score?: true
    team_h_score?: true
    threat?: true
    total_points?: true
    transfers_balance?: true
    transfers_in?: true
    transfers_out?: true
    value?: true
    yellow_cards?: true
  }

  export type Player_statsSumAggregateInputType = {
    stat_id?: true
    player_id?: true
    gw_id?: true
    xp?: true
    assists?: true
    bonus?: true
    bps?: true
    clean_sheets?: true
    creativity?: true
    expected_assists?: true
    expected_goal_involvements?: true
    expected_goals?: true
    expected_goals_conceded?: true
    fixture?: true
    goals_conceded?: true
    goals_scored?: true
    ict_index?: true
    influence?: true
    minutes?: true
    own_goals?: true
    penalties_missed?: true
    penalties_saved?: true
    red_cards?: true
    saves?: true
    selected?: true
    starts?: true
    team_a_score?: true
    team_h_score?: true
    threat?: true
    total_points?: true
    transfers_balance?: true
    transfers_in?: true
    transfers_out?: true
    value?: true
    yellow_cards?: true
  }

  export type Player_statsMinAggregateInputType = {
    stat_id?: true
    player_id?: true
    gw_id?: true
    xp?: true
    assists?: true
    bonus?: true
    bps?: true
    clean_sheets?: true
    creativity?: true
    expected_assists?: true
    expected_goal_involvements?: true
    expected_goals?: true
    expected_goals_conceded?: true
    fixture?: true
    goals_conceded?: true
    goals_scored?: true
    ict_index?: true
    influence?: true
    kickoff_time?: true
    minutes?: true
    modified?: true
    opponent_team?: true
    own_goals?: true
    penalties_missed?: true
    penalties_saved?: true
    red_cards?: true
    saves?: true
    selected?: true
    starts?: true
    team_a_score?: true
    team_h_score?: true
    threat?: true
    total_points?: true
    transfers_balance?: true
    transfers_in?: true
    transfers_out?: true
    value?: true
    was_home?: true
    yellow_cards?: true
  }

  export type Player_statsMaxAggregateInputType = {
    stat_id?: true
    player_id?: true
    gw_id?: true
    xp?: true
    assists?: true
    bonus?: true
    bps?: true
    clean_sheets?: true
    creativity?: true
    expected_assists?: true
    expected_goal_involvements?: true
    expected_goals?: true
    expected_goals_conceded?: true
    fixture?: true
    goals_conceded?: true
    goals_scored?: true
    ict_index?: true
    influence?: true
    kickoff_time?: true
    minutes?: true
    modified?: true
    opponent_team?: true
    own_goals?: true
    penalties_missed?: true
    penalties_saved?: true
    red_cards?: true
    saves?: true
    selected?: true
    starts?: true
    team_a_score?: true
    team_h_score?: true
    threat?: true
    total_points?: true
    transfers_balance?: true
    transfers_in?: true
    transfers_out?: true
    value?: true
    was_home?: true
    yellow_cards?: true
  }

  export type Player_statsCountAggregateInputType = {
    stat_id?: true
    player_id?: true
    gw_id?: true
    xp?: true
    assists?: true
    bonus?: true
    bps?: true
    clean_sheets?: true
    creativity?: true
    expected_assists?: true
    expected_goal_involvements?: true
    expected_goals?: true
    expected_goals_conceded?: true
    fixture?: true
    goals_conceded?: true
    goals_scored?: true
    ict_index?: true
    influence?: true
    kickoff_time?: true
    minutes?: true
    modified?: true
    opponent_team?: true
    own_goals?: true
    penalties_missed?: true
    penalties_saved?: true
    red_cards?: true
    saves?: true
    selected?: true
    starts?: true
    team_a_score?: true
    team_h_score?: true
    threat?: true
    total_points?: true
    transfers_balance?: true
    transfers_in?: true
    transfers_out?: true
    value?: true
    was_home?: true
    yellow_cards?: true
    _all?: true
  }

  export type Player_statsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_stats to aggregate.
     */
    where?: player_statsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_stats to fetch.
     */
    orderBy?: player_statsOrderByWithRelationInput | player_statsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: player_statsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned player_stats
    **/
    _count?: true | Player_statsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Player_statsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Player_statsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Player_statsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Player_statsMaxAggregateInputType
  }

  export type GetPlayer_statsAggregateType<T extends Player_statsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer_stats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer_stats[P]>
      : GetScalarType<T[P], AggregatePlayer_stats[P]>
  }




  export type player_statsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_statsWhereInput
    orderBy?: player_statsOrderByWithAggregationInput | player_statsOrderByWithAggregationInput[]
    by: Player_statsScalarFieldEnum[] | Player_statsScalarFieldEnum
    having?: player_statsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Player_statsCountAggregateInputType | true
    _avg?: Player_statsAvgAggregateInputType
    _sum?: Player_statsSumAggregateInputType
    _min?: Player_statsMinAggregateInputType
    _max?: Player_statsMaxAggregateInputType
  }

  export type Player_statsGroupByOutputType = {
    stat_id: number
    player_id: number | null
    gw_id: number | null
    xp: number | null
    assists: number | null
    bonus: number | null
    bps: number | null
    clean_sheets: number | null
    creativity: number | null
    expected_assists: number | null
    expected_goal_involvements: number | null
    expected_goals: number | null
    expected_goals_conceded: number | null
    fixture: number | null
    goals_conceded: number | null
    goals_scored: number | null
    ict_index: number | null
    influence: number | null
    kickoff_time: Date | null
    minutes: number | null
    modified: boolean | null
    opponent_team: string | null
    own_goals: number | null
    penalties_missed: number | null
    penalties_saved: number | null
    red_cards: number | null
    saves: number | null
    selected: number | null
    starts: number | null
    team_a_score: number | null
    team_h_score: number | null
    threat: number | null
    total_points: number | null
    transfers_balance: number | null
    transfers_in: number | null
    transfers_out: number | null
    value: number | null
    was_home: boolean | null
    yellow_cards: number | null
    _count: Player_statsCountAggregateOutputType | null
    _avg: Player_statsAvgAggregateOutputType | null
    _sum: Player_statsSumAggregateOutputType | null
    _min: Player_statsMinAggregateOutputType | null
    _max: Player_statsMaxAggregateOutputType | null
  }

  type GetPlayer_statsGroupByPayload<T extends player_statsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Player_statsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Player_statsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Player_statsGroupByOutputType[P]>
            : GetScalarType<T[P], Player_statsGroupByOutputType[P]>
        }
      >
    >


  export type player_statsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stat_id?: boolean
    player_id?: boolean
    gw_id?: boolean
    xp?: boolean
    assists?: boolean
    bonus?: boolean
    bps?: boolean
    clean_sheets?: boolean
    creativity?: boolean
    expected_assists?: boolean
    expected_goal_involvements?: boolean
    expected_goals?: boolean
    expected_goals_conceded?: boolean
    fixture?: boolean
    goals_conceded?: boolean
    goals_scored?: boolean
    ict_index?: boolean
    influence?: boolean
    kickoff_time?: boolean
    minutes?: boolean
    modified?: boolean
    opponent_team?: boolean
    own_goals?: boolean
    penalties_missed?: boolean
    penalties_saved?: boolean
    red_cards?: boolean
    saves?: boolean
    selected?: boolean
    starts?: boolean
    team_a_score?: boolean
    team_h_score?: boolean
    threat?: boolean
    total_points?: boolean
    transfers_balance?: boolean
    transfers_in?: boolean
    transfers_out?: boolean
    value?: boolean
    was_home?: boolean
    yellow_cards?: boolean
    gameweeks?: boolean | player_stats$gameweeksArgs<ExtArgs>
    players?: boolean | player_stats$playersArgs<ExtArgs>
  }, ExtArgs["result"]["player_stats"]>

  export type player_statsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stat_id?: boolean
    player_id?: boolean
    gw_id?: boolean
    xp?: boolean
    assists?: boolean
    bonus?: boolean
    bps?: boolean
    clean_sheets?: boolean
    creativity?: boolean
    expected_assists?: boolean
    expected_goal_involvements?: boolean
    expected_goals?: boolean
    expected_goals_conceded?: boolean
    fixture?: boolean
    goals_conceded?: boolean
    goals_scored?: boolean
    ict_index?: boolean
    influence?: boolean
    kickoff_time?: boolean
    minutes?: boolean
    modified?: boolean
    opponent_team?: boolean
    own_goals?: boolean
    penalties_missed?: boolean
    penalties_saved?: boolean
    red_cards?: boolean
    saves?: boolean
    selected?: boolean
    starts?: boolean
    team_a_score?: boolean
    team_h_score?: boolean
    threat?: boolean
    total_points?: boolean
    transfers_balance?: boolean
    transfers_in?: boolean
    transfers_out?: boolean
    value?: boolean
    was_home?: boolean
    yellow_cards?: boolean
    gameweeks?: boolean | player_stats$gameweeksArgs<ExtArgs>
    players?: boolean | player_stats$playersArgs<ExtArgs>
  }, ExtArgs["result"]["player_stats"]>

  export type player_statsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stat_id?: boolean
    player_id?: boolean
    gw_id?: boolean
    xp?: boolean
    assists?: boolean
    bonus?: boolean
    bps?: boolean
    clean_sheets?: boolean
    creativity?: boolean
    expected_assists?: boolean
    expected_goal_involvements?: boolean
    expected_goals?: boolean
    expected_goals_conceded?: boolean
    fixture?: boolean
    goals_conceded?: boolean
    goals_scored?: boolean
    ict_index?: boolean
    influence?: boolean
    kickoff_time?: boolean
    minutes?: boolean
    modified?: boolean
    opponent_team?: boolean
    own_goals?: boolean
    penalties_missed?: boolean
    penalties_saved?: boolean
    red_cards?: boolean
    saves?: boolean
    selected?: boolean
    starts?: boolean
    team_a_score?: boolean
    team_h_score?: boolean
    threat?: boolean
    total_points?: boolean
    transfers_balance?: boolean
    transfers_in?: boolean
    transfers_out?: boolean
    value?: boolean
    was_home?: boolean
    yellow_cards?: boolean
    gameweeks?: boolean | player_stats$gameweeksArgs<ExtArgs>
    players?: boolean | player_stats$playersArgs<ExtArgs>
  }, ExtArgs["result"]["player_stats"]>

  export type player_statsSelectScalar = {
    stat_id?: boolean
    player_id?: boolean
    gw_id?: boolean
    xp?: boolean
    assists?: boolean
    bonus?: boolean
    bps?: boolean
    clean_sheets?: boolean
    creativity?: boolean
    expected_assists?: boolean
    expected_goal_involvements?: boolean
    expected_goals?: boolean
    expected_goals_conceded?: boolean
    fixture?: boolean
    goals_conceded?: boolean
    goals_scored?: boolean
    ict_index?: boolean
    influence?: boolean
    kickoff_time?: boolean
    minutes?: boolean
    modified?: boolean
    opponent_team?: boolean
    own_goals?: boolean
    penalties_missed?: boolean
    penalties_saved?: boolean
    red_cards?: boolean
    saves?: boolean
    selected?: boolean
    starts?: boolean
    team_a_score?: boolean
    team_h_score?: boolean
    threat?: boolean
    total_points?: boolean
    transfers_balance?: boolean
    transfers_in?: boolean
    transfers_out?: boolean
    value?: boolean
    was_home?: boolean
    yellow_cards?: boolean
  }

  export type player_statsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"stat_id" | "player_id" | "gw_id" | "xp" | "assists" | "bonus" | "bps" | "clean_sheets" | "creativity" | "expected_assists" | "expected_goal_involvements" | "expected_goals" | "expected_goals_conceded" | "fixture" | "goals_conceded" | "goals_scored" | "ict_index" | "influence" | "kickoff_time" | "minutes" | "modified" | "opponent_team" | "own_goals" | "penalties_missed" | "penalties_saved" | "red_cards" | "saves" | "selected" | "starts" | "team_a_score" | "team_h_score" | "threat" | "total_points" | "transfers_balance" | "transfers_in" | "transfers_out" | "value" | "was_home" | "yellow_cards", ExtArgs["result"]["player_stats"]>
  export type player_statsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameweeks?: boolean | player_stats$gameweeksArgs<ExtArgs>
    players?: boolean | player_stats$playersArgs<ExtArgs>
  }
  export type player_statsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameweeks?: boolean | player_stats$gameweeksArgs<ExtArgs>
    players?: boolean | player_stats$playersArgs<ExtArgs>
  }
  export type player_statsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameweeks?: boolean | player_stats$gameweeksArgs<ExtArgs>
    players?: boolean | player_stats$playersArgs<ExtArgs>
  }

  export type $player_statsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "player_stats"
    objects: {
      gameweeks: Prisma.$gameweeksPayload<ExtArgs> | null
      players: Prisma.$playersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      stat_id: number
      player_id: number | null
      gw_id: number | null
      xp: number | null
      assists: number | null
      bonus: number | null
      bps: number | null
      clean_sheets: number | null
      creativity: number | null
      expected_assists: number | null
      expected_goal_involvements: number | null
      expected_goals: number | null
      expected_goals_conceded: number | null
      fixture: number | null
      goals_conceded: number | null
      goals_scored: number | null
      ict_index: number | null
      influence: number | null
      kickoff_time: Date | null
      minutes: number | null
      modified: boolean | null
      opponent_team: string | null
      own_goals: number | null
      penalties_missed: number | null
      penalties_saved: number | null
      red_cards: number | null
      saves: number | null
      selected: number | null
      starts: number | null
      team_a_score: number | null
      team_h_score: number | null
      threat: number | null
      total_points: number | null
      transfers_balance: number | null
      transfers_in: number | null
      transfers_out: number | null
      value: number | null
      was_home: boolean | null
      yellow_cards: number | null
    }, ExtArgs["result"]["player_stats"]>
    composites: {}
  }

  type player_statsGetPayload<S extends boolean | null | undefined | player_statsDefaultArgs> = $Result.GetResult<Prisma.$player_statsPayload, S>

  type player_statsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<player_statsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Player_statsCountAggregateInputType | true
    }

  export interface player_statsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['player_stats'], meta: { name: 'player_stats' } }
    /**
     * Find zero or one Player_stats that matches the filter.
     * @param {player_statsFindUniqueArgs} args - Arguments to find a Player_stats
     * @example
     * // Get one Player_stats
     * const player_stats = await prisma.player_stats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends player_statsFindUniqueArgs>(args: SelectSubset<T, player_statsFindUniqueArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player_stats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {player_statsFindUniqueOrThrowArgs} args - Arguments to find a Player_stats
     * @example
     * // Get one Player_stats
     * const player_stats = await prisma.player_stats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends player_statsFindUniqueOrThrowArgs>(args: SelectSubset<T, player_statsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsFindFirstArgs} args - Arguments to find a Player_stats
     * @example
     * // Get one Player_stats
     * const player_stats = await prisma.player_stats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends player_statsFindFirstArgs>(args?: SelectSubset<T, player_statsFindFirstArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_stats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsFindFirstOrThrowArgs} args - Arguments to find a Player_stats
     * @example
     * // Get one Player_stats
     * const player_stats = await prisma.player_stats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends player_statsFindFirstOrThrowArgs>(args?: SelectSubset<T, player_statsFindFirstOrThrowArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Player_stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Player_stats
     * const player_stats = await prisma.player_stats.findMany()
     * 
     * // Get first 10 Player_stats
     * const player_stats = await prisma.player_stats.findMany({ take: 10 })
     * 
     * // Only select the `stat_id`
     * const player_statsWithStat_idOnly = await prisma.player_stats.findMany({ select: { stat_id: true } })
     * 
     */
    findMany<T extends player_statsFindManyArgs>(args?: SelectSubset<T, player_statsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player_stats.
     * @param {player_statsCreateArgs} args - Arguments to create a Player_stats.
     * @example
     * // Create one Player_stats
     * const Player_stats = await prisma.player_stats.create({
     *   data: {
     *     // ... data to create a Player_stats
     *   }
     * })
     * 
     */
    create<T extends player_statsCreateArgs>(args: SelectSubset<T, player_statsCreateArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Player_stats.
     * @param {player_statsCreateManyArgs} args - Arguments to create many Player_stats.
     * @example
     * // Create many Player_stats
     * const player_stats = await prisma.player_stats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends player_statsCreateManyArgs>(args?: SelectSubset<T, player_statsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Player_stats and returns the data saved in the database.
     * @param {player_statsCreateManyAndReturnArgs} args - Arguments to create many Player_stats.
     * @example
     * // Create many Player_stats
     * const player_stats = await prisma.player_stats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Player_stats and only return the `stat_id`
     * const player_statsWithStat_idOnly = await prisma.player_stats.createManyAndReturn({
     *   select: { stat_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends player_statsCreateManyAndReturnArgs>(args?: SelectSubset<T, player_statsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player_stats.
     * @param {player_statsDeleteArgs} args - Arguments to delete one Player_stats.
     * @example
     * // Delete one Player_stats
     * const Player_stats = await prisma.player_stats.delete({
     *   where: {
     *     // ... filter to delete one Player_stats
     *   }
     * })
     * 
     */
    delete<T extends player_statsDeleteArgs>(args: SelectSubset<T, player_statsDeleteArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player_stats.
     * @param {player_statsUpdateArgs} args - Arguments to update one Player_stats.
     * @example
     * // Update one Player_stats
     * const player_stats = await prisma.player_stats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends player_statsUpdateArgs>(args: SelectSubset<T, player_statsUpdateArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Player_stats.
     * @param {player_statsDeleteManyArgs} args - Arguments to filter Player_stats to delete.
     * @example
     * // Delete a few Player_stats
     * const { count } = await prisma.player_stats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends player_statsDeleteManyArgs>(args?: SelectSubset<T, player_statsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Player_stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Player_stats
     * const player_stats = await prisma.player_stats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends player_statsUpdateManyArgs>(args: SelectSubset<T, player_statsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Player_stats and returns the data updated in the database.
     * @param {player_statsUpdateManyAndReturnArgs} args - Arguments to update many Player_stats.
     * @example
     * // Update many Player_stats
     * const player_stats = await prisma.player_stats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Player_stats and only return the `stat_id`
     * const player_statsWithStat_idOnly = await prisma.player_stats.updateManyAndReturn({
     *   select: { stat_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends player_statsUpdateManyAndReturnArgs>(args: SelectSubset<T, player_statsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player_stats.
     * @param {player_statsUpsertArgs} args - Arguments to update or create a Player_stats.
     * @example
     * // Update or create a Player_stats
     * const player_stats = await prisma.player_stats.upsert({
     *   create: {
     *     // ... data to create a Player_stats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player_stats we want to update
     *   }
     * })
     */
    upsert<T extends player_statsUpsertArgs>(args: SelectSubset<T, player_statsUpsertArgs<ExtArgs>>): Prisma__player_statsClient<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Player_stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsCountArgs} args - Arguments to filter Player_stats to count.
     * @example
     * // Count the number of Player_stats
     * const count = await prisma.player_stats.count({
     *   where: {
     *     // ... the filter for the Player_stats we want to count
     *   }
     * })
    **/
    count<T extends player_statsCountArgs>(
      args?: Subset<T, player_statsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Player_statsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player_stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_statsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Player_statsAggregateArgs>(args: Subset<T, Player_statsAggregateArgs>): Prisma.PrismaPromise<GetPlayer_statsAggregateType<T>>

    /**
     * Group by Player_stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_statsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends player_statsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: player_statsGroupByArgs['orderBy'] }
        : { orderBy?: player_statsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, player_statsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayer_statsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the player_stats model
   */
  readonly fields: player_statsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for player_stats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__player_statsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameweeks<T extends player_stats$gameweeksArgs<ExtArgs> = {}>(args?: Subset<T, player_stats$gameweeksArgs<ExtArgs>>): Prisma__gameweeksClient<$Result.GetResult<Prisma.$gameweeksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    players<T extends player_stats$playersArgs<ExtArgs> = {}>(args?: Subset<T, player_stats$playersArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the player_stats model
   */
  interface player_statsFieldRefs {
    readonly stat_id: FieldRef<"player_stats", 'Int'>
    readonly player_id: FieldRef<"player_stats", 'Int'>
    readonly gw_id: FieldRef<"player_stats", 'Int'>
    readonly xp: FieldRef<"player_stats", 'Float'>
    readonly assists: FieldRef<"player_stats", 'Int'>
    readonly bonus: FieldRef<"player_stats", 'Int'>
    readonly bps: FieldRef<"player_stats", 'Int'>
    readonly clean_sheets: FieldRef<"player_stats", 'Int'>
    readonly creativity: FieldRef<"player_stats", 'Float'>
    readonly expected_assists: FieldRef<"player_stats", 'Float'>
    readonly expected_goal_involvements: FieldRef<"player_stats", 'Float'>
    readonly expected_goals: FieldRef<"player_stats", 'Float'>
    readonly expected_goals_conceded: FieldRef<"player_stats", 'Float'>
    readonly fixture: FieldRef<"player_stats", 'Int'>
    readonly goals_conceded: FieldRef<"player_stats", 'Int'>
    readonly goals_scored: FieldRef<"player_stats", 'Int'>
    readonly ict_index: FieldRef<"player_stats", 'Float'>
    readonly influence: FieldRef<"player_stats", 'Float'>
    readonly kickoff_time: FieldRef<"player_stats", 'DateTime'>
    readonly minutes: FieldRef<"player_stats", 'Int'>
    readonly modified: FieldRef<"player_stats", 'Boolean'>
    readonly opponent_team: FieldRef<"player_stats", 'String'>
    readonly own_goals: FieldRef<"player_stats", 'Int'>
    readonly penalties_missed: FieldRef<"player_stats", 'Int'>
    readonly penalties_saved: FieldRef<"player_stats", 'Int'>
    readonly red_cards: FieldRef<"player_stats", 'Int'>
    readonly saves: FieldRef<"player_stats", 'Int'>
    readonly selected: FieldRef<"player_stats", 'Int'>
    readonly starts: FieldRef<"player_stats", 'Int'>
    readonly team_a_score: FieldRef<"player_stats", 'Int'>
    readonly team_h_score: FieldRef<"player_stats", 'Int'>
    readonly threat: FieldRef<"player_stats", 'Float'>
    readonly total_points: FieldRef<"player_stats", 'Int'>
    readonly transfers_balance: FieldRef<"player_stats", 'Int'>
    readonly transfers_in: FieldRef<"player_stats", 'Int'>
    readonly transfers_out: FieldRef<"player_stats", 'Int'>
    readonly value: FieldRef<"player_stats", 'Float'>
    readonly was_home: FieldRef<"player_stats", 'Boolean'>
    readonly yellow_cards: FieldRef<"player_stats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * player_stats findUnique
   */
  export type player_statsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
    /**
     * Filter, which player_stats to fetch.
     */
    where: player_statsWhereUniqueInput
  }

  /**
   * player_stats findUniqueOrThrow
   */
  export type player_statsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
    /**
     * Filter, which player_stats to fetch.
     */
    where: player_statsWhereUniqueInput
  }

  /**
   * player_stats findFirst
   */
  export type player_statsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
    /**
     * Filter, which player_stats to fetch.
     */
    where?: player_statsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_stats to fetch.
     */
    orderBy?: player_statsOrderByWithRelationInput | player_statsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_stats.
     */
    cursor?: player_statsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_stats.
     */
    distinct?: Player_statsScalarFieldEnum | Player_statsScalarFieldEnum[]
  }

  /**
   * player_stats findFirstOrThrow
   */
  export type player_statsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
    /**
     * Filter, which player_stats to fetch.
     */
    where?: player_statsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_stats to fetch.
     */
    orderBy?: player_statsOrderByWithRelationInput | player_statsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_stats.
     */
    cursor?: player_statsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_stats.
     */
    distinct?: Player_statsScalarFieldEnum | Player_statsScalarFieldEnum[]
  }

  /**
   * player_stats findMany
   */
  export type player_statsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
    /**
     * Filter, which player_stats to fetch.
     */
    where?: player_statsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_stats to fetch.
     */
    orderBy?: player_statsOrderByWithRelationInput | player_statsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing player_stats.
     */
    cursor?: player_statsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_stats.
     */
    skip?: number
    distinct?: Player_statsScalarFieldEnum | Player_statsScalarFieldEnum[]
  }

  /**
   * player_stats create
   */
  export type player_statsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
    /**
     * The data needed to create a player_stats.
     */
    data?: XOR<player_statsCreateInput, player_statsUncheckedCreateInput>
  }

  /**
   * player_stats createMany
   */
  export type player_statsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many player_stats.
     */
    data: player_statsCreateManyInput | player_statsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * player_stats createManyAndReturn
   */
  export type player_statsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * The data used to create many player_stats.
     */
    data: player_statsCreateManyInput | player_statsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * player_stats update
   */
  export type player_statsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
    /**
     * The data needed to update a player_stats.
     */
    data: XOR<player_statsUpdateInput, player_statsUncheckedUpdateInput>
    /**
     * Choose, which player_stats to update.
     */
    where: player_statsWhereUniqueInput
  }

  /**
   * player_stats updateMany
   */
  export type player_statsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update player_stats.
     */
    data: XOR<player_statsUpdateManyMutationInput, player_statsUncheckedUpdateManyInput>
    /**
     * Filter which player_stats to update
     */
    where?: player_statsWhereInput
    /**
     * Limit how many player_stats to update.
     */
    limit?: number
  }

  /**
   * player_stats updateManyAndReturn
   */
  export type player_statsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * The data used to update player_stats.
     */
    data: XOR<player_statsUpdateManyMutationInput, player_statsUncheckedUpdateManyInput>
    /**
     * Filter which player_stats to update
     */
    where?: player_statsWhereInput
    /**
     * Limit how many player_stats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * player_stats upsert
   */
  export type player_statsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
    /**
     * The filter to search for the player_stats to update in case it exists.
     */
    where: player_statsWhereUniqueInput
    /**
     * In case the player_stats found by the `where` argument doesn't exist, create a new player_stats with this data.
     */
    create: XOR<player_statsCreateInput, player_statsUncheckedCreateInput>
    /**
     * In case the player_stats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<player_statsUpdateInput, player_statsUncheckedUpdateInput>
  }

  /**
   * player_stats delete
   */
  export type player_statsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
    /**
     * Filter which player_stats to delete.
     */
    where: player_statsWhereUniqueInput
  }

  /**
   * player_stats deleteMany
   */
  export type player_statsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_stats to delete
     */
    where?: player_statsWhereInput
    /**
     * Limit how many player_stats to delete.
     */
    limit?: number
  }

  /**
   * player_stats.gameweeks
   */
  export type player_stats$gameweeksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gameweeks
     */
    select?: gameweeksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gameweeks
     */
    omit?: gameweeksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameweeksInclude<ExtArgs> | null
    where?: gameweeksWhereInput
  }

  /**
   * player_stats.players
   */
  export type player_stats$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    where?: playersWhereInput
  }

  /**
   * player_stats without action
   */
  export type player_statsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
  }


  /**
   * Model players
   */

  export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  export type PlayersAvgAggregateOutputType = {
    player_id: number | null
    element: number | null
  }

  export type PlayersSumAggregateOutputType = {
    player_id: number | null
    element: number | null
  }

  export type PlayersMinAggregateOutputType = {
    player_id: number | null
    name: string | null
    position: string | null
    team: string | null
    element: number | null
  }

  export type PlayersMaxAggregateOutputType = {
    player_id: number | null
    name: string | null
    position: string | null
    team: string | null
    element: number | null
  }

  export type PlayersCountAggregateOutputType = {
    player_id: number
    name: number
    position: number
    team: number
    element: number
    _all: number
  }


  export type PlayersAvgAggregateInputType = {
    player_id?: true
    element?: true
  }

  export type PlayersSumAggregateInputType = {
    player_id?: true
    element?: true
  }

  export type PlayersMinAggregateInputType = {
    player_id?: true
    name?: true
    position?: true
    team?: true
    element?: true
  }

  export type PlayersMaxAggregateInputType = {
    player_id?: true
    name?: true
    position?: true
    team?: true
    element?: true
  }

  export type PlayersCountAggregateInputType = {
    player_id?: true
    name?: true
    position?: true
    team?: true
    element?: true
    _all?: true
  }

  export type PlayersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which players to aggregate.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned players
    **/
    _count?: true | PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayersMaxAggregateInputType
  }

  export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers[P]>
      : GetScalarType<T[P], AggregatePlayers[P]>
  }




  export type playersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playersWhereInput
    orderBy?: playersOrderByWithAggregationInput | playersOrderByWithAggregationInput[]
    by: PlayersScalarFieldEnum[] | PlayersScalarFieldEnum
    having?: playersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayersCountAggregateInputType | true
    _avg?: PlayersAvgAggregateInputType
    _sum?: PlayersSumAggregateInputType
    _min?: PlayersMinAggregateInputType
    _max?: PlayersMaxAggregateInputType
  }

  export type PlayersGroupByOutputType = {
    player_id: number
    name: string
    position: string | null
    team: string | null
    element: number | null
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  type GetPlayersGroupByPayload<T extends playersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], PlayersGroupByOutputType[P]>
        }
      >
    >


  export type playersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    element?: boolean
    player_stats?: boolean | players$player_statsArgs<ExtArgs>
    _count?: boolean | PlayersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type playersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    element?: boolean
  }, ExtArgs["result"]["players"]>

  export type playersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    element?: boolean
  }, ExtArgs["result"]["players"]>

  export type playersSelectScalar = {
    player_id?: boolean
    name?: boolean
    position?: boolean
    team?: boolean
    element?: boolean
  }

  export type playersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"player_id" | "name" | "position" | "team" | "element", ExtArgs["result"]["players"]>
  export type playersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player_stats?: boolean | players$player_statsArgs<ExtArgs>
    _count?: boolean | PlayersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type playersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type playersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $playersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "players"
    objects: {
      player_stats: Prisma.$player_statsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      player_id: number
      name: string
      position: string | null
      team: string | null
      element: number | null
    }, ExtArgs["result"]["players"]>
    composites: {}
  }

  type playersGetPayload<S extends boolean | null | undefined | playersDefaultArgs> = $Result.GetResult<Prisma.$playersPayload, S>

  type playersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayersCountAggregateInputType | true
    }

  export interface playersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['players'], meta: { name: 'players' } }
    /**
     * Find zero or one Players that matches the filter.
     * @param {playersFindUniqueArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playersFindUniqueArgs>(args: SelectSubset<T, playersFindUniqueArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Players that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playersFindUniqueOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playersFindUniqueOrThrowArgs>(args: SelectSubset<T, playersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindFirstArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playersFindFirstArgs>(args?: SelectSubset<T, playersFindFirstArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindFirstOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playersFindFirstOrThrowArgs>(args?: SelectSubset<T, playersFindFirstOrThrowArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.players.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.players.findMany({ take: 10 })
     * 
     * // Only select the `player_id`
     * const playersWithPlayer_idOnly = await prisma.players.findMany({ select: { player_id: true } })
     * 
     */
    findMany<T extends playersFindManyArgs>(args?: SelectSubset<T, playersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Players.
     * @param {playersCreateArgs} args - Arguments to create a Players.
     * @example
     * // Create one Players
     * const Players = await prisma.players.create({
     *   data: {
     *     // ... data to create a Players
     *   }
     * })
     * 
     */
    create<T extends playersCreateArgs>(args: SelectSubset<T, playersCreateArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {playersCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playersCreateManyArgs>(args?: SelectSubset<T, playersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {playersCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `player_id`
     * const playersWithPlayer_idOnly = await prisma.players.createManyAndReturn({
     *   select: { player_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playersCreateManyAndReturnArgs>(args?: SelectSubset<T, playersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Players.
     * @param {playersDeleteArgs} args - Arguments to delete one Players.
     * @example
     * // Delete one Players
     * const Players = await prisma.players.delete({
     *   where: {
     *     // ... filter to delete one Players
     *   }
     * })
     * 
     */
    delete<T extends playersDeleteArgs>(args: SelectSubset<T, playersDeleteArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Players.
     * @param {playersUpdateArgs} args - Arguments to update one Players.
     * @example
     * // Update one Players
     * const players = await prisma.players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playersUpdateArgs>(args: SelectSubset<T, playersUpdateArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {playersDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playersDeleteManyArgs>(args?: SelectSubset<T, playersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playersUpdateManyArgs>(args: SelectSubset<T, playersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {playersUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `player_id`
     * const playersWithPlayer_idOnly = await prisma.players.updateManyAndReturn({
     *   select: { player_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends playersUpdateManyAndReturnArgs>(args: SelectSubset<T, playersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Players.
     * @param {playersUpsertArgs} args - Arguments to update or create a Players.
     * @example
     * // Update or create a Players
     * const players = await prisma.players.upsert({
     *   create: {
     *     // ... data to create a Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players we want to update
     *   }
     * })
     */
    upsert<T extends playersUpsertArgs>(args: SelectSubset<T, playersUpsertArgs<ExtArgs>>): Prisma__playersClient<$Result.GetResult<Prisma.$playersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.players.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends playersCountArgs>(
      args?: Subset<T, playersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayersAggregateArgs>(args: Subset<T, PlayersAggregateArgs>): Prisma.PrismaPromise<GetPlayersAggregateType<T>>

    /**
     * Group by Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playersGroupByArgs['orderBy'] }
        : { orderBy?: playersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the players model
   */
  readonly fields: playersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player_stats<T extends players$player_statsArgs<ExtArgs> = {}>(args?: Subset<T, players$player_statsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_statsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the players model
   */
  interface playersFieldRefs {
    readonly player_id: FieldRef<"players", 'Int'>
    readonly name: FieldRef<"players", 'String'>
    readonly position: FieldRef<"players", 'String'>
    readonly team: FieldRef<"players", 'String'>
    readonly element: FieldRef<"players", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * players findUnique
   */
  export type playersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players findUniqueOrThrow
   */
  export type playersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players findFirst
   */
  export type playersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * players findFirstOrThrow
   */
  export type playersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * players findMany
   */
  export type playersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playersOrderByWithRelationInput | playersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing players.
     */
    cursor?: playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * players create
   */
  export type playersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * The data needed to create a players.
     */
    data: XOR<playersCreateInput, playersUncheckedCreateInput>
  }

  /**
   * players createMany
   */
  export type playersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many players.
     */
    data: playersCreateManyInput | playersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * players createManyAndReturn
   */
  export type playersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * The data used to create many players.
     */
    data: playersCreateManyInput | playersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * players update
   */
  export type playersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * The data needed to update a players.
     */
    data: XOR<playersUpdateInput, playersUncheckedUpdateInput>
    /**
     * Choose, which players to update.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players updateMany
   */
  export type playersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update players.
     */
    data: XOR<playersUpdateManyMutationInput, playersUncheckedUpdateManyInput>
    /**
     * Filter which players to update
     */
    where?: playersWhereInput
    /**
     * Limit how many players to update.
     */
    limit?: number
  }

  /**
   * players updateManyAndReturn
   */
  export type playersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * The data used to update players.
     */
    data: XOR<playersUpdateManyMutationInput, playersUncheckedUpdateManyInput>
    /**
     * Filter which players to update
     */
    where?: playersWhereInput
    /**
     * Limit how many players to update.
     */
    limit?: number
  }

  /**
   * players upsert
   */
  export type playersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * The filter to search for the players to update in case it exists.
     */
    where: playersWhereUniqueInput
    /**
     * In case the players found by the `where` argument doesn't exist, create a new players with this data.
     */
    create: XOR<playersCreateInput, playersUncheckedCreateInput>
    /**
     * In case the players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playersUpdateInput, playersUncheckedUpdateInput>
  }

  /**
   * players delete
   */
  export type playersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
    /**
     * Filter which players to delete.
     */
    where: playersWhereUniqueInput
  }

  /**
   * players deleteMany
   */
  export type playersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which players to delete
     */
    where?: playersWhereInput
    /**
     * Limit how many players to delete.
     */
    limit?: number
  }

  /**
   * players.player_stats
   */
  export type players$player_statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_stats
     */
    select?: player_statsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_stats
     */
    omit?: player_statsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_statsInclude<ExtArgs> | null
    where?: player_statsWhereInput
    orderBy?: player_statsOrderByWithRelationInput | player_statsOrderByWithRelationInput[]
    cursor?: player_statsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Player_statsScalarFieldEnum | Player_statsScalarFieldEnum[]
  }

  /**
   * players without action
   */
  export type playersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the players
     */
    select?: playersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the players
     */
    omit?: playersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playersInclude<ExtArgs> | null
  }


  /**
   * Model teams
   */

  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _avg: TeamsAvgAggregateOutputType | null
    _sum: TeamsSumAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsAvgAggregateOutputType = {
    team_id: number | null
  }

  export type TeamsSumAggregateOutputType = {
    team_id: number | null
  }

  export type TeamsMinAggregateOutputType = {
    team_id: number | null
    name: string | null
    abbreviation: string | null
  }

  export type TeamsMaxAggregateOutputType = {
    team_id: number | null
    name: string | null
    abbreviation: string | null
  }

  export type TeamsCountAggregateOutputType = {
    team_id: number
    name: number
    abbreviation: number
    _all: number
  }


  export type TeamsAvgAggregateInputType = {
    team_id?: true
  }

  export type TeamsSumAggregateInputType = {
    team_id?: true
  }

  export type TeamsMinAggregateInputType = {
    team_id?: true
    name?: true
    abbreviation?: true
  }

  export type TeamsMaxAggregateInputType = {
    team_id?: true
    name?: true
    abbreviation?: true
  }

  export type TeamsCountAggregateInputType = {
    team_id?: true
    name?: true
    abbreviation?: true
    _all?: true
  }

  export type TeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to aggregate.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type teamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamsWhereInput
    orderBy?: teamsOrderByWithAggregationInput | teamsOrderByWithAggregationInput[]
    by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
    having?: teamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _avg?: TeamsAvgAggregateInputType
    _sum?: TeamsSumAggregateInputType
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }

  export type TeamsGroupByOutputType = {
    team_id: number
    name: string
    abbreviation: string | null
    _count: TeamsCountAggregateOutputType | null
    _avg: TeamsAvgAggregateOutputType | null
    _sum: TeamsSumAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends teamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type teamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    name?: boolean
    abbreviation?: boolean
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    name?: boolean
    abbreviation?: boolean
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    name?: boolean
    abbreviation?: boolean
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectScalar = {
    team_id?: boolean
    name?: boolean
    abbreviation?: boolean
  }

  export type teamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"team_id" | "name" | "abbreviation", ExtArgs["result"]["teams"]>

  export type $teamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teams"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      team_id: number
      name: string
      abbreviation: string | null
    }, ExtArgs["result"]["teams"]>
    composites: {}
  }

  type teamsGetPayload<S extends boolean | null | undefined | teamsDefaultArgs> = $Result.GetResult<Prisma.$teamsPayload, S>

  type teamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsCountAggregateInputType | true
    }

  export interface teamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teams'], meta: { name: 'teams' } }
    /**
     * Find zero or one Teams that matches the filter.
     * @param {teamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teamsFindUniqueArgs>(args: SelectSubset<T, teamsFindUniqueArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teamsFindUniqueOrThrowArgs>(args: SelectSubset<T, teamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teamsFindFirstArgs>(args?: SelectSubset<T, teamsFindFirstArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teamsFindFirstOrThrowArgs>(args?: SelectSubset<T, teamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `team_id`
     * const teamsWithTeam_idOnly = await prisma.teams.findMany({ select: { team_id: true } })
     * 
     */
    findMany<T extends teamsFindManyArgs>(args?: SelectSubset<T, teamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teams.
     * @param {teamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
     */
    create<T extends teamsCreateArgs>(args: SelectSubset<T, teamsCreateArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {teamsCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teamsCreateManyArgs>(args?: SelectSubset<T, teamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {teamsCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `team_id`
     * const teamsWithTeam_idOnly = await prisma.teams.createManyAndReturn({
     *   select: { team_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teamsCreateManyAndReturnArgs>(args?: SelectSubset<T, teamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teams.
     * @param {teamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
     */
    delete<T extends teamsDeleteArgs>(args: SelectSubset<T, teamsDeleteArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teams.
     * @param {teamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teamsUpdateArgs>(args: SelectSubset<T, teamsUpdateArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {teamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teamsDeleteManyArgs>(args?: SelectSubset<T, teamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teamsUpdateManyArgs>(args: SelectSubset<T, teamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {teamsUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `team_id`
     * const teamsWithTeam_idOnly = await prisma.teams.updateManyAndReturn({
     *   select: { team_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends teamsUpdateManyAndReturnArgs>(args: SelectSubset<T, teamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teams.
     * @param {teamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
     */
    upsert<T extends teamsUpsertArgs>(args: SelectSubset<T, teamsUpsertArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends teamsCountArgs>(
      args?: Subset<T, teamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamsGroupByArgs['orderBy'] }
        : { orderBy?: teamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teams model
   */
  readonly fields: teamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teams model
   */
  interface teamsFieldRefs {
    readonly team_id: FieldRef<"teams", 'Int'>
    readonly name: FieldRef<"teams", 'String'>
    readonly abbreviation: FieldRef<"teams", 'String'>
  }
    

  // Custom InputTypes
  /**
   * teams findUnique
   */
  export type teamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams findUniqueOrThrow
   */
  export type teamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams findFirst
   */
  export type teamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams findFirstOrThrow
   */
  export type teamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams findMany
   */
  export type teamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams create
   */
  export type teamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * The data needed to create a teams.
     */
    data: XOR<teamsCreateInput, teamsUncheckedCreateInput>
  }

  /**
   * teams createMany
   */
  export type teamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamsCreateManyInput | teamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teams createManyAndReturn
   */
  export type teamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * The data used to create many teams.
     */
    data: teamsCreateManyInput | teamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teams update
   */
  export type teamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * The data needed to update a teams.
     */
    data: XOR<teamsUpdateInput, teamsUncheckedUpdateInput>
    /**
     * Choose, which teams to update.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams updateMany
   */
  export type teamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * teams updateManyAndReturn
   */
  export type teamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * The data used to update teams.
     */
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * teams upsert
   */
  export type teamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * The filter to search for the teams to update in case it exists.
     */
    where: teamsWhereUniqueInput
    /**
     * In case the teams found by the `where` argument doesn't exist, create a new teams with this data.
     */
    create: XOR<teamsCreateInput, teamsUncheckedCreateInput>
    /**
     * In case the teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamsUpdateInput, teamsUncheckedUpdateInput>
  }

  /**
   * teams delete
   */
  export type teamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Filter which teams to delete.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams deleteMany
   */
  export type teamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to delete.
     */
    limit?: number
  }

  /**
   * teams without action
   */
  export type teamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GameweeksScalarFieldEnum: {
    gw_id: 'gw_id',
    season: 'season',
    gw_number: 'gw_number',
    start_date: 'start_date',
    end_date: 'end_date'
  };

  export type GameweeksScalarFieldEnum = (typeof GameweeksScalarFieldEnum)[keyof typeof GameweeksScalarFieldEnum]


  export const Merged_gw_summaryScalarFieldEnum: {
    element: 'element',
    name: 'name',
    position: 'position',
    team: 'team',
    games_played: 'games_played',
    total_minutes: 'total_minutes',
    total_goals: 'total_goals',
    total_assists: 'total_assists',
    total_clean_sheets: 'total_clean_sheets',
    yellow_cards: 'yellow_cards',
    red_cards: 'red_cards',
    total_points: 'total_points',
    avg_value: 'avg_value',
    avg_xp: 'avg_xp',
    first_gw: 'first_gw',
    last_gw: 'last_gw'
  };

  export type Merged_gw_summaryScalarFieldEnum = (typeof Merged_gw_summaryScalarFieldEnum)[keyof typeof Merged_gw_summaryScalarFieldEnum]


  export const MergedgwScalarFieldEnum: {
    name: 'name',
    element: 'element',
    position: 'position',
    team: 'team',
    xp: 'xp',
    assists: 'assists',
    bonus: 'bonus',
    bps: 'bps',
    clean_sheets: 'clean_sheets',
    creativity: 'creativity',
    expected_assists: 'expected_assists',
    expected_goal_involvements: 'expected_goal_involvements',
    expected_goals: 'expected_goals',
    expected_goals_conceded: 'expected_goals_conceded',
    fixture: 'fixture',
    goals_conceded: 'goals_conceded',
    goals_scored: 'goals_scored',
    ict_index: 'ict_index',
    influence: 'influence',
    kickoff_time: 'kickoff_time',
    minutes: 'minutes',
    modified: 'modified',
    opponent_team: 'opponent_team',
    own_goals: 'own_goals',
    penalties_missed: 'penalties_missed',
    penalties_saved: 'penalties_saved',
    red_cards: 'red_cards',
    round: 'round',
    saves: 'saves',
    selected: 'selected',
    starts: 'starts',
    team_a_score: 'team_a_score',
    team_h_score: 'team_h_score',
    threat: 'threat',
    total_points: 'total_points',
    transfers_balance: 'transfers_balance',
    transfers_in: 'transfers_in',
    transfers_out: 'transfers_out',
    value: 'value',
    was_home: 'was_home',
    yellow_cards: 'yellow_cards',
    gw: 'gw'
  };

  export type MergedgwScalarFieldEnum = (typeof MergedgwScalarFieldEnum)[keyof typeof MergedgwScalarFieldEnum]


  export const Player_statsScalarFieldEnum: {
    stat_id: 'stat_id',
    player_id: 'player_id',
    gw_id: 'gw_id',
    xp: 'xp',
    assists: 'assists',
    bonus: 'bonus',
    bps: 'bps',
    clean_sheets: 'clean_sheets',
    creativity: 'creativity',
    expected_assists: 'expected_assists',
    expected_goal_involvements: 'expected_goal_involvements',
    expected_goals: 'expected_goals',
    expected_goals_conceded: 'expected_goals_conceded',
    fixture: 'fixture',
    goals_conceded: 'goals_conceded',
    goals_scored: 'goals_scored',
    ict_index: 'ict_index',
    influence: 'influence',
    kickoff_time: 'kickoff_time',
    minutes: 'minutes',
    modified: 'modified',
    opponent_team: 'opponent_team',
    own_goals: 'own_goals',
    penalties_missed: 'penalties_missed',
    penalties_saved: 'penalties_saved',
    red_cards: 'red_cards',
    saves: 'saves',
    selected: 'selected',
    starts: 'starts',
    team_a_score: 'team_a_score',
    team_h_score: 'team_h_score',
    threat: 'threat',
    total_points: 'total_points',
    transfers_balance: 'transfers_balance',
    transfers_in: 'transfers_in',
    transfers_out: 'transfers_out',
    value: 'value',
    was_home: 'was_home',
    yellow_cards: 'yellow_cards'
  };

  export type Player_statsScalarFieldEnum = (typeof Player_statsScalarFieldEnum)[keyof typeof Player_statsScalarFieldEnum]


  export const PlayersScalarFieldEnum: {
    player_id: 'player_id',
    name: 'name',
    position: 'position',
    team: 'team',
    element: 'element'
  };

  export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum]


  export const TeamsScalarFieldEnum: {
    team_id: 'team_id',
    name: 'name',
    abbreviation: 'abbreviation'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type gameweeksWhereInput = {
    AND?: gameweeksWhereInput | gameweeksWhereInput[]
    OR?: gameweeksWhereInput[]
    NOT?: gameweeksWhereInput | gameweeksWhereInput[]
    gw_id?: IntFilter<"gameweeks"> | number
    season?: StringFilter<"gameweeks"> | string
    gw_number?: IntFilter<"gameweeks"> | number
    start_date?: DateTimeNullableFilter<"gameweeks"> | Date | string | null
    end_date?: DateTimeNullableFilter<"gameweeks"> | Date | string | null
    player_stats?: Player_statsListRelationFilter
  }

  export type gameweeksOrderByWithRelationInput = {
    gw_id?: SortOrder
    season?: SortOrder
    gw_number?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    player_stats?: player_statsOrderByRelationAggregateInput
  }

  export type gameweeksWhereUniqueInput = Prisma.AtLeast<{
    gw_id?: number
    season_gw_number?: gameweeksSeasonGw_numberCompoundUniqueInput
    AND?: gameweeksWhereInput | gameweeksWhereInput[]
    OR?: gameweeksWhereInput[]
    NOT?: gameweeksWhereInput | gameweeksWhereInput[]
    season?: StringFilter<"gameweeks"> | string
    gw_number?: IntFilter<"gameweeks"> | number
    start_date?: DateTimeNullableFilter<"gameweeks"> | Date | string | null
    end_date?: DateTimeNullableFilter<"gameweeks"> | Date | string | null
    player_stats?: Player_statsListRelationFilter
  }, "gw_id" | "season_gw_number">

  export type gameweeksOrderByWithAggregationInput = {
    gw_id?: SortOrder
    season?: SortOrder
    gw_number?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    _count?: gameweeksCountOrderByAggregateInput
    _avg?: gameweeksAvgOrderByAggregateInput
    _max?: gameweeksMaxOrderByAggregateInput
    _min?: gameweeksMinOrderByAggregateInput
    _sum?: gameweeksSumOrderByAggregateInput
  }

  export type gameweeksScalarWhereWithAggregatesInput = {
    AND?: gameweeksScalarWhereWithAggregatesInput | gameweeksScalarWhereWithAggregatesInput[]
    OR?: gameweeksScalarWhereWithAggregatesInput[]
    NOT?: gameweeksScalarWhereWithAggregatesInput | gameweeksScalarWhereWithAggregatesInput[]
    gw_id?: IntWithAggregatesFilter<"gameweeks"> | number
    season?: StringWithAggregatesFilter<"gameweeks"> | string
    gw_number?: IntWithAggregatesFilter<"gameweeks"> | number
    start_date?: DateTimeNullableWithAggregatesFilter<"gameweeks"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"gameweeks"> | Date | string | null
  }

  export type merged_gw_summaryWhereInput = {
    AND?: merged_gw_summaryWhereInput | merged_gw_summaryWhereInput[]
    OR?: merged_gw_summaryWhereInput[]
    NOT?: merged_gw_summaryWhereInput | merged_gw_summaryWhereInput[]
    element?: IntFilter<"merged_gw_summary"> | number
    name?: StringNullableFilter<"merged_gw_summary"> | string | null
    position?: StringNullableFilter<"merged_gw_summary"> | string | null
    team?: StringNullableFilter<"merged_gw_summary"> | string | null
    games_played?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    total_minutes?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    total_goals?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    total_assists?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    total_clean_sheets?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    yellow_cards?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    red_cards?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    total_points?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    avg_value?: FloatNullableFilter<"merged_gw_summary"> | number | null
    avg_xp?: DecimalNullableFilter<"merged_gw_summary"> | Decimal | DecimalJsLike | number | string | null
    first_gw?: IntNullableFilter<"merged_gw_summary"> | number | null
    last_gw?: IntNullableFilter<"merged_gw_summary"> | number | null
  }

  export type merged_gw_summaryOrderByWithRelationInput = {
    element?: SortOrder
    name?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    games_played?: SortOrderInput | SortOrder
    total_minutes?: SortOrderInput | SortOrder
    total_goals?: SortOrderInput | SortOrder
    total_assists?: SortOrderInput | SortOrder
    total_clean_sheets?: SortOrderInput | SortOrder
    yellow_cards?: SortOrderInput | SortOrder
    red_cards?: SortOrderInput | SortOrder
    total_points?: SortOrderInput | SortOrder
    avg_value?: SortOrderInput | SortOrder
    avg_xp?: SortOrderInput | SortOrder
    first_gw?: SortOrderInput | SortOrder
    last_gw?: SortOrderInput | SortOrder
  }

  export type merged_gw_summaryWhereUniqueInput = Prisma.AtLeast<{
    element?: number
    AND?: merged_gw_summaryWhereInput | merged_gw_summaryWhereInput[]
    OR?: merged_gw_summaryWhereInput[]
    NOT?: merged_gw_summaryWhereInput | merged_gw_summaryWhereInput[]
    name?: StringNullableFilter<"merged_gw_summary"> | string | null
    position?: StringNullableFilter<"merged_gw_summary"> | string | null
    team?: StringNullableFilter<"merged_gw_summary"> | string | null
    games_played?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    total_minutes?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    total_goals?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    total_assists?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    total_clean_sheets?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    yellow_cards?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    red_cards?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    total_points?: BigIntNullableFilter<"merged_gw_summary"> | bigint | number | null
    avg_value?: FloatNullableFilter<"merged_gw_summary"> | number | null
    avg_xp?: DecimalNullableFilter<"merged_gw_summary"> | Decimal | DecimalJsLike | number | string | null
    first_gw?: IntNullableFilter<"merged_gw_summary"> | number | null
    last_gw?: IntNullableFilter<"merged_gw_summary"> | number | null
  }, "element">

  export type merged_gw_summaryOrderByWithAggregationInput = {
    element?: SortOrder
    name?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    games_played?: SortOrderInput | SortOrder
    total_minutes?: SortOrderInput | SortOrder
    total_goals?: SortOrderInput | SortOrder
    total_assists?: SortOrderInput | SortOrder
    total_clean_sheets?: SortOrderInput | SortOrder
    yellow_cards?: SortOrderInput | SortOrder
    red_cards?: SortOrderInput | SortOrder
    total_points?: SortOrderInput | SortOrder
    avg_value?: SortOrderInput | SortOrder
    avg_xp?: SortOrderInput | SortOrder
    first_gw?: SortOrderInput | SortOrder
    last_gw?: SortOrderInput | SortOrder
    _count?: merged_gw_summaryCountOrderByAggregateInput
    _avg?: merged_gw_summaryAvgOrderByAggregateInput
    _max?: merged_gw_summaryMaxOrderByAggregateInput
    _min?: merged_gw_summaryMinOrderByAggregateInput
    _sum?: merged_gw_summarySumOrderByAggregateInput
  }

  export type merged_gw_summaryScalarWhereWithAggregatesInput = {
    AND?: merged_gw_summaryScalarWhereWithAggregatesInput | merged_gw_summaryScalarWhereWithAggregatesInput[]
    OR?: merged_gw_summaryScalarWhereWithAggregatesInput[]
    NOT?: merged_gw_summaryScalarWhereWithAggregatesInput | merged_gw_summaryScalarWhereWithAggregatesInput[]
    element?: IntWithAggregatesFilter<"merged_gw_summary"> | number
    name?: StringNullableWithAggregatesFilter<"merged_gw_summary"> | string | null
    position?: StringNullableWithAggregatesFilter<"merged_gw_summary"> | string | null
    team?: StringNullableWithAggregatesFilter<"merged_gw_summary"> | string | null
    games_played?: BigIntNullableWithAggregatesFilter<"merged_gw_summary"> | bigint | number | null
    total_minutes?: BigIntNullableWithAggregatesFilter<"merged_gw_summary"> | bigint | number | null
    total_goals?: BigIntNullableWithAggregatesFilter<"merged_gw_summary"> | bigint | number | null
    total_assists?: BigIntNullableWithAggregatesFilter<"merged_gw_summary"> | bigint | number | null
    total_clean_sheets?: BigIntNullableWithAggregatesFilter<"merged_gw_summary"> | bigint | number | null
    yellow_cards?: BigIntNullableWithAggregatesFilter<"merged_gw_summary"> | bigint | number | null
    red_cards?: BigIntNullableWithAggregatesFilter<"merged_gw_summary"> | bigint | number | null
    total_points?: BigIntNullableWithAggregatesFilter<"merged_gw_summary"> | bigint | number | null
    avg_value?: FloatNullableWithAggregatesFilter<"merged_gw_summary"> | number | null
    avg_xp?: DecimalNullableWithAggregatesFilter<"merged_gw_summary"> | Decimal | DecimalJsLike | number | string | null
    first_gw?: IntNullableWithAggregatesFilter<"merged_gw_summary"> | number | null
    last_gw?: IntNullableWithAggregatesFilter<"merged_gw_summary"> | number | null
  }

  export type mergedgwWhereInput = {
    AND?: mergedgwWhereInput | mergedgwWhereInput[]
    OR?: mergedgwWhereInput[]
    NOT?: mergedgwWhereInput | mergedgwWhereInput[]
    name?: StringNullableFilter<"mergedgw"> | string | null
    element?: IntFilter<"mergedgw"> | number
    position?: StringNullableFilter<"mergedgw"> | string | null
    team?: StringNullableFilter<"mergedgw"> | string | null
    xp?: FloatNullableFilter<"mergedgw"> | number | null
    assists?: IntNullableFilter<"mergedgw"> | number | null
    bonus?: IntNullableFilter<"mergedgw"> | number | null
    bps?: IntNullableFilter<"mergedgw"> | number | null
    clean_sheets?: IntNullableFilter<"mergedgw"> | number | null
    creativity?: FloatNullableFilter<"mergedgw"> | number | null
    expected_assists?: FloatNullableFilter<"mergedgw"> | number | null
    expected_goal_involvements?: FloatNullableFilter<"mergedgw"> | number | null
    expected_goals?: FloatNullableFilter<"mergedgw"> | number | null
    expected_goals_conceded?: FloatNullableFilter<"mergedgw"> | number | null
    fixture?: IntNullableFilter<"mergedgw"> | number | null
    goals_conceded?: IntNullableFilter<"mergedgw"> | number | null
    goals_scored?: IntNullableFilter<"mergedgw"> | number | null
    ict_index?: FloatNullableFilter<"mergedgw"> | number | null
    influence?: FloatNullableFilter<"mergedgw"> | number | null
    kickoff_time?: DateTimeNullableFilter<"mergedgw"> | Date | string | null
    minutes?: IntNullableFilter<"mergedgw"> | number | null
    modified?: BoolNullableFilter<"mergedgw"> | boolean | null
    opponent_team?: IntNullableFilter<"mergedgw"> | number | null
    own_goals?: IntNullableFilter<"mergedgw"> | number | null
    penalties_missed?: IntNullableFilter<"mergedgw"> | number | null
    penalties_saved?: IntNullableFilter<"mergedgw"> | number | null
    red_cards?: IntNullableFilter<"mergedgw"> | number | null
    round?: IntNullableFilter<"mergedgw"> | number | null
    saves?: IntNullableFilter<"mergedgw"> | number | null
    selected?: IntNullableFilter<"mergedgw"> | number | null
    starts?: IntNullableFilter<"mergedgw"> | number | null
    team_a_score?: IntNullableFilter<"mergedgw"> | number | null
    team_h_score?: IntNullableFilter<"mergedgw"> | number | null
    threat?: FloatNullableFilter<"mergedgw"> | number | null
    total_points?: IntNullableFilter<"mergedgw"> | number | null
    transfers_balance?: IntNullableFilter<"mergedgw"> | number | null
    transfers_in?: IntNullableFilter<"mergedgw"> | number | null
    transfers_out?: IntNullableFilter<"mergedgw"> | number | null
    value?: FloatNullableFilter<"mergedgw"> | number | null
    was_home?: BoolNullableFilter<"mergedgw"> | boolean | null
    yellow_cards?: IntNullableFilter<"mergedgw"> | number | null
    gw?: IntNullableFilter<"mergedgw"> | number | null
  }

  export type mergedgwOrderByWithRelationInput = {
    name?: SortOrderInput | SortOrder
    element?: SortOrder
    position?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    xp?: SortOrderInput | SortOrder
    assists?: SortOrderInput | SortOrder
    bonus?: SortOrderInput | SortOrder
    bps?: SortOrderInput | SortOrder
    clean_sheets?: SortOrderInput | SortOrder
    creativity?: SortOrderInput | SortOrder
    expected_assists?: SortOrderInput | SortOrder
    expected_goal_involvements?: SortOrderInput | SortOrder
    expected_goals?: SortOrderInput | SortOrder
    expected_goals_conceded?: SortOrderInput | SortOrder
    fixture?: SortOrderInput | SortOrder
    goals_conceded?: SortOrderInput | SortOrder
    goals_scored?: SortOrderInput | SortOrder
    ict_index?: SortOrderInput | SortOrder
    influence?: SortOrderInput | SortOrder
    kickoff_time?: SortOrderInput | SortOrder
    minutes?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    opponent_team?: SortOrderInput | SortOrder
    own_goals?: SortOrderInput | SortOrder
    penalties_missed?: SortOrderInput | SortOrder
    penalties_saved?: SortOrderInput | SortOrder
    red_cards?: SortOrderInput | SortOrder
    round?: SortOrderInput | SortOrder
    saves?: SortOrderInput | SortOrder
    selected?: SortOrderInput | SortOrder
    starts?: SortOrderInput | SortOrder
    team_a_score?: SortOrderInput | SortOrder
    team_h_score?: SortOrderInput | SortOrder
    threat?: SortOrderInput | SortOrder
    total_points?: SortOrderInput | SortOrder
    transfers_balance?: SortOrderInput | SortOrder
    transfers_in?: SortOrderInput | SortOrder
    transfers_out?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    was_home?: SortOrderInput | SortOrder
    yellow_cards?: SortOrderInput | SortOrder
    gw?: SortOrderInput | SortOrder
  }

  export type mergedgwWhereUniqueInput = Prisma.AtLeast<{
    element?: number
    AND?: mergedgwWhereInput | mergedgwWhereInput[]
    OR?: mergedgwWhereInput[]
    NOT?: mergedgwWhereInput | mergedgwWhereInput[]
    name?: StringNullableFilter<"mergedgw"> | string | null
    position?: StringNullableFilter<"mergedgw"> | string | null
    team?: StringNullableFilter<"mergedgw"> | string | null
    xp?: FloatNullableFilter<"mergedgw"> | number | null
    assists?: IntNullableFilter<"mergedgw"> | number | null
    bonus?: IntNullableFilter<"mergedgw"> | number | null
    bps?: IntNullableFilter<"mergedgw"> | number | null
    clean_sheets?: IntNullableFilter<"mergedgw"> | number | null
    creativity?: FloatNullableFilter<"mergedgw"> | number | null
    expected_assists?: FloatNullableFilter<"mergedgw"> | number | null
    expected_goal_involvements?: FloatNullableFilter<"mergedgw"> | number | null
    expected_goals?: FloatNullableFilter<"mergedgw"> | number | null
    expected_goals_conceded?: FloatNullableFilter<"mergedgw"> | number | null
    fixture?: IntNullableFilter<"mergedgw"> | number | null
    goals_conceded?: IntNullableFilter<"mergedgw"> | number | null
    goals_scored?: IntNullableFilter<"mergedgw"> | number | null
    ict_index?: FloatNullableFilter<"mergedgw"> | number | null
    influence?: FloatNullableFilter<"mergedgw"> | number | null
    kickoff_time?: DateTimeNullableFilter<"mergedgw"> | Date | string | null
    minutes?: IntNullableFilter<"mergedgw"> | number | null
    modified?: BoolNullableFilter<"mergedgw"> | boolean | null
    opponent_team?: IntNullableFilter<"mergedgw"> | number | null
    own_goals?: IntNullableFilter<"mergedgw"> | number | null
    penalties_missed?: IntNullableFilter<"mergedgw"> | number | null
    penalties_saved?: IntNullableFilter<"mergedgw"> | number | null
    red_cards?: IntNullableFilter<"mergedgw"> | number | null
    round?: IntNullableFilter<"mergedgw"> | number | null
    saves?: IntNullableFilter<"mergedgw"> | number | null
    selected?: IntNullableFilter<"mergedgw"> | number | null
    starts?: IntNullableFilter<"mergedgw"> | number | null
    team_a_score?: IntNullableFilter<"mergedgw"> | number | null
    team_h_score?: IntNullableFilter<"mergedgw"> | number | null
    threat?: FloatNullableFilter<"mergedgw"> | number | null
    total_points?: IntNullableFilter<"mergedgw"> | number | null
    transfers_balance?: IntNullableFilter<"mergedgw"> | number | null
    transfers_in?: IntNullableFilter<"mergedgw"> | number | null
    transfers_out?: IntNullableFilter<"mergedgw"> | number | null
    value?: FloatNullableFilter<"mergedgw"> | number | null
    was_home?: BoolNullableFilter<"mergedgw"> | boolean | null
    yellow_cards?: IntNullableFilter<"mergedgw"> | number | null
    gw?: IntNullableFilter<"mergedgw"> | number | null
  }, "element">

  export type mergedgwOrderByWithAggregationInput = {
    name?: SortOrderInput | SortOrder
    element?: SortOrder
    position?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    xp?: SortOrderInput | SortOrder
    assists?: SortOrderInput | SortOrder
    bonus?: SortOrderInput | SortOrder
    bps?: SortOrderInput | SortOrder
    clean_sheets?: SortOrderInput | SortOrder
    creativity?: SortOrderInput | SortOrder
    expected_assists?: SortOrderInput | SortOrder
    expected_goal_involvements?: SortOrderInput | SortOrder
    expected_goals?: SortOrderInput | SortOrder
    expected_goals_conceded?: SortOrderInput | SortOrder
    fixture?: SortOrderInput | SortOrder
    goals_conceded?: SortOrderInput | SortOrder
    goals_scored?: SortOrderInput | SortOrder
    ict_index?: SortOrderInput | SortOrder
    influence?: SortOrderInput | SortOrder
    kickoff_time?: SortOrderInput | SortOrder
    minutes?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    opponent_team?: SortOrderInput | SortOrder
    own_goals?: SortOrderInput | SortOrder
    penalties_missed?: SortOrderInput | SortOrder
    penalties_saved?: SortOrderInput | SortOrder
    red_cards?: SortOrderInput | SortOrder
    round?: SortOrderInput | SortOrder
    saves?: SortOrderInput | SortOrder
    selected?: SortOrderInput | SortOrder
    starts?: SortOrderInput | SortOrder
    team_a_score?: SortOrderInput | SortOrder
    team_h_score?: SortOrderInput | SortOrder
    threat?: SortOrderInput | SortOrder
    total_points?: SortOrderInput | SortOrder
    transfers_balance?: SortOrderInput | SortOrder
    transfers_in?: SortOrderInput | SortOrder
    transfers_out?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    was_home?: SortOrderInput | SortOrder
    yellow_cards?: SortOrderInput | SortOrder
    gw?: SortOrderInput | SortOrder
    _count?: mergedgwCountOrderByAggregateInput
    _avg?: mergedgwAvgOrderByAggregateInput
    _max?: mergedgwMaxOrderByAggregateInput
    _min?: mergedgwMinOrderByAggregateInput
    _sum?: mergedgwSumOrderByAggregateInput
  }

  export type mergedgwScalarWhereWithAggregatesInput = {
    AND?: mergedgwScalarWhereWithAggregatesInput | mergedgwScalarWhereWithAggregatesInput[]
    OR?: mergedgwScalarWhereWithAggregatesInput[]
    NOT?: mergedgwScalarWhereWithAggregatesInput | mergedgwScalarWhereWithAggregatesInput[]
    name?: StringNullableWithAggregatesFilter<"mergedgw"> | string | null
    element?: IntWithAggregatesFilter<"mergedgw"> | number
    position?: StringNullableWithAggregatesFilter<"mergedgw"> | string | null
    team?: StringNullableWithAggregatesFilter<"mergedgw"> | string | null
    xp?: FloatNullableWithAggregatesFilter<"mergedgw"> | number | null
    assists?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    bonus?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    bps?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    clean_sheets?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    creativity?: FloatNullableWithAggregatesFilter<"mergedgw"> | number | null
    expected_assists?: FloatNullableWithAggregatesFilter<"mergedgw"> | number | null
    expected_goal_involvements?: FloatNullableWithAggregatesFilter<"mergedgw"> | number | null
    expected_goals?: FloatNullableWithAggregatesFilter<"mergedgw"> | number | null
    expected_goals_conceded?: FloatNullableWithAggregatesFilter<"mergedgw"> | number | null
    fixture?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    goals_conceded?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    goals_scored?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    ict_index?: FloatNullableWithAggregatesFilter<"mergedgw"> | number | null
    influence?: FloatNullableWithAggregatesFilter<"mergedgw"> | number | null
    kickoff_time?: DateTimeNullableWithAggregatesFilter<"mergedgw"> | Date | string | null
    minutes?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    modified?: BoolNullableWithAggregatesFilter<"mergedgw"> | boolean | null
    opponent_team?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    own_goals?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    penalties_missed?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    penalties_saved?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    red_cards?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    round?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    saves?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    selected?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    starts?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    team_a_score?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    team_h_score?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    threat?: FloatNullableWithAggregatesFilter<"mergedgw"> | number | null
    total_points?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    transfers_balance?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    transfers_in?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    transfers_out?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    value?: FloatNullableWithAggregatesFilter<"mergedgw"> | number | null
    was_home?: BoolNullableWithAggregatesFilter<"mergedgw"> | boolean | null
    yellow_cards?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
    gw?: IntNullableWithAggregatesFilter<"mergedgw"> | number | null
  }

  export type player_statsWhereInput = {
    AND?: player_statsWhereInput | player_statsWhereInput[]
    OR?: player_statsWhereInput[]
    NOT?: player_statsWhereInput | player_statsWhereInput[]
    stat_id?: IntFilter<"player_stats"> | number
    player_id?: IntNullableFilter<"player_stats"> | number | null
    gw_id?: IntNullableFilter<"player_stats"> | number | null
    xp?: FloatNullableFilter<"player_stats"> | number | null
    assists?: IntNullableFilter<"player_stats"> | number | null
    bonus?: IntNullableFilter<"player_stats"> | number | null
    bps?: IntNullableFilter<"player_stats"> | number | null
    clean_sheets?: IntNullableFilter<"player_stats"> | number | null
    creativity?: FloatNullableFilter<"player_stats"> | number | null
    expected_assists?: FloatNullableFilter<"player_stats"> | number | null
    expected_goal_involvements?: FloatNullableFilter<"player_stats"> | number | null
    expected_goals?: FloatNullableFilter<"player_stats"> | number | null
    expected_goals_conceded?: FloatNullableFilter<"player_stats"> | number | null
    fixture?: IntNullableFilter<"player_stats"> | number | null
    goals_conceded?: IntNullableFilter<"player_stats"> | number | null
    goals_scored?: IntNullableFilter<"player_stats"> | number | null
    ict_index?: FloatNullableFilter<"player_stats"> | number | null
    influence?: FloatNullableFilter<"player_stats"> | number | null
    kickoff_time?: DateTimeNullableFilter<"player_stats"> | Date | string | null
    minutes?: IntNullableFilter<"player_stats"> | number | null
    modified?: BoolNullableFilter<"player_stats"> | boolean | null
    opponent_team?: StringNullableFilter<"player_stats"> | string | null
    own_goals?: IntNullableFilter<"player_stats"> | number | null
    penalties_missed?: IntNullableFilter<"player_stats"> | number | null
    penalties_saved?: IntNullableFilter<"player_stats"> | number | null
    red_cards?: IntNullableFilter<"player_stats"> | number | null
    saves?: IntNullableFilter<"player_stats"> | number | null
    selected?: IntNullableFilter<"player_stats"> | number | null
    starts?: IntNullableFilter<"player_stats"> | number | null
    team_a_score?: IntNullableFilter<"player_stats"> | number | null
    team_h_score?: IntNullableFilter<"player_stats"> | number | null
    threat?: FloatNullableFilter<"player_stats"> | number | null
    total_points?: IntNullableFilter<"player_stats"> | number | null
    transfers_balance?: IntNullableFilter<"player_stats"> | number | null
    transfers_in?: IntNullableFilter<"player_stats"> | number | null
    transfers_out?: IntNullableFilter<"player_stats"> | number | null
    value?: FloatNullableFilter<"player_stats"> | number | null
    was_home?: BoolNullableFilter<"player_stats"> | boolean | null
    yellow_cards?: IntNullableFilter<"player_stats"> | number | null
    gameweeks?: XOR<GameweeksNullableScalarRelationFilter, gameweeksWhereInput> | null
    players?: XOR<PlayersNullableScalarRelationFilter, playersWhereInput> | null
  }

  export type player_statsOrderByWithRelationInput = {
    stat_id?: SortOrder
    player_id?: SortOrderInput | SortOrder
    gw_id?: SortOrderInput | SortOrder
    xp?: SortOrderInput | SortOrder
    assists?: SortOrderInput | SortOrder
    bonus?: SortOrderInput | SortOrder
    bps?: SortOrderInput | SortOrder
    clean_sheets?: SortOrderInput | SortOrder
    creativity?: SortOrderInput | SortOrder
    expected_assists?: SortOrderInput | SortOrder
    expected_goal_involvements?: SortOrderInput | SortOrder
    expected_goals?: SortOrderInput | SortOrder
    expected_goals_conceded?: SortOrderInput | SortOrder
    fixture?: SortOrderInput | SortOrder
    goals_conceded?: SortOrderInput | SortOrder
    goals_scored?: SortOrderInput | SortOrder
    ict_index?: SortOrderInput | SortOrder
    influence?: SortOrderInput | SortOrder
    kickoff_time?: SortOrderInput | SortOrder
    minutes?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    opponent_team?: SortOrderInput | SortOrder
    own_goals?: SortOrderInput | SortOrder
    penalties_missed?: SortOrderInput | SortOrder
    penalties_saved?: SortOrderInput | SortOrder
    red_cards?: SortOrderInput | SortOrder
    saves?: SortOrderInput | SortOrder
    selected?: SortOrderInput | SortOrder
    starts?: SortOrderInput | SortOrder
    team_a_score?: SortOrderInput | SortOrder
    team_h_score?: SortOrderInput | SortOrder
    threat?: SortOrderInput | SortOrder
    total_points?: SortOrderInput | SortOrder
    transfers_balance?: SortOrderInput | SortOrder
    transfers_in?: SortOrderInput | SortOrder
    transfers_out?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    was_home?: SortOrderInput | SortOrder
    yellow_cards?: SortOrderInput | SortOrder
    gameweeks?: gameweeksOrderByWithRelationInput
    players?: playersOrderByWithRelationInput
  }

  export type player_statsWhereUniqueInput = Prisma.AtLeast<{
    stat_id?: number
    AND?: player_statsWhereInput | player_statsWhereInput[]
    OR?: player_statsWhereInput[]
    NOT?: player_statsWhereInput | player_statsWhereInput[]
    player_id?: IntNullableFilter<"player_stats"> | number | null
    gw_id?: IntNullableFilter<"player_stats"> | number | null
    xp?: FloatNullableFilter<"player_stats"> | number | null
    assists?: IntNullableFilter<"player_stats"> | number | null
    bonus?: IntNullableFilter<"player_stats"> | number | null
    bps?: IntNullableFilter<"player_stats"> | number | null
    clean_sheets?: IntNullableFilter<"player_stats"> | number | null
    creativity?: FloatNullableFilter<"player_stats"> | number | null
    expected_assists?: FloatNullableFilter<"player_stats"> | number | null
    expected_goal_involvements?: FloatNullableFilter<"player_stats"> | number | null
    expected_goals?: FloatNullableFilter<"player_stats"> | number | null
    expected_goals_conceded?: FloatNullableFilter<"player_stats"> | number | null
    fixture?: IntNullableFilter<"player_stats"> | number | null
    goals_conceded?: IntNullableFilter<"player_stats"> | number | null
    goals_scored?: IntNullableFilter<"player_stats"> | number | null
    ict_index?: FloatNullableFilter<"player_stats"> | number | null
    influence?: FloatNullableFilter<"player_stats"> | number | null
    kickoff_time?: DateTimeNullableFilter<"player_stats"> | Date | string | null
    minutes?: IntNullableFilter<"player_stats"> | number | null
    modified?: BoolNullableFilter<"player_stats"> | boolean | null
    opponent_team?: StringNullableFilter<"player_stats"> | string | null
    own_goals?: IntNullableFilter<"player_stats"> | number | null
    penalties_missed?: IntNullableFilter<"player_stats"> | number | null
    penalties_saved?: IntNullableFilter<"player_stats"> | number | null
    red_cards?: IntNullableFilter<"player_stats"> | number | null
    saves?: IntNullableFilter<"player_stats"> | number | null
    selected?: IntNullableFilter<"player_stats"> | number | null
    starts?: IntNullableFilter<"player_stats"> | number | null
    team_a_score?: IntNullableFilter<"player_stats"> | number | null
    team_h_score?: IntNullableFilter<"player_stats"> | number | null
    threat?: FloatNullableFilter<"player_stats"> | number | null
    total_points?: IntNullableFilter<"player_stats"> | number | null
    transfers_balance?: IntNullableFilter<"player_stats"> | number | null
    transfers_in?: IntNullableFilter<"player_stats"> | number | null
    transfers_out?: IntNullableFilter<"player_stats"> | number | null
    value?: FloatNullableFilter<"player_stats"> | number | null
    was_home?: BoolNullableFilter<"player_stats"> | boolean | null
    yellow_cards?: IntNullableFilter<"player_stats"> | number | null
    gameweeks?: XOR<GameweeksNullableScalarRelationFilter, gameweeksWhereInput> | null
    players?: XOR<PlayersNullableScalarRelationFilter, playersWhereInput> | null
  }, "stat_id">

  export type player_statsOrderByWithAggregationInput = {
    stat_id?: SortOrder
    player_id?: SortOrderInput | SortOrder
    gw_id?: SortOrderInput | SortOrder
    xp?: SortOrderInput | SortOrder
    assists?: SortOrderInput | SortOrder
    bonus?: SortOrderInput | SortOrder
    bps?: SortOrderInput | SortOrder
    clean_sheets?: SortOrderInput | SortOrder
    creativity?: SortOrderInput | SortOrder
    expected_assists?: SortOrderInput | SortOrder
    expected_goal_involvements?: SortOrderInput | SortOrder
    expected_goals?: SortOrderInput | SortOrder
    expected_goals_conceded?: SortOrderInput | SortOrder
    fixture?: SortOrderInput | SortOrder
    goals_conceded?: SortOrderInput | SortOrder
    goals_scored?: SortOrderInput | SortOrder
    ict_index?: SortOrderInput | SortOrder
    influence?: SortOrderInput | SortOrder
    kickoff_time?: SortOrderInput | SortOrder
    minutes?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    opponent_team?: SortOrderInput | SortOrder
    own_goals?: SortOrderInput | SortOrder
    penalties_missed?: SortOrderInput | SortOrder
    penalties_saved?: SortOrderInput | SortOrder
    red_cards?: SortOrderInput | SortOrder
    saves?: SortOrderInput | SortOrder
    selected?: SortOrderInput | SortOrder
    starts?: SortOrderInput | SortOrder
    team_a_score?: SortOrderInput | SortOrder
    team_h_score?: SortOrderInput | SortOrder
    threat?: SortOrderInput | SortOrder
    total_points?: SortOrderInput | SortOrder
    transfers_balance?: SortOrderInput | SortOrder
    transfers_in?: SortOrderInput | SortOrder
    transfers_out?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    was_home?: SortOrderInput | SortOrder
    yellow_cards?: SortOrderInput | SortOrder
    _count?: player_statsCountOrderByAggregateInput
    _avg?: player_statsAvgOrderByAggregateInput
    _max?: player_statsMaxOrderByAggregateInput
    _min?: player_statsMinOrderByAggregateInput
    _sum?: player_statsSumOrderByAggregateInput
  }

  export type player_statsScalarWhereWithAggregatesInput = {
    AND?: player_statsScalarWhereWithAggregatesInput | player_statsScalarWhereWithAggregatesInput[]
    OR?: player_statsScalarWhereWithAggregatesInput[]
    NOT?: player_statsScalarWhereWithAggregatesInput | player_statsScalarWhereWithAggregatesInput[]
    stat_id?: IntWithAggregatesFilter<"player_stats"> | number
    player_id?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    gw_id?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    xp?: FloatNullableWithAggregatesFilter<"player_stats"> | number | null
    assists?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    bonus?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    bps?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    clean_sheets?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    creativity?: FloatNullableWithAggregatesFilter<"player_stats"> | number | null
    expected_assists?: FloatNullableWithAggregatesFilter<"player_stats"> | number | null
    expected_goal_involvements?: FloatNullableWithAggregatesFilter<"player_stats"> | number | null
    expected_goals?: FloatNullableWithAggregatesFilter<"player_stats"> | number | null
    expected_goals_conceded?: FloatNullableWithAggregatesFilter<"player_stats"> | number | null
    fixture?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    goals_conceded?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    goals_scored?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    ict_index?: FloatNullableWithAggregatesFilter<"player_stats"> | number | null
    influence?: FloatNullableWithAggregatesFilter<"player_stats"> | number | null
    kickoff_time?: DateTimeNullableWithAggregatesFilter<"player_stats"> | Date | string | null
    minutes?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    modified?: BoolNullableWithAggregatesFilter<"player_stats"> | boolean | null
    opponent_team?: StringNullableWithAggregatesFilter<"player_stats"> | string | null
    own_goals?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    penalties_missed?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    penalties_saved?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    red_cards?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    saves?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    selected?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    starts?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    team_a_score?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    team_h_score?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    threat?: FloatNullableWithAggregatesFilter<"player_stats"> | number | null
    total_points?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    transfers_balance?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    transfers_in?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    transfers_out?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
    value?: FloatNullableWithAggregatesFilter<"player_stats"> | number | null
    was_home?: BoolNullableWithAggregatesFilter<"player_stats"> | boolean | null
    yellow_cards?: IntNullableWithAggregatesFilter<"player_stats"> | number | null
  }

  export type playersWhereInput = {
    AND?: playersWhereInput | playersWhereInput[]
    OR?: playersWhereInput[]
    NOT?: playersWhereInput | playersWhereInput[]
    player_id?: IntFilter<"players"> | number
    name?: StringFilter<"players"> | string
    position?: StringNullableFilter<"players"> | string | null
    team?: StringNullableFilter<"players"> | string | null
    element?: IntNullableFilter<"players"> | number | null
    player_stats?: Player_statsListRelationFilter
  }

  export type playersOrderByWithRelationInput = {
    player_id?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    element?: SortOrderInput | SortOrder
    player_stats?: player_statsOrderByRelationAggregateInput
  }

  export type playersWhereUniqueInput = Prisma.AtLeast<{
    player_id?: number
    element?: number
    AND?: playersWhereInput | playersWhereInput[]
    OR?: playersWhereInput[]
    NOT?: playersWhereInput | playersWhereInput[]
    name?: StringFilter<"players"> | string
    position?: StringNullableFilter<"players"> | string | null
    team?: StringNullableFilter<"players"> | string | null
    player_stats?: Player_statsListRelationFilter
  }, "player_id" | "element">

  export type playersOrderByWithAggregationInput = {
    player_id?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    team?: SortOrderInput | SortOrder
    element?: SortOrderInput | SortOrder
    _count?: playersCountOrderByAggregateInput
    _avg?: playersAvgOrderByAggregateInput
    _max?: playersMaxOrderByAggregateInput
    _min?: playersMinOrderByAggregateInput
    _sum?: playersSumOrderByAggregateInput
  }

  export type playersScalarWhereWithAggregatesInput = {
    AND?: playersScalarWhereWithAggregatesInput | playersScalarWhereWithAggregatesInput[]
    OR?: playersScalarWhereWithAggregatesInput[]
    NOT?: playersScalarWhereWithAggregatesInput | playersScalarWhereWithAggregatesInput[]
    player_id?: IntWithAggregatesFilter<"players"> | number
    name?: StringWithAggregatesFilter<"players"> | string
    position?: StringNullableWithAggregatesFilter<"players"> | string | null
    team?: StringNullableWithAggregatesFilter<"players"> | string | null
    element?: IntNullableWithAggregatesFilter<"players"> | number | null
  }

  export type teamsWhereInput = {
    AND?: teamsWhereInput | teamsWhereInput[]
    OR?: teamsWhereInput[]
    NOT?: teamsWhereInput | teamsWhereInput[]
    team_id?: IntFilter<"teams"> | number
    name?: StringFilter<"teams"> | string
    abbreviation?: StringNullableFilter<"teams"> | string | null
  }

  export type teamsOrderByWithRelationInput = {
    team_id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrderInput | SortOrder
  }

  export type teamsWhereUniqueInput = Prisma.AtLeast<{
    team_id?: number
    name?: string
    AND?: teamsWhereInput | teamsWhereInput[]
    OR?: teamsWhereInput[]
    NOT?: teamsWhereInput | teamsWhereInput[]
    abbreviation?: StringNullableFilter<"teams"> | string | null
  }, "team_id" | "name">

  export type teamsOrderByWithAggregationInput = {
    team_id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrderInput | SortOrder
    _count?: teamsCountOrderByAggregateInput
    _avg?: teamsAvgOrderByAggregateInput
    _max?: teamsMaxOrderByAggregateInput
    _min?: teamsMinOrderByAggregateInput
    _sum?: teamsSumOrderByAggregateInput
  }

  export type teamsScalarWhereWithAggregatesInput = {
    AND?: teamsScalarWhereWithAggregatesInput | teamsScalarWhereWithAggregatesInput[]
    OR?: teamsScalarWhereWithAggregatesInput[]
    NOT?: teamsScalarWhereWithAggregatesInput | teamsScalarWhereWithAggregatesInput[]
    team_id?: IntWithAggregatesFilter<"teams"> | number
    name?: StringWithAggregatesFilter<"teams"> | string
    abbreviation?: StringNullableWithAggregatesFilter<"teams"> | string | null
  }

  export type gameweeksCreateInput = {
    season: string
    gw_number: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    player_stats?: player_statsCreateNestedManyWithoutGameweeksInput
  }

  export type gameweeksUncheckedCreateInput = {
    gw_id?: number
    season: string
    gw_number: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    player_stats?: player_statsUncheckedCreateNestedManyWithoutGameweeksInput
  }

  export type gameweeksUpdateInput = {
    season?: StringFieldUpdateOperationsInput | string
    gw_number?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_stats?: player_statsUpdateManyWithoutGameweeksNestedInput
  }

  export type gameweeksUncheckedUpdateInput = {
    gw_id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    gw_number?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_stats?: player_statsUncheckedUpdateManyWithoutGameweeksNestedInput
  }

  export type gameweeksCreateManyInput = {
    gw_id?: number
    season: string
    gw_number: number
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type gameweeksUpdateManyMutationInput = {
    season?: StringFieldUpdateOperationsInput | string
    gw_number?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gameweeksUncheckedUpdateManyInput = {
    gw_id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    gw_number?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type merged_gw_summaryCreateInput = {
    name?: string | null
    position?: string | null
    team?: string | null
    games_played?: bigint | number | null
    total_minutes?: bigint | number | null
    total_goals?: bigint | number | null
    total_assists?: bigint | number | null
    total_clean_sheets?: bigint | number | null
    yellow_cards?: bigint | number | null
    red_cards?: bigint | number | null
    total_points?: bigint | number | null
    avg_value?: number | null
    avg_xp?: Decimal | DecimalJsLike | number | string | null
    first_gw?: number | null
    last_gw?: number | null
  }

  export type merged_gw_summaryUncheckedCreateInput = {
    element?: number
    name?: string | null
    position?: string | null
    team?: string | null
    games_played?: bigint | number | null
    total_minutes?: bigint | number | null
    total_goals?: bigint | number | null
    total_assists?: bigint | number | null
    total_clean_sheets?: bigint | number | null
    yellow_cards?: bigint | number | null
    red_cards?: bigint | number | null
    total_points?: bigint | number | null
    avg_value?: number | null
    avg_xp?: Decimal | DecimalJsLike | number | string | null
    first_gw?: number | null
    last_gw?: number | null
  }

  export type merged_gw_summaryUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    games_played?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_minutes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_goals?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_assists?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_clean_sheets?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    yellow_cards?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    red_cards?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    avg_value?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_xp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    first_gw?: NullableIntFieldUpdateOperationsInput | number | null
    last_gw?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type merged_gw_summaryUncheckedUpdateInput = {
    element?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    games_played?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_minutes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_goals?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_assists?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_clean_sheets?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    yellow_cards?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    red_cards?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    avg_value?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_xp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    first_gw?: NullableIntFieldUpdateOperationsInput | number | null
    last_gw?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type merged_gw_summaryCreateManyInput = {
    element?: number
    name?: string | null
    position?: string | null
    team?: string | null
    games_played?: bigint | number | null
    total_minutes?: bigint | number | null
    total_goals?: bigint | number | null
    total_assists?: bigint | number | null
    total_clean_sheets?: bigint | number | null
    yellow_cards?: bigint | number | null
    red_cards?: bigint | number | null
    total_points?: bigint | number | null
    avg_value?: number | null
    avg_xp?: Decimal | DecimalJsLike | number | string | null
    first_gw?: number | null
    last_gw?: number | null
  }

  export type merged_gw_summaryUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    games_played?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_minutes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_goals?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_assists?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_clean_sheets?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    yellow_cards?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    red_cards?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    avg_value?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_xp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    first_gw?: NullableIntFieldUpdateOperationsInput | number | null
    last_gw?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type merged_gw_summaryUncheckedUpdateManyInput = {
    element?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    games_played?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_minutes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_goals?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_assists?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_clean_sheets?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    yellow_cards?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    red_cards?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    total_points?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    avg_value?: NullableFloatFieldUpdateOperationsInput | number | null
    avg_xp?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    first_gw?: NullableIntFieldUpdateOperationsInput | number | null
    last_gw?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mergedgwCreateInput = {
    name?: string | null
    position?: string | null
    team?: string | null
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: number | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    round?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
    gw?: number | null
  }

  export type mergedgwUncheckedCreateInput = {
    name?: string | null
    element?: number
    position?: string | null
    team?: string | null
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: number | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    round?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
    gw?: number | null
  }

  export type mergedgwUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableIntFieldUpdateOperationsInput | number | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
    gw?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mergedgwUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    element?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableIntFieldUpdateOperationsInput | number | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
    gw?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mergedgwCreateManyInput = {
    name?: string | null
    element?: number
    position?: string | null
    team?: string | null
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: number | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    round?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
    gw?: number | null
  }

  export type mergedgwUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableIntFieldUpdateOperationsInput | number | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
    gw?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mergedgwUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    element?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableIntFieldUpdateOperationsInput | number | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    round?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
    gw?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type player_statsCreateInput = {
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: string | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
    gameweeks?: gameweeksCreateNestedOneWithoutPlayer_statsInput
    players?: playersCreateNestedOneWithoutPlayer_statsInput
  }

  export type player_statsUncheckedCreateInput = {
    stat_id?: number
    player_id?: number | null
    gw_id?: number | null
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: string | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
  }

  export type player_statsUpdateInput = {
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableStringFieldUpdateOperationsInput | string | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
    gameweeks?: gameweeksUpdateOneWithoutPlayer_statsNestedInput
    players?: playersUpdateOneWithoutPlayer_statsNestedInput
  }

  export type player_statsUncheckedUpdateInput = {
    stat_id?: IntFieldUpdateOperationsInput | number
    player_id?: NullableIntFieldUpdateOperationsInput | number | null
    gw_id?: NullableIntFieldUpdateOperationsInput | number | null
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableStringFieldUpdateOperationsInput | string | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type player_statsCreateManyInput = {
    stat_id?: number
    player_id?: number | null
    gw_id?: number | null
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: string | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
  }

  export type player_statsUpdateManyMutationInput = {
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableStringFieldUpdateOperationsInput | string | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type player_statsUncheckedUpdateManyInput = {
    stat_id?: IntFieldUpdateOperationsInput | number
    player_id?: NullableIntFieldUpdateOperationsInput | number | null
    gw_id?: NullableIntFieldUpdateOperationsInput | number | null
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableStringFieldUpdateOperationsInput | string | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playersCreateInput = {
    name: string
    position?: string | null
    team?: string | null
    element?: number | null
    player_stats?: player_statsCreateNestedManyWithoutPlayersInput
  }

  export type playersUncheckedCreateInput = {
    player_id?: number
    name: string
    position?: string | null
    team?: string | null
    element?: number | null
    player_stats?: player_statsUncheckedCreateNestedManyWithoutPlayersInput
  }

  export type playersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableIntFieldUpdateOperationsInput | number | null
    player_stats?: player_statsUpdateManyWithoutPlayersNestedInput
  }

  export type playersUncheckedUpdateInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableIntFieldUpdateOperationsInput | number | null
    player_stats?: player_statsUncheckedUpdateManyWithoutPlayersNestedInput
  }

  export type playersCreateManyInput = {
    player_id?: number
    name: string
    position?: string | null
    team?: string | null
    element?: number | null
  }

  export type playersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playersUncheckedUpdateManyInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type teamsCreateInput = {
    name: string
    abbreviation?: string | null
  }

  export type teamsUncheckedCreateInput = {
    team_id?: number
    name: string
    abbreviation?: string | null
  }

  export type teamsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type teamsUncheckedUpdateInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type teamsCreateManyInput = {
    team_id?: number
    name: string
    abbreviation?: string | null
  }

  export type teamsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type teamsUncheckedUpdateManyInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Player_statsListRelationFilter = {
    every?: player_statsWhereInput
    some?: player_statsWhereInput
    none?: player_statsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type player_statsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gameweeksSeasonGw_numberCompoundUniqueInput = {
    season: string
    gw_number: number
  }

  export type gameweeksCountOrderByAggregateInput = {
    gw_id?: SortOrder
    season?: SortOrder
    gw_number?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type gameweeksAvgOrderByAggregateInput = {
    gw_id?: SortOrder
    gw_number?: SortOrder
  }

  export type gameweeksMaxOrderByAggregateInput = {
    gw_id?: SortOrder
    season?: SortOrder
    gw_number?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type gameweeksMinOrderByAggregateInput = {
    gw_id?: SortOrder
    season?: SortOrder
    gw_number?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type gameweeksSumOrderByAggregateInput = {
    gw_id?: SortOrder
    gw_number?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type merged_gw_summaryCountOrderByAggregateInput = {
    element?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    games_played?: SortOrder
    total_minutes?: SortOrder
    total_goals?: SortOrder
    total_assists?: SortOrder
    total_clean_sheets?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
    total_points?: SortOrder
    avg_value?: SortOrder
    avg_xp?: SortOrder
    first_gw?: SortOrder
    last_gw?: SortOrder
  }

  export type merged_gw_summaryAvgOrderByAggregateInput = {
    element?: SortOrder
    games_played?: SortOrder
    total_minutes?: SortOrder
    total_goals?: SortOrder
    total_assists?: SortOrder
    total_clean_sheets?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
    total_points?: SortOrder
    avg_value?: SortOrder
    avg_xp?: SortOrder
    first_gw?: SortOrder
    last_gw?: SortOrder
  }

  export type merged_gw_summaryMaxOrderByAggregateInput = {
    element?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    games_played?: SortOrder
    total_minutes?: SortOrder
    total_goals?: SortOrder
    total_assists?: SortOrder
    total_clean_sheets?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
    total_points?: SortOrder
    avg_value?: SortOrder
    avg_xp?: SortOrder
    first_gw?: SortOrder
    last_gw?: SortOrder
  }

  export type merged_gw_summaryMinOrderByAggregateInput = {
    element?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    games_played?: SortOrder
    total_minutes?: SortOrder
    total_goals?: SortOrder
    total_assists?: SortOrder
    total_clean_sheets?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
    total_points?: SortOrder
    avg_value?: SortOrder
    avg_xp?: SortOrder
    first_gw?: SortOrder
    last_gw?: SortOrder
  }

  export type merged_gw_summarySumOrderByAggregateInput = {
    element?: SortOrder
    games_played?: SortOrder
    total_minutes?: SortOrder
    total_goals?: SortOrder
    total_assists?: SortOrder
    total_clean_sheets?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
    total_points?: SortOrder
    avg_value?: SortOrder
    avg_xp?: SortOrder
    first_gw?: SortOrder
    last_gw?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type mergedgwCountOrderByAggregateInput = {
    name?: SortOrder
    element?: SortOrder
    position?: SortOrder
    team?: SortOrder
    xp?: SortOrder
    assists?: SortOrder
    bonus?: SortOrder
    bps?: SortOrder
    clean_sheets?: SortOrder
    creativity?: SortOrder
    expected_assists?: SortOrder
    expected_goal_involvements?: SortOrder
    expected_goals?: SortOrder
    expected_goals_conceded?: SortOrder
    fixture?: SortOrder
    goals_conceded?: SortOrder
    goals_scored?: SortOrder
    ict_index?: SortOrder
    influence?: SortOrder
    kickoff_time?: SortOrder
    minutes?: SortOrder
    modified?: SortOrder
    opponent_team?: SortOrder
    own_goals?: SortOrder
    penalties_missed?: SortOrder
    penalties_saved?: SortOrder
    red_cards?: SortOrder
    round?: SortOrder
    saves?: SortOrder
    selected?: SortOrder
    starts?: SortOrder
    team_a_score?: SortOrder
    team_h_score?: SortOrder
    threat?: SortOrder
    total_points?: SortOrder
    transfers_balance?: SortOrder
    transfers_in?: SortOrder
    transfers_out?: SortOrder
    value?: SortOrder
    was_home?: SortOrder
    yellow_cards?: SortOrder
    gw?: SortOrder
  }

  export type mergedgwAvgOrderByAggregateInput = {
    element?: SortOrder
    xp?: SortOrder
    assists?: SortOrder
    bonus?: SortOrder
    bps?: SortOrder
    clean_sheets?: SortOrder
    creativity?: SortOrder
    expected_assists?: SortOrder
    expected_goal_involvements?: SortOrder
    expected_goals?: SortOrder
    expected_goals_conceded?: SortOrder
    fixture?: SortOrder
    goals_conceded?: SortOrder
    goals_scored?: SortOrder
    ict_index?: SortOrder
    influence?: SortOrder
    minutes?: SortOrder
    opponent_team?: SortOrder
    own_goals?: SortOrder
    penalties_missed?: SortOrder
    penalties_saved?: SortOrder
    red_cards?: SortOrder
    round?: SortOrder
    saves?: SortOrder
    selected?: SortOrder
    starts?: SortOrder
    team_a_score?: SortOrder
    team_h_score?: SortOrder
    threat?: SortOrder
    total_points?: SortOrder
    transfers_balance?: SortOrder
    transfers_in?: SortOrder
    transfers_out?: SortOrder
    value?: SortOrder
    yellow_cards?: SortOrder
    gw?: SortOrder
  }

  export type mergedgwMaxOrderByAggregateInput = {
    name?: SortOrder
    element?: SortOrder
    position?: SortOrder
    team?: SortOrder
    xp?: SortOrder
    assists?: SortOrder
    bonus?: SortOrder
    bps?: SortOrder
    clean_sheets?: SortOrder
    creativity?: SortOrder
    expected_assists?: SortOrder
    expected_goal_involvements?: SortOrder
    expected_goals?: SortOrder
    expected_goals_conceded?: SortOrder
    fixture?: SortOrder
    goals_conceded?: SortOrder
    goals_scored?: SortOrder
    ict_index?: SortOrder
    influence?: SortOrder
    kickoff_time?: SortOrder
    minutes?: SortOrder
    modified?: SortOrder
    opponent_team?: SortOrder
    own_goals?: SortOrder
    penalties_missed?: SortOrder
    penalties_saved?: SortOrder
    red_cards?: SortOrder
    round?: SortOrder
    saves?: SortOrder
    selected?: SortOrder
    starts?: SortOrder
    team_a_score?: SortOrder
    team_h_score?: SortOrder
    threat?: SortOrder
    total_points?: SortOrder
    transfers_balance?: SortOrder
    transfers_in?: SortOrder
    transfers_out?: SortOrder
    value?: SortOrder
    was_home?: SortOrder
    yellow_cards?: SortOrder
    gw?: SortOrder
  }

  export type mergedgwMinOrderByAggregateInput = {
    name?: SortOrder
    element?: SortOrder
    position?: SortOrder
    team?: SortOrder
    xp?: SortOrder
    assists?: SortOrder
    bonus?: SortOrder
    bps?: SortOrder
    clean_sheets?: SortOrder
    creativity?: SortOrder
    expected_assists?: SortOrder
    expected_goal_involvements?: SortOrder
    expected_goals?: SortOrder
    expected_goals_conceded?: SortOrder
    fixture?: SortOrder
    goals_conceded?: SortOrder
    goals_scored?: SortOrder
    ict_index?: SortOrder
    influence?: SortOrder
    kickoff_time?: SortOrder
    minutes?: SortOrder
    modified?: SortOrder
    opponent_team?: SortOrder
    own_goals?: SortOrder
    penalties_missed?: SortOrder
    penalties_saved?: SortOrder
    red_cards?: SortOrder
    round?: SortOrder
    saves?: SortOrder
    selected?: SortOrder
    starts?: SortOrder
    team_a_score?: SortOrder
    team_h_score?: SortOrder
    threat?: SortOrder
    total_points?: SortOrder
    transfers_balance?: SortOrder
    transfers_in?: SortOrder
    transfers_out?: SortOrder
    value?: SortOrder
    was_home?: SortOrder
    yellow_cards?: SortOrder
    gw?: SortOrder
  }

  export type mergedgwSumOrderByAggregateInput = {
    element?: SortOrder
    xp?: SortOrder
    assists?: SortOrder
    bonus?: SortOrder
    bps?: SortOrder
    clean_sheets?: SortOrder
    creativity?: SortOrder
    expected_assists?: SortOrder
    expected_goal_involvements?: SortOrder
    expected_goals?: SortOrder
    expected_goals_conceded?: SortOrder
    fixture?: SortOrder
    goals_conceded?: SortOrder
    goals_scored?: SortOrder
    ict_index?: SortOrder
    influence?: SortOrder
    minutes?: SortOrder
    opponent_team?: SortOrder
    own_goals?: SortOrder
    penalties_missed?: SortOrder
    penalties_saved?: SortOrder
    red_cards?: SortOrder
    round?: SortOrder
    saves?: SortOrder
    selected?: SortOrder
    starts?: SortOrder
    team_a_score?: SortOrder
    team_h_score?: SortOrder
    threat?: SortOrder
    total_points?: SortOrder
    transfers_balance?: SortOrder
    transfers_in?: SortOrder
    transfers_out?: SortOrder
    value?: SortOrder
    yellow_cards?: SortOrder
    gw?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type GameweeksNullableScalarRelationFilter = {
    is?: gameweeksWhereInput | null
    isNot?: gameweeksWhereInput | null
  }

  export type PlayersNullableScalarRelationFilter = {
    is?: playersWhereInput | null
    isNot?: playersWhereInput | null
  }

  export type player_statsCountOrderByAggregateInput = {
    stat_id?: SortOrder
    player_id?: SortOrder
    gw_id?: SortOrder
    xp?: SortOrder
    assists?: SortOrder
    bonus?: SortOrder
    bps?: SortOrder
    clean_sheets?: SortOrder
    creativity?: SortOrder
    expected_assists?: SortOrder
    expected_goal_involvements?: SortOrder
    expected_goals?: SortOrder
    expected_goals_conceded?: SortOrder
    fixture?: SortOrder
    goals_conceded?: SortOrder
    goals_scored?: SortOrder
    ict_index?: SortOrder
    influence?: SortOrder
    kickoff_time?: SortOrder
    minutes?: SortOrder
    modified?: SortOrder
    opponent_team?: SortOrder
    own_goals?: SortOrder
    penalties_missed?: SortOrder
    penalties_saved?: SortOrder
    red_cards?: SortOrder
    saves?: SortOrder
    selected?: SortOrder
    starts?: SortOrder
    team_a_score?: SortOrder
    team_h_score?: SortOrder
    threat?: SortOrder
    total_points?: SortOrder
    transfers_balance?: SortOrder
    transfers_in?: SortOrder
    transfers_out?: SortOrder
    value?: SortOrder
    was_home?: SortOrder
    yellow_cards?: SortOrder
  }

  export type player_statsAvgOrderByAggregateInput = {
    stat_id?: SortOrder
    player_id?: SortOrder
    gw_id?: SortOrder
    xp?: SortOrder
    assists?: SortOrder
    bonus?: SortOrder
    bps?: SortOrder
    clean_sheets?: SortOrder
    creativity?: SortOrder
    expected_assists?: SortOrder
    expected_goal_involvements?: SortOrder
    expected_goals?: SortOrder
    expected_goals_conceded?: SortOrder
    fixture?: SortOrder
    goals_conceded?: SortOrder
    goals_scored?: SortOrder
    ict_index?: SortOrder
    influence?: SortOrder
    minutes?: SortOrder
    own_goals?: SortOrder
    penalties_missed?: SortOrder
    penalties_saved?: SortOrder
    red_cards?: SortOrder
    saves?: SortOrder
    selected?: SortOrder
    starts?: SortOrder
    team_a_score?: SortOrder
    team_h_score?: SortOrder
    threat?: SortOrder
    total_points?: SortOrder
    transfers_balance?: SortOrder
    transfers_in?: SortOrder
    transfers_out?: SortOrder
    value?: SortOrder
    yellow_cards?: SortOrder
  }

  export type player_statsMaxOrderByAggregateInput = {
    stat_id?: SortOrder
    player_id?: SortOrder
    gw_id?: SortOrder
    xp?: SortOrder
    assists?: SortOrder
    bonus?: SortOrder
    bps?: SortOrder
    clean_sheets?: SortOrder
    creativity?: SortOrder
    expected_assists?: SortOrder
    expected_goal_involvements?: SortOrder
    expected_goals?: SortOrder
    expected_goals_conceded?: SortOrder
    fixture?: SortOrder
    goals_conceded?: SortOrder
    goals_scored?: SortOrder
    ict_index?: SortOrder
    influence?: SortOrder
    kickoff_time?: SortOrder
    minutes?: SortOrder
    modified?: SortOrder
    opponent_team?: SortOrder
    own_goals?: SortOrder
    penalties_missed?: SortOrder
    penalties_saved?: SortOrder
    red_cards?: SortOrder
    saves?: SortOrder
    selected?: SortOrder
    starts?: SortOrder
    team_a_score?: SortOrder
    team_h_score?: SortOrder
    threat?: SortOrder
    total_points?: SortOrder
    transfers_balance?: SortOrder
    transfers_in?: SortOrder
    transfers_out?: SortOrder
    value?: SortOrder
    was_home?: SortOrder
    yellow_cards?: SortOrder
  }

  export type player_statsMinOrderByAggregateInput = {
    stat_id?: SortOrder
    player_id?: SortOrder
    gw_id?: SortOrder
    xp?: SortOrder
    assists?: SortOrder
    bonus?: SortOrder
    bps?: SortOrder
    clean_sheets?: SortOrder
    creativity?: SortOrder
    expected_assists?: SortOrder
    expected_goal_involvements?: SortOrder
    expected_goals?: SortOrder
    expected_goals_conceded?: SortOrder
    fixture?: SortOrder
    goals_conceded?: SortOrder
    goals_scored?: SortOrder
    ict_index?: SortOrder
    influence?: SortOrder
    kickoff_time?: SortOrder
    minutes?: SortOrder
    modified?: SortOrder
    opponent_team?: SortOrder
    own_goals?: SortOrder
    penalties_missed?: SortOrder
    penalties_saved?: SortOrder
    red_cards?: SortOrder
    saves?: SortOrder
    selected?: SortOrder
    starts?: SortOrder
    team_a_score?: SortOrder
    team_h_score?: SortOrder
    threat?: SortOrder
    total_points?: SortOrder
    transfers_balance?: SortOrder
    transfers_in?: SortOrder
    transfers_out?: SortOrder
    value?: SortOrder
    was_home?: SortOrder
    yellow_cards?: SortOrder
  }

  export type player_statsSumOrderByAggregateInput = {
    stat_id?: SortOrder
    player_id?: SortOrder
    gw_id?: SortOrder
    xp?: SortOrder
    assists?: SortOrder
    bonus?: SortOrder
    bps?: SortOrder
    clean_sheets?: SortOrder
    creativity?: SortOrder
    expected_assists?: SortOrder
    expected_goal_involvements?: SortOrder
    expected_goals?: SortOrder
    expected_goals_conceded?: SortOrder
    fixture?: SortOrder
    goals_conceded?: SortOrder
    goals_scored?: SortOrder
    ict_index?: SortOrder
    influence?: SortOrder
    minutes?: SortOrder
    own_goals?: SortOrder
    penalties_missed?: SortOrder
    penalties_saved?: SortOrder
    red_cards?: SortOrder
    saves?: SortOrder
    selected?: SortOrder
    starts?: SortOrder
    team_a_score?: SortOrder
    team_h_score?: SortOrder
    threat?: SortOrder
    total_points?: SortOrder
    transfers_balance?: SortOrder
    transfers_in?: SortOrder
    transfers_out?: SortOrder
    value?: SortOrder
    yellow_cards?: SortOrder
  }

  export type playersCountOrderByAggregateInput = {
    player_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    element?: SortOrder
  }

  export type playersAvgOrderByAggregateInput = {
    player_id?: SortOrder
    element?: SortOrder
  }

  export type playersMaxOrderByAggregateInput = {
    player_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    element?: SortOrder
  }

  export type playersMinOrderByAggregateInput = {
    player_id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    team?: SortOrder
    element?: SortOrder
  }

  export type playersSumOrderByAggregateInput = {
    player_id?: SortOrder
    element?: SortOrder
  }

  export type teamsCountOrderByAggregateInput = {
    team_id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
  }

  export type teamsAvgOrderByAggregateInput = {
    team_id?: SortOrder
  }

  export type teamsMaxOrderByAggregateInput = {
    team_id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
  }

  export type teamsMinOrderByAggregateInput = {
    team_id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
  }

  export type teamsSumOrderByAggregateInput = {
    team_id?: SortOrder
  }

  export type player_statsCreateNestedManyWithoutGameweeksInput = {
    create?: XOR<player_statsCreateWithoutGameweeksInput, player_statsUncheckedCreateWithoutGameweeksInput> | player_statsCreateWithoutGameweeksInput[] | player_statsUncheckedCreateWithoutGameweeksInput[]
    connectOrCreate?: player_statsCreateOrConnectWithoutGameweeksInput | player_statsCreateOrConnectWithoutGameweeksInput[]
    createMany?: player_statsCreateManyGameweeksInputEnvelope
    connect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
  }

  export type player_statsUncheckedCreateNestedManyWithoutGameweeksInput = {
    create?: XOR<player_statsCreateWithoutGameweeksInput, player_statsUncheckedCreateWithoutGameweeksInput> | player_statsCreateWithoutGameweeksInput[] | player_statsUncheckedCreateWithoutGameweeksInput[]
    connectOrCreate?: player_statsCreateOrConnectWithoutGameweeksInput | player_statsCreateOrConnectWithoutGameweeksInput[]
    createMany?: player_statsCreateManyGameweeksInputEnvelope
    connect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type player_statsUpdateManyWithoutGameweeksNestedInput = {
    create?: XOR<player_statsCreateWithoutGameweeksInput, player_statsUncheckedCreateWithoutGameweeksInput> | player_statsCreateWithoutGameweeksInput[] | player_statsUncheckedCreateWithoutGameweeksInput[]
    connectOrCreate?: player_statsCreateOrConnectWithoutGameweeksInput | player_statsCreateOrConnectWithoutGameweeksInput[]
    upsert?: player_statsUpsertWithWhereUniqueWithoutGameweeksInput | player_statsUpsertWithWhereUniqueWithoutGameweeksInput[]
    createMany?: player_statsCreateManyGameweeksInputEnvelope
    set?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    disconnect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    delete?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    connect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    update?: player_statsUpdateWithWhereUniqueWithoutGameweeksInput | player_statsUpdateWithWhereUniqueWithoutGameweeksInput[]
    updateMany?: player_statsUpdateManyWithWhereWithoutGameweeksInput | player_statsUpdateManyWithWhereWithoutGameweeksInput[]
    deleteMany?: player_statsScalarWhereInput | player_statsScalarWhereInput[]
  }

  export type player_statsUncheckedUpdateManyWithoutGameweeksNestedInput = {
    create?: XOR<player_statsCreateWithoutGameweeksInput, player_statsUncheckedCreateWithoutGameweeksInput> | player_statsCreateWithoutGameweeksInput[] | player_statsUncheckedCreateWithoutGameweeksInput[]
    connectOrCreate?: player_statsCreateOrConnectWithoutGameweeksInput | player_statsCreateOrConnectWithoutGameweeksInput[]
    upsert?: player_statsUpsertWithWhereUniqueWithoutGameweeksInput | player_statsUpsertWithWhereUniqueWithoutGameweeksInput[]
    createMany?: player_statsCreateManyGameweeksInputEnvelope
    set?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    disconnect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    delete?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    connect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    update?: player_statsUpdateWithWhereUniqueWithoutGameweeksInput | player_statsUpdateWithWhereUniqueWithoutGameweeksInput[]
    updateMany?: player_statsUpdateManyWithWhereWithoutGameweeksInput | player_statsUpdateManyWithWhereWithoutGameweeksInput[]
    deleteMany?: player_statsScalarWhereInput | player_statsScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type gameweeksCreateNestedOneWithoutPlayer_statsInput = {
    create?: XOR<gameweeksCreateWithoutPlayer_statsInput, gameweeksUncheckedCreateWithoutPlayer_statsInput>
    connectOrCreate?: gameweeksCreateOrConnectWithoutPlayer_statsInput
    connect?: gameweeksWhereUniqueInput
  }

  export type playersCreateNestedOneWithoutPlayer_statsInput = {
    create?: XOR<playersCreateWithoutPlayer_statsInput, playersUncheckedCreateWithoutPlayer_statsInput>
    connectOrCreate?: playersCreateOrConnectWithoutPlayer_statsInput
    connect?: playersWhereUniqueInput
  }

  export type gameweeksUpdateOneWithoutPlayer_statsNestedInput = {
    create?: XOR<gameweeksCreateWithoutPlayer_statsInput, gameweeksUncheckedCreateWithoutPlayer_statsInput>
    connectOrCreate?: gameweeksCreateOrConnectWithoutPlayer_statsInput
    upsert?: gameweeksUpsertWithoutPlayer_statsInput
    disconnect?: gameweeksWhereInput | boolean
    delete?: gameweeksWhereInput | boolean
    connect?: gameweeksWhereUniqueInput
    update?: XOR<XOR<gameweeksUpdateToOneWithWhereWithoutPlayer_statsInput, gameweeksUpdateWithoutPlayer_statsInput>, gameweeksUncheckedUpdateWithoutPlayer_statsInput>
  }

  export type playersUpdateOneWithoutPlayer_statsNestedInput = {
    create?: XOR<playersCreateWithoutPlayer_statsInput, playersUncheckedCreateWithoutPlayer_statsInput>
    connectOrCreate?: playersCreateOrConnectWithoutPlayer_statsInput
    upsert?: playersUpsertWithoutPlayer_statsInput
    disconnect?: playersWhereInput | boolean
    delete?: playersWhereInput | boolean
    connect?: playersWhereUniqueInput
    update?: XOR<XOR<playersUpdateToOneWithWhereWithoutPlayer_statsInput, playersUpdateWithoutPlayer_statsInput>, playersUncheckedUpdateWithoutPlayer_statsInput>
  }

  export type player_statsCreateNestedManyWithoutPlayersInput = {
    create?: XOR<player_statsCreateWithoutPlayersInput, player_statsUncheckedCreateWithoutPlayersInput> | player_statsCreateWithoutPlayersInput[] | player_statsUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: player_statsCreateOrConnectWithoutPlayersInput | player_statsCreateOrConnectWithoutPlayersInput[]
    createMany?: player_statsCreateManyPlayersInputEnvelope
    connect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
  }

  export type player_statsUncheckedCreateNestedManyWithoutPlayersInput = {
    create?: XOR<player_statsCreateWithoutPlayersInput, player_statsUncheckedCreateWithoutPlayersInput> | player_statsCreateWithoutPlayersInput[] | player_statsUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: player_statsCreateOrConnectWithoutPlayersInput | player_statsCreateOrConnectWithoutPlayersInput[]
    createMany?: player_statsCreateManyPlayersInputEnvelope
    connect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
  }

  export type player_statsUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<player_statsCreateWithoutPlayersInput, player_statsUncheckedCreateWithoutPlayersInput> | player_statsCreateWithoutPlayersInput[] | player_statsUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: player_statsCreateOrConnectWithoutPlayersInput | player_statsCreateOrConnectWithoutPlayersInput[]
    upsert?: player_statsUpsertWithWhereUniqueWithoutPlayersInput | player_statsUpsertWithWhereUniqueWithoutPlayersInput[]
    createMany?: player_statsCreateManyPlayersInputEnvelope
    set?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    disconnect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    delete?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    connect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    update?: player_statsUpdateWithWhereUniqueWithoutPlayersInput | player_statsUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: player_statsUpdateManyWithWhereWithoutPlayersInput | player_statsUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: player_statsScalarWhereInput | player_statsScalarWhereInput[]
  }

  export type player_statsUncheckedUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<player_statsCreateWithoutPlayersInput, player_statsUncheckedCreateWithoutPlayersInput> | player_statsCreateWithoutPlayersInput[] | player_statsUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: player_statsCreateOrConnectWithoutPlayersInput | player_statsCreateOrConnectWithoutPlayersInput[]
    upsert?: player_statsUpsertWithWhereUniqueWithoutPlayersInput | player_statsUpsertWithWhereUniqueWithoutPlayersInput[]
    createMany?: player_statsCreateManyPlayersInputEnvelope
    set?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    disconnect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    delete?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    connect?: player_statsWhereUniqueInput | player_statsWhereUniqueInput[]
    update?: player_statsUpdateWithWhereUniqueWithoutPlayersInput | player_statsUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: player_statsUpdateManyWithWhereWithoutPlayersInput | player_statsUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: player_statsScalarWhereInput | player_statsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type player_statsCreateWithoutGameweeksInput = {
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: string | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
    players?: playersCreateNestedOneWithoutPlayer_statsInput
  }

  export type player_statsUncheckedCreateWithoutGameweeksInput = {
    stat_id?: number
    player_id?: number | null
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: string | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
  }

  export type player_statsCreateOrConnectWithoutGameweeksInput = {
    where: player_statsWhereUniqueInput
    create: XOR<player_statsCreateWithoutGameweeksInput, player_statsUncheckedCreateWithoutGameweeksInput>
  }

  export type player_statsCreateManyGameweeksInputEnvelope = {
    data: player_statsCreateManyGameweeksInput | player_statsCreateManyGameweeksInput[]
    skipDuplicates?: boolean
  }

  export type player_statsUpsertWithWhereUniqueWithoutGameweeksInput = {
    where: player_statsWhereUniqueInput
    update: XOR<player_statsUpdateWithoutGameweeksInput, player_statsUncheckedUpdateWithoutGameweeksInput>
    create: XOR<player_statsCreateWithoutGameweeksInput, player_statsUncheckedCreateWithoutGameweeksInput>
  }

  export type player_statsUpdateWithWhereUniqueWithoutGameweeksInput = {
    where: player_statsWhereUniqueInput
    data: XOR<player_statsUpdateWithoutGameweeksInput, player_statsUncheckedUpdateWithoutGameweeksInput>
  }

  export type player_statsUpdateManyWithWhereWithoutGameweeksInput = {
    where: player_statsScalarWhereInput
    data: XOR<player_statsUpdateManyMutationInput, player_statsUncheckedUpdateManyWithoutGameweeksInput>
  }

  export type player_statsScalarWhereInput = {
    AND?: player_statsScalarWhereInput | player_statsScalarWhereInput[]
    OR?: player_statsScalarWhereInput[]
    NOT?: player_statsScalarWhereInput | player_statsScalarWhereInput[]
    stat_id?: IntFilter<"player_stats"> | number
    player_id?: IntNullableFilter<"player_stats"> | number | null
    gw_id?: IntNullableFilter<"player_stats"> | number | null
    xp?: FloatNullableFilter<"player_stats"> | number | null
    assists?: IntNullableFilter<"player_stats"> | number | null
    bonus?: IntNullableFilter<"player_stats"> | number | null
    bps?: IntNullableFilter<"player_stats"> | number | null
    clean_sheets?: IntNullableFilter<"player_stats"> | number | null
    creativity?: FloatNullableFilter<"player_stats"> | number | null
    expected_assists?: FloatNullableFilter<"player_stats"> | number | null
    expected_goal_involvements?: FloatNullableFilter<"player_stats"> | number | null
    expected_goals?: FloatNullableFilter<"player_stats"> | number | null
    expected_goals_conceded?: FloatNullableFilter<"player_stats"> | number | null
    fixture?: IntNullableFilter<"player_stats"> | number | null
    goals_conceded?: IntNullableFilter<"player_stats"> | number | null
    goals_scored?: IntNullableFilter<"player_stats"> | number | null
    ict_index?: FloatNullableFilter<"player_stats"> | number | null
    influence?: FloatNullableFilter<"player_stats"> | number | null
    kickoff_time?: DateTimeNullableFilter<"player_stats"> | Date | string | null
    minutes?: IntNullableFilter<"player_stats"> | number | null
    modified?: BoolNullableFilter<"player_stats"> | boolean | null
    opponent_team?: StringNullableFilter<"player_stats"> | string | null
    own_goals?: IntNullableFilter<"player_stats"> | number | null
    penalties_missed?: IntNullableFilter<"player_stats"> | number | null
    penalties_saved?: IntNullableFilter<"player_stats"> | number | null
    red_cards?: IntNullableFilter<"player_stats"> | number | null
    saves?: IntNullableFilter<"player_stats"> | number | null
    selected?: IntNullableFilter<"player_stats"> | number | null
    starts?: IntNullableFilter<"player_stats"> | number | null
    team_a_score?: IntNullableFilter<"player_stats"> | number | null
    team_h_score?: IntNullableFilter<"player_stats"> | number | null
    threat?: FloatNullableFilter<"player_stats"> | number | null
    total_points?: IntNullableFilter<"player_stats"> | number | null
    transfers_balance?: IntNullableFilter<"player_stats"> | number | null
    transfers_in?: IntNullableFilter<"player_stats"> | number | null
    transfers_out?: IntNullableFilter<"player_stats"> | number | null
    value?: FloatNullableFilter<"player_stats"> | number | null
    was_home?: BoolNullableFilter<"player_stats"> | boolean | null
    yellow_cards?: IntNullableFilter<"player_stats"> | number | null
  }

  export type gameweeksCreateWithoutPlayer_statsInput = {
    season: string
    gw_number: number
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type gameweeksUncheckedCreateWithoutPlayer_statsInput = {
    gw_id?: number
    season: string
    gw_number: number
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type gameweeksCreateOrConnectWithoutPlayer_statsInput = {
    where: gameweeksWhereUniqueInput
    create: XOR<gameweeksCreateWithoutPlayer_statsInput, gameweeksUncheckedCreateWithoutPlayer_statsInput>
  }

  export type playersCreateWithoutPlayer_statsInput = {
    name: string
    position?: string | null
    team?: string | null
    element?: number | null
  }

  export type playersUncheckedCreateWithoutPlayer_statsInput = {
    player_id?: number
    name: string
    position?: string | null
    team?: string | null
    element?: number | null
  }

  export type playersCreateOrConnectWithoutPlayer_statsInput = {
    where: playersWhereUniqueInput
    create: XOR<playersCreateWithoutPlayer_statsInput, playersUncheckedCreateWithoutPlayer_statsInput>
  }

  export type gameweeksUpsertWithoutPlayer_statsInput = {
    update: XOR<gameweeksUpdateWithoutPlayer_statsInput, gameweeksUncheckedUpdateWithoutPlayer_statsInput>
    create: XOR<gameweeksCreateWithoutPlayer_statsInput, gameweeksUncheckedCreateWithoutPlayer_statsInput>
    where?: gameweeksWhereInput
  }

  export type gameweeksUpdateToOneWithWhereWithoutPlayer_statsInput = {
    where?: gameweeksWhereInput
    data: XOR<gameweeksUpdateWithoutPlayer_statsInput, gameweeksUncheckedUpdateWithoutPlayer_statsInput>
  }

  export type gameweeksUpdateWithoutPlayer_statsInput = {
    season?: StringFieldUpdateOperationsInput | string
    gw_number?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gameweeksUncheckedUpdateWithoutPlayer_statsInput = {
    gw_id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    gw_number?: IntFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type playersUpsertWithoutPlayer_statsInput = {
    update: XOR<playersUpdateWithoutPlayer_statsInput, playersUncheckedUpdateWithoutPlayer_statsInput>
    create: XOR<playersCreateWithoutPlayer_statsInput, playersUncheckedCreateWithoutPlayer_statsInput>
    where?: playersWhereInput
  }

  export type playersUpdateToOneWithWhereWithoutPlayer_statsInput = {
    where?: playersWhereInput
    data: XOR<playersUpdateWithoutPlayer_statsInput, playersUncheckedUpdateWithoutPlayer_statsInput>
  }

  export type playersUpdateWithoutPlayer_statsInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playersUncheckedUpdateWithoutPlayer_statsInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    team?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type player_statsCreateWithoutPlayersInput = {
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: string | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
    gameweeks?: gameweeksCreateNestedOneWithoutPlayer_statsInput
  }

  export type player_statsUncheckedCreateWithoutPlayersInput = {
    stat_id?: number
    gw_id?: number | null
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: string | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
  }

  export type player_statsCreateOrConnectWithoutPlayersInput = {
    where: player_statsWhereUniqueInput
    create: XOR<player_statsCreateWithoutPlayersInput, player_statsUncheckedCreateWithoutPlayersInput>
  }

  export type player_statsCreateManyPlayersInputEnvelope = {
    data: player_statsCreateManyPlayersInput | player_statsCreateManyPlayersInput[]
    skipDuplicates?: boolean
  }

  export type player_statsUpsertWithWhereUniqueWithoutPlayersInput = {
    where: player_statsWhereUniqueInput
    update: XOR<player_statsUpdateWithoutPlayersInput, player_statsUncheckedUpdateWithoutPlayersInput>
    create: XOR<player_statsCreateWithoutPlayersInput, player_statsUncheckedCreateWithoutPlayersInput>
  }

  export type player_statsUpdateWithWhereUniqueWithoutPlayersInput = {
    where: player_statsWhereUniqueInput
    data: XOR<player_statsUpdateWithoutPlayersInput, player_statsUncheckedUpdateWithoutPlayersInput>
  }

  export type player_statsUpdateManyWithWhereWithoutPlayersInput = {
    where: player_statsScalarWhereInput
    data: XOR<player_statsUpdateManyMutationInput, player_statsUncheckedUpdateManyWithoutPlayersInput>
  }

  export type player_statsCreateManyGameweeksInput = {
    stat_id?: number
    player_id?: number | null
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: string | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
  }

  export type player_statsUpdateWithoutGameweeksInput = {
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableStringFieldUpdateOperationsInput | string | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
    players?: playersUpdateOneWithoutPlayer_statsNestedInput
  }

  export type player_statsUncheckedUpdateWithoutGameweeksInput = {
    stat_id?: IntFieldUpdateOperationsInput | number
    player_id?: NullableIntFieldUpdateOperationsInput | number | null
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableStringFieldUpdateOperationsInput | string | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type player_statsUncheckedUpdateManyWithoutGameweeksInput = {
    stat_id?: IntFieldUpdateOperationsInput | number
    player_id?: NullableIntFieldUpdateOperationsInput | number | null
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableStringFieldUpdateOperationsInput | string | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type player_statsCreateManyPlayersInput = {
    stat_id?: number
    gw_id?: number | null
    xp?: number | null
    assists?: number | null
    bonus?: number | null
    bps?: number | null
    clean_sheets?: number | null
    creativity?: number | null
    expected_assists?: number | null
    expected_goal_involvements?: number | null
    expected_goals?: number | null
    expected_goals_conceded?: number | null
    fixture?: number | null
    goals_conceded?: number | null
    goals_scored?: number | null
    ict_index?: number | null
    influence?: number | null
    kickoff_time?: Date | string | null
    minutes?: number | null
    modified?: boolean | null
    opponent_team?: string | null
    own_goals?: number | null
    penalties_missed?: number | null
    penalties_saved?: number | null
    red_cards?: number | null
    saves?: number | null
    selected?: number | null
    starts?: number | null
    team_a_score?: number | null
    team_h_score?: number | null
    threat?: number | null
    total_points?: number | null
    transfers_balance?: number | null
    transfers_in?: number | null
    transfers_out?: number | null
    value?: number | null
    was_home?: boolean | null
    yellow_cards?: number | null
  }

  export type player_statsUpdateWithoutPlayersInput = {
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableStringFieldUpdateOperationsInput | string | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
    gameweeks?: gameweeksUpdateOneWithoutPlayer_statsNestedInput
  }

  export type player_statsUncheckedUpdateWithoutPlayersInput = {
    stat_id?: IntFieldUpdateOperationsInput | number
    gw_id?: NullableIntFieldUpdateOperationsInput | number | null
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableStringFieldUpdateOperationsInput | string | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type player_statsUncheckedUpdateManyWithoutPlayersInput = {
    stat_id?: IntFieldUpdateOperationsInput | number
    gw_id?: NullableIntFieldUpdateOperationsInput | number | null
    xp?: NullableFloatFieldUpdateOperationsInput | number | null
    assists?: NullableIntFieldUpdateOperationsInput | number | null
    bonus?: NullableIntFieldUpdateOperationsInput | number | null
    bps?: NullableIntFieldUpdateOperationsInput | number | null
    clean_sheets?: NullableIntFieldUpdateOperationsInput | number | null
    creativity?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_assists?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goal_involvements?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_goals_conceded?: NullableFloatFieldUpdateOperationsInput | number | null
    fixture?: NullableIntFieldUpdateOperationsInput | number | null
    goals_conceded?: NullableIntFieldUpdateOperationsInput | number | null
    goals_scored?: NullableIntFieldUpdateOperationsInput | number | null
    ict_index?: NullableFloatFieldUpdateOperationsInput | number | null
    influence?: NullableFloatFieldUpdateOperationsInput | number | null
    kickoff_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minutes?: NullableIntFieldUpdateOperationsInput | number | null
    modified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    opponent_team?: NullableStringFieldUpdateOperationsInput | string | null
    own_goals?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_missed?: NullableIntFieldUpdateOperationsInput | number | null
    penalties_saved?: NullableIntFieldUpdateOperationsInput | number | null
    red_cards?: NullableIntFieldUpdateOperationsInput | number | null
    saves?: NullableIntFieldUpdateOperationsInput | number | null
    selected?: NullableIntFieldUpdateOperationsInput | number | null
    starts?: NullableIntFieldUpdateOperationsInput | number | null
    team_a_score?: NullableIntFieldUpdateOperationsInput | number | null
    team_h_score?: NullableIntFieldUpdateOperationsInput | number | null
    threat?: NullableFloatFieldUpdateOperationsInput | number | null
    total_points?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_balance?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_in?: NullableIntFieldUpdateOperationsInput | number | null
    transfers_out?: NullableIntFieldUpdateOperationsInput | number | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    was_home?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yellow_cards?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}