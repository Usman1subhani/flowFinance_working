
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model FutureTransaction
 * 
 */
export type FutureTransaction = $Result.DefaultSelection<Prisma.$FutureTransactionPayload>
/**
 * Model Investment
 * 
 */
export type Investment = $Result.DefaultSelection<Prisma.$InvestmentPayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model ClosedMonth
 * 
 */
export type ClosedMonth = $Result.DefaultSelection<Prisma.$ClosedMonthPayload>
/**
 * Model HistoryAccount
 * 
 */
export type HistoryAccount = $Result.DefaultSelection<Prisma.$HistoryAccountPayload>

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
 * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.futureTransaction`: Exposes CRUD operations for the **FutureTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FutureTransactions
    * const futureTransactions = await prisma.futureTransaction.findMany()
    * ```
    */
  get futureTransaction(): Prisma.FutureTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investment`: Exposes CRUD operations for the **Investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investment.findMany()
    * ```
    */
  get investment(): Prisma.InvestmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.closedMonth`: Exposes CRUD operations for the **ClosedMonth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClosedMonths
    * const closedMonths = await prisma.closedMonth.findMany()
    * ```
    */
  get closedMonth(): Prisma.ClosedMonthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historyAccount`: Exposes CRUD operations for the **HistoryAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoryAccounts
    * const historyAccounts = await prisma.historyAccount.findMany()
    * ```
    */
  get historyAccount(): Prisma.HistoryAccountDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Category: 'Category',
    Account: 'Account',
    Transaction: 'Transaction',
    FutureTransaction: 'FutureTransaction',
    Investment: 'Investment',
    Budget: 'Budget',
    ClosedMonth: 'ClosedMonth',
    HistoryAccount: 'HistoryAccount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "account" | "transaction" | "futureTransaction" | "investment" | "budget" | "closedMonth" | "historyAccount"
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
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
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
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      FutureTransaction: {
        payload: Prisma.$FutureTransactionPayload<ExtArgs>
        fields: Prisma.FutureTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FutureTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FutureTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FutureTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FutureTransactionPayload>
          }
          findFirst: {
            args: Prisma.FutureTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FutureTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FutureTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FutureTransactionPayload>
          }
          findMany: {
            args: Prisma.FutureTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FutureTransactionPayload>[]
          }
          create: {
            args: Prisma.FutureTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FutureTransactionPayload>
          }
          createMany: {
            args: Prisma.FutureTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FutureTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FutureTransactionPayload>[]
          }
          delete: {
            args: Prisma.FutureTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FutureTransactionPayload>
          }
          update: {
            args: Prisma.FutureTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FutureTransactionPayload>
          }
          deleteMany: {
            args: Prisma.FutureTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FutureTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FutureTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FutureTransactionPayload>[]
          }
          upsert: {
            args: Prisma.FutureTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FutureTransactionPayload>
          }
          aggregate: {
            args: Prisma.FutureTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFutureTransaction>
          }
          groupBy: {
            args: Prisma.FutureTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FutureTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FutureTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<FutureTransactionCountAggregateOutputType> | number
          }
        }
      }
      Investment: {
        payload: Prisma.$InvestmentPayload<ExtArgs>
        fields: Prisma.InvestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findFirst: {
            args: Prisma.InvestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findMany: {
            args: Prisma.InvestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          create: {
            args: Prisma.InvestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          createMany: {
            args: Prisma.InvestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          delete: {
            args: Prisma.InvestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          update: {
            args: Prisma.InvestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment>
          }
          groupBy: {
            args: Prisma.InvestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BudgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      ClosedMonth: {
        payload: Prisma.$ClosedMonthPayload<ExtArgs>
        fields: Prisma.ClosedMonthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClosedMonthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedMonthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClosedMonthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedMonthPayload>
          }
          findFirst: {
            args: Prisma.ClosedMonthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedMonthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClosedMonthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedMonthPayload>
          }
          findMany: {
            args: Prisma.ClosedMonthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedMonthPayload>[]
          }
          create: {
            args: Prisma.ClosedMonthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedMonthPayload>
          }
          createMany: {
            args: Prisma.ClosedMonthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClosedMonthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedMonthPayload>[]
          }
          delete: {
            args: Prisma.ClosedMonthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedMonthPayload>
          }
          update: {
            args: Prisma.ClosedMonthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedMonthPayload>
          }
          deleteMany: {
            args: Prisma.ClosedMonthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClosedMonthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClosedMonthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedMonthPayload>[]
          }
          upsert: {
            args: Prisma.ClosedMonthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedMonthPayload>
          }
          aggregate: {
            args: Prisma.ClosedMonthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClosedMonth>
          }
          groupBy: {
            args: Prisma.ClosedMonthGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClosedMonthGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClosedMonthCountArgs<ExtArgs>
            result: $Utils.Optional<ClosedMonthCountAggregateOutputType> | number
          }
        }
      }
      HistoryAccount: {
        payload: Prisma.$HistoryAccountPayload<ExtArgs>
        fields: Prisma.HistoryAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryAccountPayload>
          }
          findFirst: {
            args: Prisma.HistoryAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryAccountPayload>
          }
          findMany: {
            args: Prisma.HistoryAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryAccountPayload>[]
          }
          create: {
            args: Prisma.HistoryAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryAccountPayload>
          }
          createMany: {
            args: Prisma.HistoryAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryAccountPayload>[]
          }
          delete: {
            args: Prisma.HistoryAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryAccountPayload>
          }
          update: {
            args: Prisma.HistoryAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryAccountPayload>
          }
          deleteMany: {
            args: Prisma.HistoryAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoryAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryAccountPayload>[]
          }
          upsert: {
            args: Prisma.HistoryAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryAccountPayload>
          }
          aggregate: {
            args: Prisma.HistoryAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoryAccount>
          }
          groupBy: {
            args: Prisma.HistoryAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryAccountCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryAccountCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    category?: CategoryOmit
    account?: AccountOmit
    transaction?: TransactionOmit
    futureTransaction?: FutureTransactionOmit
    investment?: InvestmentOmit
    budget?: BudgetOmit
    closedMonth?: ClosedMonthOmit
    historyAccount?: HistoryAccountOmit
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
    categories: number
    accounts: number
    transactions: number
    futureTransactions: number
    investments: number
    budgets: number
    closedMonths: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    futureTransactions?: boolean | UserCountOutputTypeCountFutureTransactionsArgs
    investments?: boolean | UserCountOutputTypeCountInvestmentsArgs
    budgets?: boolean | UserCountOutputTypeCountBudgetsArgs
    closedMonths?: boolean | UserCountOutputTypeCountClosedMonthsArgs
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
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
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
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFutureTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FutureTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClosedMonthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClosedMonthWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    transactions: number
    futureTransactions: number
    budgets: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategoryCountOutputTypeCountTransactionsArgs
    futureTransactions?: boolean | CategoryCountOutputTypeCountFutureTransactionsArgs
    budgets?: boolean | CategoryCountOutputTypeCountBudgetsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFutureTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FutureTransactionWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    transactions: number
    futureTransactions: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AccountCountOutputTypeCountTransactionsArgs
    futureTransactions?: boolean | AccountCountOutputTypeCountFutureTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountFutureTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FutureTransactionWhereInput
  }


  /**
   * Count Type ClosedMonthCountOutputType
   */

  export type ClosedMonthCountOutputType = {
    accounts: number
  }

  export type ClosedMonthCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | ClosedMonthCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * ClosedMonthCountOutputType without action
   */
  export type ClosedMonthCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonthCountOutputType
     */
    select?: ClosedMonthCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClosedMonthCountOutputType without action
   */
  export type ClosedMonthCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryAccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatar: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    avatar: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | User$categoriesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    futureTransactions?: boolean | User$futureTransactionsArgs<ExtArgs>
    investments?: boolean | User$investmentsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    closedMonths?: boolean | User$closedMonthsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avatar" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | User$categoriesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    futureTransactions?: boolean | User$futureTransactionsArgs<ExtArgs>
    investments?: boolean | User$investmentsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    closedMonths?: boolean | User$closedMonthsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      futureTransactions: Prisma.$FutureTransactionPayload<ExtArgs>[]
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
      closedMonths: Prisma.$ClosedMonthPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      avatar: string | null
      role: string
      createdAt: Date
      updatedAt: Date
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
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    futureTransactions<T extends User$futureTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$futureTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    investments<T extends User$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    budgets<T extends User$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, User$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    closedMonths<T extends User$closedMonthsArgs<ExtArgs> = {}>(args?: Subset<T, User$closedMonthsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
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
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.futureTransactions
   */
  export type User$futureTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    where?: FutureTransactionWhereInput
    orderBy?: FutureTransactionOrderByWithRelationInput | FutureTransactionOrderByWithRelationInput[]
    cursor?: FutureTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FutureTransactionScalarFieldEnum | FutureTransactionScalarFieldEnum[]
  }

  /**
   * User.investments
   */
  export type User$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * User.budgets
   */
  export type User$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * User.closedMonths
   */
  export type User$closedMonthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthInclude<ExtArgs> | null
    where?: ClosedMonthWhereInput
    orderBy?: ClosedMonthOrderByWithRelationInput | ClosedMonthOrderByWithRelationInput[]
    cursor?: ClosedMonthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClosedMonthScalarFieldEnum | ClosedMonthScalarFieldEnum[]
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
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    color: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    color: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    futureTransactions?: boolean | Category$futureTransactionsArgs<ExtArgs>
    budgets?: boolean | Category$budgetsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    futureTransactions?: boolean | Category$futureTransactionsArgs<ExtArgs>
    budgets?: boolean | Category$budgetsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      futureTransactions: Prisma.$FutureTransactionPayload<ExtArgs>[]
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Category$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    futureTransactions<T extends Category$futureTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$futureTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    budgets<T extends Category$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, Category$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly color: FieldRef<"Category", 'String'>
    readonly userId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.transactions
   */
  export type Category$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Category.futureTransactions
   */
  export type Category$futureTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    where?: FutureTransactionWhereInput
    orderBy?: FutureTransactionOrderByWithRelationInput | FutureTransactionOrderByWithRelationInput[]
    cursor?: FutureTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FutureTransactionScalarFieldEnum | FutureTransactionScalarFieldEnum[]
  }

  /**
   * Category.budgets
   */
  export type Category$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
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
    balance: number | null
    startingBalance: number | null
  }

  export type AccountSumAggregateOutputType = {
    balance: number | null
    startingBalance: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    balance: number | null
    startingBalance: number | null
    currency: string | null
    color: string | null
    icon: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    balance: number | null
    startingBalance: number | null
    currency: string | null
    color: string | null
    icon: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    balance: number
    startingBalance: number
    currency: number
    color: number
    icon: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    balance?: true
    startingBalance?: true
  }

  export type AccountSumAggregateInputType = {
    balance?: true
    startingBalance?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    startingBalance?: true
    currency?: true
    color?: true
    icon?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    startingBalance?: true
    currency?: true
    color?: true
    icon?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    startingBalance?: true
    currency?: true
    color?: true
    icon?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    balance: number
    startingBalance: number
    currency: string
    color: string
    icon: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    balance?: boolean
    startingBalance?: boolean
    currency?: boolean
    color?: boolean
    icon?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Account$transactionsArgs<ExtArgs>
    futureTransactions?: boolean | Account$futureTransactionsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    startingBalance?: boolean
    currency?: boolean
    color?: boolean
    icon?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    startingBalance?: boolean
    currency?: boolean
    color?: boolean
    icon?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    name?: boolean
    balance?: boolean
    startingBalance?: boolean
    currency?: boolean
    color?: boolean
    icon?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "balance" | "startingBalance" | "currency" | "color" | "icon" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Account$transactionsArgs<ExtArgs>
    futureTransactions?: boolean | Account$futureTransactionsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
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
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      futureTransactions: Prisma.$FutureTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      balance: number
      startingBalance: number
      currency: string
      color: string
      icon: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
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
    transactions<T extends Account$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Account$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    futureTransactions<T extends Account$futureTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Account$futureTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"Account", 'String'>
    readonly balance: FieldRef<"Account", 'Float'>
    readonly startingBalance: FieldRef<"Account", 'Float'>
    readonly currency: FieldRef<"Account", 'String'>
    readonly color: FieldRef<"Account", 'String'>
    readonly icon: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
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
   * Account.transactions
   */
  export type Account$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Account.futureTransactions
   */
  export type Account$futureTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    where?: FutureTransactionWhereInput
    orderBy?: FutureTransactionOrderByWithRelationInput | FutureTransactionOrderByWithRelationInput[]
    cursor?: FutureTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FutureTransactionScalarFieldEnum | FutureTransactionScalarFieldEnum[]
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
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    title: string | null
    amount: number | null
    type: string | null
    date: Date | null
    note: string | null
    attachment: string | null
    recurrence: string | null
    userId: string | null
    accountId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    amount: number | null
    type: string | null
    date: Date | null
    note: string | null
    attachment: string | null
    recurrence: string | null
    userId: string | null
    accountId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    title: number
    amount: number
    type: number
    date: number
    note: number
    attachment: number
    recurrence: number
    userId: number
    accountId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    type?: true
    date?: true
    note?: true
    attachment?: true
    recurrence?: true
    userId?: true
    accountId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    type?: true
    date?: true
    note?: true
    attachment?: true
    recurrence?: true
    userId?: true
    accountId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    type?: true
    date?: true
    note?: true
    attachment?: true
    recurrence?: true
    userId?: true
    accountId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    title: string
    amount: number
    type: string
    date: Date
    note: string | null
    attachment: string | null
    recurrence: string | null
    userId: string
    accountId: string
    categoryId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    type?: boolean
    date?: boolean
    note?: boolean
    attachment?: boolean
    recurrence?: boolean
    userId?: boolean
    accountId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    type?: boolean
    date?: boolean
    note?: boolean
    attachment?: boolean
    recurrence?: boolean
    userId?: boolean
    accountId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    type?: boolean
    date?: boolean
    note?: boolean
    attachment?: boolean
    recurrence?: boolean
    userId?: boolean
    accountId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    title?: boolean
    amount?: boolean
    type?: boolean
    date?: boolean
    note?: boolean
    attachment?: boolean
    recurrence?: boolean
    userId?: boolean
    accountId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "amount" | "type" | "date" | "note" | "attachment" | "recurrence" | "userId" | "accountId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | Transaction$categoryArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      amount: number
      type: string
      date: Date
      note: string | null
      attachment: string | null
      recurrence: string | null
      userId: string
      accountId: string
      categoryId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Transaction$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly title: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly note: FieldRef<"Transaction", 'String'>
    readonly attachment: FieldRef<"Transaction", 'String'>
    readonly recurrence: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly accountId: FieldRef<"Transaction", 'String'>
    readonly categoryId: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.category
   */
  export type Transaction$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model FutureTransaction
   */

  export type AggregateFutureTransaction = {
    _count: FutureTransactionCountAggregateOutputType | null
    _avg: FutureTransactionAvgAggregateOutputType | null
    _sum: FutureTransactionSumAggregateOutputType | null
    _min: FutureTransactionMinAggregateOutputType | null
    _max: FutureTransactionMaxAggregateOutputType | null
  }

  export type FutureTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type FutureTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type FutureTransactionMinAggregateOutputType = {
    id: string | null
    title: string | null
    amount: number | null
    type: string | null
    userId: string | null
    accountId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FutureTransactionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    amount: number | null
    type: string | null
    userId: string | null
    accountId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FutureTransactionCountAggregateOutputType = {
    id: number
    title: number
    amount: number
    type: number
    userId: number
    accountId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FutureTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type FutureTransactionSumAggregateInputType = {
    amount?: true
  }

  export type FutureTransactionMinAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    type?: true
    userId?: true
    accountId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FutureTransactionMaxAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    type?: true
    userId?: true
    accountId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FutureTransactionCountAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    type?: true
    userId?: true
    accountId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FutureTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FutureTransaction to aggregate.
     */
    where?: FutureTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FutureTransactions to fetch.
     */
    orderBy?: FutureTransactionOrderByWithRelationInput | FutureTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FutureTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FutureTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FutureTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FutureTransactions
    **/
    _count?: true | FutureTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FutureTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FutureTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FutureTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FutureTransactionMaxAggregateInputType
  }

  export type GetFutureTransactionAggregateType<T extends FutureTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateFutureTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFutureTransaction[P]>
      : GetScalarType<T[P], AggregateFutureTransaction[P]>
  }




  export type FutureTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FutureTransactionWhereInput
    orderBy?: FutureTransactionOrderByWithAggregationInput | FutureTransactionOrderByWithAggregationInput[]
    by: FutureTransactionScalarFieldEnum[] | FutureTransactionScalarFieldEnum
    having?: FutureTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FutureTransactionCountAggregateInputType | true
    _avg?: FutureTransactionAvgAggregateInputType
    _sum?: FutureTransactionSumAggregateInputType
    _min?: FutureTransactionMinAggregateInputType
    _max?: FutureTransactionMaxAggregateInputType
  }

  export type FutureTransactionGroupByOutputType = {
    id: string
    title: string
    amount: number
    type: string
    userId: string
    accountId: string
    categoryId: string | null
    createdAt: Date
    updatedAt: Date
    _count: FutureTransactionCountAggregateOutputType | null
    _avg: FutureTransactionAvgAggregateOutputType | null
    _sum: FutureTransactionSumAggregateOutputType | null
    _min: FutureTransactionMinAggregateOutputType | null
    _max: FutureTransactionMaxAggregateOutputType | null
  }

  type GetFutureTransactionGroupByPayload<T extends FutureTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FutureTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FutureTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FutureTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], FutureTransactionGroupByOutputType[P]>
        }
      >
    >


  export type FutureTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    type?: boolean
    userId?: boolean
    accountId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | FutureTransaction$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["futureTransaction"]>

  export type FutureTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    type?: boolean
    userId?: boolean
    accountId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | FutureTransaction$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["futureTransaction"]>

  export type FutureTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    type?: boolean
    userId?: boolean
    accountId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | FutureTransaction$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["futureTransaction"]>

  export type FutureTransactionSelectScalar = {
    id?: boolean
    title?: boolean
    amount?: boolean
    type?: boolean
    userId?: boolean
    accountId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FutureTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "amount" | "type" | "userId" | "accountId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["futureTransaction"]>
  export type FutureTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | FutureTransaction$categoryArgs<ExtArgs>
  }
  export type FutureTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | FutureTransaction$categoryArgs<ExtArgs>
  }
  export type FutureTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | FutureTransaction$categoryArgs<ExtArgs>
  }

  export type $FutureTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FutureTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      amount: number
      type: string
      userId: string
      accountId: string
      categoryId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["futureTransaction"]>
    composites: {}
  }

  type FutureTransactionGetPayload<S extends boolean | null | undefined | FutureTransactionDefaultArgs> = $Result.GetResult<Prisma.$FutureTransactionPayload, S>

  type FutureTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FutureTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FutureTransactionCountAggregateInputType | true
    }

  export interface FutureTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FutureTransaction'], meta: { name: 'FutureTransaction' } }
    /**
     * Find zero or one FutureTransaction that matches the filter.
     * @param {FutureTransactionFindUniqueArgs} args - Arguments to find a FutureTransaction
     * @example
     * // Get one FutureTransaction
     * const futureTransaction = await prisma.futureTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FutureTransactionFindUniqueArgs>(args: SelectSubset<T, FutureTransactionFindUniqueArgs<ExtArgs>>): Prisma__FutureTransactionClient<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FutureTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FutureTransactionFindUniqueOrThrowArgs} args - Arguments to find a FutureTransaction
     * @example
     * // Get one FutureTransaction
     * const futureTransaction = await prisma.futureTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FutureTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, FutureTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FutureTransactionClient<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FutureTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureTransactionFindFirstArgs} args - Arguments to find a FutureTransaction
     * @example
     * // Get one FutureTransaction
     * const futureTransaction = await prisma.futureTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FutureTransactionFindFirstArgs>(args?: SelectSubset<T, FutureTransactionFindFirstArgs<ExtArgs>>): Prisma__FutureTransactionClient<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FutureTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureTransactionFindFirstOrThrowArgs} args - Arguments to find a FutureTransaction
     * @example
     * // Get one FutureTransaction
     * const futureTransaction = await prisma.futureTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FutureTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, FutureTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FutureTransactionClient<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FutureTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FutureTransactions
     * const futureTransactions = await prisma.futureTransaction.findMany()
     * 
     * // Get first 10 FutureTransactions
     * const futureTransactions = await prisma.futureTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const futureTransactionWithIdOnly = await prisma.futureTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FutureTransactionFindManyArgs>(args?: SelectSubset<T, FutureTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FutureTransaction.
     * @param {FutureTransactionCreateArgs} args - Arguments to create a FutureTransaction.
     * @example
     * // Create one FutureTransaction
     * const FutureTransaction = await prisma.futureTransaction.create({
     *   data: {
     *     // ... data to create a FutureTransaction
     *   }
     * })
     * 
     */
    create<T extends FutureTransactionCreateArgs>(args: SelectSubset<T, FutureTransactionCreateArgs<ExtArgs>>): Prisma__FutureTransactionClient<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FutureTransactions.
     * @param {FutureTransactionCreateManyArgs} args - Arguments to create many FutureTransactions.
     * @example
     * // Create many FutureTransactions
     * const futureTransaction = await prisma.futureTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FutureTransactionCreateManyArgs>(args?: SelectSubset<T, FutureTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FutureTransactions and returns the data saved in the database.
     * @param {FutureTransactionCreateManyAndReturnArgs} args - Arguments to create many FutureTransactions.
     * @example
     * // Create many FutureTransactions
     * const futureTransaction = await prisma.futureTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FutureTransactions and only return the `id`
     * const futureTransactionWithIdOnly = await prisma.futureTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FutureTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, FutureTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FutureTransaction.
     * @param {FutureTransactionDeleteArgs} args - Arguments to delete one FutureTransaction.
     * @example
     * // Delete one FutureTransaction
     * const FutureTransaction = await prisma.futureTransaction.delete({
     *   where: {
     *     // ... filter to delete one FutureTransaction
     *   }
     * })
     * 
     */
    delete<T extends FutureTransactionDeleteArgs>(args: SelectSubset<T, FutureTransactionDeleteArgs<ExtArgs>>): Prisma__FutureTransactionClient<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FutureTransaction.
     * @param {FutureTransactionUpdateArgs} args - Arguments to update one FutureTransaction.
     * @example
     * // Update one FutureTransaction
     * const futureTransaction = await prisma.futureTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FutureTransactionUpdateArgs>(args: SelectSubset<T, FutureTransactionUpdateArgs<ExtArgs>>): Prisma__FutureTransactionClient<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FutureTransactions.
     * @param {FutureTransactionDeleteManyArgs} args - Arguments to filter FutureTransactions to delete.
     * @example
     * // Delete a few FutureTransactions
     * const { count } = await prisma.futureTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FutureTransactionDeleteManyArgs>(args?: SelectSubset<T, FutureTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FutureTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FutureTransactions
     * const futureTransaction = await prisma.futureTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FutureTransactionUpdateManyArgs>(args: SelectSubset<T, FutureTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FutureTransactions and returns the data updated in the database.
     * @param {FutureTransactionUpdateManyAndReturnArgs} args - Arguments to update many FutureTransactions.
     * @example
     * // Update many FutureTransactions
     * const futureTransaction = await prisma.futureTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FutureTransactions and only return the `id`
     * const futureTransactionWithIdOnly = await prisma.futureTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends FutureTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, FutureTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FutureTransaction.
     * @param {FutureTransactionUpsertArgs} args - Arguments to update or create a FutureTransaction.
     * @example
     * // Update or create a FutureTransaction
     * const futureTransaction = await prisma.futureTransaction.upsert({
     *   create: {
     *     // ... data to create a FutureTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FutureTransaction we want to update
     *   }
     * })
     */
    upsert<T extends FutureTransactionUpsertArgs>(args: SelectSubset<T, FutureTransactionUpsertArgs<ExtArgs>>): Prisma__FutureTransactionClient<$Result.GetResult<Prisma.$FutureTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FutureTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureTransactionCountArgs} args - Arguments to filter FutureTransactions to count.
     * @example
     * // Count the number of FutureTransactions
     * const count = await prisma.futureTransaction.count({
     *   where: {
     *     // ... the filter for the FutureTransactions we want to count
     *   }
     * })
    **/
    count<T extends FutureTransactionCountArgs>(
      args?: Subset<T, FutureTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FutureTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FutureTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FutureTransactionAggregateArgs>(args: Subset<T, FutureTransactionAggregateArgs>): Prisma.PrismaPromise<GetFutureTransactionAggregateType<T>>

    /**
     * Group by FutureTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureTransactionGroupByArgs} args - Group by arguments.
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
      T extends FutureTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FutureTransactionGroupByArgs['orderBy'] }
        : { orderBy?: FutureTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FutureTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFutureTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FutureTransaction model
   */
  readonly fields: FutureTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FutureTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FutureTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends FutureTransaction$categoryArgs<ExtArgs> = {}>(args?: Subset<T, FutureTransaction$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FutureTransaction model
   */
  interface FutureTransactionFieldRefs {
    readonly id: FieldRef<"FutureTransaction", 'String'>
    readonly title: FieldRef<"FutureTransaction", 'String'>
    readonly amount: FieldRef<"FutureTransaction", 'Float'>
    readonly type: FieldRef<"FutureTransaction", 'String'>
    readonly userId: FieldRef<"FutureTransaction", 'String'>
    readonly accountId: FieldRef<"FutureTransaction", 'String'>
    readonly categoryId: FieldRef<"FutureTransaction", 'String'>
    readonly createdAt: FieldRef<"FutureTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"FutureTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FutureTransaction findUnique
   */
  export type FutureTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FutureTransaction to fetch.
     */
    where: FutureTransactionWhereUniqueInput
  }

  /**
   * FutureTransaction findUniqueOrThrow
   */
  export type FutureTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FutureTransaction to fetch.
     */
    where: FutureTransactionWhereUniqueInput
  }

  /**
   * FutureTransaction findFirst
   */
  export type FutureTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FutureTransaction to fetch.
     */
    where?: FutureTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FutureTransactions to fetch.
     */
    orderBy?: FutureTransactionOrderByWithRelationInput | FutureTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FutureTransactions.
     */
    cursor?: FutureTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FutureTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FutureTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FutureTransactions.
     */
    distinct?: FutureTransactionScalarFieldEnum | FutureTransactionScalarFieldEnum[]
  }

  /**
   * FutureTransaction findFirstOrThrow
   */
  export type FutureTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FutureTransaction to fetch.
     */
    where?: FutureTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FutureTransactions to fetch.
     */
    orderBy?: FutureTransactionOrderByWithRelationInput | FutureTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FutureTransactions.
     */
    cursor?: FutureTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FutureTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FutureTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FutureTransactions.
     */
    distinct?: FutureTransactionScalarFieldEnum | FutureTransactionScalarFieldEnum[]
  }

  /**
   * FutureTransaction findMany
   */
  export type FutureTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FutureTransactions to fetch.
     */
    where?: FutureTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FutureTransactions to fetch.
     */
    orderBy?: FutureTransactionOrderByWithRelationInput | FutureTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FutureTransactions.
     */
    cursor?: FutureTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FutureTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FutureTransactions.
     */
    skip?: number
    distinct?: FutureTransactionScalarFieldEnum | FutureTransactionScalarFieldEnum[]
  }

  /**
   * FutureTransaction create
   */
  export type FutureTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a FutureTransaction.
     */
    data: XOR<FutureTransactionCreateInput, FutureTransactionUncheckedCreateInput>
  }

  /**
   * FutureTransaction createMany
   */
  export type FutureTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FutureTransactions.
     */
    data: FutureTransactionCreateManyInput | FutureTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FutureTransaction createManyAndReturn
   */
  export type FutureTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many FutureTransactions.
     */
    data: FutureTransactionCreateManyInput | FutureTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FutureTransaction update
   */
  export type FutureTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a FutureTransaction.
     */
    data: XOR<FutureTransactionUpdateInput, FutureTransactionUncheckedUpdateInput>
    /**
     * Choose, which FutureTransaction to update.
     */
    where: FutureTransactionWhereUniqueInput
  }

  /**
   * FutureTransaction updateMany
   */
  export type FutureTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FutureTransactions.
     */
    data: XOR<FutureTransactionUpdateManyMutationInput, FutureTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FutureTransactions to update
     */
    where?: FutureTransactionWhereInput
    /**
     * Limit how many FutureTransactions to update.
     */
    limit?: number
  }

  /**
   * FutureTransaction updateManyAndReturn
   */
  export type FutureTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * The data used to update FutureTransactions.
     */
    data: XOR<FutureTransactionUpdateManyMutationInput, FutureTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FutureTransactions to update
     */
    where?: FutureTransactionWhereInput
    /**
     * Limit how many FutureTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FutureTransaction upsert
   */
  export type FutureTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the FutureTransaction to update in case it exists.
     */
    where: FutureTransactionWhereUniqueInput
    /**
     * In case the FutureTransaction found by the `where` argument doesn't exist, create a new FutureTransaction with this data.
     */
    create: XOR<FutureTransactionCreateInput, FutureTransactionUncheckedCreateInput>
    /**
     * In case the FutureTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FutureTransactionUpdateInput, FutureTransactionUncheckedUpdateInput>
  }

  /**
   * FutureTransaction delete
   */
  export type FutureTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
    /**
     * Filter which FutureTransaction to delete.
     */
    where: FutureTransactionWhereUniqueInput
  }

  /**
   * FutureTransaction deleteMany
   */
  export type FutureTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FutureTransactions to delete
     */
    where?: FutureTransactionWhereInput
    /**
     * Limit how many FutureTransactions to delete.
     */
    limit?: number
  }

  /**
   * FutureTransaction.category
   */
  export type FutureTransaction$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * FutureTransaction without action
   */
  export type FutureTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FutureTransaction
     */
    select?: FutureTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FutureTransaction
     */
    omit?: FutureTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Investment
   */

  export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  export type InvestmentAvgAggregateOutputType = {
    amount: number | null
    currentValue: number | null
  }

  export type InvestmentSumAggregateOutputType = {
    amount: number | null
    currentValue: number | null
  }

  export type InvestmentMinAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    amount: number | null
    currentValue: number | null
    date: Date | null
    note: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentMaxAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    amount: number | null
    currentValue: number | null
    date: Date | null
    note: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentCountAggregateOutputType = {
    id: number
    type: number
    name: number
    amount: number
    currentValue: number
    date: number
    note: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvestmentAvgAggregateInputType = {
    amount?: true
    currentValue?: true
  }

  export type InvestmentSumAggregateInputType = {
    amount?: true
    currentValue?: true
  }

  export type InvestmentMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    amount?: true
    currentValue?: true
    date?: true
    note?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    amount?: true
    currentValue?: true
    date?: true
    note?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    amount?: true
    currentValue?: true
    date?: true
    note?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment to aggregate.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentMaxAggregateInputType
  }

  export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment[P]>
      : GetScalarType<T[P], AggregateInvestment[P]>
  }




  export type InvestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithAggregationInput | InvestmentOrderByWithAggregationInput[]
    by: InvestmentScalarFieldEnum[] | InvestmentScalarFieldEnum
    having?: InvestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentCountAggregateInputType | true
    _avg?: InvestmentAvgAggregateInputType
    _sum?: InvestmentSumAggregateInputType
    _min?: InvestmentMinAggregateInputType
    _max?: InvestmentMaxAggregateInputType
  }

  export type InvestmentGroupByOutputType = {
    id: string
    type: string
    name: string
    amount: number
    currentValue: number | null
    date: Date
    note: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    amount?: boolean
    currentValue?: boolean
    date?: boolean
    note?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    amount?: boolean
    currentValue?: boolean
    date?: boolean
    note?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    amount?: boolean
    currentValue?: boolean
    date?: boolean
    note?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    amount?: boolean
    currentValue?: boolean
    date?: boolean
    note?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvestmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "amount" | "currentValue" | "date" | "note" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["investment"]>
  export type InvestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      name: string
      amount: number
      currentValue: number | null
      date: Date
      note: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["investment"]>
    composites: {}
  }

  type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPayload, S>

  type InvestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentCountAggregateInputType | true
    }

  export interface InvestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment'], meta: { name: 'Investment' } }
    /**
     * Find zero or one Investment that matches the filter.
     * @param {InvestmentFindUniqueArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentFindUniqueArgs>(args: SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentFindUniqueOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentFindFirstArgs>(args?: SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investment.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWithIdOnly = await prisma.investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentFindManyArgs>(args?: SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investment.
     * @param {InvestmentCreateArgs} args - Arguments to create a Investment.
     * @example
     * // Create one Investment
     * const Investment = await prisma.investment.create({
     *   data: {
     *     // ... data to create a Investment
     *   }
     * })
     * 
     */
    create<T extends InvestmentCreateArgs>(args: SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investments.
     * @param {InvestmentCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentCreateManyArgs>(args?: SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investment.
     * @param {InvestmentDeleteArgs} args - Arguments to delete one Investment.
     * @example
     * // Delete one Investment
     * const Investment = await prisma.investment.delete({
     *   where: {
     *     // ... filter to delete one Investment
     *   }
     * })
     * 
     */
    delete<T extends InvestmentDeleteArgs>(args: SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investment.
     * @param {InvestmentUpdateArgs} args - Arguments to update one Investment.
     * @example
     * // Update one Investment
     * const investment = await prisma.investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentUpdateArgs>(args: SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentUpdateManyArgs>(args: SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {InvestmentUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvestmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investment.
     * @param {InvestmentUpsertArgs} args - Arguments to update or create a Investment.
     * @example
     * // Update or create a Investment
     * const investment = await prisma.investment.upsert({
     *   create: {
     *     // ... data to create a Investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentUpsertArgs>(args: SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investment.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentCountArgs>(
      args?: Subset<T, InvestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvestmentAggregateArgs>(args: Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>

    /**
     * Group by Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupByArgs} args - Group by arguments.
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
      T extends InvestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment model
   */
  readonly fields: InvestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Investment model
   */
  interface InvestmentFieldRefs {
    readonly id: FieldRef<"Investment", 'String'>
    readonly type: FieldRef<"Investment", 'String'>
    readonly name: FieldRef<"Investment", 'String'>
    readonly amount: FieldRef<"Investment", 'Float'>
    readonly currentValue: FieldRef<"Investment", 'Float'>
    readonly date: FieldRef<"Investment", 'DateTime'>
    readonly note: FieldRef<"Investment", 'String'>
    readonly userId: FieldRef<"Investment", 'String'>
    readonly createdAt: FieldRef<"Investment", 'DateTime'>
    readonly updatedAt: FieldRef<"Investment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investment findUnique
   */
  export type InvestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findUniqueOrThrow
   */
  export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findFirst
   */
  export type InvestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findFirstOrThrow
   */
  export type InvestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findMany
   */
  export type InvestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment create
   */
  export type InvestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Investment.
     */
    data: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
  }

  /**
   * Investment createMany
   */
  export type InvestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investment createManyAndReturn
   */
  export type InvestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment update
   */
  export type InvestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Investment.
     */
    data: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
    /**
     * Choose, which Investment to update.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment updateMany
   */
  export type InvestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
  }

  /**
   * Investment updateManyAndReturn
   */
  export type InvestmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment upsert
   */
  export type InvestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Investment to update in case it exists.
     */
    where: InvestmentWhereUniqueInput
    /**
     * In case the Investment found by the `where` argument doesn't exist, create a new Investment with this data.
     */
    create: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
    /**
     * In case the Investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
  }

  /**
   * Investment delete
   */
  export type InvestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter which Investment to delete.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment deleteMany
   */
  export type InvestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to delete.
     */
    limit?: number
  }

  /**
   * Investment without action
   */
  export type InvestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    amount: number | null
    spent: number | null
  }

  export type BudgetSumAggregateOutputType = {
    amount: number | null
    spent: number | null
  }

  export type BudgetMinAggregateOutputType = {
    id: string | null
    amount: number | null
    spent: number | null
    userId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    spent: number | null
    userId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    amount: number
    spent: number
    userId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    amount?: true
    spent?: true
  }

  export type BudgetSumAggregateInputType = {
    amount?: true
    spent?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    amount?: true
    spent?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    amount?: true
    spent?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    amount?: true
    spent?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: string
    amount: number
    spent: number
    userId: string
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    spent?: boolean
    userId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    spent?: boolean
    userId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    spent?: boolean
    userId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectScalar = {
    id?: boolean
    amount?: boolean
    spent?: boolean
    userId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "spent" | "userId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["budget"]>
  export type BudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type BudgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type BudgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      spent: number
      userId: string
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetFindUniqueArgs>(args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetFindFirstArgs>(args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetFindManyArgs>(args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends BudgetCreateArgs>(args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCreateManyArgs>(args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {BudgetCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends BudgetDeleteArgs>(args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetUpdateArgs>(args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetDeleteManyArgs>(args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetUpdateManyArgs>(args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets and returns the data updated in the database.
     * @param {BudgetUpdateManyAndReturnArgs} args - Arguments to update many Budgets.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.updateManyAndReturn({
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
    updateManyAndReturn<T extends BudgetUpdateManyAndReturnArgs>(args: SelectSubset<T, BudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends BudgetUpsertArgs>(args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
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
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Budget model
   */
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'String'>
    readonly amount: FieldRef<"Budget", 'Float'>
    readonly spent: FieldRef<"Budget", 'Float'>
    readonly userId: FieldRef<"Budget", 'String'>
    readonly categoryId: FieldRef<"Budget", 'String'>
    readonly createdAt: FieldRef<"Budget", 'DateTime'>
    readonly updatedAt: FieldRef<"Budget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget createManyAndReturn
   */
  export type BudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
  }

  /**
   * Budget updateManyAndReturn
   */
  export type BudgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to delete.
     */
    limit?: number
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
  }


  /**
   * Model ClosedMonth
   */

  export type AggregateClosedMonth = {
    _count: ClosedMonthCountAggregateOutputType | null
    _avg: ClosedMonthAvgAggregateOutputType | null
    _sum: ClosedMonthSumAggregateOutputType | null
    _min: ClosedMonthMinAggregateOutputType | null
    _max: ClosedMonthMaxAggregateOutputType | null
  }

  export type ClosedMonthAvgAggregateOutputType = {
    income: number | null
    expenses: number | null
    net: number | null
  }

  export type ClosedMonthSumAggregateOutputType = {
    income: number | null
    expenses: number | null
    net: number | null
  }

  export type ClosedMonthMinAggregateOutputType = {
    id: string | null
    monthName: string | null
    periodStart: Date | null
    periodEnd: Date | null
    income: number | null
    expenses: number | null
    net: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type ClosedMonthMaxAggregateOutputType = {
    id: string | null
    monthName: string | null
    periodStart: Date | null
    periodEnd: Date | null
    income: number | null
    expenses: number | null
    net: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type ClosedMonthCountAggregateOutputType = {
    id: number
    monthName: number
    periodStart: number
    periodEnd: number
    income: number
    expenses: number
    net: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ClosedMonthAvgAggregateInputType = {
    income?: true
    expenses?: true
    net?: true
  }

  export type ClosedMonthSumAggregateInputType = {
    income?: true
    expenses?: true
    net?: true
  }

  export type ClosedMonthMinAggregateInputType = {
    id?: true
    monthName?: true
    periodStart?: true
    periodEnd?: true
    income?: true
    expenses?: true
    net?: true
    userId?: true
    createdAt?: true
  }

  export type ClosedMonthMaxAggregateInputType = {
    id?: true
    monthName?: true
    periodStart?: true
    periodEnd?: true
    income?: true
    expenses?: true
    net?: true
    userId?: true
    createdAt?: true
  }

  export type ClosedMonthCountAggregateInputType = {
    id?: true
    monthName?: true
    periodStart?: true
    periodEnd?: true
    income?: true
    expenses?: true
    net?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ClosedMonthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClosedMonth to aggregate.
     */
    where?: ClosedMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedMonths to fetch.
     */
    orderBy?: ClosedMonthOrderByWithRelationInput | ClosedMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClosedMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedMonths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClosedMonths
    **/
    _count?: true | ClosedMonthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClosedMonthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClosedMonthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClosedMonthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClosedMonthMaxAggregateInputType
  }

  export type GetClosedMonthAggregateType<T extends ClosedMonthAggregateArgs> = {
        [P in keyof T & keyof AggregateClosedMonth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClosedMonth[P]>
      : GetScalarType<T[P], AggregateClosedMonth[P]>
  }




  export type ClosedMonthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClosedMonthWhereInput
    orderBy?: ClosedMonthOrderByWithAggregationInput | ClosedMonthOrderByWithAggregationInput[]
    by: ClosedMonthScalarFieldEnum[] | ClosedMonthScalarFieldEnum
    having?: ClosedMonthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClosedMonthCountAggregateInputType | true
    _avg?: ClosedMonthAvgAggregateInputType
    _sum?: ClosedMonthSumAggregateInputType
    _min?: ClosedMonthMinAggregateInputType
    _max?: ClosedMonthMaxAggregateInputType
  }

  export type ClosedMonthGroupByOutputType = {
    id: string
    monthName: string
    periodStart: Date
    periodEnd: Date
    income: number
    expenses: number
    net: number
    userId: string
    createdAt: Date
    _count: ClosedMonthCountAggregateOutputType | null
    _avg: ClosedMonthAvgAggregateOutputType | null
    _sum: ClosedMonthSumAggregateOutputType | null
    _min: ClosedMonthMinAggregateOutputType | null
    _max: ClosedMonthMaxAggregateOutputType | null
  }

  type GetClosedMonthGroupByPayload<T extends ClosedMonthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClosedMonthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClosedMonthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClosedMonthGroupByOutputType[P]>
            : GetScalarType<T[P], ClosedMonthGroupByOutputType[P]>
        }
      >
    >


  export type ClosedMonthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monthName?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    income?: boolean
    expenses?: boolean
    net?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    accounts?: boolean | ClosedMonth$accountsArgs<ExtArgs>
    _count?: boolean | ClosedMonthCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedMonth"]>

  export type ClosedMonthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monthName?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    income?: boolean
    expenses?: boolean
    net?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedMonth"]>

  export type ClosedMonthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monthName?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    income?: boolean
    expenses?: boolean
    net?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["closedMonth"]>

  export type ClosedMonthSelectScalar = {
    id?: boolean
    monthName?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    income?: boolean
    expenses?: boolean
    net?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ClosedMonthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monthName" | "periodStart" | "periodEnd" | "income" | "expenses" | "net" | "userId" | "createdAt", ExtArgs["result"]["closedMonth"]>
  export type ClosedMonthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    accounts?: boolean | ClosedMonth$accountsArgs<ExtArgs>
    _count?: boolean | ClosedMonthCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClosedMonthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClosedMonthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClosedMonthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClosedMonth"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      accounts: Prisma.$HistoryAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      monthName: string
      periodStart: Date
      periodEnd: Date
      income: number
      expenses: number
      net: number
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["closedMonth"]>
    composites: {}
  }

  type ClosedMonthGetPayload<S extends boolean | null | undefined | ClosedMonthDefaultArgs> = $Result.GetResult<Prisma.$ClosedMonthPayload, S>

  type ClosedMonthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClosedMonthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClosedMonthCountAggregateInputType | true
    }

  export interface ClosedMonthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClosedMonth'], meta: { name: 'ClosedMonth' } }
    /**
     * Find zero or one ClosedMonth that matches the filter.
     * @param {ClosedMonthFindUniqueArgs} args - Arguments to find a ClosedMonth
     * @example
     * // Get one ClosedMonth
     * const closedMonth = await prisma.closedMonth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClosedMonthFindUniqueArgs>(args: SelectSubset<T, ClosedMonthFindUniqueArgs<ExtArgs>>): Prisma__ClosedMonthClient<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClosedMonth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClosedMonthFindUniqueOrThrowArgs} args - Arguments to find a ClosedMonth
     * @example
     * // Get one ClosedMonth
     * const closedMonth = await prisma.closedMonth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClosedMonthFindUniqueOrThrowArgs>(args: SelectSubset<T, ClosedMonthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClosedMonthClient<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClosedMonth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedMonthFindFirstArgs} args - Arguments to find a ClosedMonth
     * @example
     * // Get one ClosedMonth
     * const closedMonth = await prisma.closedMonth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClosedMonthFindFirstArgs>(args?: SelectSubset<T, ClosedMonthFindFirstArgs<ExtArgs>>): Prisma__ClosedMonthClient<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClosedMonth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedMonthFindFirstOrThrowArgs} args - Arguments to find a ClosedMonth
     * @example
     * // Get one ClosedMonth
     * const closedMonth = await prisma.closedMonth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClosedMonthFindFirstOrThrowArgs>(args?: SelectSubset<T, ClosedMonthFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClosedMonthClient<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClosedMonths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedMonthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClosedMonths
     * const closedMonths = await prisma.closedMonth.findMany()
     * 
     * // Get first 10 ClosedMonths
     * const closedMonths = await prisma.closedMonth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const closedMonthWithIdOnly = await prisma.closedMonth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClosedMonthFindManyArgs>(args?: SelectSubset<T, ClosedMonthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClosedMonth.
     * @param {ClosedMonthCreateArgs} args - Arguments to create a ClosedMonth.
     * @example
     * // Create one ClosedMonth
     * const ClosedMonth = await prisma.closedMonth.create({
     *   data: {
     *     // ... data to create a ClosedMonth
     *   }
     * })
     * 
     */
    create<T extends ClosedMonthCreateArgs>(args: SelectSubset<T, ClosedMonthCreateArgs<ExtArgs>>): Prisma__ClosedMonthClient<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClosedMonths.
     * @param {ClosedMonthCreateManyArgs} args - Arguments to create many ClosedMonths.
     * @example
     * // Create many ClosedMonths
     * const closedMonth = await prisma.closedMonth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClosedMonthCreateManyArgs>(args?: SelectSubset<T, ClosedMonthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClosedMonths and returns the data saved in the database.
     * @param {ClosedMonthCreateManyAndReturnArgs} args - Arguments to create many ClosedMonths.
     * @example
     * // Create many ClosedMonths
     * const closedMonth = await prisma.closedMonth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClosedMonths and only return the `id`
     * const closedMonthWithIdOnly = await prisma.closedMonth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClosedMonthCreateManyAndReturnArgs>(args?: SelectSubset<T, ClosedMonthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClosedMonth.
     * @param {ClosedMonthDeleteArgs} args - Arguments to delete one ClosedMonth.
     * @example
     * // Delete one ClosedMonth
     * const ClosedMonth = await prisma.closedMonth.delete({
     *   where: {
     *     // ... filter to delete one ClosedMonth
     *   }
     * })
     * 
     */
    delete<T extends ClosedMonthDeleteArgs>(args: SelectSubset<T, ClosedMonthDeleteArgs<ExtArgs>>): Prisma__ClosedMonthClient<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClosedMonth.
     * @param {ClosedMonthUpdateArgs} args - Arguments to update one ClosedMonth.
     * @example
     * // Update one ClosedMonth
     * const closedMonth = await prisma.closedMonth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClosedMonthUpdateArgs>(args: SelectSubset<T, ClosedMonthUpdateArgs<ExtArgs>>): Prisma__ClosedMonthClient<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClosedMonths.
     * @param {ClosedMonthDeleteManyArgs} args - Arguments to filter ClosedMonths to delete.
     * @example
     * // Delete a few ClosedMonths
     * const { count } = await prisma.closedMonth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClosedMonthDeleteManyArgs>(args?: SelectSubset<T, ClosedMonthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClosedMonths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedMonthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClosedMonths
     * const closedMonth = await prisma.closedMonth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClosedMonthUpdateManyArgs>(args: SelectSubset<T, ClosedMonthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClosedMonths and returns the data updated in the database.
     * @param {ClosedMonthUpdateManyAndReturnArgs} args - Arguments to update many ClosedMonths.
     * @example
     * // Update many ClosedMonths
     * const closedMonth = await prisma.closedMonth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClosedMonths and only return the `id`
     * const closedMonthWithIdOnly = await prisma.closedMonth.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClosedMonthUpdateManyAndReturnArgs>(args: SelectSubset<T, ClosedMonthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClosedMonth.
     * @param {ClosedMonthUpsertArgs} args - Arguments to update or create a ClosedMonth.
     * @example
     * // Update or create a ClosedMonth
     * const closedMonth = await prisma.closedMonth.upsert({
     *   create: {
     *     // ... data to create a ClosedMonth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClosedMonth we want to update
     *   }
     * })
     */
    upsert<T extends ClosedMonthUpsertArgs>(args: SelectSubset<T, ClosedMonthUpsertArgs<ExtArgs>>): Prisma__ClosedMonthClient<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClosedMonths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedMonthCountArgs} args - Arguments to filter ClosedMonths to count.
     * @example
     * // Count the number of ClosedMonths
     * const count = await prisma.closedMonth.count({
     *   where: {
     *     // ... the filter for the ClosedMonths we want to count
     *   }
     * })
    **/
    count<T extends ClosedMonthCountArgs>(
      args?: Subset<T, ClosedMonthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClosedMonthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClosedMonth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedMonthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClosedMonthAggregateArgs>(args: Subset<T, ClosedMonthAggregateArgs>): Prisma.PrismaPromise<GetClosedMonthAggregateType<T>>

    /**
     * Group by ClosedMonth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedMonthGroupByArgs} args - Group by arguments.
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
      T extends ClosedMonthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClosedMonthGroupByArgs['orderBy'] }
        : { orderBy?: ClosedMonthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClosedMonthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClosedMonthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClosedMonth model
   */
  readonly fields: ClosedMonthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClosedMonth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClosedMonthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accounts<T extends ClosedMonth$accountsArgs<ExtArgs> = {}>(args?: Subset<T, ClosedMonth$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ClosedMonth model
   */
  interface ClosedMonthFieldRefs {
    readonly id: FieldRef<"ClosedMonth", 'String'>
    readonly monthName: FieldRef<"ClosedMonth", 'String'>
    readonly periodStart: FieldRef<"ClosedMonth", 'DateTime'>
    readonly periodEnd: FieldRef<"ClosedMonth", 'DateTime'>
    readonly income: FieldRef<"ClosedMonth", 'Float'>
    readonly expenses: FieldRef<"ClosedMonth", 'Float'>
    readonly net: FieldRef<"ClosedMonth", 'Float'>
    readonly userId: FieldRef<"ClosedMonth", 'String'>
    readonly createdAt: FieldRef<"ClosedMonth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClosedMonth findUnique
   */
  export type ClosedMonthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthInclude<ExtArgs> | null
    /**
     * Filter, which ClosedMonth to fetch.
     */
    where: ClosedMonthWhereUniqueInput
  }

  /**
   * ClosedMonth findUniqueOrThrow
   */
  export type ClosedMonthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthInclude<ExtArgs> | null
    /**
     * Filter, which ClosedMonth to fetch.
     */
    where: ClosedMonthWhereUniqueInput
  }

  /**
   * ClosedMonth findFirst
   */
  export type ClosedMonthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthInclude<ExtArgs> | null
    /**
     * Filter, which ClosedMonth to fetch.
     */
    where?: ClosedMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedMonths to fetch.
     */
    orderBy?: ClosedMonthOrderByWithRelationInput | ClosedMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClosedMonths.
     */
    cursor?: ClosedMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedMonths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClosedMonths.
     */
    distinct?: ClosedMonthScalarFieldEnum | ClosedMonthScalarFieldEnum[]
  }

  /**
   * ClosedMonth findFirstOrThrow
   */
  export type ClosedMonthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthInclude<ExtArgs> | null
    /**
     * Filter, which ClosedMonth to fetch.
     */
    where?: ClosedMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedMonths to fetch.
     */
    orderBy?: ClosedMonthOrderByWithRelationInput | ClosedMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClosedMonths.
     */
    cursor?: ClosedMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedMonths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClosedMonths.
     */
    distinct?: ClosedMonthScalarFieldEnum | ClosedMonthScalarFieldEnum[]
  }

  /**
   * ClosedMonth findMany
   */
  export type ClosedMonthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthInclude<ExtArgs> | null
    /**
     * Filter, which ClosedMonths to fetch.
     */
    where?: ClosedMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedMonths to fetch.
     */
    orderBy?: ClosedMonthOrderByWithRelationInput | ClosedMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClosedMonths.
     */
    cursor?: ClosedMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedMonths.
     */
    skip?: number
    distinct?: ClosedMonthScalarFieldEnum | ClosedMonthScalarFieldEnum[]
  }

  /**
   * ClosedMonth create
   */
  export type ClosedMonthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthInclude<ExtArgs> | null
    /**
     * The data needed to create a ClosedMonth.
     */
    data: XOR<ClosedMonthCreateInput, ClosedMonthUncheckedCreateInput>
  }

  /**
   * ClosedMonth createMany
   */
  export type ClosedMonthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClosedMonths.
     */
    data: ClosedMonthCreateManyInput | ClosedMonthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClosedMonth createManyAndReturn
   */
  export type ClosedMonthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * The data used to create many ClosedMonths.
     */
    data: ClosedMonthCreateManyInput | ClosedMonthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClosedMonth update
   */
  export type ClosedMonthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthInclude<ExtArgs> | null
    /**
     * The data needed to update a ClosedMonth.
     */
    data: XOR<ClosedMonthUpdateInput, ClosedMonthUncheckedUpdateInput>
    /**
     * Choose, which ClosedMonth to update.
     */
    where: ClosedMonthWhereUniqueInput
  }

  /**
   * ClosedMonth updateMany
   */
  export type ClosedMonthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClosedMonths.
     */
    data: XOR<ClosedMonthUpdateManyMutationInput, ClosedMonthUncheckedUpdateManyInput>
    /**
     * Filter which ClosedMonths to update
     */
    where?: ClosedMonthWhereInput
    /**
     * Limit how many ClosedMonths to update.
     */
    limit?: number
  }

  /**
   * ClosedMonth updateManyAndReturn
   */
  export type ClosedMonthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * The data used to update ClosedMonths.
     */
    data: XOR<ClosedMonthUpdateManyMutationInput, ClosedMonthUncheckedUpdateManyInput>
    /**
     * Filter which ClosedMonths to update
     */
    where?: ClosedMonthWhereInput
    /**
     * Limit how many ClosedMonths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClosedMonth upsert
   */
  export type ClosedMonthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthInclude<ExtArgs> | null
    /**
     * The filter to search for the ClosedMonth to update in case it exists.
     */
    where: ClosedMonthWhereUniqueInput
    /**
     * In case the ClosedMonth found by the `where` argument doesn't exist, create a new ClosedMonth with this data.
     */
    create: XOR<ClosedMonthCreateInput, ClosedMonthUncheckedCreateInput>
    /**
     * In case the ClosedMonth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClosedMonthUpdateInput, ClosedMonthUncheckedUpdateInput>
  }

  /**
   * ClosedMonth delete
   */
  export type ClosedMonthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthInclude<ExtArgs> | null
    /**
     * Filter which ClosedMonth to delete.
     */
    where: ClosedMonthWhereUniqueInput
  }

  /**
   * ClosedMonth deleteMany
   */
  export type ClosedMonthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClosedMonths to delete
     */
    where?: ClosedMonthWhereInput
    /**
     * Limit how many ClosedMonths to delete.
     */
    limit?: number
  }

  /**
   * ClosedMonth.accounts
   */
  export type ClosedMonth$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountInclude<ExtArgs> | null
    where?: HistoryAccountWhereInput
    orderBy?: HistoryAccountOrderByWithRelationInput | HistoryAccountOrderByWithRelationInput[]
    cursor?: HistoryAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryAccountScalarFieldEnum | HistoryAccountScalarFieldEnum[]
  }

  /**
   * ClosedMonth without action
   */
  export type ClosedMonthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedMonth
     */
    select?: ClosedMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedMonth
     */
    omit?: ClosedMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClosedMonthInclude<ExtArgs> | null
  }


  /**
   * Model HistoryAccount
   */

  export type AggregateHistoryAccount = {
    _count: HistoryAccountCountAggregateOutputType | null
    _avg: HistoryAccountAvgAggregateOutputType | null
    _sum: HistoryAccountSumAggregateOutputType | null
    _min: HistoryAccountMinAggregateOutputType | null
    _max: HistoryAccountMaxAggregateOutputType | null
  }

  export type HistoryAccountAvgAggregateOutputType = {
    startingBalance: number | null
    endingBalance: number | null
  }

  export type HistoryAccountSumAggregateOutputType = {
    startingBalance: number | null
    endingBalance: number | null
  }

  export type HistoryAccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    startingBalance: number | null
    endingBalance: number | null
    currency: string | null
    color: string | null
    carriedForward: boolean | null
    closedMonthId: string | null
  }

  export type HistoryAccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startingBalance: number | null
    endingBalance: number | null
    currency: string | null
    color: string | null
    carriedForward: boolean | null
    closedMonthId: string | null
  }

  export type HistoryAccountCountAggregateOutputType = {
    id: number
    name: number
    startingBalance: number
    endingBalance: number
    currency: number
    color: number
    carriedForward: number
    closedMonthId: number
    _all: number
  }


  export type HistoryAccountAvgAggregateInputType = {
    startingBalance?: true
    endingBalance?: true
  }

  export type HistoryAccountSumAggregateInputType = {
    startingBalance?: true
    endingBalance?: true
  }

  export type HistoryAccountMinAggregateInputType = {
    id?: true
    name?: true
    startingBalance?: true
    endingBalance?: true
    currency?: true
    color?: true
    carriedForward?: true
    closedMonthId?: true
  }

  export type HistoryAccountMaxAggregateInputType = {
    id?: true
    name?: true
    startingBalance?: true
    endingBalance?: true
    currency?: true
    color?: true
    carriedForward?: true
    closedMonthId?: true
  }

  export type HistoryAccountCountAggregateInputType = {
    id?: true
    name?: true
    startingBalance?: true
    endingBalance?: true
    currency?: true
    color?: true
    carriedForward?: true
    closedMonthId?: true
    _all?: true
  }

  export type HistoryAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryAccount to aggregate.
     */
    where?: HistoryAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryAccounts to fetch.
     */
    orderBy?: HistoryAccountOrderByWithRelationInput | HistoryAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoryAccounts
    **/
    _count?: true | HistoryAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoryAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryAccountMaxAggregateInputType
  }

  export type GetHistoryAccountAggregateType<T extends HistoryAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoryAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoryAccount[P]>
      : GetScalarType<T[P], AggregateHistoryAccount[P]>
  }




  export type HistoryAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryAccountWhereInput
    orderBy?: HistoryAccountOrderByWithAggregationInput | HistoryAccountOrderByWithAggregationInput[]
    by: HistoryAccountScalarFieldEnum[] | HistoryAccountScalarFieldEnum
    having?: HistoryAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryAccountCountAggregateInputType | true
    _avg?: HistoryAccountAvgAggregateInputType
    _sum?: HistoryAccountSumAggregateInputType
    _min?: HistoryAccountMinAggregateInputType
    _max?: HistoryAccountMaxAggregateInputType
  }

  export type HistoryAccountGroupByOutputType = {
    id: string
    name: string
    startingBalance: number
    endingBalance: number
    currency: string
    color: string
    carriedForward: boolean
    closedMonthId: string
    _count: HistoryAccountCountAggregateOutputType | null
    _avg: HistoryAccountAvgAggregateOutputType | null
    _sum: HistoryAccountSumAggregateOutputType | null
    _min: HistoryAccountMinAggregateOutputType | null
    _max: HistoryAccountMaxAggregateOutputType | null
  }

  type GetHistoryAccountGroupByPayload<T extends HistoryAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryAccountGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryAccountGroupByOutputType[P]>
        }
      >
    >


  export type HistoryAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startingBalance?: boolean
    endingBalance?: boolean
    currency?: boolean
    color?: boolean
    carriedForward?: boolean
    closedMonthId?: boolean
    closedMonth?: boolean | ClosedMonthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyAccount"]>

  export type HistoryAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startingBalance?: boolean
    endingBalance?: boolean
    currency?: boolean
    color?: boolean
    carriedForward?: boolean
    closedMonthId?: boolean
    closedMonth?: boolean | ClosedMonthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyAccount"]>

  export type HistoryAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startingBalance?: boolean
    endingBalance?: boolean
    currency?: boolean
    color?: boolean
    carriedForward?: boolean
    closedMonthId?: boolean
    closedMonth?: boolean | ClosedMonthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyAccount"]>

  export type HistoryAccountSelectScalar = {
    id?: boolean
    name?: boolean
    startingBalance?: boolean
    endingBalance?: boolean
    currency?: boolean
    color?: boolean
    carriedForward?: boolean
    closedMonthId?: boolean
  }

  export type HistoryAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startingBalance" | "endingBalance" | "currency" | "color" | "carriedForward" | "closedMonthId", ExtArgs["result"]["historyAccount"]>
  export type HistoryAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    closedMonth?: boolean | ClosedMonthDefaultArgs<ExtArgs>
  }
  export type HistoryAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    closedMonth?: boolean | ClosedMonthDefaultArgs<ExtArgs>
  }
  export type HistoryAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    closedMonth?: boolean | ClosedMonthDefaultArgs<ExtArgs>
  }

  export type $HistoryAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoryAccount"
    objects: {
      closedMonth: Prisma.$ClosedMonthPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startingBalance: number
      endingBalance: number
      currency: string
      color: string
      carriedForward: boolean
      closedMonthId: string
    }, ExtArgs["result"]["historyAccount"]>
    composites: {}
  }

  type HistoryAccountGetPayload<S extends boolean | null | undefined | HistoryAccountDefaultArgs> = $Result.GetResult<Prisma.$HistoryAccountPayload, S>

  type HistoryAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryAccountCountAggregateInputType | true
    }

  export interface HistoryAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoryAccount'], meta: { name: 'HistoryAccount' } }
    /**
     * Find zero or one HistoryAccount that matches the filter.
     * @param {HistoryAccountFindUniqueArgs} args - Arguments to find a HistoryAccount
     * @example
     * // Get one HistoryAccount
     * const historyAccount = await prisma.historyAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryAccountFindUniqueArgs>(args: SelectSubset<T, HistoryAccountFindUniqueArgs<ExtArgs>>): Prisma__HistoryAccountClient<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoryAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryAccountFindUniqueOrThrowArgs} args - Arguments to find a HistoryAccount
     * @example
     * // Get one HistoryAccount
     * const historyAccount = await prisma.historyAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryAccountClient<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAccountFindFirstArgs} args - Arguments to find a HistoryAccount
     * @example
     * // Get one HistoryAccount
     * const historyAccount = await prisma.historyAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryAccountFindFirstArgs>(args?: SelectSubset<T, HistoryAccountFindFirstArgs<ExtArgs>>): Prisma__HistoryAccountClient<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAccountFindFirstOrThrowArgs} args - Arguments to find a HistoryAccount
     * @example
     * // Get one HistoryAccount
     * const historyAccount = await prisma.historyAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryAccountClient<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoryAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoryAccounts
     * const historyAccounts = await prisma.historyAccount.findMany()
     * 
     * // Get first 10 HistoryAccounts
     * const historyAccounts = await prisma.historyAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyAccountWithIdOnly = await prisma.historyAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryAccountFindManyArgs>(args?: SelectSubset<T, HistoryAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoryAccount.
     * @param {HistoryAccountCreateArgs} args - Arguments to create a HistoryAccount.
     * @example
     * // Create one HistoryAccount
     * const HistoryAccount = await prisma.historyAccount.create({
     *   data: {
     *     // ... data to create a HistoryAccount
     *   }
     * })
     * 
     */
    create<T extends HistoryAccountCreateArgs>(args: SelectSubset<T, HistoryAccountCreateArgs<ExtArgs>>): Prisma__HistoryAccountClient<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoryAccounts.
     * @param {HistoryAccountCreateManyArgs} args - Arguments to create many HistoryAccounts.
     * @example
     * // Create many HistoryAccounts
     * const historyAccount = await prisma.historyAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryAccountCreateManyArgs>(args?: SelectSubset<T, HistoryAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoryAccounts and returns the data saved in the database.
     * @param {HistoryAccountCreateManyAndReturnArgs} args - Arguments to create many HistoryAccounts.
     * @example
     * // Create many HistoryAccounts
     * const historyAccount = await prisma.historyAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoryAccounts and only return the `id`
     * const historyAccountWithIdOnly = await prisma.historyAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoryAccount.
     * @param {HistoryAccountDeleteArgs} args - Arguments to delete one HistoryAccount.
     * @example
     * // Delete one HistoryAccount
     * const HistoryAccount = await prisma.historyAccount.delete({
     *   where: {
     *     // ... filter to delete one HistoryAccount
     *   }
     * })
     * 
     */
    delete<T extends HistoryAccountDeleteArgs>(args: SelectSubset<T, HistoryAccountDeleteArgs<ExtArgs>>): Prisma__HistoryAccountClient<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoryAccount.
     * @param {HistoryAccountUpdateArgs} args - Arguments to update one HistoryAccount.
     * @example
     * // Update one HistoryAccount
     * const historyAccount = await prisma.historyAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryAccountUpdateArgs>(args: SelectSubset<T, HistoryAccountUpdateArgs<ExtArgs>>): Prisma__HistoryAccountClient<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoryAccounts.
     * @param {HistoryAccountDeleteManyArgs} args - Arguments to filter HistoryAccounts to delete.
     * @example
     * // Delete a few HistoryAccounts
     * const { count } = await prisma.historyAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryAccountDeleteManyArgs>(args?: SelectSubset<T, HistoryAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoryAccounts
     * const historyAccount = await prisma.historyAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryAccountUpdateManyArgs>(args: SelectSubset<T, HistoryAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryAccounts and returns the data updated in the database.
     * @param {HistoryAccountUpdateManyAndReturnArgs} args - Arguments to update many HistoryAccounts.
     * @example
     * // Update many HistoryAccounts
     * const historyAccount = await prisma.historyAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoryAccounts and only return the `id`
     * const historyAccountWithIdOnly = await prisma.historyAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoryAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoryAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoryAccount.
     * @param {HistoryAccountUpsertArgs} args - Arguments to update or create a HistoryAccount.
     * @example
     * // Update or create a HistoryAccount
     * const historyAccount = await prisma.historyAccount.upsert({
     *   create: {
     *     // ... data to create a HistoryAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoryAccount we want to update
     *   }
     * })
     */
    upsert<T extends HistoryAccountUpsertArgs>(args: SelectSubset<T, HistoryAccountUpsertArgs<ExtArgs>>): Prisma__HistoryAccountClient<$Result.GetResult<Prisma.$HistoryAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoryAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAccountCountArgs} args - Arguments to filter HistoryAccounts to count.
     * @example
     * // Count the number of HistoryAccounts
     * const count = await prisma.historyAccount.count({
     *   where: {
     *     // ... the filter for the HistoryAccounts we want to count
     *   }
     * })
    **/
    count<T extends HistoryAccountCountArgs>(
      args?: Subset<T, HistoryAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoryAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryAccountAggregateArgs>(args: Subset<T, HistoryAccountAggregateArgs>): Prisma.PrismaPromise<GetHistoryAccountAggregateType<T>>

    /**
     * Group by HistoryAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAccountGroupByArgs} args - Group by arguments.
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
      T extends HistoryAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryAccountGroupByArgs['orderBy'] }
        : { orderBy?: HistoryAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoryAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoryAccount model
   */
  readonly fields: HistoryAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoryAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    closedMonth<T extends ClosedMonthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClosedMonthDefaultArgs<ExtArgs>>): Prisma__ClosedMonthClient<$Result.GetResult<Prisma.$ClosedMonthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoryAccount model
   */
  interface HistoryAccountFieldRefs {
    readonly id: FieldRef<"HistoryAccount", 'String'>
    readonly name: FieldRef<"HistoryAccount", 'String'>
    readonly startingBalance: FieldRef<"HistoryAccount", 'Float'>
    readonly endingBalance: FieldRef<"HistoryAccount", 'Float'>
    readonly currency: FieldRef<"HistoryAccount", 'String'>
    readonly color: FieldRef<"HistoryAccount", 'String'>
    readonly carriedForward: FieldRef<"HistoryAccount", 'Boolean'>
    readonly closedMonthId: FieldRef<"HistoryAccount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoryAccount findUnique
   */
  export type HistoryAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountInclude<ExtArgs> | null
    /**
     * Filter, which HistoryAccount to fetch.
     */
    where: HistoryAccountWhereUniqueInput
  }

  /**
   * HistoryAccount findUniqueOrThrow
   */
  export type HistoryAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountInclude<ExtArgs> | null
    /**
     * Filter, which HistoryAccount to fetch.
     */
    where: HistoryAccountWhereUniqueInput
  }

  /**
   * HistoryAccount findFirst
   */
  export type HistoryAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountInclude<ExtArgs> | null
    /**
     * Filter, which HistoryAccount to fetch.
     */
    where?: HistoryAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryAccounts to fetch.
     */
    orderBy?: HistoryAccountOrderByWithRelationInput | HistoryAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryAccounts.
     */
    cursor?: HistoryAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryAccounts.
     */
    distinct?: HistoryAccountScalarFieldEnum | HistoryAccountScalarFieldEnum[]
  }

  /**
   * HistoryAccount findFirstOrThrow
   */
  export type HistoryAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountInclude<ExtArgs> | null
    /**
     * Filter, which HistoryAccount to fetch.
     */
    where?: HistoryAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryAccounts to fetch.
     */
    orderBy?: HistoryAccountOrderByWithRelationInput | HistoryAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryAccounts.
     */
    cursor?: HistoryAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryAccounts.
     */
    distinct?: HistoryAccountScalarFieldEnum | HistoryAccountScalarFieldEnum[]
  }

  /**
   * HistoryAccount findMany
   */
  export type HistoryAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountInclude<ExtArgs> | null
    /**
     * Filter, which HistoryAccounts to fetch.
     */
    where?: HistoryAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryAccounts to fetch.
     */
    orderBy?: HistoryAccountOrderByWithRelationInput | HistoryAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoryAccounts.
     */
    cursor?: HistoryAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryAccounts.
     */
    skip?: number
    distinct?: HistoryAccountScalarFieldEnum | HistoryAccountScalarFieldEnum[]
  }

  /**
   * HistoryAccount create
   */
  export type HistoryAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoryAccount.
     */
    data: XOR<HistoryAccountCreateInput, HistoryAccountUncheckedCreateInput>
  }

  /**
   * HistoryAccount createMany
   */
  export type HistoryAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoryAccounts.
     */
    data: HistoryAccountCreateManyInput | HistoryAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoryAccount createManyAndReturn
   */
  export type HistoryAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * The data used to create many HistoryAccounts.
     */
    data: HistoryAccountCreateManyInput | HistoryAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoryAccount update
   */
  export type HistoryAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoryAccount.
     */
    data: XOR<HistoryAccountUpdateInput, HistoryAccountUncheckedUpdateInput>
    /**
     * Choose, which HistoryAccount to update.
     */
    where: HistoryAccountWhereUniqueInput
  }

  /**
   * HistoryAccount updateMany
   */
  export type HistoryAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoryAccounts.
     */
    data: XOR<HistoryAccountUpdateManyMutationInput, HistoryAccountUncheckedUpdateManyInput>
    /**
     * Filter which HistoryAccounts to update
     */
    where?: HistoryAccountWhereInput
    /**
     * Limit how many HistoryAccounts to update.
     */
    limit?: number
  }

  /**
   * HistoryAccount updateManyAndReturn
   */
  export type HistoryAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * The data used to update HistoryAccounts.
     */
    data: XOR<HistoryAccountUpdateManyMutationInput, HistoryAccountUncheckedUpdateManyInput>
    /**
     * Filter which HistoryAccounts to update
     */
    where?: HistoryAccountWhereInput
    /**
     * Limit how many HistoryAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoryAccount upsert
   */
  export type HistoryAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoryAccount to update in case it exists.
     */
    where: HistoryAccountWhereUniqueInput
    /**
     * In case the HistoryAccount found by the `where` argument doesn't exist, create a new HistoryAccount with this data.
     */
    create: XOR<HistoryAccountCreateInput, HistoryAccountUncheckedCreateInput>
    /**
     * In case the HistoryAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryAccountUpdateInput, HistoryAccountUncheckedUpdateInput>
  }

  /**
   * HistoryAccount delete
   */
  export type HistoryAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountInclude<ExtArgs> | null
    /**
     * Filter which HistoryAccount to delete.
     */
    where: HistoryAccountWhereUniqueInput
  }

  /**
   * HistoryAccount deleteMany
   */
  export type HistoryAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryAccounts to delete
     */
    where?: HistoryAccountWhereInput
    /**
     * Limit how many HistoryAccounts to delete.
     */
    limit?: number
  }

  /**
   * HistoryAccount without action
   */
  export type HistoryAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryAccount
     */
    select?: HistoryAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryAccount
     */
    omit?: HistoryAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryAccountInclude<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    avatar: 'avatar',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    balance: 'balance',
    startingBalance: 'startingBalance',
    currency: 'currency',
    color: 'color',
    icon: 'icon',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    amount: 'amount',
    type: 'type',
    date: 'date',
    note: 'note',
    attachment: 'attachment',
    recurrence: 'recurrence',
    userId: 'userId',
    accountId: 'accountId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const FutureTransactionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    amount: 'amount',
    type: 'type',
    userId: 'userId',
    accountId: 'accountId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FutureTransactionScalarFieldEnum = (typeof FutureTransactionScalarFieldEnum)[keyof typeof FutureTransactionScalarFieldEnum]


  export const InvestmentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    amount: 'amount',
    currentValue: 'currentValue',
    date: 'date',
    note: 'note',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    spent: 'spent',
    userId: 'userId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const ClosedMonthScalarFieldEnum: {
    id: 'id',
    monthName: 'monthName',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    income: 'income',
    expenses: 'expenses',
    net: 'net',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ClosedMonthScalarFieldEnum = (typeof ClosedMonthScalarFieldEnum)[keyof typeof ClosedMonthScalarFieldEnum]


  export const HistoryAccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startingBalance: 'startingBalance',
    endingBalance: 'endingBalance',
    currency: 'currency',
    color: 'color',
    carriedForward: 'carriedForward',
    closedMonthId: 'closedMonthId'
  };

  export type HistoryAccountScalarFieldEnum = (typeof HistoryAccountScalarFieldEnum)[keyof typeof HistoryAccountScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    categories?: CategoryListRelationFilter
    accounts?: AccountListRelationFilter
    transactions?: TransactionListRelationFilter
    futureTransactions?: FutureTransactionListRelationFilter
    investments?: InvestmentListRelationFilter
    budgets?: BudgetListRelationFilter
    closedMonths?: ClosedMonthListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    futureTransactions?: FutureTransactionOrderByRelationAggregateInput
    investments?: InvestmentOrderByRelationAggregateInput
    budgets?: BudgetOrderByRelationAggregateInput
    closedMonths?: ClosedMonthOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    categories?: CategoryListRelationFilter
    accounts?: AccountListRelationFilter
    transactions?: TransactionListRelationFilter
    futureTransactions?: FutureTransactionListRelationFilter
    investments?: InvestmentListRelationFilter
    budgets?: BudgetListRelationFilter
    closedMonths?: ClosedMonthListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    color?: StringFilter<"Category"> | string
    userId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    futureTransactions?: FutureTransactionListRelationFilter
    budgets?: BudgetListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    futureTransactions?: FutureTransactionOrderByRelationAggregateInput
    budgets?: BudgetOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    color?: StringFilter<"Category"> | string
    userId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    futureTransactions?: FutureTransactionListRelationFilter
    budgets?: BudgetListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    color?: StringWithAggregatesFilter<"Category"> | string
    userId?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    balance?: FloatFilter<"Account"> | number
    startingBalance?: FloatFilter<"Account"> | number
    currency?: StringFilter<"Account"> | string
    color?: StringFilter<"Account"> | string
    icon?: StringNullableFilter<"Account"> | string | null
    userId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    futureTransactions?: FutureTransactionListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    startingBalance?: SortOrder
    currency?: SortOrder
    color?: SortOrder
    icon?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    futureTransactions?: FutureTransactionOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    balance?: FloatFilter<"Account"> | number
    startingBalance?: FloatFilter<"Account"> | number
    currency?: StringFilter<"Account"> | string
    color?: StringFilter<"Account"> | string
    icon?: StringNullableFilter<"Account"> | string | null
    userId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    futureTransactions?: FutureTransactionListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    startingBalance?: SortOrder
    currency?: SortOrder
    color?: SortOrder
    icon?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    name?: StringWithAggregatesFilter<"Account"> | string
    balance?: FloatWithAggregatesFilter<"Account"> | number
    startingBalance?: FloatWithAggregatesFilter<"Account"> | number
    currency?: StringWithAggregatesFilter<"Account"> | string
    color?: StringWithAggregatesFilter<"Account"> | string
    icon?: StringNullableWithAggregatesFilter<"Account"> | string | null
    userId?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    title?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    note?: StringNullableFilter<"Transaction"> | string | null
    attachment?: StringNullableFilter<"Transaction"> | string | null
    recurrence?: StringNullableFilter<"Transaction"> | string | null
    userId?: StringFilter<"Transaction"> | string
    accountId?: StringFilter<"Transaction"> | string
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    attachment?: SortOrderInput | SortOrder
    recurrence?: SortOrderInput | SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    title?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    note?: StringNullableFilter<"Transaction"> | string | null
    attachment?: StringNullableFilter<"Transaction"> | string | null
    recurrence?: StringNullableFilter<"Transaction"> | string | null
    userId?: StringFilter<"Transaction"> | string
    accountId?: StringFilter<"Transaction"> | string
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    attachment?: SortOrderInput | SortOrder
    recurrence?: SortOrderInput | SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    title?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    type?: StringWithAggregatesFilter<"Transaction"> | string
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    note?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    attachment?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    recurrence?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    accountId?: StringWithAggregatesFilter<"Transaction"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type FutureTransactionWhereInput = {
    AND?: FutureTransactionWhereInput | FutureTransactionWhereInput[]
    OR?: FutureTransactionWhereInput[]
    NOT?: FutureTransactionWhereInput | FutureTransactionWhereInput[]
    id?: StringFilter<"FutureTransaction"> | string
    title?: StringFilter<"FutureTransaction"> | string
    amount?: FloatFilter<"FutureTransaction"> | number
    type?: StringFilter<"FutureTransaction"> | string
    userId?: StringFilter<"FutureTransaction"> | string
    accountId?: StringFilter<"FutureTransaction"> | string
    categoryId?: StringNullableFilter<"FutureTransaction"> | string | null
    createdAt?: DateTimeFilter<"FutureTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"FutureTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type FutureTransactionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type FutureTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FutureTransactionWhereInput | FutureTransactionWhereInput[]
    OR?: FutureTransactionWhereInput[]
    NOT?: FutureTransactionWhereInput | FutureTransactionWhereInput[]
    title?: StringFilter<"FutureTransaction"> | string
    amount?: FloatFilter<"FutureTransaction"> | number
    type?: StringFilter<"FutureTransaction"> | string
    userId?: StringFilter<"FutureTransaction"> | string
    accountId?: StringFilter<"FutureTransaction"> | string
    categoryId?: StringNullableFilter<"FutureTransaction"> | string | null
    createdAt?: DateTimeFilter<"FutureTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"FutureTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type FutureTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FutureTransactionCountOrderByAggregateInput
    _avg?: FutureTransactionAvgOrderByAggregateInput
    _max?: FutureTransactionMaxOrderByAggregateInput
    _min?: FutureTransactionMinOrderByAggregateInput
    _sum?: FutureTransactionSumOrderByAggregateInput
  }

  export type FutureTransactionScalarWhereWithAggregatesInput = {
    AND?: FutureTransactionScalarWhereWithAggregatesInput | FutureTransactionScalarWhereWithAggregatesInput[]
    OR?: FutureTransactionScalarWhereWithAggregatesInput[]
    NOT?: FutureTransactionScalarWhereWithAggregatesInput | FutureTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FutureTransaction"> | string
    title?: StringWithAggregatesFilter<"FutureTransaction"> | string
    amount?: FloatWithAggregatesFilter<"FutureTransaction"> | number
    type?: StringWithAggregatesFilter<"FutureTransaction"> | string
    userId?: StringWithAggregatesFilter<"FutureTransaction"> | string
    accountId?: StringWithAggregatesFilter<"FutureTransaction"> | string
    categoryId?: StringNullableWithAggregatesFilter<"FutureTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FutureTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FutureTransaction"> | Date | string
  }

  export type InvestmentWhereInput = {
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    id?: StringFilter<"Investment"> | string
    type?: StringFilter<"Investment"> | string
    name?: StringFilter<"Investment"> | string
    amount?: FloatFilter<"Investment"> | number
    currentValue?: FloatNullableFilter<"Investment"> | number | null
    date?: DateTimeFilter<"Investment"> | Date | string
    note?: StringNullableFilter<"Investment"> | string | null
    userId?: StringFilter<"Investment"> | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InvestmentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    currentValue?: SortOrderInput | SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    type?: StringFilter<"Investment"> | string
    name?: StringFilter<"Investment"> | string
    amount?: FloatFilter<"Investment"> | number
    currentValue?: FloatNullableFilter<"Investment"> | number | null
    date?: DateTimeFilter<"Investment"> | Date | string
    note?: StringNullableFilter<"Investment"> | string | null
    userId?: StringFilter<"Investment"> | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InvestmentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    currentValue?: SortOrderInput | SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvestmentCountOrderByAggregateInput
    _avg?: InvestmentAvgOrderByAggregateInput
    _max?: InvestmentMaxOrderByAggregateInput
    _min?: InvestmentMinOrderByAggregateInput
    _sum?: InvestmentSumOrderByAggregateInput
  }

  export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    OR?: InvestmentScalarWhereWithAggregatesInput[]
    NOT?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment"> | string
    type?: StringWithAggregatesFilter<"Investment"> | string
    name?: StringWithAggregatesFilter<"Investment"> | string
    amount?: FloatWithAggregatesFilter<"Investment"> | number
    currentValue?: FloatNullableWithAggregatesFilter<"Investment"> | number | null
    date?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    note?: StringNullableWithAggregatesFilter<"Investment"> | string | null
    userId?: StringWithAggregatesFilter<"Investment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: StringFilter<"Budget"> | string
    amount?: FloatFilter<"Budget"> | number
    spent?: FloatFilter<"Budget"> | number
    userId?: StringFilter<"Budget"> | string
    categoryId?: StringFilter<"Budget"> | string
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeFilter<"Budget"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type BudgetOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    amount?: FloatFilter<"Budget"> | number
    spent?: FloatFilter<"Budget"> | number
    userId?: StringFilter<"Budget"> | string
    categoryId?: StringFilter<"Budget"> | string
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeFilter<"Budget"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Budget"> | string
    amount?: FloatWithAggregatesFilter<"Budget"> | number
    spent?: FloatWithAggregatesFilter<"Budget"> | number
    userId?: StringWithAggregatesFilter<"Budget"> | string
    categoryId?: StringWithAggregatesFilter<"Budget"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
  }

  export type ClosedMonthWhereInput = {
    AND?: ClosedMonthWhereInput | ClosedMonthWhereInput[]
    OR?: ClosedMonthWhereInput[]
    NOT?: ClosedMonthWhereInput | ClosedMonthWhereInput[]
    id?: StringFilter<"ClosedMonth"> | string
    monthName?: StringFilter<"ClosedMonth"> | string
    periodStart?: DateTimeFilter<"ClosedMonth"> | Date | string
    periodEnd?: DateTimeFilter<"ClosedMonth"> | Date | string
    income?: FloatFilter<"ClosedMonth"> | number
    expenses?: FloatFilter<"ClosedMonth"> | number
    net?: FloatFilter<"ClosedMonth"> | number
    userId?: StringFilter<"ClosedMonth"> | string
    createdAt?: DateTimeFilter<"ClosedMonth"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    accounts?: HistoryAccountListRelationFilter
  }

  export type ClosedMonthOrderByWithRelationInput = {
    id?: SortOrder
    monthName?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    income?: SortOrder
    expenses?: SortOrder
    net?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    accounts?: HistoryAccountOrderByRelationAggregateInput
  }

  export type ClosedMonthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClosedMonthWhereInput | ClosedMonthWhereInput[]
    OR?: ClosedMonthWhereInput[]
    NOT?: ClosedMonthWhereInput | ClosedMonthWhereInput[]
    monthName?: StringFilter<"ClosedMonth"> | string
    periodStart?: DateTimeFilter<"ClosedMonth"> | Date | string
    periodEnd?: DateTimeFilter<"ClosedMonth"> | Date | string
    income?: FloatFilter<"ClosedMonth"> | number
    expenses?: FloatFilter<"ClosedMonth"> | number
    net?: FloatFilter<"ClosedMonth"> | number
    userId?: StringFilter<"ClosedMonth"> | string
    createdAt?: DateTimeFilter<"ClosedMonth"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    accounts?: HistoryAccountListRelationFilter
  }, "id">

  export type ClosedMonthOrderByWithAggregationInput = {
    id?: SortOrder
    monthName?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    income?: SortOrder
    expenses?: SortOrder
    net?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ClosedMonthCountOrderByAggregateInput
    _avg?: ClosedMonthAvgOrderByAggregateInput
    _max?: ClosedMonthMaxOrderByAggregateInput
    _min?: ClosedMonthMinOrderByAggregateInput
    _sum?: ClosedMonthSumOrderByAggregateInput
  }

  export type ClosedMonthScalarWhereWithAggregatesInput = {
    AND?: ClosedMonthScalarWhereWithAggregatesInput | ClosedMonthScalarWhereWithAggregatesInput[]
    OR?: ClosedMonthScalarWhereWithAggregatesInput[]
    NOT?: ClosedMonthScalarWhereWithAggregatesInput | ClosedMonthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClosedMonth"> | string
    monthName?: StringWithAggregatesFilter<"ClosedMonth"> | string
    periodStart?: DateTimeWithAggregatesFilter<"ClosedMonth"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"ClosedMonth"> | Date | string
    income?: FloatWithAggregatesFilter<"ClosedMonth"> | number
    expenses?: FloatWithAggregatesFilter<"ClosedMonth"> | number
    net?: FloatWithAggregatesFilter<"ClosedMonth"> | number
    userId?: StringWithAggregatesFilter<"ClosedMonth"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClosedMonth"> | Date | string
  }

  export type HistoryAccountWhereInput = {
    AND?: HistoryAccountWhereInput | HistoryAccountWhereInput[]
    OR?: HistoryAccountWhereInput[]
    NOT?: HistoryAccountWhereInput | HistoryAccountWhereInput[]
    id?: StringFilter<"HistoryAccount"> | string
    name?: StringFilter<"HistoryAccount"> | string
    startingBalance?: FloatFilter<"HistoryAccount"> | number
    endingBalance?: FloatFilter<"HistoryAccount"> | number
    currency?: StringFilter<"HistoryAccount"> | string
    color?: StringFilter<"HistoryAccount"> | string
    carriedForward?: BoolFilter<"HistoryAccount"> | boolean
    closedMonthId?: StringFilter<"HistoryAccount"> | string
    closedMonth?: XOR<ClosedMonthScalarRelationFilter, ClosedMonthWhereInput>
  }

  export type HistoryAccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startingBalance?: SortOrder
    endingBalance?: SortOrder
    currency?: SortOrder
    color?: SortOrder
    carriedForward?: SortOrder
    closedMonthId?: SortOrder
    closedMonth?: ClosedMonthOrderByWithRelationInput
  }

  export type HistoryAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryAccountWhereInput | HistoryAccountWhereInput[]
    OR?: HistoryAccountWhereInput[]
    NOT?: HistoryAccountWhereInput | HistoryAccountWhereInput[]
    name?: StringFilter<"HistoryAccount"> | string
    startingBalance?: FloatFilter<"HistoryAccount"> | number
    endingBalance?: FloatFilter<"HistoryAccount"> | number
    currency?: StringFilter<"HistoryAccount"> | string
    color?: StringFilter<"HistoryAccount"> | string
    carriedForward?: BoolFilter<"HistoryAccount"> | boolean
    closedMonthId?: StringFilter<"HistoryAccount"> | string
    closedMonth?: XOR<ClosedMonthScalarRelationFilter, ClosedMonthWhereInput>
  }, "id">

  export type HistoryAccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startingBalance?: SortOrder
    endingBalance?: SortOrder
    currency?: SortOrder
    color?: SortOrder
    carriedForward?: SortOrder
    closedMonthId?: SortOrder
    _count?: HistoryAccountCountOrderByAggregateInput
    _avg?: HistoryAccountAvgOrderByAggregateInput
    _max?: HistoryAccountMaxOrderByAggregateInput
    _min?: HistoryAccountMinOrderByAggregateInput
    _sum?: HistoryAccountSumOrderByAggregateInput
  }

  export type HistoryAccountScalarWhereWithAggregatesInput = {
    AND?: HistoryAccountScalarWhereWithAggregatesInput | HistoryAccountScalarWhereWithAggregatesInput[]
    OR?: HistoryAccountScalarWhereWithAggregatesInput[]
    NOT?: HistoryAccountScalarWhereWithAggregatesInput | HistoryAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoryAccount"> | string
    name?: StringWithAggregatesFilter<"HistoryAccount"> | string
    startingBalance?: FloatWithAggregatesFilter<"HistoryAccount"> | number
    endingBalance?: FloatWithAggregatesFilter<"HistoryAccount"> | number
    currency?: StringWithAggregatesFilter<"HistoryAccount"> | string
    color?: StringWithAggregatesFilter<"HistoryAccount"> | string
    carriedForward?: BoolWithAggregatesFilter<"HistoryAccount"> | boolean
    closedMonthId?: StringWithAggregatesFilter<"HistoryAccount"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutCategoryInput
    budgets?: BudgetCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    color: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutCategoryInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    color: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    balance?: number
    startingBalance?: number
    currency: string
    color: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    transactions?: TransactionCreateNestedManyWithoutAccountInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    name: string
    balance?: number
    startingBalance?: number
    currency: string
    color: string
    icon?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    startingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    startingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    name: string
    balance?: number
    startingBalance?: number
    currency: string
    color: string
    icon?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    startingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    startingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    account: AccountCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    userId: string
    accountId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    userId: string
    accountId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FutureTransactionCreateInput = {
    id?: string
    title: string
    amount: number
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFutureTransactionsInput
    account: AccountCreateNestedOneWithoutFutureTransactionsInput
    category?: CategoryCreateNestedOneWithoutFutureTransactionsInput
  }

  export type FutureTransactionUncheckedCreateInput = {
    id?: string
    title: string
    amount: number
    type: string
    userId: string
    accountId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FutureTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFutureTransactionsNestedInput
    account?: AccountUpdateOneRequiredWithoutFutureTransactionsNestedInput
    category?: CategoryUpdateOneWithoutFutureTransactionsNestedInput
  }

  export type FutureTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FutureTransactionCreateManyInput = {
    id?: string
    title: string
    amount: number
    type: string
    userId: string
    accountId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FutureTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FutureTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateInput = {
    id?: string
    type: string
    name: string
    amount: number
    currentValue?: number | null
    date: Date | string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateInput = {
    id?: string
    type: string
    name: string
    amount: number
    currentValue?: number | null
    date: Date | string
    note?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateManyInput = {
    id?: string
    type: string
    name: string
    amount: number
    currentValue?: number | null
    date: Date | string
    note?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetCreateInput = {
    id?: string
    amount: number
    spent?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBudgetsInput
    category: CategoryCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateInput = {
    id?: string
    amount: number
    spent?: number
    userId: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
    category?: CategoryUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetCreateManyInput = {
    id?: string
    amount: number
    spent?: number
    userId: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClosedMonthCreateInput = {
    id?: string
    monthName: string
    periodStart: Date | string
    periodEnd: Date | string
    income: number
    expenses: number
    net: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutClosedMonthsInput
    accounts?: HistoryAccountCreateNestedManyWithoutClosedMonthInput
  }

  export type ClosedMonthUncheckedCreateInput = {
    id?: string
    monthName: string
    periodStart: Date | string
    periodEnd: Date | string
    income: number
    expenses: number
    net: number
    userId: string
    createdAt?: Date | string
    accounts?: HistoryAccountUncheckedCreateNestedManyWithoutClosedMonthInput
  }

  export type ClosedMonthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClosedMonthsNestedInput
    accounts?: HistoryAccountUpdateManyWithoutClosedMonthNestedInput
  }

  export type ClosedMonthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: HistoryAccountUncheckedUpdateManyWithoutClosedMonthNestedInput
  }

  export type ClosedMonthCreateManyInput = {
    id?: string
    monthName: string
    periodStart: Date | string
    periodEnd: Date | string
    income: number
    expenses: number
    net: number
    userId: string
    createdAt?: Date | string
  }

  export type ClosedMonthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClosedMonthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryAccountCreateInput = {
    id?: string
    name: string
    startingBalance: number
    endingBalance: number
    currency: string
    color: string
    carriedForward?: boolean
    closedMonth: ClosedMonthCreateNestedOneWithoutAccountsInput
  }

  export type HistoryAccountUncheckedCreateInput = {
    id?: string
    name: string
    startingBalance: number
    endingBalance: number
    currency: string
    color: string
    carriedForward?: boolean
    closedMonthId: string
  }

  export type HistoryAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startingBalance?: FloatFieldUpdateOperationsInput | number
    endingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    carriedForward?: BoolFieldUpdateOperationsInput | boolean
    closedMonth?: ClosedMonthUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type HistoryAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startingBalance?: FloatFieldUpdateOperationsInput | number
    endingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    carriedForward?: BoolFieldUpdateOperationsInput | boolean
    closedMonthId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryAccountCreateManyInput = {
    id?: string
    name: string
    startingBalance: number
    endingBalance: number
    currency: string
    color: string
    carriedForward?: boolean
    closedMonthId: string
  }

  export type HistoryAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startingBalance?: FloatFieldUpdateOperationsInput | number
    endingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    carriedForward?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistoryAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startingBalance?: FloatFieldUpdateOperationsInput | number
    endingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    carriedForward?: BoolFieldUpdateOperationsInput | boolean
    closedMonthId?: StringFieldUpdateOperationsInput | string
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

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type FutureTransactionListRelationFilter = {
    every?: FutureTransactionWhereInput
    some?: FutureTransactionWhereInput
    none?: FutureTransactionWhereInput
  }

  export type InvestmentListRelationFilter = {
    every?: InvestmentWhereInput
    some?: InvestmentWhereInput
    none?: InvestmentWhereInput
  }

  export type BudgetListRelationFilter = {
    every?: BudgetWhereInput
    some?: BudgetWhereInput
    none?: BudgetWhereInput
  }

  export type ClosedMonthListRelationFilter = {
    every?: ClosedMonthWhereInput
    some?: ClosedMonthWhereInput
    none?: ClosedMonthWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FutureTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClosedMonthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    startingBalance?: SortOrder
    currency?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    balance?: SortOrder
    startingBalance?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    startingBalance?: SortOrder
    currency?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    startingBalance?: SortOrder
    currency?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    balance?: SortOrder
    startingBalance?: SortOrder
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

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    note?: SortOrder
    attachment?: SortOrder
    recurrence?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    note?: SortOrder
    attachment?: SortOrder
    recurrence?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    date?: SortOrder
    note?: SortOrder
    attachment?: SortOrder
    recurrence?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FutureTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FutureTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FutureTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FutureTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FutureTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type InvestmentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    currentValue?: SortOrder
    date?: SortOrder
    note?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentAvgOrderByAggregateInput = {
    amount?: SortOrder
    currentValue?: SortOrder
  }

  export type InvestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    currentValue?: SortOrder
    date?: SortOrder
    note?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    currentValue?: SortOrder
    date?: SortOrder
    note?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentSumOrderByAggregateInput = {
    amount?: SortOrder
    currentValue?: SortOrder
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

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    amount?: SortOrder
    spent?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    amount?: SortOrder
    spent?: SortOrder
  }

  export type HistoryAccountListRelationFilter = {
    every?: HistoryAccountWhereInput
    some?: HistoryAccountWhereInput
    none?: HistoryAccountWhereInput
  }

  export type HistoryAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClosedMonthCountOrderByAggregateInput = {
    id?: SortOrder
    monthName?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    income?: SortOrder
    expenses?: SortOrder
    net?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClosedMonthAvgOrderByAggregateInput = {
    income?: SortOrder
    expenses?: SortOrder
    net?: SortOrder
  }

  export type ClosedMonthMaxOrderByAggregateInput = {
    id?: SortOrder
    monthName?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    income?: SortOrder
    expenses?: SortOrder
    net?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClosedMonthMinOrderByAggregateInput = {
    id?: SortOrder
    monthName?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    income?: SortOrder
    expenses?: SortOrder
    net?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClosedMonthSumOrderByAggregateInput = {
    income?: SortOrder
    expenses?: SortOrder
    net?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClosedMonthScalarRelationFilter = {
    is?: ClosedMonthWhereInput
    isNot?: ClosedMonthWhereInput
  }

  export type HistoryAccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startingBalance?: SortOrder
    endingBalance?: SortOrder
    currency?: SortOrder
    color?: SortOrder
    carriedForward?: SortOrder
    closedMonthId?: SortOrder
  }

  export type HistoryAccountAvgOrderByAggregateInput = {
    startingBalance?: SortOrder
    endingBalance?: SortOrder
  }

  export type HistoryAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startingBalance?: SortOrder
    endingBalance?: SortOrder
    currency?: SortOrder
    color?: SortOrder
    carriedForward?: SortOrder
    closedMonthId?: SortOrder
  }

  export type HistoryAccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startingBalance?: SortOrder
    endingBalance?: SortOrder
    currency?: SortOrder
    color?: SortOrder
    carriedForward?: SortOrder
    closedMonthId?: SortOrder
  }

  export type HistoryAccountSumOrderByAggregateInput = {
    startingBalance?: SortOrder
    endingBalance?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FutureTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<FutureTransactionCreateWithoutUserInput, FutureTransactionUncheckedCreateWithoutUserInput> | FutureTransactionCreateWithoutUserInput[] | FutureTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutUserInput | FutureTransactionCreateOrConnectWithoutUserInput[]
    createMany?: FutureTransactionCreateManyUserInputEnvelope
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
  }

  export type InvestmentCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type BudgetCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type ClosedMonthCreateNestedManyWithoutUserInput = {
    create?: XOR<ClosedMonthCreateWithoutUserInput, ClosedMonthUncheckedCreateWithoutUserInput> | ClosedMonthCreateWithoutUserInput[] | ClosedMonthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClosedMonthCreateOrConnectWithoutUserInput | ClosedMonthCreateOrConnectWithoutUserInput[]
    createMany?: ClosedMonthCreateManyUserInputEnvelope
    connect?: ClosedMonthWhereUniqueInput | ClosedMonthWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FutureTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FutureTransactionCreateWithoutUserInput, FutureTransactionUncheckedCreateWithoutUserInput> | FutureTransactionCreateWithoutUserInput[] | FutureTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutUserInput | FutureTransactionCreateOrConnectWithoutUserInput[]
    createMany?: FutureTransactionCreateManyUserInputEnvelope
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type ClosedMonthUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClosedMonthCreateWithoutUserInput, ClosedMonthUncheckedCreateWithoutUserInput> | ClosedMonthCreateWithoutUserInput[] | ClosedMonthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClosedMonthCreateOrConnectWithoutUserInput | ClosedMonthCreateOrConnectWithoutUserInput[]
    createMany?: ClosedMonthCreateManyUserInputEnvelope
    connect?: ClosedMonthWhereUniqueInput | ClosedMonthWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
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

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type FutureTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<FutureTransactionCreateWithoutUserInput, FutureTransactionUncheckedCreateWithoutUserInput> | FutureTransactionCreateWithoutUserInput[] | FutureTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutUserInput | FutureTransactionCreateOrConnectWithoutUserInput[]
    upsert?: FutureTransactionUpsertWithWhereUniqueWithoutUserInput | FutureTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FutureTransactionCreateManyUserInputEnvelope
    set?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    disconnect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    delete?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    update?: FutureTransactionUpdateWithWhereUniqueWithoutUserInput | FutureTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FutureTransactionUpdateManyWithWhereWithoutUserInput | FutureTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FutureTransactionScalarWhereInput | FutureTransactionScalarWhereInput[]
  }

  export type InvestmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutUserInput | InvestmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutUserInput | InvestmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutUserInput | InvestmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type BudgetUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type ClosedMonthUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClosedMonthCreateWithoutUserInput, ClosedMonthUncheckedCreateWithoutUserInput> | ClosedMonthCreateWithoutUserInput[] | ClosedMonthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClosedMonthCreateOrConnectWithoutUserInput | ClosedMonthCreateOrConnectWithoutUserInput[]
    upsert?: ClosedMonthUpsertWithWhereUniqueWithoutUserInput | ClosedMonthUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClosedMonthCreateManyUserInputEnvelope
    set?: ClosedMonthWhereUniqueInput | ClosedMonthWhereUniqueInput[]
    disconnect?: ClosedMonthWhereUniqueInput | ClosedMonthWhereUniqueInput[]
    delete?: ClosedMonthWhereUniqueInput | ClosedMonthWhereUniqueInput[]
    connect?: ClosedMonthWhereUniqueInput | ClosedMonthWhereUniqueInput[]
    update?: ClosedMonthUpdateWithWhereUniqueWithoutUserInput | ClosedMonthUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClosedMonthUpdateManyWithWhereWithoutUserInput | ClosedMonthUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClosedMonthScalarWhereInput | ClosedMonthScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
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

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type FutureTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FutureTransactionCreateWithoutUserInput, FutureTransactionUncheckedCreateWithoutUserInput> | FutureTransactionCreateWithoutUserInput[] | FutureTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutUserInput | FutureTransactionCreateOrConnectWithoutUserInput[]
    upsert?: FutureTransactionUpsertWithWhereUniqueWithoutUserInput | FutureTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FutureTransactionCreateManyUserInputEnvelope
    set?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    disconnect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    delete?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    update?: FutureTransactionUpdateWithWhereUniqueWithoutUserInput | FutureTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FutureTransactionUpdateManyWithWhereWithoutUserInput | FutureTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FutureTransactionScalarWhereInput | FutureTransactionScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutUserInput | InvestmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutUserInput | InvestmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutUserInput | InvestmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type ClosedMonthUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClosedMonthCreateWithoutUserInput, ClosedMonthUncheckedCreateWithoutUserInput> | ClosedMonthCreateWithoutUserInput[] | ClosedMonthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClosedMonthCreateOrConnectWithoutUserInput | ClosedMonthCreateOrConnectWithoutUserInput[]
    upsert?: ClosedMonthUpsertWithWhereUniqueWithoutUserInput | ClosedMonthUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClosedMonthCreateManyUserInputEnvelope
    set?: ClosedMonthWhereUniqueInput | ClosedMonthWhereUniqueInput[]
    disconnect?: ClosedMonthWhereUniqueInput | ClosedMonthWhereUniqueInput[]
    delete?: ClosedMonthWhereUniqueInput | ClosedMonthWhereUniqueInput[]
    connect?: ClosedMonthWhereUniqueInput | ClosedMonthWhereUniqueInput[]
    update?: ClosedMonthUpdateWithWhereUniqueWithoutUserInput | ClosedMonthUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClosedMonthUpdateManyWithWhereWithoutUserInput | ClosedMonthUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClosedMonthScalarWhereInput | ClosedMonthScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FutureTransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FutureTransactionCreateWithoutCategoryInput, FutureTransactionUncheckedCreateWithoutCategoryInput> | FutureTransactionCreateWithoutCategoryInput[] | FutureTransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutCategoryInput | FutureTransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: FutureTransactionCreateManyCategoryInputEnvelope
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
  }

  export type BudgetCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FutureTransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FutureTransactionCreateWithoutCategoryInput, FutureTransactionUncheckedCreateWithoutCategoryInput> | FutureTransactionCreateWithoutCategoryInput[] | FutureTransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutCategoryInput | FutureTransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: FutureTransactionCreateManyCategoryInputEnvelope
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type FutureTransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FutureTransactionCreateWithoutCategoryInput, FutureTransactionUncheckedCreateWithoutCategoryInput> | FutureTransactionCreateWithoutCategoryInput[] | FutureTransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutCategoryInput | FutureTransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: FutureTransactionUpsertWithWhereUniqueWithoutCategoryInput | FutureTransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FutureTransactionCreateManyCategoryInputEnvelope
    set?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    disconnect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    delete?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    update?: FutureTransactionUpdateWithWhereUniqueWithoutCategoryInput | FutureTransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FutureTransactionUpdateManyWithWhereWithoutCategoryInput | FutureTransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FutureTransactionScalarWhereInput | FutureTransactionScalarWhereInput[]
  }

  export type BudgetUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutCategoryInput | BudgetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutCategoryInput | BudgetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutCategoryInput | BudgetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type FutureTransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FutureTransactionCreateWithoutCategoryInput, FutureTransactionUncheckedCreateWithoutCategoryInput> | FutureTransactionCreateWithoutCategoryInput[] | FutureTransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutCategoryInput | FutureTransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: FutureTransactionUpsertWithWhereUniqueWithoutCategoryInput | FutureTransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FutureTransactionCreateManyCategoryInputEnvelope
    set?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    disconnect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    delete?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    update?: FutureTransactionUpdateWithWhereUniqueWithoutCategoryInput | FutureTransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FutureTransactionUpdateManyWithWhereWithoutCategoryInput | FutureTransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FutureTransactionScalarWhereInput | FutureTransactionScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutCategoryInput | BudgetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutCategoryInput | BudgetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutCategoryInput | BudgetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FutureTransactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<FutureTransactionCreateWithoutAccountInput, FutureTransactionUncheckedCreateWithoutAccountInput> | FutureTransactionCreateWithoutAccountInput[] | FutureTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutAccountInput | FutureTransactionCreateOrConnectWithoutAccountInput[]
    createMany?: FutureTransactionCreateManyAccountInputEnvelope
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FutureTransactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<FutureTransactionCreateWithoutAccountInput, FutureTransactionUncheckedCreateWithoutAccountInput> | FutureTransactionCreateWithoutAccountInput[] | FutureTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutAccountInput | FutureTransactionCreateOrConnectWithoutAccountInput[]
    createMany?: FutureTransactionCreateManyAccountInputEnvelope
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
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

  export type TransactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type FutureTransactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<FutureTransactionCreateWithoutAccountInput, FutureTransactionUncheckedCreateWithoutAccountInput> | FutureTransactionCreateWithoutAccountInput[] | FutureTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutAccountInput | FutureTransactionCreateOrConnectWithoutAccountInput[]
    upsert?: FutureTransactionUpsertWithWhereUniqueWithoutAccountInput | FutureTransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: FutureTransactionCreateManyAccountInputEnvelope
    set?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    disconnect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    delete?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    update?: FutureTransactionUpdateWithWhereUniqueWithoutAccountInput | FutureTransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: FutureTransactionUpdateManyWithWhereWithoutAccountInput | FutureTransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: FutureTransactionScalarWhereInput | FutureTransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type FutureTransactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<FutureTransactionCreateWithoutAccountInput, FutureTransactionUncheckedCreateWithoutAccountInput> | FutureTransactionCreateWithoutAccountInput[] | FutureTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: FutureTransactionCreateOrConnectWithoutAccountInput | FutureTransactionCreateOrConnectWithoutAccountInput[]
    upsert?: FutureTransactionUpsertWithWhereUniqueWithoutAccountInput | FutureTransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: FutureTransactionCreateManyAccountInputEnvelope
    set?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    disconnect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    delete?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    connect?: FutureTransactionWhereUniqueInput | FutureTransactionWhereUniqueInput[]
    update?: FutureTransactionUpdateWithWhereUniqueWithoutAccountInput | FutureTransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: FutureTransactionUpdateManyWithWhereWithoutAccountInput | FutureTransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: FutureTransactionScalarWhereInput | FutureTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput
    connect?: AccountWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type AccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput
    upsert?: AccountUpsertWithoutTransactionsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTransactionsInput, AccountUpdateWithoutTransactionsInput>, AccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    upsert?: CategoryUpsertWithoutTransactionsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTransactionsInput, CategoryUpdateWithoutTransactionsInput>, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutFutureTransactionsInput = {
    create?: XOR<UserCreateWithoutFutureTransactionsInput, UserUncheckedCreateWithoutFutureTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFutureTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutFutureTransactionsInput = {
    create?: XOR<AccountCreateWithoutFutureTransactionsInput, AccountUncheckedCreateWithoutFutureTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutFutureTransactionsInput
    connect?: AccountWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutFutureTransactionsInput = {
    create?: XOR<CategoryCreateWithoutFutureTransactionsInput, CategoryUncheckedCreateWithoutFutureTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFutureTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFutureTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutFutureTransactionsInput, UserUncheckedCreateWithoutFutureTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFutureTransactionsInput
    upsert?: UserUpsertWithoutFutureTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFutureTransactionsInput, UserUpdateWithoutFutureTransactionsInput>, UserUncheckedUpdateWithoutFutureTransactionsInput>
  }

  export type AccountUpdateOneRequiredWithoutFutureTransactionsNestedInput = {
    create?: XOR<AccountCreateWithoutFutureTransactionsInput, AccountUncheckedCreateWithoutFutureTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutFutureTransactionsInput
    upsert?: AccountUpsertWithoutFutureTransactionsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutFutureTransactionsInput, AccountUpdateWithoutFutureTransactionsInput>, AccountUncheckedUpdateWithoutFutureTransactionsInput>
  }

  export type CategoryUpdateOneWithoutFutureTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutFutureTransactionsInput, CategoryUncheckedCreateWithoutFutureTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFutureTransactionsInput
    upsert?: CategoryUpsertWithoutFutureTransactionsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutFutureTransactionsInput, CategoryUpdateWithoutFutureTransactionsInput>, CategoryUncheckedUpdateWithoutFutureTransactionsInput>
  }

  export type UserCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    upsert?: UserUpsertWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvestmentsInput, UserUpdateWithoutInvestmentsInput>, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type UserCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBudgetsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    upsert?: UserUpsertWithoutBudgetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBudgetsInput, UserUpdateWithoutBudgetsInput>, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type CategoryUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBudgetsInput
    upsert?: CategoryUpsertWithoutBudgetsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBudgetsInput, CategoryUpdateWithoutBudgetsInput>, CategoryUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserCreateNestedOneWithoutClosedMonthsInput = {
    create?: XOR<UserCreateWithoutClosedMonthsInput, UserUncheckedCreateWithoutClosedMonthsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClosedMonthsInput
    connect?: UserWhereUniqueInput
  }

  export type HistoryAccountCreateNestedManyWithoutClosedMonthInput = {
    create?: XOR<HistoryAccountCreateWithoutClosedMonthInput, HistoryAccountUncheckedCreateWithoutClosedMonthInput> | HistoryAccountCreateWithoutClosedMonthInput[] | HistoryAccountUncheckedCreateWithoutClosedMonthInput[]
    connectOrCreate?: HistoryAccountCreateOrConnectWithoutClosedMonthInput | HistoryAccountCreateOrConnectWithoutClosedMonthInput[]
    createMany?: HistoryAccountCreateManyClosedMonthInputEnvelope
    connect?: HistoryAccountWhereUniqueInput | HistoryAccountWhereUniqueInput[]
  }

  export type HistoryAccountUncheckedCreateNestedManyWithoutClosedMonthInput = {
    create?: XOR<HistoryAccountCreateWithoutClosedMonthInput, HistoryAccountUncheckedCreateWithoutClosedMonthInput> | HistoryAccountCreateWithoutClosedMonthInput[] | HistoryAccountUncheckedCreateWithoutClosedMonthInput[]
    connectOrCreate?: HistoryAccountCreateOrConnectWithoutClosedMonthInput | HistoryAccountCreateOrConnectWithoutClosedMonthInput[]
    createMany?: HistoryAccountCreateManyClosedMonthInputEnvelope
    connect?: HistoryAccountWhereUniqueInput | HistoryAccountWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClosedMonthsNestedInput = {
    create?: XOR<UserCreateWithoutClosedMonthsInput, UserUncheckedCreateWithoutClosedMonthsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClosedMonthsInput
    upsert?: UserUpsertWithoutClosedMonthsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClosedMonthsInput, UserUpdateWithoutClosedMonthsInput>, UserUncheckedUpdateWithoutClosedMonthsInput>
  }

  export type HistoryAccountUpdateManyWithoutClosedMonthNestedInput = {
    create?: XOR<HistoryAccountCreateWithoutClosedMonthInput, HistoryAccountUncheckedCreateWithoutClosedMonthInput> | HistoryAccountCreateWithoutClosedMonthInput[] | HistoryAccountUncheckedCreateWithoutClosedMonthInput[]
    connectOrCreate?: HistoryAccountCreateOrConnectWithoutClosedMonthInput | HistoryAccountCreateOrConnectWithoutClosedMonthInput[]
    upsert?: HistoryAccountUpsertWithWhereUniqueWithoutClosedMonthInput | HistoryAccountUpsertWithWhereUniqueWithoutClosedMonthInput[]
    createMany?: HistoryAccountCreateManyClosedMonthInputEnvelope
    set?: HistoryAccountWhereUniqueInput | HistoryAccountWhereUniqueInput[]
    disconnect?: HistoryAccountWhereUniqueInput | HistoryAccountWhereUniqueInput[]
    delete?: HistoryAccountWhereUniqueInput | HistoryAccountWhereUniqueInput[]
    connect?: HistoryAccountWhereUniqueInput | HistoryAccountWhereUniqueInput[]
    update?: HistoryAccountUpdateWithWhereUniqueWithoutClosedMonthInput | HistoryAccountUpdateWithWhereUniqueWithoutClosedMonthInput[]
    updateMany?: HistoryAccountUpdateManyWithWhereWithoutClosedMonthInput | HistoryAccountUpdateManyWithWhereWithoutClosedMonthInput[]
    deleteMany?: HistoryAccountScalarWhereInput | HistoryAccountScalarWhereInput[]
  }

  export type HistoryAccountUncheckedUpdateManyWithoutClosedMonthNestedInput = {
    create?: XOR<HistoryAccountCreateWithoutClosedMonthInput, HistoryAccountUncheckedCreateWithoutClosedMonthInput> | HistoryAccountCreateWithoutClosedMonthInput[] | HistoryAccountUncheckedCreateWithoutClosedMonthInput[]
    connectOrCreate?: HistoryAccountCreateOrConnectWithoutClosedMonthInput | HistoryAccountCreateOrConnectWithoutClosedMonthInput[]
    upsert?: HistoryAccountUpsertWithWhereUniqueWithoutClosedMonthInput | HistoryAccountUpsertWithWhereUniqueWithoutClosedMonthInput[]
    createMany?: HistoryAccountCreateManyClosedMonthInputEnvelope
    set?: HistoryAccountWhereUniqueInput | HistoryAccountWhereUniqueInput[]
    disconnect?: HistoryAccountWhereUniqueInput | HistoryAccountWhereUniqueInput[]
    delete?: HistoryAccountWhereUniqueInput | HistoryAccountWhereUniqueInput[]
    connect?: HistoryAccountWhereUniqueInput | HistoryAccountWhereUniqueInput[]
    update?: HistoryAccountUpdateWithWhereUniqueWithoutClosedMonthInput | HistoryAccountUpdateWithWhereUniqueWithoutClosedMonthInput[]
    updateMany?: HistoryAccountUpdateManyWithWhereWithoutClosedMonthInput | HistoryAccountUpdateManyWithWhereWithoutClosedMonthInput[]
    deleteMany?: HistoryAccountScalarWhereInput | HistoryAccountScalarWhereInput[]
  }

  export type ClosedMonthCreateNestedOneWithoutAccountsInput = {
    create?: XOR<ClosedMonthCreateWithoutAccountsInput, ClosedMonthUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: ClosedMonthCreateOrConnectWithoutAccountsInput
    connect?: ClosedMonthWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClosedMonthUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<ClosedMonthCreateWithoutAccountsInput, ClosedMonthUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: ClosedMonthCreateOrConnectWithoutAccountsInput
    upsert?: ClosedMonthUpsertWithoutAccountsInput
    connect?: ClosedMonthWhereUniqueInput
    update?: XOR<XOR<ClosedMonthUpdateToOneWithWhereWithoutAccountsInput, ClosedMonthUpdateWithoutAccountsInput>, ClosedMonthUncheckedUpdateWithoutAccountsInput>
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

  export type CategoryCreateWithoutUserInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutCategoryInput
    budgets?: BudgetCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutCategoryInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    name: string
    balance?: number
    startingBalance?: number
    currency: string
    color: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutAccountInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    balance?: number
    startingBalance?: number
    currency: string
    color: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    accountId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FutureTransactionCreateWithoutUserInput = {
    id?: string
    title: string
    amount: number
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutFutureTransactionsInput
    category?: CategoryCreateNestedOneWithoutFutureTransactionsInput
  }

  export type FutureTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    amount: number
    type: string
    accountId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FutureTransactionCreateOrConnectWithoutUserInput = {
    where: FutureTransactionWhereUniqueInput
    create: XOR<FutureTransactionCreateWithoutUserInput, FutureTransactionUncheckedCreateWithoutUserInput>
  }

  export type FutureTransactionCreateManyUserInputEnvelope = {
    data: FutureTransactionCreateManyUserInput | FutureTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentCreateWithoutUserInput = {
    id?: string
    type: string
    name: string
    amount: number
    currentValue?: number | null
    date: Date | string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    name: string
    amount: number
    currentValue?: number | null
    date: Date | string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentCreateOrConnectWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput>
  }

  export type InvestmentCreateManyUserInputEnvelope = {
    data: InvestmentCreateManyUserInput | InvestmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BudgetCreateWithoutUserInput = {
    id?: string
    amount: number
    spent?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    spent?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetCreateOrConnectWithoutUserInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetCreateManyUserInputEnvelope = {
    data: BudgetCreateManyUserInput | BudgetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClosedMonthCreateWithoutUserInput = {
    id?: string
    monthName: string
    periodStart: Date | string
    periodEnd: Date | string
    income: number
    expenses: number
    net: number
    createdAt?: Date | string
    accounts?: HistoryAccountCreateNestedManyWithoutClosedMonthInput
  }

  export type ClosedMonthUncheckedCreateWithoutUserInput = {
    id?: string
    monthName: string
    periodStart: Date | string
    periodEnd: Date | string
    income: number
    expenses: number
    net: number
    createdAt?: Date | string
    accounts?: HistoryAccountUncheckedCreateNestedManyWithoutClosedMonthInput
  }

  export type ClosedMonthCreateOrConnectWithoutUserInput = {
    where: ClosedMonthWhereUniqueInput
    create: XOR<ClosedMonthCreateWithoutUserInput, ClosedMonthUncheckedCreateWithoutUserInput>
  }

  export type ClosedMonthCreateManyUserInputEnvelope = {
    data: ClosedMonthCreateManyUserInput | ClosedMonthCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    color?: StringFilter<"Category"> | string
    userId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
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
    name?: StringFilter<"Account"> | string
    balance?: FloatFilter<"Account"> | number
    startingBalance?: FloatFilter<"Account"> | number
    currency?: StringFilter<"Account"> | string
    color?: StringFilter<"Account"> | string
    icon?: StringNullableFilter<"Account"> | string | null
    userId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    title?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    note?: StringNullableFilter<"Transaction"> | string | null
    attachment?: StringNullableFilter<"Transaction"> | string | null
    recurrence?: StringNullableFilter<"Transaction"> | string | null
    userId?: StringFilter<"Transaction"> | string
    accountId?: StringFilter<"Transaction"> | string
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type FutureTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: FutureTransactionWhereUniqueInput
    update: XOR<FutureTransactionUpdateWithoutUserInput, FutureTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<FutureTransactionCreateWithoutUserInput, FutureTransactionUncheckedCreateWithoutUserInput>
  }

  export type FutureTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: FutureTransactionWhereUniqueInput
    data: XOR<FutureTransactionUpdateWithoutUserInput, FutureTransactionUncheckedUpdateWithoutUserInput>
  }

  export type FutureTransactionUpdateManyWithWhereWithoutUserInput = {
    where: FutureTransactionScalarWhereInput
    data: XOR<FutureTransactionUpdateManyMutationInput, FutureTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type FutureTransactionScalarWhereInput = {
    AND?: FutureTransactionScalarWhereInput | FutureTransactionScalarWhereInput[]
    OR?: FutureTransactionScalarWhereInput[]
    NOT?: FutureTransactionScalarWhereInput | FutureTransactionScalarWhereInput[]
    id?: StringFilter<"FutureTransaction"> | string
    title?: StringFilter<"FutureTransaction"> | string
    amount?: FloatFilter<"FutureTransaction"> | number
    type?: StringFilter<"FutureTransaction"> | string
    userId?: StringFilter<"FutureTransaction"> | string
    accountId?: StringFilter<"FutureTransaction"> | string
    categoryId?: StringNullableFilter<"FutureTransaction"> | string | null
    createdAt?: DateTimeFilter<"FutureTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"FutureTransaction"> | Date | string
  }

  export type InvestmentUpsertWithWhereUniqueWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutUserInput, InvestmentUncheckedUpdateWithoutUserInput>
    create: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutUserInput, InvestmentUncheckedUpdateWithoutUserInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutUserInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutUserInput>
  }

  export type InvestmentScalarWhereInput = {
    AND?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    OR?: InvestmentScalarWhereInput[]
    NOT?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    id?: StringFilter<"Investment"> | string
    type?: StringFilter<"Investment"> | string
    name?: StringFilter<"Investment"> | string
    amount?: FloatFilter<"Investment"> | number
    currentValue?: FloatNullableFilter<"Investment"> | number | null
    date?: DateTimeFilter<"Investment"> | Date | string
    note?: StringNullableFilter<"Investment"> | string | null
    userId?: StringFilter<"Investment"> | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    updatedAt?: DateTimeFilter<"Investment"> | Date | string
  }

  export type BudgetUpsertWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
  }

  export type BudgetUpdateManyWithWhereWithoutUserInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutUserInput>
  }

  export type BudgetScalarWhereInput = {
    AND?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    OR?: BudgetScalarWhereInput[]
    NOT?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    id?: StringFilter<"Budget"> | string
    amount?: FloatFilter<"Budget"> | number
    spent?: FloatFilter<"Budget"> | number
    userId?: StringFilter<"Budget"> | string
    categoryId?: StringFilter<"Budget"> | string
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeFilter<"Budget"> | Date | string
  }

  export type ClosedMonthUpsertWithWhereUniqueWithoutUserInput = {
    where: ClosedMonthWhereUniqueInput
    update: XOR<ClosedMonthUpdateWithoutUserInput, ClosedMonthUncheckedUpdateWithoutUserInput>
    create: XOR<ClosedMonthCreateWithoutUserInput, ClosedMonthUncheckedCreateWithoutUserInput>
  }

  export type ClosedMonthUpdateWithWhereUniqueWithoutUserInput = {
    where: ClosedMonthWhereUniqueInput
    data: XOR<ClosedMonthUpdateWithoutUserInput, ClosedMonthUncheckedUpdateWithoutUserInput>
  }

  export type ClosedMonthUpdateManyWithWhereWithoutUserInput = {
    where: ClosedMonthScalarWhereInput
    data: XOR<ClosedMonthUpdateManyMutationInput, ClosedMonthUncheckedUpdateManyWithoutUserInput>
  }

  export type ClosedMonthScalarWhereInput = {
    AND?: ClosedMonthScalarWhereInput | ClosedMonthScalarWhereInput[]
    OR?: ClosedMonthScalarWhereInput[]
    NOT?: ClosedMonthScalarWhereInput | ClosedMonthScalarWhereInput[]
    id?: StringFilter<"ClosedMonth"> | string
    monthName?: StringFilter<"ClosedMonth"> | string
    periodStart?: DateTimeFilter<"ClosedMonth"> | Date | string
    periodEnd?: DateTimeFilter<"ClosedMonth"> | Date | string
    income?: FloatFilter<"ClosedMonth"> | number
    expenses?: FloatFilter<"ClosedMonth"> | number
    net?: FloatFilter<"ClosedMonth"> | number
    userId?: StringFilter<"ClosedMonth"> | string
    createdAt?: DateTimeFilter<"ClosedMonth"> | Date | string
  }

  export type UserCreateWithoutCategoriesInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type TransactionCreateWithoutCategoryInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    account: AccountCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    userId: string
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FutureTransactionCreateWithoutCategoryInput = {
    id?: string
    title: string
    amount: number
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFutureTransactionsInput
    account: AccountCreateNestedOneWithoutFutureTransactionsInput
  }

  export type FutureTransactionUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    amount: number
    type: string
    userId: string
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FutureTransactionCreateOrConnectWithoutCategoryInput = {
    where: FutureTransactionWhereUniqueInput
    create: XOR<FutureTransactionCreateWithoutCategoryInput, FutureTransactionUncheckedCreateWithoutCategoryInput>
  }

  export type FutureTransactionCreateManyCategoryInputEnvelope = {
    data: FutureTransactionCreateManyCategoryInput | FutureTransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BudgetCreateWithoutCategoryInput = {
    id?: string
    amount: number
    spent?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateWithoutCategoryInput = {
    id?: string
    amount: number
    spent?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetCreateOrConnectWithoutCategoryInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput>
  }

  export type BudgetCreateManyCategoryInputEnvelope = {
    data: BudgetCreateManyCategoryInput | BudgetCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FutureTransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FutureTransactionWhereUniqueInput
    update: XOR<FutureTransactionUpdateWithoutCategoryInput, FutureTransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<FutureTransactionCreateWithoutCategoryInput, FutureTransactionUncheckedCreateWithoutCategoryInput>
  }

  export type FutureTransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FutureTransactionWhereUniqueInput
    data: XOR<FutureTransactionUpdateWithoutCategoryInput, FutureTransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type FutureTransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: FutureTransactionScalarWhereInput
    data: XOR<FutureTransactionUpdateManyMutationInput, FutureTransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BudgetUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutCategoryInput, BudgetUncheckedUpdateWithoutCategoryInput>
    create: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutCategoryInput, BudgetUncheckedUpdateWithoutCategoryInput>
  }

  export type BudgetUpdateManyWithWhereWithoutCategoryInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type TransactionCreateWithoutAccountInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    category?: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutAccountInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    userId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionCreateManyAccountInputEnvelope = {
    data: TransactionCreateManyAccountInput | TransactionCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type FutureTransactionCreateWithoutAccountInput = {
    id?: string
    title: string
    amount: number
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFutureTransactionsInput
    category?: CategoryCreateNestedOneWithoutFutureTransactionsInput
  }

  export type FutureTransactionUncheckedCreateWithoutAccountInput = {
    id?: string
    title: string
    amount: number
    type: string
    userId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FutureTransactionCreateOrConnectWithoutAccountInput = {
    where: FutureTransactionWhereUniqueInput
    create: XOR<FutureTransactionCreateWithoutAccountInput, FutureTransactionUncheckedCreateWithoutAccountInput>
  }

  export type FutureTransactionCreateManyAccountInputEnvelope = {
    data: FutureTransactionCreateManyAccountInput | FutureTransactionCreateManyAccountInput[]
    skipDuplicates?: boolean
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
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutAccountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type FutureTransactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: FutureTransactionWhereUniqueInput
    update: XOR<FutureTransactionUpdateWithoutAccountInput, FutureTransactionUncheckedUpdateWithoutAccountInput>
    create: XOR<FutureTransactionCreateWithoutAccountInput, FutureTransactionUncheckedCreateWithoutAccountInput>
  }

  export type FutureTransactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: FutureTransactionWhereUniqueInput
    data: XOR<FutureTransactionUpdateWithoutAccountInput, FutureTransactionUncheckedUpdateWithoutAccountInput>
  }

  export type FutureTransactionUpdateManyWithWhereWithoutAccountInput = {
    where: FutureTransactionScalarWhereInput
    data: XOR<FutureTransactionUpdateManyMutationInput, FutureTransactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type AccountCreateWithoutTransactionsInput = {
    id?: string
    name: string
    balance?: number
    startingBalance?: number
    currency: string
    color: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    balance?: number
    startingBalance?: number
    currency: string
    color: string
    icon?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutTransactionsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
  }

  export type CategoryCreateWithoutTransactionsInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutCategoryInput
    budgets?: BudgetCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    color: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutCategoryInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountUpsertWithoutTransactionsInput = {
    update: XOR<AccountUpdateWithoutTransactionsInput, AccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTransactionsInput, AccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type AccountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    startingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    startingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type CategoryUpsertWithoutTransactionsInput = {
    update: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCreateWithoutFutureTransactionsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFutureTransactionsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFutureTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFutureTransactionsInput, UserUncheckedCreateWithoutFutureTransactionsInput>
  }

  export type AccountCreateWithoutFutureTransactionsInput = {
    id?: string
    name: string
    balance?: number
    startingBalance?: number
    currency: string
    color: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    transactions?: TransactionCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutFutureTransactionsInput = {
    id?: string
    name: string
    balance?: number
    startingBalance?: number
    currency: string
    color: string
    icon?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutFutureTransactionsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutFutureTransactionsInput, AccountUncheckedCreateWithoutFutureTransactionsInput>
  }

  export type CategoryCreateWithoutFutureTransactionsInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    budgets?: BudgetCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutFutureTransactionsInput = {
    id?: string
    name: string
    color: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutFutureTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFutureTransactionsInput, CategoryUncheckedCreateWithoutFutureTransactionsInput>
  }

  export type UserUpsertWithoutFutureTransactionsInput = {
    update: XOR<UserUpdateWithoutFutureTransactionsInput, UserUncheckedUpdateWithoutFutureTransactionsInput>
    create: XOR<UserCreateWithoutFutureTransactionsInput, UserUncheckedCreateWithoutFutureTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFutureTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFutureTransactionsInput, UserUncheckedUpdateWithoutFutureTransactionsInput>
  }

  export type UserUpdateWithoutFutureTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFutureTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountUpsertWithoutFutureTransactionsInput = {
    update: XOR<AccountUpdateWithoutFutureTransactionsInput, AccountUncheckedUpdateWithoutFutureTransactionsInput>
    create: XOR<AccountCreateWithoutFutureTransactionsInput, AccountUncheckedCreateWithoutFutureTransactionsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutFutureTransactionsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutFutureTransactionsInput, AccountUncheckedUpdateWithoutFutureTransactionsInput>
  }

  export type AccountUpdateWithoutFutureTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    startingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutFutureTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    startingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type CategoryUpsertWithoutFutureTransactionsInput = {
    update: XOR<CategoryUpdateWithoutFutureTransactionsInput, CategoryUncheckedUpdateWithoutFutureTransactionsInput>
    create: XOR<CategoryCreateWithoutFutureTransactionsInput, CategoryUncheckedCreateWithoutFutureTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutFutureTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutFutureTransactionsInput, CategoryUncheckedUpdateWithoutFutureTransactionsInput>
  }

  export type CategoryUpdateWithoutFutureTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutFutureTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCreateWithoutInvestmentsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvestmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
  }

  export type UserUpsertWithoutInvestmentsInput = {
    update: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type UserUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBudgetsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBudgetsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    closedMonths?: ClosedMonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBudgetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
  }

  export type CategoryCreateWithoutBudgetsInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBudgetsInput = {
    id?: string
    name: string
    color: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBudgetsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
  }

  export type UserUpsertWithoutBudgetsInput = {
    update: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    closedMonths?: ClosedMonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutBudgetsInput = {
    update: XOR<CategoryUpdateWithoutBudgetsInput, CategoryUncheckedUpdateWithoutBudgetsInput>
    create: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBudgetsInput, CategoryUncheckedUpdateWithoutBudgetsInput>
  }

  export type CategoryUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCreateWithoutClosedMonthsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClosedMonthsInput = {
    id?: string
    email: string
    name: string
    avatar?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    futureTransactions?: FutureTransactionUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClosedMonthsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClosedMonthsInput, UserUncheckedCreateWithoutClosedMonthsInput>
  }

  export type HistoryAccountCreateWithoutClosedMonthInput = {
    id?: string
    name: string
    startingBalance: number
    endingBalance: number
    currency: string
    color: string
    carriedForward?: boolean
  }

  export type HistoryAccountUncheckedCreateWithoutClosedMonthInput = {
    id?: string
    name: string
    startingBalance: number
    endingBalance: number
    currency: string
    color: string
    carriedForward?: boolean
  }

  export type HistoryAccountCreateOrConnectWithoutClosedMonthInput = {
    where: HistoryAccountWhereUniqueInput
    create: XOR<HistoryAccountCreateWithoutClosedMonthInput, HistoryAccountUncheckedCreateWithoutClosedMonthInput>
  }

  export type HistoryAccountCreateManyClosedMonthInputEnvelope = {
    data: HistoryAccountCreateManyClosedMonthInput | HistoryAccountCreateManyClosedMonthInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClosedMonthsInput = {
    update: XOR<UserUpdateWithoutClosedMonthsInput, UserUncheckedUpdateWithoutClosedMonthsInput>
    create: XOR<UserCreateWithoutClosedMonthsInput, UserUncheckedCreateWithoutClosedMonthsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClosedMonthsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClosedMonthsInput, UserUncheckedUpdateWithoutClosedMonthsInput>
  }

  export type UserUpdateWithoutClosedMonthsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClosedMonthsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HistoryAccountUpsertWithWhereUniqueWithoutClosedMonthInput = {
    where: HistoryAccountWhereUniqueInput
    update: XOR<HistoryAccountUpdateWithoutClosedMonthInput, HistoryAccountUncheckedUpdateWithoutClosedMonthInput>
    create: XOR<HistoryAccountCreateWithoutClosedMonthInput, HistoryAccountUncheckedCreateWithoutClosedMonthInput>
  }

  export type HistoryAccountUpdateWithWhereUniqueWithoutClosedMonthInput = {
    where: HistoryAccountWhereUniqueInput
    data: XOR<HistoryAccountUpdateWithoutClosedMonthInput, HistoryAccountUncheckedUpdateWithoutClosedMonthInput>
  }

  export type HistoryAccountUpdateManyWithWhereWithoutClosedMonthInput = {
    where: HistoryAccountScalarWhereInput
    data: XOR<HistoryAccountUpdateManyMutationInput, HistoryAccountUncheckedUpdateManyWithoutClosedMonthInput>
  }

  export type HistoryAccountScalarWhereInput = {
    AND?: HistoryAccountScalarWhereInput | HistoryAccountScalarWhereInput[]
    OR?: HistoryAccountScalarWhereInput[]
    NOT?: HistoryAccountScalarWhereInput | HistoryAccountScalarWhereInput[]
    id?: StringFilter<"HistoryAccount"> | string
    name?: StringFilter<"HistoryAccount"> | string
    startingBalance?: FloatFilter<"HistoryAccount"> | number
    endingBalance?: FloatFilter<"HistoryAccount"> | number
    currency?: StringFilter<"HistoryAccount"> | string
    color?: StringFilter<"HistoryAccount"> | string
    carriedForward?: BoolFilter<"HistoryAccount"> | boolean
    closedMonthId?: StringFilter<"HistoryAccount"> | string
  }

  export type ClosedMonthCreateWithoutAccountsInput = {
    id?: string
    monthName: string
    periodStart: Date | string
    periodEnd: Date | string
    income: number
    expenses: number
    net: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutClosedMonthsInput
  }

  export type ClosedMonthUncheckedCreateWithoutAccountsInput = {
    id?: string
    monthName: string
    periodStart: Date | string
    periodEnd: Date | string
    income: number
    expenses: number
    net: number
    userId: string
    createdAt?: Date | string
  }

  export type ClosedMonthCreateOrConnectWithoutAccountsInput = {
    where: ClosedMonthWhereUniqueInput
    create: XOR<ClosedMonthCreateWithoutAccountsInput, ClosedMonthUncheckedCreateWithoutAccountsInput>
  }

  export type ClosedMonthUpsertWithoutAccountsInput = {
    update: XOR<ClosedMonthUpdateWithoutAccountsInput, ClosedMonthUncheckedUpdateWithoutAccountsInput>
    create: XOR<ClosedMonthCreateWithoutAccountsInput, ClosedMonthUncheckedCreateWithoutAccountsInput>
    where?: ClosedMonthWhereInput
  }

  export type ClosedMonthUpdateToOneWithWhereWithoutAccountsInput = {
    where?: ClosedMonthWhereInput
    data: XOR<ClosedMonthUpdateWithoutAccountsInput, ClosedMonthUncheckedUpdateWithoutAccountsInput>
  }

  export type ClosedMonthUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClosedMonthsNestedInput
  }

  export type ClosedMonthUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyUserInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    name: string
    balance?: number
    startingBalance?: number
    currency: string
    color: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    accountId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FutureTransactionCreateManyUserInput = {
    id?: string
    title: string
    amount: number
    type: string
    accountId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentCreateManyUserInput = {
    id?: string
    type: string
    name: string
    amount: number
    currentValue?: number | null
    date: Date | string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetCreateManyUserInput = {
    id?: string
    amount: number
    spent?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClosedMonthCreateManyUserInput = {
    id?: string
    monthName: string
    periodStart: Date | string
    periodEnd: Date | string
    income: number
    expenses: number
    net: number
    createdAt?: Date | string
  }

  export type CategoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    startingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
    futureTransactions?: FutureTransactionUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    startingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
    futureTransactions?: FutureTransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    startingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FutureTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutFutureTransactionsNestedInput
    category?: CategoryUpdateOneWithoutFutureTransactionsNestedInput
  }

  export type FutureTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FutureTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currentValue?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClosedMonthUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: HistoryAccountUpdateManyWithoutClosedMonthNestedInput
  }

  export type ClosedMonthUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: HistoryAccountUncheckedUpdateManyWithoutClosedMonthNestedInput
  }

  export type ClosedMonthUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyCategoryInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    userId: string
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FutureTransactionCreateManyCategoryInput = {
    id?: string
    title: string
    amount: number
    type: string
    userId: string
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetCreateManyCategoryInput = {
    id?: string
    amount: number
    spent?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FutureTransactionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFutureTransactionsNestedInput
    account?: AccountUpdateOneRequiredWithoutFutureTransactionsNestedInput
  }

  export type FutureTransactionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FutureTransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    spent?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyAccountInput = {
    id?: string
    title: string
    amount: number
    type: string
    date?: Date | string
    note?: string | null
    attachment?: string | null
    recurrence?: string | null
    userId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FutureTransactionCreateManyAccountInput = {
    id?: string
    title: string
    amount: number
    type: string
    userId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    attachment?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FutureTransactionUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFutureTransactionsNestedInput
    category?: CategoryUpdateOneWithoutFutureTransactionsNestedInput
  }

  export type FutureTransactionUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FutureTransactionUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryAccountCreateManyClosedMonthInput = {
    id?: string
    name: string
    startingBalance: number
    endingBalance: number
    currency: string
    color: string
    carriedForward?: boolean
  }

  export type HistoryAccountUpdateWithoutClosedMonthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startingBalance?: FloatFieldUpdateOperationsInput | number
    endingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    carriedForward?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistoryAccountUncheckedUpdateWithoutClosedMonthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startingBalance?: FloatFieldUpdateOperationsInput | number
    endingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    carriedForward?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistoryAccountUncheckedUpdateManyWithoutClosedMonthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startingBalance?: FloatFieldUpdateOperationsInput | number
    endingBalance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    carriedForward?: BoolFieldUpdateOperationsInput | boolean
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