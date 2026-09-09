
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model ChallengeMember
 * 
 */
export type ChallengeMember = $Result.DefaultSelection<Prisma.$ChallengeMemberPayload>
/**
 * Model ChallengeTask
 * 
 */
export type ChallengeTask = $Result.DefaultSelection<Prisma.$ChallengeTaskPayload>
/**
 * Model TaskTier
 * 
 */
export type TaskTier = $Result.DefaultSelection<Prisma.$TaskTierPayload>
/**
 * Model TaskLog
 * 
 */
export type TaskLog = $Result.DefaultSelection<Prisma.$TaskLogPayload>
/**
 * Model DaySummary
 * 
 */
export type DaySummary = $Result.DefaultSelection<Prisma.$DaySummaryPayload>
/**
 * Model WeeklyScore
 * 
 */
export type WeeklyScore = $Result.DefaultSelection<Prisma.$WeeklyScorePayload>
/**
 * Model ActivityEvent
 * 
 */
export type ActivityEvent = $Result.DefaultSelection<Prisma.$ActivityEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challengeMember`: Exposes CRUD operations for the **ChallengeMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeMembers
    * const challengeMembers = await prisma.challengeMember.findMany()
    * ```
    */
  get challengeMember(): Prisma.ChallengeMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challengeTask`: Exposes CRUD operations for the **ChallengeTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeTasks
    * const challengeTasks = await prisma.challengeTask.findMany()
    * ```
    */
  get challengeTask(): Prisma.ChallengeTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskTier`: Exposes CRUD operations for the **TaskTier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskTiers
    * const taskTiers = await prisma.taskTier.findMany()
    * ```
    */
  get taskTier(): Prisma.TaskTierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskLog`: Exposes CRUD operations for the **TaskLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskLogs
    * const taskLogs = await prisma.taskLog.findMany()
    * ```
    */
  get taskLog(): Prisma.TaskLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.daySummary`: Exposes CRUD operations for the **DaySummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DaySummaries
    * const daySummaries = await prisma.daySummary.findMany()
    * ```
    */
  get daySummary(): Prisma.DaySummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklyScore`: Exposes CRUD operations for the **WeeklyScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyScores
    * const weeklyScores = await prisma.weeklyScore.findMany()
    * ```
    */
  get weeklyScore(): Prisma.WeeklyScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityEvent`: Exposes CRUD operations for the **ActivityEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityEvents
    * const activityEvents = await prisma.activityEvent.findMany()
    * ```
    */
  get activityEvent(): Prisma.ActivityEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Challenge: 'Challenge',
    ChallengeMember: 'ChallengeMember',
    ChallengeTask: 'ChallengeTask',
    TaskTier: 'TaskTier',
    TaskLog: 'TaskLog',
    DaySummary: 'DaySummary',
    WeeklyScore: 'WeeklyScore',
    ActivityEvent: 'ActivityEvent'
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
      modelProps: "user" | "account" | "session" | "verificationToken" | "challenge" | "challengeMember" | "challengeTask" | "taskTier" | "taskLog" | "daySummary" | "weeklyScore" | "activityEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      ChallengeMember: {
        payload: Prisma.$ChallengeMemberPayload<ExtArgs>
        fields: Prisma.ChallengeMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeMemberPayload>
          }
          findFirst: {
            args: Prisma.ChallengeMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeMemberPayload>
          }
          findMany: {
            args: Prisma.ChallengeMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeMemberPayload>[]
          }
          create: {
            args: Prisma.ChallengeMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeMemberPayload>
          }
          createMany: {
            args: Prisma.ChallengeMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeMemberPayload>[]
          }
          delete: {
            args: Prisma.ChallengeMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeMemberPayload>
          }
          update: {
            args: Prisma.ChallengeMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeMemberPayload>
          }
          deleteMany: {
            args: Prisma.ChallengeMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeMemberPayload>[]
          }
          upsert: {
            args: Prisma.ChallengeMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeMemberPayload>
          }
          aggregate: {
            args: Prisma.ChallengeMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallengeMember>
          }
          groupBy: {
            args: Prisma.ChallengeMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeMemberCountAggregateOutputType> | number
          }
        }
      }
      ChallengeTask: {
        payload: Prisma.$ChallengeTaskPayload<ExtArgs>
        fields: Prisma.ChallengeTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeTaskPayload>
          }
          findFirst: {
            args: Prisma.ChallengeTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeTaskPayload>
          }
          findMany: {
            args: Prisma.ChallengeTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeTaskPayload>[]
          }
          create: {
            args: Prisma.ChallengeTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeTaskPayload>
          }
          createMany: {
            args: Prisma.ChallengeTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeTaskPayload>[]
          }
          delete: {
            args: Prisma.ChallengeTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeTaskPayload>
          }
          update: {
            args: Prisma.ChallengeTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeTaskPayload>
          }
          deleteMany: {
            args: Prisma.ChallengeTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeTaskPayload>[]
          }
          upsert: {
            args: Prisma.ChallengeTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeTaskPayload>
          }
          aggregate: {
            args: Prisma.ChallengeTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallengeTask>
          }
          groupBy: {
            args: Prisma.ChallengeTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeTaskCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeTaskCountAggregateOutputType> | number
          }
        }
      }
      TaskTier: {
        payload: Prisma.$TaskTierPayload<ExtArgs>
        fields: Prisma.TaskTierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskTierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskTierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTierPayload>
          }
          findFirst: {
            args: Prisma.TaskTierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskTierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTierPayload>
          }
          findMany: {
            args: Prisma.TaskTierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTierPayload>[]
          }
          create: {
            args: Prisma.TaskTierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTierPayload>
          }
          createMany: {
            args: Prisma.TaskTierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskTierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTierPayload>[]
          }
          delete: {
            args: Prisma.TaskTierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTierPayload>
          }
          update: {
            args: Prisma.TaskTierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTierPayload>
          }
          deleteMany: {
            args: Prisma.TaskTierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskTierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskTierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTierPayload>[]
          }
          upsert: {
            args: Prisma.TaskTierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTierPayload>
          }
          aggregate: {
            args: Prisma.TaskTierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskTier>
          }
          groupBy: {
            args: Prisma.TaskTierGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskTierGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskTierCountArgs<ExtArgs>
            result: $Utils.Optional<TaskTierCountAggregateOutputType> | number
          }
        }
      }
      TaskLog: {
        payload: Prisma.$TaskLogPayload<ExtArgs>
        fields: Prisma.TaskLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          findFirst: {
            args: Prisma.TaskLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          findMany: {
            args: Prisma.TaskLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          create: {
            args: Prisma.TaskLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          createMany: {
            args: Prisma.TaskLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          delete: {
            args: Prisma.TaskLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          update: {
            args: Prisma.TaskLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          deleteMany: {
            args: Prisma.TaskLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          upsert: {
            args: Prisma.TaskLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          aggregate: {
            args: Prisma.TaskLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskLog>
          }
          groupBy: {
            args: Prisma.TaskLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskLogCountArgs<ExtArgs>
            result: $Utils.Optional<TaskLogCountAggregateOutputType> | number
          }
        }
      }
      DaySummary: {
        payload: Prisma.$DaySummaryPayload<ExtArgs>
        fields: Prisma.DaySummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DaySummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DaySummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySummaryPayload>
          }
          findFirst: {
            args: Prisma.DaySummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DaySummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySummaryPayload>
          }
          findMany: {
            args: Prisma.DaySummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySummaryPayload>[]
          }
          create: {
            args: Prisma.DaySummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySummaryPayload>
          }
          createMany: {
            args: Prisma.DaySummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DaySummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySummaryPayload>[]
          }
          delete: {
            args: Prisma.DaySummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySummaryPayload>
          }
          update: {
            args: Prisma.DaySummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySummaryPayload>
          }
          deleteMany: {
            args: Prisma.DaySummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DaySummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DaySummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySummaryPayload>[]
          }
          upsert: {
            args: Prisma.DaySummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DaySummaryPayload>
          }
          aggregate: {
            args: Prisma.DaySummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDaySummary>
          }
          groupBy: {
            args: Prisma.DaySummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DaySummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DaySummaryCountArgs<ExtArgs>
            result: $Utils.Optional<DaySummaryCountAggregateOutputType> | number
          }
        }
      }
      WeeklyScore: {
        payload: Prisma.$WeeklyScorePayload<ExtArgs>
        fields: Prisma.WeeklyScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          findFirst: {
            args: Prisma.WeeklyScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          findMany: {
            args: Prisma.WeeklyScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>[]
          }
          create: {
            args: Prisma.WeeklyScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          createMany: {
            args: Prisma.WeeklyScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>[]
          }
          delete: {
            args: Prisma.WeeklyScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          update: {
            args: Prisma.WeeklyScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          deleteMany: {
            args: Prisma.WeeklyScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklyScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>[]
          }
          upsert: {
            args: Prisma.WeeklyScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          aggregate: {
            args: Prisma.WeeklyScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyScore>
          }
          groupBy: {
            args: Prisma.WeeklyScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyScoreCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyScoreCountAggregateOutputType> | number
          }
        }
      }
      ActivityEvent: {
        payload: Prisma.$ActivityEventPayload<ExtArgs>
        fields: Prisma.ActivityEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityEventPayload>
          }
          findFirst: {
            args: Prisma.ActivityEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityEventPayload>
          }
          findMany: {
            args: Prisma.ActivityEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityEventPayload>[]
          }
          create: {
            args: Prisma.ActivityEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityEventPayload>
          }
          createMany: {
            args: Prisma.ActivityEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityEventPayload>[]
          }
          delete: {
            args: Prisma.ActivityEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityEventPayload>
          }
          update: {
            args: Prisma.ActivityEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityEventPayload>
          }
          deleteMany: {
            args: Prisma.ActivityEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityEventPayload>[]
          }
          upsert: {
            args: Prisma.ActivityEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityEventPayload>
          }
          aggregate: {
            args: Prisma.ActivityEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityEvent>
          }
          groupBy: {
            args: Prisma.ActivityEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityEventCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityEventCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    challenge?: ChallengeOmit
    challengeMember?: ChallengeMemberOmit
    challengeTask?: ChallengeTaskOmit
    taskTier?: TaskTierOmit
    taskLog?: TaskLogOmit
    daySummary?: DaySummaryOmit
    weeklyScore?: WeeklyScoreOmit
    activityEvent?: ActivityEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    memberships: number
    taskLogs: number
    daySummaries: number
    weeklyScores: number
    activity: number
    ownedChallenges: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    taskLogs?: boolean | UserCountOutputTypeCountTaskLogsArgs
    daySummaries?: boolean | UserCountOutputTypeCountDaySummariesArgs
    weeklyScores?: boolean | UserCountOutputTypeCountWeeklyScoresArgs
    activity?: boolean | UserCountOutputTypeCountActivityArgs
    ownedChallenges?: boolean | UserCountOutputTypeCountOwnedChallengesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDaySummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DaySummaryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeeklyScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyScoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
  }


  /**
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    members: number
    tasks: number
    taskLogs: number
    daySummaries: number
    weeklyScores: number
    activity: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ChallengeCountOutputTypeCountMembersArgs
    tasks?: boolean | ChallengeCountOutputTypeCountTasksArgs
    taskLogs?: boolean | ChallengeCountOutputTypeCountTaskLogsArgs
    daySummaries?: boolean | ChallengeCountOutputTypeCountDaySummariesArgs
    weeklyScores?: boolean | ChallengeCountOutputTypeCountWeeklyScoresArgs
    activity?: boolean | ChallengeCountOutputTypeCountActivityArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeMemberWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeTaskWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountTaskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountDaySummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DaySummaryWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountWeeklyScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyScoreWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityEventWhereInput
  }


  /**
   * Count Type ChallengeTaskCountOutputType
   */

  export type ChallengeTaskCountOutputType = {
    tiers: number
    logs: number
  }

  export type ChallengeTaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiers?: boolean | ChallengeTaskCountOutputTypeCountTiersArgs
    logs?: boolean | ChallengeTaskCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * ChallengeTaskCountOutputType without action
   */
  export type ChallengeTaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTaskCountOutputType
     */
    select?: ChallengeTaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeTaskCountOutputType without action
   */
  export type ChallengeTaskCountOutputTypeCountTiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTierWhereInput
  }

  /**
   * ChallengeTaskCountOutputType without action
   */
  export type ChallengeTaskCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    totalPoints: number | null
    currentStreak: number | null
    longestStreak: number | null
    streakTokens: number | null
  }

  export type UserSumAggregateOutputType = {
    totalPoints: number | null
    currentStreak: number | null
    longestStreak: number | null
    streakTokens: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    displayName: string | null
    totalPoints: number | null
    currentStreak: number | null
    longestStreak: number | null
    mantra: string | null
    streakTokens: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    displayName: string | null
    totalPoints: number | null
    currentStreak: number | null
    longestStreak: number | null
    mantra: string | null
    streakTokens: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    displayName: number
    totalPoints: number
    currentStreak: number
    longestStreak: number
    mantra: number
    streakTokens: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    totalPoints?: true
    currentStreak?: true
    longestStreak?: true
    streakTokens?: true
  }

  export type UserSumAggregateInputType = {
    totalPoints?: true
    currentStreak?: true
    longestStreak?: true
    streakTokens?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    displayName?: true
    totalPoints?: true
    currentStreak?: true
    longestStreak?: true
    mantra?: true
    streakTokens?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    displayName?: true
    totalPoints?: true
    currentStreak?: true
    longestStreak?: true
    mantra?: true
    streakTokens?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    displayName?: true
    totalPoints?: true
    currentStreak?: true
    longestStreak?: true
    mantra?: true
    streakTokens?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    displayName: string | null
    totalPoints: number
    currentStreak: number
    longestStreak: number
    mantra: string | null
    streakTokens: number
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    displayName?: boolean
    totalPoints?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    mantra?: boolean
    streakTokens?: boolean
    createdAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    taskLogs?: boolean | User$taskLogsArgs<ExtArgs>
    daySummaries?: boolean | User$daySummariesArgs<ExtArgs>
    weeklyScores?: boolean | User$weeklyScoresArgs<ExtArgs>
    activity?: boolean | User$activityArgs<ExtArgs>
    ownedChallenges?: boolean | User$ownedChallengesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    displayName?: boolean
    totalPoints?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    mantra?: boolean
    streakTokens?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    displayName?: boolean
    totalPoints?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    mantra?: boolean
    streakTokens?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    displayName?: boolean
    totalPoints?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    mantra?: boolean
    streakTokens?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "displayName" | "totalPoints" | "currentStreak" | "longestStreak" | "mantra" | "streakTokens" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    taskLogs?: boolean | User$taskLogsArgs<ExtArgs>
    daySummaries?: boolean | User$daySummariesArgs<ExtArgs>
    weeklyScores?: boolean | User$weeklyScoresArgs<ExtArgs>
    activity?: boolean | User$activityArgs<ExtArgs>
    ownedChallenges?: boolean | User$ownedChallengesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      memberships: Prisma.$ChallengeMemberPayload<ExtArgs>[]
      taskLogs: Prisma.$TaskLogPayload<ExtArgs>[]
      daySummaries: Prisma.$DaySummaryPayload<ExtArgs>[]
      weeklyScores: Prisma.$WeeklyScorePayload<ExtArgs>[]
      activity: Prisma.$ActivityEventPayload<ExtArgs>[]
      ownedChallenges: Prisma.$ChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      displayName: string | null
      totalPoints: number
      currentStreak: number
      longestStreak: number
      mantra: string | null
      streakTokens: number
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskLogs<T extends User$taskLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$taskLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    daySummaries<T extends User$daySummariesArgs<ExtArgs> = {}>(args?: Subset<T, User$daySummariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weeklyScores<T extends User$weeklyScoresArgs<ExtArgs> = {}>(args?: Subset<T, User$weeklyScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activity<T extends User$activityArgs<ExtArgs> = {}>(args?: Subset<T, User$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedChallenges<T extends User$ownedChallengesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly totalPoints: FieldRef<"User", 'Int'>
    readonly currentStreak: FieldRef<"User", 'Int'>
    readonly longestStreak: FieldRef<"User", 'Int'>
    readonly mantra: FieldRef<"User", 'String'>
    readonly streakTokens: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
    where?: ChallengeMemberWhereInput
    orderBy?: ChallengeMemberOrderByWithRelationInput | ChallengeMemberOrderByWithRelationInput[]
    cursor?: ChallengeMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeMemberScalarFieldEnum | ChallengeMemberScalarFieldEnum[]
  }

  /**
   * User.taskLogs
   */
  export type User$taskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    cursor?: TaskLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * User.daySummaries
   */
  export type User$daySummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
    where?: DaySummaryWhereInput
    orderBy?: DaySummaryOrderByWithRelationInput | DaySummaryOrderByWithRelationInput[]
    cursor?: DaySummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DaySummaryScalarFieldEnum | DaySummaryScalarFieldEnum[]
  }

  /**
   * User.weeklyScores
   */
  export type User$weeklyScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    where?: WeeklyScoreWhereInput
    orderBy?: WeeklyScoreOrderByWithRelationInput | WeeklyScoreOrderByWithRelationInput[]
    cursor?: WeeklyScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyScoreScalarFieldEnum | WeeklyScoreScalarFieldEnum[]
  }

  /**
   * User.activity
   */
  export type User$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
    where?: ActivityEventWhereInput
    orderBy?: ActivityEventOrderByWithRelationInput | ActivityEventOrderByWithRelationInput[]
    cursor?: ActivityEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityEventScalarFieldEnum | ActivityEventScalarFieldEnum[]
  }

  /**
   * User.ownedChallenges
   */
  export type User$ownedChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    cursor?: ChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    maxMembers: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    maxMembers: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    isPublic: boolean | null
    inviteCode: string | null
    maxMembers: number | null
    isActive: boolean | null
    ended: boolean | null
    adminId: string | null
    createdAt: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    isPublic: boolean | null
    inviteCode: string | null
    maxMembers: number | null
    isActive: boolean | null
    ended: boolean | null
    adminId: string | null
    createdAt: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    endDate: number
    isPublic: number
    inviteCode: number
    maxMembers: number
    isActive: number
    ended: number
    adminId: number
    createdAt: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    maxMembers?: true
  }

  export type ChallengeSumAggregateInputType = {
    maxMembers?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isPublic?: true
    inviteCode?: true
    maxMembers?: true
    isActive?: true
    ended?: true
    adminId?: true
    createdAt?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isPublic?: true
    inviteCode?: true
    maxMembers?: true
    isActive?: true
    ended?: true
    adminId?: true
    createdAt?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isPublic?: true
    inviteCode?: true
    maxMembers?: true
    isActive?: true
    ended?: true
    adminId?: true
    createdAt?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: string
    name: string
    description: string
    startDate: Date
    endDate: Date
    isPublic: boolean
    inviteCode: string
    maxMembers: number | null
    isActive: boolean
    ended: boolean
    adminId: string
    createdAt: Date
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isPublic?: boolean
    inviteCode?: boolean
    maxMembers?: boolean
    isActive?: boolean
    ended?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Challenge$membersArgs<ExtArgs>
    tasks?: boolean | Challenge$tasksArgs<ExtArgs>
    taskLogs?: boolean | Challenge$taskLogsArgs<ExtArgs>
    daySummaries?: boolean | Challenge$daySummariesArgs<ExtArgs>
    weeklyScores?: boolean | Challenge$weeklyScoresArgs<ExtArgs>
    activity?: boolean | Challenge$activityArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isPublic?: boolean
    inviteCode?: boolean
    maxMembers?: boolean
    isActive?: boolean
    ended?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isPublic?: boolean
    inviteCode?: boolean
    maxMembers?: boolean
    isActive?: boolean
    ended?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isPublic?: boolean
    inviteCode?: boolean
    maxMembers?: boolean
    isActive?: boolean
    ended?: boolean
    adminId?: boolean
    createdAt?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "endDate" | "isPublic" | "inviteCode" | "maxMembers" | "isActive" | "ended" | "adminId" | "createdAt", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Challenge$membersArgs<ExtArgs>
    tasks?: boolean | Challenge$tasksArgs<ExtArgs>
    taskLogs?: boolean | Challenge$taskLogsArgs<ExtArgs>
    daySummaries?: boolean | Challenge$daySummariesArgs<ExtArgs>
    weeklyScores?: boolean | Challenge$weeklyScoresArgs<ExtArgs>
    activity?: boolean | Challenge$activityArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$ChallengeMemberPayload<ExtArgs>[]
      tasks: Prisma.$ChallengeTaskPayload<ExtArgs>[]
      taskLogs: Prisma.$TaskLogPayload<ExtArgs>[]
      daySummaries: Prisma.$DaySummaryPayload<ExtArgs>[]
      weeklyScores: Prisma.$WeeklyScorePayload<ExtArgs>[]
      activity: Prisma.$ActivityEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      startDate: Date
      endDate: Date
      isPublic: boolean
      inviteCode: string
      maxMembers: number | null
      isActive: boolean
      ended: boolean
      adminId: string
      createdAt: Date
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {ChallengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {ChallengeUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
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
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Challenge$membersArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Challenge$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskLogs<T extends Challenge$taskLogsArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$taskLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    daySummaries<T extends Challenge$daySummariesArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$daySummariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weeklyScores<T extends Challenge$weeklyScoresArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$weeklyScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activity<T extends Challenge$activityArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'String'>
    readonly name: FieldRef<"Challenge", 'String'>
    readonly description: FieldRef<"Challenge", 'String'>
    readonly startDate: FieldRef<"Challenge", 'DateTime'>
    readonly endDate: FieldRef<"Challenge", 'DateTime'>
    readonly isPublic: FieldRef<"Challenge", 'Boolean'>
    readonly inviteCode: FieldRef<"Challenge", 'String'>
    readonly maxMembers: FieldRef<"Challenge", 'Int'>
    readonly isActive: FieldRef<"Challenge", 'Boolean'>
    readonly ended: FieldRef<"Challenge", 'Boolean'>
    readonly adminId: FieldRef<"Challenge", 'String'>
    readonly createdAt: FieldRef<"Challenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge createManyAndReturn
   */
  export type ChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge updateManyAndReturn
   */
  export type ChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge.members
   */
  export type Challenge$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
    where?: ChallengeMemberWhereInput
    orderBy?: ChallengeMemberOrderByWithRelationInput | ChallengeMemberOrderByWithRelationInput[]
    cursor?: ChallengeMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeMemberScalarFieldEnum | ChallengeMemberScalarFieldEnum[]
  }

  /**
   * Challenge.tasks
   */
  export type Challenge$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskInclude<ExtArgs> | null
    where?: ChallengeTaskWhereInput
    orderBy?: ChallengeTaskOrderByWithRelationInput | ChallengeTaskOrderByWithRelationInput[]
    cursor?: ChallengeTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeTaskScalarFieldEnum | ChallengeTaskScalarFieldEnum[]
  }

  /**
   * Challenge.taskLogs
   */
  export type Challenge$taskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    cursor?: TaskLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * Challenge.daySummaries
   */
  export type Challenge$daySummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
    where?: DaySummaryWhereInput
    orderBy?: DaySummaryOrderByWithRelationInput | DaySummaryOrderByWithRelationInput[]
    cursor?: DaySummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DaySummaryScalarFieldEnum | DaySummaryScalarFieldEnum[]
  }

  /**
   * Challenge.weeklyScores
   */
  export type Challenge$weeklyScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    where?: WeeklyScoreWhereInput
    orderBy?: WeeklyScoreOrderByWithRelationInput | WeeklyScoreOrderByWithRelationInput[]
    cursor?: WeeklyScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyScoreScalarFieldEnum | WeeklyScoreScalarFieldEnum[]
  }

  /**
   * Challenge.activity
   */
  export type Challenge$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
    where?: ActivityEventWhereInput
    orderBy?: ActivityEventOrderByWithRelationInput | ActivityEventOrderByWithRelationInput[]
    cursor?: ActivityEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityEventScalarFieldEnum | ActivityEventScalarFieldEnum[]
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model ChallengeMember
   */

  export type AggregateChallengeMember = {
    _count: ChallengeMemberCountAggregateOutputType | null
    _avg: ChallengeMemberAvgAggregateOutputType | null
    _sum: ChallengeMemberSumAggregateOutputType | null
    _min: ChallengeMemberMinAggregateOutputType | null
    _max: ChallengeMemberMaxAggregateOutputType | null
  }

  export type ChallengeMemberAvgAggregateOutputType = {
    points: number | null
    currentStreak: number | null
    longestStreak: number | null
  }

  export type ChallengeMemberSumAggregateOutputType = {
    points: number | null
    currentStreak: number | null
    longestStreak: number | null
  }

  export type ChallengeMemberMinAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    joinedAt: Date | null
    points: number | null
    currentStreak: number | null
    longestStreak: number | null
    isAlcoholDrinker: boolean | null
  }

  export type ChallengeMemberMaxAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    joinedAt: Date | null
    points: number | null
    currentStreak: number | null
    longestStreak: number | null
    isAlcoholDrinker: boolean | null
  }

  export type ChallengeMemberCountAggregateOutputType = {
    id: number
    challengeId: number
    userId: number
    joinedAt: number
    points: number
    currentStreak: number
    longestStreak: number
    isAlcoholDrinker: number
    _all: number
  }


  export type ChallengeMemberAvgAggregateInputType = {
    points?: true
    currentStreak?: true
    longestStreak?: true
  }

  export type ChallengeMemberSumAggregateInputType = {
    points?: true
    currentStreak?: true
    longestStreak?: true
  }

  export type ChallengeMemberMinAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    joinedAt?: true
    points?: true
    currentStreak?: true
    longestStreak?: true
    isAlcoholDrinker?: true
  }

  export type ChallengeMemberMaxAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    joinedAt?: true
    points?: true
    currentStreak?: true
    longestStreak?: true
    isAlcoholDrinker?: true
  }

  export type ChallengeMemberCountAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    joinedAt?: true
    points?: true
    currentStreak?: true
    longestStreak?: true
    isAlcoholDrinker?: true
    _all?: true
  }

  export type ChallengeMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeMember to aggregate.
     */
    where?: ChallengeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeMembers to fetch.
     */
    orderBy?: ChallengeMemberOrderByWithRelationInput | ChallengeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeMembers
    **/
    _count?: true | ChallengeMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMemberMaxAggregateInputType
  }

  export type GetChallengeMemberAggregateType<T extends ChallengeMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeMember[P]>
      : GetScalarType<T[P], AggregateChallengeMember[P]>
  }




  export type ChallengeMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeMemberWhereInput
    orderBy?: ChallengeMemberOrderByWithAggregationInput | ChallengeMemberOrderByWithAggregationInput[]
    by: ChallengeMemberScalarFieldEnum[] | ChallengeMemberScalarFieldEnum
    having?: ChallengeMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeMemberCountAggregateInputType | true
    _avg?: ChallengeMemberAvgAggregateInputType
    _sum?: ChallengeMemberSumAggregateInputType
    _min?: ChallengeMemberMinAggregateInputType
    _max?: ChallengeMemberMaxAggregateInputType
  }

  export type ChallengeMemberGroupByOutputType = {
    id: string
    challengeId: string
    userId: string
    joinedAt: Date
    points: number
    currentStreak: number
    longestStreak: number
    isAlcoholDrinker: boolean
    _count: ChallengeMemberCountAggregateOutputType | null
    _avg: ChallengeMemberAvgAggregateOutputType | null
    _sum: ChallengeMemberSumAggregateOutputType | null
    _min: ChallengeMemberMinAggregateOutputType | null
    _max: ChallengeMemberMaxAggregateOutputType | null
  }

  type GetChallengeMemberGroupByPayload<T extends ChallengeMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeMemberGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    joinedAt?: boolean
    points?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    isAlcoholDrinker?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeMember"]>

  export type ChallengeMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    joinedAt?: boolean
    points?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    isAlcoholDrinker?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeMember"]>

  export type ChallengeMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    joinedAt?: boolean
    points?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    isAlcoholDrinker?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeMember"]>

  export type ChallengeMemberSelectScalar = {
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    joinedAt?: boolean
    points?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    isAlcoholDrinker?: boolean
  }

  export type ChallengeMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeId" | "userId" | "joinedAt" | "points" | "currentStreak" | "longestStreak" | "isAlcoholDrinker", ExtArgs["result"]["challengeMember"]>
  export type ChallengeMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChallengeMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChallengeMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChallengeMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallengeMember"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challengeId: string
      userId: string
      joinedAt: Date
      points: number
      currentStreak: number
      longestStreak: number
      isAlcoholDrinker: boolean
    }, ExtArgs["result"]["challengeMember"]>
    composites: {}
  }

  type ChallengeMemberGetPayload<S extends boolean | null | undefined | ChallengeMemberDefaultArgs> = $Result.GetResult<Prisma.$ChallengeMemberPayload, S>

  type ChallengeMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeMemberCountAggregateInputType | true
    }

  export interface ChallengeMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeMember'], meta: { name: 'ChallengeMember' } }
    /**
     * Find zero or one ChallengeMember that matches the filter.
     * @param {ChallengeMemberFindUniqueArgs} args - Arguments to find a ChallengeMember
     * @example
     * // Get one ChallengeMember
     * const challengeMember = await prisma.challengeMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeMemberFindUniqueArgs>(args: SelectSubset<T, ChallengeMemberFindUniqueArgs<ExtArgs>>): Prisma__ChallengeMemberClient<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChallengeMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeMemberFindUniqueOrThrowArgs} args - Arguments to find a ChallengeMember
     * @example
     * // Get one ChallengeMember
     * const challengeMember = await prisma.challengeMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeMemberClient<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeMemberFindFirstArgs} args - Arguments to find a ChallengeMember
     * @example
     * // Get one ChallengeMember
     * const challengeMember = await prisma.challengeMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeMemberFindFirstArgs>(args?: SelectSubset<T, ChallengeMemberFindFirstArgs<ExtArgs>>): Prisma__ChallengeMemberClient<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeMemberFindFirstOrThrowArgs} args - Arguments to find a ChallengeMember
     * @example
     * // Get one ChallengeMember
     * const challengeMember = await prisma.challengeMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeMemberClient<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChallengeMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeMembers
     * const challengeMembers = await prisma.challengeMember.findMany()
     * 
     * // Get first 10 ChallengeMembers
     * const challengeMembers = await prisma.challengeMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeMemberWithIdOnly = await prisma.challengeMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeMemberFindManyArgs>(args?: SelectSubset<T, ChallengeMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChallengeMember.
     * @param {ChallengeMemberCreateArgs} args - Arguments to create a ChallengeMember.
     * @example
     * // Create one ChallengeMember
     * const ChallengeMember = await prisma.challengeMember.create({
     *   data: {
     *     // ... data to create a ChallengeMember
     *   }
     * })
     * 
     */
    create<T extends ChallengeMemberCreateArgs>(args: SelectSubset<T, ChallengeMemberCreateArgs<ExtArgs>>): Prisma__ChallengeMemberClient<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChallengeMembers.
     * @param {ChallengeMemberCreateManyArgs} args - Arguments to create many ChallengeMembers.
     * @example
     * // Create many ChallengeMembers
     * const challengeMember = await prisma.challengeMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeMemberCreateManyArgs>(args?: SelectSubset<T, ChallengeMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChallengeMembers and returns the data saved in the database.
     * @param {ChallengeMemberCreateManyAndReturnArgs} args - Arguments to create many ChallengeMembers.
     * @example
     * // Create many ChallengeMembers
     * const challengeMember = await prisma.challengeMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChallengeMembers and only return the `id`
     * const challengeMemberWithIdOnly = await prisma.challengeMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChallengeMember.
     * @param {ChallengeMemberDeleteArgs} args - Arguments to delete one ChallengeMember.
     * @example
     * // Delete one ChallengeMember
     * const ChallengeMember = await prisma.challengeMember.delete({
     *   where: {
     *     // ... filter to delete one ChallengeMember
     *   }
     * })
     * 
     */
    delete<T extends ChallengeMemberDeleteArgs>(args: SelectSubset<T, ChallengeMemberDeleteArgs<ExtArgs>>): Prisma__ChallengeMemberClient<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChallengeMember.
     * @param {ChallengeMemberUpdateArgs} args - Arguments to update one ChallengeMember.
     * @example
     * // Update one ChallengeMember
     * const challengeMember = await prisma.challengeMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeMemberUpdateArgs>(args: SelectSubset<T, ChallengeMemberUpdateArgs<ExtArgs>>): Prisma__ChallengeMemberClient<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChallengeMembers.
     * @param {ChallengeMemberDeleteManyArgs} args - Arguments to filter ChallengeMembers to delete.
     * @example
     * // Delete a few ChallengeMembers
     * const { count } = await prisma.challengeMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeMemberDeleteManyArgs>(args?: SelectSubset<T, ChallengeMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeMembers
     * const challengeMember = await prisma.challengeMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeMemberUpdateManyArgs>(args: SelectSubset<T, ChallengeMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeMembers and returns the data updated in the database.
     * @param {ChallengeMemberUpdateManyAndReturnArgs} args - Arguments to update many ChallengeMembers.
     * @example
     * // Update many ChallengeMembers
     * const challengeMember = await prisma.challengeMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChallengeMembers and only return the `id`
     * const challengeMemberWithIdOnly = await prisma.challengeMember.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ChallengeMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChallengeMember.
     * @param {ChallengeMemberUpsertArgs} args - Arguments to update or create a ChallengeMember.
     * @example
     * // Update or create a ChallengeMember
     * const challengeMember = await prisma.challengeMember.upsert({
     *   create: {
     *     // ... data to create a ChallengeMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeMember we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeMemberUpsertArgs>(args: SelectSubset<T, ChallengeMemberUpsertArgs<ExtArgs>>): Prisma__ChallengeMemberClient<$Result.GetResult<Prisma.$ChallengeMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChallengeMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeMemberCountArgs} args - Arguments to filter ChallengeMembers to count.
     * @example
     * // Count the number of ChallengeMembers
     * const count = await prisma.challengeMember.count({
     *   where: {
     *     // ... the filter for the ChallengeMembers we want to count
     *   }
     * })
    **/
    count<T extends ChallengeMemberCountArgs>(
      args?: Subset<T, ChallengeMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeMemberAggregateArgs>(args: Subset<T, ChallengeMemberAggregateArgs>): Prisma.PrismaPromise<GetChallengeMemberAggregateType<T>>

    /**
     * Group by ChallengeMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeMemberGroupByArgs} args - Group by arguments.
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
      T extends ChallengeMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeMemberGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengeMember model
   */
  readonly fields: ChallengeMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChallengeMember model
   */
  interface ChallengeMemberFieldRefs {
    readonly id: FieldRef<"ChallengeMember", 'String'>
    readonly challengeId: FieldRef<"ChallengeMember", 'String'>
    readonly userId: FieldRef<"ChallengeMember", 'String'>
    readonly joinedAt: FieldRef<"ChallengeMember", 'DateTime'>
    readonly points: FieldRef<"ChallengeMember", 'Int'>
    readonly currentStreak: FieldRef<"ChallengeMember", 'Int'>
    readonly longestStreak: FieldRef<"ChallengeMember", 'Int'>
    readonly isAlcoholDrinker: FieldRef<"ChallengeMember", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ChallengeMember findUnique
   */
  export type ChallengeMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeMember to fetch.
     */
    where: ChallengeMemberWhereUniqueInput
  }

  /**
   * ChallengeMember findUniqueOrThrow
   */
  export type ChallengeMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeMember to fetch.
     */
    where: ChallengeMemberWhereUniqueInput
  }

  /**
   * ChallengeMember findFirst
   */
  export type ChallengeMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeMember to fetch.
     */
    where?: ChallengeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeMembers to fetch.
     */
    orderBy?: ChallengeMemberOrderByWithRelationInput | ChallengeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeMembers.
     */
    cursor?: ChallengeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeMembers.
     */
    distinct?: ChallengeMemberScalarFieldEnum | ChallengeMemberScalarFieldEnum[]
  }

  /**
   * ChallengeMember findFirstOrThrow
   */
  export type ChallengeMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeMember to fetch.
     */
    where?: ChallengeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeMembers to fetch.
     */
    orderBy?: ChallengeMemberOrderByWithRelationInput | ChallengeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeMembers.
     */
    cursor?: ChallengeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeMembers.
     */
    distinct?: ChallengeMemberScalarFieldEnum | ChallengeMemberScalarFieldEnum[]
  }

  /**
   * ChallengeMember findMany
   */
  export type ChallengeMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeMembers to fetch.
     */
    where?: ChallengeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeMembers to fetch.
     */
    orderBy?: ChallengeMemberOrderByWithRelationInput | ChallengeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeMembers.
     */
    cursor?: ChallengeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeMembers.
     */
    skip?: number
    distinct?: ChallengeMemberScalarFieldEnum | ChallengeMemberScalarFieldEnum[]
  }

  /**
   * ChallengeMember create
   */
  export type ChallengeMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallengeMember.
     */
    data: XOR<ChallengeMemberCreateInput, ChallengeMemberUncheckedCreateInput>
  }

  /**
   * ChallengeMember createMany
   */
  export type ChallengeMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeMembers.
     */
    data: ChallengeMemberCreateManyInput | ChallengeMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChallengeMember createManyAndReturn
   */
  export type ChallengeMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ChallengeMembers.
     */
    data: ChallengeMemberCreateManyInput | ChallengeMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeMember update
   */
  export type ChallengeMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallengeMember.
     */
    data: XOR<ChallengeMemberUpdateInput, ChallengeMemberUncheckedUpdateInput>
    /**
     * Choose, which ChallengeMember to update.
     */
    where: ChallengeMemberWhereUniqueInput
  }

  /**
   * ChallengeMember updateMany
   */
  export type ChallengeMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeMembers.
     */
    data: XOR<ChallengeMemberUpdateManyMutationInput, ChallengeMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeMembers to update
     */
    where?: ChallengeMemberWhereInput
    /**
     * Limit how many ChallengeMembers to update.
     */
    limit?: number
  }

  /**
   * ChallengeMember updateManyAndReturn
   */
  export type ChallengeMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * The data used to update ChallengeMembers.
     */
    data: XOR<ChallengeMemberUpdateManyMutationInput, ChallengeMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeMembers to update
     */
    where?: ChallengeMemberWhereInput
    /**
     * Limit how many ChallengeMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeMember upsert
   */
  export type ChallengeMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallengeMember to update in case it exists.
     */
    where: ChallengeMemberWhereUniqueInput
    /**
     * In case the ChallengeMember found by the `where` argument doesn't exist, create a new ChallengeMember with this data.
     */
    create: XOR<ChallengeMemberCreateInput, ChallengeMemberUncheckedCreateInput>
    /**
     * In case the ChallengeMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeMemberUpdateInput, ChallengeMemberUncheckedUpdateInput>
  }

  /**
   * ChallengeMember delete
   */
  export type ChallengeMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
    /**
     * Filter which ChallengeMember to delete.
     */
    where: ChallengeMemberWhereUniqueInput
  }

  /**
   * ChallengeMember deleteMany
   */
  export type ChallengeMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeMembers to delete
     */
    where?: ChallengeMemberWhereInput
    /**
     * Limit how many ChallengeMembers to delete.
     */
    limit?: number
  }

  /**
   * ChallengeMember without action
   */
  export type ChallengeMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeMember
     */
    select?: ChallengeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeMember
     */
    omit?: ChallengeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeMemberInclude<ExtArgs> | null
  }


  /**
   * Model ChallengeTask
   */

  export type AggregateChallengeTask = {
    _count: ChallengeTaskCountAggregateOutputType | null
    _avg: ChallengeTaskAvgAggregateOutputType | null
    _sum: ChallengeTaskSumAggregateOutputType | null
    _min: ChallengeTaskMinAggregateOutputType | null
    _max: ChallengeTaskMaxAggregateOutputType | null
  }

  export type ChallengeTaskAvgAggregateOutputType = {
    points: number | null
    target: number | null
  }

  export type ChallengeTaskSumAggregateOutputType = {
    points: number | null
    target: number | null
  }

  export type ChallengeTaskMinAggregateOutputType = {
    id: string | null
    challengeId: string | null
    name: string | null
    type: string | null
    inputType: string | null
    isRuleBreaker: boolean | null
    isAlcoholTask: boolean | null
    points: number | null
    target: number | null
  }

  export type ChallengeTaskMaxAggregateOutputType = {
    id: string | null
    challengeId: string | null
    name: string | null
    type: string | null
    inputType: string | null
    isRuleBreaker: boolean | null
    isAlcoholTask: boolean | null
    points: number | null
    target: number | null
  }

  export type ChallengeTaskCountAggregateOutputType = {
    id: number
    challengeId: number
    name: number
    type: number
    inputType: number
    isRuleBreaker: number
    isAlcoholTask: number
    points: number
    target: number
    _all: number
  }


  export type ChallengeTaskAvgAggregateInputType = {
    points?: true
    target?: true
  }

  export type ChallengeTaskSumAggregateInputType = {
    points?: true
    target?: true
  }

  export type ChallengeTaskMinAggregateInputType = {
    id?: true
    challengeId?: true
    name?: true
    type?: true
    inputType?: true
    isRuleBreaker?: true
    isAlcoholTask?: true
    points?: true
    target?: true
  }

  export type ChallengeTaskMaxAggregateInputType = {
    id?: true
    challengeId?: true
    name?: true
    type?: true
    inputType?: true
    isRuleBreaker?: true
    isAlcoholTask?: true
    points?: true
    target?: true
  }

  export type ChallengeTaskCountAggregateInputType = {
    id?: true
    challengeId?: true
    name?: true
    type?: true
    inputType?: true
    isRuleBreaker?: true
    isAlcoholTask?: true
    points?: true
    target?: true
    _all?: true
  }

  export type ChallengeTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeTask to aggregate.
     */
    where?: ChallengeTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeTasks to fetch.
     */
    orderBy?: ChallengeTaskOrderByWithRelationInput | ChallengeTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeTasks
    **/
    _count?: true | ChallengeTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeTaskMaxAggregateInputType
  }

  export type GetChallengeTaskAggregateType<T extends ChallengeTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeTask[P]>
      : GetScalarType<T[P], AggregateChallengeTask[P]>
  }




  export type ChallengeTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeTaskWhereInput
    orderBy?: ChallengeTaskOrderByWithAggregationInput | ChallengeTaskOrderByWithAggregationInput[]
    by: ChallengeTaskScalarFieldEnum[] | ChallengeTaskScalarFieldEnum
    having?: ChallengeTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeTaskCountAggregateInputType | true
    _avg?: ChallengeTaskAvgAggregateInputType
    _sum?: ChallengeTaskSumAggregateInputType
    _min?: ChallengeTaskMinAggregateInputType
    _max?: ChallengeTaskMaxAggregateInputType
  }

  export type ChallengeTaskGroupByOutputType = {
    id: string
    challengeId: string
    name: string
    type: string
    inputType: string
    isRuleBreaker: boolean
    isAlcoholTask: boolean
    points: number
    target: number | null
    _count: ChallengeTaskCountAggregateOutputType | null
    _avg: ChallengeTaskAvgAggregateOutputType | null
    _sum: ChallengeTaskSumAggregateOutputType | null
    _min: ChallengeTaskMinAggregateOutputType | null
    _max: ChallengeTaskMaxAggregateOutputType | null
  }

  type GetChallengeTaskGroupByPayload<T extends ChallengeTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeTaskGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeTaskGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    name?: boolean
    type?: boolean
    inputType?: boolean
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points?: boolean
    target?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    tiers?: boolean | ChallengeTask$tiersArgs<ExtArgs>
    logs?: boolean | ChallengeTask$logsArgs<ExtArgs>
    _count?: boolean | ChallengeTaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeTask"]>

  export type ChallengeTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    name?: boolean
    type?: boolean
    inputType?: boolean
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points?: boolean
    target?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeTask"]>

  export type ChallengeTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    name?: boolean
    type?: boolean
    inputType?: boolean
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points?: boolean
    target?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeTask"]>

  export type ChallengeTaskSelectScalar = {
    id?: boolean
    challengeId?: boolean
    name?: boolean
    type?: boolean
    inputType?: boolean
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points?: boolean
    target?: boolean
  }

  export type ChallengeTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeId" | "name" | "type" | "inputType" | "isRuleBreaker" | "isAlcoholTask" | "points" | "target", ExtArgs["result"]["challengeTask"]>
  export type ChallengeTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    tiers?: boolean | ChallengeTask$tiersArgs<ExtArgs>
    logs?: boolean | ChallengeTask$logsArgs<ExtArgs>
    _count?: boolean | ChallengeTaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengeTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type ChallengeTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $ChallengeTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallengeTask"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
      tiers: Prisma.$TaskTierPayload<ExtArgs>[]
      logs: Prisma.$TaskLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challengeId: string
      name: string
      type: string
      inputType: string
      isRuleBreaker: boolean
      isAlcoholTask: boolean
      points: number
      target: number | null
    }, ExtArgs["result"]["challengeTask"]>
    composites: {}
  }

  type ChallengeTaskGetPayload<S extends boolean | null | undefined | ChallengeTaskDefaultArgs> = $Result.GetResult<Prisma.$ChallengeTaskPayload, S>

  type ChallengeTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeTaskCountAggregateInputType | true
    }

  export interface ChallengeTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeTask'], meta: { name: 'ChallengeTask' } }
    /**
     * Find zero or one ChallengeTask that matches the filter.
     * @param {ChallengeTaskFindUniqueArgs} args - Arguments to find a ChallengeTask
     * @example
     * // Get one ChallengeTask
     * const challengeTask = await prisma.challengeTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeTaskFindUniqueArgs>(args: SelectSubset<T, ChallengeTaskFindUniqueArgs<ExtArgs>>): Prisma__ChallengeTaskClient<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChallengeTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeTaskFindUniqueOrThrowArgs} args - Arguments to find a ChallengeTask
     * @example
     * // Get one ChallengeTask
     * const challengeTask = await prisma.challengeTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeTaskClient<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeTaskFindFirstArgs} args - Arguments to find a ChallengeTask
     * @example
     * // Get one ChallengeTask
     * const challengeTask = await prisma.challengeTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeTaskFindFirstArgs>(args?: SelectSubset<T, ChallengeTaskFindFirstArgs<ExtArgs>>): Prisma__ChallengeTaskClient<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeTaskFindFirstOrThrowArgs} args - Arguments to find a ChallengeTask
     * @example
     * // Get one ChallengeTask
     * const challengeTask = await prisma.challengeTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeTaskClient<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChallengeTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeTasks
     * const challengeTasks = await prisma.challengeTask.findMany()
     * 
     * // Get first 10 ChallengeTasks
     * const challengeTasks = await prisma.challengeTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeTaskWithIdOnly = await prisma.challengeTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeTaskFindManyArgs>(args?: SelectSubset<T, ChallengeTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChallengeTask.
     * @param {ChallengeTaskCreateArgs} args - Arguments to create a ChallengeTask.
     * @example
     * // Create one ChallengeTask
     * const ChallengeTask = await prisma.challengeTask.create({
     *   data: {
     *     // ... data to create a ChallengeTask
     *   }
     * })
     * 
     */
    create<T extends ChallengeTaskCreateArgs>(args: SelectSubset<T, ChallengeTaskCreateArgs<ExtArgs>>): Prisma__ChallengeTaskClient<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChallengeTasks.
     * @param {ChallengeTaskCreateManyArgs} args - Arguments to create many ChallengeTasks.
     * @example
     * // Create many ChallengeTasks
     * const challengeTask = await prisma.challengeTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeTaskCreateManyArgs>(args?: SelectSubset<T, ChallengeTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChallengeTasks and returns the data saved in the database.
     * @param {ChallengeTaskCreateManyAndReturnArgs} args - Arguments to create many ChallengeTasks.
     * @example
     * // Create many ChallengeTasks
     * const challengeTask = await prisma.challengeTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChallengeTasks and only return the `id`
     * const challengeTaskWithIdOnly = await prisma.challengeTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChallengeTask.
     * @param {ChallengeTaskDeleteArgs} args - Arguments to delete one ChallengeTask.
     * @example
     * // Delete one ChallengeTask
     * const ChallengeTask = await prisma.challengeTask.delete({
     *   where: {
     *     // ... filter to delete one ChallengeTask
     *   }
     * })
     * 
     */
    delete<T extends ChallengeTaskDeleteArgs>(args: SelectSubset<T, ChallengeTaskDeleteArgs<ExtArgs>>): Prisma__ChallengeTaskClient<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChallengeTask.
     * @param {ChallengeTaskUpdateArgs} args - Arguments to update one ChallengeTask.
     * @example
     * // Update one ChallengeTask
     * const challengeTask = await prisma.challengeTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeTaskUpdateArgs>(args: SelectSubset<T, ChallengeTaskUpdateArgs<ExtArgs>>): Prisma__ChallengeTaskClient<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChallengeTasks.
     * @param {ChallengeTaskDeleteManyArgs} args - Arguments to filter ChallengeTasks to delete.
     * @example
     * // Delete a few ChallengeTasks
     * const { count } = await prisma.challengeTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeTaskDeleteManyArgs>(args?: SelectSubset<T, ChallengeTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeTasks
     * const challengeTask = await prisma.challengeTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeTaskUpdateManyArgs>(args: SelectSubset<T, ChallengeTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeTasks and returns the data updated in the database.
     * @param {ChallengeTaskUpdateManyAndReturnArgs} args - Arguments to update many ChallengeTasks.
     * @example
     * // Update many ChallengeTasks
     * const challengeTask = await prisma.challengeTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChallengeTasks and only return the `id`
     * const challengeTaskWithIdOnly = await prisma.challengeTask.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ChallengeTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChallengeTask.
     * @param {ChallengeTaskUpsertArgs} args - Arguments to update or create a ChallengeTask.
     * @example
     * // Update or create a ChallengeTask
     * const challengeTask = await prisma.challengeTask.upsert({
     *   create: {
     *     // ... data to create a ChallengeTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeTask we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeTaskUpsertArgs>(args: SelectSubset<T, ChallengeTaskUpsertArgs<ExtArgs>>): Prisma__ChallengeTaskClient<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChallengeTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeTaskCountArgs} args - Arguments to filter ChallengeTasks to count.
     * @example
     * // Count the number of ChallengeTasks
     * const count = await prisma.challengeTask.count({
     *   where: {
     *     // ... the filter for the ChallengeTasks we want to count
     *   }
     * })
    **/
    count<T extends ChallengeTaskCountArgs>(
      args?: Subset<T, ChallengeTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeTaskAggregateArgs>(args: Subset<T, ChallengeTaskAggregateArgs>): Prisma.PrismaPromise<GetChallengeTaskAggregateType<T>>

    /**
     * Group by ChallengeTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeTaskGroupByArgs} args - Group by arguments.
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
      T extends ChallengeTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeTaskGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengeTask model
   */
  readonly fields: ChallengeTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tiers<T extends ChallengeTask$tiersArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeTask$tiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends ChallengeTask$logsArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeTask$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChallengeTask model
   */
  interface ChallengeTaskFieldRefs {
    readonly id: FieldRef<"ChallengeTask", 'String'>
    readonly challengeId: FieldRef<"ChallengeTask", 'String'>
    readonly name: FieldRef<"ChallengeTask", 'String'>
    readonly type: FieldRef<"ChallengeTask", 'String'>
    readonly inputType: FieldRef<"ChallengeTask", 'String'>
    readonly isRuleBreaker: FieldRef<"ChallengeTask", 'Boolean'>
    readonly isAlcoholTask: FieldRef<"ChallengeTask", 'Boolean'>
    readonly points: FieldRef<"ChallengeTask", 'Int'>
    readonly target: FieldRef<"ChallengeTask", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ChallengeTask findUnique
   */
  export type ChallengeTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeTask to fetch.
     */
    where: ChallengeTaskWhereUniqueInput
  }

  /**
   * ChallengeTask findUniqueOrThrow
   */
  export type ChallengeTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeTask to fetch.
     */
    where: ChallengeTaskWhereUniqueInput
  }

  /**
   * ChallengeTask findFirst
   */
  export type ChallengeTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeTask to fetch.
     */
    where?: ChallengeTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeTasks to fetch.
     */
    orderBy?: ChallengeTaskOrderByWithRelationInput | ChallengeTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeTasks.
     */
    cursor?: ChallengeTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeTasks.
     */
    distinct?: ChallengeTaskScalarFieldEnum | ChallengeTaskScalarFieldEnum[]
  }

  /**
   * ChallengeTask findFirstOrThrow
   */
  export type ChallengeTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeTask to fetch.
     */
    where?: ChallengeTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeTasks to fetch.
     */
    orderBy?: ChallengeTaskOrderByWithRelationInput | ChallengeTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeTasks.
     */
    cursor?: ChallengeTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeTasks.
     */
    distinct?: ChallengeTaskScalarFieldEnum | ChallengeTaskScalarFieldEnum[]
  }

  /**
   * ChallengeTask findMany
   */
  export type ChallengeTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeTasks to fetch.
     */
    where?: ChallengeTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeTasks to fetch.
     */
    orderBy?: ChallengeTaskOrderByWithRelationInput | ChallengeTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeTasks.
     */
    cursor?: ChallengeTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeTasks.
     */
    skip?: number
    distinct?: ChallengeTaskScalarFieldEnum | ChallengeTaskScalarFieldEnum[]
  }

  /**
   * ChallengeTask create
   */
  export type ChallengeTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallengeTask.
     */
    data: XOR<ChallengeTaskCreateInput, ChallengeTaskUncheckedCreateInput>
  }

  /**
   * ChallengeTask createMany
   */
  export type ChallengeTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeTasks.
     */
    data: ChallengeTaskCreateManyInput | ChallengeTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChallengeTask createManyAndReturn
   */
  export type ChallengeTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * The data used to create many ChallengeTasks.
     */
    data: ChallengeTaskCreateManyInput | ChallengeTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeTask update
   */
  export type ChallengeTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallengeTask.
     */
    data: XOR<ChallengeTaskUpdateInput, ChallengeTaskUncheckedUpdateInput>
    /**
     * Choose, which ChallengeTask to update.
     */
    where: ChallengeTaskWhereUniqueInput
  }

  /**
   * ChallengeTask updateMany
   */
  export type ChallengeTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeTasks.
     */
    data: XOR<ChallengeTaskUpdateManyMutationInput, ChallengeTaskUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeTasks to update
     */
    where?: ChallengeTaskWhereInput
    /**
     * Limit how many ChallengeTasks to update.
     */
    limit?: number
  }

  /**
   * ChallengeTask updateManyAndReturn
   */
  export type ChallengeTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * The data used to update ChallengeTasks.
     */
    data: XOR<ChallengeTaskUpdateManyMutationInput, ChallengeTaskUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeTasks to update
     */
    where?: ChallengeTaskWhereInput
    /**
     * Limit how many ChallengeTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeTask upsert
   */
  export type ChallengeTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallengeTask to update in case it exists.
     */
    where: ChallengeTaskWhereUniqueInput
    /**
     * In case the ChallengeTask found by the `where` argument doesn't exist, create a new ChallengeTask with this data.
     */
    create: XOR<ChallengeTaskCreateInput, ChallengeTaskUncheckedCreateInput>
    /**
     * In case the ChallengeTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeTaskUpdateInput, ChallengeTaskUncheckedUpdateInput>
  }

  /**
   * ChallengeTask delete
   */
  export type ChallengeTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskInclude<ExtArgs> | null
    /**
     * Filter which ChallengeTask to delete.
     */
    where: ChallengeTaskWhereUniqueInput
  }

  /**
   * ChallengeTask deleteMany
   */
  export type ChallengeTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeTasks to delete
     */
    where?: ChallengeTaskWhereInput
    /**
     * Limit how many ChallengeTasks to delete.
     */
    limit?: number
  }

  /**
   * ChallengeTask.tiers
   */
  export type ChallengeTask$tiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierInclude<ExtArgs> | null
    where?: TaskTierWhereInput
    orderBy?: TaskTierOrderByWithRelationInput | TaskTierOrderByWithRelationInput[]
    cursor?: TaskTierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskTierScalarFieldEnum | TaskTierScalarFieldEnum[]
  }

  /**
   * ChallengeTask.logs
   */
  export type ChallengeTask$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    cursor?: TaskLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * ChallengeTask without action
   */
  export type ChallengeTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeTask
     */
    select?: ChallengeTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeTask
     */
    omit?: ChallengeTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeTaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskTier
   */

  export type AggregateTaskTier = {
    _count: TaskTierCountAggregateOutputType | null
    _avg: TaskTierAvgAggregateOutputType | null
    _sum: TaskTierSumAggregateOutputType | null
    _min: TaskTierMinAggregateOutputType | null
    _max: TaskTierMaxAggregateOutputType | null
  }

  export type TaskTierAvgAggregateOutputType = {
    threshold: number | null
    points: number | null
  }

  export type TaskTierSumAggregateOutputType = {
    threshold: number | null
    points: number | null
  }

  export type TaskTierMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    threshold: number | null
    points: number | null
  }

  export type TaskTierMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    threshold: number | null
    points: number | null
  }

  export type TaskTierCountAggregateOutputType = {
    id: number
    taskId: number
    threshold: number
    points: number
    _all: number
  }


  export type TaskTierAvgAggregateInputType = {
    threshold?: true
    points?: true
  }

  export type TaskTierSumAggregateInputType = {
    threshold?: true
    points?: true
  }

  export type TaskTierMinAggregateInputType = {
    id?: true
    taskId?: true
    threshold?: true
    points?: true
  }

  export type TaskTierMaxAggregateInputType = {
    id?: true
    taskId?: true
    threshold?: true
    points?: true
  }

  export type TaskTierCountAggregateInputType = {
    id?: true
    taskId?: true
    threshold?: true
    points?: true
    _all?: true
  }

  export type TaskTierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTier to aggregate.
     */
    where?: TaskTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTiers to fetch.
     */
    orderBy?: TaskTierOrderByWithRelationInput | TaskTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskTiers
    **/
    _count?: true | TaskTierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskTierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskTierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskTierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskTierMaxAggregateInputType
  }

  export type GetTaskTierAggregateType<T extends TaskTierAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskTier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskTier[P]>
      : GetScalarType<T[P], AggregateTaskTier[P]>
  }




  export type TaskTierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTierWhereInput
    orderBy?: TaskTierOrderByWithAggregationInput | TaskTierOrderByWithAggregationInput[]
    by: TaskTierScalarFieldEnum[] | TaskTierScalarFieldEnum
    having?: TaskTierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskTierCountAggregateInputType | true
    _avg?: TaskTierAvgAggregateInputType
    _sum?: TaskTierSumAggregateInputType
    _min?: TaskTierMinAggregateInputType
    _max?: TaskTierMaxAggregateInputType
  }

  export type TaskTierGroupByOutputType = {
    id: string
    taskId: string
    threshold: number
    points: number
    _count: TaskTierCountAggregateOutputType | null
    _avg: TaskTierAvgAggregateOutputType | null
    _sum: TaskTierSumAggregateOutputType | null
    _min: TaskTierMinAggregateOutputType | null
    _max: TaskTierMaxAggregateOutputType | null
  }

  type GetTaskTierGroupByPayload<T extends TaskTierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskTierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskTierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskTierGroupByOutputType[P]>
            : GetScalarType<T[P], TaskTierGroupByOutputType[P]>
        }
      >
    >


  export type TaskTierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    threshold?: boolean
    points?: boolean
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTier"]>

  export type TaskTierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    threshold?: boolean
    points?: boolean
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTier"]>

  export type TaskTierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    threshold?: boolean
    points?: boolean
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTier"]>

  export type TaskTierSelectScalar = {
    id?: boolean
    taskId?: boolean
    threshold?: boolean
    points?: boolean
  }

  export type TaskTierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "threshold" | "points", ExtArgs["result"]["taskTier"]>
  export type TaskTierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }
  export type TaskTierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }
  export type TaskTierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }

  export type $TaskTierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskTier"
    objects: {
      task: Prisma.$ChallengeTaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      threshold: number
      points: number
    }, ExtArgs["result"]["taskTier"]>
    composites: {}
  }

  type TaskTierGetPayload<S extends boolean | null | undefined | TaskTierDefaultArgs> = $Result.GetResult<Prisma.$TaskTierPayload, S>

  type TaskTierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskTierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskTierCountAggregateInputType | true
    }

  export interface TaskTierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskTier'], meta: { name: 'TaskTier' } }
    /**
     * Find zero or one TaskTier that matches the filter.
     * @param {TaskTierFindUniqueArgs} args - Arguments to find a TaskTier
     * @example
     * // Get one TaskTier
     * const taskTier = await prisma.taskTier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskTierFindUniqueArgs>(args: SelectSubset<T, TaskTierFindUniqueArgs<ExtArgs>>): Prisma__TaskTierClient<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskTier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskTierFindUniqueOrThrowArgs} args - Arguments to find a TaskTier
     * @example
     * // Get one TaskTier
     * const taskTier = await prisma.taskTier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskTierFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskTierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskTierClient<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskTier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTierFindFirstArgs} args - Arguments to find a TaskTier
     * @example
     * // Get one TaskTier
     * const taskTier = await prisma.taskTier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskTierFindFirstArgs>(args?: SelectSubset<T, TaskTierFindFirstArgs<ExtArgs>>): Prisma__TaskTierClient<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskTier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTierFindFirstOrThrowArgs} args - Arguments to find a TaskTier
     * @example
     * // Get one TaskTier
     * const taskTier = await prisma.taskTier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskTierFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskTierFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskTierClient<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskTiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskTiers
     * const taskTiers = await prisma.taskTier.findMany()
     * 
     * // Get first 10 TaskTiers
     * const taskTiers = await prisma.taskTier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskTierWithIdOnly = await prisma.taskTier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskTierFindManyArgs>(args?: SelectSubset<T, TaskTierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskTier.
     * @param {TaskTierCreateArgs} args - Arguments to create a TaskTier.
     * @example
     * // Create one TaskTier
     * const TaskTier = await prisma.taskTier.create({
     *   data: {
     *     // ... data to create a TaskTier
     *   }
     * })
     * 
     */
    create<T extends TaskTierCreateArgs>(args: SelectSubset<T, TaskTierCreateArgs<ExtArgs>>): Prisma__TaskTierClient<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskTiers.
     * @param {TaskTierCreateManyArgs} args - Arguments to create many TaskTiers.
     * @example
     * // Create many TaskTiers
     * const taskTier = await prisma.taskTier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskTierCreateManyArgs>(args?: SelectSubset<T, TaskTierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskTiers and returns the data saved in the database.
     * @param {TaskTierCreateManyAndReturnArgs} args - Arguments to create many TaskTiers.
     * @example
     * // Create many TaskTiers
     * const taskTier = await prisma.taskTier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskTiers and only return the `id`
     * const taskTierWithIdOnly = await prisma.taskTier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskTierCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskTierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskTier.
     * @param {TaskTierDeleteArgs} args - Arguments to delete one TaskTier.
     * @example
     * // Delete one TaskTier
     * const TaskTier = await prisma.taskTier.delete({
     *   where: {
     *     // ... filter to delete one TaskTier
     *   }
     * })
     * 
     */
    delete<T extends TaskTierDeleteArgs>(args: SelectSubset<T, TaskTierDeleteArgs<ExtArgs>>): Prisma__TaskTierClient<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskTier.
     * @param {TaskTierUpdateArgs} args - Arguments to update one TaskTier.
     * @example
     * // Update one TaskTier
     * const taskTier = await prisma.taskTier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskTierUpdateArgs>(args: SelectSubset<T, TaskTierUpdateArgs<ExtArgs>>): Prisma__TaskTierClient<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskTiers.
     * @param {TaskTierDeleteManyArgs} args - Arguments to filter TaskTiers to delete.
     * @example
     * // Delete a few TaskTiers
     * const { count } = await prisma.taskTier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskTierDeleteManyArgs>(args?: SelectSubset<T, TaskTierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskTiers
     * const taskTier = await prisma.taskTier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskTierUpdateManyArgs>(args: SelectSubset<T, TaskTierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTiers and returns the data updated in the database.
     * @param {TaskTierUpdateManyAndReturnArgs} args - Arguments to update many TaskTiers.
     * @example
     * // Update many TaskTiers
     * const taskTier = await prisma.taskTier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskTiers and only return the `id`
     * const taskTierWithIdOnly = await prisma.taskTier.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TaskTierUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskTierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskTier.
     * @param {TaskTierUpsertArgs} args - Arguments to update or create a TaskTier.
     * @example
     * // Update or create a TaskTier
     * const taskTier = await prisma.taskTier.upsert({
     *   create: {
     *     // ... data to create a TaskTier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskTier we want to update
     *   }
     * })
     */
    upsert<T extends TaskTierUpsertArgs>(args: SelectSubset<T, TaskTierUpsertArgs<ExtArgs>>): Prisma__TaskTierClient<$Result.GetResult<Prisma.$TaskTierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTierCountArgs} args - Arguments to filter TaskTiers to count.
     * @example
     * // Count the number of TaskTiers
     * const count = await prisma.taskTier.count({
     *   where: {
     *     // ... the filter for the TaskTiers we want to count
     *   }
     * })
    **/
    count<T extends TaskTierCountArgs>(
      args?: Subset<T, TaskTierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskTierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskTierAggregateArgs>(args: Subset<T, TaskTierAggregateArgs>): Prisma.PrismaPromise<GetTaskTierAggregateType<T>>

    /**
     * Group by TaskTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTierGroupByArgs} args - Group by arguments.
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
      T extends TaskTierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskTierGroupByArgs['orderBy'] }
        : { orderBy?: TaskTierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskTierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskTierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskTier model
   */
  readonly fields: TaskTierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskTier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskTierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends ChallengeTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeTaskDefaultArgs<ExtArgs>>): Prisma__ChallengeTaskClient<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskTier model
   */
  interface TaskTierFieldRefs {
    readonly id: FieldRef<"TaskTier", 'String'>
    readonly taskId: FieldRef<"TaskTier", 'String'>
    readonly threshold: FieldRef<"TaskTier", 'Float'>
    readonly points: FieldRef<"TaskTier", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TaskTier findUnique
   */
  export type TaskTierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierInclude<ExtArgs> | null
    /**
     * Filter, which TaskTier to fetch.
     */
    where: TaskTierWhereUniqueInput
  }

  /**
   * TaskTier findUniqueOrThrow
   */
  export type TaskTierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierInclude<ExtArgs> | null
    /**
     * Filter, which TaskTier to fetch.
     */
    where: TaskTierWhereUniqueInput
  }

  /**
   * TaskTier findFirst
   */
  export type TaskTierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierInclude<ExtArgs> | null
    /**
     * Filter, which TaskTier to fetch.
     */
    where?: TaskTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTiers to fetch.
     */
    orderBy?: TaskTierOrderByWithRelationInput | TaskTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTiers.
     */
    cursor?: TaskTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTiers.
     */
    distinct?: TaskTierScalarFieldEnum | TaskTierScalarFieldEnum[]
  }

  /**
   * TaskTier findFirstOrThrow
   */
  export type TaskTierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierInclude<ExtArgs> | null
    /**
     * Filter, which TaskTier to fetch.
     */
    where?: TaskTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTiers to fetch.
     */
    orderBy?: TaskTierOrderByWithRelationInput | TaskTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTiers.
     */
    cursor?: TaskTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTiers.
     */
    distinct?: TaskTierScalarFieldEnum | TaskTierScalarFieldEnum[]
  }

  /**
   * TaskTier findMany
   */
  export type TaskTierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierInclude<ExtArgs> | null
    /**
     * Filter, which TaskTiers to fetch.
     */
    where?: TaskTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTiers to fetch.
     */
    orderBy?: TaskTierOrderByWithRelationInput | TaskTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskTiers.
     */
    cursor?: TaskTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTiers.
     */
    skip?: number
    distinct?: TaskTierScalarFieldEnum | TaskTierScalarFieldEnum[]
  }

  /**
   * TaskTier create
   */
  export type TaskTierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskTier.
     */
    data: XOR<TaskTierCreateInput, TaskTierUncheckedCreateInput>
  }

  /**
   * TaskTier createMany
   */
  export type TaskTierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskTiers.
     */
    data: TaskTierCreateManyInput | TaskTierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskTier createManyAndReturn
   */
  export type TaskTierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * The data used to create many TaskTiers.
     */
    data: TaskTierCreateManyInput | TaskTierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskTier update
   */
  export type TaskTierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskTier.
     */
    data: XOR<TaskTierUpdateInput, TaskTierUncheckedUpdateInput>
    /**
     * Choose, which TaskTier to update.
     */
    where: TaskTierWhereUniqueInput
  }

  /**
   * TaskTier updateMany
   */
  export type TaskTierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskTiers.
     */
    data: XOR<TaskTierUpdateManyMutationInput, TaskTierUncheckedUpdateManyInput>
    /**
     * Filter which TaskTiers to update
     */
    where?: TaskTierWhereInput
    /**
     * Limit how many TaskTiers to update.
     */
    limit?: number
  }

  /**
   * TaskTier updateManyAndReturn
   */
  export type TaskTierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * The data used to update TaskTiers.
     */
    data: XOR<TaskTierUpdateManyMutationInput, TaskTierUncheckedUpdateManyInput>
    /**
     * Filter which TaskTiers to update
     */
    where?: TaskTierWhereInput
    /**
     * Limit how many TaskTiers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskTier upsert
   */
  export type TaskTierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskTier to update in case it exists.
     */
    where: TaskTierWhereUniqueInput
    /**
     * In case the TaskTier found by the `where` argument doesn't exist, create a new TaskTier with this data.
     */
    create: XOR<TaskTierCreateInput, TaskTierUncheckedCreateInput>
    /**
     * In case the TaskTier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskTierUpdateInput, TaskTierUncheckedUpdateInput>
  }

  /**
   * TaskTier delete
   */
  export type TaskTierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierInclude<ExtArgs> | null
    /**
     * Filter which TaskTier to delete.
     */
    where: TaskTierWhereUniqueInput
  }

  /**
   * TaskTier deleteMany
   */
  export type TaskTierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTiers to delete
     */
    where?: TaskTierWhereInput
    /**
     * Limit how many TaskTiers to delete.
     */
    limit?: number
  }

  /**
   * TaskTier without action
   */
  export type TaskTierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTier
     */
    select?: TaskTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTier
     */
    omit?: TaskTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTierInclude<ExtArgs> | null
  }


  /**
   * Model TaskLog
   */

  export type AggregateTaskLog = {
    _count: TaskLogCountAggregateOutputType | null
    _avg: TaskLogAvgAggregateOutputType | null
    _sum: TaskLogSumAggregateOutputType | null
    _min: TaskLogMinAggregateOutputType | null
    _max: TaskLogMaxAggregateOutputType | null
  }

  export type TaskLogAvgAggregateOutputType = {
    value: number | null
  }

  export type TaskLogSumAggregateOutputType = {
    value: number | null
  }

  export type TaskLogMinAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    taskId: string | null
    date: Date | null
    completed: boolean | null
    value: number | null
  }

  export type TaskLogMaxAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    taskId: string | null
    date: Date | null
    completed: boolean | null
    value: number | null
  }

  export type TaskLogCountAggregateOutputType = {
    id: number
    challengeId: number
    userId: number
    taskId: number
    date: number
    completed: number
    value: number
    _all: number
  }


  export type TaskLogAvgAggregateInputType = {
    value?: true
  }

  export type TaskLogSumAggregateInputType = {
    value?: true
  }

  export type TaskLogMinAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    taskId?: true
    date?: true
    completed?: true
    value?: true
  }

  export type TaskLogMaxAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    taskId?: true
    date?: true
    completed?: true
    value?: true
  }

  export type TaskLogCountAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    taskId?: true
    date?: true
    completed?: true
    value?: true
    _all?: true
  }

  export type TaskLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLog to aggregate.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskLogs
    **/
    _count?: true | TaskLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskLogMaxAggregateInputType
  }

  export type GetTaskLogAggregateType<T extends TaskLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskLog[P]>
      : GetScalarType<T[P], AggregateTaskLog[P]>
  }




  export type TaskLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithAggregationInput | TaskLogOrderByWithAggregationInput[]
    by: TaskLogScalarFieldEnum[] | TaskLogScalarFieldEnum
    having?: TaskLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskLogCountAggregateInputType | true
    _avg?: TaskLogAvgAggregateInputType
    _sum?: TaskLogSumAggregateInputType
    _min?: TaskLogMinAggregateInputType
    _max?: TaskLogMaxAggregateInputType
  }

  export type TaskLogGroupByOutputType = {
    id: string
    challengeId: string
    userId: string
    taskId: string
    date: Date
    completed: boolean
    value: number
    _count: TaskLogCountAggregateOutputType | null
    _avg: TaskLogAvgAggregateOutputType | null
    _sum: TaskLogSumAggregateOutputType | null
    _min: TaskLogMinAggregateOutputType | null
    _max: TaskLogMaxAggregateOutputType | null
  }

  type GetTaskLogGroupByPayload<T extends TaskLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskLogGroupByOutputType[P]>
            : GetScalarType<T[P], TaskLogGroupByOutputType[P]>
        }
      >
    >


  export type TaskLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    taskId?: boolean
    date?: boolean
    completed?: boolean
    value?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    taskId?: boolean
    date?: boolean
    completed?: boolean
    value?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    taskId?: boolean
    date?: boolean
    completed?: boolean
    value?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectScalar = {
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    taskId?: boolean
    date?: boolean
    completed?: boolean
    value?: boolean
  }

  export type TaskLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeId" | "userId" | "taskId" | "date" | "completed" | "value", ExtArgs["result"]["taskLog"]>
  export type TaskLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }
  export type TaskLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }
  export type TaskLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ChallengeTaskDefaultArgs<ExtArgs>
  }

  export type $TaskLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskLog"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$ChallengeTaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challengeId: string
      userId: string
      taskId: string
      date: Date
      completed: boolean
      value: number
    }, ExtArgs["result"]["taskLog"]>
    composites: {}
  }

  type TaskLogGetPayload<S extends boolean | null | undefined | TaskLogDefaultArgs> = $Result.GetResult<Prisma.$TaskLogPayload, S>

  type TaskLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskLogCountAggregateInputType | true
    }

  export interface TaskLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskLog'], meta: { name: 'TaskLog' } }
    /**
     * Find zero or one TaskLog that matches the filter.
     * @param {TaskLogFindUniqueArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskLogFindUniqueArgs>(args: SelectSubset<T, TaskLogFindUniqueArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskLogFindUniqueOrThrowArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindFirstArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskLogFindFirstArgs>(args?: SelectSubset<T, TaskLogFindFirstArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindFirstOrThrowArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskLogs
     * const taskLogs = await prisma.taskLog.findMany()
     * 
     * // Get first 10 TaskLogs
     * const taskLogs = await prisma.taskLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskLogFindManyArgs>(args?: SelectSubset<T, TaskLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskLog.
     * @param {TaskLogCreateArgs} args - Arguments to create a TaskLog.
     * @example
     * // Create one TaskLog
     * const TaskLog = await prisma.taskLog.create({
     *   data: {
     *     // ... data to create a TaskLog
     *   }
     * })
     * 
     */
    create<T extends TaskLogCreateArgs>(args: SelectSubset<T, TaskLogCreateArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskLogs.
     * @param {TaskLogCreateManyArgs} args - Arguments to create many TaskLogs.
     * @example
     * // Create many TaskLogs
     * const taskLog = await prisma.taskLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskLogCreateManyArgs>(args?: SelectSubset<T, TaskLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskLogs and returns the data saved in the database.
     * @param {TaskLogCreateManyAndReturnArgs} args - Arguments to create many TaskLogs.
     * @example
     * // Create many TaskLogs
     * const taskLog = await prisma.taskLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskLogs and only return the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskLogCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskLog.
     * @param {TaskLogDeleteArgs} args - Arguments to delete one TaskLog.
     * @example
     * // Delete one TaskLog
     * const TaskLog = await prisma.taskLog.delete({
     *   where: {
     *     // ... filter to delete one TaskLog
     *   }
     * })
     * 
     */
    delete<T extends TaskLogDeleteArgs>(args: SelectSubset<T, TaskLogDeleteArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskLog.
     * @param {TaskLogUpdateArgs} args - Arguments to update one TaskLog.
     * @example
     * // Update one TaskLog
     * const taskLog = await prisma.taskLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskLogUpdateArgs>(args: SelectSubset<T, TaskLogUpdateArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskLogs.
     * @param {TaskLogDeleteManyArgs} args - Arguments to filter TaskLogs to delete.
     * @example
     * // Delete a few TaskLogs
     * const { count } = await prisma.taskLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskLogDeleteManyArgs>(args?: SelectSubset<T, TaskLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskLogs
     * const taskLog = await prisma.taskLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskLogUpdateManyArgs>(args: SelectSubset<T, TaskLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLogs and returns the data updated in the database.
     * @param {TaskLogUpdateManyAndReturnArgs} args - Arguments to update many TaskLogs.
     * @example
     * // Update many TaskLogs
     * const taskLog = await prisma.taskLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskLogs and only return the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TaskLogUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskLog.
     * @param {TaskLogUpsertArgs} args - Arguments to update or create a TaskLog.
     * @example
     * // Update or create a TaskLog
     * const taskLog = await prisma.taskLog.upsert({
     *   create: {
     *     // ... data to create a TaskLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskLog we want to update
     *   }
     * })
     */
    upsert<T extends TaskLogUpsertArgs>(args: SelectSubset<T, TaskLogUpsertArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogCountArgs} args - Arguments to filter TaskLogs to count.
     * @example
     * // Count the number of TaskLogs
     * const count = await prisma.taskLog.count({
     *   where: {
     *     // ... the filter for the TaskLogs we want to count
     *   }
     * })
    **/
    count<T extends TaskLogCountArgs>(
      args?: Subset<T, TaskLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskLogAggregateArgs>(args: Subset<T, TaskLogAggregateArgs>): Prisma.PrismaPromise<GetTaskLogAggregateType<T>>

    /**
     * Group by TaskLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogGroupByArgs} args - Group by arguments.
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
      T extends TaskLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskLogGroupByArgs['orderBy'] }
        : { orderBy?: TaskLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskLog model
   */
  readonly fields: TaskLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends ChallengeTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeTaskDefaultArgs<ExtArgs>>): Prisma__ChallengeTaskClient<$Result.GetResult<Prisma.$ChallengeTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskLog model
   */
  interface TaskLogFieldRefs {
    readonly id: FieldRef<"TaskLog", 'String'>
    readonly challengeId: FieldRef<"TaskLog", 'String'>
    readonly userId: FieldRef<"TaskLog", 'String'>
    readonly taskId: FieldRef<"TaskLog", 'String'>
    readonly date: FieldRef<"TaskLog", 'DateTime'>
    readonly completed: FieldRef<"TaskLog", 'Boolean'>
    readonly value: FieldRef<"TaskLog", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TaskLog findUnique
   */
  export type TaskLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog findUniqueOrThrow
   */
  export type TaskLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog findFirst
   */
  export type TaskLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLogs.
     */
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog findFirstOrThrow
   */
  export type TaskLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLogs.
     */
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog findMany
   */
  export type TaskLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLogs to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog create
   */
  export type TaskLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskLog.
     */
    data: XOR<TaskLogCreateInput, TaskLogUncheckedCreateInput>
  }

  /**
   * TaskLog createMany
   */
  export type TaskLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskLogs.
     */
    data: TaskLogCreateManyInput | TaskLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskLog createManyAndReturn
   */
  export type TaskLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * The data used to create many TaskLogs.
     */
    data: TaskLogCreateManyInput | TaskLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskLog update
   */
  export type TaskLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskLog.
     */
    data: XOR<TaskLogUpdateInput, TaskLogUncheckedUpdateInput>
    /**
     * Choose, which TaskLog to update.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog updateMany
   */
  export type TaskLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskLogs.
     */
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyInput>
    /**
     * Filter which TaskLogs to update
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to update.
     */
    limit?: number
  }

  /**
   * TaskLog updateManyAndReturn
   */
  export type TaskLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * The data used to update TaskLogs.
     */
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyInput>
    /**
     * Filter which TaskLogs to update
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskLog upsert
   */
  export type TaskLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskLog to update in case it exists.
     */
    where: TaskLogWhereUniqueInput
    /**
     * In case the TaskLog found by the `where` argument doesn't exist, create a new TaskLog with this data.
     */
    create: XOR<TaskLogCreateInput, TaskLogUncheckedCreateInput>
    /**
     * In case the TaskLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskLogUpdateInput, TaskLogUncheckedUpdateInput>
  }

  /**
   * TaskLog delete
   */
  export type TaskLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter which TaskLog to delete.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog deleteMany
   */
  export type TaskLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLogs to delete
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to delete.
     */
    limit?: number
  }

  /**
   * TaskLog without action
   */
  export type TaskLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
  }


  /**
   * Model DaySummary
   */

  export type AggregateDaySummary = {
    _count: DaySummaryCountAggregateOutputType | null
    _avg: DaySummaryAvgAggregateOutputType | null
    _sum: DaySummarySumAggregateOutputType | null
    _min: DaySummaryMinAggregateOutputType | null
    _max: DaySummaryMaxAggregateOutputType | null
  }

  export type DaySummaryAvgAggregateOutputType = {
    completedCount: number | null
    totalCount: number | null
    pointsAwarded: number | null
  }

  export type DaySummarySumAggregateOutputType = {
    completedCount: number | null
    totalCount: number | null
    pointsAwarded: number | null
  }

  export type DaySummaryMinAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    date: Date | null
    completedCount: number | null
    totalCount: number | null
    pointsAwarded: number | null
    dailyBonusAwarded: boolean | null
    streakBonusAwarded: boolean | null
  }

  export type DaySummaryMaxAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    date: Date | null
    completedCount: number | null
    totalCount: number | null
    pointsAwarded: number | null
    dailyBonusAwarded: boolean | null
    streakBonusAwarded: boolean | null
  }

  export type DaySummaryCountAggregateOutputType = {
    id: number
    challengeId: number
    userId: number
    date: number
    completedCount: number
    totalCount: number
    pointsAwarded: number
    dailyBonusAwarded: number
    streakBonusAwarded: number
    _all: number
  }


  export type DaySummaryAvgAggregateInputType = {
    completedCount?: true
    totalCount?: true
    pointsAwarded?: true
  }

  export type DaySummarySumAggregateInputType = {
    completedCount?: true
    totalCount?: true
    pointsAwarded?: true
  }

  export type DaySummaryMinAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    date?: true
    completedCount?: true
    totalCount?: true
    pointsAwarded?: true
    dailyBonusAwarded?: true
    streakBonusAwarded?: true
  }

  export type DaySummaryMaxAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    date?: true
    completedCount?: true
    totalCount?: true
    pointsAwarded?: true
    dailyBonusAwarded?: true
    streakBonusAwarded?: true
  }

  export type DaySummaryCountAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    date?: true
    completedCount?: true
    totalCount?: true
    pointsAwarded?: true
    dailyBonusAwarded?: true
    streakBonusAwarded?: true
    _all?: true
  }

  export type DaySummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DaySummary to aggregate.
     */
    where?: DaySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySummaries to fetch.
     */
    orderBy?: DaySummaryOrderByWithRelationInput | DaySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DaySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DaySummaries
    **/
    _count?: true | DaySummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DaySummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaySummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DaySummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DaySummaryMaxAggregateInputType
  }

  export type GetDaySummaryAggregateType<T extends DaySummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateDaySummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaySummary[P]>
      : GetScalarType<T[P], AggregateDaySummary[P]>
  }




  export type DaySummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DaySummaryWhereInput
    orderBy?: DaySummaryOrderByWithAggregationInput | DaySummaryOrderByWithAggregationInput[]
    by: DaySummaryScalarFieldEnum[] | DaySummaryScalarFieldEnum
    having?: DaySummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DaySummaryCountAggregateInputType | true
    _avg?: DaySummaryAvgAggregateInputType
    _sum?: DaySummarySumAggregateInputType
    _min?: DaySummaryMinAggregateInputType
    _max?: DaySummaryMaxAggregateInputType
  }

  export type DaySummaryGroupByOutputType = {
    id: string
    challengeId: string
    userId: string
    date: Date
    completedCount: number
    totalCount: number
    pointsAwarded: number
    dailyBonusAwarded: boolean
    streakBonusAwarded: boolean
    _count: DaySummaryCountAggregateOutputType | null
    _avg: DaySummaryAvgAggregateOutputType | null
    _sum: DaySummarySumAggregateOutputType | null
    _min: DaySummaryMinAggregateOutputType | null
    _max: DaySummaryMaxAggregateOutputType | null
  }

  type GetDaySummaryGroupByPayload<T extends DaySummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DaySummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DaySummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DaySummaryGroupByOutputType[P]>
            : GetScalarType<T[P], DaySummaryGroupByOutputType[P]>
        }
      >
    >


  export type DaySummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    date?: boolean
    completedCount?: boolean
    totalCount?: boolean
    pointsAwarded?: boolean
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daySummary"]>

  export type DaySummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    date?: boolean
    completedCount?: boolean
    totalCount?: boolean
    pointsAwarded?: boolean
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daySummary"]>

  export type DaySummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    date?: boolean
    completedCount?: boolean
    totalCount?: boolean
    pointsAwarded?: boolean
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daySummary"]>

  export type DaySummarySelectScalar = {
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    date?: boolean
    completedCount?: boolean
    totalCount?: boolean
    pointsAwarded?: boolean
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
  }

  export type DaySummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeId" | "userId" | "date" | "completedCount" | "totalCount" | "pointsAwarded" | "dailyBonusAwarded" | "streakBonusAwarded", ExtArgs["result"]["daySummary"]>
  export type DaySummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DaySummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DaySummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DaySummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DaySummary"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challengeId: string
      userId: string
      date: Date
      completedCount: number
      totalCount: number
      pointsAwarded: number
      dailyBonusAwarded: boolean
      streakBonusAwarded: boolean
    }, ExtArgs["result"]["daySummary"]>
    composites: {}
  }

  type DaySummaryGetPayload<S extends boolean | null | undefined | DaySummaryDefaultArgs> = $Result.GetResult<Prisma.$DaySummaryPayload, S>

  type DaySummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DaySummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DaySummaryCountAggregateInputType | true
    }

  export interface DaySummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DaySummary'], meta: { name: 'DaySummary' } }
    /**
     * Find zero or one DaySummary that matches the filter.
     * @param {DaySummaryFindUniqueArgs} args - Arguments to find a DaySummary
     * @example
     * // Get one DaySummary
     * const daySummary = await prisma.daySummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DaySummaryFindUniqueArgs>(args: SelectSubset<T, DaySummaryFindUniqueArgs<ExtArgs>>): Prisma__DaySummaryClient<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DaySummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DaySummaryFindUniqueOrThrowArgs} args - Arguments to find a DaySummary
     * @example
     * // Get one DaySummary
     * const daySummary = await prisma.daySummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DaySummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, DaySummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DaySummaryClient<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DaySummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySummaryFindFirstArgs} args - Arguments to find a DaySummary
     * @example
     * // Get one DaySummary
     * const daySummary = await prisma.daySummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DaySummaryFindFirstArgs>(args?: SelectSubset<T, DaySummaryFindFirstArgs<ExtArgs>>): Prisma__DaySummaryClient<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DaySummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySummaryFindFirstOrThrowArgs} args - Arguments to find a DaySummary
     * @example
     * // Get one DaySummary
     * const daySummary = await prisma.daySummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DaySummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, DaySummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DaySummaryClient<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DaySummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DaySummaries
     * const daySummaries = await prisma.daySummary.findMany()
     * 
     * // Get first 10 DaySummaries
     * const daySummaries = await prisma.daySummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const daySummaryWithIdOnly = await prisma.daySummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DaySummaryFindManyArgs>(args?: SelectSubset<T, DaySummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DaySummary.
     * @param {DaySummaryCreateArgs} args - Arguments to create a DaySummary.
     * @example
     * // Create one DaySummary
     * const DaySummary = await prisma.daySummary.create({
     *   data: {
     *     // ... data to create a DaySummary
     *   }
     * })
     * 
     */
    create<T extends DaySummaryCreateArgs>(args: SelectSubset<T, DaySummaryCreateArgs<ExtArgs>>): Prisma__DaySummaryClient<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DaySummaries.
     * @param {DaySummaryCreateManyArgs} args - Arguments to create many DaySummaries.
     * @example
     * // Create many DaySummaries
     * const daySummary = await prisma.daySummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DaySummaryCreateManyArgs>(args?: SelectSubset<T, DaySummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DaySummaries and returns the data saved in the database.
     * @param {DaySummaryCreateManyAndReturnArgs} args - Arguments to create many DaySummaries.
     * @example
     * // Create many DaySummaries
     * const daySummary = await prisma.daySummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DaySummaries and only return the `id`
     * const daySummaryWithIdOnly = await prisma.daySummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DaySummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, DaySummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DaySummary.
     * @param {DaySummaryDeleteArgs} args - Arguments to delete one DaySummary.
     * @example
     * // Delete one DaySummary
     * const DaySummary = await prisma.daySummary.delete({
     *   where: {
     *     // ... filter to delete one DaySummary
     *   }
     * })
     * 
     */
    delete<T extends DaySummaryDeleteArgs>(args: SelectSubset<T, DaySummaryDeleteArgs<ExtArgs>>): Prisma__DaySummaryClient<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DaySummary.
     * @param {DaySummaryUpdateArgs} args - Arguments to update one DaySummary.
     * @example
     * // Update one DaySummary
     * const daySummary = await prisma.daySummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DaySummaryUpdateArgs>(args: SelectSubset<T, DaySummaryUpdateArgs<ExtArgs>>): Prisma__DaySummaryClient<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DaySummaries.
     * @param {DaySummaryDeleteManyArgs} args - Arguments to filter DaySummaries to delete.
     * @example
     * // Delete a few DaySummaries
     * const { count } = await prisma.daySummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DaySummaryDeleteManyArgs>(args?: SelectSubset<T, DaySummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DaySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DaySummaries
     * const daySummary = await prisma.daySummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DaySummaryUpdateManyArgs>(args: SelectSubset<T, DaySummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DaySummaries and returns the data updated in the database.
     * @param {DaySummaryUpdateManyAndReturnArgs} args - Arguments to update many DaySummaries.
     * @example
     * // Update many DaySummaries
     * const daySummary = await prisma.daySummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DaySummaries and only return the `id`
     * const daySummaryWithIdOnly = await prisma.daySummary.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends DaySummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, DaySummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DaySummary.
     * @param {DaySummaryUpsertArgs} args - Arguments to update or create a DaySummary.
     * @example
     * // Update or create a DaySummary
     * const daySummary = await prisma.daySummary.upsert({
     *   create: {
     *     // ... data to create a DaySummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DaySummary we want to update
     *   }
     * })
     */
    upsert<T extends DaySummaryUpsertArgs>(args: SelectSubset<T, DaySummaryUpsertArgs<ExtArgs>>): Prisma__DaySummaryClient<$Result.GetResult<Prisma.$DaySummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DaySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySummaryCountArgs} args - Arguments to filter DaySummaries to count.
     * @example
     * // Count the number of DaySummaries
     * const count = await prisma.daySummary.count({
     *   where: {
     *     // ... the filter for the DaySummaries we want to count
     *   }
     * })
    **/
    count<T extends DaySummaryCountArgs>(
      args?: Subset<T, DaySummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DaySummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DaySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DaySummaryAggregateArgs>(args: Subset<T, DaySummaryAggregateArgs>): Prisma.PrismaPromise<GetDaySummaryAggregateType<T>>

    /**
     * Group by DaySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySummaryGroupByArgs} args - Group by arguments.
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
      T extends DaySummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DaySummaryGroupByArgs['orderBy'] }
        : { orderBy?: DaySummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DaySummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaySummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DaySummary model
   */
  readonly fields: DaySummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DaySummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DaySummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DaySummary model
   */
  interface DaySummaryFieldRefs {
    readonly id: FieldRef<"DaySummary", 'String'>
    readonly challengeId: FieldRef<"DaySummary", 'String'>
    readonly userId: FieldRef<"DaySummary", 'String'>
    readonly date: FieldRef<"DaySummary", 'DateTime'>
    readonly completedCount: FieldRef<"DaySummary", 'Int'>
    readonly totalCount: FieldRef<"DaySummary", 'Int'>
    readonly pointsAwarded: FieldRef<"DaySummary", 'Int'>
    readonly dailyBonusAwarded: FieldRef<"DaySummary", 'Boolean'>
    readonly streakBonusAwarded: FieldRef<"DaySummary", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DaySummary findUnique
   */
  export type DaySummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
    /**
     * Filter, which DaySummary to fetch.
     */
    where: DaySummaryWhereUniqueInput
  }

  /**
   * DaySummary findUniqueOrThrow
   */
  export type DaySummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
    /**
     * Filter, which DaySummary to fetch.
     */
    where: DaySummaryWhereUniqueInput
  }

  /**
   * DaySummary findFirst
   */
  export type DaySummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
    /**
     * Filter, which DaySummary to fetch.
     */
    where?: DaySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySummaries to fetch.
     */
    orderBy?: DaySummaryOrderByWithRelationInput | DaySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DaySummaries.
     */
    cursor?: DaySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DaySummaries.
     */
    distinct?: DaySummaryScalarFieldEnum | DaySummaryScalarFieldEnum[]
  }

  /**
   * DaySummary findFirstOrThrow
   */
  export type DaySummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
    /**
     * Filter, which DaySummary to fetch.
     */
    where?: DaySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySummaries to fetch.
     */
    orderBy?: DaySummaryOrderByWithRelationInput | DaySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DaySummaries.
     */
    cursor?: DaySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DaySummaries.
     */
    distinct?: DaySummaryScalarFieldEnum | DaySummaryScalarFieldEnum[]
  }

  /**
   * DaySummary findMany
   */
  export type DaySummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
    /**
     * Filter, which DaySummaries to fetch.
     */
    where?: DaySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySummaries to fetch.
     */
    orderBy?: DaySummaryOrderByWithRelationInput | DaySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DaySummaries.
     */
    cursor?: DaySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySummaries.
     */
    skip?: number
    distinct?: DaySummaryScalarFieldEnum | DaySummaryScalarFieldEnum[]
  }

  /**
   * DaySummary create
   */
  export type DaySummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a DaySummary.
     */
    data: XOR<DaySummaryCreateInput, DaySummaryUncheckedCreateInput>
  }

  /**
   * DaySummary createMany
   */
  export type DaySummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DaySummaries.
     */
    data: DaySummaryCreateManyInput | DaySummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DaySummary createManyAndReturn
   */
  export type DaySummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * The data used to create many DaySummaries.
     */
    data: DaySummaryCreateManyInput | DaySummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DaySummary update
   */
  export type DaySummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a DaySummary.
     */
    data: XOR<DaySummaryUpdateInput, DaySummaryUncheckedUpdateInput>
    /**
     * Choose, which DaySummary to update.
     */
    where: DaySummaryWhereUniqueInput
  }

  /**
   * DaySummary updateMany
   */
  export type DaySummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DaySummaries.
     */
    data: XOR<DaySummaryUpdateManyMutationInput, DaySummaryUncheckedUpdateManyInput>
    /**
     * Filter which DaySummaries to update
     */
    where?: DaySummaryWhereInput
    /**
     * Limit how many DaySummaries to update.
     */
    limit?: number
  }

  /**
   * DaySummary updateManyAndReturn
   */
  export type DaySummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * The data used to update DaySummaries.
     */
    data: XOR<DaySummaryUpdateManyMutationInput, DaySummaryUncheckedUpdateManyInput>
    /**
     * Filter which DaySummaries to update
     */
    where?: DaySummaryWhereInput
    /**
     * Limit how many DaySummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DaySummary upsert
   */
  export type DaySummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the DaySummary to update in case it exists.
     */
    where: DaySummaryWhereUniqueInput
    /**
     * In case the DaySummary found by the `where` argument doesn't exist, create a new DaySummary with this data.
     */
    create: XOR<DaySummaryCreateInput, DaySummaryUncheckedCreateInput>
    /**
     * In case the DaySummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DaySummaryUpdateInput, DaySummaryUncheckedUpdateInput>
  }

  /**
   * DaySummary delete
   */
  export type DaySummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
    /**
     * Filter which DaySummary to delete.
     */
    where: DaySummaryWhereUniqueInput
  }

  /**
   * DaySummary deleteMany
   */
  export type DaySummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DaySummaries to delete
     */
    where?: DaySummaryWhereInput
    /**
     * Limit how many DaySummaries to delete.
     */
    limit?: number
  }

  /**
   * DaySummary without action
   */
  export type DaySummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaySummary
     */
    select?: DaySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DaySummary
     */
    omit?: DaySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DaySummaryInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyScore
   */

  export type AggregateWeeklyScore = {
    _count: WeeklyScoreCountAggregateOutputType | null
    _avg: WeeklyScoreAvgAggregateOutputType | null
    _sum: WeeklyScoreSumAggregateOutputType | null
    _min: WeeklyScoreMinAggregateOutputType | null
    _max: WeeklyScoreMaxAggregateOutputType | null
  }

  export type WeeklyScoreAvgAggregateOutputType = {
    weekNumber: number | null
    points: number | null
  }

  export type WeeklyScoreSumAggregateOutputType = {
    weekNumber: number | null
    points: number | null
  }

  export type WeeklyScoreMinAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    weekStart: Date | null
    weekEnd: Date | null
    weekNumber: number | null
    points: number | null
  }

  export type WeeklyScoreMaxAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    weekStart: Date | null
    weekEnd: Date | null
    weekNumber: number | null
    points: number | null
  }

  export type WeeklyScoreCountAggregateOutputType = {
    id: number
    challengeId: number
    userId: number
    weekStart: number
    weekEnd: number
    weekNumber: number
    points: number
    _all: number
  }


  export type WeeklyScoreAvgAggregateInputType = {
    weekNumber?: true
    points?: true
  }

  export type WeeklyScoreSumAggregateInputType = {
    weekNumber?: true
    points?: true
  }

  export type WeeklyScoreMinAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    weekStart?: true
    weekEnd?: true
    weekNumber?: true
    points?: true
  }

  export type WeeklyScoreMaxAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    weekStart?: true
    weekEnd?: true
    weekNumber?: true
    points?: true
  }

  export type WeeklyScoreCountAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    weekStart?: true
    weekEnd?: true
    weekNumber?: true
    points?: true
    _all?: true
  }

  export type WeeklyScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyScore to aggregate.
     */
    where?: WeeklyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScores to fetch.
     */
    orderBy?: WeeklyScoreOrderByWithRelationInput | WeeklyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyScores
    **/
    _count?: true | WeeklyScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyScoreMaxAggregateInputType
  }

  export type GetWeeklyScoreAggregateType<T extends WeeklyScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyScore[P]>
      : GetScalarType<T[P], AggregateWeeklyScore[P]>
  }




  export type WeeklyScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyScoreWhereInput
    orderBy?: WeeklyScoreOrderByWithAggregationInput | WeeklyScoreOrderByWithAggregationInput[]
    by: WeeklyScoreScalarFieldEnum[] | WeeklyScoreScalarFieldEnum
    having?: WeeklyScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyScoreCountAggregateInputType | true
    _avg?: WeeklyScoreAvgAggregateInputType
    _sum?: WeeklyScoreSumAggregateInputType
    _min?: WeeklyScoreMinAggregateInputType
    _max?: WeeklyScoreMaxAggregateInputType
  }

  export type WeeklyScoreGroupByOutputType = {
    id: string
    challengeId: string
    userId: string
    weekStart: Date
    weekEnd: Date
    weekNumber: number
    points: number
    _count: WeeklyScoreCountAggregateOutputType | null
    _avg: WeeklyScoreAvgAggregateOutputType | null
    _sum: WeeklyScoreSumAggregateOutputType | null
    _min: WeeklyScoreMinAggregateOutputType | null
    _max: WeeklyScoreMaxAggregateOutputType | null
  }

  type GetWeeklyScoreGroupByPayload<T extends WeeklyScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyScoreGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyScoreGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    weekNumber?: boolean
    points?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyScore"]>

  export type WeeklyScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    weekNumber?: boolean
    points?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyScore"]>

  export type WeeklyScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    weekNumber?: boolean
    points?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyScore"]>

  export type WeeklyScoreSelectScalar = {
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    weekNumber?: boolean
    points?: boolean
  }

  export type WeeklyScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeId" | "userId" | "weekStart" | "weekEnd" | "weekNumber" | "points", ExtArgs["result"]["weeklyScore"]>
  export type WeeklyScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklyScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklyScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeeklyScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyScore"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challengeId: string
      userId: string
      weekStart: Date
      weekEnd: Date
      weekNumber: number
      points: number
    }, ExtArgs["result"]["weeklyScore"]>
    composites: {}
  }

  type WeeklyScoreGetPayload<S extends boolean | null | undefined | WeeklyScoreDefaultArgs> = $Result.GetResult<Prisma.$WeeklyScorePayload, S>

  type WeeklyScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyScoreCountAggregateInputType | true
    }

  export interface WeeklyScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyScore'], meta: { name: 'WeeklyScore' } }
    /**
     * Find zero or one WeeklyScore that matches the filter.
     * @param {WeeklyScoreFindUniqueArgs} args - Arguments to find a WeeklyScore
     * @example
     * // Get one WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyScoreFindUniqueArgs>(args: SelectSubset<T, WeeklyScoreFindUniqueArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklyScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyScoreFindUniqueOrThrowArgs} args - Arguments to find a WeeklyScore
     * @example
     * // Get one WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreFindFirstArgs} args - Arguments to find a WeeklyScore
     * @example
     * // Get one WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyScoreFindFirstArgs>(args?: SelectSubset<T, WeeklyScoreFindFirstArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreFindFirstOrThrowArgs} args - Arguments to find a WeeklyScore
     * @example
     * // Get one WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyScores
     * const weeklyScores = await prisma.weeklyScore.findMany()
     * 
     * // Get first 10 WeeklyScores
     * const weeklyScores = await prisma.weeklyScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyScoreWithIdOnly = await prisma.weeklyScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyScoreFindManyArgs>(args?: SelectSubset<T, WeeklyScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklyScore.
     * @param {WeeklyScoreCreateArgs} args - Arguments to create a WeeklyScore.
     * @example
     * // Create one WeeklyScore
     * const WeeklyScore = await prisma.weeklyScore.create({
     *   data: {
     *     // ... data to create a WeeklyScore
     *   }
     * })
     * 
     */
    create<T extends WeeklyScoreCreateArgs>(args: SelectSubset<T, WeeklyScoreCreateArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklyScores.
     * @param {WeeklyScoreCreateManyArgs} args - Arguments to create many WeeklyScores.
     * @example
     * // Create many WeeklyScores
     * const weeklyScore = await prisma.weeklyScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyScoreCreateManyArgs>(args?: SelectSubset<T, WeeklyScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyScores and returns the data saved in the database.
     * @param {WeeklyScoreCreateManyAndReturnArgs} args - Arguments to create many WeeklyScores.
     * @example
     * // Create many WeeklyScores
     * const weeklyScore = await prisma.weeklyScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyScores and only return the `id`
     * const weeklyScoreWithIdOnly = await prisma.weeklyScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklyScore.
     * @param {WeeklyScoreDeleteArgs} args - Arguments to delete one WeeklyScore.
     * @example
     * // Delete one WeeklyScore
     * const WeeklyScore = await prisma.weeklyScore.delete({
     *   where: {
     *     // ... filter to delete one WeeklyScore
     *   }
     * })
     * 
     */
    delete<T extends WeeklyScoreDeleteArgs>(args: SelectSubset<T, WeeklyScoreDeleteArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklyScore.
     * @param {WeeklyScoreUpdateArgs} args - Arguments to update one WeeklyScore.
     * @example
     * // Update one WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyScoreUpdateArgs>(args: SelectSubset<T, WeeklyScoreUpdateArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklyScores.
     * @param {WeeklyScoreDeleteManyArgs} args - Arguments to filter WeeklyScores to delete.
     * @example
     * // Delete a few WeeklyScores
     * const { count } = await prisma.weeklyScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyScoreDeleteManyArgs>(args?: SelectSubset<T, WeeklyScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyScores
     * const weeklyScore = await prisma.weeklyScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyScoreUpdateManyArgs>(args: SelectSubset<T, WeeklyScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyScores and returns the data updated in the database.
     * @param {WeeklyScoreUpdateManyAndReturnArgs} args - Arguments to update many WeeklyScores.
     * @example
     * // Update many WeeklyScores
     * const weeklyScore = await prisma.weeklyScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklyScores and only return the `id`
     * const weeklyScoreWithIdOnly = await prisma.weeklyScore.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends WeeklyScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklyScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklyScore.
     * @param {WeeklyScoreUpsertArgs} args - Arguments to update or create a WeeklyScore.
     * @example
     * // Update or create a WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.upsert({
     *   create: {
     *     // ... data to create a WeeklyScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyScore we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyScoreUpsertArgs>(args: SelectSubset<T, WeeklyScoreUpsertArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklyScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreCountArgs} args - Arguments to filter WeeklyScores to count.
     * @example
     * // Count the number of WeeklyScores
     * const count = await prisma.weeklyScore.count({
     *   where: {
     *     // ... the filter for the WeeklyScores we want to count
     *   }
     * })
    **/
    count<T extends WeeklyScoreCountArgs>(
      args?: Subset<T, WeeklyScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklyScoreAggregateArgs>(args: Subset<T, WeeklyScoreAggregateArgs>): Prisma.PrismaPromise<GetWeeklyScoreAggregateType<T>>

    /**
     * Group by WeeklyScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreGroupByArgs} args - Group by arguments.
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
      T extends WeeklyScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyScoreGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklyScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyScore model
   */
  readonly fields: WeeklyScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeeklyScore model
   */
  interface WeeklyScoreFieldRefs {
    readonly id: FieldRef<"WeeklyScore", 'String'>
    readonly challengeId: FieldRef<"WeeklyScore", 'String'>
    readonly userId: FieldRef<"WeeklyScore", 'String'>
    readonly weekStart: FieldRef<"WeeklyScore", 'DateTime'>
    readonly weekEnd: FieldRef<"WeeklyScore", 'DateTime'>
    readonly weekNumber: FieldRef<"WeeklyScore", 'Int'>
    readonly points: FieldRef<"WeeklyScore", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyScore findUnique
   */
  export type WeeklyScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScore to fetch.
     */
    where: WeeklyScoreWhereUniqueInput
  }

  /**
   * WeeklyScore findUniqueOrThrow
   */
  export type WeeklyScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScore to fetch.
     */
    where: WeeklyScoreWhereUniqueInput
  }

  /**
   * WeeklyScore findFirst
   */
  export type WeeklyScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScore to fetch.
     */
    where?: WeeklyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScores to fetch.
     */
    orderBy?: WeeklyScoreOrderByWithRelationInput | WeeklyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyScores.
     */
    cursor?: WeeklyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyScores.
     */
    distinct?: WeeklyScoreScalarFieldEnum | WeeklyScoreScalarFieldEnum[]
  }

  /**
   * WeeklyScore findFirstOrThrow
   */
  export type WeeklyScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScore to fetch.
     */
    where?: WeeklyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScores to fetch.
     */
    orderBy?: WeeklyScoreOrderByWithRelationInput | WeeklyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyScores.
     */
    cursor?: WeeklyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyScores.
     */
    distinct?: WeeklyScoreScalarFieldEnum | WeeklyScoreScalarFieldEnum[]
  }

  /**
   * WeeklyScore findMany
   */
  export type WeeklyScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScores to fetch.
     */
    where?: WeeklyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScores to fetch.
     */
    orderBy?: WeeklyScoreOrderByWithRelationInput | WeeklyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyScores.
     */
    cursor?: WeeklyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScores.
     */
    skip?: number
    distinct?: WeeklyScoreScalarFieldEnum | WeeklyScoreScalarFieldEnum[]
  }

  /**
   * WeeklyScore create
   */
  export type WeeklyScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyScore.
     */
    data: XOR<WeeklyScoreCreateInput, WeeklyScoreUncheckedCreateInput>
  }

  /**
   * WeeklyScore createMany
   */
  export type WeeklyScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyScores.
     */
    data: WeeklyScoreCreateManyInput | WeeklyScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyScore createManyAndReturn
   */
  export type WeeklyScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklyScores.
     */
    data: WeeklyScoreCreateManyInput | WeeklyScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyScore update
   */
  export type WeeklyScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyScore.
     */
    data: XOR<WeeklyScoreUpdateInput, WeeklyScoreUncheckedUpdateInput>
    /**
     * Choose, which WeeklyScore to update.
     */
    where: WeeklyScoreWhereUniqueInput
  }

  /**
   * WeeklyScore updateMany
   */
  export type WeeklyScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyScores.
     */
    data: XOR<WeeklyScoreUpdateManyMutationInput, WeeklyScoreUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyScores to update
     */
    where?: WeeklyScoreWhereInput
    /**
     * Limit how many WeeklyScores to update.
     */
    limit?: number
  }

  /**
   * WeeklyScore updateManyAndReturn
   */
  export type WeeklyScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * The data used to update WeeklyScores.
     */
    data: XOR<WeeklyScoreUpdateManyMutationInput, WeeklyScoreUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyScores to update
     */
    where?: WeeklyScoreWhereInput
    /**
     * Limit how many WeeklyScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyScore upsert
   */
  export type WeeklyScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyScore to update in case it exists.
     */
    where: WeeklyScoreWhereUniqueInput
    /**
     * In case the WeeklyScore found by the `where` argument doesn't exist, create a new WeeklyScore with this data.
     */
    create: XOR<WeeklyScoreCreateInput, WeeklyScoreUncheckedCreateInput>
    /**
     * In case the WeeklyScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyScoreUpdateInput, WeeklyScoreUncheckedUpdateInput>
  }

  /**
   * WeeklyScore delete
   */
  export type WeeklyScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter which WeeklyScore to delete.
     */
    where: WeeklyScoreWhereUniqueInput
  }

  /**
   * WeeklyScore deleteMany
   */
  export type WeeklyScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyScores to delete
     */
    where?: WeeklyScoreWhereInput
    /**
     * Limit how many WeeklyScores to delete.
     */
    limit?: number
  }

  /**
   * WeeklyScore without action
   */
  export type WeeklyScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
  }


  /**
   * Model ActivityEvent
   */

  export type AggregateActivityEvent = {
    _count: ActivityEventCountAggregateOutputType | null
    _avg: ActivityEventAvgAggregateOutputType | null
    _sum: ActivityEventSumAggregateOutputType | null
    _min: ActivityEventMinAggregateOutputType | null
    _max: ActivityEventMaxAggregateOutputType | null
  }

  export type ActivityEventAvgAggregateOutputType = {
    points: number | null
  }

  export type ActivityEventSumAggregateOutputType = {
    points: number | null
  }

  export type ActivityEventMinAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    date: Date | null
    type: string | null
    title: string | null
    points: number | null
  }

  export type ActivityEventMaxAggregateOutputType = {
    id: string | null
    challengeId: string | null
    userId: string | null
    date: Date | null
    type: string | null
    title: string | null
    points: number | null
  }

  export type ActivityEventCountAggregateOutputType = {
    id: number
    challengeId: number
    userId: number
    date: number
    type: number
    title: number
    points: number
    _all: number
  }


  export type ActivityEventAvgAggregateInputType = {
    points?: true
  }

  export type ActivityEventSumAggregateInputType = {
    points?: true
  }

  export type ActivityEventMinAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    date?: true
    type?: true
    title?: true
    points?: true
  }

  export type ActivityEventMaxAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    date?: true
    type?: true
    title?: true
    points?: true
  }

  export type ActivityEventCountAggregateInputType = {
    id?: true
    challengeId?: true
    userId?: true
    date?: true
    type?: true
    title?: true
    points?: true
    _all?: true
  }

  export type ActivityEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityEvent to aggregate.
     */
    where?: ActivityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityEvents to fetch.
     */
    orderBy?: ActivityEventOrderByWithRelationInput | ActivityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityEvents
    **/
    _count?: true | ActivityEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityEventMaxAggregateInputType
  }

  export type GetActivityEventAggregateType<T extends ActivityEventAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityEvent[P]>
      : GetScalarType<T[P], AggregateActivityEvent[P]>
  }




  export type ActivityEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityEventWhereInput
    orderBy?: ActivityEventOrderByWithAggregationInput | ActivityEventOrderByWithAggregationInput[]
    by: ActivityEventScalarFieldEnum[] | ActivityEventScalarFieldEnum
    having?: ActivityEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityEventCountAggregateInputType | true
    _avg?: ActivityEventAvgAggregateInputType
    _sum?: ActivityEventSumAggregateInputType
    _min?: ActivityEventMinAggregateInputType
    _max?: ActivityEventMaxAggregateInputType
  }

  export type ActivityEventGroupByOutputType = {
    id: string
    challengeId: string
    userId: string
    date: Date
    type: string
    title: string
    points: number
    _count: ActivityEventCountAggregateOutputType | null
    _avg: ActivityEventAvgAggregateOutputType | null
    _sum: ActivityEventSumAggregateOutputType | null
    _min: ActivityEventMinAggregateOutputType | null
    _max: ActivityEventMaxAggregateOutputType | null
  }

  type GetActivityEventGroupByPayload<T extends ActivityEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityEventGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityEventGroupByOutputType[P]>
        }
      >
    >


  export type ActivityEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    date?: boolean
    type?: boolean
    title?: boolean
    points?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityEvent"]>

  export type ActivityEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    date?: boolean
    type?: boolean
    title?: boolean
    points?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityEvent"]>

  export type ActivityEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    date?: boolean
    type?: boolean
    title?: boolean
    points?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityEvent"]>

  export type ActivityEventSelectScalar = {
    id?: boolean
    challengeId?: boolean
    userId?: boolean
    date?: boolean
    type?: boolean
    title?: boolean
    points?: boolean
  }

  export type ActivityEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeId" | "userId" | "date" | "type" | "title" | "points", ExtArgs["result"]["activityEvent"]>
  export type ActivityEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityEvent"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challengeId: string
      userId: string
      date: Date
      type: string
      title: string
      points: number
    }, ExtArgs["result"]["activityEvent"]>
    composites: {}
  }

  type ActivityEventGetPayload<S extends boolean | null | undefined | ActivityEventDefaultArgs> = $Result.GetResult<Prisma.$ActivityEventPayload, S>

  type ActivityEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityEventCountAggregateInputType | true
    }

  export interface ActivityEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityEvent'], meta: { name: 'ActivityEvent' } }
    /**
     * Find zero or one ActivityEvent that matches the filter.
     * @param {ActivityEventFindUniqueArgs} args - Arguments to find a ActivityEvent
     * @example
     * // Get one ActivityEvent
     * const activityEvent = await prisma.activityEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityEventFindUniqueArgs>(args: SelectSubset<T, ActivityEventFindUniqueArgs<ExtArgs>>): Prisma__ActivityEventClient<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityEventFindUniqueOrThrowArgs} args - Arguments to find a ActivityEvent
     * @example
     * // Get one ActivityEvent
     * const activityEvent = await prisma.activityEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityEventClient<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityEventFindFirstArgs} args - Arguments to find a ActivityEvent
     * @example
     * // Get one ActivityEvent
     * const activityEvent = await prisma.activityEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityEventFindFirstArgs>(args?: SelectSubset<T, ActivityEventFindFirstArgs<ExtArgs>>): Prisma__ActivityEventClient<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityEventFindFirstOrThrowArgs} args - Arguments to find a ActivityEvent
     * @example
     * // Get one ActivityEvent
     * const activityEvent = await prisma.activityEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityEventClient<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityEvents
     * const activityEvents = await prisma.activityEvent.findMany()
     * 
     * // Get first 10 ActivityEvents
     * const activityEvents = await prisma.activityEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityEventWithIdOnly = await prisma.activityEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityEventFindManyArgs>(args?: SelectSubset<T, ActivityEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityEvent.
     * @param {ActivityEventCreateArgs} args - Arguments to create a ActivityEvent.
     * @example
     * // Create one ActivityEvent
     * const ActivityEvent = await prisma.activityEvent.create({
     *   data: {
     *     // ... data to create a ActivityEvent
     *   }
     * })
     * 
     */
    create<T extends ActivityEventCreateArgs>(args: SelectSubset<T, ActivityEventCreateArgs<ExtArgs>>): Prisma__ActivityEventClient<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityEvents.
     * @param {ActivityEventCreateManyArgs} args - Arguments to create many ActivityEvents.
     * @example
     * // Create many ActivityEvents
     * const activityEvent = await prisma.activityEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityEventCreateManyArgs>(args?: SelectSubset<T, ActivityEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityEvents and returns the data saved in the database.
     * @param {ActivityEventCreateManyAndReturnArgs} args - Arguments to create many ActivityEvents.
     * @example
     * // Create many ActivityEvents
     * const activityEvent = await prisma.activityEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityEvents and only return the `id`
     * const activityEventWithIdOnly = await prisma.activityEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityEvent.
     * @param {ActivityEventDeleteArgs} args - Arguments to delete one ActivityEvent.
     * @example
     * // Delete one ActivityEvent
     * const ActivityEvent = await prisma.activityEvent.delete({
     *   where: {
     *     // ... filter to delete one ActivityEvent
     *   }
     * })
     * 
     */
    delete<T extends ActivityEventDeleteArgs>(args: SelectSubset<T, ActivityEventDeleteArgs<ExtArgs>>): Prisma__ActivityEventClient<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityEvent.
     * @param {ActivityEventUpdateArgs} args - Arguments to update one ActivityEvent.
     * @example
     * // Update one ActivityEvent
     * const activityEvent = await prisma.activityEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityEventUpdateArgs>(args: SelectSubset<T, ActivityEventUpdateArgs<ExtArgs>>): Prisma__ActivityEventClient<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityEvents.
     * @param {ActivityEventDeleteManyArgs} args - Arguments to filter ActivityEvents to delete.
     * @example
     * // Delete a few ActivityEvents
     * const { count } = await prisma.activityEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityEventDeleteManyArgs>(args?: SelectSubset<T, ActivityEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityEvents
     * const activityEvent = await prisma.activityEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityEventUpdateManyArgs>(args: SelectSubset<T, ActivityEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityEvents and returns the data updated in the database.
     * @param {ActivityEventUpdateManyAndReturnArgs} args - Arguments to update many ActivityEvents.
     * @example
     * // Update many ActivityEvents
     * const activityEvent = await prisma.activityEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityEvents and only return the `id`
     * const activityEventWithIdOnly = await prisma.activityEvent.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ActivityEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityEvent.
     * @param {ActivityEventUpsertArgs} args - Arguments to update or create a ActivityEvent.
     * @example
     * // Update or create a ActivityEvent
     * const activityEvent = await prisma.activityEvent.upsert({
     *   create: {
     *     // ... data to create a ActivityEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityEvent we want to update
     *   }
     * })
     */
    upsert<T extends ActivityEventUpsertArgs>(args: SelectSubset<T, ActivityEventUpsertArgs<ExtArgs>>): Prisma__ActivityEventClient<$Result.GetResult<Prisma.$ActivityEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityEventCountArgs} args - Arguments to filter ActivityEvents to count.
     * @example
     * // Count the number of ActivityEvents
     * const count = await prisma.activityEvent.count({
     *   where: {
     *     // ... the filter for the ActivityEvents we want to count
     *   }
     * })
    **/
    count<T extends ActivityEventCountArgs>(
      args?: Subset<T, ActivityEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityEventAggregateArgs>(args: Subset<T, ActivityEventAggregateArgs>): Prisma.PrismaPromise<GetActivityEventAggregateType<T>>

    /**
     * Group by ActivityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityEventGroupByArgs} args - Group by arguments.
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
      T extends ActivityEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityEventGroupByArgs['orderBy'] }
        : { orderBy?: ActivityEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityEvent model
   */
  readonly fields: ActivityEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityEvent model
   */
  interface ActivityEventFieldRefs {
    readonly id: FieldRef<"ActivityEvent", 'String'>
    readonly challengeId: FieldRef<"ActivityEvent", 'String'>
    readonly userId: FieldRef<"ActivityEvent", 'String'>
    readonly date: FieldRef<"ActivityEvent", 'DateTime'>
    readonly type: FieldRef<"ActivityEvent", 'String'>
    readonly title: FieldRef<"ActivityEvent", 'String'>
    readonly points: FieldRef<"ActivityEvent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ActivityEvent findUnique
   */
  export type ActivityEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
    /**
     * Filter, which ActivityEvent to fetch.
     */
    where: ActivityEventWhereUniqueInput
  }

  /**
   * ActivityEvent findUniqueOrThrow
   */
  export type ActivityEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
    /**
     * Filter, which ActivityEvent to fetch.
     */
    where: ActivityEventWhereUniqueInput
  }

  /**
   * ActivityEvent findFirst
   */
  export type ActivityEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
    /**
     * Filter, which ActivityEvent to fetch.
     */
    where?: ActivityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityEvents to fetch.
     */
    orderBy?: ActivityEventOrderByWithRelationInput | ActivityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityEvents.
     */
    cursor?: ActivityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityEvents.
     */
    distinct?: ActivityEventScalarFieldEnum | ActivityEventScalarFieldEnum[]
  }

  /**
   * ActivityEvent findFirstOrThrow
   */
  export type ActivityEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
    /**
     * Filter, which ActivityEvent to fetch.
     */
    where?: ActivityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityEvents to fetch.
     */
    orderBy?: ActivityEventOrderByWithRelationInput | ActivityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityEvents.
     */
    cursor?: ActivityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityEvents.
     */
    distinct?: ActivityEventScalarFieldEnum | ActivityEventScalarFieldEnum[]
  }

  /**
   * ActivityEvent findMany
   */
  export type ActivityEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
    /**
     * Filter, which ActivityEvents to fetch.
     */
    where?: ActivityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityEvents to fetch.
     */
    orderBy?: ActivityEventOrderByWithRelationInput | ActivityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityEvents.
     */
    cursor?: ActivityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityEvents.
     */
    skip?: number
    distinct?: ActivityEventScalarFieldEnum | ActivityEventScalarFieldEnum[]
  }

  /**
   * ActivityEvent create
   */
  export type ActivityEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityEvent.
     */
    data: XOR<ActivityEventCreateInput, ActivityEventUncheckedCreateInput>
  }

  /**
   * ActivityEvent createMany
   */
  export type ActivityEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityEvents.
     */
    data: ActivityEventCreateManyInput | ActivityEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityEvent createManyAndReturn
   */
  export type ActivityEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityEvents.
     */
    data: ActivityEventCreateManyInput | ActivityEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityEvent update
   */
  export type ActivityEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityEvent.
     */
    data: XOR<ActivityEventUpdateInput, ActivityEventUncheckedUpdateInput>
    /**
     * Choose, which ActivityEvent to update.
     */
    where: ActivityEventWhereUniqueInput
  }

  /**
   * ActivityEvent updateMany
   */
  export type ActivityEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityEvents.
     */
    data: XOR<ActivityEventUpdateManyMutationInput, ActivityEventUncheckedUpdateManyInput>
    /**
     * Filter which ActivityEvents to update
     */
    where?: ActivityEventWhereInput
    /**
     * Limit how many ActivityEvents to update.
     */
    limit?: number
  }

  /**
   * ActivityEvent updateManyAndReturn
   */
  export type ActivityEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * The data used to update ActivityEvents.
     */
    data: XOR<ActivityEventUpdateManyMutationInput, ActivityEventUncheckedUpdateManyInput>
    /**
     * Filter which ActivityEvents to update
     */
    where?: ActivityEventWhereInput
    /**
     * Limit how many ActivityEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityEvent upsert
   */
  export type ActivityEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityEvent to update in case it exists.
     */
    where: ActivityEventWhereUniqueInput
    /**
     * In case the ActivityEvent found by the `where` argument doesn't exist, create a new ActivityEvent with this data.
     */
    create: XOR<ActivityEventCreateInput, ActivityEventUncheckedCreateInput>
    /**
     * In case the ActivityEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityEventUpdateInput, ActivityEventUncheckedUpdateInput>
  }

  /**
   * ActivityEvent delete
   */
  export type ActivityEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
    /**
     * Filter which ActivityEvent to delete.
     */
    where: ActivityEventWhereUniqueInput
  }

  /**
   * ActivityEvent deleteMany
   */
  export type ActivityEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityEvents to delete
     */
    where?: ActivityEventWhereInput
    /**
     * Limit how many ActivityEvents to delete.
     */
    limit?: number
  }

  /**
   * ActivityEvent without action
   */
  export type ActivityEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityEvent
     */
    select?: ActivityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityEvent
     */
    omit?: ActivityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityEventInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    displayName: 'displayName',
    totalPoints: 'totalPoints',
    currentStreak: 'currentStreak',
    longestStreak: 'longestStreak',
    mantra: 'mantra',
    streakTokens: 'streakTokens',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    isPublic: 'isPublic',
    inviteCode: 'inviteCode',
    maxMembers: 'maxMembers',
    isActive: 'isActive',
    ended: 'ended',
    adminId: 'adminId',
    createdAt: 'createdAt'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const ChallengeMemberScalarFieldEnum: {
    id: 'id',
    challengeId: 'challengeId',
    userId: 'userId',
    joinedAt: 'joinedAt',
    points: 'points',
    currentStreak: 'currentStreak',
    longestStreak: 'longestStreak',
    isAlcoholDrinker: 'isAlcoholDrinker'
  };

  export type ChallengeMemberScalarFieldEnum = (typeof ChallengeMemberScalarFieldEnum)[keyof typeof ChallengeMemberScalarFieldEnum]


  export const ChallengeTaskScalarFieldEnum: {
    id: 'id',
    challengeId: 'challengeId',
    name: 'name',
    type: 'type',
    inputType: 'inputType',
    isRuleBreaker: 'isRuleBreaker',
    isAlcoholTask: 'isAlcoholTask',
    points: 'points',
    target: 'target'
  };

  export type ChallengeTaskScalarFieldEnum = (typeof ChallengeTaskScalarFieldEnum)[keyof typeof ChallengeTaskScalarFieldEnum]


  export const TaskTierScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    threshold: 'threshold',
    points: 'points'
  };

  export type TaskTierScalarFieldEnum = (typeof TaskTierScalarFieldEnum)[keyof typeof TaskTierScalarFieldEnum]


  export const TaskLogScalarFieldEnum: {
    id: 'id',
    challengeId: 'challengeId',
    userId: 'userId',
    taskId: 'taskId',
    date: 'date',
    completed: 'completed',
    value: 'value'
  };

  export type TaskLogScalarFieldEnum = (typeof TaskLogScalarFieldEnum)[keyof typeof TaskLogScalarFieldEnum]


  export const DaySummaryScalarFieldEnum: {
    id: 'id',
    challengeId: 'challengeId',
    userId: 'userId',
    date: 'date',
    completedCount: 'completedCount',
    totalCount: 'totalCount',
    pointsAwarded: 'pointsAwarded',
    dailyBonusAwarded: 'dailyBonusAwarded',
    streakBonusAwarded: 'streakBonusAwarded'
  };

  export type DaySummaryScalarFieldEnum = (typeof DaySummaryScalarFieldEnum)[keyof typeof DaySummaryScalarFieldEnum]


  export const WeeklyScoreScalarFieldEnum: {
    id: 'id',
    challengeId: 'challengeId',
    userId: 'userId',
    weekStart: 'weekStart',
    weekEnd: 'weekEnd',
    weekNumber: 'weekNumber',
    points: 'points'
  };

  export type WeeklyScoreScalarFieldEnum = (typeof WeeklyScoreScalarFieldEnum)[keyof typeof WeeklyScoreScalarFieldEnum]


  export const ActivityEventScalarFieldEnum: {
    id: 'id',
    challengeId: 'challengeId',
    userId: 'userId',
    date: 'date',
    type: 'type',
    title: 'title',
    points: 'points'
  };

  export type ActivityEventScalarFieldEnum = (typeof ActivityEventScalarFieldEnum)[keyof typeof ActivityEventScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    totalPoints?: IntFilter<"User"> | number
    currentStreak?: IntFilter<"User"> | number
    longestStreak?: IntFilter<"User"> | number
    mantra?: StringNullableFilter<"User"> | string | null
    streakTokens?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    memberships?: ChallengeMemberListRelationFilter
    taskLogs?: TaskLogListRelationFilter
    daySummaries?: DaySummaryListRelationFilter
    weeklyScores?: WeeklyScoreListRelationFilter
    activity?: ActivityEventListRelationFilter
    ownedChallenges?: ChallengeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    totalPoints?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    mantra?: SortOrderInput | SortOrder
    streakTokens?: SortOrder
    createdAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    memberships?: ChallengeMemberOrderByRelationAggregateInput
    taskLogs?: TaskLogOrderByRelationAggregateInput
    daySummaries?: DaySummaryOrderByRelationAggregateInput
    weeklyScores?: WeeklyScoreOrderByRelationAggregateInput
    activity?: ActivityEventOrderByRelationAggregateInput
    ownedChallenges?: ChallengeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    totalPoints?: IntFilter<"User"> | number
    currentStreak?: IntFilter<"User"> | number
    longestStreak?: IntFilter<"User"> | number
    mantra?: StringNullableFilter<"User"> | string | null
    streakTokens?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    memberships?: ChallengeMemberListRelationFilter
    taskLogs?: TaskLogListRelationFilter
    daySummaries?: DaySummaryListRelationFilter
    weeklyScores?: WeeklyScoreListRelationFilter
    activity?: ActivityEventListRelationFilter
    ownedChallenges?: ChallengeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    totalPoints?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    mantra?: SortOrderInput | SortOrder
    streakTokens?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    totalPoints?: IntWithAggregatesFilter<"User"> | number
    currentStreak?: IntWithAggregatesFilter<"User"> | number
    longestStreak?: IntWithAggregatesFilter<"User"> | number
    mantra?: StringNullableWithAggregatesFilter<"User"> | string | null
    streakTokens?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: StringFilter<"Challenge"> | string
    name?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    startDate?: DateTimeFilter<"Challenge"> | Date | string
    endDate?: DateTimeFilter<"Challenge"> | Date | string
    isPublic?: BoolFilter<"Challenge"> | boolean
    inviteCode?: StringFilter<"Challenge"> | string
    maxMembers?: IntNullableFilter<"Challenge"> | number | null
    isActive?: BoolFilter<"Challenge"> | boolean
    ended?: BoolFilter<"Challenge"> | boolean
    adminId?: StringFilter<"Challenge"> | string
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: ChallengeMemberListRelationFilter
    tasks?: ChallengeTaskListRelationFilter
    taskLogs?: TaskLogListRelationFilter
    daySummaries?: DaySummaryListRelationFilter
    weeklyScores?: WeeklyScoreListRelationFilter
    activity?: ActivityEventListRelationFilter
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isPublic?: SortOrder
    inviteCode?: SortOrder
    maxMembers?: SortOrderInput | SortOrder
    isActive?: SortOrder
    ended?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    admin?: UserOrderByWithRelationInput
    members?: ChallengeMemberOrderByRelationAggregateInput
    tasks?: ChallengeTaskOrderByRelationAggregateInput
    taskLogs?: TaskLogOrderByRelationAggregateInput
    daySummaries?: DaySummaryOrderByRelationAggregateInput
    weeklyScores?: WeeklyScoreOrderByRelationAggregateInput
    activity?: ActivityEventOrderByRelationAggregateInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inviteCode?: string
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    name?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    startDate?: DateTimeFilter<"Challenge"> | Date | string
    endDate?: DateTimeFilter<"Challenge"> | Date | string
    isPublic?: BoolFilter<"Challenge"> | boolean
    maxMembers?: IntNullableFilter<"Challenge"> | number | null
    isActive?: BoolFilter<"Challenge"> | boolean
    ended?: BoolFilter<"Challenge"> | boolean
    adminId?: StringFilter<"Challenge"> | string
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: ChallengeMemberListRelationFilter
    tasks?: ChallengeTaskListRelationFilter
    taskLogs?: TaskLogListRelationFilter
    daySummaries?: DaySummaryListRelationFilter
    weeklyScores?: WeeklyScoreListRelationFilter
    activity?: ActivityEventListRelationFilter
  }, "id" | "inviteCode">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isPublic?: SortOrder
    inviteCode?: SortOrder
    maxMembers?: SortOrderInput | SortOrder
    isActive?: SortOrder
    ended?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Challenge"> | string
    name?: StringWithAggregatesFilter<"Challenge"> | string
    description?: StringWithAggregatesFilter<"Challenge"> | string
    startDate?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    isPublic?: BoolWithAggregatesFilter<"Challenge"> | boolean
    inviteCode?: StringWithAggregatesFilter<"Challenge"> | string
    maxMembers?: IntNullableWithAggregatesFilter<"Challenge"> | number | null
    isActive?: BoolWithAggregatesFilter<"Challenge"> | boolean
    ended?: BoolWithAggregatesFilter<"Challenge"> | boolean
    adminId?: StringWithAggregatesFilter<"Challenge"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
  }

  export type ChallengeMemberWhereInput = {
    AND?: ChallengeMemberWhereInput | ChallengeMemberWhereInput[]
    OR?: ChallengeMemberWhereInput[]
    NOT?: ChallengeMemberWhereInput | ChallengeMemberWhereInput[]
    id?: StringFilter<"ChallengeMember"> | string
    challengeId?: StringFilter<"ChallengeMember"> | string
    userId?: StringFilter<"ChallengeMember"> | string
    joinedAt?: DateTimeFilter<"ChallengeMember"> | Date | string
    points?: IntFilter<"ChallengeMember"> | number
    currentStreak?: IntFilter<"ChallengeMember"> | number
    longestStreak?: IntFilter<"ChallengeMember"> | number
    isAlcoholDrinker?: BoolFilter<"ChallengeMember"> | boolean
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChallengeMemberOrderByWithRelationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    points?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    isAlcoholDrinker?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChallengeMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    challengeId_userId?: ChallengeMemberChallengeIdUserIdCompoundUniqueInput
    AND?: ChallengeMemberWhereInput | ChallengeMemberWhereInput[]
    OR?: ChallengeMemberWhereInput[]
    NOT?: ChallengeMemberWhereInput | ChallengeMemberWhereInput[]
    challengeId?: StringFilter<"ChallengeMember"> | string
    userId?: StringFilter<"ChallengeMember"> | string
    joinedAt?: DateTimeFilter<"ChallengeMember"> | Date | string
    points?: IntFilter<"ChallengeMember"> | number
    currentStreak?: IntFilter<"ChallengeMember"> | number
    longestStreak?: IntFilter<"ChallengeMember"> | number
    isAlcoholDrinker?: BoolFilter<"ChallengeMember"> | boolean
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "challengeId_userId">

  export type ChallengeMemberOrderByWithAggregationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    points?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    isAlcoholDrinker?: SortOrder
    _count?: ChallengeMemberCountOrderByAggregateInput
    _avg?: ChallengeMemberAvgOrderByAggregateInput
    _max?: ChallengeMemberMaxOrderByAggregateInput
    _min?: ChallengeMemberMinOrderByAggregateInput
    _sum?: ChallengeMemberSumOrderByAggregateInput
  }

  export type ChallengeMemberScalarWhereWithAggregatesInput = {
    AND?: ChallengeMemberScalarWhereWithAggregatesInput | ChallengeMemberScalarWhereWithAggregatesInput[]
    OR?: ChallengeMemberScalarWhereWithAggregatesInput[]
    NOT?: ChallengeMemberScalarWhereWithAggregatesInput | ChallengeMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChallengeMember"> | string
    challengeId?: StringWithAggregatesFilter<"ChallengeMember"> | string
    userId?: StringWithAggregatesFilter<"ChallengeMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"ChallengeMember"> | Date | string
    points?: IntWithAggregatesFilter<"ChallengeMember"> | number
    currentStreak?: IntWithAggregatesFilter<"ChallengeMember"> | number
    longestStreak?: IntWithAggregatesFilter<"ChallengeMember"> | number
    isAlcoholDrinker?: BoolWithAggregatesFilter<"ChallengeMember"> | boolean
  }

  export type ChallengeTaskWhereInput = {
    AND?: ChallengeTaskWhereInput | ChallengeTaskWhereInput[]
    OR?: ChallengeTaskWhereInput[]
    NOT?: ChallengeTaskWhereInput | ChallengeTaskWhereInput[]
    id?: StringFilter<"ChallengeTask"> | string
    challengeId?: StringFilter<"ChallengeTask"> | string
    name?: StringFilter<"ChallengeTask"> | string
    type?: StringFilter<"ChallengeTask"> | string
    inputType?: StringFilter<"ChallengeTask"> | string
    isRuleBreaker?: BoolFilter<"ChallengeTask"> | boolean
    isAlcoholTask?: BoolFilter<"ChallengeTask"> | boolean
    points?: IntFilter<"ChallengeTask"> | number
    target?: FloatNullableFilter<"ChallengeTask"> | number | null
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    tiers?: TaskTierListRelationFilter
    logs?: TaskLogListRelationFilter
  }

  export type ChallengeTaskOrderByWithRelationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    inputType?: SortOrder
    isRuleBreaker?: SortOrder
    isAlcoholTask?: SortOrder
    points?: SortOrder
    target?: SortOrderInput | SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    tiers?: TaskTierOrderByRelationAggregateInput
    logs?: TaskLogOrderByRelationAggregateInput
  }

  export type ChallengeTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeTaskWhereInput | ChallengeTaskWhereInput[]
    OR?: ChallengeTaskWhereInput[]
    NOT?: ChallengeTaskWhereInput | ChallengeTaskWhereInput[]
    challengeId?: StringFilter<"ChallengeTask"> | string
    name?: StringFilter<"ChallengeTask"> | string
    type?: StringFilter<"ChallengeTask"> | string
    inputType?: StringFilter<"ChallengeTask"> | string
    isRuleBreaker?: BoolFilter<"ChallengeTask"> | boolean
    isAlcoholTask?: BoolFilter<"ChallengeTask"> | boolean
    points?: IntFilter<"ChallengeTask"> | number
    target?: FloatNullableFilter<"ChallengeTask"> | number | null
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    tiers?: TaskTierListRelationFilter
    logs?: TaskLogListRelationFilter
  }, "id">

  export type ChallengeTaskOrderByWithAggregationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    inputType?: SortOrder
    isRuleBreaker?: SortOrder
    isAlcoholTask?: SortOrder
    points?: SortOrder
    target?: SortOrderInput | SortOrder
    _count?: ChallengeTaskCountOrderByAggregateInput
    _avg?: ChallengeTaskAvgOrderByAggregateInput
    _max?: ChallengeTaskMaxOrderByAggregateInput
    _min?: ChallengeTaskMinOrderByAggregateInput
    _sum?: ChallengeTaskSumOrderByAggregateInput
  }

  export type ChallengeTaskScalarWhereWithAggregatesInput = {
    AND?: ChallengeTaskScalarWhereWithAggregatesInput | ChallengeTaskScalarWhereWithAggregatesInput[]
    OR?: ChallengeTaskScalarWhereWithAggregatesInput[]
    NOT?: ChallengeTaskScalarWhereWithAggregatesInput | ChallengeTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChallengeTask"> | string
    challengeId?: StringWithAggregatesFilter<"ChallengeTask"> | string
    name?: StringWithAggregatesFilter<"ChallengeTask"> | string
    type?: StringWithAggregatesFilter<"ChallengeTask"> | string
    inputType?: StringWithAggregatesFilter<"ChallengeTask"> | string
    isRuleBreaker?: BoolWithAggregatesFilter<"ChallengeTask"> | boolean
    isAlcoholTask?: BoolWithAggregatesFilter<"ChallengeTask"> | boolean
    points?: IntWithAggregatesFilter<"ChallengeTask"> | number
    target?: FloatNullableWithAggregatesFilter<"ChallengeTask"> | number | null
  }

  export type TaskTierWhereInput = {
    AND?: TaskTierWhereInput | TaskTierWhereInput[]
    OR?: TaskTierWhereInput[]
    NOT?: TaskTierWhereInput | TaskTierWhereInput[]
    id?: StringFilter<"TaskTier"> | string
    taskId?: StringFilter<"TaskTier"> | string
    threshold?: FloatFilter<"TaskTier"> | number
    points?: IntFilter<"TaskTier"> | number
    task?: XOR<ChallengeTaskScalarRelationFilter, ChallengeTaskWhereInput>
  }

  export type TaskTierOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    threshold?: SortOrder
    points?: SortOrder
    task?: ChallengeTaskOrderByWithRelationInput
  }

  export type TaskTierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskTierWhereInput | TaskTierWhereInput[]
    OR?: TaskTierWhereInput[]
    NOT?: TaskTierWhereInput | TaskTierWhereInput[]
    taskId?: StringFilter<"TaskTier"> | string
    threshold?: FloatFilter<"TaskTier"> | number
    points?: IntFilter<"TaskTier"> | number
    task?: XOR<ChallengeTaskScalarRelationFilter, ChallengeTaskWhereInput>
  }, "id">

  export type TaskTierOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    threshold?: SortOrder
    points?: SortOrder
    _count?: TaskTierCountOrderByAggregateInput
    _avg?: TaskTierAvgOrderByAggregateInput
    _max?: TaskTierMaxOrderByAggregateInput
    _min?: TaskTierMinOrderByAggregateInput
    _sum?: TaskTierSumOrderByAggregateInput
  }

  export type TaskTierScalarWhereWithAggregatesInput = {
    AND?: TaskTierScalarWhereWithAggregatesInput | TaskTierScalarWhereWithAggregatesInput[]
    OR?: TaskTierScalarWhereWithAggregatesInput[]
    NOT?: TaskTierScalarWhereWithAggregatesInput | TaskTierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskTier"> | string
    taskId?: StringWithAggregatesFilter<"TaskTier"> | string
    threshold?: FloatWithAggregatesFilter<"TaskTier"> | number
    points?: IntWithAggregatesFilter<"TaskTier"> | number
  }

  export type TaskLogWhereInput = {
    AND?: TaskLogWhereInput | TaskLogWhereInput[]
    OR?: TaskLogWhereInput[]
    NOT?: TaskLogWhereInput | TaskLogWhereInput[]
    id?: StringFilter<"TaskLog"> | string
    challengeId?: StringFilter<"TaskLog"> | string
    userId?: StringFilter<"TaskLog"> | string
    taskId?: StringFilter<"TaskLog"> | string
    date?: DateTimeFilter<"TaskLog"> | Date | string
    completed?: BoolFilter<"TaskLog"> | boolean
    value?: FloatFilter<"TaskLog"> | number
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<ChallengeTaskScalarRelationFilter, ChallengeTaskWhereInput>
  }

  export type TaskLogOrderByWithRelationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    value?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    task?: ChallengeTaskOrderByWithRelationInput
  }

  export type TaskLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_taskId_date?: TaskLogUserIdTaskIdDateCompoundUniqueInput
    AND?: TaskLogWhereInput | TaskLogWhereInput[]
    OR?: TaskLogWhereInput[]
    NOT?: TaskLogWhereInput | TaskLogWhereInput[]
    challengeId?: StringFilter<"TaskLog"> | string
    userId?: StringFilter<"TaskLog"> | string
    taskId?: StringFilter<"TaskLog"> | string
    date?: DateTimeFilter<"TaskLog"> | Date | string
    completed?: BoolFilter<"TaskLog"> | boolean
    value?: FloatFilter<"TaskLog"> | number
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<ChallengeTaskScalarRelationFilter, ChallengeTaskWhereInput>
  }, "id" | "userId_taskId_date">

  export type TaskLogOrderByWithAggregationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    value?: SortOrder
    _count?: TaskLogCountOrderByAggregateInput
    _avg?: TaskLogAvgOrderByAggregateInput
    _max?: TaskLogMaxOrderByAggregateInput
    _min?: TaskLogMinOrderByAggregateInput
    _sum?: TaskLogSumOrderByAggregateInput
  }

  export type TaskLogScalarWhereWithAggregatesInput = {
    AND?: TaskLogScalarWhereWithAggregatesInput | TaskLogScalarWhereWithAggregatesInput[]
    OR?: TaskLogScalarWhereWithAggregatesInput[]
    NOT?: TaskLogScalarWhereWithAggregatesInput | TaskLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskLog"> | string
    challengeId?: StringWithAggregatesFilter<"TaskLog"> | string
    userId?: StringWithAggregatesFilter<"TaskLog"> | string
    taskId?: StringWithAggregatesFilter<"TaskLog"> | string
    date?: DateTimeWithAggregatesFilter<"TaskLog"> | Date | string
    completed?: BoolWithAggregatesFilter<"TaskLog"> | boolean
    value?: FloatWithAggregatesFilter<"TaskLog"> | number
  }

  export type DaySummaryWhereInput = {
    AND?: DaySummaryWhereInput | DaySummaryWhereInput[]
    OR?: DaySummaryWhereInput[]
    NOT?: DaySummaryWhereInput | DaySummaryWhereInput[]
    id?: StringFilter<"DaySummary"> | string
    challengeId?: StringFilter<"DaySummary"> | string
    userId?: StringFilter<"DaySummary"> | string
    date?: DateTimeFilter<"DaySummary"> | Date | string
    completedCount?: IntFilter<"DaySummary"> | number
    totalCount?: IntFilter<"DaySummary"> | number
    pointsAwarded?: IntFilter<"DaySummary"> | number
    dailyBonusAwarded?: BoolFilter<"DaySummary"> | boolean
    streakBonusAwarded?: BoolFilter<"DaySummary"> | boolean
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DaySummaryOrderByWithRelationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    completedCount?: SortOrder
    totalCount?: SortOrder
    pointsAwarded?: SortOrder
    dailyBonusAwarded?: SortOrder
    streakBonusAwarded?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DaySummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_challengeId_date?: DaySummaryUserIdChallengeIdDateCompoundUniqueInput
    AND?: DaySummaryWhereInput | DaySummaryWhereInput[]
    OR?: DaySummaryWhereInput[]
    NOT?: DaySummaryWhereInput | DaySummaryWhereInput[]
    challengeId?: StringFilter<"DaySummary"> | string
    userId?: StringFilter<"DaySummary"> | string
    date?: DateTimeFilter<"DaySummary"> | Date | string
    completedCount?: IntFilter<"DaySummary"> | number
    totalCount?: IntFilter<"DaySummary"> | number
    pointsAwarded?: IntFilter<"DaySummary"> | number
    dailyBonusAwarded?: BoolFilter<"DaySummary"> | boolean
    streakBonusAwarded?: BoolFilter<"DaySummary"> | boolean
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_challengeId_date">

  export type DaySummaryOrderByWithAggregationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    completedCount?: SortOrder
    totalCount?: SortOrder
    pointsAwarded?: SortOrder
    dailyBonusAwarded?: SortOrder
    streakBonusAwarded?: SortOrder
    _count?: DaySummaryCountOrderByAggregateInput
    _avg?: DaySummaryAvgOrderByAggregateInput
    _max?: DaySummaryMaxOrderByAggregateInput
    _min?: DaySummaryMinOrderByAggregateInput
    _sum?: DaySummarySumOrderByAggregateInput
  }

  export type DaySummaryScalarWhereWithAggregatesInput = {
    AND?: DaySummaryScalarWhereWithAggregatesInput | DaySummaryScalarWhereWithAggregatesInput[]
    OR?: DaySummaryScalarWhereWithAggregatesInput[]
    NOT?: DaySummaryScalarWhereWithAggregatesInput | DaySummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DaySummary"> | string
    challengeId?: StringWithAggregatesFilter<"DaySummary"> | string
    userId?: StringWithAggregatesFilter<"DaySummary"> | string
    date?: DateTimeWithAggregatesFilter<"DaySummary"> | Date | string
    completedCount?: IntWithAggregatesFilter<"DaySummary"> | number
    totalCount?: IntWithAggregatesFilter<"DaySummary"> | number
    pointsAwarded?: IntWithAggregatesFilter<"DaySummary"> | number
    dailyBonusAwarded?: BoolWithAggregatesFilter<"DaySummary"> | boolean
    streakBonusAwarded?: BoolWithAggregatesFilter<"DaySummary"> | boolean
  }

  export type WeeklyScoreWhereInput = {
    AND?: WeeklyScoreWhereInput | WeeklyScoreWhereInput[]
    OR?: WeeklyScoreWhereInput[]
    NOT?: WeeklyScoreWhereInput | WeeklyScoreWhereInput[]
    id?: StringFilter<"WeeklyScore"> | string
    challengeId?: StringFilter<"WeeklyScore"> | string
    userId?: StringFilter<"WeeklyScore"> | string
    weekStart?: DateTimeFilter<"WeeklyScore"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyScore"> | Date | string
    weekNumber?: IntFilter<"WeeklyScore"> | number
    points?: IntFilter<"WeeklyScore"> | number
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WeeklyScoreOrderByWithRelationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    weekNumber?: SortOrder
    points?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WeeklyScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_challengeId_weekStart?: WeeklyScoreUserIdChallengeIdWeekStartCompoundUniqueInput
    AND?: WeeklyScoreWhereInput | WeeklyScoreWhereInput[]
    OR?: WeeklyScoreWhereInput[]
    NOT?: WeeklyScoreWhereInput | WeeklyScoreWhereInput[]
    challengeId?: StringFilter<"WeeklyScore"> | string
    userId?: StringFilter<"WeeklyScore"> | string
    weekStart?: DateTimeFilter<"WeeklyScore"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyScore"> | Date | string
    weekNumber?: IntFilter<"WeeklyScore"> | number
    points?: IntFilter<"WeeklyScore"> | number
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_challengeId_weekStart">

  export type WeeklyScoreOrderByWithAggregationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    weekNumber?: SortOrder
    points?: SortOrder
    _count?: WeeklyScoreCountOrderByAggregateInput
    _avg?: WeeklyScoreAvgOrderByAggregateInput
    _max?: WeeklyScoreMaxOrderByAggregateInput
    _min?: WeeklyScoreMinOrderByAggregateInput
    _sum?: WeeklyScoreSumOrderByAggregateInput
  }

  export type WeeklyScoreScalarWhereWithAggregatesInput = {
    AND?: WeeklyScoreScalarWhereWithAggregatesInput | WeeklyScoreScalarWhereWithAggregatesInput[]
    OR?: WeeklyScoreScalarWhereWithAggregatesInput[]
    NOT?: WeeklyScoreScalarWhereWithAggregatesInput | WeeklyScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeeklyScore"> | string
    challengeId?: StringWithAggregatesFilter<"WeeklyScore"> | string
    userId?: StringWithAggregatesFilter<"WeeklyScore"> | string
    weekStart?: DateTimeWithAggregatesFilter<"WeeklyScore"> | Date | string
    weekEnd?: DateTimeWithAggregatesFilter<"WeeklyScore"> | Date | string
    weekNumber?: IntWithAggregatesFilter<"WeeklyScore"> | number
    points?: IntWithAggregatesFilter<"WeeklyScore"> | number
  }

  export type ActivityEventWhereInput = {
    AND?: ActivityEventWhereInput | ActivityEventWhereInput[]
    OR?: ActivityEventWhereInput[]
    NOT?: ActivityEventWhereInput | ActivityEventWhereInput[]
    id?: StringFilter<"ActivityEvent"> | string
    challengeId?: StringFilter<"ActivityEvent"> | string
    userId?: StringFilter<"ActivityEvent"> | string
    date?: DateTimeFilter<"ActivityEvent"> | Date | string
    type?: StringFilter<"ActivityEvent"> | string
    title?: StringFilter<"ActivityEvent"> | string
    points?: IntFilter<"ActivityEvent"> | number
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityEventOrderByWithRelationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    title?: SortOrder
    points?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ActivityEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityEventWhereInput | ActivityEventWhereInput[]
    OR?: ActivityEventWhereInput[]
    NOT?: ActivityEventWhereInput | ActivityEventWhereInput[]
    challengeId?: StringFilter<"ActivityEvent"> | string
    userId?: StringFilter<"ActivityEvent"> | string
    date?: DateTimeFilter<"ActivityEvent"> | Date | string
    type?: StringFilter<"ActivityEvent"> | string
    title?: StringFilter<"ActivityEvent"> | string
    points?: IntFilter<"ActivityEvent"> | number
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityEventOrderByWithAggregationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    title?: SortOrder
    points?: SortOrder
    _count?: ActivityEventCountOrderByAggregateInput
    _avg?: ActivityEventAvgOrderByAggregateInput
    _max?: ActivityEventMaxOrderByAggregateInput
    _min?: ActivityEventMinOrderByAggregateInput
    _sum?: ActivityEventSumOrderByAggregateInput
  }

  export type ActivityEventScalarWhereWithAggregatesInput = {
    AND?: ActivityEventScalarWhereWithAggregatesInput | ActivityEventScalarWhereWithAggregatesInput[]
    OR?: ActivityEventScalarWhereWithAggregatesInput[]
    NOT?: ActivityEventScalarWhereWithAggregatesInput | ActivityEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityEvent"> | string
    challengeId?: StringWithAggregatesFilter<"ActivityEvent"> | string
    userId?: StringWithAggregatesFilter<"ActivityEvent"> | string
    date?: DateTimeWithAggregatesFilter<"ActivityEvent"> | Date | string
    type?: StringWithAggregatesFilter<"ActivityEvent"> | string
    title?: StringWithAggregatesFilter<"ActivityEvent"> | string
    points?: IntWithAggregatesFilter<"ActivityEvent"> | number
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutUserInput
    activity?: ActivityEventCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberUncheckedCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutUserInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUncheckedUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeCreateInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutOwnedChallengesInput
    members?: ChallengeMemberCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    adminId: string
    createdAt?: Date | string
    members?: ChallengeMemberUncheckedCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskUncheckedCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutOwnedChallengesNestedInput
    members?: ChallengeMemberUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChallengeMemberUncheckedUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUncheckedUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateManyInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    adminId: string
    createdAt?: Date | string
  }

  export type ChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeMemberCreateInput = {
    id?: string
    joinedAt?: Date | string
    points?: number
    currentStreak?: number
    longestStreak?: number
    isAlcoholDrinker?: boolean
    challenge: ChallengeCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type ChallengeMemberUncheckedCreateInput = {
    id?: string
    challengeId: string
    userId: string
    joinedAt?: Date | string
    points?: number
    currentStreak?: number
    longestStreak?: number
    isAlcoholDrinker?: boolean
  }

  export type ChallengeMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    isAlcoholDrinker?: BoolFieldUpdateOperationsInput | boolean
    challenge?: ChallengeUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type ChallengeMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    isAlcoholDrinker?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeMemberCreateManyInput = {
    id?: string
    challengeId: string
    userId: string
    joinedAt?: Date | string
    points?: number
    currentStreak?: number
    longestStreak?: number
    isAlcoholDrinker?: boolean
  }

  export type ChallengeMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    isAlcoholDrinker?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    isAlcoholDrinker?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeTaskCreateInput = {
    id?: string
    name: string
    type: string
    inputType: string
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points: number
    target?: number | null
    challenge: ChallengeCreateNestedOneWithoutTasksInput
    tiers?: TaskTierCreateNestedManyWithoutTaskInput
    logs?: TaskLogCreateNestedManyWithoutTaskInput
  }

  export type ChallengeTaskUncheckedCreateInput = {
    id?: string
    challengeId: string
    name: string
    type: string
    inputType: string
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points: number
    target?: number | null
    tiers?: TaskTierUncheckedCreateNestedManyWithoutTaskInput
    logs?: TaskLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type ChallengeTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    inputType?: StringFieldUpdateOperationsInput | string
    isRuleBreaker?: BoolFieldUpdateOperationsInput | boolean
    isAlcoholTask?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    challenge?: ChallengeUpdateOneRequiredWithoutTasksNestedInput
    tiers?: TaskTierUpdateManyWithoutTaskNestedInput
    logs?: TaskLogUpdateManyWithoutTaskNestedInput
  }

  export type ChallengeTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    inputType?: StringFieldUpdateOperationsInput | string
    isRuleBreaker?: BoolFieldUpdateOperationsInput | boolean
    isAlcoholTask?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    tiers?: TaskTierUncheckedUpdateManyWithoutTaskNestedInput
    logs?: TaskLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type ChallengeTaskCreateManyInput = {
    id?: string
    challengeId: string
    name: string
    type: string
    inputType: string
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points: number
    target?: number | null
  }

  export type ChallengeTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    inputType?: StringFieldUpdateOperationsInput | string
    isRuleBreaker?: BoolFieldUpdateOperationsInput | boolean
    isAlcoholTask?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    target?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ChallengeTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    inputType?: StringFieldUpdateOperationsInput | string
    isRuleBreaker?: BoolFieldUpdateOperationsInput | boolean
    isAlcoholTask?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    target?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TaskTierCreateInput = {
    id?: string
    threshold: number
    points: number
    task: ChallengeTaskCreateNestedOneWithoutTiersInput
  }

  export type TaskTierUncheckedCreateInput = {
    id?: string
    taskId: string
    threshold: number
    points: number
  }

  export type TaskTierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    task?: ChallengeTaskUpdateOneRequiredWithoutTiersNestedInput
  }

  export type TaskTierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTierCreateManyInput = {
    id?: string
    taskId: string
    threshold: number
    points: number
  }

  export type TaskTierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TaskLogCreateInput = {
    id?: string
    date: Date | string
    completed?: boolean
    value?: number
    challenge: ChallengeCreateNestedOneWithoutTaskLogsInput
    user: UserCreateNestedOneWithoutTaskLogsInput
    task: ChallengeTaskCreateNestedOneWithoutLogsInput
  }

  export type TaskLogUncheckedCreateInput = {
    id?: string
    challengeId: string
    userId: string
    taskId: string
    date: Date | string
    completed?: boolean
    value?: number
  }

  export type TaskLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
    challenge?: ChallengeUpdateOneRequiredWithoutTaskLogsNestedInput
    user?: UserUpdateOneRequiredWithoutTaskLogsNestedInput
    task?: ChallengeTaskUpdateOneRequiredWithoutLogsNestedInput
  }

  export type TaskLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TaskLogCreateManyInput = {
    id?: string
    challengeId: string
    userId: string
    taskId: string
    date: Date | string
    completed?: boolean
    value?: number
  }

  export type TaskLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TaskLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DaySummaryCreateInput = {
    id?: string
    date: Date | string
    completedCount?: number
    totalCount?: number
    pointsAwarded?: number
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
    challenge: ChallengeCreateNestedOneWithoutDaySummariesInput
    user: UserCreateNestedOneWithoutDaySummariesInput
  }

  export type DaySummaryUncheckedCreateInput = {
    id?: string
    challengeId: string
    userId: string
    date: Date | string
    completedCount?: number
    totalCount?: number
    pointsAwarded?: number
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
  }

  export type DaySummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    dailyBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    streakBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    challenge?: ChallengeUpdateOneRequiredWithoutDaySummariesNestedInput
    user?: UserUpdateOneRequiredWithoutDaySummariesNestedInput
  }

  export type DaySummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    dailyBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    streakBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DaySummaryCreateManyInput = {
    id?: string
    challengeId: string
    userId: string
    date: Date | string
    completedCount?: number
    totalCount?: number
    pointsAwarded?: number
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
  }

  export type DaySummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    dailyBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    streakBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DaySummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    dailyBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    streakBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WeeklyScoreCreateInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    weekNumber: number
    points?: number
    challenge: ChallengeCreateNestedOneWithoutWeeklyScoresInput
    user: UserCreateNestedOneWithoutWeeklyScoresInput
  }

  export type WeeklyScoreUncheckedCreateInput = {
    id?: string
    challengeId: string
    userId: string
    weekStart: Date | string
    weekEnd: Date | string
    weekNumber: number
    points?: number
  }

  export type WeeklyScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    challenge?: ChallengeUpdateOneRequiredWithoutWeeklyScoresNestedInput
    user?: UserUpdateOneRequiredWithoutWeeklyScoresNestedInput
  }

  export type WeeklyScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyScoreCreateManyInput = {
    id?: string
    challengeId: string
    userId: string
    weekStart: Date | string
    weekEnd: Date | string
    weekNumber: number
    points?: number
  }

  export type WeeklyScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityEventCreateInput = {
    id?: string
    date?: Date | string
    type: string
    title: string
    points?: number
    challenge: ChallengeCreateNestedOneWithoutActivityInput
    user: UserCreateNestedOneWithoutActivityInput
  }

  export type ActivityEventUncheckedCreateInput = {
    id?: string
    challengeId: string
    userId: string
    date?: Date | string
    type: string
    title: string
    points?: number
  }

  export type ActivityEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    challenge?: ChallengeUpdateOneRequiredWithoutActivityNestedInput
    user?: UserUpdateOneRequiredWithoutActivityNestedInput
  }

  export type ActivityEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityEventCreateManyInput = {
    id?: string
    challengeId: string
    userId: string
    date?: Date | string
    type: string
    title: string
    points?: number
  }

  export type ActivityEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ChallengeMemberListRelationFilter = {
    every?: ChallengeMemberWhereInput
    some?: ChallengeMemberWhereInput
    none?: ChallengeMemberWhereInput
  }

  export type TaskLogListRelationFilter = {
    every?: TaskLogWhereInput
    some?: TaskLogWhereInput
    none?: TaskLogWhereInput
  }

  export type DaySummaryListRelationFilter = {
    every?: DaySummaryWhereInput
    some?: DaySummaryWhereInput
    none?: DaySummaryWhereInput
  }

  export type WeeklyScoreListRelationFilter = {
    every?: WeeklyScoreWhereInput
    some?: WeeklyScoreWhereInput
    none?: WeeklyScoreWhereInput
  }

  export type ActivityEventListRelationFilter = {
    every?: ActivityEventWhereInput
    some?: ActivityEventWhereInput
    none?: ActivityEventWhereInput
  }

  export type ChallengeListRelationFilter = {
    every?: ChallengeWhereInput
    some?: ChallengeWhereInput
    none?: ChallengeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DaySummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklyScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    displayName?: SortOrder
    totalPoints?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    mantra?: SortOrder
    streakTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    totalPoints?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    streakTokens?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    displayName?: SortOrder
    totalPoints?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    mantra?: SortOrder
    streakTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    displayName?: SortOrder
    totalPoints?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    mantra?: SortOrder
    streakTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    totalPoints?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    streakTokens?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChallengeTaskListRelationFilter = {
    every?: ChallengeTaskWhereInput
    some?: ChallengeTaskWhereInput
    none?: ChallengeTaskWhereInput
  }

  export type ChallengeTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isPublic?: SortOrder
    inviteCode?: SortOrder
    maxMembers?: SortOrder
    isActive?: SortOrder
    ended?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    maxMembers?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isPublic?: SortOrder
    inviteCode?: SortOrder
    maxMembers?: SortOrder
    isActive?: SortOrder
    ended?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isPublic?: SortOrder
    inviteCode?: SortOrder
    maxMembers?: SortOrder
    isActive?: SortOrder
    ended?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    maxMembers?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChallengeScalarRelationFilter = {
    is?: ChallengeWhereInput
    isNot?: ChallengeWhereInput
  }

  export type ChallengeMemberChallengeIdUserIdCompoundUniqueInput = {
    challengeId: string
    userId: string
  }

  export type ChallengeMemberCountOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    points?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    isAlcoholDrinker?: SortOrder
  }

  export type ChallengeMemberAvgOrderByAggregateInput = {
    points?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
  }

  export type ChallengeMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    points?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    isAlcoholDrinker?: SortOrder
  }

  export type ChallengeMemberMinOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    points?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    isAlcoholDrinker?: SortOrder
  }

  export type ChallengeMemberSumOrderByAggregateInput = {
    points?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
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

  export type TaskTierListRelationFilter = {
    every?: TaskTierWhereInput
    some?: TaskTierWhereInput
    none?: TaskTierWhereInput
  }

  export type TaskTierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeTaskCountOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    inputType?: SortOrder
    isRuleBreaker?: SortOrder
    isAlcoholTask?: SortOrder
    points?: SortOrder
    target?: SortOrder
  }

  export type ChallengeTaskAvgOrderByAggregateInput = {
    points?: SortOrder
    target?: SortOrder
  }

  export type ChallengeTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    inputType?: SortOrder
    isRuleBreaker?: SortOrder
    isAlcoholTask?: SortOrder
    points?: SortOrder
    target?: SortOrder
  }

  export type ChallengeTaskMinOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    inputType?: SortOrder
    isRuleBreaker?: SortOrder
    isAlcoholTask?: SortOrder
    points?: SortOrder
    target?: SortOrder
  }

  export type ChallengeTaskSumOrderByAggregateInput = {
    points?: SortOrder
    target?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ChallengeTaskScalarRelationFilter = {
    is?: ChallengeTaskWhereInput
    isNot?: ChallengeTaskWhereInput
  }

  export type TaskTierCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    threshold?: SortOrder
    points?: SortOrder
  }

  export type TaskTierAvgOrderByAggregateInput = {
    threshold?: SortOrder
    points?: SortOrder
  }

  export type TaskTierMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    threshold?: SortOrder
    points?: SortOrder
  }

  export type TaskTierMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    threshold?: SortOrder
    points?: SortOrder
  }

  export type TaskTierSumOrderByAggregateInput = {
    threshold?: SortOrder
    points?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TaskLogUserIdTaskIdDateCompoundUniqueInput = {
    userId: string
    taskId: string
    date: Date | string
  }

  export type TaskLogCountOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    value?: SortOrder
  }

  export type TaskLogAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type TaskLogMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    value?: SortOrder
  }

  export type TaskLogMinOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    value?: SortOrder
  }

  export type TaskLogSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type DaySummaryUserIdChallengeIdDateCompoundUniqueInput = {
    userId: string
    challengeId: string
    date: Date | string
  }

  export type DaySummaryCountOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    completedCount?: SortOrder
    totalCount?: SortOrder
    pointsAwarded?: SortOrder
    dailyBonusAwarded?: SortOrder
    streakBonusAwarded?: SortOrder
  }

  export type DaySummaryAvgOrderByAggregateInput = {
    completedCount?: SortOrder
    totalCount?: SortOrder
    pointsAwarded?: SortOrder
  }

  export type DaySummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    completedCount?: SortOrder
    totalCount?: SortOrder
    pointsAwarded?: SortOrder
    dailyBonusAwarded?: SortOrder
    streakBonusAwarded?: SortOrder
  }

  export type DaySummaryMinOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    completedCount?: SortOrder
    totalCount?: SortOrder
    pointsAwarded?: SortOrder
    dailyBonusAwarded?: SortOrder
    streakBonusAwarded?: SortOrder
  }

  export type DaySummarySumOrderByAggregateInput = {
    completedCount?: SortOrder
    totalCount?: SortOrder
    pointsAwarded?: SortOrder
  }

  export type WeeklyScoreUserIdChallengeIdWeekStartCompoundUniqueInput = {
    userId: string
    challengeId: string
    weekStart: Date | string
  }

  export type WeeklyScoreCountOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    weekNumber?: SortOrder
    points?: SortOrder
  }

  export type WeeklyScoreAvgOrderByAggregateInput = {
    weekNumber?: SortOrder
    points?: SortOrder
  }

  export type WeeklyScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    weekNumber?: SortOrder
    points?: SortOrder
  }

  export type WeeklyScoreMinOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    weekNumber?: SortOrder
    points?: SortOrder
  }

  export type WeeklyScoreSumOrderByAggregateInput = {
    weekNumber?: SortOrder
    points?: SortOrder
  }

  export type ActivityEventCountOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    title?: SortOrder
    points?: SortOrder
  }

  export type ActivityEventAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type ActivityEventMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    title?: SortOrder
    points?: SortOrder
  }

  export type ActivityEventMinOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    title?: SortOrder
    points?: SortOrder
  }

  export type ActivityEventSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ChallengeMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ChallengeMemberCreateWithoutUserInput, ChallengeMemberUncheckedCreateWithoutUserInput> | ChallengeMemberCreateWithoutUserInput[] | ChallengeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeMemberCreateOrConnectWithoutUserInput | ChallengeMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChallengeMemberCreateManyUserInputEnvelope
    connect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
  }

  export type TaskLogCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput> | TaskLogCreateWithoutUserInput[] | TaskLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutUserInput | TaskLogCreateOrConnectWithoutUserInput[]
    createMany?: TaskLogCreateManyUserInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type DaySummaryCreateNestedManyWithoutUserInput = {
    create?: XOR<DaySummaryCreateWithoutUserInput, DaySummaryUncheckedCreateWithoutUserInput> | DaySummaryCreateWithoutUserInput[] | DaySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DaySummaryCreateOrConnectWithoutUserInput | DaySummaryCreateOrConnectWithoutUserInput[]
    createMany?: DaySummaryCreateManyUserInputEnvelope
    connect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
  }

  export type WeeklyScoreCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyScoreCreateWithoutUserInput, WeeklyScoreUncheckedCreateWithoutUserInput> | WeeklyScoreCreateWithoutUserInput[] | WeeklyScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutUserInput | WeeklyScoreCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyScoreCreateManyUserInputEnvelope
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
  }

  export type ActivityEventCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityEventCreateWithoutUserInput, ActivityEventUncheckedCreateWithoutUserInput> | ActivityEventCreateWithoutUserInput[] | ActivityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityEventCreateOrConnectWithoutUserInput | ActivityEventCreateOrConnectWithoutUserInput[]
    createMany?: ActivityEventCreateManyUserInputEnvelope
    connect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
  }

  export type ChallengeCreateNestedManyWithoutAdminInput = {
    create?: XOR<ChallengeCreateWithoutAdminInput, ChallengeUncheckedCreateWithoutAdminInput> | ChallengeCreateWithoutAdminInput[] | ChallengeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutAdminInput | ChallengeCreateOrConnectWithoutAdminInput[]
    createMany?: ChallengeCreateManyAdminInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ChallengeMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChallengeMemberCreateWithoutUserInput, ChallengeMemberUncheckedCreateWithoutUserInput> | ChallengeMemberCreateWithoutUserInput[] | ChallengeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeMemberCreateOrConnectWithoutUserInput | ChallengeMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChallengeMemberCreateManyUserInputEnvelope
    connect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
  }

  export type TaskLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput> | TaskLogCreateWithoutUserInput[] | TaskLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutUserInput | TaskLogCreateOrConnectWithoutUserInput[]
    createMany?: TaskLogCreateManyUserInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type DaySummaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DaySummaryCreateWithoutUserInput, DaySummaryUncheckedCreateWithoutUserInput> | DaySummaryCreateWithoutUserInput[] | DaySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DaySummaryCreateOrConnectWithoutUserInput | DaySummaryCreateOrConnectWithoutUserInput[]
    createMany?: DaySummaryCreateManyUserInputEnvelope
    connect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
  }

  export type WeeklyScoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyScoreCreateWithoutUserInput, WeeklyScoreUncheckedCreateWithoutUserInput> | WeeklyScoreCreateWithoutUserInput[] | WeeklyScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutUserInput | WeeklyScoreCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyScoreCreateManyUserInputEnvelope
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
  }

  export type ActivityEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityEventCreateWithoutUserInput, ActivityEventUncheckedCreateWithoutUserInput> | ActivityEventCreateWithoutUserInput[] | ActivityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityEventCreateOrConnectWithoutUserInput | ActivityEventCreateOrConnectWithoutUserInput[]
    createMany?: ActivityEventCreateManyUserInputEnvelope
    connect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
  }

  export type ChallengeUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ChallengeCreateWithoutAdminInput, ChallengeUncheckedCreateWithoutAdminInput> | ChallengeCreateWithoutAdminInput[] | ChallengeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutAdminInput | ChallengeCreateOrConnectWithoutAdminInput[]
    createMany?: ChallengeCreateManyAdminInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ChallengeMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChallengeMemberCreateWithoutUserInput, ChallengeMemberUncheckedCreateWithoutUserInput> | ChallengeMemberCreateWithoutUserInput[] | ChallengeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeMemberCreateOrConnectWithoutUserInput | ChallengeMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChallengeMemberUpsertWithWhereUniqueWithoutUserInput | ChallengeMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChallengeMemberCreateManyUserInputEnvelope
    set?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    disconnect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    delete?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    connect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    update?: ChallengeMemberUpdateWithWhereUniqueWithoutUserInput | ChallengeMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChallengeMemberUpdateManyWithWhereWithoutUserInput | ChallengeMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChallengeMemberScalarWhereInput | ChallengeMemberScalarWhereInput[]
  }

  export type TaskLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput> | TaskLogCreateWithoutUserInput[] | TaskLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutUserInput | TaskLogCreateOrConnectWithoutUserInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutUserInput | TaskLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskLogCreateManyUserInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutUserInput | TaskLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutUserInput | TaskLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type DaySummaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<DaySummaryCreateWithoutUserInput, DaySummaryUncheckedCreateWithoutUserInput> | DaySummaryCreateWithoutUserInput[] | DaySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DaySummaryCreateOrConnectWithoutUserInput | DaySummaryCreateOrConnectWithoutUserInput[]
    upsert?: DaySummaryUpsertWithWhereUniqueWithoutUserInput | DaySummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DaySummaryCreateManyUserInputEnvelope
    set?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    disconnect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    delete?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    connect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    update?: DaySummaryUpdateWithWhereUniqueWithoutUserInput | DaySummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DaySummaryUpdateManyWithWhereWithoutUserInput | DaySummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DaySummaryScalarWhereInput | DaySummaryScalarWhereInput[]
  }

  export type WeeklyScoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyScoreCreateWithoutUserInput, WeeklyScoreUncheckedCreateWithoutUserInput> | WeeklyScoreCreateWithoutUserInput[] | WeeklyScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutUserInput | WeeklyScoreCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyScoreUpsertWithWhereUniqueWithoutUserInput | WeeklyScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyScoreCreateManyUserInputEnvelope
    set?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    disconnect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    delete?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    update?: WeeklyScoreUpdateWithWhereUniqueWithoutUserInput | WeeklyScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyScoreUpdateManyWithWhereWithoutUserInput | WeeklyScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyScoreScalarWhereInput | WeeklyScoreScalarWhereInput[]
  }

  export type ActivityEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityEventCreateWithoutUserInput, ActivityEventUncheckedCreateWithoutUserInput> | ActivityEventCreateWithoutUserInput[] | ActivityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityEventCreateOrConnectWithoutUserInput | ActivityEventCreateOrConnectWithoutUserInput[]
    upsert?: ActivityEventUpsertWithWhereUniqueWithoutUserInput | ActivityEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityEventCreateManyUserInputEnvelope
    set?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    disconnect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    delete?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    connect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    update?: ActivityEventUpdateWithWhereUniqueWithoutUserInput | ActivityEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityEventUpdateManyWithWhereWithoutUserInput | ActivityEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityEventScalarWhereInput | ActivityEventScalarWhereInput[]
  }

  export type ChallengeUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ChallengeCreateWithoutAdminInput, ChallengeUncheckedCreateWithoutAdminInput> | ChallengeCreateWithoutAdminInput[] | ChallengeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutAdminInput | ChallengeCreateOrConnectWithoutAdminInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutAdminInput | ChallengeUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ChallengeCreateManyAdminInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutAdminInput | ChallengeUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutAdminInput | ChallengeUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ChallengeMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChallengeMemberCreateWithoutUserInput, ChallengeMemberUncheckedCreateWithoutUserInput> | ChallengeMemberCreateWithoutUserInput[] | ChallengeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeMemberCreateOrConnectWithoutUserInput | ChallengeMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChallengeMemberUpsertWithWhereUniqueWithoutUserInput | ChallengeMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChallengeMemberCreateManyUserInputEnvelope
    set?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    disconnect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    delete?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    connect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    update?: ChallengeMemberUpdateWithWhereUniqueWithoutUserInput | ChallengeMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChallengeMemberUpdateManyWithWhereWithoutUserInput | ChallengeMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChallengeMemberScalarWhereInput | ChallengeMemberScalarWhereInput[]
  }

  export type TaskLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput> | TaskLogCreateWithoutUserInput[] | TaskLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutUserInput | TaskLogCreateOrConnectWithoutUserInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutUserInput | TaskLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskLogCreateManyUserInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutUserInput | TaskLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutUserInput | TaskLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type DaySummaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DaySummaryCreateWithoutUserInput, DaySummaryUncheckedCreateWithoutUserInput> | DaySummaryCreateWithoutUserInput[] | DaySummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DaySummaryCreateOrConnectWithoutUserInput | DaySummaryCreateOrConnectWithoutUserInput[]
    upsert?: DaySummaryUpsertWithWhereUniqueWithoutUserInput | DaySummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DaySummaryCreateManyUserInputEnvelope
    set?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    disconnect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    delete?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    connect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    update?: DaySummaryUpdateWithWhereUniqueWithoutUserInput | DaySummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DaySummaryUpdateManyWithWhereWithoutUserInput | DaySummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DaySummaryScalarWhereInput | DaySummaryScalarWhereInput[]
  }

  export type WeeklyScoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyScoreCreateWithoutUserInput, WeeklyScoreUncheckedCreateWithoutUserInput> | WeeklyScoreCreateWithoutUserInput[] | WeeklyScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutUserInput | WeeklyScoreCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyScoreUpsertWithWhereUniqueWithoutUserInput | WeeklyScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyScoreCreateManyUserInputEnvelope
    set?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    disconnect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    delete?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    update?: WeeklyScoreUpdateWithWhereUniqueWithoutUserInput | WeeklyScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyScoreUpdateManyWithWhereWithoutUserInput | WeeklyScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyScoreScalarWhereInput | WeeklyScoreScalarWhereInput[]
  }

  export type ActivityEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityEventCreateWithoutUserInput, ActivityEventUncheckedCreateWithoutUserInput> | ActivityEventCreateWithoutUserInput[] | ActivityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityEventCreateOrConnectWithoutUserInput | ActivityEventCreateOrConnectWithoutUserInput[]
    upsert?: ActivityEventUpsertWithWhereUniqueWithoutUserInput | ActivityEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityEventCreateManyUserInputEnvelope
    set?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    disconnect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    delete?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    connect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    update?: ActivityEventUpdateWithWhereUniqueWithoutUserInput | ActivityEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityEventUpdateManyWithWhereWithoutUserInput | ActivityEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityEventScalarWhereInput | ActivityEventScalarWhereInput[]
  }

  export type ChallengeUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ChallengeCreateWithoutAdminInput, ChallengeUncheckedCreateWithoutAdminInput> | ChallengeCreateWithoutAdminInput[] | ChallengeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutAdminInput | ChallengeCreateOrConnectWithoutAdminInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutAdminInput | ChallengeUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ChallengeCreateManyAdminInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutAdminInput | ChallengeUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutAdminInput | ChallengeUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutOwnedChallengesInput = {
    create?: XOR<UserCreateWithoutOwnedChallengesInput, UserUncheckedCreateWithoutOwnedChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedChallengesInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeMemberCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeMemberCreateWithoutChallengeInput, ChallengeMemberUncheckedCreateWithoutChallengeInput> | ChallengeMemberCreateWithoutChallengeInput[] | ChallengeMemberUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeMemberCreateOrConnectWithoutChallengeInput | ChallengeMemberCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeMemberCreateManyChallengeInputEnvelope
    connect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
  }

  export type ChallengeTaskCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeTaskCreateWithoutChallengeInput, ChallengeTaskUncheckedCreateWithoutChallengeInput> | ChallengeTaskCreateWithoutChallengeInput[] | ChallengeTaskUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeTaskCreateOrConnectWithoutChallengeInput | ChallengeTaskCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeTaskCreateManyChallengeInputEnvelope
    connect?: ChallengeTaskWhereUniqueInput | ChallengeTaskWhereUniqueInput[]
  }

  export type TaskLogCreateNestedManyWithoutChallengeInput = {
    create?: XOR<TaskLogCreateWithoutChallengeInput, TaskLogUncheckedCreateWithoutChallengeInput> | TaskLogCreateWithoutChallengeInput[] | TaskLogUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutChallengeInput | TaskLogCreateOrConnectWithoutChallengeInput[]
    createMany?: TaskLogCreateManyChallengeInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type DaySummaryCreateNestedManyWithoutChallengeInput = {
    create?: XOR<DaySummaryCreateWithoutChallengeInput, DaySummaryUncheckedCreateWithoutChallengeInput> | DaySummaryCreateWithoutChallengeInput[] | DaySummaryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: DaySummaryCreateOrConnectWithoutChallengeInput | DaySummaryCreateOrConnectWithoutChallengeInput[]
    createMany?: DaySummaryCreateManyChallengeInputEnvelope
    connect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
  }

  export type WeeklyScoreCreateNestedManyWithoutChallengeInput = {
    create?: XOR<WeeklyScoreCreateWithoutChallengeInput, WeeklyScoreUncheckedCreateWithoutChallengeInput> | WeeklyScoreCreateWithoutChallengeInput[] | WeeklyScoreUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutChallengeInput | WeeklyScoreCreateOrConnectWithoutChallengeInput[]
    createMany?: WeeklyScoreCreateManyChallengeInputEnvelope
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
  }

  export type ActivityEventCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ActivityEventCreateWithoutChallengeInput, ActivityEventUncheckedCreateWithoutChallengeInput> | ActivityEventCreateWithoutChallengeInput[] | ActivityEventUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ActivityEventCreateOrConnectWithoutChallengeInput | ActivityEventCreateOrConnectWithoutChallengeInput[]
    createMany?: ActivityEventCreateManyChallengeInputEnvelope
    connect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
  }

  export type ChallengeMemberUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeMemberCreateWithoutChallengeInput, ChallengeMemberUncheckedCreateWithoutChallengeInput> | ChallengeMemberCreateWithoutChallengeInput[] | ChallengeMemberUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeMemberCreateOrConnectWithoutChallengeInput | ChallengeMemberCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeMemberCreateManyChallengeInputEnvelope
    connect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
  }

  export type ChallengeTaskUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeTaskCreateWithoutChallengeInput, ChallengeTaskUncheckedCreateWithoutChallengeInput> | ChallengeTaskCreateWithoutChallengeInput[] | ChallengeTaskUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeTaskCreateOrConnectWithoutChallengeInput | ChallengeTaskCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeTaskCreateManyChallengeInputEnvelope
    connect?: ChallengeTaskWhereUniqueInput | ChallengeTaskWhereUniqueInput[]
  }

  export type TaskLogUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<TaskLogCreateWithoutChallengeInput, TaskLogUncheckedCreateWithoutChallengeInput> | TaskLogCreateWithoutChallengeInput[] | TaskLogUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutChallengeInput | TaskLogCreateOrConnectWithoutChallengeInput[]
    createMany?: TaskLogCreateManyChallengeInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type DaySummaryUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<DaySummaryCreateWithoutChallengeInput, DaySummaryUncheckedCreateWithoutChallengeInput> | DaySummaryCreateWithoutChallengeInput[] | DaySummaryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: DaySummaryCreateOrConnectWithoutChallengeInput | DaySummaryCreateOrConnectWithoutChallengeInput[]
    createMany?: DaySummaryCreateManyChallengeInputEnvelope
    connect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
  }

  export type WeeklyScoreUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<WeeklyScoreCreateWithoutChallengeInput, WeeklyScoreUncheckedCreateWithoutChallengeInput> | WeeklyScoreCreateWithoutChallengeInput[] | WeeklyScoreUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutChallengeInput | WeeklyScoreCreateOrConnectWithoutChallengeInput[]
    createMany?: WeeklyScoreCreateManyChallengeInputEnvelope
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
  }

  export type ActivityEventUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ActivityEventCreateWithoutChallengeInput, ActivityEventUncheckedCreateWithoutChallengeInput> | ActivityEventCreateWithoutChallengeInput[] | ActivityEventUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ActivityEventCreateOrConnectWithoutChallengeInput | ActivityEventCreateOrConnectWithoutChallengeInput[]
    createMany?: ActivityEventCreateManyChallengeInputEnvelope
    connect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOwnedChallengesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedChallengesInput, UserUncheckedCreateWithoutOwnedChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedChallengesInput
    upsert?: UserUpsertWithoutOwnedChallengesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedChallengesInput, UserUpdateWithoutOwnedChallengesInput>, UserUncheckedUpdateWithoutOwnedChallengesInput>
  }

  export type ChallengeMemberUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeMemberCreateWithoutChallengeInput, ChallengeMemberUncheckedCreateWithoutChallengeInput> | ChallengeMemberCreateWithoutChallengeInput[] | ChallengeMemberUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeMemberCreateOrConnectWithoutChallengeInput | ChallengeMemberCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeMemberUpsertWithWhereUniqueWithoutChallengeInput | ChallengeMemberUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeMemberCreateManyChallengeInputEnvelope
    set?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    disconnect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    delete?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    connect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    update?: ChallengeMemberUpdateWithWhereUniqueWithoutChallengeInput | ChallengeMemberUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeMemberUpdateManyWithWhereWithoutChallengeInput | ChallengeMemberUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeMemberScalarWhereInput | ChallengeMemberScalarWhereInput[]
  }

  export type ChallengeTaskUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeTaskCreateWithoutChallengeInput, ChallengeTaskUncheckedCreateWithoutChallengeInput> | ChallengeTaskCreateWithoutChallengeInput[] | ChallengeTaskUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeTaskCreateOrConnectWithoutChallengeInput | ChallengeTaskCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeTaskUpsertWithWhereUniqueWithoutChallengeInput | ChallengeTaskUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeTaskCreateManyChallengeInputEnvelope
    set?: ChallengeTaskWhereUniqueInput | ChallengeTaskWhereUniqueInput[]
    disconnect?: ChallengeTaskWhereUniqueInput | ChallengeTaskWhereUniqueInput[]
    delete?: ChallengeTaskWhereUniqueInput | ChallengeTaskWhereUniqueInput[]
    connect?: ChallengeTaskWhereUniqueInput | ChallengeTaskWhereUniqueInput[]
    update?: ChallengeTaskUpdateWithWhereUniqueWithoutChallengeInput | ChallengeTaskUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeTaskUpdateManyWithWhereWithoutChallengeInput | ChallengeTaskUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeTaskScalarWhereInput | ChallengeTaskScalarWhereInput[]
  }

  export type TaskLogUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<TaskLogCreateWithoutChallengeInput, TaskLogUncheckedCreateWithoutChallengeInput> | TaskLogCreateWithoutChallengeInput[] | TaskLogUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutChallengeInput | TaskLogCreateOrConnectWithoutChallengeInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutChallengeInput | TaskLogUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: TaskLogCreateManyChallengeInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutChallengeInput | TaskLogUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutChallengeInput | TaskLogUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type DaySummaryUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<DaySummaryCreateWithoutChallengeInput, DaySummaryUncheckedCreateWithoutChallengeInput> | DaySummaryCreateWithoutChallengeInput[] | DaySummaryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: DaySummaryCreateOrConnectWithoutChallengeInput | DaySummaryCreateOrConnectWithoutChallengeInput[]
    upsert?: DaySummaryUpsertWithWhereUniqueWithoutChallengeInput | DaySummaryUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: DaySummaryCreateManyChallengeInputEnvelope
    set?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    disconnect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    delete?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    connect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    update?: DaySummaryUpdateWithWhereUniqueWithoutChallengeInput | DaySummaryUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: DaySummaryUpdateManyWithWhereWithoutChallengeInput | DaySummaryUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: DaySummaryScalarWhereInput | DaySummaryScalarWhereInput[]
  }

  export type WeeklyScoreUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<WeeklyScoreCreateWithoutChallengeInput, WeeklyScoreUncheckedCreateWithoutChallengeInput> | WeeklyScoreCreateWithoutChallengeInput[] | WeeklyScoreUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutChallengeInput | WeeklyScoreCreateOrConnectWithoutChallengeInput[]
    upsert?: WeeklyScoreUpsertWithWhereUniqueWithoutChallengeInput | WeeklyScoreUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: WeeklyScoreCreateManyChallengeInputEnvelope
    set?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    disconnect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    delete?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    update?: WeeklyScoreUpdateWithWhereUniqueWithoutChallengeInput | WeeklyScoreUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: WeeklyScoreUpdateManyWithWhereWithoutChallengeInput | WeeklyScoreUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: WeeklyScoreScalarWhereInput | WeeklyScoreScalarWhereInput[]
  }

  export type ActivityEventUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ActivityEventCreateWithoutChallengeInput, ActivityEventUncheckedCreateWithoutChallengeInput> | ActivityEventCreateWithoutChallengeInput[] | ActivityEventUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ActivityEventCreateOrConnectWithoutChallengeInput | ActivityEventCreateOrConnectWithoutChallengeInput[]
    upsert?: ActivityEventUpsertWithWhereUniqueWithoutChallengeInput | ActivityEventUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ActivityEventCreateManyChallengeInputEnvelope
    set?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    disconnect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    delete?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    connect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    update?: ActivityEventUpdateWithWhereUniqueWithoutChallengeInput | ActivityEventUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ActivityEventUpdateManyWithWhereWithoutChallengeInput | ActivityEventUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ActivityEventScalarWhereInput | ActivityEventScalarWhereInput[]
  }

  export type ChallengeMemberUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeMemberCreateWithoutChallengeInput, ChallengeMemberUncheckedCreateWithoutChallengeInput> | ChallengeMemberCreateWithoutChallengeInput[] | ChallengeMemberUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeMemberCreateOrConnectWithoutChallengeInput | ChallengeMemberCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeMemberUpsertWithWhereUniqueWithoutChallengeInput | ChallengeMemberUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeMemberCreateManyChallengeInputEnvelope
    set?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    disconnect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    delete?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    connect?: ChallengeMemberWhereUniqueInput | ChallengeMemberWhereUniqueInput[]
    update?: ChallengeMemberUpdateWithWhereUniqueWithoutChallengeInput | ChallengeMemberUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeMemberUpdateManyWithWhereWithoutChallengeInput | ChallengeMemberUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeMemberScalarWhereInput | ChallengeMemberScalarWhereInput[]
  }

  export type ChallengeTaskUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeTaskCreateWithoutChallengeInput, ChallengeTaskUncheckedCreateWithoutChallengeInput> | ChallengeTaskCreateWithoutChallengeInput[] | ChallengeTaskUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeTaskCreateOrConnectWithoutChallengeInput | ChallengeTaskCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeTaskUpsertWithWhereUniqueWithoutChallengeInput | ChallengeTaskUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeTaskCreateManyChallengeInputEnvelope
    set?: ChallengeTaskWhereUniqueInput | ChallengeTaskWhereUniqueInput[]
    disconnect?: ChallengeTaskWhereUniqueInput | ChallengeTaskWhereUniqueInput[]
    delete?: ChallengeTaskWhereUniqueInput | ChallengeTaskWhereUniqueInput[]
    connect?: ChallengeTaskWhereUniqueInput | ChallengeTaskWhereUniqueInput[]
    update?: ChallengeTaskUpdateWithWhereUniqueWithoutChallengeInput | ChallengeTaskUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeTaskUpdateManyWithWhereWithoutChallengeInput | ChallengeTaskUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeTaskScalarWhereInput | ChallengeTaskScalarWhereInput[]
  }

  export type TaskLogUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<TaskLogCreateWithoutChallengeInput, TaskLogUncheckedCreateWithoutChallengeInput> | TaskLogCreateWithoutChallengeInput[] | TaskLogUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutChallengeInput | TaskLogCreateOrConnectWithoutChallengeInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutChallengeInput | TaskLogUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: TaskLogCreateManyChallengeInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutChallengeInput | TaskLogUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutChallengeInput | TaskLogUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type DaySummaryUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<DaySummaryCreateWithoutChallengeInput, DaySummaryUncheckedCreateWithoutChallengeInput> | DaySummaryCreateWithoutChallengeInput[] | DaySummaryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: DaySummaryCreateOrConnectWithoutChallengeInput | DaySummaryCreateOrConnectWithoutChallengeInput[]
    upsert?: DaySummaryUpsertWithWhereUniqueWithoutChallengeInput | DaySummaryUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: DaySummaryCreateManyChallengeInputEnvelope
    set?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    disconnect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    delete?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    connect?: DaySummaryWhereUniqueInput | DaySummaryWhereUniqueInput[]
    update?: DaySummaryUpdateWithWhereUniqueWithoutChallengeInput | DaySummaryUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: DaySummaryUpdateManyWithWhereWithoutChallengeInput | DaySummaryUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: DaySummaryScalarWhereInput | DaySummaryScalarWhereInput[]
  }

  export type WeeklyScoreUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<WeeklyScoreCreateWithoutChallengeInput, WeeklyScoreUncheckedCreateWithoutChallengeInput> | WeeklyScoreCreateWithoutChallengeInput[] | WeeklyScoreUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutChallengeInput | WeeklyScoreCreateOrConnectWithoutChallengeInput[]
    upsert?: WeeklyScoreUpsertWithWhereUniqueWithoutChallengeInput | WeeklyScoreUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: WeeklyScoreCreateManyChallengeInputEnvelope
    set?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    disconnect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    delete?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    update?: WeeklyScoreUpdateWithWhereUniqueWithoutChallengeInput | WeeklyScoreUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: WeeklyScoreUpdateManyWithWhereWithoutChallengeInput | WeeklyScoreUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: WeeklyScoreScalarWhereInput | WeeklyScoreScalarWhereInput[]
  }

  export type ActivityEventUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ActivityEventCreateWithoutChallengeInput, ActivityEventUncheckedCreateWithoutChallengeInput> | ActivityEventCreateWithoutChallengeInput[] | ActivityEventUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ActivityEventCreateOrConnectWithoutChallengeInput | ActivityEventCreateOrConnectWithoutChallengeInput[]
    upsert?: ActivityEventUpsertWithWhereUniqueWithoutChallengeInput | ActivityEventUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ActivityEventCreateManyChallengeInputEnvelope
    set?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    disconnect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    delete?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    connect?: ActivityEventWhereUniqueInput | ActivityEventWhereUniqueInput[]
    update?: ActivityEventUpdateWithWhereUniqueWithoutChallengeInput | ActivityEventUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ActivityEventUpdateManyWithWhereWithoutChallengeInput | ActivityEventUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ActivityEventScalarWhereInput | ActivityEventScalarWhereInput[]
  }

  export type ChallengeCreateNestedOneWithoutMembersInput = {
    create?: XOR<ChallengeCreateWithoutMembersInput, ChallengeUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutMembersInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ChallengeCreateWithoutMembersInput, ChallengeUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutMembersInput
    upsert?: ChallengeUpsertWithoutMembersInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutMembersInput, ChallengeUpdateWithoutMembersInput>, ChallengeUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type ChallengeCreateNestedOneWithoutTasksInput = {
    create?: XOR<ChallengeCreateWithoutTasksInput, ChallengeUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutTasksInput
    connect?: ChallengeWhereUniqueInput
  }

  export type TaskTierCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskTierCreateWithoutTaskInput, TaskTierUncheckedCreateWithoutTaskInput> | TaskTierCreateWithoutTaskInput[] | TaskTierUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTierCreateOrConnectWithoutTaskInput | TaskTierCreateOrConnectWithoutTaskInput[]
    createMany?: TaskTierCreateManyTaskInputEnvelope
    connect?: TaskTierWhereUniqueInput | TaskTierWhereUniqueInput[]
  }

  export type TaskLogCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type TaskTierUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskTierCreateWithoutTaskInput, TaskTierUncheckedCreateWithoutTaskInput> | TaskTierCreateWithoutTaskInput[] | TaskTierUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTierCreateOrConnectWithoutTaskInput | TaskTierCreateOrConnectWithoutTaskInput[]
    createMany?: TaskTierCreateManyTaskInputEnvelope
    connect?: TaskTierWhereUniqueInput | TaskTierWhereUniqueInput[]
  }

  export type TaskLogUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChallengeUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ChallengeCreateWithoutTasksInput, ChallengeUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutTasksInput
    upsert?: ChallengeUpsertWithoutTasksInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutTasksInput, ChallengeUpdateWithoutTasksInput>, ChallengeUncheckedUpdateWithoutTasksInput>
  }

  export type TaskTierUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskTierCreateWithoutTaskInput, TaskTierUncheckedCreateWithoutTaskInput> | TaskTierCreateWithoutTaskInput[] | TaskTierUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTierCreateOrConnectWithoutTaskInput | TaskTierCreateOrConnectWithoutTaskInput[]
    upsert?: TaskTierUpsertWithWhereUniqueWithoutTaskInput | TaskTierUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskTierCreateManyTaskInputEnvelope
    set?: TaskTierWhereUniqueInput | TaskTierWhereUniqueInput[]
    disconnect?: TaskTierWhereUniqueInput | TaskTierWhereUniqueInput[]
    delete?: TaskTierWhereUniqueInput | TaskTierWhereUniqueInput[]
    connect?: TaskTierWhereUniqueInput | TaskTierWhereUniqueInput[]
    update?: TaskTierUpdateWithWhereUniqueWithoutTaskInput | TaskTierUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskTierUpdateManyWithWhereWithoutTaskInput | TaskTierUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskTierScalarWhereInput | TaskTierScalarWhereInput[]
  }

  export type TaskLogUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutTaskInput | TaskLogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutTaskInput | TaskLogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutTaskInput | TaskLogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type TaskTierUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskTierCreateWithoutTaskInput, TaskTierUncheckedCreateWithoutTaskInput> | TaskTierCreateWithoutTaskInput[] | TaskTierUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTierCreateOrConnectWithoutTaskInput | TaskTierCreateOrConnectWithoutTaskInput[]
    upsert?: TaskTierUpsertWithWhereUniqueWithoutTaskInput | TaskTierUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskTierCreateManyTaskInputEnvelope
    set?: TaskTierWhereUniqueInput | TaskTierWhereUniqueInput[]
    disconnect?: TaskTierWhereUniqueInput | TaskTierWhereUniqueInput[]
    delete?: TaskTierWhereUniqueInput | TaskTierWhereUniqueInput[]
    connect?: TaskTierWhereUniqueInput | TaskTierWhereUniqueInput[]
    update?: TaskTierUpdateWithWhereUniqueWithoutTaskInput | TaskTierUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskTierUpdateManyWithWhereWithoutTaskInput | TaskTierUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskTierScalarWhereInput | TaskTierScalarWhereInput[]
  }

  export type TaskLogUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput> | TaskLogCreateWithoutTaskInput[] | TaskLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutTaskInput | TaskLogCreateOrConnectWithoutTaskInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutTaskInput | TaskLogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskLogCreateManyTaskInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutTaskInput | TaskLogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutTaskInput | TaskLogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type ChallengeTaskCreateNestedOneWithoutTiersInput = {
    create?: XOR<ChallengeTaskCreateWithoutTiersInput, ChallengeTaskUncheckedCreateWithoutTiersInput>
    connectOrCreate?: ChallengeTaskCreateOrConnectWithoutTiersInput
    connect?: ChallengeTaskWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChallengeTaskUpdateOneRequiredWithoutTiersNestedInput = {
    create?: XOR<ChallengeTaskCreateWithoutTiersInput, ChallengeTaskUncheckedCreateWithoutTiersInput>
    connectOrCreate?: ChallengeTaskCreateOrConnectWithoutTiersInput
    upsert?: ChallengeTaskUpsertWithoutTiersInput
    connect?: ChallengeTaskWhereUniqueInput
    update?: XOR<XOR<ChallengeTaskUpdateToOneWithWhereWithoutTiersInput, ChallengeTaskUpdateWithoutTiersInput>, ChallengeTaskUncheckedUpdateWithoutTiersInput>
  }

  export type ChallengeCreateNestedOneWithoutTaskLogsInput = {
    create?: XOR<ChallengeCreateWithoutTaskLogsInput, ChallengeUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutTaskLogsInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaskLogsInput = {
    create?: XOR<UserCreateWithoutTaskLogsInput, UserUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeTaskCreateNestedOneWithoutLogsInput = {
    create?: XOR<ChallengeTaskCreateWithoutLogsInput, ChallengeTaskUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ChallengeTaskCreateOrConnectWithoutLogsInput
    connect?: ChallengeTaskWhereUniqueInput
  }

  export type ChallengeUpdateOneRequiredWithoutTaskLogsNestedInput = {
    create?: XOR<ChallengeCreateWithoutTaskLogsInput, ChallengeUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutTaskLogsInput
    upsert?: ChallengeUpsertWithoutTaskLogsInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutTaskLogsInput, ChallengeUpdateWithoutTaskLogsInput>, ChallengeUncheckedUpdateWithoutTaskLogsInput>
  }

  export type UserUpdateOneRequiredWithoutTaskLogsNestedInput = {
    create?: XOR<UserCreateWithoutTaskLogsInput, UserUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskLogsInput
    upsert?: UserUpsertWithoutTaskLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskLogsInput, UserUpdateWithoutTaskLogsInput>, UserUncheckedUpdateWithoutTaskLogsInput>
  }

  export type ChallengeTaskUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<ChallengeTaskCreateWithoutLogsInput, ChallengeTaskUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ChallengeTaskCreateOrConnectWithoutLogsInput
    upsert?: ChallengeTaskUpsertWithoutLogsInput
    connect?: ChallengeTaskWhereUniqueInput
    update?: XOR<XOR<ChallengeTaskUpdateToOneWithWhereWithoutLogsInput, ChallengeTaskUpdateWithoutLogsInput>, ChallengeTaskUncheckedUpdateWithoutLogsInput>
  }

  export type ChallengeCreateNestedOneWithoutDaySummariesInput = {
    create?: XOR<ChallengeCreateWithoutDaySummariesInput, ChallengeUncheckedCreateWithoutDaySummariesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutDaySummariesInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDaySummariesInput = {
    create?: XOR<UserCreateWithoutDaySummariesInput, UserUncheckedCreateWithoutDaySummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDaySummariesInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeUpdateOneRequiredWithoutDaySummariesNestedInput = {
    create?: XOR<ChallengeCreateWithoutDaySummariesInput, ChallengeUncheckedCreateWithoutDaySummariesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutDaySummariesInput
    upsert?: ChallengeUpsertWithoutDaySummariesInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutDaySummariesInput, ChallengeUpdateWithoutDaySummariesInput>, ChallengeUncheckedUpdateWithoutDaySummariesInput>
  }

  export type UserUpdateOneRequiredWithoutDaySummariesNestedInput = {
    create?: XOR<UserCreateWithoutDaySummariesInput, UserUncheckedCreateWithoutDaySummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDaySummariesInput
    upsert?: UserUpsertWithoutDaySummariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDaySummariesInput, UserUpdateWithoutDaySummariesInput>, UserUncheckedUpdateWithoutDaySummariesInput>
  }

  export type ChallengeCreateNestedOneWithoutWeeklyScoresInput = {
    create?: XOR<ChallengeCreateWithoutWeeklyScoresInput, ChallengeUncheckedCreateWithoutWeeklyScoresInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutWeeklyScoresInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWeeklyScoresInput = {
    create?: XOR<UserCreateWithoutWeeklyScoresInput, UserUncheckedCreateWithoutWeeklyScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyScoresInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeUpdateOneRequiredWithoutWeeklyScoresNestedInput = {
    create?: XOR<ChallengeCreateWithoutWeeklyScoresInput, ChallengeUncheckedCreateWithoutWeeklyScoresInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutWeeklyScoresInput
    upsert?: ChallengeUpsertWithoutWeeklyScoresInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutWeeklyScoresInput, ChallengeUpdateWithoutWeeklyScoresInput>, ChallengeUncheckedUpdateWithoutWeeklyScoresInput>
  }

  export type UserUpdateOneRequiredWithoutWeeklyScoresNestedInput = {
    create?: XOR<UserCreateWithoutWeeklyScoresInput, UserUncheckedCreateWithoutWeeklyScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyScoresInput
    upsert?: UserUpsertWithoutWeeklyScoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeeklyScoresInput, UserUpdateWithoutWeeklyScoresInput>, UserUncheckedUpdateWithoutWeeklyScoresInput>
  }

  export type ChallengeCreateNestedOneWithoutActivityInput = {
    create?: XOR<ChallengeCreateWithoutActivityInput, ChallengeUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutActivityInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActivityInput = {
    create?: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeUpdateOneRequiredWithoutActivityNestedInput = {
    create?: XOR<ChallengeCreateWithoutActivityInput, ChallengeUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutActivityInput
    upsert?: ChallengeUpsertWithoutActivityInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutActivityInput, ChallengeUpdateWithoutActivityInput>, ChallengeUncheckedUpdateWithoutActivityInput>
  }

  export type UserUpdateOneRequiredWithoutActivityNestedInput = {
    create?: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityInput
    upsert?: UserUpsertWithoutActivityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityInput, UserUpdateWithoutActivityInput>, UserUncheckedUpdateWithoutActivityInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeMemberCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    points?: number
    currentStreak?: number
    longestStreak?: number
    isAlcoholDrinker?: boolean
    challenge: ChallengeCreateNestedOneWithoutMembersInput
  }

  export type ChallengeMemberUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    joinedAt?: Date | string
    points?: number
    currentStreak?: number
    longestStreak?: number
    isAlcoholDrinker?: boolean
  }

  export type ChallengeMemberCreateOrConnectWithoutUserInput = {
    where: ChallengeMemberWhereUniqueInput
    create: XOR<ChallengeMemberCreateWithoutUserInput, ChallengeMemberUncheckedCreateWithoutUserInput>
  }

  export type ChallengeMemberCreateManyUserInputEnvelope = {
    data: ChallengeMemberCreateManyUserInput | ChallengeMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskLogCreateWithoutUserInput = {
    id?: string
    date: Date | string
    completed?: boolean
    value?: number
    challenge: ChallengeCreateNestedOneWithoutTaskLogsInput
    task: ChallengeTaskCreateNestedOneWithoutLogsInput
  }

  export type TaskLogUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    taskId: string
    date: Date | string
    completed?: boolean
    value?: number
  }

  export type TaskLogCreateOrConnectWithoutUserInput = {
    where: TaskLogWhereUniqueInput
    create: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput>
  }

  export type TaskLogCreateManyUserInputEnvelope = {
    data: TaskLogCreateManyUserInput | TaskLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DaySummaryCreateWithoutUserInput = {
    id?: string
    date: Date | string
    completedCount?: number
    totalCount?: number
    pointsAwarded?: number
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
    challenge: ChallengeCreateNestedOneWithoutDaySummariesInput
  }

  export type DaySummaryUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    date: Date | string
    completedCount?: number
    totalCount?: number
    pointsAwarded?: number
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
  }

  export type DaySummaryCreateOrConnectWithoutUserInput = {
    where: DaySummaryWhereUniqueInput
    create: XOR<DaySummaryCreateWithoutUserInput, DaySummaryUncheckedCreateWithoutUserInput>
  }

  export type DaySummaryCreateManyUserInputEnvelope = {
    data: DaySummaryCreateManyUserInput | DaySummaryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyScoreCreateWithoutUserInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    weekNumber: number
    points?: number
    challenge: ChallengeCreateNestedOneWithoutWeeklyScoresInput
  }

  export type WeeklyScoreUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    weekStart: Date | string
    weekEnd: Date | string
    weekNumber: number
    points?: number
  }

  export type WeeklyScoreCreateOrConnectWithoutUserInput = {
    where: WeeklyScoreWhereUniqueInput
    create: XOR<WeeklyScoreCreateWithoutUserInput, WeeklyScoreUncheckedCreateWithoutUserInput>
  }

  export type WeeklyScoreCreateManyUserInputEnvelope = {
    data: WeeklyScoreCreateManyUserInput | WeeklyScoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityEventCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    type: string
    title: string
    points?: number
    challenge: ChallengeCreateNestedOneWithoutActivityInput
  }

  export type ActivityEventUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    date?: Date | string
    type: string
    title: string
    points?: number
  }

  export type ActivityEventCreateOrConnectWithoutUserInput = {
    where: ActivityEventWhereUniqueInput
    create: XOR<ActivityEventCreateWithoutUserInput, ActivityEventUncheckedCreateWithoutUserInput>
  }

  export type ActivityEventCreateManyUserInputEnvelope = {
    data: ActivityEventCreateManyUserInput | ActivityEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeCreateWithoutAdminInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    createdAt?: Date | string
    members?: ChallengeMemberCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    createdAt?: Date | string
    members?: ChallengeMemberUncheckedCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskUncheckedCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutAdminInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutAdminInput, ChallengeUncheckedCreateWithoutAdminInput>
  }

  export type ChallengeCreateManyAdminInputEnvelope = {
    data: ChallengeCreateManyAdminInput | ChallengeCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ChallengeMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ChallengeMemberWhereUniqueInput
    update: XOR<ChallengeMemberUpdateWithoutUserInput, ChallengeMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ChallengeMemberCreateWithoutUserInput, ChallengeMemberUncheckedCreateWithoutUserInput>
  }

  export type ChallengeMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ChallengeMemberWhereUniqueInput
    data: XOR<ChallengeMemberUpdateWithoutUserInput, ChallengeMemberUncheckedUpdateWithoutUserInput>
  }

  export type ChallengeMemberUpdateManyWithWhereWithoutUserInput = {
    where: ChallengeMemberScalarWhereInput
    data: XOR<ChallengeMemberUpdateManyMutationInput, ChallengeMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ChallengeMemberScalarWhereInput = {
    AND?: ChallengeMemberScalarWhereInput | ChallengeMemberScalarWhereInput[]
    OR?: ChallengeMemberScalarWhereInput[]
    NOT?: ChallengeMemberScalarWhereInput | ChallengeMemberScalarWhereInput[]
    id?: StringFilter<"ChallengeMember"> | string
    challengeId?: StringFilter<"ChallengeMember"> | string
    userId?: StringFilter<"ChallengeMember"> | string
    joinedAt?: DateTimeFilter<"ChallengeMember"> | Date | string
    points?: IntFilter<"ChallengeMember"> | number
    currentStreak?: IntFilter<"ChallengeMember"> | number
    longestStreak?: IntFilter<"ChallengeMember"> | number
    isAlcoholDrinker?: BoolFilter<"ChallengeMember"> | boolean
  }

  export type TaskLogUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskLogWhereUniqueInput
    update: XOR<TaskLogUpdateWithoutUserInput, TaskLogUncheckedUpdateWithoutUserInput>
    create: XOR<TaskLogCreateWithoutUserInput, TaskLogUncheckedCreateWithoutUserInput>
  }

  export type TaskLogUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskLogWhereUniqueInput
    data: XOR<TaskLogUpdateWithoutUserInput, TaskLogUncheckedUpdateWithoutUserInput>
  }

  export type TaskLogUpdateManyWithWhereWithoutUserInput = {
    where: TaskLogScalarWhereInput
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskLogScalarWhereInput = {
    AND?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
    OR?: TaskLogScalarWhereInput[]
    NOT?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
    id?: StringFilter<"TaskLog"> | string
    challengeId?: StringFilter<"TaskLog"> | string
    userId?: StringFilter<"TaskLog"> | string
    taskId?: StringFilter<"TaskLog"> | string
    date?: DateTimeFilter<"TaskLog"> | Date | string
    completed?: BoolFilter<"TaskLog"> | boolean
    value?: FloatFilter<"TaskLog"> | number
  }

  export type DaySummaryUpsertWithWhereUniqueWithoutUserInput = {
    where: DaySummaryWhereUniqueInput
    update: XOR<DaySummaryUpdateWithoutUserInput, DaySummaryUncheckedUpdateWithoutUserInput>
    create: XOR<DaySummaryCreateWithoutUserInput, DaySummaryUncheckedCreateWithoutUserInput>
  }

  export type DaySummaryUpdateWithWhereUniqueWithoutUserInput = {
    where: DaySummaryWhereUniqueInput
    data: XOR<DaySummaryUpdateWithoutUserInput, DaySummaryUncheckedUpdateWithoutUserInput>
  }

  export type DaySummaryUpdateManyWithWhereWithoutUserInput = {
    where: DaySummaryScalarWhereInput
    data: XOR<DaySummaryUpdateManyMutationInput, DaySummaryUncheckedUpdateManyWithoutUserInput>
  }

  export type DaySummaryScalarWhereInput = {
    AND?: DaySummaryScalarWhereInput | DaySummaryScalarWhereInput[]
    OR?: DaySummaryScalarWhereInput[]
    NOT?: DaySummaryScalarWhereInput | DaySummaryScalarWhereInput[]
    id?: StringFilter<"DaySummary"> | string
    challengeId?: StringFilter<"DaySummary"> | string
    userId?: StringFilter<"DaySummary"> | string
    date?: DateTimeFilter<"DaySummary"> | Date | string
    completedCount?: IntFilter<"DaySummary"> | number
    totalCount?: IntFilter<"DaySummary"> | number
    pointsAwarded?: IntFilter<"DaySummary"> | number
    dailyBonusAwarded?: BoolFilter<"DaySummary"> | boolean
    streakBonusAwarded?: BoolFilter<"DaySummary"> | boolean
  }

  export type WeeklyScoreUpsertWithWhereUniqueWithoutUserInput = {
    where: WeeklyScoreWhereUniqueInput
    update: XOR<WeeklyScoreUpdateWithoutUserInput, WeeklyScoreUncheckedUpdateWithoutUserInput>
    create: XOR<WeeklyScoreCreateWithoutUserInput, WeeklyScoreUncheckedCreateWithoutUserInput>
  }

  export type WeeklyScoreUpdateWithWhereUniqueWithoutUserInput = {
    where: WeeklyScoreWhereUniqueInput
    data: XOR<WeeklyScoreUpdateWithoutUserInput, WeeklyScoreUncheckedUpdateWithoutUserInput>
  }

  export type WeeklyScoreUpdateManyWithWhereWithoutUserInput = {
    where: WeeklyScoreScalarWhereInput
    data: XOR<WeeklyScoreUpdateManyMutationInput, WeeklyScoreUncheckedUpdateManyWithoutUserInput>
  }

  export type WeeklyScoreScalarWhereInput = {
    AND?: WeeklyScoreScalarWhereInput | WeeklyScoreScalarWhereInput[]
    OR?: WeeklyScoreScalarWhereInput[]
    NOT?: WeeklyScoreScalarWhereInput | WeeklyScoreScalarWhereInput[]
    id?: StringFilter<"WeeklyScore"> | string
    challengeId?: StringFilter<"WeeklyScore"> | string
    userId?: StringFilter<"WeeklyScore"> | string
    weekStart?: DateTimeFilter<"WeeklyScore"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyScore"> | Date | string
    weekNumber?: IntFilter<"WeeklyScore"> | number
    points?: IntFilter<"WeeklyScore"> | number
  }

  export type ActivityEventUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityEventWhereUniqueInput
    update: XOR<ActivityEventUpdateWithoutUserInput, ActivityEventUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityEventCreateWithoutUserInput, ActivityEventUncheckedCreateWithoutUserInput>
  }

  export type ActivityEventUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityEventWhereUniqueInput
    data: XOR<ActivityEventUpdateWithoutUserInput, ActivityEventUncheckedUpdateWithoutUserInput>
  }

  export type ActivityEventUpdateManyWithWhereWithoutUserInput = {
    where: ActivityEventScalarWhereInput
    data: XOR<ActivityEventUpdateManyMutationInput, ActivityEventUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityEventScalarWhereInput = {
    AND?: ActivityEventScalarWhereInput | ActivityEventScalarWhereInput[]
    OR?: ActivityEventScalarWhereInput[]
    NOT?: ActivityEventScalarWhereInput | ActivityEventScalarWhereInput[]
    id?: StringFilter<"ActivityEvent"> | string
    challengeId?: StringFilter<"ActivityEvent"> | string
    userId?: StringFilter<"ActivityEvent"> | string
    date?: DateTimeFilter<"ActivityEvent"> | Date | string
    type?: StringFilter<"ActivityEvent"> | string
    title?: StringFilter<"ActivityEvent"> | string
    points?: IntFilter<"ActivityEvent"> | number
  }

  export type ChallengeUpsertWithWhereUniqueWithoutAdminInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutAdminInput, ChallengeUncheckedUpdateWithoutAdminInput>
    create: XOR<ChallengeCreateWithoutAdminInput, ChallengeUncheckedCreateWithoutAdminInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutAdminInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutAdminInput, ChallengeUncheckedUpdateWithoutAdminInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutAdminInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutAdminInput>
  }

  export type ChallengeScalarWhereInput = {
    AND?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    OR?: ChallengeScalarWhereInput[]
    NOT?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    id?: StringFilter<"Challenge"> | string
    name?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    startDate?: DateTimeFilter<"Challenge"> | Date | string
    endDate?: DateTimeFilter<"Challenge"> | Date | string
    isPublic?: BoolFilter<"Challenge"> | boolean
    inviteCode?: StringFilter<"Challenge"> | string
    maxMembers?: IntNullableFilter<"Challenge"> | number | null
    isActive?: BoolFilter<"Challenge"> | boolean
    ended?: BoolFilter<"Challenge"> | boolean
    adminId?: StringFilter<"Challenge"> | string
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutUserInput
    activity?: ActivityEventCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberUncheckedCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutUserInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUncheckedUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutUserInput
    activity?: ActivityEventCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberUncheckedCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutUserInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUncheckedUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutOwnedChallengesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutUserInput
    activity?: ActivityEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedChallengesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberUncheckedCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutUserInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedChallengesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedChallengesInput, UserUncheckedCreateWithoutOwnedChallengesInput>
  }

  export type ChallengeMemberCreateWithoutChallengeInput = {
    id?: string
    joinedAt?: Date | string
    points?: number
    currentStreak?: number
    longestStreak?: number
    isAlcoholDrinker?: boolean
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type ChallengeMemberUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    points?: number
    currentStreak?: number
    longestStreak?: number
    isAlcoholDrinker?: boolean
  }

  export type ChallengeMemberCreateOrConnectWithoutChallengeInput = {
    where: ChallengeMemberWhereUniqueInput
    create: XOR<ChallengeMemberCreateWithoutChallengeInput, ChallengeMemberUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeMemberCreateManyChallengeInputEnvelope = {
    data: ChallengeMemberCreateManyChallengeInput | ChallengeMemberCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeTaskCreateWithoutChallengeInput = {
    id?: string
    name: string
    type: string
    inputType: string
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points: number
    target?: number | null
    tiers?: TaskTierCreateNestedManyWithoutTaskInput
    logs?: TaskLogCreateNestedManyWithoutTaskInput
  }

  export type ChallengeTaskUncheckedCreateWithoutChallengeInput = {
    id?: string
    name: string
    type: string
    inputType: string
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points: number
    target?: number | null
    tiers?: TaskTierUncheckedCreateNestedManyWithoutTaskInput
    logs?: TaskLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type ChallengeTaskCreateOrConnectWithoutChallengeInput = {
    where: ChallengeTaskWhereUniqueInput
    create: XOR<ChallengeTaskCreateWithoutChallengeInput, ChallengeTaskUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeTaskCreateManyChallengeInputEnvelope = {
    data: ChallengeTaskCreateManyChallengeInput | ChallengeTaskCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type TaskLogCreateWithoutChallengeInput = {
    id?: string
    date: Date | string
    completed?: boolean
    value?: number
    user: UserCreateNestedOneWithoutTaskLogsInput
    task: ChallengeTaskCreateNestedOneWithoutLogsInput
  }

  export type TaskLogUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    taskId: string
    date: Date | string
    completed?: boolean
    value?: number
  }

  export type TaskLogCreateOrConnectWithoutChallengeInput = {
    where: TaskLogWhereUniqueInput
    create: XOR<TaskLogCreateWithoutChallengeInput, TaskLogUncheckedCreateWithoutChallengeInput>
  }

  export type TaskLogCreateManyChallengeInputEnvelope = {
    data: TaskLogCreateManyChallengeInput | TaskLogCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type DaySummaryCreateWithoutChallengeInput = {
    id?: string
    date: Date | string
    completedCount?: number
    totalCount?: number
    pointsAwarded?: number
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
    user: UserCreateNestedOneWithoutDaySummariesInput
  }

  export type DaySummaryUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    date: Date | string
    completedCount?: number
    totalCount?: number
    pointsAwarded?: number
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
  }

  export type DaySummaryCreateOrConnectWithoutChallengeInput = {
    where: DaySummaryWhereUniqueInput
    create: XOR<DaySummaryCreateWithoutChallengeInput, DaySummaryUncheckedCreateWithoutChallengeInput>
  }

  export type DaySummaryCreateManyChallengeInputEnvelope = {
    data: DaySummaryCreateManyChallengeInput | DaySummaryCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyScoreCreateWithoutChallengeInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    weekNumber: number
    points?: number
    user: UserCreateNestedOneWithoutWeeklyScoresInput
  }

  export type WeeklyScoreUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    weekStart: Date | string
    weekEnd: Date | string
    weekNumber: number
    points?: number
  }

  export type WeeklyScoreCreateOrConnectWithoutChallengeInput = {
    where: WeeklyScoreWhereUniqueInput
    create: XOR<WeeklyScoreCreateWithoutChallengeInput, WeeklyScoreUncheckedCreateWithoutChallengeInput>
  }

  export type WeeklyScoreCreateManyChallengeInputEnvelope = {
    data: WeeklyScoreCreateManyChallengeInput | WeeklyScoreCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type ActivityEventCreateWithoutChallengeInput = {
    id?: string
    date?: Date | string
    type: string
    title: string
    points?: number
    user: UserCreateNestedOneWithoutActivityInput
  }

  export type ActivityEventUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    date?: Date | string
    type: string
    title: string
    points?: number
  }

  export type ActivityEventCreateOrConnectWithoutChallengeInput = {
    where: ActivityEventWhereUniqueInput
    create: XOR<ActivityEventCreateWithoutChallengeInput, ActivityEventUncheckedCreateWithoutChallengeInput>
  }

  export type ActivityEventCreateManyChallengeInputEnvelope = {
    data: ActivityEventCreateManyChallengeInput | ActivityEventCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedChallengesInput = {
    update: XOR<UserUpdateWithoutOwnedChallengesInput, UserUncheckedUpdateWithoutOwnedChallengesInput>
    create: XOR<UserCreateWithoutOwnedChallengesInput, UserUncheckedCreateWithoutOwnedChallengesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedChallengesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedChallengesInput, UserUncheckedUpdateWithoutOwnedChallengesInput>
  }

  export type UserUpdateWithoutOwnedChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUncheckedUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengeMemberUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeMemberWhereUniqueInput
    update: XOR<ChallengeMemberUpdateWithoutChallengeInput, ChallengeMemberUncheckedUpdateWithoutChallengeInput>
    create: XOR<ChallengeMemberCreateWithoutChallengeInput, ChallengeMemberUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeMemberUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeMemberWhereUniqueInput
    data: XOR<ChallengeMemberUpdateWithoutChallengeInput, ChallengeMemberUncheckedUpdateWithoutChallengeInput>
  }

  export type ChallengeMemberUpdateManyWithWhereWithoutChallengeInput = {
    where: ChallengeMemberScalarWhereInput
    data: XOR<ChallengeMemberUpdateManyMutationInput, ChallengeMemberUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ChallengeTaskUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeTaskWhereUniqueInput
    update: XOR<ChallengeTaskUpdateWithoutChallengeInput, ChallengeTaskUncheckedUpdateWithoutChallengeInput>
    create: XOR<ChallengeTaskCreateWithoutChallengeInput, ChallengeTaskUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeTaskUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeTaskWhereUniqueInput
    data: XOR<ChallengeTaskUpdateWithoutChallengeInput, ChallengeTaskUncheckedUpdateWithoutChallengeInput>
  }

  export type ChallengeTaskUpdateManyWithWhereWithoutChallengeInput = {
    where: ChallengeTaskScalarWhereInput
    data: XOR<ChallengeTaskUpdateManyMutationInput, ChallengeTaskUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ChallengeTaskScalarWhereInput = {
    AND?: ChallengeTaskScalarWhereInput | ChallengeTaskScalarWhereInput[]
    OR?: ChallengeTaskScalarWhereInput[]
    NOT?: ChallengeTaskScalarWhereInput | ChallengeTaskScalarWhereInput[]
    id?: StringFilter<"ChallengeTask"> | string
    challengeId?: StringFilter<"ChallengeTask"> | string
    name?: StringFilter<"ChallengeTask"> | string
    type?: StringFilter<"ChallengeTask"> | string
    inputType?: StringFilter<"ChallengeTask"> | string
    isRuleBreaker?: BoolFilter<"ChallengeTask"> | boolean
    isAlcoholTask?: BoolFilter<"ChallengeTask"> | boolean
    points?: IntFilter<"ChallengeTask"> | number
    target?: FloatNullableFilter<"ChallengeTask"> | number | null
  }

  export type TaskLogUpsertWithWhereUniqueWithoutChallengeInput = {
    where: TaskLogWhereUniqueInput
    update: XOR<TaskLogUpdateWithoutChallengeInput, TaskLogUncheckedUpdateWithoutChallengeInput>
    create: XOR<TaskLogCreateWithoutChallengeInput, TaskLogUncheckedCreateWithoutChallengeInput>
  }

  export type TaskLogUpdateWithWhereUniqueWithoutChallengeInput = {
    where: TaskLogWhereUniqueInput
    data: XOR<TaskLogUpdateWithoutChallengeInput, TaskLogUncheckedUpdateWithoutChallengeInput>
  }

  export type TaskLogUpdateManyWithWhereWithoutChallengeInput = {
    where: TaskLogScalarWhereInput
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyWithoutChallengeInput>
  }

  export type DaySummaryUpsertWithWhereUniqueWithoutChallengeInput = {
    where: DaySummaryWhereUniqueInput
    update: XOR<DaySummaryUpdateWithoutChallengeInput, DaySummaryUncheckedUpdateWithoutChallengeInput>
    create: XOR<DaySummaryCreateWithoutChallengeInput, DaySummaryUncheckedCreateWithoutChallengeInput>
  }

  export type DaySummaryUpdateWithWhereUniqueWithoutChallengeInput = {
    where: DaySummaryWhereUniqueInput
    data: XOR<DaySummaryUpdateWithoutChallengeInput, DaySummaryUncheckedUpdateWithoutChallengeInput>
  }

  export type DaySummaryUpdateManyWithWhereWithoutChallengeInput = {
    where: DaySummaryScalarWhereInput
    data: XOR<DaySummaryUpdateManyMutationInput, DaySummaryUncheckedUpdateManyWithoutChallengeInput>
  }

  export type WeeklyScoreUpsertWithWhereUniqueWithoutChallengeInput = {
    where: WeeklyScoreWhereUniqueInput
    update: XOR<WeeklyScoreUpdateWithoutChallengeInput, WeeklyScoreUncheckedUpdateWithoutChallengeInput>
    create: XOR<WeeklyScoreCreateWithoutChallengeInput, WeeklyScoreUncheckedCreateWithoutChallengeInput>
  }

  export type WeeklyScoreUpdateWithWhereUniqueWithoutChallengeInput = {
    where: WeeklyScoreWhereUniqueInput
    data: XOR<WeeklyScoreUpdateWithoutChallengeInput, WeeklyScoreUncheckedUpdateWithoutChallengeInput>
  }

  export type WeeklyScoreUpdateManyWithWhereWithoutChallengeInput = {
    where: WeeklyScoreScalarWhereInput
    data: XOR<WeeklyScoreUpdateManyMutationInput, WeeklyScoreUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ActivityEventUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ActivityEventWhereUniqueInput
    update: XOR<ActivityEventUpdateWithoutChallengeInput, ActivityEventUncheckedUpdateWithoutChallengeInput>
    create: XOR<ActivityEventCreateWithoutChallengeInput, ActivityEventUncheckedCreateWithoutChallengeInput>
  }

  export type ActivityEventUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ActivityEventWhereUniqueInput
    data: XOR<ActivityEventUpdateWithoutChallengeInput, ActivityEventUncheckedUpdateWithoutChallengeInput>
  }

  export type ActivityEventUpdateManyWithWhereWithoutChallengeInput = {
    where: ActivityEventScalarWhereInput
    data: XOR<ActivityEventUpdateManyMutationInput, ActivityEventUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ChallengeCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutOwnedChallengesInput
    tasks?: ChallengeTaskCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    adminId: string
    createdAt?: Date | string
    tasks?: ChallengeTaskUncheckedCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutMembersInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutMembersInput, ChallengeUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutUserInput
    activity?: ActivityEventCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutUserInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type ChallengeUpsertWithoutMembersInput = {
    update: XOR<ChallengeUpdateWithoutMembersInput, ChallengeUncheckedUpdateWithoutMembersInput>
    create: XOR<ChallengeCreateWithoutMembersInput, ChallengeUncheckedCreateWithoutMembersInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutMembersInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutMembersInput, ChallengeUncheckedUpdateWithoutMembersInput>
  }

  export type ChallengeUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutOwnedChallengesNestedInput
    tasks?: ChallengeTaskUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: ChallengeTaskUncheckedUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ChallengeCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutOwnedChallengesInput
    members?: ChallengeMemberCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    adminId: string
    createdAt?: Date | string
    members?: ChallengeMemberUncheckedCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutTasksInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutTasksInput, ChallengeUncheckedCreateWithoutTasksInput>
  }

  export type TaskTierCreateWithoutTaskInput = {
    id?: string
    threshold: number
    points: number
  }

  export type TaskTierUncheckedCreateWithoutTaskInput = {
    id?: string
    threshold: number
    points: number
  }

  export type TaskTierCreateOrConnectWithoutTaskInput = {
    where: TaskTierWhereUniqueInput
    create: XOR<TaskTierCreateWithoutTaskInput, TaskTierUncheckedCreateWithoutTaskInput>
  }

  export type TaskTierCreateManyTaskInputEnvelope = {
    data: TaskTierCreateManyTaskInput | TaskTierCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskLogCreateWithoutTaskInput = {
    id?: string
    date: Date | string
    completed?: boolean
    value?: number
    challenge: ChallengeCreateNestedOneWithoutTaskLogsInput
    user: UserCreateNestedOneWithoutTaskLogsInput
  }

  export type TaskLogUncheckedCreateWithoutTaskInput = {
    id?: string
    challengeId: string
    userId: string
    date: Date | string
    completed?: boolean
    value?: number
  }

  export type TaskLogCreateOrConnectWithoutTaskInput = {
    where: TaskLogWhereUniqueInput
    create: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput>
  }

  export type TaskLogCreateManyTaskInputEnvelope = {
    data: TaskLogCreateManyTaskInput | TaskLogCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeUpsertWithoutTasksInput = {
    update: XOR<ChallengeUpdateWithoutTasksInput, ChallengeUncheckedUpdateWithoutTasksInput>
    create: XOR<ChallengeCreateWithoutTasksInput, ChallengeUncheckedCreateWithoutTasksInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutTasksInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutTasksInput, ChallengeUncheckedUpdateWithoutTasksInput>
  }

  export type ChallengeUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutOwnedChallengesNestedInput
    members?: ChallengeMemberUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChallengeMemberUncheckedUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type TaskTierUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskTierWhereUniqueInput
    update: XOR<TaskTierUpdateWithoutTaskInput, TaskTierUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskTierCreateWithoutTaskInput, TaskTierUncheckedCreateWithoutTaskInput>
  }

  export type TaskTierUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskTierWhereUniqueInput
    data: XOR<TaskTierUpdateWithoutTaskInput, TaskTierUncheckedUpdateWithoutTaskInput>
  }

  export type TaskTierUpdateManyWithWhereWithoutTaskInput = {
    where: TaskTierScalarWhereInput
    data: XOR<TaskTierUpdateManyMutationInput, TaskTierUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskTierScalarWhereInput = {
    AND?: TaskTierScalarWhereInput | TaskTierScalarWhereInput[]
    OR?: TaskTierScalarWhereInput[]
    NOT?: TaskTierScalarWhereInput | TaskTierScalarWhereInput[]
    id?: StringFilter<"TaskTier"> | string
    taskId?: StringFilter<"TaskTier"> | string
    threshold?: FloatFilter<"TaskTier"> | number
    points?: IntFilter<"TaskTier"> | number
  }

  export type TaskLogUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskLogWhereUniqueInput
    update: XOR<TaskLogUpdateWithoutTaskInput, TaskLogUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskLogCreateWithoutTaskInput, TaskLogUncheckedCreateWithoutTaskInput>
  }

  export type TaskLogUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskLogWhereUniqueInput
    data: XOR<TaskLogUpdateWithoutTaskInput, TaskLogUncheckedUpdateWithoutTaskInput>
  }

  export type TaskLogUpdateManyWithWhereWithoutTaskInput = {
    where: TaskLogScalarWhereInput
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyWithoutTaskInput>
  }

  export type ChallengeTaskCreateWithoutTiersInput = {
    id?: string
    name: string
    type: string
    inputType: string
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points: number
    target?: number | null
    challenge: ChallengeCreateNestedOneWithoutTasksInput
    logs?: TaskLogCreateNestedManyWithoutTaskInput
  }

  export type ChallengeTaskUncheckedCreateWithoutTiersInput = {
    id?: string
    challengeId: string
    name: string
    type: string
    inputType: string
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points: number
    target?: number | null
    logs?: TaskLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type ChallengeTaskCreateOrConnectWithoutTiersInput = {
    where: ChallengeTaskWhereUniqueInput
    create: XOR<ChallengeTaskCreateWithoutTiersInput, ChallengeTaskUncheckedCreateWithoutTiersInput>
  }

  export type ChallengeTaskUpsertWithoutTiersInput = {
    update: XOR<ChallengeTaskUpdateWithoutTiersInput, ChallengeTaskUncheckedUpdateWithoutTiersInput>
    create: XOR<ChallengeTaskCreateWithoutTiersInput, ChallengeTaskUncheckedCreateWithoutTiersInput>
    where?: ChallengeTaskWhereInput
  }

  export type ChallengeTaskUpdateToOneWithWhereWithoutTiersInput = {
    where?: ChallengeTaskWhereInput
    data: XOR<ChallengeTaskUpdateWithoutTiersInput, ChallengeTaskUncheckedUpdateWithoutTiersInput>
  }

  export type ChallengeTaskUpdateWithoutTiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    inputType?: StringFieldUpdateOperationsInput | string
    isRuleBreaker?: BoolFieldUpdateOperationsInput | boolean
    isAlcoholTask?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    challenge?: ChallengeUpdateOneRequiredWithoutTasksNestedInput
    logs?: TaskLogUpdateManyWithoutTaskNestedInput
  }

  export type ChallengeTaskUncheckedUpdateWithoutTiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    inputType?: StringFieldUpdateOperationsInput | string
    isRuleBreaker?: BoolFieldUpdateOperationsInput | boolean
    isAlcoholTask?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    logs?: TaskLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type ChallengeCreateWithoutTaskLogsInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutOwnedChallengesInput
    members?: ChallengeMemberCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutTaskLogsInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    adminId: string
    createdAt?: Date | string
    members?: ChallengeMemberUncheckedCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskUncheckedCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutTaskLogsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutTaskLogsInput, ChallengeUncheckedCreateWithoutTaskLogsInput>
  }

  export type UserCreateWithoutTaskLogsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutUserInput
    activity?: ActivityEventCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutTaskLogsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberUncheckedCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutUserInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutTaskLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskLogsInput, UserUncheckedCreateWithoutTaskLogsInput>
  }

  export type ChallengeTaskCreateWithoutLogsInput = {
    id?: string
    name: string
    type: string
    inputType: string
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points: number
    target?: number | null
    challenge: ChallengeCreateNestedOneWithoutTasksInput
    tiers?: TaskTierCreateNestedManyWithoutTaskInput
  }

  export type ChallengeTaskUncheckedCreateWithoutLogsInput = {
    id?: string
    challengeId: string
    name: string
    type: string
    inputType: string
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points: number
    target?: number | null
    tiers?: TaskTierUncheckedCreateNestedManyWithoutTaskInput
  }

  export type ChallengeTaskCreateOrConnectWithoutLogsInput = {
    where: ChallengeTaskWhereUniqueInput
    create: XOR<ChallengeTaskCreateWithoutLogsInput, ChallengeTaskUncheckedCreateWithoutLogsInput>
  }

  export type ChallengeUpsertWithoutTaskLogsInput = {
    update: XOR<ChallengeUpdateWithoutTaskLogsInput, ChallengeUncheckedUpdateWithoutTaskLogsInput>
    create: XOR<ChallengeCreateWithoutTaskLogsInput, ChallengeUncheckedCreateWithoutTaskLogsInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutTaskLogsInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutTaskLogsInput, ChallengeUncheckedUpdateWithoutTaskLogsInput>
  }

  export type ChallengeUpdateWithoutTaskLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutOwnedChallengesNestedInput
    members?: ChallengeMemberUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutTaskLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChallengeMemberUncheckedUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUncheckedUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserUpsertWithoutTaskLogsInput = {
    update: XOR<UserUpdateWithoutTaskLogsInput, UserUncheckedUpdateWithoutTaskLogsInput>
    create: XOR<UserCreateWithoutTaskLogsInput, UserUncheckedCreateWithoutTaskLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskLogsInput, UserUncheckedUpdateWithoutTaskLogsInput>
  }

  export type UserUpdateWithoutTaskLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUncheckedUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ChallengeTaskUpsertWithoutLogsInput = {
    update: XOR<ChallengeTaskUpdateWithoutLogsInput, ChallengeTaskUncheckedUpdateWithoutLogsInput>
    create: XOR<ChallengeTaskCreateWithoutLogsInput, ChallengeTaskUncheckedCreateWithoutLogsInput>
    where?: ChallengeTaskWhereInput
  }

  export type ChallengeTaskUpdateToOneWithWhereWithoutLogsInput = {
    where?: ChallengeTaskWhereInput
    data: XOR<ChallengeTaskUpdateWithoutLogsInput, ChallengeTaskUncheckedUpdateWithoutLogsInput>
  }

  export type ChallengeTaskUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    inputType?: StringFieldUpdateOperationsInput | string
    isRuleBreaker?: BoolFieldUpdateOperationsInput | boolean
    isAlcoholTask?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    challenge?: ChallengeUpdateOneRequiredWithoutTasksNestedInput
    tiers?: TaskTierUpdateManyWithoutTaskNestedInput
  }

  export type ChallengeTaskUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    inputType?: StringFieldUpdateOperationsInput | string
    isRuleBreaker?: BoolFieldUpdateOperationsInput | boolean
    isAlcoholTask?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    tiers?: TaskTierUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type ChallengeCreateWithoutDaySummariesInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutOwnedChallengesInput
    members?: ChallengeMemberCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutDaySummariesInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    adminId: string
    createdAt?: Date | string
    members?: ChallengeMemberUncheckedCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskUncheckedCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutDaySummariesInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutDaySummariesInput, ChallengeUncheckedCreateWithoutDaySummariesInput>
  }

  export type UserCreateWithoutDaySummariesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutUserInput
    activity?: ActivityEventCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutDaySummariesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberUncheckedCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutUserInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutDaySummariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDaySummariesInput, UserUncheckedCreateWithoutDaySummariesInput>
  }

  export type ChallengeUpsertWithoutDaySummariesInput = {
    update: XOR<ChallengeUpdateWithoutDaySummariesInput, ChallengeUncheckedUpdateWithoutDaySummariesInput>
    create: XOR<ChallengeCreateWithoutDaySummariesInput, ChallengeUncheckedCreateWithoutDaySummariesInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutDaySummariesInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutDaySummariesInput, ChallengeUncheckedUpdateWithoutDaySummariesInput>
  }

  export type ChallengeUpdateWithoutDaySummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutOwnedChallengesNestedInput
    members?: ChallengeMemberUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutDaySummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChallengeMemberUncheckedUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUncheckedUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserUpsertWithoutDaySummariesInput = {
    update: XOR<UserUpdateWithoutDaySummariesInput, UserUncheckedUpdateWithoutDaySummariesInput>
    create: XOR<UserCreateWithoutDaySummariesInput, UserUncheckedCreateWithoutDaySummariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDaySummariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDaySummariesInput, UserUncheckedUpdateWithoutDaySummariesInput>
  }

  export type UserUpdateWithoutDaySummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutDaySummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUncheckedUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ChallengeCreateWithoutWeeklyScoresInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutOwnedChallengesInput
    members?: ChallengeMemberCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutWeeklyScoresInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    adminId: string
    createdAt?: Date | string
    members?: ChallengeMemberUncheckedCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskUncheckedCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutChallengeInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutWeeklyScoresInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutWeeklyScoresInput, ChallengeUncheckedCreateWithoutWeeklyScoresInput>
  }

  export type UserCreateWithoutWeeklyScoresInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryCreateNestedManyWithoutUserInput
    activity?: ActivityEventCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutWeeklyScoresInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberUncheckedCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutUserInput
    activity?: ActivityEventUncheckedCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutWeeklyScoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeeklyScoresInput, UserUncheckedCreateWithoutWeeklyScoresInput>
  }

  export type ChallengeUpsertWithoutWeeklyScoresInput = {
    update: XOR<ChallengeUpdateWithoutWeeklyScoresInput, ChallengeUncheckedUpdateWithoutWeeklyScoresInput>
    create: XOR<ChallengeCreateWithoutWeeklyScoresInput, ChallengeUncheckedCreateWithoutWeeklyScoresInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutWeeklyScoresInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutWeeklyScoresInput, ChallengeUncheckedUpdateWithoutWeeklyScoresInput>
  }

  export type ChallengeUpdateWithoutWeeklyScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutOwnedChallengesNestedInput
    members?: ChallengeMemberUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutWeeklyScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChallengeMemberUncheckedUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUncheckedUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserUpsertWithoutWeeklyScoresInput = {
    update: XOR<UserUpdateWithoutWeeklyScoresInput, UserUncheckedUpdateWithoutWeeklyScoresInput>
    create: XOR<UserCreateWithoutWeeklyScoresInput, UserUncheckedCreateWithoutWeeklyScoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeeklyScoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeeklyScoresInput, UserUncheckedUpdateWithoutWeeklyScoresInput>
  }

  export type UserUpdateWithoutWeeklyScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutWeeklyScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUncheckedUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutUserNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ChallengeCreateWithoutActivityInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutOwnedChallengesInput
    members?: ChallengeMemberCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutActivityInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    adminId: string
    createdAt?: Date | string
    members?: ChallengeMemberUncheckedCreateNestedManyWithoutChallengeInput
    tasks?: ChallengeTaskUncheckedCreateNestedManyWithoutChallengeInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutChallengeInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutChallengeInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutActivityInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutActivityInput, ChallengeUncheckedCreateWithoutActivityInput>
  }

  export type UserCreateWithoutActivityInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutActivityInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    displayName?: string | null
    totalPoints?: number
    currentStreak?: number
    longestStreak?: number
    mantra?: string | null
    streakTokens?: number
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: ChallengeMemberUncheckedCreateNestedManyWithoutUserInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutUserInput
    daySummaries?: DaySummaryUncheckedCreateNestedManyWithoutUserInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutUserInput
    ownedChallenges?: ChallengeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutActivityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
  }

  export type ChallengeUpsertWithoutActivityInput = {
    update: XOR<ChallengeUpdateWithoutActivityInput, ChallengeUncheckedUpdateWithoutActivityInput>
    create: XOR<ChallengeCreateWithoutActivityInput, ChallengeUncheckedCreateWithoutActivityInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutActivityInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutActivityInput, ChallengeUncheckedUpdateWithoutActivityInput>
  }

  export type ChallengeUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutOwnedChallengesNestedInput
    members?: ChallengeMemberUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChallengeMemberUncheckedUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUncheckedUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserUpsertWithoutActivityInput = {
    update: XOR<UserUpdateWithoutActivityInput, UserUncheckedUpdateWithoutActivityInput>
    create: XOR<UserCreateWithoutActivityInput, UserUncheckedCreateWithoutActivityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityInput, UserUncheckedUpdateWithoutActivityInput>
  }

  export type UserUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    mantra?: NullableStringFieldUpdateOperationsInput | string | null
    streakTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: ChallengeMemberUncheckedUpdateManyWithoutUserNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutUserNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutUserNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutUserNestedInput
    ownedChallenges?: ChallengeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ChallengeMemberCreateManyUserInput = {
    id?: string
    challengeId: string
    joinedAt?: Date | string
    points?: number
    currentStreak?: number
    longestStreak?: number
    isAlcoholDrinker?: boolean
  }

  export type TaskLogCreateManyUserInput = {
    id?: string
    challengeId: string
    taskId: string
    date: Date | string
    completed?: boolean
    value?: number
  }

  export type DaySummaryCreateManyUserInput = {
    id?: string
    challengeId: string
    date: Date | string
    completedCount?: number
    totalCount?: number
    pointsAwarded?: number
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
  }

  export type WeeklyScoreCreateManyUserInput = {
    id?: string
    challengeId: string
    weekStart: Date | string
    weekEnd: Date | string
    weekNumber: number
    points?: number
  }

  export type ActivityEventCreateManyUserInput = {
    id?: string
    challengeId: string
    date?: Date | string
    type: string
    title: string
    points?: number
  }

  export type ChallengeCreateManyAdminInput = {
    id?: string
    name: string
    description?: string
    startDate: Date | string
    endDate: Date | string
    isPublic?: boolean
    inviteCode: string
    maxMembers?: number | null
    isActive?: boolean
    ended?: boolean
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    isAlcoholDrinker?: BoolFieldUpdateOperationsInput | boolean
    challenge?: ChallengeUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChallengeMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    isAlcoholDrinker?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    isAlcoholDrinker?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
    challenge?: ChallengeUpdateOneRequiredWithoutTaskLogsNestedInput
    task?: ChallengeTaskUpdateOneRequiredWithoutLogsNestedInput
  }

  export type TaskLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TaskLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DaySummaryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    dailyBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    streakBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    challenge?: ChallengeUpdateOneRequiredWithoutDaySummariesNestedInput
  }

  export type DaySummaryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    dailyBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    streakBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DaySummaryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    dailyBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    streakBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WeeklyScoreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    challenge?: ChallengeUpdateOneRequiredWithoutWeeklyScoresNestedInput
  }

  export type WeeklyScoreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyScoreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    challenge?: ChallengeUpdateOneRequiredWithoutActivityNestedInput
  }

  export type ActivityEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChallengeMemberUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChallengeMemberUncheckedUpdateManyWithoutChallengeNestedInput
    tasks?: ChallengeTaskUncheckedUpdateManyWithoutChallengeNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutChallengeNestedInput
    daySummaries?: DaySummaryUncheckedUpdateManyWithoutChallengeNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutChallengeNestedInput
    activity?: ActivityEventUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    inviteCode?: StringFieldUpdateOperationsInput | string
    maxMembers?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeMemberCreateManyChallengeInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    points?: number
    currentStreak?: number
    longestStreak?: number
    isAlcoholDrinker?: boolean
  }

  export type ChallengeTaskCreateManyChallengeInput = {
    id?: string
    name: string
    type: string
    inputType: string
    isRuleBreaker?: boolean
    isAlcoholTask?: boolean
    points: number
    target?: number | null
  }

  export type TaskLogCreateManyChallengeInput = {
    id?: string
    userId: string
    taskId: string
    date: Date | string
    completed?: boolean
    value?: number
  }

  export type DaySummaryCreateManyChallengeInput = {
    id?: string
    userId: string
    date: Date | string
    completedCount?: number
    totalCount?: number
    pointsAwarded?: number
    dailyBonusAwarded?: boolean
    streakBonusAwarded?: boolean
  }

  export type WeeklyScoreCreateManyChallengeInput = {
    id?: string
    userId: string
    weekStart: Date | string
    weekEnd: Date | string
    weekNumber: number
    points?: number
  }

  export type ActivityEventCreateManyChallengeInput = {
    id?: string
    userId: string
    date?: Date | string
    type: string
    title: string
    points?: number
  }

  export type ChallengeMemberUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    isAlcoholDrinker?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type ChallengeMemberUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    isAlcoholDrinker?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeMemberUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    isAlcoholDrinker?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeTaskUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    inputType?: StringFieldUpdateOperationsInput | string
    isRuleBreaker?: BoolFieldUpdateOperationsInput | boolean
    isAlcoholTask?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    tiers?: TaskTierUpdateManyWithoutTaskNestedInput
    logs?: TaskLogUpdateManyWithoutTaskNestedInput
  }

  export type ChallengeTaskUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    inputType?: StringFieldUpdateOperationsInput | string
    isRuleBreaker?: BoolFieldUpdateOperationsInput | boolean
    isAlcoholTask?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    target?: NullableFloatFieldUpdateOperationsInput | number | null
    tiers?: TaskTierUncheckedUpdateManyWithoutTaskNestedInput
    logs?: TaskLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type ChallengeTaskUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    inputType?: StringFieldUpdateOperationsInput | string
    isRuleBreaker?: BoolFieldUpdateOperationsInput | boolean
    isAlcoholTask?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    target?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TaskLogUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTaskLogsNestedInput
    task?: ChallengeTaskUpdateOneRequiredWithoutLogsNestedInput
  }

  export type TaskLogUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TaskLogUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DaySummaryUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    dailyBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    streakBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutDaySummariesNestedInput
  }

  export type DaySummaryUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    dailyBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    streakBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DaySummaryUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    dailyBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
    streakBonusAwarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WeeklyScoreUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWeeklyScoresNestedInput
  }

  export type WeeklyScoreUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyScoreUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityEventUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutActivityNestedInput
  }

  export type ActivityEventUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityEventUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTierCreateManyTaskInput = {
    id?: string
    threshold: number
    points: number
  }

  export type TaskLogCreateManyTaskInput = {
    id?: string
    challengeId: string
    userId: string
    date: Date | string
    completed?: boolean
    value?: number
  }

  export type TaskTierUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTierUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTierUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    threshold?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TaskLogUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
    challenge?: ChallengeUpdateOneRequiredWithoutTaskLogsNestedInput
    user?: UserUpdateOneRequiredWithoutTaskLogsNestedInput
  }

  export type TaskLogUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TaskLogUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
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