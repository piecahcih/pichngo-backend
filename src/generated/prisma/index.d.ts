
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
 * Model TravelerInfo
 * 
 */
export type TravelerInfo = $Result.DefaultSelection<Prisma.$TravelerInfoPayload>
/**
 * Model Hotel
 * 
 */
export type Hotel = $Result.DefaultSelection<Prisma.$HotelPayload>
/**
 * Model HotelImg
 * 
 */
export type HotelImg = $Result.DefaultSelection<Prisma.$HotelImgPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BookingGuest
 * 
 */
export type BookingGuest = $Result.DefaultSelection<Prisma.$BookingGuestPayload>
/**
 * Model Discount
 * 
 */
export type Discount = $Result.DefaultSelection<Prisma.$DiscountPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Rewards
 * 
 */
export type Rewards = $Result.DefaultSelection<Prisma.$RewardsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const bookingStatus: {
  WAITING: 'WAITING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type bookingStatus = (typeof bookingStatus)[keyof typeof bookingStatus]


export const DiscountType: {
  PERCENTAGE: 'PERCENTAGE',
  FIXED_AMOUNT: 'FIXED_AMOUNT'
};

export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType]


export const PaymentMethod: {
  CREDIT_CARD: 'CREDIT_CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  QR_PAYMENT: 'QR_PAYMENT'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymenStatus: {
  UNPAID: 'UNPAID',
  PAID: 'PAID'
};

export type PaymenStatus = (typeof PaymenStatus)[keyof typeof PaymenStatus]


export const RewardStatus: {
  PENDING: 'PENDING',
  AVAILABLE: 'AVAILABLE'
};

export type RewardStatus = (typeof RewardStatus)[keyof typeof RewardStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type bookingStatus = $Enums.bookingStatus

export const bookingStatus: typeof $Enums.bookingStatus

export type DiscountType = $Enums.DiscountType

export const DiscountType: typeof $Enums.DiscountType

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymenStatus = $Enums.PaymenStatus

export const PaymenStatus: typeof $Enums.PaymenStatus

export type RewardStatus = $Enums.RewardStatus

export const RewardStatus: typeof $Enums.RewardStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.travelerInfo`: Exposes CRUD operations for the **TravelerInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelerInfos
    * const travelerInfos = await prisma.travelerInfo.findMany()
    * ```
    */
  get travelerInfo(): Prisma.TravelerInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotel`: Exposes CRUD operations for the **Hotel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotel.findMany()
    * ```
    */
  get hotel(): Prisma.HotelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotelImg`: Exposes CRUD operations for the **HotelImg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HotelImgs
    * const hotelImgs = await prisma.hotelImg.findMany()
    * ```
    */
  get hotelImg(): Prisma.HotelImgDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingGuest`: Exposes CRUD operations for the **BookingGuest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingGuests
    * const bookingGuests = await prisma.bookingGuest.findMany()
    * ```
    */
  get bookingGuest(): Prisma.BookingGuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discount`: Exposes CRUD operations for the **Discount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discounts
    * const discounts = await prisma.discount.findMany()
    * ```
    */
  get discount(): Prisma.DiscountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rewards`: Exposes CRUD operations for the **Rewards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rewards
    * const rewards = await prisma.rewards.findMany()
    * ```
    */
  get rewards(): Prisma.RewardsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
    TravelerInfo: 'TravelerInfo',
    Hotel: 'Hotel',
    HotelImg: 'HotelImg',
    Room: 'Room',
    Like: 'Like',
    Booking: 'Booking',
    BookingGuest: 'BookingGuest',
    Discount: 'Discount',
    Payment: 'Payment',
    Reviews: 'Reviews',
    Rewards: 'Rewards'
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
      modelProps: "user" | "travelerInfo" | "hotel" | "hotelImg" | "room" | "like" | "booking" | "bookingGuest" | "discount" | "payment" | "reviews" | "rewards"
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
      TravelerInfo: {
        payload: Prisma.$TravelerInfoPayload<ExtArgs>
        fields: Prisma.TravelerInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelerInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelerInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelerInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelerInfoPayload>
          }
          findFirst: {
            args: Prisma.TravelerInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelerInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelerInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelerInfoPayload>
          }
          findMany: {
            args: Prisma.TravelerInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelerInfoPayload>[]
          }
          create: {
            args: Prisma.TravelerInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelerInfoPayload>
          }
          createMany: {
            args: Prisma.TravelerInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TravelerInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelerInfoPayload>
          }
          update: {
            args: Prisma.TravelerInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelerInfoPayload>
          }
          deleteMany: {
            args: Prisma.TravelerInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelerInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TravelerInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelerInfoPayload>
          }
          aggregate: {
            args: Prisma.TravelerInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelerInfo>
          }
          groupBy: {
            args: Prisma.TravelerInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelerInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelerInfoCountArgs<ExtArgs>
            result: $Utils.Optional<TravelerInfoCountAggregateOutputType> | number
          }
        }
      }
      Hotel: {
        payload: Prisma.$HotelPayload<ExtArgs>
        fields: Prisma.HotelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findFirst: {
            args: Prisma.HotelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findMany: {
            args: Prisma.HotelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          create: {
            args: Prisma.HotelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          createMany: {
            args: Prisma.HotelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HotelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          update: {
            args: Prisma.HotelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          deleteMany: {
            args: Prisma.HotelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HotelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          aggregate: {
            args: Prisma.HotelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotel>
          }
          groupBy: {
            args: Prisma.HotelGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelCountArgs<ExtArgs>
            result: $Utils.Optional<HotelCountAggregateOutputType> | number
          }
        }
      }
      HotelImg: {
        payload: Prisma.$HotelImgPayload<ExtArgs>
        fields: Prisma.HotelImgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelImgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelImgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImgPayload>
          }
          findFirst: {
            args: Prisma.HotelImgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelImgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImgPayload>
          }
          findMany: {
            args: Prisma.HotelImgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImgPayload>[]
          }
          create: {
            args: Prisma.HotelImgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImgPayload>
          }
          createMany: {
            args: Prisma.HotelImgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HotelImgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImgPayload>
          }
          update: {
            args: Prisma.HotelImgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImgPayload>
          }
          deleteMany: {
            args: Prisma.HotelImgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelImgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HotelImgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImgPayload>
          }
          aggregate: {
            args: Prisma.HotelImgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotelImg>
          }
          groupBy: {
            args: Prisma.HotelImgGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelImgGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelImgCountArgs<ExtArgs>
            result: $Utils.Optional<HotelImgCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BookingGuest: {
        payload: Prisma.$BookingGuestPayload<ExtArgs>
        fields: Prisma.BookingGuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingGuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingGuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingGuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingGuestPayload>
          }
          findFirst: {
            args: Prisma.BookingGuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingGuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingGuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingGuestPayload>
          }
          findMany: {
            args: Prisma.BookingGuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingGuestPayload>[]
          }
          create: {
            args: Prisma.BookingGuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingGuestPayload>
          }
          createMany: {
            args: Prisma.BookingGuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingGuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingGuestPayload>
          }
          update: {
            args: Prisma.BookingGuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingGuestPayload>
          }
          deleteMany: {
            args: Prisma.BookingGuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingGuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingGuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingGuestPayload>
          }
          aggregate: {
            args: Prisma.BookingGuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingGuest>
          }
          groupBy: {
            args: Prisma.BookingGuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingGuestCountArgs<ExtArgs>
            result: $Utils.Optional<BookingGuestCountAggregateOutputType> | number
          }
        }
      }
      Discount: {
        payload: Prisma.$DiscountPayload<ExtArgs>
        fields: Prisma.DiscountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findFirst: {
            args: Prisma.DiscountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findMany: {
            args: Prisma.DiscountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          create: {
            args: Prisma.DiscountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          createMany: {
            args: Prisma.DiscountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiscountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          update: {
            args: Prisma.DiscountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          deleteMany: {
            args: Prisma.DiscountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiscountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          aggregate: {
            args: Prisma.DiscountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscount>
          }
          groupBy: {
            args: Prisma.DiscountGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscountCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Rewards: {
        payload: Prisma.$RewardsPayload<ExtArgs>
        fields: Prisma.RewardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          findFirst: {
            args: Prisma.RewardsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          findMany: {
            args: Prisma.RewardsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>[]
          }
          create: {
            args: Prisma.RewardsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          createMany: {
            args: Prisma.RewardsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RewardsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          update: {
            args: Prisma.RewardsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          deleteMany: {
            args: Prisma.RewardsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RewardsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          aggregate: {
            args: Prisma.RewardsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRewards>
          }
          groupBy: {
            args: Prisma.RewardsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardsCountArgs<ExtArgs>
            result: $Utils.Optional<RewardsCountAggregateOutputType> | number
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
    travelerInfo?: TravelerInfoOmit
    hotel?: HotelOmit
    hotelImg?: HotelImgOmit
    room?: RoomOmit
    like?: LikeOmit
    booking?: BookingOmit
    bookingGuest?: BookingGuestOmit
    discount?: DiscountOmit
    payment?: PaymentOmit
    reviews?: ReviewsOmit
    rewards?: RewardsOmit
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
    bookings: number
    likes: number
    rewards: number
    reviews: number
    travlers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    rewards?: boolean | UserCountOutputTypeCountRewardsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    travlers?: boolean | UserCountOutputTypeCountTravlersArgs
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
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTravlersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelerInfoWhereInput
  }


  /**
   * Count Type HotelCountOutputType
   */

  export type HotelCountOutputType = {
    rooms: number
    likes: number
    reviews: number
    discounts: number
  }

  export type HotelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | HotelCountOutputTypeCountRoomsArgs
    likes?: boolean | HotelCountOutputTypeCountLikesArgs
    reviews?: boolean | HotelCountOutputTypeCountReviewsArgs
    discounts?: boolean | HotelCountOutputTypeCountDiscountsArgs
  }

  // Custom InputTypes
  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelCountOutputType
     */
    select?: HotelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountDiscountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountWhereInput
  }


  /**
   * Count Type HotelImgCountOutputType
   */

  export type HotelImgCountOutputType = {
    hotel: number
  }

  export type HotelImgCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelImgCountOutputTypeCountHotelArgs
  }

  // Custom InputTypes
  /**
   * HotelImgCountOutputType without action
   */
  export type HotelImgCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImgCountOutputType
     */
    select?: HotelImgCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelImgCountOutputType without action
   */
  export type HotelImgCountOutputTypeCountHotelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    bookings: number
    reviews: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | RoomCountOutputTypeCountBookingsArgs
    reviews?: boolean | RoomCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    payment: number
    rewards: number
    bookingGuests: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | BookingCountOutputTypeCountPaymentArgs
    rewards?: boolean | BookingCountOutputTypeCountRewardsArgs
    bookingGuests?: boolean | BookingCountOutputTypeCountBookingGuestsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardsWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountBookingGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingGuestWhereInput
  }


  /**
   * Count Type DiscountCountOutputType
   */

  export type DiscountCountOutputType = {
    bookings: number
    hotels: number
  }

  export type DiscountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | DiscountCountOutputTypeCountBookingsArgs
    hotels?: boolean | DiscountCountOutputTypeCountHotelsArgs
  }

  // Custom InputTypes
  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCountOutputType
     */
    select?: DiscountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeCountHotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    profileImg: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    profileImg: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    profileImg: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    profileImg?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    profileImg?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    profileImg?: true
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
    id: number
    name: string | null
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    profileImg: string | null
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
    password?: boolean
    role?: boolean
    createdAt?: boolean
    profileImg?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    rewards?: boolean | User$rewardsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    travlers?: boolean | User$travlersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    profileImg?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "profileImg", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    rewards?: boolean | User$rewardsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    travlers?: boolean | User$travlersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      rewards: Prisma.$RewardsPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      travlers: Prisma.$TravelerInfoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      profileImg: string | null
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
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rewards<T extends User$rewardsArgs<ExtArgs> = {}>(args?: Subset<T, User$rewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    travlers<T extends User$travlersArgs<ExtArgs> = {}>(args?: Subset<T, User$travlersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelerInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly profileImg: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User.rewards
   */
  export type User$rewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    where?: RewardsWhereInput
    orderBy?: RewardsOrderByWithRelationInput | RewardsOrderByWithRelationInput[]
    cursor?: RewardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardsScalarFieldEnum | RewardsScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * User.travlers
   */
  export type User$travlersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelerInfo
     */
    select?: TravelerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelerInfo
     */
    omit?: TravelerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelerInfoInclude<ExtArgs> | null
    where?: TravelerInfoWhereInput
    orderBy?: TravelerInfoOrderByWithRelationInput | TravelerInfoOrderByWithRelationInput[]
    cursor?: TravelerInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelerInfoScalarFieldEnum | TravelerInfoScalarFieldEnum[]
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
   * Model TravelerInfo
   */

  export type AggregateTravelerInfo = {
    _count: TravelerInfoCountAggregateOutputType | null
    _avg: TravelerInfoAvgAggregateOutputType | null
    _sum: TravelerInfoSumAggregateOutputType | null
    _min: TravelerInfoMinAggregateOutputType | null
    _max: TravelerInfoMaxAggregateOutputType | null
  }

  export type TravelerInfoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TravelerInfoSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TravelerInfoMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    userId: number | null
  }

  export type TravelerInfoMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    userId: number | null
  }

  export type TravelerInfoCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    userId: number
    _all: number
  }


  export type TravelerInfoAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TravelerInfoSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TravelerInfoMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    userId?: true
  }

  export type TravelerInfoMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    userId?: true
  }

  export type TravelerInfoCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    userId?: true
    _all?: true
  }

  export type TravelerInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelerInfo to aggregate.
     */
    where?: TravelerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelerInfos to fetch.
     */
    orderBy?: TravelerInfoOrderByWithRelationInput | TravelerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelerInfos
    **/
    _count?: true | TravelerInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TravelerInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TravelerInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelerInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelerInfoMaxAggregateInputType
  }

  export type GetTravelerInfoAggregateType<T extends TravelerInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelerInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelerInfo[P]>
      : GetScalarType<T[P], AggregateTravelerInfo[P]>
  }




  export type TravelerInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelerInfoWhereInput
    orderBy?: TravelerInfoOrderByWithAggregationInput | TravelerInfoOrderByWithAggregationInput[]
    by: TravelerInfoScalarFieldEnum[] | TravelerInfoScalarFieldEnum
    having?: TravelerInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelerInfoCountAggregateInputType | true
    _avg?: TravelerInfoAvgAggregateInputType
    _sum?: TravelerInfoSumAggregateInputType
    _min?: TravelerInfoMinAggregateInputType
    _max?: TravelerInfoMaxAggregateInputType
  }

  export type TravelerInfoGroupByOutputType = {
    id: number
    firstName: string | null
    lastName: string | null
    userId: number
    _count: TravelerInfoCountAggregateOutputType | null
    _avg: TravelerInfoAvgAggregateOutputType | null
    _sum: TravelerInfoSumAggregateOutputType | null
    _min: TravelerInfoMinAggregateOutputType | null
    _max: TravelerInfoMaxAggregateOutputType | null
  }

  type GetTravelerInfoGroupByPayload<T extends TravelerInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelerInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelerInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelerInfoGroupByOutputType[P]>
            : GetScalarType<T[P], TravelerInfoGroupByOutputType[P]>
        }
      >
    >


  export type TravelerInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    userId?: boolean
    user?: boolean | TravelerInfo$userArgs<ExtArgs>
  }, ExtArgs["result"]["travelerInfo"]>



  export type TravelerInfoSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    userId?: boolean
  }

  export type TravelerInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "userId", ExtArgs["result"]["travelerInfo"]>
  export type TravelerInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TravelerInfo$userArgs<ExtArgs>
  }

  export type $TravelerInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelerInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string | null
      lastName: string | null
      userId: number
    }, ExtArgs["result"]["travelerInfo"]>
    composites: {}
  }

  type TravelerInfoGetPayload<S extends boolean | null | undefined | TravelerInfoDefaultArgs> = $Result.GetResult<Prisma.$TravelerInfoPayload, S>

  type TravelerInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelerInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelerInfoCountAggregateInputType | true
    }

  export interface TravelerInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelerInfo'], meta: { name: 'TravelerInfo' } }
    /**
     * Find zero or one TravelerInfo that matches the filter.
     * @param {TravelerInfoFindUniqueArgs} args - Arguments to find a TravelerInfo
     * @example
     * // Get one TravelerInfo
     * const travelerInfo = await prisma.travelerInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelerInfoFindUniqueArgs>(args: SelectSubset<T, TravelerInfoFindUniqueArgs<ExtArgs>>): Prisma__TravelerInfoClient<$Result.GetResult<Prisma.$TravelerInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelerInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelerInfoFindUniqueOrThrowArgs} args - Arguments to find a TravelerInfo
     * @example
     * // Get one TravelerInfo
     * const travelerInfo = await prisma.travelerInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelerInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelerInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelerInfoClient<$Result.GetResult<Prisma.$TravelerInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelerInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelerInfoFindFirstArgs} args - Arguments to find a TravelerInfo
     * @example
     * // Get one TravelerInfo
     * const travelerInfo = await prisma.travelerInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelerInfoFindFirstArgs>(args?: SelectSubset<T, TravelerInfoFindFirstArgs<ExtArgs>>): Prisma__TravelerInfoClient<$Result.GetResult<Prisma.$TravelerInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelerInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelerInfoFindFirstOrThrowArgs} args - Arguments to find a TravelerInfo
     * @example
     * // Get one TravelerInfo
     * const travelerInfo = await prisma.travelerInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelerInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelerInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelerInfoClient<$Result.GetResult<Prisma.$TravelerInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelerInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelerInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelerInfos
     * const travelerInfos = await prisma.travelerInfo.findMany()
     * 
     * // Get first 10 TravelerInfos
     * const travelerInfos = await prisma.travelerInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelerInfoWithIdOnly = await prisma.travelerInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelerInfoFindManyArgs>(args?: SelectSubset<T, TravelerInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelerInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelerInfo.
     * @param {TravelerInfoCreateArgs} args - Arguments to create a TravelerInfo.
     * @example
     * // Create one TravelerInfo
     * const TravelerInfo = await prisma.travelerInfo.create({
     *   data: {
     *     // ... data to create a TravelerInfo
     *   }
     * })
     * 
     */
    create<T extends TravelerInfoCreateArgs>(args: SelectSubset<T, TravelerInfoCreateArgs<ExtArgs>>): Prisma__TravelerInfoClient<$Result.GetResult<Prisma.$TravelerInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelerInfos.
     * @param {TravelerInfoCreateManyArgs} args - Arguments to create many TravelerInfos.
     * @example
     * // Create many TravelerInfos
     * const travelerInfo = await prisma.travelerInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelerInfoCreateManyArgs>(args?: SelectSubset<T, TravelerInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TravelerInfo.
     * @param {TravelerInfoDeleteArgs} args - Arguments to delete one TravelerInfo.
     * @example
     * // Delete one TravelerInfo
     * const TravelerInfo = await prisma.travelerInfo.delete({
     *   where: {
     *     // ... filter to delete one TravelerInfo
     *   }
     * })
     * 
     */
    delete<T extends TravelerInfoDeleteArgs>(args: SelectSubset<T, TravelerInfoDeleteArgs<ExtArgs>>): Prisma__TravelerInfoClient<$Result.GetResult<Prisma.$TravelerInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelerInfo.
     * @param {TravelerInfoUpdateArgs} args - Arguments to update one TravelerInfo.
     * @example
     * // Update one TravelerInfo
     * const travelerInfo = await prisma.travelerInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelerInfoUpdateArgs>(args: SelectSubset<T, TravelerInfoUpdateArgs<ExtArgs>>): Prisma__TravelerInfoClient<$Result.GetResult<Prisma.$TravelerInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelerInfos.
     * @param {TravelerInfoDeleteManyArgs} args - Arguments to filter TravelerInfos to delete.
     * @example
     * // Delete a few TravelerInfos
     * const { count } = await prisma.travelerInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelerInfoDeleteManyArgs>(args?: SelectSubset<T, TravelerInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelerInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelerInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelerInfos
     * const travelerInfo = await prisma.travelerInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelerInfoUpdateManyArgs>(args: SelectSubset<T, TravelerInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TravelerInfo.
     * @param {TravelerInfoUpsertArgs} args - Arguments to update or create a TravelerInfo.
     * @example
     * // Update or create a TravelerInfo
     * const travelerInfo = await prisma.travelerInfo.upsert({
     *   create: {
     *     // ... data to create a TravelerInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelerInfo we want to update
     *   }
     * })
     */
    upsert<T extends TravelerInfoUpsertArgs>(args: SelectSubset<T, TravelerInfoUpsertArgs<ExtArgs>>): Prisma__TravelerInfoClient<$Result.GetResult<Prisma.$TravelerInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelerInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelerInfoCountArgs} args - Arguments to filter TravelerInfos to count.
     * @example
     * // Count the number of TravelerInfos
     * const count = await prisma.travelerInfo.count({
     *   where: {
     *     // ... the filter for the TravelerInfos we want to count
     *   }
     * })
    **/
    count<T extends TravelerInfoCountArgs>(
      args?: Subset<T, TravelerInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelerInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelerInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelerInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TravelerInfoAggregateArgs>(args: Subset<T, TravelerInfoAggregateArgs>): Prisma.PrismaPromise<GetTravelerInfoAggregateType<T>>

    /**
     * Group by TravelerInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelerInfoGroupByArgs} args - Group by arguments.
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
      T extends TravelerInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelerInfoGroupByArgs['orderBy'] }
        : { orderBy?: TravelerInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TravelerInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelerInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelerInfo model
   */
  readonly fields: TravelerInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelerInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelerInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends TravelerInfo$userArgs<ExtArgs> = {}>(args?: Subset<T, TravelerInfo$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TravelerInfo model
   */
  interface TravelerInfoFieldRefs {
    readonly id: FieldRef<"TravelerInfo", 'Int'>
    readonly firstName: FieldRef<"TravelerInfo", 'String'>
    readonly lastName: FieldRef<"TravelerInfo", 'String'>
    readonly userId: FieldRef<"TravelerInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TravelerInfo findUnique
   */
  export type TravelerInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelerInfo
     */
    select?: TravelerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelerInfo
     */
    omit?: TravelerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelerInfoInclude<ExtArgs> | null
    /**
     * Filter, which TravelerInfo to fetch.
     */
    where: TravelerInfoWhereUniqueInput
  }

  /**
   * TravelerInfo findUniqueOrThrow
   */
  export type TravelerInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelerInfo
     */
    select?: TravelerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelerInfo
     */
    omit?: TravelerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelerInfoInclude<ExtArgs> | null
    /**
     * Filter, which TravelerInfo to fetch.
     */
    where: TravelerInfoWhereUniqueInput
  }

  /**
   * TravelerInfo findFirst
   */
  export type TravelerInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelerInfo
     */
    select?: TravelerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelerInfo
     */
    omit?: TravelerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelerInfoInclude<ExtArgs> | null
    /**
     * Filter, which TravelerInfo to fetch.
     */
    where?: TravelerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelerInfos to fetch.
     */
    orderBy?: TravelerInfoOrderByWithRelationInput | TravelerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelerInfos.
     */
    cursor?: TravelerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelerInfos.
     */
    distinct?: TravelerInfoScalarFieldEnum | TravelerInfoScalarFieldEnum[]
  }

  /**
   * TravelerInfo findFirstOrThrow
   */
  export type TravelerInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelerInfo
     */
    select?: TravelerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelerInfo
     */
    omit?: TravelerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelerInfoInclude<ExtArgs> | null
    /**
     * Filter, which TravelerInfo to fetch.
     */
    where?: TravelerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelerInfos to fetch.
     */
    orderBy?: TravelerInfoOrderByWithRelationInput | TravelerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelerInfos.
     */
    cursor?: TravelerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelerInfos.
     */
    distinct?: TravelerInfoScalarFieldEnum | TravelerInfoScalarFieldEnum[]
  }

  /**
   * TravelerInfo findMany
   */
  export type TravelerInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelerInfo
     */
    select?: TravelerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelerInfo
     */
    omit?: TravelerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelerInfoInclude<ExtArgs> | null
    /**
     * Filter, which TravelerInfos to fetch.
     */
    where?: TravelerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelerInfos to fetch.
     */
    orderBy?: TravelerInfoOrderByWithRelationInput | TravelerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelerInfos.
     */
    cursor?: TravelerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelerInfos.
     */
    distinct?: TravelerInfoScalarFieldEnum | TravelerInfoScalarFieldEnum[]
  }

  /**
   * TravelerInfo create
   */
  export type TravelerInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelerInfo
     */
    select?: TravelerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelerInfo
     */
    omit?: TravelerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelerInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelerInfo.
     */
    data: XOR<TravelerInfoCreateInput, TravelerInfoUncheckedCreateInput>
  }

  /**
   * TravelerInfo createMany
   */
  export type TravelerInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelerInfos.
     */
    data: TravelerInfoCreateManyInput | TravelerInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelerInfo update
   */
  export type TravelerInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelerInfo
     */
    select?: TravelerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelerInfo
     */
    omit?: TravelerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelerInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelerInfo.
     */
    data: XOR<TravelerInfoUpdateInput, TravelerInfoUncheckedUpdateInput>
    /**
     * Choose, which TravelerInfo to update.
     */
    where: TravelerInfoWhereUniqueInput
  }

  /**
   * TravelerInfo updateMany
   */
  export type TravelerInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelerInfos.
     */
    data: XOR<TravelerInfoUpdateManyMutationInput, TravelerInfoUncheckedUpdateManyInput>
    /**
     * Filter which TravelerInfos to update
     */
    where?: TravelerInfoWhereInput
    /**
     * Limit how many TravelerInfos to update.
     */
    limit?: number
  }

  /**
   * TravelerInfo upsert
   */
  export type TravelerInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelerInfo
     */
    select?: TravelerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelerInfo
     */
    omit?: TravelerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelerInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelerInfo to update in case it exists.
     */
    where: TravelerInfoWhereUniqueInput
    /**
     * In case the TravelerInfo found by the `where` argument doesn't exist, create a new TravelerInfo with this data.
     */
    create: XOR<TravelerInfoCreateInput, TravelerInfoUncheckedCreateInput>
    /**
     * In case the TravelerInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelerInfoUpdateInput, TravelerInfoUncheckedUpdateInput>
  }

  /**
   * TravelerInfo delete
   */
  export type TravelerInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelerInfo
     */
    select?: TravelerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelerInfo
     */
    omit?: TravelerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelerInfoInclude<ExtArgs> | null
    /**
     * Filter which TravelerInfo to delete.
     */
    where: TravelerInfoWhereUniqueInput
  }

  /**
   * TravelerInfo deleteMany
   */
  export type TravelerInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelerInfos to delete
     */
    where?: TravelerInfoWhereInput
    /**
     * Limit how many TravelerInfos to delete.
     */
    limit?: number
  }

  /**
   * TravelerInfo.user
   */
  export type TravelerInfo$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * TravelerInfo without action
   */
  export type TravelerInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelerInfo
     */
    select?: TravelerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelerInfo
     */
    omit?: TravelerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelerInfoInclude<ExtArgs> | null
  }


  /**
   * Model Hotel
   */

  export type AggregateHotel = {
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  export type HotelAvgAggregateOutputType = {
    id: number | null
    hotelImgId: number | null
    reviewCount: number | null
    averageRating: number | null
    latitude: number | null
    longitude: number | null
  }

  export type HotelSumAggregateOutputType = {
    id: number | null
    hotelImgId: number | null
    reviewCount: number | null
    averageRating: number | null
    latitude: number | null
    longitude: number | null
  }

  export type HotelMinAggregateOutputType = {
    id: number | null
    name: string | null
    hotelImgId: number | null
    hotelDetails: string | null
    address: string | null
    city: string | null
    country: string | null
    surroundings: string | null
    amenities: string | null
    policies: string | null
    reviewCount: number | null
    averageRating: number | null
    latitude: number | null
    longitude: number | null
  }

  export type HotelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    hotelImgId: number | null
    hotelDetails: string | null
    address: string | null
    city: string | null
    country: string | null
    surroundings: string | null
    amenities: string | null
    policies: string | null
    reviewCount: number | null
    averageRating: number | null
    latitude: number | null
    longitude: number | null
  }

  export type HotelCountAggregateOutputType = {
    id: number
    name: number
    hotelImgId: number
    hotelDetails: number
    address: number
    city: number
    country: number
    surroundings: number
    amenities: number
    policies: number
    reviewCount: number
    averageRating: number
    latitude: number
    longitude: number
    _all: number
  }


  export type HotelAvgAggregateInputType = {
    id?: true
    hotelImgId?: true
    reviewCount?: true
    averageRating?: true
    latitude?: true
    longitude?: true
  }

  export type HotelSumAggregateInputType = {
    id?: true
    hotelImgId?: true
    reviewCount?: true
    averageRating?: true
    latitude?: true
    longitude?: true
  }

  export type HotelMinAggregateInputType = {
    id?: true
    name?: true
    hotelImgId?: true
    hotelDetails?: true
    address?: true
    city?: true
    country?: true
    surroundings?: true
    amenities?: true
    policies?: true
    reviewCount?: true
    averageRating?: true
    latitude?: true
    longitude?: true
  }

  export type HotelMaxAggregateInputType = {
    id?: true
    name?: true
    hotelImgId?: true
    hotelDetails?: true
    address?: true
    city?: true
    country?: true
    surroundings?: true
    amenities?: true
    policies?: true
    reviewCount?: true
    averageRating?: true
    latitude?: true
    longitude?: true
  }

  export type HotelCountAggregateInputType = {
    id?: true
    name?: true
    hotelImgId?: true
    hotelDetails?: true
    address?: true
    city?: true
    country?: true
    surroundings?: true
    amenities?: true
    policies?: true
    reviewCount?: true
    averageRating?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type HotelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotel to aggregate.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelMaxAggregateInputType
  }

  export type GetHotelAggregateType<T extends HotelAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel[P]>
      : GetScalarType<T[P], AggregateHotel[P]>
  }




  export type HotelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithAggregationInput | HotelOrderByWithAggregationInput[]
    by: HotelScalarFieldEnum[] | HotelScalarFieldEnum
    having?: HotelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelCountAggregateInputType | true
    _avg?: HotelAvgAggregateInputType
    _sum?: HotelSumAggregateInputType
    _min?: HotelMinAggregateInputType
    _max?: HotelMaxAggregateInputType
  }

  export type HotelGroupByOutputType = {
    id: number
    name: string
    hotelImgId: number
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount: number | null
    averageRating: number | null
    latitude: number
    longitude: number
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  type GetHotelGroupByPayload<T extends HotelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelGroupByOutputType[P]>
            : GetScalarType<T[P], HotelGroupByOutputType[P]>
        }
      >
    >


  export type HotelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hotelImgId?: boolean
    hotelDetails?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    surroundings?: boolean
    amenities?: boolean
    policies?: boolean
    reviewCount?: boolean
    averageRating?: boolean
    latitude?: boolean
    longitude?: boolean
    hotelImg?: boolean | HotelImgDefaultArgs<ExtArgs>
    rooms?: boolean | Hotel$roomsArgs<ExtArgs>
    likes?: boolean | Hotel$likesArgs<ExtArgs>
    reviews?: boolean | Hotel$reviewsArgs<ExtArgs>
    discounts?: boolean | Hotel$discountsArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>



  export type HotelSelectScalar = {
    id?: boolean
    name?: boolean
    hotelImgId?: boolean
    hotelDetails?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    surroundings?: boolean
    amenities?: boolean
    policies?: boolean
    reviewCount?: boolean
    averageRating?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type HotelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "hotelImgId" | "hotelDetails" | "address" | "city" | "country" | "surroundings" | "amenities" | "policies" | "reviewCount" | "averageRating" | "latitude" | "longitude", ExtArgs["result"]["hotel"]>
  export type HotelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotelImg?: boolean | HotelImgDefaultArgs<ExtArgs>
    rooms?: boolean | Hotel$roomsArgs<ExtArgs>
    likes?: boolean | Hotel$likesArgs<ExtArgs>
    reviews?: boolean | Hotel$reviewsArgs<ExtArgs>
    discounts?: boolean | Hotel$discountsArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HotelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotel"
    objects: {
      hotelImg: Prisma.$HotelImgPayload<ExtArgs>
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      discounts: Prisma.$DiscountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      hotelImgId: number
      hotelDetails: string
      address: string
      city: string
      country: string
      surroundings: string
      amenities: string
      policies: string
      reviewCount: number | null
      averageRating: number | null
      latitude: number
      longitude: number
    }, ExtArgs["result"]["hotel"]>
    composites: {}
  }

  type HotelGetPayload<S extends boolean | null | undefined | HotelDefaultArgs> = $Result.GetResult<Prisma.$HotelPayload, S>

  type HotelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelCountAggregateInputType | true
    }

  export interface HotelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotel'], meta: { name: 'Hotel' } }
    /**
     * Find zero or one Hotel that matches the filter.
     * @param {HotelFindUniqueArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelFindUniqueArgs>(args: SelectSubset<T, HotelFindUniqueArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelFindUniqueOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelFindFirstArgs>(args?: SelectSubset<T, HotelFindFirstArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotel.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelWithIdOnly = await prisma.hotel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelFindManyArgs>(args?: SelectSubset<T, HotelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotel.
     * @param {HotelCreateArgs} args - Arguments to create a Hotel.
     * @example
     * // Create one Hotel
     * const Hotel = await prisma.hotel.create({
     *   data: {
     *     // ... data to create a Hotel
     *   }
     * })
     * 
     */
    create<T extends HotelCreateArgs>(args: SelectSubset<T, HotelCreateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelCreateManyArgs>(args?: SelectSubset<T, HotelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hotel.
     * @param {HotelDeleteArgs} args - Arguments to delete one Hotel.
     * @example
     * // Delete one Hotel
     * const Hotel = await prisma.hotel.delete({
     *   where: {
     *     // ... filter to delete one Hotel
     *   }
     * })
     * 
     */
    delete<T extends HotelDeleteArgs>(args: SelectSubset<T, HotelDeleteArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotel.
     * @param {HotelUpdateArgs} args - Arguments to update one Hotel.
     * @example
     * // Update one Hotel
     * const hotel = await prisma.hotel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelUpdateArgs>(args: SelectSubset<T, HotelUpdateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelDeleteManyArgs>(args?: SelectSubset<T, HotelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelUpdateManyArgs>(args: SelectSubset<T, HotelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hotel.
     * @param {HotelUpsertArgs} args - Arguments to update or create a Hotel.
     * @example
     * // Update or create a Hotel
     * const hotel = await prisma.hotel.upsert({
     *   create: {
     *     // ... data to create a Hotel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel we want to update
     *   }
     * })
     */
    upsert<T extends HotelUpsertArgs>(args: SelectSubset<T, HotelUpsertArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotel.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelCountArgs>(
      args?: Subset<T, HotelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelAggregateArgs>(args: Subset<T, HotelAggregateArgs>): Prisma.PrismaPromise<GetHotelAggregateType<T>>

    /**
     * Group by Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelGroupByArgs} args - Group by arguments.
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
      T extends HotelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelGroupByArgs['orderBy'] }
        : { orderBy?: HotelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotel model
   */
  readonly fields: HotelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotelImg<T extends HotelImgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelImgDefaultArgs<ExtArgs>>): Prisma__HotelImgClient<$Result.GetResult<Prisma.$HotelImgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends Hotel$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Hotel$likesArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Hotel$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    discounts<T extends Hotel$discountsArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$discountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hotel model
   */
  interface HotelFieldRefs {
    readonly id: FieldRef<"Hotel", 'Int'>
    readonly name: FieldRef<"Hotel", 'String'>
    readonly hotelImgId: FieldRef<"Hotel", 'Int'>
    readonly hotelDetails: FieldRef<"Hotel", 'String'>
    readonly address: FieldRef<"Hotel", 'String'>
    readonly city: FieldRef<"Hotel", 'String'>
    readonly country: FieldRef<"Hotel", 'String'>
    readonly surroundings: FieldRef<"Hotel", 'String'>
    readonly amenities: FieldRef<"Hotel", 'String'>
    readonly policies: FieldRef<"Hotel", 'String'>
    readonly reviewCount: FieldRef<"Hotel", 'Int'>
    readonly averageRating: FieldRef<"Hotel", 'Float'>
    readonly latitude: FieldRef<"Hotel", 'Float'>
    readonly longitude: FieldRef<"Hotel", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Hotel findUnique
   */
  export type HotelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findUniqueOrThrow
   */
  export type HotelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findFirst
   */
  export type HotelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findFirstOrThrow
   */
  export type HotelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findMany
   */
  export type HotelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel create
   */
  export type HotelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotel.
     */
    data: XOR<HotelCreateInput, HotelUncheckedCreateInput>
  }

  /**
   * Hotel createMany
   */
  export type HotelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel update
   */
  export type HotelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotel.
     */
    data: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
    /**
     * Choose, which Hotel to update.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel updateMany
   */
  export type HotelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel upsert
   */
  export type HotelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotel to update in case it exists.
     */
    where: HotelWhereUniqueInput
    /**
     * In case the Hotel found by the `where` argument doesn't exist, create a new Hotel with this data.
     */
    create: XOR<HotelCreateInput, HotelUncheckedCreateInput>
    /**
     * In case the Hotel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
  }

  /**
   * Hotel delete
   */
  export type HotelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter which Hotel to delete.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel deleteMany
   */
  export type HotelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotel.rooms
   */
  export type Hotel$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Hotel.likes
   */
  export type Hotel$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Hotel.reviews
   */
  export type Hotel$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Hotel.discounts
   */
  export type Hotel$discountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    where?: DiscountWhereInput
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    cursor?: DiscountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Hotel without action
   */
  export type HotelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
  }


  /**
   * Model HotelImg
   */

  export type AggregateHotelImg = {
    _count: HotelImgCountAggregateOutputType | null
    _avg: HotelImgAvgAggregateOutputType | null
    _sum: HotelImgSumAggregateOutputType | null
    _min: HotelImgMinAggregateOutputType | null
    _max: HotelImgMaxAggregateOutputType | null
  }

  export type HotelImgAvgAggregateOutputType = {
    id: number | null
  }

  export type HotelImgSumAggregateOutputType = {
    id: number | null
  }

  export type HotelImgMinAggregateOutputType = {
    id: number | null
    img1: string | null
    img2: string | null
    img3: string | null
    img4: string | null
  }

  export type HotelImgMaxAggregateOutputType = {
    id: number | null
    img1: string | null
    img2: string | null
    img3: string | null
    img4: string | null
  }

  export type HotelImgCountAggregateOutputType = {
    id: number
    img1: number
    img2: number
    img3: number
    img4: number
    _all: number
  }


  export type HotelImgAvgAggregateInputType = {
    id?: true
  }

  export type HotelImgSumAggregateInputType = {
    id?: true
  }

  export type HotelImgMinAggregateInputType = {
    id?: true
    img1?: true
    img2?: true
    img3?: true
    img4?: true
  }

  export type HotelImgMaxAggregateInputType = {
    id?: true
    img1?: true
    img2?: true
    img3?: true
    img4?: true
  }

  export type HotelImgCountAggregateInputType = {
    id?: true
    img1?: true
    img2?: true
    img3?: true
    img4?: true
    _all?: true
  }

  export type HotelImgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelImg to aggregate.
     */
    where?: HotelImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImgs to fetch.
     */
    orderBy?: HotelImgOrderByWithRelationInput | HotelImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HotelImgs
    **/
    _count?: true | HotelImgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelImgAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelImgSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelImgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelImgMaxAggregateInputType
  }

  export type GetHotelImgAggregateType<T extends HotelImgAggregateArgs> = {
        [P in keyof T & keyof AggregateHotelImg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotelImg[P]>
      : GetScalarType<T[P], AggregateHotelImg[P]>
  }




  export type HotelImgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelImgWhereInput
    orderBy?: HotelImgOrderByWithAggregationInput | HotelImgOrderByWithAggregationInput[]
    by: HotelImgScalarFieldEnum[] | HotelImgScalarFieldEnum
    having?: HotelImgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelImgCountAggregateInputType | true
    _avg?: HotelImgAvgAggregateInputType
    _sum?: HotelImgSumAggregateInputType
    _min?: HotelImgMinAggregateInputType
    _max?: HotelImgMaxAggregateInputType
  }

  export type HotelImgGroupByOutputType = {
    id: number
    img1: string | null
    img2: string | null
    img3: string | null
    img4: string | null
    _count: HotelImgCountAggregateOutputType | null
    _avg: HotelImgAvgAggregateOutputType | null
    _sum: HotelImgSumAggregateOutputType | null
    _min: HotelImgMinAggregateOutputType | null
    _max: HotelImgMaxAggregateOutputType | null
  }

  type GetHotelImgGroupByPayload<T extends HotelImgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelImgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelImgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelImgGroupByOutputType[P]>
            : GetScalarType<T[P], HotelImgGroupByOutputType[P]>
        }
      >
    >


  export type HotelImgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img1?: boolean
    img2?: boolean
    img3?: boolean
    img4?: boolean
    hotel?: boolean | HotelImg$hotelArgs<ExtArgs>
    _count?: boolean | HotelImgCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelImg"]>



  export type HotelImgSelectScalar = {
    id?: boolean
    img1?: boolean
    img2?: boolean
    img3?: boolean
    img4?: boolean
  }

  export type HotelImgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "img1" | "img2" | "img3" | "img4", ExtArgs["result"]["hotelImg"]>
  export type HotelImgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelImg$hotelArgs<ExtArgs>
    _count?: boolean | HotelImgCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HotelImgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HotelImg"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      img1: string | null
      img2: string | null
      img3: string | null
      img4: string | null
    }, ExtArgs["result"]["hotelImg"]>
    composites: {}
  }

  type HotelImgGetPayload<S extends boolean | null | undefined | HotelImgDefaultArgs> = $Result.GetResult<Prisma.$HotelImgPayload, S>

  type HotelImgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelImgFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelImgCountAggregateInputType | true
    }

  export interface HotelImgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HotelImg'], meta: { name: 'HotelImg' } }
    /**
     * Find zero or one HotelImg that matches the filter.
     * @param {HotelImgFindUniqueArgs} args - Arguments to find a HotelImg
     * @example
     * // Get one HotelImg
     * const hotelImg = await prisma.hotelImg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelImgFindUniqueArgs>(args: SelectSubset<T, HotelImgFindUniqueArgs<ExtArgs>>): Prisma__HotelImgClient<$Result.GetResult<Prisma.$HotelImgPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HotelImg that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelImgFindUniqueOrThrowArgs} args - Arguments to find a HotelImg
     * @example
     * // Get one HotelImg
     * const hotelImg = await prisma.hotelImg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelImgFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelImgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelImgClient<$Result.GetResult<Prisma.$HotelImgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelImg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImgFindFirstArgs} args - Arguments to find a HotelImg
     * @example
     * // Get one HotelImg
     * const hotelImg = await prisma.hotelImg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelImgFindFirstArgs>(args?: SelectSubset<T, HotelImgFindFirstArgs<ExtArgs>>): Prisma__HotelImgClient<$Result.GetResult<Prisma.$HotelImgPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelImg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImgFindFirstOrThrowArgs} args - Arguments to find a HotelImg
     * @example
     * // Get one HotelImg
     * const hotelImg = await prisma.hotelImg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelImgFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelImgFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelImgClient<$Result.GetResult<Prisma.$HotelImgPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HotelImgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HotelImgs
     * const hotelImgs = await prisma.hotelImg.findMany()
     * 
     * // Get first 10 HotelImgs
     * const hotelImgs = await prisma.hotelImg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelImgWithIdOnly = await prisma.hotelImg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelImgFindManyArgs>(args?: SelectSubset<T, HotelImgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HotelImg.
     * @param {HotelImgCreateArgs} args - Arguments to create a HotelImg.
     * @example
     * // Create one HotelImg
     * const HotelImg = await prisma.hotelImg.create({
     *   data: {
     *     // ... data to create a HotelImg
     *   }
     * })
     * 
     */
    create<T extends HotelImgCreateArgs>(args: SelectSubset<T, HotelImgCreateArgs<ExtArgs>>): Prisma__HotelImgClient<$Result.GetResult<Prisma.$HotelImgPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HotelImgs.
     * @param {HotelImgCreateManyArgs} args - Arguments to create many HotelImgs.
     * @example
     * // Create many HotelImgs
     * const hotelImg = await prisma.hotelImg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelImgCreateManyArgs>(args?: SelectSubset<T, HotelImgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HotelImg.
     * @param {HotelImgDeleteArgs} args - Arguments to delete one HotelImg.
     * @example
     * // Delete one HotelImg
     * const HotelImg = await prisma.hotelImg.delete({
     *   where: {
     *     // ... filter to delete one HotelImg
     *   }
     * })
     * 
     */
    delete<T extends HotelImgDeleteArgs>(args: SelectSubset<T, HotelImgDeleteArgs<ExtArgs>>): Prisma__HotelImgClient<$Result.GetResult<Prisma.$HotelImgPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HotelImg.
     * @param {HotelImgUpdateArgs} args - Arguments to update one HotelImg.
     * @example
     * // Update one HotelImg
     * const hotelImg = await prisma.hotelImg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelImgUpdateArgs>(args: SelectSubset<T, HotelImgUpdateArgs<ExtArgs>>): Prisma__HotelImgClient<$Result.GetResult<Prisma.$HotelImgPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HotelImgs.
     * @param {HotelImgDeleteManyArgs} args - Arguments to filter HotelImgs to delete.
     * @example
     * // Delete a few HotelImgs
     * const { count } = await prisma.hotelImg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelImgDeleteManyArgs>(args?: SelectSubset<T, HotelImgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelImgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HotelImgs
     * const hotelImg = await prisma.hotelImg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelImgUpdateManyArgs>(args: SelectSubset<T, HotelImgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HotelImg.
     * @param {HotelImgUpsertArgs} args - Arguments to update or create a HotelImg.
     * @example
     * // Update or create a HotelImg
     * const hotelImg = await prisma.hotelImg.upsert({
     *   create: {
     *     // ... data to create a HotelImg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HotelImg we want to update
     *   }
     * })
     */
    upsert<T extends HotelImgUpsertArgs>(args: SelectSubset<T, HotelImgUpsertArgs<ExtArgs>>): Prisma__HotelImgClient<$Result.GetResult<Prisma.$HotelImgPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HotelImgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImgCountArgs} args - Arguments to filter HotelImgs to count.
     * @example
     * // Count the number of HotelImgs
     * const count = await prisma.hotelImg.count({
     *   where: {
     *     // ... the filter for the HotelImgs we want to count
     *   }
     * })
    **/
    count<T extends HotelImgCountArgs>(
      args?: Subset<T, HotelImgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelImgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HotelImg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelImgAggregateArgs>(args: Subset<T, HotelImgAggregateArgs>): Prisma.PrismaPromise<GetHotelImgAggregateType<T>>

    /**
     * Group by HotelImg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImgGroupByArgs} args - Group by arguments.
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
      T extends HotelImgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelImgGroupByArgs['orderBy'] }
        : { orderBy?: HotelImgGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelImgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelImgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HotelImg model
   */
  readonly fields: HotelImgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HotelImg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelImgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelImg$hotelArgs<ExtArgs> = {}>(args?: Subset<T, HotelImg$hotelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the HotelImg model
   */
  interface HotelImgFieldRefs {
    readonly id: FieldRef<"HotelImg", 'Int'>
    readonly img1: FieldRef<"HotelImg", 'String'>
    readonly img2: FieldRef<"HotelImg", 'String'>
    readonly img3: FieldRef<"HotelImg", 'String'>
    readonly img4: FieldRef<"HotelImg", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HotelImg findUnique
   */
  export type HotelImgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImg
     */
    select?: HotelImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImg
     */
    omit?: HotelImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImgInclude<ExtArgs> | null
    /**
     * Filter, which HotelImg to fetch.
     */
    where: HotelImgWhereUniqueInput
  }

  /**
   * HotelImg findUniqueOrThrow
   */
  export type HotelImgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImg
     */
    select?: HotelImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImg
     */
    omit?: HotelImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImgInclude<ExtArgs> | null
    /**
     * Filter, which HotelImg to fetch.
     */
    where: HotelImgWhereUniqueInput
  }

  /**
   * HotelImg findFirst
   */
  export type HotelImgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImg
     */
    select?: HotelImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImg
     */
    omit?: HotelImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImgInclude<ExtArgs> | null
    /**
     * Filter, which HotelImg to fetch.
     */
    where?: HotelImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImgs to fetch.
     */
    orderBy?: HotelImgOrderByWithRelationInput | HotelImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelImgs.
     */
    cursor?: HotelImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImgs.
     */
    distinct?: HotelImgScalarFieldEnum | HotelImgScalarFieldEnum[]
  }

  /**
   * HotelImg findFirstOrThrow
   */
  export type HotelImgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImg
     */
    select?: HotelImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImg
     */
    omit?: HotelImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImgInclude<ExtArgs> | null
    /**
     * Filter, which HotelImg to fetch.
     */
    where?: HotelImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImgs to fetch.
     */
    orderBy?: HotelImgOrderByWithRelationInput | HotelImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelImgs.
     */
    cursor?: HotelImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImgs.
     */
    distinct?: HotelImgScalarFieldEnum | HotelImgScalarFieldEnum[]
  }

  /**
   * HotelImg findMany
   */
  export type HotelImgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImg
     */
    select?: HotelImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImg
     */
    omit?: HotelImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImgInclude<ExtArgs> | null
    /**
     * Filter, which HotelImgs to fetch.
     */
    where?: HotelImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImgs to fetch.
     */
    orderBy?: HotelImgOrderByWithRelationInput | HotelImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HotelImgs.
     */
    cursor?: HotelImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImgs.
     */
    distinct?: HotelImgScalarFieldEnum | HotelImgScalarFieldEnum[]
  }

  /**
   * HotelImg create
   */
  export type HotelImgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImg
     */
    select?: HotelImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImg
     */
    omit?: HotelImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImgInclude<ExtArgs> | null
    /**
     * The data needed to create a HotelImg.
     */
    data?: XOR<HotelImgCreateInput, HotelImgUncheckedCreateInput>
  }

  /**
   * HotelImg createMany
   */
  export type HotelImgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HotelImgs.
     */
    data: HotelImgCreateManyInput | HotelImgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HotelImg update
   */
  export type HotelImgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImg
     */
    select?: HotelImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImg
     */
    omit?: HotelImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImgInclude<ExtArgs> | null
    /**
     * The data needed to update a HotelImg.
     */
    data: XOR<HotelImgUpdateInput, HotelImgUncheckedUpdateInput>
    /**
     * Choose, which HotelImg to update.
     */
    where: HotelImgWhereUniqueInput
  }

  /**
   * HotelImg updateMany
   */
  export type HotelImgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HotelImgs.
     */
    data: XOR<HotelImgUpdateManyMutationInput, HotelImgUncheckedUpdateManyInput>
    /**
     * Filter which HotelImgs to update
     */
    where?: HotelImgWhereInput
    /**
     * Limit how many HotelImgs to update.
     */
    limit?: number
  }

  /**
   * HotelImg upsert
   */
  export type HotelImgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImg
     */
    select?: HotelImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImg
     */
    omit?: HotelImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImgInclude<ExtArgs> | null
    /**
     * The filter to search for the HotelImg to update in case it exists.
     */
    where: HotelImgWhereUniqueInput
    /**
     * In case the HotelImg found by the `where` argument doesn't exist, create a new HotelImg with this data.
     */
    create: XOR<HotelImgCreateInput, HotelImgUncheckedCreateInput>
    /**
     * In case the HotelImg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelImgUpdateInput, HotelImgUncheckedUpdateInput>
  }

  /**
   * HotelImg delete
   */
  export type HotelImgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImg
     */
    select?: HotelImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImg
     */
    omit?: HotelImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImgInclude<ExtArgs> | null
    /**
     * Filter which HotelImg to delete.
     */
    where: HotelImgWhereUniqueInput
  }

  /**
   * HotelImg deleteMany
   */
  export type HotelImgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelImgs to delete
     */
    where?: HotelImgWhereInput
    /**
     * Limit how many HotelImgs to delete.
     */
    limit?: number
  }

  /**
   * HotelImg.hotel
   */
  export type HotelImg$hotelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    cursor?: HotelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * HotelImg without action
   */
  export type HotelImgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImg
     */
    select?: HotelImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImg
     */
    omit?: HotelImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImgInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    nightlyRate: number | null
    roomAmount: number | null
    maxAdults: number | null
    maxChildren: number | null
    roomSize: number | null
    hotelId: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    nightlyRate: number | null
    roomAmount: number | null
    maxAdults: number | null
    maxChildren: number | null
    roomSize: number | null
    hotelId: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    roomType: string | null
    roomImg: string | null
    nightlyRate: number | null
    roomAmount: number | null
    maxAdults: number | null
    maxChildren: number | null
    bedSetup: string | null
    roomSize: number | null
    isSmoking: boolean | null
    hotelId: number | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    roomType: string | null
    roomImg: string | null
    nightlyRate: number | null
    roomAmount: number | null
    maxAdults: number | null
    maxChildren: number | null
    bedSetup: string | null
    roomSize: number | null
    isSmoking: boolean | null
    hotelId: number | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    roomType: number
    roomImg: number
    nightlyRate: number
    roomAmount: number
    maxAdults: number
    maxChildren: number
    bedSetup: number
    roomSize: number
    isSmoking: number
    hotelId: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    nightlyRate?: true
    roomAmount?: true
    maxAdults?: true
    maxChildren?: true
    roomSize?: true
    hotelId?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    nightlyRate?: true
    roomAmount?: true
    maxAdults?: true
    maxChildren?: true
    roomSize?: true
    hotelId?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    roomType?: true
    roomImg?: true
    nightlyRate?: true
    roomAmount?: true
    maxAdults?: true
    maxChildren?: true
    bedSetup?: true
    roomSize?: true
    isSmoking?: true
    hotelId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    roomType?: true
    roomImg?: true
    nightlyRate?: true
    roomAmount?: true
    maxAdults?: true
    maxChildren?: true
    bedSetup?: true
    roomSize?: true
    isSmoking?: true
    hotelId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    roomType?: true
    roomImg?: true
    nightlyRate?: true
    roomAmount?: true
    maxAdults?: true
    maxChildren?: true
    bedSetup?: true
    roomSize?: true
    isSmoking?: true
    hotelId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    roomType: string
    roomImg: string
    nightlyRate: number
    roomAmount: number
    maxAdults: number
    maxChildren: number
    bedSetup: string | null
    roomSize: number | null
    isSmoking: boolean
    hotelId: number
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomType?: boolean
    roomImg?: boolean
    nightlyRate?: boolean
    roomAmount?: boolean
    maxAdults?: boolean
    maxChildren?: boolean
    bedSetup?: boolean
    roomSize?: boolean
    isSmoking?: boolean
    hotelId?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    reviews?: boolean | Room$reviewsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    id?: boolean
    roomType?: boolean
    roomImg?: boolean
    nightlyRate?: boolean
    roomAmount?: boolean
    maxAdults?: boolean
    maxChildren?: boolean
    bedSetup?: boolean
    roomSize?: boolean
    isSmoking?: boolean
    hotelId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomType" | "roomImg" | "nightlyRate" | "roomAmount" | "maxAdults" | "maxChildren" | "bedSetup" | "roomSize" | "isSmoking" | "hotelId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    reviews?: boolean | Room$reviewsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomType: string
      roomImg: string
      nightlyRate: number
      roomAmount: number
      maxAdults: number
      maxChildren: number
      bedSetup: string | null
      roomSize: number | null
      isSmoking: boolean
      hotelId: number
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Room$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Room$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Room$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Room$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly roomType: FieldRef<"Room", 'String'>
    readonly roomImg: FieldRef<"Room", 'String'>
    readonly nightlyRate: FieldRef<"Room", 'Int'>
    readonly roomAmount: FieldRef<"Room", 'Int'>
    readonly maxAdults: FieldRef<"Room", 'Int'>
    readonly maxChildren: FieldRef<"Room", 'Int'>
    readonly bedSetup: FieldRef<"Room", 'String'>
    readonly roomSize: FieldRef<"Room", 'Int'>
    readonly isSmoking: FieldRef<"Room", 'Boolean'>
    readonly hotelId: FieldRef<"Room", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.bookings
   */
  export type Room$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Room.reviews
   */
  export type Room$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    userId: number | null
    hotelId: number | null
  }

  export type LikeSumAggregateOutputType = {
    userId: number | null
    hotelId: number | null
  }

  export type LikeMinAggregateOutputType = {
    userId: number | null
    hotelId: number | null
    createdAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    userId: number | null
    hotelId: number | null
    createdAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    userId: number
    hotelId: number
    createdAt: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    userId?: true
    hotelId?: true
  }

  export type LikeSumAggregateInputType = {
    userId?: true
    hotelId?: true
  }

  export type LikeMinAggregateInputType = {
    userId?: true
    hotelId?: true
    createdAt?: true
  }

  export type LikeMaxAggregateInputType = {
    userId?: true
    hotelId?: true
    createdAt?: true
  }

  export type LikeCountAggregateInputType = {
    userId?: true
    hotelId?: true
    createdAt?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    userId: number
    hotelId: number
    createdAt: Date
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    hotelId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>



  export type LikeSelectScalar = {
    userId?: boolean
    hotelId?: boolean
    createdAt?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "hotelId" | "createdAt", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      hotelId: number
      createdAt: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const likeWithUserIdOnly = await prisma.like.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly userId: FieldRef<"Like", 'Int'>
    readonly hotelId: FieldRef<"Like", 'Int'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    roomAmount: number | null
    numGuest: number | null
    originalPrice: Decimal | null
    discountAmount: Decimal | null
    taxesAndFees: Decimal | null
    finalPrice: Decimal | null
    discountId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    roomAmount: number | null
    numGuest: number | null
    originalPrice: Decimal | null
    discountAmount: Decimal | null
    taxesAndFees: Decimal | null
    finalPrice: Decimal | null
    discountId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    roomAmount: number | null
    numGuest: number | null
    checkInDate: Date | null
    checkOutDate: Date | null
    bookingDate: Date | null
    bookingStatus: $Enums.bookingStatus | null
    originalPrice: Decimal | null
    discountAmount: Decimal | null
    taxesAndFees: Decimal | null
    finalPrice: Decimal | null
    discountId: number | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    roomAmount: number | null
    numGuest: number | null
    checkInDate: Date | null
    checkOutDate: Date | null
    bookingDate: Date | null
    bookingStatus: $Enums.bookingStatus | null
    originalPrice: Decimal | null
    discountAmount: Decimal | null
    taxesAndFees: Decimal | null
    finalPrice: Decimal | null
    discountId: number | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    roomId: number
    roomAmount: number
    numGuest: number
    checkInDate: number
    checkOutDate: number
    bookingDate: number
    bookingStatus: number
    originalPrice: number
    discountAmount: number
    taxesAndFees: number
    finalPrice: number
    discountId: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    roomAmount?: true
    numGuest?: true
    originalPrice?: true
    discountAmount?: true
    taxesAndFees?: true
    finalPrice?: true
    discountId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    roomAmount?: true
    numGuest?: true
    originalPrice?: true
    discountAmount?: true
    taxesAndFees?: true
    finalPrice?: true
    discountId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    roomAmount?: true
    numGuest?: true
    checkInDate?: true
    checkOutDate?: true
    bookingDate?: true
    bookingStatus?: true
    originalPrice?: true
    discountAmount?: true
    taxesAndFees?: true
    finalPrice?: true
    discountId?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    roomAmount?: true
    numGuest?: true
    checkInDate?: true
    checkOutDate?: true
    bookingDate?: true
    bookingStatus?: true
    originalPrice?: true
    discountAmount?: true
    taxesAndFees?: true
    finalPrice?: true
    discountId?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    roomAmount?: true
    numGuest?: true
    checkInDate?: true
    checkOutDate?: true
    bookingDate?: true
    bookingStatus?: true
    originalPrice?: true
    discountAmount?: true
    taxesAndFees?: true
    finalPrice?: true
    discountId?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    userId: number
    roomId: number
    roomAmount: number
    numGuest: number
    checkInDate: Date
    checkOutDate: Date
    bookingDate: Date
    bookingStatus: $Enums.bookingStatus
    originalPrice: Decimal
    discountAmount: Decimal
    taxesAndFees: Decimal
    finalPrice: Decimal
    discountId: number | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    roomAmount?: boolean
    numGuest?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    bookingDate?: boolean
    bookingStatus?: boolean
    originalPrice?: boolean
    discountAmount?: boolean
    taxesAndFees?: boolean
    finalPrice?: boolean
    discountId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    discount?: boolean | Booking$discountArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    rewards?: boolean | Booking$rewardsArgs<ExtArgs>
    bookingGuests?: boolean | Booking$bookingGuestsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    roomId?: boolean
    roomAmount?: boolean
    numGuest?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    bookingDate?: boolean
    bookingStatus?: boolean
    originalPrice?: boolean
    discountAmount?: boolean
    taxesAndFees?: boolean
    finalPrice?: boolean
    discountId?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roomId" | "roomAmount" | "numGuest" | "checkInDate" | "checkOutDate" | "bookingDate" | "bookingStatus" | "originalPrice" | "discountAmount" | "taxesAndFees" | "finalPrice" | "discountId", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    discount?: boolean | Booking$discountArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    rewards?: boolean | Booking$rewardsArgs<ExtArgs>
    bookingGuests?: boolean | Booking$bookingGuestsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      discount: Prisma.$DiscountPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs>[]
      rewards: Prisma.$RewardsPayload<ExtArgs>[]
      bookingGuests: Prisma.$BookingGuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      roomId: number
      roomAmount: number
      numGuest: number
      checkInDate: Date
      checkOutDate: Date
      bookingDate: Date
      bookingStatus: $Enums.bookingStatus
      originalPrice: Prisma.Decimal
      discountAmount: Prisma.Decimal
      taxesAndFees: Prisma.Decimal
      finalPrice: Prisma.Decimal
      discountId: number | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    discount<T extends Booking$discountArgs<ExtArgs> = {}>(args?: Subset<T, Booking$discountArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Booking$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rewards<T extends Booking$rewardsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$rewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookingGuests<T extends Booking$bookingGuestsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$bookingGuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly userId: FieldRef<"Booking", 'Int'>
    readonly roomId: FieldRef<"Booking", 'Int'>
    readonly roomAmount: FieldRef<"Booking", 'Int'>
    readonly numGuest: FieldRef<"Booking", 'Int'>
    readonly checkInDate: FieldRef<"Booking", 'DateTime'>
    readonly checkOutDate: FieldRef<"Booking", 'DateTime'>
    readonly bookingDate: FieldRef<"Booking", 'DateTime'>
    readonly bookingStatus: FieldRef<"Booking", 'bookingStatus'>
    readonly originalPrice: FieldRef<"Booking", 'Decimal'>
    readonly discountAmount: FieldRef<"Booking", 'Decimal'>
    readonly taxesAndFees: FieldRef<"Booking", 'Decimal'>
    readonly finalPrice: FieldRef<"Booking", 'Decimal'>
    readonly discountId: FieldRef<"Booking", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.discount
   */
  export type Booking$discountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    where?: DiscountWhereInput
  }

  /**
   * Booking.payment
   */
  export type Booking$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Booking.rewards
   */
  export type Booking$rewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    where?: RewardsWhereInput
    orderBy?: RewardsOrderByWithRelationInput | RewardsOrderByWithRelationInput[]
    cursor?: RewardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardsScalarFieldEnum | RewardsScalarFieldEnum[]
  }

  /**
   * Booking.bookingGuests
   */
  export type Booking$bookingGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingGuest
     */
    select?: BookingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingGuest
     */
    omit?: BookingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingGuestInclude<ExtArgs> | null
    where?: BookingGuestWhereInput
    orderBy?: BookingGuestOrderByWithRelationInput | BookingGuestOrderByWithRelationInput[]
    cursor?: BookingGuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingGuestScalarFieldEnum | BookingGuestScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model BookingGuest
   */

  export type AggregateBookingGuest = {
    _count: BookingGuestCountAggregateOutputType | null
    _avg: BookingGuestAvgAggregateOutputType | null
    _sum: BookingGuestSumAggregateOutputType | null
    _min: BookingGuestMinAggregateOutputType | null
    _max: BookingGuestMaxAggregateOutputType | null
  }

  export type BookingGuestAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
  }

  export type BookingGuestSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
  }

  export type BookingGuestMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    bookingId: number | null
  }

  export type BookingGuestMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    bookingId: number | null
  }

  export type BookingGuestCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    bookingId: number
    _all: number
  }


  export type BookingGuestAvgAggregateInputType = {
    id?: true
    bookingId?: true
  }

  export type BookingGuestSumAggregateInputType = {
    id?: true
    bookingId?: true
  }

  export type BookingGuestMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    bookingId?: true
  }

  export type BookingGuestMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    bookingId?: true
  }

  export type BookingGuestCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    bookingId?: true
    _all?: true
  }

  export type BookingGuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingGuest to aggregate.
     */
    where?: BookingGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingGuests to fetch.
     */
    orderBy?: BookingGuestOrderByWithRelationInput | BookingGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingGuests
    **/
    _count?: true | BookingGuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingGuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingGuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingGuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingGuestMaxAggregateInputType
  }

  export type GetBookingGuestAggregateType<T extends BookingGuestAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingGuest[P]>
      : GetScalarType<T[P], AggregateBookingGuest[P]>
  }




  export type BookingGuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingGuestWhereInput
    orderBy?: BookingGuestOrderByWithAggregationInput | BookingGuestOrderByWithAggregationInput[]
    by: BookingGuestScalarFieldEnum[] | BookingGuestScalarFieldEnum
    having?: BookingGuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingGuestCountAggregateInputType | true
    _avg?: BookingGuestAvgAggregateInputType
    _sum?: BookingGuestSumAggregateInputType
    _min?: BookingGuestMinAggregateInputType
    _max?: BookingGuestMaxAggregateInputType
  }

  export type BookingGuestGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    bookingId: number
    _count: BookingGuestCountAggregateOutputType | null
    _avg: BookingGuestAvgAggregateOutputType | null
    _sum: BookingGuestSumAggregateOutputType | null
    _min: BookingGuestMinAggregateOutputType | null
    _max: BookingGuestMaxAggregateOutputType | null
  }

  type GetBookingGuestGroupByPayload<T extends BookingGuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGuestGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGuestGroupByOutputType[P]>
        }
      >
    >


  export type BookingGuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    bookingId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingGuest"]>



  export type BookingGuestSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    bookingId?: boolean
  }

  export type BookingGuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "bookingId", ExtArgs["result"]["bookingGuest"]>
  export type BookingGuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $BookingGuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingGuest"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      bookingId: number
    }, ExtArgs["result"]["bookingGuest"]>
    composites: {}
  }

  type BookingGuestGetPayload<S extends boolean | null | undefined | BookingGuestDefaultArgs> = $Result.GetResult<Prisma.$BookingGuestPayload, S>

  type BookingGuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingGuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingGuestCountAggregateInputType | true
    }

  export interface BookingGuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingGuest'], meta: { name: 'BookingGuest' } }
    /**
     * Find zero or one BookingGuest that matches the filter.
     * @param {BookingGuestFindUniqueArgs} args - Arguments to find a BookingGuest
     * @example
     * // Get one BookingGuest
     * const bookingGuest = await prisma.bookingGuest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingGuestFindUniqueArgs>(args: SelectSubset<T, BookingGuestFindUniqueArgs<ExtArgs>>): Prisma__BookingGuestClient<$Result.GetResult<Prisma.$BookingGuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingGuest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingGuestFindUniqueOrThrowArgs} args - Arguments to find a BookingGuest
     * @example
     * // Get one BookingGuest
     * const bookingGuest = await prisma.bookingGuest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingGuestFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingGuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingGuestClient<$Result.GetResult<Prisma.$BookingGuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingGuest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGuestFindFirstArgs} args - Arguments to find a BookingGuest
     * @example
     * // Get one BookingGuest
     * const bookingGuest = await prisma.bookingGuest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingGuestFindFirstArgs>(args?: SelectSubset<T, BookingGuestFindFirstArgs<ExtArgs>>): Prisma__BookingGuestClient<$Result.GetResult<Prisma.$BookingGuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingGuest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGuestFindFirstOrThrowArgs} args - Arguments to find a BookingGuest
     * @example
     * // Get one BookingGuest
     * const bookingGuest = await prisma.bookingGuest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingGuestFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingGuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingGuestClient<$Result.GetResult<Prisma.$BookingGuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingGuests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingGuests
     * const bookingGuests = await prisma.bookingGuest.findMany()
     * 
     * // Get first 10 BookingGuests
     * const bookingGuests = await prisma.bookingGuest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingGuestWithIdOnly = await prisma.bookingGuest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingGuestFindManyArgs>(args?: SelectSubset<T, BookingGuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingGuest.
     * @param {BookingGuestCreateArgs} args - Arguments to create a BookingGuest.
     * @example
     * // Create one BookingGuest
     * const BookingGuest = await prisma.bookingGuest.create({
     *   data: {
     *     // ... data to create a BookingGuest
     *   }
     * })
     * 
     */
    create<T extends BookingGuestCreateArgs>(args: SelectSubset<T, BookingGuestCreateArgs<ExtArgs>>): Prisma__BookingGuestClient<$Result.GetResult<Prisma.$BookingGuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingGuests.
     * @param {BookingGuestCreateManyArgs} args - Arguments to create many BookingGuests.
     * @example
     * // Create many BookingGuests
     * const bookingGuest = await prisma.bookingGuest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingGuestCreateManyArgs>(args?: SelectSubset<T, BookingGuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookingGuest.
     * @param {BookingGuestDeleteArgs} args - Arguments to delete one BookingGuest.
     * @example
     * // Delete one BookingGuest
     * const BookingGuest = await prisma.bookingGuest.delete({
     *   where: {
     *     // ... filter to delete one BookingGuest
     *   }
     * })
     * 
     */
    delete<T extends BookingGuestDeleteArgs>(args: SelectSubset<T, BookingGuestDeleteArgs<ExtArgs>>): Prisma__BookingGuestClient<$Result.GetResult<Prisma.$BookingGuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingGuest.
     * @param {BookingGuestUpdateArgs} args - Arguments to update one BookingGuest.
     * @example
     * // Update one BookingGuest
     * const bookingGuest = await prisma.bookingGuest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingGuestUpdateArgs>(args: SelectSubset<T, BookingGuestUpdateArgs<ExtArgs>>): Prisma__BookingGuestClient<$Result.GetResult<Prisma.$BookingGuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingGuests.
     * @param {BookingGuestDeleteManyArgs} args - Arguments to filter BookingGuests to delete.
     * @example
     * // Delete a few BookingGuests
     * const { count } = await prisma.bookingGuest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingGuestDeleteManyArgs>(args?: SelectSubset<T, BookingGuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingGuests
     * const bookingGuest = await prisma.bookingGuest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingGuestUpdateManyArgs>(args: SelectSubset<T, BookingGuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookingGuest.
     * @param {BookingGuestUpsertArgs} args - Arguments to update or create a BookingGuest.
     * @example
     * // Update or create a BookingGuest
     * const bookingGuest = await prisma.bookingGuest.upsert({
     *   create: {
     *     // ... data to create a BookingGuest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingGuest we want to update
     *   }
     * })
     */
    upsert<T extends BookingGuestUpsertArgs>(args: SelectSubset<T, BookingGuestUpsertArgs<ExtArgs>>): Prisma__BookingGuestClient<$Result.GetResult<Prisma.$BookingGuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGuestCountArgs} args - Arguments to filter BookingGuests to count.
     * @example
     * // Count the number of BookingGuests
     * const count = await prisma.bookingGuest.count({
     *   where: {
     *     // ... the filter for the BookingGuests we want to count
     *   }
     * })
    **/
    count<T extends BookingGuestCountArgs>(
      args?: Subset<T, BookingGuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingGuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingGuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingGuestAggregateArgs>(args: Subset<T, BookingGuestAggregateArgs>): Prisma.PrismaPromise<GetBookingGuestAggregateType<T>>

    /**
     * Group by BookingGuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGuestGroupByArgs} args - Group by arguments.
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
      T extends BookingGuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGuestGroupByArgs['orderBy'] }
        : { orderBy?: BookingGuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingGuest model
   */
  readonly fields: BookingGuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingGuest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingGuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookingGuest model
   */
  interface BookingGuestFieldRefs {
    readonly id: FieldRef<"BookingGuest", 'Int'>
    readonly firstName: FieldRef<"BookingGuest", 'String'>
    readonly lastName: FieldRef<"BookingGuest", 'String'>
    readonly bookingId: FieldRef<"BookingGuest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookingGuest findUnique
   */
  export type BookingGuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingGuest
     */
    select?: BookingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingGuest
     */
    omit?: BookingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingGuestInclude<ExtArgs> | null
    /**
     * Filter, which BookingGuest to fetch.
     */
    where: BookingGuestWhereUniqueInput
  }

  /**
   * BookingGuest findUniqueOrThrow
   */
  export type BookingGuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingGuest
     */
    select?: BookingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingGuest
     */
    omit?: BookingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingGuestInclude<ExtArgs> | null
    /**
     * Filter, which BookingGuest to fetch.
     */
    where: BookingGuestWhereUniqueInput
  }

  /**
   * BookingGuest findFirst
   */
  export type BookingGuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingGuest
     */
    select?: BookingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingGuest
     */
    omit?: BookingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingGuestInclude<ExtArgs> | null
    /**
     * Filter, which BookingGuest to fetch.
     */
    where?: BookingGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingGuests to fetch.
     */
    orderBy?: BookingGuestOrderByWithRelationInput | BookingGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingGuests.
     */
    cursor?: BookingGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingGuests.
     */
    distinct?: BookingGuestScalarFieldEnum | BookingGuestScalarFieldEnum[]
  }

  /**
   * BookingGuest findFirstOrThrow
   */
  export type BookingGuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingGuest
     */
    select?: BookingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingGuest
     */
    omit?: BookingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingGuestInclude<ExtArgs> | null
    /**
     * Filter, which BookingGuest to fetch.
     */
    where?: BookingGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingGuests to fetch.
     */
    orderBy?: BookingGuestOrderByWithRelationInput | BookingGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingGuests.
     */
    cursor?: BookingGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingGuests.
     */
    distinct?: BookingGuestScalarFieldEnum | BookingGuestScalarFieldEnum[]
  }

  /**
   * BookingGuest findMany
   */
  export type BookingGuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingGuest
     */
    select?: BookingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingGuest
     */
    omit?: BookingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingGuestInclude<ExtArgs> | null
    /**
     * Filter, which BookingGuests to fetch.
     */
    where?: BookingGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingGuests to fetch.
     */
    orderBy?: BookingGuestOrderByWithRelationInput | BookingGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingGuests.
     */
    cursor?: BookingGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingGuests.
     */
    distinct?: BookingGuestScalarFieldEnum | BookingGuestScalarFieldEnum[]
  }

  /**
   * BookingGuest create
   */
  export type BookingGuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingGuest
     */
    select?: BookingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingGuest
     */
    omit?: BookingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingGuestInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingGuest.
     */
    data: XOR<BookingGuestCreateInput, BookingGuestUncheckedCreateInput>
  }

  /**
   * BookingGuest createMany
   */
  export type BookingGuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingGuests.
     */
    data: BookingGuestCreateManyInput | BookingGuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingGuest update
   */
  export type BookingGuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingGuest
     */
    select?: BookingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingGuest
     */
    omit?: BookingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingGuestInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingGuest.
     */
    data: XOR<BookingGuestUpdateInput, BookingGuestUncheckedUpdateInput>
    /**
     * Choose, which BookingGuest to update.
     */
    where: BookingGuestWhereUniqueInput
  }

  /**
   * BookingGuest updateMany
   */
  export type BookingGuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingGuests.
     */
    data: XOR<BookingGuestUpdateManyMutationInput, BookingGuestUncheckedUpdateManyInput>
    /**
     * Filter which BookingGuests to update
     */
    where?: BookingGuestWhereInput
    /**
     * Limit how many BookingGuests to update.
     */
    limit?: number
  }

  /**
   * BookingGuest upsert
   */
  export type BookingGuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingGuest
     */
    select?: BookingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingGuest
     */
    omit?: BookingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingGuestInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingGuest to update in case it exists.
     */
    where: BookingGuestWhereUniqueInput
    /**
     * In case the BookingGuest found by the `where` argument doesn't exist, create a new BookingGuest with this data.
     */
    create: XOR<BookingGuestCreateInput, BookingGuestUncheckedCreateInput>
    /**
     * In case the BookingGuest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingGuestUpdateInput, BookingGuestUncheckedUpdateInput>
  }

  /**
   * BookingGuest delete
   */
  export type BookingGuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingGuest
     */
    select?: BookingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingGuest
     */
    omit?: BookingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingGuestInclude<ExtArgs> | null
    /**
     * Filter which BookingGuest to delete.
     */
    where: BookingGuestWhereUniqueInput
  }

  /**
   * BookingGuest deleteMany
   */
  export type BookingGuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingGuests to delete
     */
    where?: BookingGuestWhereInput
    /**
     * Limit how many BookingGuests to delete.
     */
    limit?: number
  }

  /**
   * BookingGuest without action
   */
  export type BookingGuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingGuest
     */
    select?: BookingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingGuest
     */
    omit?: BookingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingGuestInclude<ExtArgs> | null
  }


  /**
   * Model Discount
   */

  export type AggregateDiscount = {
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  export type DiscountAvgAggregateOutputType = {
    id: number | null
    value: number | null
    minSpend: number | null
    maxDiscount: number | null
    usageLimit: number | null
    usedCount: number | null
  }

  export type DiscountSumAggregateOutputType = {
    id: number | null
    value: number | null
    minSpend: number | null
    maxDiscount: number | null
    usageLimit: number | null
    usedCount: number | null
  }

  export type DiscountMinAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    value: number | null
    type: $Enums.DiscountType | null
    minSpend: number | null
    maxDiscount: number | null
    startDate: Date | null
    endDate: Date | null
    usageLimit: number | null
    usedCount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscountMaxAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    value: number | null
    type: $Enums.DiscountType | null
    minSpend: number | null
    maxDiscount: number | null
    startDate: Date | null
    endDate: Date | null
    usageLimit: number | null
    usedCount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscountCountAggregateOutputType = {
    id: number
    code: number
    description: number
    value: number
    type: number
    minSpend: number
    maxDiscount: number
    startDate: number
    endDate: number
    usageLimit: number
    usedCount: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiscountAvgAggregateInputType = {
    id?: true
    value?: true
    minSpend?: true
    maxDiscount?: true
    usageLimit?: true
    usedCount?: true
  }

  export type DiscountSumAggregateInputType = {
    id?: true
    value?: true
    minSpend?: true
    maxDiscount?: true
    usageLimit?: true
    usedCount?: true
  }

  export type DiscountMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
    value?: true
    type?: true
    minSpend?: true
    maxDiscount?: true
    startDate?: true
    endDate?: true
    usageLimit?: true
    usedCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscountMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    value?: true
    type?: true
    minSpend?: true
    maxDiscount?: true
    startDate?: true
    endDate?: true
    usageLimit?: true
    usedCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscountCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    value?: true
    type?: true
    minSpend?: true
    maxDiscount?: true
    startDate?: true
    endDate?: true
    usageLimit?: true
    usedCount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiscountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discount to aggregate.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discounts
    **/
    _count?: true | DiscountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountMaxAggregateInputType
  }

  export type GetDiscountAggregateType<T extends DiscountAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscount[P]>
      : GetScalarType<T[P], AggregateDiscount[P]>
  }




  export type DiscountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountWhereInput
    orderBy?: DiscountOrderByWithAggregationInput | DiscountOrderByWithAggregationInput[]
    by: DiscountScalarFieldEnum[] | DiscountScalarFieldEnum
    having?: DiscountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountCountAggregateInputType | true
    _avg?: DiscountAvgAggregateInputType
    _sum?: DiscountSumAggregateInputType
    _min?: DiscountMinAggregateInputType
    _max?: DiscountMaxAggregateInputType
  }

  export type DiscountGroupByOutputType = {
    id: number
    code: string
    description: string
    value: number
    type: $Enums.DiscountType
    minSpend: number | null
    maxDiscount: number | null
    startDate: Date | null
    endDate: Date | null
    usageLimit: number | null
    usedCount: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  type GetDiscountGroupByPayload<T extends DiscountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountGroupByOutputType[P]>
        }
      >
    >


  export type DiscountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    value?: boolean
    type?: boolean
    minSpend?: boolean
    maxDiscount?: boolean
    startDate?: boolean
    endDate?: boolean
    usageLimit?: boolean
    usedCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | Discount$bookingsArgs<ExtArgs>
    hotels?: boolean | Discount$hotelsArgs<ExtArgs>
    _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discount"]>



  export type DiscountSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    value?: boolean
    type?: boolean
    minSpend?: boolean
    maxDiscount?: boolean
    startDate?: boolean
    endDate?: boolean
    usageLimit?: boolean
    usedCount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DiscountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "description" | "value" | "type" | "minSpend" | "maxDiscount" | "startDate" | "endDate" | "usageLimit" | "usedCount" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["discount"]>
  export type DiscountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Discount$bookingsArgs<ExtArgs>
    hotels?: boolean | Discount$hotelsArgs<ExtArgs>
    _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiscountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discount"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      hotels: Prisma.$HotelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      description: string
      value: number
      type: $Enums.DiscountType
      minSpend: number | null
      maxDiscount: number | null
      startDate: Date | null
      endDate: Date | null
      usageLimit: number | null
      usedCount: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["discount"]>
    composites: {}
  }

  type DiscountGetPayload<S extends boolean | null | undefined | DiscountDefaultArgs> = $Result.GetResult<Prisma.$DiscountPayload, S>

  type DiscountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscountCountAggregateInputType | true
    }

  export interface DiscountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discount'], meta: { name: 'Discount' } }
    /**
     * Find zero or one Discount that matches the filter.
     * @param {DiscountFindUniqueArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountFindUniqueArgs>(args: SelectSubset<T, DiscountFindUniqueArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscountFindUniqueOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountFindFirstArgs>(args?: SelectSubset<T, DiscountFindFirstArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounts
     * const discounts = await prisma.discount.findMany()
     * 
     * // Get first 10 Discounts
     * const discounts = await prisma.discount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discountWithIdOnly = await prisma.discount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscountFindManyArgs>(args?: SelectSubset<T, DiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discount.
     * @param {DiscountCreateArgs} args - Arguments to create a Discount.
     * @example
     * // Create one Discount
     * const Discount = await prisma.discount.create({
     *   data: {
     *     // ... data to create a Discount
     *   }
     * })
     * 
     */
    create<T extends DiscountCreateArgs>(args: SelectSubset<T, DiscountCreateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discounts.
     * @param {DiscountCreateManyArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscountCreateManyArgs>(args?: SelectSubset<T, DiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Discount.
     * @param {DiscountDeleteArgs} args - Arguments to delete one Discount.
     * @example
     * // Delete one Discount
     * const Discount = await prisma.discount.delete({
     *   where: {
     *     // ... filter to delete one Discount
     *   }
     * })
     * 
     */
    delete<T extends DiscountDeleteArgs>(args: SelectSubset<T, DiscountDeleteArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discount.
     * @param {DiscountUpdateArgs} args - Arguments to update one Discount.
     * @example
     * // Update one Discount
     * const discount = await prisma.discount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscountUpdateArgs>(args: SelectSubset<T, DiscountUpdateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discounts.
     * @param {DiscountDeleteManyArgs} args - Arguments to filter Discounts to delete.
     * @example
     * // Delete a few Discounts
     * const { count } = await prisma.discount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscountDeleteManyArgs>(args?: SelectSubset<T, DiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscountUpdateManyArgs>(args: SelectSubset<T, DiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Discount.
     * @param {DiscountUpsertArgs} args - Arguments to update or create a Discount.
     * @example
     * // Update or create a Discount
     * const discount = await prisma.discount.upsert({
     *   create: {
     *     // ... data to create a Discount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discount we want to update
     *   }
     * })
     */
    upsert<T extends DiscountUpsertArgs>(args: SelectSubset<T, DiscountUpsertArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCountArgs} args - Arguments to filter Discounts to count.
     * @example
     * // Count the number of Discounts
     * const count = await prisma.discount.count({
     *   where: {
     *     // ... the filter for the Discounts we want to count
     *   }
     * })
    **/
    count<T extends DiscountCountArgs>(
      args?: Subset<T, DiscountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscountAggregateArgs>(args: Subset<T, DiscountAggregateArgs>): Prisma.PrismaPromise<GetDiscountAggregateType<T>>

    /**
     * Group by Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountGroupByArgs} args - Group by arguments.
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
      T extends DiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountGroupByArgs['orderBy'] }
        : { orderBy?: DiscountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discount model
   */
  readonly fields: DiscountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Discount$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Discount$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hotels<T extends Discount$hotelsArgs<ExtArgs> = {}>(args?: Subset<T, Discount$hotelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Discount model
   */
  interface DiscountFieldRefs {
    readonly id: FieldRef<"Discount", 'Int'>
    readonly code: FieldRef<"Discount", 'String'>
    readonly description: FieldRef<"Discount", 'String'>
    readonly value: FieldRef<"Discount", 'Float'>
    readonly type: FieldRef<"Discount", 'DiscountType'>
    readonly minSpend: FieldRef<"Discount", 'Float'>
    readonly maxDiscount: FieldRef<"Discount", 'Float'>
    readonly startDate: FieldRef<"Discount", 'DateTime'>
    readonly endDate: FieldRef<"Discount", 'DateTime'>
    readonly usageLimit: FieldRef<"Discount", 'Int'>
    readonly usedCount: FieldRef<"Discount", 'Int'>
    readonly isActive: FieldRef<"Discount", 'Boolean'>
    readonly createdAt: FieldRef<"Discount", 'DateTime'>
    readonly updatedAt: FieldRef<"Discount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Discount findUnique
   */
  export type DiscountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findUniqueOrThrow
   */
  export type DiscountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findFirst
   */
  export type DiscountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findFirstOrThrow
   */
  export type DiscountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findMany
   */
  export type DiscountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discounts to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount create
   */
  export type DiscountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The data needed to create a Discount.
     */
    data: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
  }

  /**
   * Discount createMany
   */
  export type DiscountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discount update
   */
  export type DiscountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The data needed to update a Discount.
     */
    data: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
    /**
     * Choose, which Discount to update.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount updateMany
   */
  export type DiscountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discounts.
     */
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyInput>
    /**
     * Filter which Discounts to update
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to update.
     */
    limit?: number
  }

  /**
   * Discount upsert
   */
  export type DiscountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The filter to search for the Discount to update in case it exists.
     */
    where: DiscountWhereUniqueInput
    /**
     * In case the Discount found by the `where` argument doesn't exist, create a new Discount with this data.
     */
    create: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
    /**
     * In case the Discount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
  }

  /**
   * Discount delete
   */
  export type DiscountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter which Discount to delete.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount deleteMany
   */
  export type DiscountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discounts to delete
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to delete.
     */
    limit?: number
  }

  /**
   * Discount.bookings
   */
  export type Discount$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Discount.hotels
   */
  export type Discount$hotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    cursor?: HotelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Discount without action
   */
  export type DiscountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    bookingId: number | null
    paymentMethod: $Enums.PaymentMethod | null
    bankName: string | null
    accountNo: string | null
    accountName: string | null
    amount: number | null
    paymentDate: Date | null
    paymentRefNo: string | null
    paymentStatus: $Enums.PaymenStatus | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    bookingId: number | null
    paymentMethod: $Enums.PaymentMethod | null
    bankName: string | null
    accountNo: string | null
    accountName: string | null
    amount: number | null
    paymentDate: Date | null
    paymentRefNo: string | null
    paymentStatus: $Enums.PaymenStatus | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    bookingId: number
    paymentMethod: number
    bankName: number
    accountNo: number
    accountName: number
    amount: number
    paymentDate: number
    paymentRefNo: number
    paymentStatus: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    bookingId?: true
    paymentMethod?: true
    bankName?: true
    accountNo?: true
    accountName?: true
    amount?: true
    paymentDate?: true
    paymentRefNo?: true
    paymentStatus?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    bookingId?: true
    paymentMethod?: true
    bankName?: true
    accountNo?: true
    accountName?: true
    amount?: true
    paymentDate?: true
    paymentRefNo?: true
    paymentStatus?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    bookingId?: true
    paymentMethod?: true
    bankName?: true
    accountNo?: true
    accountName?: true
    amount?: true
    paymentDate?: true
    paymentRefNo?: true
    paymentStatus?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    bookingId: number
    paymentMethod: $Enums.PaymentMethod
    bankName: string | null
    accountNo: string | null
    accountName: string
    amount: number
    paymentDate: Date
    paymentRefNo: string
    paymentStatus: $Enums.PaymenStatus
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    paymentMethod?: boolean
    bankName?: boolean
    accountNo?: boolean
    accountName?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentRefNo?: boolean
    paymentStatus?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    bookingId?: boolean
    paymentMethod?: boolean
    bankName?: boolean
    accountNo?: boolean
    accountName?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentRefNo?: boolean
    paymentStatus?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "paymentMethod" | "bankName" | "accountNo" | "accountName" | "amount" | "paymentDate" | "paymentRefNo" | "paymentStatus", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingId: number
      paymentMethod: $Enums.PaymentMethod
      bankName: string | null
      accountNo: string | null
      accountName: string
      amount: number
      paymentDate: Date
      paymentRefNo: string
      paymentStatus: $Enums.PaymenStatus
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly bookingId: FieldRef<"Payment", 'Int'>
    readonly paymentMethod: FieldRef<"Payment", 'PaymentMethod'>
    readonly bankName: FieldRef<"Payment", 'String'>
    readonly accountNo: FieldRef<"Payment", 'String'>
    readonly accountName: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentRefNo: FieldRef<"Payment", 'String'>
    readonly paymentStatus: FieldRef<"Payment", 'PaymenStatus'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    hotelId: number | null
    roomId: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    hotelId: number | null
    roomId: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    hotelId: number | null
    roomId: number | null
    reviewContent: string | null
    reviewImg: string | null
    rating: number | null
    stayedDate: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    hotelId: number | null
    roomId: number | null
    reviewContent: string | null
    reviewImg: string | null
    rating: number | null
    stayedDate: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    userId: number
    hotelId: number
    roomId: number
    reviewContent: number
    reviewImg: number
    rating: number
    stayedDate: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    userId?: true
    hotelId?: true
    roomId?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    userId?: true
    hotelId?: true
    roomId?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    userId?: true
    hotelId?: true
    roomId?: true
    reviewContent?: true
    reviewImg?: true
    rating?: true
    stayedDate?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    userId?: true
    hotelId?: true
    roomId?: true
    reviewContent?: true
    reviewImg?: true
    rating?: true
    stayedDate?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    userId?: true
    hotelId?: true
    roomId?: true
    reviewContent?: true
    reviewImg?: true
    rating?: true
    stayedDate?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    userId: number
    hotelId: number
    roomId: number
    reviewContent: string
    reviewImg: string | null
    rating: number
    stayedDate: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hotelId?: boolean
    roomId?: boolean
    reviewContent?: boolean
    reviewImg?: boolean
    rating?: boolean
    stayedDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>



  export type ReviewsSelectScalar = {
    id?: boolean
    userId?: boolean
    hotelId?: boolean
    roomId?: boolean
    reviewContent?: boolean
    reviewImg?: boolean
    rating?: boolean
    stayedDate?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "hotelId" | "roomId" | "reviewContent" | "reviewImg" | "rating" | "stayedDate", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      hotelId: number
      roomId: number
      reviewContent: string
      reviewImg: string | null
      rating: number
      stayedDate: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
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
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'Int'>
    readonly userId: FieldRef<"Reviews", 'Int'>
    readonly hotelId: FieldRef<"Reviews", 'Int'>
    readonly roomId: FieldRef<"Reviews", 'Int'>
    readonly reviewContent: FieldRef<"Reviews", 'String'>
    readonly reviewImg: FieldRef<"Reviews", 'String'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly stayedDate: FieldRef<"Reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Rewards
   */

  export type AggregateRewards = {
    _count: RewardsCountAggregateOutputType | null
    _avg: RewardsAvgAggregateOutputType | null
    _sum: RewardsSumAggregateOutputType | null
    _min: RewardsMinAggregateOutputType | null
    _max: RewardsMaxAggregateOutputType | null
  }

  export type RewardsAvgAggregateOutputType = {
    id: number | null
    rewardPoints: number | null
    userId: number | null
    bookingId: number | null
  }

  export type RewardsSumAggregateOutputType = {
    id: number | null
    rewardPoints: number | null
    userId: number | null
    bookingId: number | null
  }

  export type RewardsMinAggregateOutputType = {
    id: number | null
    rewardPoints: number | null
    userId: number | null
    bookingId: number | null
    rewardStatus: $Enums.RewardStatus | null
  }

  export type RewardsMaxAggregateOutputType = {
    id: number | null
    rewardPoints: number | null
    userId: number | null
    bookingId: number | null
    rewardStatus: $Enums.RewardStatus | null
  }

  export type RewardsCountAggregateOutputType = {
    id: number
    rewardPoints: number
    userId: number
    bookingId: number
    rewardStatus: number
    _all: number
  }


  export type RewardsAvgAggregateInputType = {
    id?: true
    rewardPoints?: true
    userId?: true
    bookingId?: true
  }

  export type RewardsSumAggregateInputType = {
    id?: true
    rewardPoints?: true
    userId?: true
    bookingId?: true
  }

  export type RewardsMinAggregateInputType = {
    id?: true
    rewardPoints?: true
    userId?: true
    bookingId?: true
    rewardStatus?: true
  }

  export type RewardsMaxAggregateInputType = {
    id?: true
    rewardPoints?: true
    userId?: true
    bookingId?: true
    rewardStatus?: true
  }

  export type RewardsCountAggregateInputType = {
    id?: true
    rewardPoints?: true
    userId?: true
    bookingId?: true
    rewardStatus?: true
    _all?: true
  }

  export type RewardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to aggregate.
     */
    where?: RewardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardsOrderByWithRelationInput | RewardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rewards
    **/
    _count?: true | RewardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardsMaxAggregateInputType
  }

  export type GetRewardsAggregateType<T extends RewardsAggregateArgs> = {
        [P in keyof T & keyof AggregateRewards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRewards[P]>
      : GetScalarType<T[P], AggregateRewards[P]>
  }




  export type RewardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardsWhereInput
    orderBy?: RewardsOrderByWithAggregationInput | RewardsOrderByWithAggregationInput[]
    by: RewardsScalarFieldEnum[] | RewardsScalarFieldEnum
    having?: RewardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardsCountAggregateInputType | true
    _avg?: RewardsAvgAggregateInputType
    _sum?: RewardsSumAggregateInputType
    _min?: RewardsMinAggregateInputType
    _max?: RewardsMaxAggregateInputType
  }

  export type RewardsGroupByOutputType = {
    id: number
    rewardPoints: number
    userId: number
    bookingId: number
    rewardStatus: $Enums.RewardStatus
    _count: RewardsCountAggregateOutputType | null
    _avg: RewardsAvgAggregateOutputType | null
    _sum: RewardsSumAggregateOutputType | null
    _min: RewardsMinAggregateOutputType | null
    _max: RewardsMaxAggregateOutputType | null
  }

  type GetRewardsGroupByPayload<T extends RewardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardsGroupByOutputType[P]>
            : GetScalarType<T[P], RewardsGroupByOutputType[P]>
        }
      >
    >


  export type RewardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rewardPoints?: boolean
    userId?: boolean
    bookingId?: boolean
    rewardStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewards"]>



  export type RewardsSelectScalar = {
    id?: boolean
    rewardPoints?: boolean
    userId?: boolean
    bookingId?: boolean
    rewardStatus?: boolean
  }

  export type RewardsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rewardPoints" | "userId" | "bookingId" | "rewardStatus", ExtArgs["result"]["rewards"]>
  export type RewardsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $RewardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rewards"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rewardPoints: number
      userId: number
      bookingId: number
      rewardStatus: $Enums.RewardStatus
    }, ExtArgs["result"]["rewards"]>
    composites: {}
  }

  type RewardsGetPayload<S extends boolean | null | undefined | RewardsDefaultArgs> = $Result.GetResult<Prisma.$RewardsPayload, S>

  type RewardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardsCountAggregateInputType | true
    }

  export interface RewardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rewards'], meta: { name: 'Rewards' } }
    /**
     * Find zero or one Rewards that matches the filter.
     * @param {RewardsFindUniqueArgs} args - Arguments to find a Rewards
     * @example
     * // Get one Rewards
     * const rewards = await prisma.rewards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardsFindUniqueArgs>(args: SelectSubset<T, RewardsFindUniqueArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rewards that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardsFindUniqueOrThrowArgs} args - Arguments to find a Rewards
     * @example
     * // Get one Rewards
     * const rewards = await prisma.rewards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardsFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsFindFirstArgs} args - Arguments to find a Rewards
     * @example
     * // Get one Rewards
     * const rewards = await prisma.rewards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardsFindFirstArgs>(args?: SelectSubset<T, RewardsFindFirstArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rewards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsFindFirstOrThrowArgs} args - Arguments to find a Rewards
     * @example
     * // Get one Rewards
     * const rewards = await prisma.rewards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardsFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rewards
     * const rewards = await prisma.rewards.findMany()
     * 
     * // Get first 10 Rewards
     * const rewards = await prisma.rewards.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardsWithIdOnly = await prisma.rewards.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardsFindManyArgs>(args?: SelectSubset<T, RewardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rewards.
     * @param {RewardsCreateArgs} args - Arguments to create a Rewards.
     * @example
     * // Create one Rewards
     * const Rewards = await prisma.rewards.create({
     *   data: {
     *     // ... data to create a Rewards
     *   }
     * })
     * 
     */
    create<T extends RewardsCreateArgs>(args: SelectSubset<T, RewardsCreateArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rewards.
     * @param {RewardsCreateManyArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const rewards = await prisma.rewards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardsCreateManyArgs>(args?: SelectSubset<T, RewardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rewards.
     * @param {RewardsDeleteArgs} args - Arguments to delete one Rewards.
     * @example
     * // Delete one Rewards
     * const Rewards = await prisma.rewards.delete({
     *   where: {
     *     // ... filter to delete one Rewards
     *   }
     * })
     * 
     */
    delete<T extends RewardsDeleteArgs>(args: SelectSubset<T, RewardsDeleteArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rewards.
     * @param {RewardsUpdateArgs} args - Arguments to update one Rewards.
     * @example
     * // Update one Rewards
     * const rewards = await prisma.rewards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardsUpdateArgs>(args: SelectSubset<T, RewardsUpdateArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rewards.
     * @param {RewardsDeleteManyArgs} args - Arguments to filter Rewards to delete.
     * @example
     * // Delete a few Rewards
     * const { count } = await prisma.rewards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardsDeleteManyArgs>(args?: SelectSubset<T, RewardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rewards
     * const rewards = await prisma.rewards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardsUpdateManyArgs>(args: SelectSubset<T, RewardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rewards.
     * @param {RewardsUpsertArgs} args - Arguments to update or create a Rewards.
     * @example
     * // Update or create a Rewards
     * const rewards = await prisma.rewards.upsert({
     *   create: {
     *     // ... data to create a Rewards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rewards we want to update
     *   }
     * })
     */
    upsert<T extends RewardsUpsertArgs>(args: SelectSubset<T, RewardsUpsertArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsCountArgs} args - Arguments to filter Rewards to count.
     * @example
     * // Count the number of Rewards
     * const count = await prisma.rewards.count({
     *   where: {
     *     // ... the filter for the Rewards we want to count
     *   }
     * })
    **/
    count<T extends RewardsCountArgs>(
      args?: Subset<T, RewardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RewardsAggregateArgs>(args: Subset<T, RewardsAggregateArgs>): Prisma.PrismaPromise<GetRewardsAggregateType<T>>

    /**
     * Group by Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsGroupByArgs} args - Group by arguments.
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
      T extends RewardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardsGroupByArgs['orderBy'] }
        : { orderBy?: RewardsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RewardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rewards model
   */
  readonly fields: RewardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rewards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rewards model
   */
  interface RewardsFieldRefs {
    readonly id: FieldRef<"Rewards", 'Int'>
    readonly rewardPoints: FieldRef<"Rewards", 'Int'>
    readonly userId: FieldRef<"Rewards", 'Int'>
    readonly bookingId: FieldRef<"Rewards", 'Int'>
    readonly rewardStatus: FieldRef<"Rewards", 'RewardStatus'>
  }
    

  // Custom InputTypes
  /**
   * Rewards findUnique
   */
  export type RewardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where: RewardsWhereUniqueInput
  }

  /**
   * Rewards findUniqueOrThrow
   */
  export type RewardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where: RewardsWhereUniqueInput
  }

  /**
   * Rewards findFirst
   */
  export type RewardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardsOrderByWithRelationInput | RewardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardsScalarFieldEnum | RewardsScalarFieldEnum[]
  }

  /**
   * Rewards findFirstOrThrow
   */
  export type RewardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardsOrderByWithRelationInput | RewardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardsScalarFieldEnum | RewardsScalarFieldEnum[]
  }

  /**
   * Rewards findMany
   */
  export type RewardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardsOrderByWithRelationInput | RewardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rewards.
     */
    cursor?: RewardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardsScalarFieldEnum | RewardsScalarFieldEnum[]
  }

  /**
   * Rewards create
   */
  export type RewardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * The data needed to create a Rewards.
     */
    data: XOR<RewardsCreateInput, RewardsUncheckedCreateInput>
  }

  /**
   * Rewards createMany
   */
  export type RewardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rewards.
     */
    data: RewardsCreateManyInput | RewardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rewards update
   */
  export type RewardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * The data needed to update a Rewards.
     */
    data: XOR<RewardsUpdateInput, RewardsUncheckedUpdateInput>
    /**
     * Choose, which Rewards to update.
     */
    where: RewardsWhereUniqueInput
  }

  /**
   * Rewards updateMany
   */
  export type RewardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardsUpdateManyMutationInput, RewardsUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardsWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Rewards upsert
   */
  export type RewardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * The filter to search for the Rewards to update in case it exists.
     */
    where: RewardsWhereUniqueInput
    /**
     * In case the Rewards found by the `where` argument doesn't exist, create a new Rewards with this data.
     */
    create: XOR<RewardsCreateInput, RewardsUncheckedCreateInput>
    /**
     * In case the Rewards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardsUpdateInput, RewardsUncheckedUpdateInput>
  }

  /**
   * Rewards delete
   */
  export type RewardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter which Rewards to delete.
     */
    where: RewardsWhereUniqueInput
  }

  /**
   * Rewards deleteMany
   */
  export type RewardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to delete
     */
    where?: RewardsWhereInput
    /**
     * Limit how many Rewards to delete.
     */
    limit?: number
  }

  /**
   * Rewards without action
   */
  export type RewardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
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
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    profileImg: 'profileImg'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TravelerInfoScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    userId: 'userId'
  };

  export type TravelerInfoScalarFieldEnum = (typeof TravelerInfoScalarFieldEnum)[keyof typeof TravelerInfoScalarFieldEnum]


  export const HotelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    hotelImgId: 'hotelImgId',
    hotelDetails: 'hotelDetails',
    address: 'address',
    city: 'city',
    country: 'country',
    surroundings: 'surroundings',
    amenities: 'amenities',
    policies: 'policies',
    reviewCount: 'reviewCount',
    averageRating: 'averageRating',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type HotelScalarFieldEnum = (typeof HotelScalarFieldEnum)[keyof typeof HotelScalarFieldEnum]


  export const HotelImgScalarFieldEnum: {
    id: 'id',
    img1: 'img1',
    img2: 'img2',
    img3: 'img3',
    img4: 'img4'
  };

  export type HotelImgScalarFieldEnum = (typeof HotelImgScalarFieldEnum)[keyof typeof HotelImgScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    roomType: 'roomType',
    roomImg: 'roomImg',
    nightlyRate: 'nightlyRate',
    roomAmount: 'roomAmount',
    maxAdults: 'maxAdults',
    maxChildren: 'maxChildren',
    bedSetup: 'bedSetup',
    roomSize: 'roomSize',
    isSmoking: 'isSmoking',
    hotelId: 'hotelId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    userId: 'userId',
    hotelId: 'hotelId',
    createdAt: 'createdAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roomId: 'roomId',
    roomAmount: 'roomAmount',
    numGuest: 'numGuest',
    checkInDate: 'checkInDate',
    checkOutDate: 'checkOutDate',
    bookingDate: 'bookingDate',
    bookingStatus: 'bookingStatus',
    originalPrice: 'originalPrice',
    discountAmount: 'discountAmount',
    taxesAndFees: 'taxesAndFees',
    finalPrice: 'finalPrice',
    discountId: 'discountId'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BookingGuestScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    bookingId: 'bookingId'
  };

  export type BookingGuestScalarFieldEnum = (typeof BookingGuestScalarFieldEnum)[keyof typeof BookingGuestScalarFieldEnum]


  export const DiscountScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    value: 'value',
    type: 'type',
    minSpend: 'minSpend',
    maxDiscount: 'maxDiscount',
    startDate: 'startDate',
    endDate: 'endDate',
    usageLimit: 'usageLimit',
    usedCount: 'usedCount',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiscountScalarFieldEnum = (typeof DiscountScalarFieldEnum)[keyof typeof DiscountScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    paymentMethod: 'paymentMethod',
    bankName: 'bankName',
    accountNo: 'accountNo',
    accountName: 'accountName',
    amount: 'amount',
    paymentDate: 'paymentDate',
    paymentRefNo: 'paymentRefNo',
    paymentStatus: 'paymentStatus'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    hotelId: 'hotelId',
    roomId: 'roomId',
    reviewContent: 'reviewContent',
    reviewImg: 'reviewImg',
    rating: 'rating',
    stayedDate: 'stayedDate'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const RewardsScalarFieldEnum: {
    id: 'id',
    rewardPoints: 'rewardPoints',
    userId: 'userId',
    bookingId: 'bookingId',
    rewardStatus: 'rewardStatus'
  };

  export type RewardsScalarFieldEnum = (typeof RewardsScalarFieldEnum)[keyof typeof RewardsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    profileImg: 'profileImg'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TravelerInfoOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type TravelerInfoOrderByRelevanceFieldEnum = (typeof TravelerInfoOrderByRelevanceFieldEnum)[keyof typeof TravelerInfoOrderByRelevanceFieldEnum]


  export const HotelOrderByRelevanceFieldEnum: {
    name: 'name',
    hotelDetails: 'hotelDetails',
    address: 'address',
    city: 'city',
    country: 'country',
    surroundings: 'surroundings',
    amenities: 'amenities',
    policies: 'policies'
  };

  export type HotelOrderByRelevanceFieldEnum = (typeof HotelOrderByRelevanceFieldEnum)[keyof typeof HotelOrderByRelevanceFieldEnum]


  export const HotelImgOrderByRelevanceFieldEnum: {
    img1: 'img1',
    img2: 'img2',
    img3: 'img3',
    img4: 'img4'
  };

  export type HotelImgOrderByRelevanceFieldEnum = (typeof HotelImgOrderByRelevanceFieldEnum)[keyof typeof HotelImgOrderByRelevanceFieldEnum]


  export const RoomOrderByRelevanceFieldEnum: {
    roomType: 'roomType',
    roomImg: 'roomImg',
    bedSetup: 'bedSetup'
  };

  export type RoomOrderByRelevanceFieldEnum = (typeof RoomOrderByRelevanceFieldEnum)[keyof typeof RoomOrderByRelevanceFieldEnum]


  export const BookingGuestOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type BookingGuestOrderByRelevanceFieldEnum = (typeof BookingGuestOrderByRelevanceFieldEnum)[keyof typeof BookingGuestOrderByRelevanceFieldEnum]


  export const DiscountOrderByRelevanceFieldEnum: {
    code: 'code',
    description: 'description'
  };

  export type DiscountOrderByRelevanceFieldEnum = (typeof DiscountOrderByRelevanceFieldEnum)[keyof typeof DiscountOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    bankName: 'bankName',
    accountNo: 'accountNo',
    accountName: 'accountName',
    paymentRefNo: 'paymentRefNo'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const ReviewsOrderByRelevanceFieldEnum: {
    reviewContent: 'reviewContent',
    reviewImg: 'reviewImg'
  };

  export type ReviewsOrderByRelevanceFieldEnum = (typeof ReviewsOrderByRelevanceFieldEnum)[keyof typeof ReviewsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'bookingStatus'
   */
  export type EnumbookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'bookingStatus'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DiscountType'
   */
  export type EnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymenStatus'
   */
  export type EnumPaymenStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymenStatus'>
    


  /**
   * Reference to a field of type 'RewardStatus'
   */
  export type EnumRewardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    profileImg?: StringNullableFilter<"User"> | string | null
    bookings?: BookingListRelationFilter
    likes?: LikeListRelationFilter
    rewards?: RewardsListRelationFilter
    reviews?: ReviewsListRelationFilter
    travlers?: TravelerInfoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profileImg?: SortOrderInput | SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    rewards?: RewardsOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    travlers?: TravelerInfoOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    profileImg?: StringNullableFilter<"User"> | string | null
    bookings?: BookingListRelationFilter
    likes?: LikeListRelationFilter
    rewards?: RewardsListRelationFilter
    reviews?: ReviewsListRelationFilter
    travlers?: TravelerInfoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profileImg?: SortOrderInput | SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    profileImg?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TravelerInfoWhereInput = {
    AND?: TravelerInfoWhereInput | TravelerInfoWhereInput[]
    OR?: TravelerInfoWhereInput[]
    NOT?: TravelerInfoWhereInput | TravelerInfoWhereInput[]
    id?: IntFilter<"TravelerInfo"> | number
    firstName?: StringNullableFilter<"TravelerInfo"> | string | null
    lastName?: StringNullableFilter<"TravelerInfo"> | string | null
    userId?: IntFilter<"TravelerInfo"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TravelerInfoOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: TravelerInfoOrderByRelevanceInput
  }

  export type TravelerInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TravelerInfoWhereInput | TravelerInfoWhereInput[]
    OR?: TravelerInfoWhereInput[]
    NOT?: TravelerInfoWhereInput | TravelerInfoWhereInput[]
    firstName?: StringNullableFilter<"TravelerInfo"> | string | null
    lastName?: StringNullableFilter<"TravelerInfo"> | string | null
    userId?: IntFilter<"TravelerInfo"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TravelerInfoOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: TravelerInfoCountOrderByAggregateInput
    _avg?: TravelerInfoAvgOrderByAggregateInput
    _max?: TravelerInfoMaxOrderByAggregateInput
    _min?: TravelerInfoMinOrderByAggregateInput
    _sum?: TravelerInfoSumOrderByAggregateInput
  }

  export type TravelerInfoScalarWhereWithAggregatesInput = {
    AND?: TravelerInfoScalarWhereWithAggregatesInput | TravelerInfoScalarWhereWithAggregatesInput[]
    OR?: TravelerInfoScalarWhereWithAggregatesInput[]
    NOT?: TravelerInfoScalarWhereWithAggregatesInput | TravelerInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TravelerInfo"> | number
    firstName?: StringNullableWithAggregatesFilter<"TravelerInfo"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"TravelerInfo"> | string | null
    userId?: IntWithAggregatesFilter<"TravelerInfo"> | number
  }

  export type HotelWhereInput = {
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    id?: IntFilter<"Hotel"> | number
    name?: StringFilter<"Hotel"> | string
    hotelImgId?: IntFilter<"Hotel"> | number
    hotelDetails?: StringFilter<"Hotel"> | string
    address?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    country?: StringFilter<"Hotel"> | string
    surroundings?: StringFilter<"Hotel"> | string
    amenities?: StringFilter<"Hotel"> | string
    policies?: StringFilter<"Hotel"> | string
    reviewCount?: IntNullableFilter<"Hotel"> | number | null
    averageRating?: FloatNullableFilter<"Hotel"> | number | null
    latitude?: FloatFilter<"Hotel"> | number
    longitude?: FloatFilter<"Hotel"> | number
    hotelImg?: XOR<HotelImgScalarRelationFilter, HotelImgWhereInput>
    rooms?: RoomListRelationFilter
    likes?: LikeListRelationFilter
    reviews?: ReviewsListRelationFilter
    discounts?: DiscountListRelationFilter
  }

  export type HotelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    hotelImgId?: SortOrder
    hotelDetails?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    surroundings?: SortOrder
    amenities?: SortOrder
    policies?: SortOrder
    reviewCount?: SortOrderInput | SortOrder
    averageRating?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hotelImg?: HotelImgOrderByWithRelationInput
    rooms?: RoomOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    discounts?: DiscountOrderByRelationAggregateInput
    _relevance?: HotelOrderByRelevanceInput
  }

  export type HotelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    name?: StringFilter<"Hotel"> | string
    hotelImgId?: IntFilter<"Hotel"> | number
    hotelDetails?: StringFilter<"Hotel"> | string
    address?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    country?: StringFilter<"Hotel"> | string
    surroundings?: StringFilter<"Hotel"> | string
    amenities?: StringFilter<"Hotel"> | string
    policies?: StringFilter<"Hotel"> | string
    reviewCount?: IntNullableFilter<"Hotel"> | number | null
    averageRating?: FloatNullableFilter<"Hotel"> | number | null
    latitude?: FloatFilter<"Hotel"> | number
    longitude?: FloatFilter<"Hotel"> | number
    hotelImg?: XOR<HotelImgScalarRelationFilter, HotelImgWhereInput>
    rooms?: RoomListRelationFilter
    likes?: LikeListRelationFilter
    reviews?: ReviewsListRelationFilter
    discounts?: DiscountListRelationFilter
  }, "id">

  export type HotelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    hotelImgId?: SortOrder
    hotelDetails?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    surroundings?: SortOrder
    amenities?: SortOrder
    policies?: SortOrder
    reviewCount?: SortOrderInput | SortOrder
    averageRating?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: HotelCountOrderByAggregateInput
    _avg?: HotelAvgOrderByAggregateInput
    _max?: HotelMaxOrderByAggregateInput
    _min?: HotelMinOrderByAggregateInput
    _sum?: HotelSumOrderByAggregateInput
  }

  export type HotelScalarWhereWithAggregatesInput = {
    AND?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    OR?: HotelScalarWhereWithAggregatesInput[]
    NOT?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hotel"> | number
    name?: StringWithAggregatesFilter<"Hotel"> | string
    hotelImgId?: IntWithAggregatesFilter<"Hotel"> | number
    hotelDetails?: StringWithAggregatesFilter<"Hotel"> | string
    address?: StringWithAggregatesFilter<"Hotel"> | string
    city?: StringWithAggregatesFilter<"Hotel"> | string
    country?: StringWithAggregatesFilter<"Hotel"> | string
    surroundings?: StringWithAggregatesFilter<"Hotel"> | string
    amenities?: StringWithAggregatesFilter<"Hotel"> | string
    policies?: StringWithAggregatesFilter<"Hotel"> | string
    reviewCount?: IntNullableWithAggregatesFilter<"Hotel"> | number | null
    averageRating?: FloatNullableWithAggregatesFilter<"Hotel"> | number | null
    latitude?: FloatWithAggregatesFilter<"Hotel"> | number
    longitude?: FloatWithAggregatesFilter<"Hotel"> | number
  }

  export type HotelImgWhereInput = {
    AND?: HotelImgWhereInput | HotelImgWhereInput[]
    OR?: HotelImgWhereInput[]
    NOT?: HotelImgWhereInput | HotelImgWhereInput[]
    id?: IntFilter<"HotelImg"> | number
    img1?: StringNullableFilter<"HotelImg"> | string | null
    img2?: StringNullableFilter<"HotelImg"> | string | null
    img3?: StringNullableFilter<"HotelImg"> | string | null
    img4?: StringNullableFilter<"HotelImg"> | string | null
    hotel?: HotelListRelationFilter
  }

  export type HotelImgOrderByWithRelationInput = {
    id?: SortOrder
    img1?: SortOrderInput | SortOrder
    img2?: SortOrderInput | SortOrder
    img3?: SortOrderInput | SortOrder
    img4?: SortOrderInput | SortOrder
    hotel?: HotelOrderByRelationAggregateInput
    _relevance?: HotelImgOrderByRelevanceInput
  }

  export type HotelImgWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HotelImgWhereInput | HotelImgWhereInput[]
    OR?: HotelImgWhereInput[]
    NOT?: HotelImgWhereInput | HotelImgWhereInput[]
    img1?: StringNullableFilter<"HotelImg"> | string | null
    img2?: StringNullableFilter<"HotelImg"> | string | null
    img3?: StringNullableFilter<"HotelImg"> | string | null
    img4?: StringNullableFilter<"HotelImg"> | string | null
    hotel?: HotelListRelationFilter
  }, "id">

  export type HotelImgOrderByWithAggregationInput = {
    id?: SortOrder
    img1?: SortOrderInput | SortOrder
    img2?: SortOrderInput | SortOrder
    img3?: SortOrderInput | SortOrder
    img4?: SortOrderInput | SortOrder
    _count?: HotelImgCountOrderByAggregateInput
    _avg?: HotelImgAvgOrderByAggregateInput
    _max?: HotelImgMaxOrderByAggregateInput
    _min?: HotelImgMinOrderByAggregateInput
    _sum?: HotelImgSumOrderByAggregateInput
  }

  export type HotelImgScalarWhereWithAggregatesInput = {
    AND?: HotelImgScalarWhereWithAggregatesInput | HotelImgScalarWhereWithAggregatesInput[]
    OR?: HotelImgScalarWhereWithAggregatesInput[]
    NOT?: HotelImgScalarWhereWithAggregatesInput | HotelImgScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HotelImg"> | number
    img1?: StringNullableWithAggregatesFilter<"HotelImg"> | string | null
    img2?: StringNullableWithAggregatesFilter<"HotelImg"> | string | null
    img3?: StringNullableWithAggregatesFilter<"HotelImg"> | string | null
    img4?: StringNullableWithAggregatesFilter<"HotelImg"> | string | null
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    roomType?: StringFilter<"Room"> | string
    roomImg?: StringFilter<"Room"> | string
    nightlyRate?: IntFilter<"Room"> | number
    roomAmount?: IntFilter<"Room"> | number
    maxAdults?: IntFilter<"Room"> | number
    maxChildren?: IntFilter<"Room"> | number
    bedSetup?: StringNullableFilter<"Room"> | string | null
    roomSize?: IntNullableFilter<"Room"> | number | null
    isSmoking?: BoolFilter<"Room"> | boolean
    hotelId?: IntFilter<"Room"> | number
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    bookings?: BookingListRelationFilter
    reviews?: ReviewsListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    roomType?: SortOrder
    roomImg?: SortOrder
    nightlyRate?: SortOrder
    roomAmount?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedSetup?: SortOrderInput | SortOrder
    roomSize?: SortOrderInput | SortOrder
    isSmoking?: SortOrder
    hotelId?: SortOrder
    hotel?: HotelOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    _relevance?: RoomOrderByRelevanceInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    roomType?: StringFilter<"Room"> | string
    roomImg?: StringFilter<"Room"> | string
    nightlyRate?: IntFilter<"Room"> | number
    roomAmount?: IntFilter<"Room"> | number
    maxAdults?: IntFilter<"Room"> | number
    maxChildren?: IntFilter<"Room"> | number
    bedSetup?: StringNullableFilter<"Room"> | string | null
    roomSize?: IntNullableFilter<"Room"> | number | null
    isSmoking?: BoolFilter<"Room"> | boolean
    hotelId?: IntFilter<"Room"> | number
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    bookings?: BookingListRelationFilter
    reviews?: ReviewsListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    roomType?: SortOrder
    roomImg?: SortOrder
    nightlyRate?: SortOrder
    roomAmount?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedSetup?: SortOrderInput | SortOrder
    roomSize?: SortOrderInput | SortOrder
    isSmoking?: SortOrder
    hotelId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    roomType?: StringWithAggregatesFilter<"Room"> | string
    roomImg?: StringWithAggregatesFilter<"Room"> | string
    nightlyRate?: IntWithAggregatesFilter<"Room"> | number
    roomAmount?: IntWithAggregatesFilter<"Room"> | number
    maxAdults?: IntWithAggregatesFilter<"Room"> | number
    maxChildren?: IntWithAggregatesFilter<"Room"> | number
    bedSetup?: StringNullableWithAggregatesFilter<"Room"> | string | null
    roomSize?: IntNullableWithAggregatesFilter<"Room"> | number | null
    isSmoking?: BoolWithAggregatesFilter<"Room"> | boolean
    hotelId?: IntWithAggregatesFilter<"Room"> | number
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    userId?: IntFilter<"Like"> | number
    hotelId?: IntFilter<"Like"> | number
    createdAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    userId?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    userId_hotelId?: LikeUserIdHotelIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    userId?: IntFilter<"Like"> | number
    hotelId?: IntFilter<"Like"> | number
    createdAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }, "userId_hotelId">

  export type LikeOrderByWithAggregationInput = {
    userId?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _avg?: LikeAvgOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
    _sum?: LikeSumOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Like"> | number
    hotelId?: IntWithAggregatesFilter<"Like"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    roomId?: IntFilter<"Booking"> | number
    roomAmount?: IntFilter<"Booking"> | number
    numGuest?: IntFilter<"Booking"> | number
    checkInDate?: DateTimeFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeFilter<"Booking"> | Date | string
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    bookingStatus?: EnumbookingStatusFilter<"Booking"> | $Enums.bookingStatus
    originalPrice?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    discountId?: IntNullableFilter<"Booking"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    discount?: XOR<DiscountNullableScalarRelationFilter, DiscountWhereInput> | null
    payment?: PaymentListRelationFilter
    rewards?: RewardsListRelationFilter
    bookingGuests?: BookingGuestListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    roomAmount?: SortOrder
    numGuest?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    bookingDate?: SortOrder
    bookingStatus?: SortOrder
    originalPrice?: SortOrder
    discountAmount?: SortOrder
    taxesAndFees?: SortOrder
    finalPrice?: SortOrder
    discountId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    discount?: DiscountOrderByWithRelationInput
    payment?: PaymentOrderByRelationAggregateInput
    rewards?: RewardsOrderByRelationAggregateInput
    bookingGuests?: BookingGuestOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: IntFilter<"Booking"> | number
    roomId?: IntFilter<"Booking"> | number
    roomAmount?: IntFilter<"Booking"> | number
    numGuest?: IntFilter<"Booking"> | number
    checkInDate?: DateTimeFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeFilter<"Booking"> | Date | string
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    bookingStatus?: EnumbookingStatusFilter<"Booking"> | $Enums.bookingStatus
    originalPrice?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    discountId?: IntNullableFilter<"Booking"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    discount?: XOR<DiscountNullableScalarRelationFilter, DiscountWhereInput> | null
    payment?: PaymentListRelationFilter
    rewards?: RewardsListRelationFilter
    bookingGuests?: BookingGuestListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    roomAmount?: SortOrder
    numGuest?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    bookingDate?: SortOrder
    bookingStatus?: SortOrder
    originalPrice?: SortOrder
    discountAmount?: SortOrder
    taxesAndFees?: SortOrder
    finalPrice?: SortOrder
    discountId?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    userId?: IntWithAggregatesFilter<"Booking"> | number
    roomId?: IntWithAggregatesFilter<"Booking"> | number
    roomAmount?: IntWithAggregatesFilter<"Booking"> | number
    numGuest?: IntWithAggregatesFilter<"Booking"> | number
    checkInDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    bookingDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    bookingStatus?: EnumbookingStatusWithAggregatesFilter<"Booking"> | $Enums.bookingStatus
    originalPrice?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    discountId?: IntNullableWithAggregatesFilter<"Booking"> | number | null
  }

  export type BookingGuestWhereInput = {
    AND?: BookingGuestWhereInput | BookingGuestWhereInput[]
    OR?: BookingGuestWhereInput[]
    NOT?: BookingGuestWhereInput | BookingGuestWhereInput[]
    id?: IntFilter<"BookingGuest"> | number
    firstName?: StringFilter<"BookingGuest"> | string
    lastName?: StringFilter<"BookingGuest"> | string
    bookingId?: IntFilter<"BookingGuest"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type BookingGuestOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bookingId?: SortOrder
    booking?: BookingOrderByWithRelationInput
    _relevance?: BookingGuestOrderByRelevanceInput
  }

  export type BookingGuestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingGuestWhereInput | BookingGuestWhereInput[]
    OR?: BookingGuestWhereInput[]
    NOT?: BookingGuestWhereInput | BookingGuestWhereInput[]
    firstName?: StringFilter<"BookingGuest"> | string
    lastName?: StringFilter<"BookingGuest"> | string
    bookingId?: IntFilter<"BookingGuest"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type BookingGuestOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bookingId?: SortOrder
    _count?: BookingGuestCountOrderByAggregateInput
    _avg?: BookingGuestAvgOrderByAggregateInput
    _max?: BookingGuestMaxOrderByAggregateInput
    _min?: BookingGuestMinOrderByAggregateInput
    _sum?: BookingGuestSumOrderByAggregateInput
  }

  export type BookingGuestScalarWhereWithAggregatesInput = {
    AND?: BookingGuestScalarWhereWithAggregatesInput | BookingGuestScalarWhereWithAggregatesInput[]
    OR?: BookingGuestScalarWhereWithAggregatesInput[]
    NOT?: BookingGuestScalarWhereWithAggregatesInput | BookingGuestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookingGuest"> | number
    firstName?: StringWithAggregatesFilter<"BookingGuest"> | string
    lastName?: StringWithAggregatesFilter<"BookingGuest"> | string
    bookingId?: IntWithAggregatesFilter<"BookingGuest"> | number
  }

  export type DiscountWhereInput = {
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    id?: IntFilter<"Discount"> | number
    code?: StringFilter<"Discount"> | string
    description?: StringFilter<"Discount"> | string
    value?: FloatFilter<"Discount"> | number
    type?: EnumDiscountTypeFilter<"Discount"> | $Enums.DiscountType
    minSpend?: FloatNullableFilter<"Discount"> | number | null
    maxDiscount?: FloatNullableFilter<"Discount"> | number | null
    startDate?: DateTimeNullableFilter<"Discount"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Discount"> | Date | string | null
    usageLimit?: IntNullableFilter<"Discount"> | number | null
    usedCount?: IntFilter<"Discount"> | number
    isActive?: BoolFilter<"Discount"> | boolean
    createdAt?: DateTimeFilter<"Discount"> | Date | string
    updatedAt?: DateTimeFilter<"Discount"> | Date | string
    bookings?: BookingListRelationFilter
    hotels?: HotelListRelationFilter
  }

  export type DiscountOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    value?: SortOrder
    type?: SortOrder
    minSpend?: SortOrderInput | SortOrder
    maxDiscount?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    usageLimit?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    hotels?: HotelOrderByRelationAggregateInput
    _relevance?: DiscountOrderByRelevanceInput
  }

  export type DiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    code?: StringFilter<"Discount"> | string
    description?: StringFilter<"Discount"> | string
    value?: FloatFilter<"Discount"> | number
    type?: EnumDiscountTypeFilter<"Discount"> | $Enums.DiscountType
    minSpend?: FloatNullableFilter<"Discount"> | number | null
    maxDiscount?: FloatNullableFilter<"Discount"> | number | null
    startDate?: DateTimeNullableFilter<"Discount"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Discount"> | Date | string | null
    usageLimit?: IntNullableFilter<"Discount"> | number | null
    usedCount?: IntFilter<"Discount"> | number
    isActive?: BoolFilter<"Discount"> | boolean
    createdAt?: DateTimeFilter<"Discount"> | Date | string
    updatedAt?: DateTimeFilter<"Discount"> | Date | string
    bookings?: BookingListRelationFilter
    hotels?: HotelListRelationFilter
  }, "id">

  export type DiscountOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    value?: SortOrder
    type?: SortOrder
    minSpend?: SortOrderInput | SortOrder
    maxDiscount?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    usageLimit?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DiscountCountOrderByAggregateInput
    _avg?: DiscountAvgOrderByAggregateInput
    _max?: DiscountMaxOrderByAggregateInput
    _min?: DiscountMinOrderByAggregateInput
    _sum?: DiscountSumOrderByAggregateInput
  }

  export type DiscountScalarWhereWithAggregatesInput = {
    AND?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    OR?: DiscountScalarWhereWithAggregatesInput[]
    NOT?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Discount"> | number
    code?: StringWithAggregatesFilter<"Discount"> | string
    description?: StringWithAggregatesFilter<"Discount"> | string
    value?: FloatWithAggregatesFilter<"Discount"> | number
    type?: EnumDiscountTypeWithAggregatesFilter<"Discount"> | $Enums.DiscountType
    minSpend?: FloatNullableWithAggregatesFilter<"Discount"> | number | null
    maxDiscount?: FloatNullableWithAggregatesFilter<"Discount"> | number | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Discount"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Discount"> | Date | string | null
    usageLimit?: IntNullableWithAggregatesFilter<"Discount"> | number | null
    usedCount?: IntWithAggregatesFilter<"Discount"> | number
    isActive?: BoolWithAggregatesFilter<"Discount"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    bookingId?: IntFilter<"Payment"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    bankName?: StringNullableFilter<"Payment"> | string | null
    accountNo?: StringNullableFilter<"Payment"> | string | null
    accountName?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentRefNo?: StringFilter<"Payment"> | string
    paymentStatus?: EnumPaymenStatusFilter<"Payment"> | $Enums.PaymenStatus
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    paymentMethod?: SortOrder
    bankName?: SortOrderInput | SortOrder
    accountNo?: SortOrderInput | SortOrder
    accountName?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentRefNo?: SortOrder
    paymentStatus?: SortOrder
    booking?: BookingOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    bookingId?: IntFilter<"Payment"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    bankName?: StringNullableFilter<"Payment"> | string | null
    accountNo?: StringNullableFilter<"Payment"> | string | null
    accountName?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentRefNo?: StringFilter<"Payment"> | string
    paymentStatus?: EnumPaymenStatusFilter<"Payment"> | $Enums.PaymenStatus
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    paymentMethod?: SortOrder
    bankName?: SortOrderInput | SortOrder
    accountNo?: SortOrderInput | SortOrder
    accountName?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentRefNo?: SortOrder
    paymentStatus?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    bookingId?: IntWithAggregatesFilter<"Payment"> | number
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    bankName?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    accountNo?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    accountName?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentRefNo?: StringWithAggregatesFilter<"Payment"> | string
    paymentStatus?: EnumPaymenStatusWithAggregatesFilter<"Payment"> | $Enums.PaymenStatus
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    hotelId?: IntFilter<"Reviews"> | number
    roomId?: IntFilter<"Reviews"> | number
    reviewContent?: StringFilter<"Reviews"> | string
    reviewImg?: StringNullableFilter<"Reviews"> | string | null
    rating?: IntFilter<"Reviews"> | number
    stayedDate?: DateTimeFilter<"Reviews"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    roomId?: SortOrder
    reviewContent?: SortOrder
    reviewImg?: SortOrderInput | SortOrder
    rating?: SortOrder
    stayedDate?: SortOrder
    user?: UserOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    _relevance?: ReviewsOrderByRelevanceInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    userId?: IntFilter<"Reviews"> | number
    hotelId?: IntFilter<"Reviews"> | number
    roomId?: IntFilter<"Reviews"> | number
    reviewContent?: StringFilter<"Reviews"> | string
    reviewImg?: StringNullableFilter<"Reviews"> | string | null
    rating?: IntFilter<"Reviews"> | number
    stayedDate?: DateTimeFilter<"Reviews"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    roomId?: SortOrder
    reviewContent?: SortOrder
    reviewImg?: SortOrderInput | SortOrder
    rating?: SortOrder
    stayedDate?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reviews"> | number
    userId?: IntWithAggregatesFilter<"Reviews"> | number
    hotelId?: IntWithAggregatesFilter<"Reviews"> | number
    roomId?: IntWithAggregatesFilter<"Reviews"> | number
    reviewContent?: StringWithAggregatesFilter<"Reviews"> | string
    reviewImg?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    stayedDate?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type RewardsWhereInput = {
    AND?: RewardsWhereInput | RewardsWhereInput[]
    OR?: RewardsWhereInput[]
    NOT?: RewardsWhereInput | RewardsWhereInput[]
    id?: IntFilter<"Rewards"> | number
    rewardPoints?: IntFilter<"Rewards"> | number
    userId?: IntFilter<"Rewards"> | number
    bookingId?: IntFilter<"Rewards"> | number
    rewardStatus?: EnumRewardStatusFilter<"Rewards"> | $Enums.RewardStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type RewardsOrderByWithRelationInput = {
    id?: SortOrder
    rewardPoints?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    rewardStatus?: SortOrder
    user?: UserOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type RewardsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RewardsWhereInput | RewardsWhereInput[]
    OR?: RewardsWhereInput[]
    NOT?: RewardsWhereInput | RewardsWhereInput[]
    rewardPoints?: IntFilter<"Rewards"> | number
    userId?: IntFilter<"Rewards"> | number
    bookingId?: IntFilter<"Rewards"> | number
    rewardStatus?: EnumRewardStatusFilter<"Rewards"> | $Enums.RewardStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type RewardsOrderByWithAggregationInput = {
    id?: SortOrder
    rewardPoints?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    rewardStatus?: SortOrder
    _count?: RewardsCountOrderByAggregateInput
    _avg?: RewardsAvgOrderByAggregateInput
    _max?: RewardsMaxOrderByAggregateInput
    _min?: RewardsMinOrderByAggregateInput
    _sum?: RewardsSumOrderByAggregateInput
  }

  export type RewardsScalarWhereWithAggregatesInput = {
    AND?: RewardsScalarWhereWithAggregatesInput | RewardsScalarWhereWithAggregatesInput[]
    OR?: RewardsScalarWhereWithAggregatesInput[]
    NOT?: RewardsScalarWhereWithAggregatesInput | RewardsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rewards"> | number
    rewardPoints?: IntWithAggregatesFilter<"Rewards"> | number
    userId?: IntWithAggregatesFilter<"Rewards"> | number
    bookingId?: IntWithAggregatesFilter<"Rewards"> | number
    rewardStatus?: EnumRewardStatusWithAggregatesFilter<"Rewards"> | $Enums.RewardStatus
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    rewards?: RewardsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    travlers?: TravelerInfoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    travlers?: TravelerInfoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    rewards?: RewardsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    travlers?: TravelerInfoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    travlers?: TravelerInfoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TravelerInfoCreateInput = {
    firstName?: string | null
    lastName?: string | null
    user?: UserCreateNestedOneWithoutTravlersInput
  }

  export type TravelerInfoUncheckedCreateInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    userId: number
  }

  export type TravelerInfoUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutTravlersNestedInput
  }

  export type TravelerInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TravelerInfoCreateManyInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    userId: number
  }

  export type TravelerInfoUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TravelerInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type HotelCreateInput = {
    name: string
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    hotelImg: HotelImgCreateNestedOneWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
    likes?: LikeCreateNestedManyWithoutHotelInput
    reviews?: ReviewsCreateNestedManyWithoutHotelInput
    discounts?: DiscountCreateNestedManyWithoutHotelsInput
  }

  export type HotelUncheckedCreateInput = {
    id?: number
    name: string
    hotelImgId: number
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    likes?: LikeUncheckedCreateNestedManyWithoutHotelInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutHotelInput
    discounts?: DiscountUncheckedCreateNestedManyWithoutHotelsInput
  }

  export type HotelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    hotelImg?: HotelImgUpdateOneRequiredWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    likes?: LikeUpdateManyWithoutHotelNestedInput
    reviews?: ReviewsUpdateManyWithoutHotelNestedInput
    discounts?: DiscountUpdateManyWithoutHotelsNestedInput
  }

  export type HotelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hotelImgId?: IntFieldUpdateOperationsInput | number
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    likes?: LikeUncheckedUpdateManyWithoutHotelNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutHotelNestedInput
    discounts?: DiscountUncheckedUpdateManyWithoutHotelsNestedInput
  }

  export type HotelCreateManyInput = {
    id?: number
    name: string
    hotelImgId: number
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
  }

  export type HotelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type HotelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hotelImgId?: IntFieldUpdateOperationsInput | number
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type HotelImgCreateInput = {
    img1?: string | null
    img2?: string | null
    img3?: string | null
    img4?: string | null
    hotel?: HotelCreateNestedManyWithoutHotelImgInput
  }

  export type HotelImgUncheckedCreateInput = {
    id?: number
    img1?: string | null
    img2?: string | null
    img3?: string | null
    img4?: string | null
    hotel?: HotelUncheckedCreateNestedManyWithoutHotelImgInput
  }

  export type HotelImgUpdateInput = {
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    img4?: NullableStringFieldUpdateOperationsInput | string | null
    hotel?: HotelUpdateManyWithoutHotelImgNestedInput
  }

  export type HotelImgUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    img4?: NullableStringFieldUpdateOperationsInput | string | null
    hotel?: HotelUncheckedUpdateManyWithoutHotelImgNestedInput
  }

  export type HotelImgCreateManyInput = {
    id?: number
    img1?: string | null
    img2?: string | null
    img3?: string | null
    img4?: string | null
  }

  export type HotelImgUpdateManyMutationInput = {
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    img4?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HotelImgUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    img4?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomCreateInput = {
    roomType: string
    roomImg: string
    nightlyRate: number
    roomAmount?: number
    maxAdults?: number
    maxChildren?: number
    bedSetup?: string | null
    roomSize?: number | null
    isSmoking?: boolean
    hotel: HotelCreateNestedOneWithoutRoomsInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    reviews?: ReviewsCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    roomType: string
    roomImg: string
    nightlyRate: number
    roomAmount?: number
    maxAdults?: number
    maxChildren?: number
    bedSetup?: string | null
    roomSize?: number | null
    isSmoking?: boolean
    hotelId: number
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    roomType?: StringFieldUpdateOperationsInput | string
    roomImg?: StringFieldUpdateOperationsInput | string
    nightlyRate?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedSetup?: NullableStringFieldUpdateOperationsInput | string | null
    roomSize?: NullableIntFieldUpdateOperationsInput | number | null
    isSmoking?: BoolFieldUpdateOperationsInput | boolean
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    reviews?: ReviewsUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    roomImg?: StringFieldUpdateOperationsInput | string
    nightlyRate?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedSetup?: NullableStringFieldUpdateOperationsInput | string | null
    roomSize?: NullableIntFieldUpdateOperationsInput | number | null
    isSmoking?: BoolFieldUpdateOperationsInput | boolean
    hotelId?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    roomType: string
    roomImg: string
    nightlyRate: number
    roomAmount?: number
    maxAdults?: number
    maxChildren?: number
    bedSetup?: string | null
    roomSize?: number | null
    isSmoking?: boolean
    hotelId: number
  }

  export type RoomUpdateManyMutationInput = {
    roomType?: StringFieldUpdateOperationsInput | string
    roomImg?: StringFieldUpdateOperationsInput | string
    nightlyRate?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedSetup?: NullableStringFieldUpdateOperationsInput | string | null
    roomSize?: NullableIntFieldUpdateOperationsInput | number | null
    isSmoking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    roomImg?: StringFieldUpdateOperationsInput | string
    nightlyRate?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedSetup?: NullableStringFieldUpdateOperationsInput | string | null
    roomSize?: NullableIntFieldUpdateOperationsInput | number | null
    isSmoking?: BoolFieldUpdateOperationsInput | boolean
    hotelId?: IntFieldUpdateOperationsInput | number
  }

  export type LikeCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    hotel: HotelCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    userId: number
    hotelId: number
    createdAt?: Date | string
  }

  export type LikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    hotel?: HotelUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    hotelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    userId: number
    hotelId: number
    createdAt?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    hotelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    discount?: DiscountCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedManyWithoutBookingInput
    rewards?: RewardsCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    userId: number
    roomId: number
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    discountId?: number | null
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    rewards?: RewardsUncheckedCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    discount?: DiscountUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateManyWithoutBookingNestedInput
    rewards?: RewardsUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountId?: NullableIntFieldUpdateOperationsInput | number | null
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    rewards?: RewardsUncheckedUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    userId: number
    roomId: number
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    discountId?: number | null
  }

  export type BookingUpdateManyMutationInput = {
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingGuestCreateInput = {
    firstName: string
    lastName: string
    booking: BookingCreateNestedOneWithoutBookingGuestsInput
  }

  export type BookingGuestUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    bookingId: number
  }

  export type BookingGuestUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutBookingGuestsNestedInput
  }

  export type BookingGuestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingGuestCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    bookingId: number
  }

  export type BookingGuestUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type BookingGuestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type DiscountCreateInput = {
    code: string
    description: string
    value: number
    type?: $Enums.DiscountType
    minSpend?: number | null
    maxDiscount?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutDiscountInput
    hotels?: HotelCreateNestedManyWithoutDiscountsInput
  }

  export type DiscountUncheckedCreateInput = {
    id?: number
    code: string
    description: string
    value: number
    type?: $Enums.DiscountType
    minSpend?: number | null
    maxDiscount?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutDiscountInput
    hotels?: HotelUncheckedCreateNestedManyWithoutDiscountsInput
  }

  export type DiscountUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    minSpend?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutDiscountNestedInput
    hotels?: HotelUpdateManyWithoutDiscountsNestedInput
  }

  export type DiscountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    minSpend?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutDiscountNestedInput
    hotels?: HotelUncheckedUpdateManyWithoutDiscountsNestedInput
  }

  export type DiscountCreateManyInput = {
    id?: number
    code: string
    description: string
    value: number
    type?: $Enums.DiscountType
    minSpend?: number | null
    maxDiscount?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    minSpend?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    minSpend?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    paymentMethod: $Enums.PaymentMethod
    bankName?: string | null
    accountNo?: string | null
    accountName: string
    amount: number
    paymentDate: Date | string
    paymentRefNo: string
    paymentStatus: $Enums.PaymenStatus
    booking: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    bookingId: number
    paymentMethod: $Enums.PaymentMethod
    bankName?: string | null
    accountNo?: string | null
    accountName: string
    amount: number
    paymentDate: Date | string
    paymentRefNo: string
    paymentStatus: $Enums.PaymenStatus
  }

  export type PaymentUpdateInput = {
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRefNo?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymenStatusFieldUpdateOperationsInput | $Enums.PaymenStatus
    booking?: BookingUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRefNo?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymenStatusFieldUpdateOperationsInput | $Enums.PaymenStatus
  }

  export type PaymentCreateManyInput = {
    id?: number
    bookingId: number
    paymentMethod: $Enums.PaymentMethod
    bankName?: string | null
    accountNo?: string | null
    accountName: string
    amount: number
    paymentDate: Date | string
    paymentRefNo: string
    paymentStatus: $Enums.PaymenStatus
  }

  export type PaymentUpdateManyMutationInput = {
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRefNo?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymenStatusFieldUpdateOperationsInput | $Enums.PaymenStatus
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRefNo?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymenStatusFieldUpdateOperationsInput | $Enums.PaymenStatus
  }

  export type ReviewsCreateInput = {
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    hotel: HotelCreateNestedOneWithoutReviewsInput
    room: RoomCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    userId: number
    hotelId: number
    roomId: number
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
  }

  export type ReviewsUpdateInput = {
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    hotel?: HotelUpdateOneRequiredWithoutReviewsNestedInput
    room?: RoomUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hotelId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateManyInput = {
    id?: number
    userId: number
    hotelId: number
    roomId: number
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
  }

  export type ReviewsUpdateManyMutationInput = {
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hotelId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardsCreateInput = {
    rewardPoints: number
    rewardStatus?: $Enums.RewardStatus
    user: UserCreateNestedOneWithoutRewardsInput
    booking: BookingCreateNestedOneWithoutRewardsInput
  }

  export type RewardsUncheckedCreateInput = {
    id?: number
    rewardPoints: number
    userId: number
    bookingId: number
    rewardStatus?: $Enums.RewardStatus
  }

  export type RewardsUpdateInput = {
    rewardPoints?: IntFieldUpdateOperationsInput | number
    rewardStatus?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    user?: UserUpdateOneRequiredWithoutRewardsNestedInput
    booking?: BookingUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type RewardsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    rewardStatus?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
  }

  export type RewardsCreateManyInput = {
    id?: number
    rewardPoints: number
    userId: number
    bookingId: number
    rewardStatus?: $Enums.RewardStatus
  }

  export type RewardsUpdateManyMutationInput = {
    rewardPoints?: IntFieldUpdateOperationsInput | number
    rewardStatus?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
  }

  export type RewardsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    rewardStatus?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type RewardsListRelationFilter = {
    every?: RewardsWhereInput
    some?: RewardsWhereInput
    none?: RewardsWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type TravelerInfoListRelationFilter = {
    every?: TravelerInfoWhereInput
    some?: TravelerInfoWhereInput
    none?: TravelerInfoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelerInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profileImg?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profileImg?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profileImg?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TravelerInfoOrderByRelevanceInput = {
    fields: TravelerInfoOrderByRelevanceFieldEnum | TravelerInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TravelerInfoCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
  }

  export type TravelerInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TravelerInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
  }

  export type TravelerInfoMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
  }

  export type TravelerInfoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type HotelImgScalarRelationFilter = {
    is?: HotelImgWhereInput
    isNot?: HotelImgWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type DiscountListRelationFilter = {
    every?: DiscountWhereInput
    some?: DiscountWhereInput
    none?: DiscountWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelOrderByRelevanceInput = {
    fields: HotelOrderByRelevanceFieldEnum | HotelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HotelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hotelImgId?: SortOrder
    hotelDetails?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    surroundings?: SortOrder
    amenities?: SortOrder
    policies?: SortOrder
    reviewCount?: SortOrder
    averageRating?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HotelAvgOrderByAggregateInput = {
    id?: SortOrder
    hotelImgId?: SortOrder
    reviewCount?: SortOrder
    averageRating?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HotelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hotelImgId?: SortOrder
    hotelDetails?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    surroundings?: SortOrder
    amenities?: SortOrder
    policies?: SortOrder
    reviewCount?: SortOrder
    averageRating?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HotelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hotelImgId?: SortOrder
    hotelDetails?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    surroundings?: SortOrder
    amenities?: SortOrder
    policies?: SortOrder
    reviewCount?: SortOrder
    averageRating?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HotelSumOrderByAggregateInput = {
    id?: SortOrder
    hotelImgId?: SortOrder
    reviewCount?: SortOrder
    averageRating?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type HotelListRelationFilter = {
    every?: HotelWhereInput
    some?: HotelWhereInput
    none?: HotelWhereInput
  }

  export type HotelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelImgOrderByRelevanceInput = {
    fields: HotelImgOrderByRelevanceFieldEnum | HotelImgOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HotelImgCountOrderByAggregateInput = {
    id?: SortOrder
    img1?: SortOrder
    img2?: SortOrder
    img3?: SortOrder
    img4?: SortOrder
  }

  export type HotelImgAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HotelImgMaxOrderByAggregateInput = {
    id?: SortOrder
    img1?: SortOrder
    img2?: SortOrder
    img3?: SortOrder
    img4?: SortOrder
  }

  export type HotelImgMinOrderByAggregateInput = {
    id?: SortOrder
    img1?: SortOrder
    img2?: SortOrder
    img3?: SortOrder
    img4?: SortOrder
  }

  export type HotelImgSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HotelScalarRelationFilter = {
    is?: HotelWhereInput
    isNot?: HotelWhereInput
  }

  export type RoomOrderByRelevanceInput = {
    fields: RoomOrderByRelevanceFieldEnum | RoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    roomImg?: SortOrder
    nightlyRate?: SortOrder
    roomAmount?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedSetup?: SortOrder
    roomSize?: SortOrder
    isSmoking?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    nightlyRate?: SortOrder
    roomAmount?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    roomSize?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    roomImg?: SortOrder
    nightlyRate?: SortOrder
    roomAmount?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedSetup?: SortOrder
    roomSize?: SortOrder
    isSmoking?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    roomImg?: SortOrder
    nightlyRate?: SortOrder
    roomAmount?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedSetup?: SortOrder
    roomSize?: SortOrder
    isSmoking?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    nightlyRate?: SortOrder
    roomAmount?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    roomSize?: SortOrder
    hotelId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LikeUserIdHotelIdCompoundUniqueInput = {
    userId: number
    hotelId: number
  }

  export type LikeCountOrderByAggregateInput = {
    userId?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeAvgOrderByAggregateInput = {
    userId?: SortOrder
    hotelId?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    userId?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    userId?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeSumOrderByAggregateInput = {
    userId?: SortOrder
    hotelId?: SortOrder
  }

  export type EnumbookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.bookingStatus | EnumbookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.bookingStatus[]
    notIn?: $Enums.bookingStatus[]
    not?: NestedEnumbookingStatusFilter<$PrismaModel> | $Enums.bookingStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type DiscountNullableScalarRelationFilter = {
    is?: DiscountWhereInput | null
    isNot?: DiscountWhereInput | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type BookingGuestListRelationFilter = {
    every?: BookingGuestWhereInput
    some?: BookingGuestWhereInput
    none?: BookingGuestWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingGuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    roomAmount?: SortOrder
    numGuest?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    bookingDate?: SortOrder
    bookingStatus?: SortOrder
    originalPrice?: SortOrder
    discountAmount?: SortOrder
    taxesAndFees?: SortOrder
    finalPrice?: SortOrder
    discountId?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    roomAmount?: SortOrder
    numGuest?: SortOrder
    originalPrice?: SortOrder
    discountAmount?: SortOrder
    taxesAndFees?: SortOrder
    finalPrice?: SortOrder
    discountId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    roomAmount?: SortOrder
    numGuest?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    bookingDate?: SortOrder
    bookingStatus?: SortOrder
    originalPrice?: SortOrder
    discountAmount?: SortOrder
    taxesAndFees?: SortOrder
    finalPrice?: SortOrder
    discountId?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    roomAmount?: SortOrder
    numGuest?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    bookingDate?: SortOrder
    bookingStatus?: SortOrder
    originalPrice?: SortOrder
    discountAmount?: SortOrder
    taxesAndFees?: SortOrder
    finalPrice?: SortOrder
    discountId?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    roomAmount?: SortOrder
    numGuest?: SortOrder
    originalPrice?: SortOrder
    discountAmount?: SortOrder
    taxesAndFees?: SortOrder
    finalPrice?: SortOrder
    discountId?: SortOrder
  }

  export type EnumbookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bookingStatus | EnumbookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.bookingStatus[]
    notIn?: $Enums.bookingStatus[]
    not?: NestedEnumbookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.bookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbookingStatusFilter<$PrismaModel>
    _max?: NestedEnumbookingStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type BookingGuestOrderByRelevanceInput = {
    fields: BookingGuestOrderByRelevanceFieldEnum | BookingGuestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingGuestCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bookingId?: SortOrder
  }

  export type BookingGuestAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
  }

  export type BookingGuestMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bookingId?: SortOrder
  }

  export type BookingGuestMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bookingId?: SortOrder
  }

  export type BookingGuestSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
  }

  export type EnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[]
    notIn?: $Enums.DiscountType[]
    not?: NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DiscountOrderByRelevanceInput = {
    fields: DiscountOrderByRelevanceFieldEnum | DiscountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DiscountCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    value?: SortOrder
    type?: SortOrder
    minSpend?: SortOrder
    maxDiscount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usageLimit?: SortOrder
    usedCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    minSpend?: SortOrder
    maxDiscount?: SortOrder
    usageLimit?: SortOrder
    usedCount?: SortOrder
  }

  export type DiscountMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    value?: SortOrder
    type?: SortOrder
    minSpend?: SortOrder
    maxDiscount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usageLimit?: SortOrder
    usedCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    value?: SortOrder
    type?: SortOrder
    minSpend?: SortOrder
    maxDiscount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usageLimit?: SortOrder
    usedCount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    minSpend?: SortOrder
    maxDiscount?: SortOrder
    usageLimit?: SortOrder
    usedCount?: SortOrder
  }

  export type EnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[]
    notIn?: $Enums.DiscountType[]
    not?: NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymenStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymenStatus | EnumPaymenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymenStatus[]
    notIn?: $Enums.PaymenStatus[]
    not?: NestedEnumPaymenStatusFilter<$PrismaModel> | $Enums.PaymenStatus
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    paymentMethod?: SortOrder
    bankName?: SortOrder
    accountNo?: SortOrder
    accountName?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentRefNo?: SortOrder
    paymentStatus?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    paymentMethod?: SortOrder
    bankName?: SortOrder
    accountNo?: SortOrder
    accountName?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentRefNo?: SortOrder
    paymentStatus?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    paymentMethod?: SortOrder
    bankName?: SortOrder
    accountNo?: SortOrder
    accountName?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentRefNo?: SortOrder
    paymentStatus?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymenStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymenStatus | EnumPaymenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymenStatus[]
    notIn?: $Enums.PaymenStatus[]
    not?: NestedEnumPaymenStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymenStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymenStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymenStatusFilter<$PrismaModel>
  }

  export type ReviewsOrderByRelevanceInput = {
    fields: ReviewsOrderByRelevanceFieldEnum | ReviewsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    roomId?: SortOrder
    reviewContent?: SortOrder
    reviewImg?: SortOrder
    rating?: SortOrder
    stayedDate?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    roomId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    roomId?: SortOrder
    reviewContent?: SortOrder
    reviewImg?: SortOrder
    rating?: SortOrder
    stayedDate?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    roomId?: SortOrder
    reviewContent?: SortOrder
    reviewImg?: SortOrder
    rating?: SortOrder
    stayedDate?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    roomId?: SortOrder
    rating?: SortOrder
  }

  export type EnumRewardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[]
    notIn?: $Enums.RewardStatus[]
    not?: NestedEnumRewardStatusFilter<$PrismaModel> | $Enums.RewardStatus
  }

  export type RewardsCountOrderByAggregateInput = {
    id?: SortOrder
    rewardPoints?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    rewardStatus?: SortOrder
  }

  export type RewardsAvgOrderByAggregateInput = {
    id?: SortOrder
    rewardPoints?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
  }

  export type RewardsMaxOrderByAggregateInput = {
    id?: SortOrder
    rewardPoints?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    rewardStatus?: SortOrder
  }

  export type RewardsMinOrderByAggregateInput = {
    id?: SortOrder
    rewardPoints?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    rewardStatus?: SortOrder
  }

  export type RewardsSumOrderByAggregateInput = {
    id?: SortOrder
    rewardPoints?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
  }

  export type EnumRewardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[]
    notIn?: $Enums.RewardStatus[]
    not?: NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel> | $Enums.RewardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardStatusFilter<$PrismaModel>
    _max?: NestedEnumRewardStatusFilter<$PrismaModel>
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type RewardsCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardsCreateWithoutUserInput, RewardsUncheckedCreateWithoutUserInput> | RewardsCreateWithoutUserInput[] | RewardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutUserInput | RewardsCreateOrConnectWithoutUserInput[]
    createMany?: RewardsCreateManyUserInputEnvelope
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type TravelerInfoCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelerInfoCreateWithoutUserInput, TravelerInfoUncheckedCreateWithoutUserInput> | TravelerInfoCreateWithoutUserInput[] | TravelerInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelerInfoCreateOrConnectWithoutUserInput | TravelerInfoCreateOrConnectWithoutUserInput[]
    createMany?: TravelerInfoCreateManyUserInputEnvelope
    connect?: TravelerInfoWhereUniqueInput | TravelerInfoWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type RewardsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardsCreateWithoutUserInput, RewardsUncheckedCreateWithoutUserInput> | RewardsCreateWithoutUserInput[] | RewardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutUserInput | RewardsCreateOrConnectWithoutUserInput[]
    createMany?: RewardsCreateManyUserInputEnvelope
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type TravelerInfoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelerInfoCreateWithoutUserInput, TravelerInfoUncheckedCreateWithoutUserInput> | TravelerInfoCreateWithoutUserInput[] | TravelerInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelerInfoCreateOrConnectWithoutUserInput | TravelerInfoCreateOrConnectWithoutUserInput[]
    createMany?: TravelerInfoCreateManyUserInputEnvelope
    connect?: TravelerInfoWhereUniqueInput | TravelerInfoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type RewardsUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardsCreateWithoutUserInput, RewardsUncheckedCreateWithoutUserInput> | RewardsCreateWithoutUserInput[] | RewardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutUserInput | RewardsCreateOrConnectWithoutUserInput[]
    upsert?: RewardsUpsertWithWhereUniqueWithoutUserInput | RewardsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardsCreateManyUserInputEnvelope
    set?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    disconnect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    delete?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    update?: RewardsUpdateWithWhereUniqueWithoutUserInput | RewardsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardsUpdateManyWithWhereWithoutUserInput | RewardsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardsScalarWhereInput | RewardsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type TravelerInfoUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelerInfoCreateWithoutUserInput, TravelerInfoUncheckedCreateWithoutUserInput> | TravelerInfoCreateWithoutUserInput[] | TravelerInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelerInfoCreateOrConnectWithoutUserInput | TravelerInfoCreateOrConnectWithoutUserInput[]
    upsert?: TravelerInfoUpsertWithWhereUniqueWithoutUserInput | TravelerInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelerInfoCreateManyUserInputEnvelope
    set?: TravelerInfoWhereUniqueInput | TravelerInfoWhereUniqueInput[]
    disconnect?: TravelerInfoWhereUniqueInput | TravelerInfoWhereUniqueInput[]
    delete?: TravelerInfoWhereUniqueInput | TravelerInfoWhereUniqueInput[]
    connect?: TravelerInfoWhereUniqueInput | TravelerInfoWhereUniqueInput[]
    update?: TravelerInfoUpdateWithWhereUniqueWithoutUserInput | TravelerInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelerInfoUpdateManyWithWhereWithoutUserInput | TravelerInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelerInfoScalarWhereInput | TravelerInfoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type RewardsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardsCreateWithoutUserInput, RewardsUncheckedCreateWithoutUserInput> | RewardsCreateWithoutUserInput[] | RewardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutUserInput | RewardsCreateOrConnectWithoutUserInput[]
    upsert?: RewardsUpsertWithWhereUniqueWithoutUserInput | RewardsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardsCreateManyUserInputEnvelope
    set?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    disconnect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    delete?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    update?: RewardsUpdateWithWhereUniqueWithoutUserInput | RewardsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardsUpdateManyWithWhereWithoutUserInput | RewardsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardsScalarWhereInput | RewardsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type TravelerInfoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelerInfoCreateWithoutUserInput, TravelerInfoUncheckedCreateWithoutUserInput> | TravelerInfoCreateWithoutUserInput[] | TravelerInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelerInfoCreateOrConnectWithoutUserInput | TravelerInfoCreateOrConnectWithoutUserInput[]
    upsert?: TravelerInfoUpsertWithWhereUniqueWithoutUserInput | TravelerInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelerInfoCreateManyUserInputEnvelope
    set?: TravelerInfoWhereUniqueInput | TravelerInfoWhereUniqueInput[]
    disconnect?: TravelerInfoWhereUniqueInput | TravelerInfoWhereUniqueInput[]
    delete?: TravelerInfoWhereUniqueInput | TravelerInfoWhereUniqueInput[]
    connect?: TravelerInfoWhereUniqueInput | TravelerInfoWhereUniqueInput[]
    update?: TravelerInfoUpdateWithWhereUniqueWithoutUserInput | TravelerInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelerInfoUpdateManyWithWhereWithoutUserInput | TravelerInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelerInfoScalarWhereInput | TravelerInfoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTravlersInput = {
    create?: XOR<UserCreateWithoutTravlersInput, UserUncheckedCreateWithoutTravlersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravlersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutTravlersNestedInput = {
    create?: XOR<UserCreateWithoutTravlersInput, UserUncheckedCreateWithoutTravlersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravlersInput
    upsert?: UserUpsertWithoutTravlersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTravlersInput, UserUpdateWithoutTravlersInput>, UserUncheckedUpdateWithoutTravlersInput>
  }

  export type HotelImgCreateNestedOneWithoutHotelInput = {
    create?: XOR<HotelImgCreateWithoutHotelInput, HotelImgUncheckedCreateWithoutHotelInput>
    connectOrCreate?: HotelImgCreateOrConnectWithoutHotelInput
    connect?: HotelImgWhereUniqueInput
  }

  export type RoomCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutHotelInput = {
    create?: XOR<LikeCreateWithoutHotelInput, LikeUncheckedCreateWithoutHotelInput> | LikeCreateWithoutHotelInput[] | LikeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutHotelInput | LikeCreateOrConnectWithoutHotelInput[]
    createMany?: LikeCreateManyHotelInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutHotelInput = {
    create?: XOR<ReviewsCreateWithoutHotelInput, ReviewsUncheckedCreateWithoutHotelInput> | ReviewsCreateWithoutHotelInput[] | ReviewsUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutHotelInput | ReviewsCreateOrConnectWithoutHotelInput[]
    createMany?: ReviewsCreateManyHotelInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type DiscountCreateNestedManyWithoutHotelsInput = {
    create?: XOR<DiscountCreateWithoutHotelsInput, DiscountUncheckedCreateWithoutHotelsInput> | DiscountCreateWithoutHotelsInput[] | DiscountUncheckedCreateWithoutHotelsInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutHotelsInput | DiscountCreateOrConnectWithoutHotelsInput[]
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<LikeCreateWithoutHotelInput, LikeUncheckedCreateWithoutHotelInput> | LikeCreateWithoutHotelInput[] | LikeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutHotelInput | LikeCreateOrConnectWithoutHotelInput[]
    createMany?: LikeCreateManyHotelInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<ReviewsCreateWithoutHotelInput, ReviewsUncheckedCreateWithoutHotelInput> | ReviewsCreateWithoutHotelInput[] | ReviewsUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutHotelInput | ReviewsCreateOrConnectWithoutHotelInput[]
    createMany?: ReviewsCreateManyHotelInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type DiscountUncheckedCreateNestedManyWithoutHotelsInput = {
    create?: XOR<DiscountCreateWithoutHotelsInput, DiscountUncheckedCreateWithoutHotelsInput> | DiscountCreateWithoutHotelsInput[] | DiscountUncheckedCreateWithoutHotelsInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutHotelsInput | DiscountCreateOrConnectWithoutHotelsInput[]
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HotelImgUpdateOneRequiredWithoutHotelNestedInput = {
    create?: XOR<HotelImgCreateWithoutHotelInput, HotelImgUncheckedCreateWithoutHotelInput>
    connectOrCreate?: HotelImgCreateOrConnectWithoutHotelInput
    upsert?: HotelImgUpsertWithoutHotelInput
    connect?: HotelImgWhereUniqueInput
    update?: XOR<XOR<HotelImgUpdateToOneWithWhereWithoutHotelInput, HotelImgUpdateWithoutHotelInput>, HotelImgUncheckedUpdateWithoutHotelInput>
  }

  export type RoomUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHotelInput | RoomUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHotelInput | RoomUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHotelInput | RoomUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutHotelNestedInput = {
    create?: XOR<LikeCreateWithoutHotelInput, LikeUncheckedCreateWithoutHotelInput> | LikeCreateWithoutHotelInput[] | LikeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutHotelInput | LikeCreateOrConnectWithoutHotelInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutHotelInput | LikeUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: LikeCreateManyHotelInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutHotelInput | LikeUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutHotelInput | LikeUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutHotelNestedInput = {
    create?: XOR<ReviewsCreateWithoutHotelInput, ReviewsUncheckedCreateWithoutHotelInput> | ReviewsCreateWithoutHotelInput[] | ReviewsUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutHotelInput | ReviewsCreateOrConnectWithoutHotelInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutHotelInput | ReviewsUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: ReviewsCreateManyHotelInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutHotelInput | ReviewsUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutHotelInput | ReviewsUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type DiscountUpdateManyWithoutHotelsNestedInput = {
    create?: XOR<DiscountCreateWithoutHotelsInput, DiscountUncheckedCreateWithoutHotelsInput> | DiscountCreateWithoutHotelsInput[] | DiscountUncheckedCreateWithoutHotelsInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutHotelsInput | DiscountCreateOrConnectWithoutHotelsInput[]
    upsert?: DiscountUpsertWithWhereUniqueWithoutHotelsInput | DiscountUpsertWithWhereUniqueWithoutHotelsInput[]
    set?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    disconnect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    delete?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    update?: DiscountUpdateWithWhereUniqueWithoutHotelsInput | DiscountUpdateWithWhereUniqueWithoutHotelsInput[]
    updateMany?: DiscountUpdateManyWithWhereWithoutHotelsInput | DiscountUpdateManyWithWhereWithoutHotelsInput[]
    deleteMany?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHotelInput | RoomUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHotelInput | RoomUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHotelInput | RoomUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<LikeCreateWithoutHotelInput, LikeUncheckedCreateWithoutHotelInput> | LikeCreateWithoutHotelInput[] | LikeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutHotelInput | LikeCreateOrConnectWithoutHotelInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutHotelInput | LikeUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: LikeCreateManyHotelInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutHotelInput | LikeUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutHotelInput | LikeUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<ReviewsCreateWithoutHotelInput, ReviewsUncheckedCreateWithoutHotelInput> | ReviewsCreateWithoutHotelInput[] | ReviewsUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutHotelInput | ReviewsCreateOrConnectWithoutHotelInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutHotelInput | ReviewsUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: ReviewsCreateManyHotelInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutHotelInput | ReviewsUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutHotelInput | ReviewsUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type DiscountUncheckedUpdateManyWithoutHotelsNestedInput = {
    create?: XOR<DiscountCreateWithoutHotelsInput, DiscountUncheckedCreateWithoutHotelsInput> | DiscountCreateWithoutHotelsInput[] | DiscountUncheckedCreateWithoutHotelsInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutHotelsInput | DiscountCreateOrConnectWithoutHotelsInput[]
    upsert?: DiscountUpsertWithWhereUniqueWithoutHotelsInput | DiscountUpsertWithWhereUniqueWithoutHotelsInput[]
    set?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    disconnect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    delete?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    update?: DiscountUpdateWithWhereUniqueWithoutHotelsInput | DiscountUpdateWithWhereUniqueWithoutHotelsInput[]
    updateMany?: DiscountUpdateManyWithWhereWithoutHotelsInput | DiscountUpdateManyWithWhereWithoutHotelsInput[]
    deleteMany?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
  }

  export type HotelCreateNestedManyWithoutHotelImgInput = {
    create?: XOR<HotelCreateWithoutHotelImgInput, HotelUncheckedCreateWithoutHotelImgInput> | HotelCreateWithoutHotelImgInput[] | HotelUncheckedCreateWithoutHotelImgInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutHotelImgInput | HotelCreateOrConnectWithoutHotelImgInput[]
    createMany?: HotelCreateManyHotelImgInputEnvelope
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type HotelUncheckedCreateNestedManyWithoutHotelImgInput = {
    create?: XOR<HotelCreateWithoutHotelImgInput, HotelUncheckedCreateWithoutHotelImgInput> | HotelCreateWithoutHotelImgInput[] | HotelUncheckedCreateWithoutHotelImgInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutHotelImgInput | HotelCreateOrConnectWithoutHotelImgInput[]
    createMany?: HotelCreateManyHotelImgInputEnvelope
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type HotelUpdateManyWithoutHotelImgNestedInput = {
    create?: XOR<HotelCreateWithoutHotelImgInput, HotelUncheckedCreateWithoutHotelImgInput> | HotelCreateWithoutHotelImgInput[] | HotelUncheckedCreateWithoutHotelImgInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutHotelImgInput | HotelCreateOrConnectWithoutHotelImgInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutHotelImgInput | HotelUpsertWithWhereUniqueWithoutHotelImgInput[]
    createMany?: HotelCreateManyHotelImgInputEnvelope
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutHotelImgInput | HotelUpdateWithWhereUniqueWithoutHotelImgInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutHotelImgInput | HotelUpdateManyWithWhereWithoutHotelImgInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type HotelUncheckedUpdateManyWithoutHotelImgNestedInput = {
    create?: XOR<HotelCreateWithoutHotelImgInput, HotelUncheckedCreateWithoutHotelImgInput> | HotelCreateWithoutHotelImgInput[] | HotelUncheckedCreateWithoutHotelImgInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutHotelImgInput | HotelCreateOrConnectWithoutHotelImgInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutHotelImgInput | HotelUpsertWithWhereUniqueWithoutHotelImgInput[]
    createMany?: HotelCreateManyHotelImgInputEnvelope
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutHotelImgInput | HotelUpdateWithWhereUniqueWithoutHotelImgInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutHotelImgInput | HotelUpdateManyWithWhereWithoutHotelImgInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutRoomsInput = {
    create?: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomsInput
    connect?: HotelWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReviewsCreateWithoutRoomInput, ReviewsUncheckedCreateWithoutRoomInput> | ReviewsCreateWithoutRoomInput[] | ReviewsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutRoomInput | ReviewsCreateOrConnectWithoutRoomInput[]
    createMany?: ReviewsCreateManyRoomInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReviewsCreateWithoutRoomInput, ReviewsUncheckedCreateWithoutRoomInput> | ReviewsCreateWithoutRoomInput[] | ReviewsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutRoomInput | ReviewsCreateOrConnectWithoutRoomInput[]
    createMany?: ReviewsCreateManyRoomInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type HotelUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomsInput
    upsert?: HotelUpsertWithoutRoomsInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutRoomsInput, HotelUpdateWithoutRoomsInput>, HotelUncheckedUpdateWithoutRoomsInput>
  }

  export type BookingUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomInput | BookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomInput | BookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomInput | BookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReviewsCreateWithoutRoomInput, ReviewsUncheckedCreateWithoutRoomInput> | ReviewsCreateWithoutRoomInput[] | ReviewsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutRoomInput | ReviewsCreateOrConnectWithoutRoomInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutRoomInput | ReviewsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReviewsCreateManyRoomInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutRoomInput | ReviewsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutRoomInput | ReviewsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomInput | BookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomInput | BookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomInput | BookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReviewsCreateWithoutRoomInput, ReviewsUncheckedCreateWithoutRoomInput> | ReviewsCreateWithoutRoomInput[] | ReviewsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutRoomInput | ReviewsCreateOrConnectWithoutRoomInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutRoomInput | ReviewsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReviewsCreateManyRoomInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutRoomInput | ReviewsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutRoomInput | ReviewsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutLikesInput = {
    create?: XOR<HotelCreateWithoutLikesInput, HotelUncheckedCreateWithoutLikesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutLikesInput
    connect?: HotelWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type HotelUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<HotelCreateWithoutLikesInput, HotelUncheckedCreateWithoutLikesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutLikesInput
    upsert?: HotelUpsertWithoutLikesInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutLikesInput, HotelUpdateWithoutLikesInput>, HotelUncheckedUpdateWithoutLikesInput>
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutBookingsInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    connect?: RoomWhereUniqueInput
  }

  export type DiscountCreateNestedOneWithoutBookingsInput = {
    create?: XOR<DiscountCreateWithoutBookingsInput, DiscountUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutBookingsInput
    connect?: DiscountWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type RewardsCreateNestedManyWithoutBookingInput = {
    create?: XOR<RewardsCreateWithoutBookingInput, RewardsUncheckedCreateWithoutBookingInput> | RewardsCreateWithoutBookingInput[] | RewardsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutBookingInput | RewardsCreateOrConnectWithoutBookingInput[]
    createMany?: RewardsCreateManyBookingInputEnvelope
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
  }

  export type BookingGuestCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingGuestCreateWithoutBookingInput, BookingGuestUncheckedCreateWithoutBookingInput> | BookingGuestCreateWithoutBookingInput[] | BookingGuestUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingGuestCreateOrConnectWithoutBookingInput | BookingGuestCreateOrConnectWithoutBookingInput[]
    createMany?: BookingGuestCreateManyBookingInputEnvelope
    connect?: BookingGuestWhereUniqueInput | BookingGuestWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type RewardsUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<RewardsCreateWithoutBookingInput, RewardsUncheckedCreateWithoutBookingInput> | RewardsCreateWithoutBookingInput[] | RewardsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutBookingInput | RewardsCreateOrConnectWithoutBookingInput[]
    createMany?: RewardsCreateManyBookingInputEnvelope
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
  }

  export type BookingGuestUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingGuestCreateWithoutBookingInput, BookingGuestUncheckedCreateWithoutBookingInput> | BookingGuestCreateWithoutBookingInput[] | BookingGuestUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingGuestCreateOrConnectWithoutBookingInput | BookingGuestCreateOrConnectWithoutBookingInput[]
    createMany?: BookingGuestCreateManyBookingInputEnvelope
    connect?: BookingGuestWhereUniqueInput | BookingGuestWhereUniqueInput[]
  }

  export type EnumbookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.bookingStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    upsert?: RoomUpsertWithoutBookingsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutBookingsInput, RoomUpdateWithoutBookingsInput>, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type DiscountUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<DiscountCreateWithoutBookingsInput, DiscountUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutBookingsInput
    upsert?: DiscountUpsertWithoutBookingsInput
    disconnect?: DiscountWhereInput | boolean
    delete?: DiscountWhereInput | boolean
    connect?: DiscountWhereUniqueInput
    update?: XOR<XOR<DiscountUpdateToOneWithWhereWithoutBookingsInput, DiscountUpdateWithoutBookingsInput>, DiscountUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type RewardsUpdateManyWithoutBookingNestedInput = {
    create?: XOR<RewardsCreateWithoutBookingInput, RewardsUncheckedCreateWithoutBookingInput> | RewardsCreateWithoutBookingInput[] | RewardsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutBookingInput | RewardsCreateOrConnectWithoutBookingInput[]
    upsert?: RewardsUpsertWithWhereUniqueWithoutBookingInput | RewardsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: RewardsCreateManyBookingInputEnvelope
    set?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    disconnect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    delete?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    update?: RewardsUpdateWithWhereUniqueWithoutBookingInput | RewardsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: RewardsUpdateManyWithWhereWithoutBookingInput | RewardsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: RewardsScalarWhereInput | RewardsScalarWhereInput[]
  }

  export type BookingGuestUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingGuestCreateWithoutBookingInput, BookingGuestUncheckedCreateWithoutBookingInput> | BookingGuestCreateWithoutBookingInput[] | BookingGuestUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingGuestCreateOrConnectWithoutBookingInput | BookingGuestCreateOrConnectWithoutBookingInput[]
    upsert?: BookingGuestUpsertWithWhereUniqueWithoutBookingInput | BookingGuestUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingGuestCreateManyBookingInputEnvelope
    set?: BookingGuestWhereUniqueInput | BookingGuestWhereUniqueInput[]
    disconnect?: BookingGuestWhereUniqueInput | BookingGuestWhereUniqueInput[]
    delete?: BookingGuestWhereUniqueInput | BookingGuestWhereUniqueInput[]
    connect?: BookingGuestWhereUniqueInput | BookingGuestWhereUniqueInput[]
    update?: BookingGuestUpdateWithWhereUniqueWithoutBookingInput | BookingGuestUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingGuestUpdateManyWithWhereWithoutBookingInput | BookingGuestUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingGuestScalarWhereInput | BookingGuestScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type RewardsUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<RewardsCreateWithoutBookingInput, RewardsUncheckedCreateWithoutBookingInput> | RewardsCreateWithoutBookingInput[] | RewardsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutBookingInput | RewardsCreateOrConnectWithoutBookingInput[]
    upsert?: RewardsUpsertWithWhereUniqueWithoutBookingInput | RewardsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: RewardsCreateManyBookingInputEnvelope
    set?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    disconnect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    delete?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    update?: RewardsUpdateWithWhereUniqueWithoutBookingInput | RewardsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: RewardsUpdateManyWithWhereWithoutBookingInput | RewardsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: RewardsScalarWhereInput | RewardsScalarWhereInput[]
  }

  export type BookingGuestUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingGuestCreateWithoutBookingInput, BookingGuestUncheckedCreateWithoutBookingInput> | BookingGuestCreateWithoutBookingInput[] | BookingGuestUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingGuestCreateOrConnectWithoutBookingInput | BookingGuestCreateOrConnectWithoutBookingInput[]
    upsert?: BookingGuestUpsertWithWhereUniqueWithoutBookingInput | BookingGuestUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingGuestCreateManyBookingInputEnvelope
    set?: BookingGuestWhereUniqueInput | BookingGuestWhereUniqueInput[]
    disconnect?: BookingGuestWhereUniqueInput | BookingGuestWhereUniqueInput[]
    delete?: BookingGuestWhereUniqueInput | BookingGuestWhereUniqueInput[]
    connect?: BookingGuestWhereUniqueInput | BookingGuestWhereUniqueInput[]
    update?: BookingGuestUpdateWithWhereUniqueWithoutBookingInput | BookingGuestUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingGuestUpdateManyWithWhereWithoutBookingInput | BookingGuestUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingGuestScalarWhereInput | BookingGuestScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutBookingGuestsInput = {
    create?: XOR<BookingCreateWithoutBookingGuestsInput, BookingUncheckedCreateWithoutBookingGuestsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBookingGuestsInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutBookingGuestsNestedInput = {
    create?: XOR<BookingCreateWithoutBookingGuestsInput, BookingUncheckedCreateWithoutBookingGuestsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBookingGuestsInput
    upsert?: BookingUpsertWithoutBookingGuestsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutBookingGuestsInput, BookingUpdateWithoutBookingGuestsInput>, BookingUncheckedUpdateWithoutBookingGuestsInput>
  }

  export type BookingCreateNestedManyWithoutDiscountInput = {
    create?: XOR<BookingCreateWithoutDiscountInput, BookingUncheckedCreateWithoutDiscountInput> | BookingCreateWithoutDiscountInput[] | BookingUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDiscountInput | BookingCreateOrConnectWithoutDiscountInput[]
    createMany?: BookingCreateManyDiscountInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type HotelCreateNestedManyWithoutDiscountsInput = {
    create?: XOR<HotelCreateWithoutDiscountsInput, HotelUncheckedCreateWithoutDiscountsInput> | HotelCreateWithoutDiscountsInput[] | HotelUncheckedCreateWithoutDiscountsInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutDiscountsInput | HotelCreateOrConnectWithoutDiscountsInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutDiscountInput = {
    create?: XOR<BookingCreateWithoutDiscountInput, BookingUncheckedCreateWithoutDiscountInput> | BookingCreateWithoutDiscountInput[] | BookingUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDiscountInput | BookingCreateOrConnectWithoutDiscountInput[]
    createMany?: BookingCreateManyDiscountInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type HotelUncheckedCreateNestedManyWithoutDiscountsInput = {
    create?: XOR<HotelCreateWithoutDiscountsInput, HotelUncheckedCreateWithoutDiscountsInput> | HotelCreateWithoutDiscountsInput[] | HotelUncheckedCreateWithoutDiscountsInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutDiscountsInput | HotelCreateOrConnectWithoutDiscountsInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type EnumDiscountTypeFieldUpdateOperationsInput = {
    set?: $Enums.DiscountType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BookingUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<BookingCreateWithoutDiscountInput, BookingUncheckedCreateWithoutDiscountInput> | BookingCreateWithoutDiscountInput[] | BookingUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDiscountInput | BookingCreateOrConnectWithoutDiscountInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDiscountInput | BookingUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: BookingCreateManyDiscountInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDiscountInput | BookingUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDiscountInput | BookingUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type HotelUpdateManyWithoutDiscountsNestedInput = {
    create?: XOR<HotelCreateWithoutDiscountsInput, HotelUncheckedCreateWithoutDiscountsInput> | HotelCreateWithoutDiscountsInput[] | HotelUncheckedCreateWithoutDiscountsInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutDiscountsInput | HotelCreateOrConnectWithoutDiscountsInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutDiscountsInput | HotelUpsertWithWhereUniqueWithoutDiscountsInput[]
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutDiscountsInput | HotelUpdateWithWhereUniqueWithoutDiscountsInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutDiscountsInput | HotelUpdateManyWithWhereWithoutDiscountsInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<BookingCreateWithoutDiscountInput, BookingUncheckedCreateWithoutDiscountInput> | BookingCreateWithoutDiscountInput[] | BookingUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDiscountInput | BookingCreateOrConnectWithoutDiscountInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDiscountInput | BookingUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: BookingCreateManyDiscountInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDiscountInput | BookingUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDiscountInput | BookingUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type HotelUncheckedUpdateManyWithoutDiscountsNestedInput = {
    create?: XOR<HotelCreateWithoutDiscountsInput, HotelUncheckedCreateWithoutDiscountsInput> | HotelCreateWithoutDiscountsInput[] | HotelUncheckedCreateWithoutDiscountsInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutDiscountsInput | HotelCreateOrConnectWithoutDiscountsInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutDiscountsInput | HotelUpsertWithWhereUniqueWithoutDiscountsInput[]
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutDiscountsInput | HotelUpdateWithWhereUniqueWithoutDiscountsInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutDiscountsInput | HotelUpdateManyWithWhereWithoutDiscountsInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymenStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymenStatus
  }

  export type BookingUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    upsert?: BookingUpsertWithoutPaymentInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentInput, BookingUpdateWithoutPaymentInput>, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutReviewsInput = {
    create?: XOR<HotelCreateWithoutReviewsInput, HotelUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutReviewsInput
    connect?: HotelWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutReviewsInput = {
    create?: XOR<RoomCreateWithoutReviewsInput, RoomUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReviewsInput
    connect?: RoomWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type HotelUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<HotelCreateWithoutReviewsInput, HotelUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutReviewsInput
    upsert?: HotelUpsertWithoutReviewsInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutReviewsInput, HotelUpdateWithoutReviewsInput>, HotelUncheckedUpdateWithoutReviewsInput>
  }

  export type RoomUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<RoomCreateWithoutReviewsInput, RoomUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReviewsInput
    upsert?: RoomUpsertWithoutReviewsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutReviewsInput, RoomUpdateWithoutReviewsInput>, RoomUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutRewardsInput = {
    create?: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutRewardsInput = {
    create?: XOR<BookingCreateWithoutRewardsInput, BookingUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRewardsInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumRewardStatusFieldUpdateOperationsInput = {
    set?: $Enums.RewardStatus
  }

  export type UserUpdateOneRequiredWithoutRewardsNestedInput = {
    create?: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsInput
    upsert?: UserUpsertWithoutRewardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRewardsInput, UserUpdateWithoutRewardsInput>, UserUncheckedUpdateWithoutRewardsInput>
  }

  export type BookingUpdateOneRequiredWithoutRewardsNestedInput = {
    create?: XOR<BookingCreateWithoutRewardsInput, BookingUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRewardsInput
    upsert?: BookingUpsertWithoutRewardsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutRewardsInput, BookingUpdateWithoutRewardsInput>, BookingUncheckedUpdateWithoutRewardsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[]
    notIn?: number[]
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

  export type NestedEnumbookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.bookingStatus | EnumbookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.bookingStatus[]
    notIn?: $Enums.bookingStatus[]
    not?: NestedEnumbookingStatusFilter<$PrismaModel> | $Enums.bookingStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumbookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bookingStatus | EnumbookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.bookingStatus[]
    notIn?: $Enums.bookingStatus[]
    not?: NestedEnumbookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.bookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbookingStatusFilter<$PrismaModel>
    _max?: NestedEnumbookingStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[]
    notIn?: $Enums.DiscountType[]
    not?: NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[]
    notIn?: $Enums.DiscountType[]
    not?: NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymenStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymenStatus | EnumPaymenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymenStatus[]
    notIn?: $Enums.PaymenStatus[]
    not?: NestedEnumPaymenStatusFilter<$PrismaModel> | $Enums.PaymenStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymenStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymenStatus | EnumPaymenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymenStatus[]
    notIn?: $Enums.PaymenStatus[]
    not?: NestedEnumPaymenStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymenStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymenStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymenStatusFilter<$PrismaModel>
  }

  export type NestedEnumRewardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[]
    notIn?: $Enums.RewardStatus[]
    not?: NestedEnumRewardStatusFilter<$PrismaModel> | $Enums.RewardStatus
  }

  export type NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[]
    notIn?: $Enums.RewardStatus[]
    not?: NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel> | $Enums.RewardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardStatusFilter<$PrismaModel>
    _max?: NestedEnumRewardStatusFilter<$PrismaModel>
  }

  export type BookingCreateWithoutUserInput = {
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    room: RoomCreateNestedOneWithoutBookingsInput
    discount?: DiscountCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedManyWithoutBookingInput
    rewards?: RewardsCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    roomId: number
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    discountId?: number | null
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    rewards?: RewardsUncheckedCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    hotelId: number
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RewardsCreateWithoutUserInput = {
    rewardPoints: number
    rewardStatus?: $Enums.RewardStatus
    booking: BookingCreateNestedOneWithoutRewardsInput
  }

  export type RewardsUncheckedCreateWithoutUserInput = {
    id?: number
    rewardPoints: number
    bookingId: number
    rewardStatus?: $Enums.RewardStatus
  }

  export type RewardsCreateOrConnectWithoutUserInput = {
    where: RewardsWhereUniqueInput
    create: XOR<RewardsCreateWithoutUserInput, RewardsUncheckedCreateWithoutUserInput>
  }

  export type RewardsCreateManyUserInputEnvelope = {
    data: RewardsCreateManyUserInput | RewardsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUserInput = {
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
    hotel: HotelCreateNestedOneWithoutReviewsInput
    room: RoomCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    id?: number
    hotelId: number
    roomId: number
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TravelerInfoCreateWithoutUserInput = {
    firstName?: string | null
    lastName?: string | null
  }

  export type TravelerInfoUncheckedCreateWithoutUserInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
  }

  export type TravelerInfoCreateOrConnectWithoutUserInput = {
    where: TravelerInfoWhereUniqueInput
    create: XOR<TravelerInfoCreateWithoutUserInput, TravelerInfoUncheckedCreateWithoutUserInput>
  }

  export type TravelerInfoCreateManyUserInputEnvelope = {
    data: TravelerInfoCreateManyUserInput | TravelerInfoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    roomId?: IntFilter<"Booking"> | number
    roomAmount?: IntFilter<"Booking"> | number
    numGuest?: IntFilter<"Booking"> | number
    checkInDate?: DateTimeFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeFilter<"Booking"> | Date | string
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    bookingStatus?: EnumbookingStatusFilter<"Booking"> | $Enums.bookingStatus
    originalPrice?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    discountId?: IntNullableFilter<"Booking"> | number | null
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    userId?: IntFilter<"Like"> | number
    hotelId?: IntFilter<"Like"> | number
    createdAt?: DateTimeFilter<"Like"> | Date | string
  }

  export type RewardsUpsertWithWhereUniqueWithoutUserInput = {
    where: RewardsWhereUniqueInput
    update: XOR<RewardsUpdateWithoutUserInput, RewardsUncheckedUpdateWithoutUserInput>
    create: XOR<RewardsCreateWithoutUserInput, RewardsUncheckedCreateWithoutUserInput>
  }

  export type RewardsUpdateWithWhereUniqueWithoutUserInput = {
    where: RewardsWhereUniqueInput
    data: XOR<RewardsUpdateWithoutUserInput, RewardsUncheckedUpdateWithoutUserInput>
  }

  export type RewardsUpdateManyWithWhereWithoutUserInput = {
    where: RewardsScalarWhereInput
    data: XOR<RewardsUpdateManyMutationInput, RewardsUncheckedUpdateManyWithoutUserInput>
  }

  export type RewardsScalarWhereInput = {
    AND?: RewardsScalarWhereInput | RewardsScalarWhereInput[]
    OR?: RewardsScalarWhereInput[]
    NOT?: RewardsScalarWhereInput | RewardsScalarWhereInput[]
    id?: IntFilter<"Rewards"> | number
    rewardPoints?: IntFilter<"Rewards"> | number
    userId?: IntFilter<"Rewards"> | number
    bookingId?: IntFilter<"Rewards"> | number
    rewardStatus?: EnumRewardStatusFilter<"Rewards"> | $Enums.RewardStatus
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    hotelId?: IntFilter<"Reviews"> | number
    roomId?: IntFilter<"Reviews"> | number
    reviewContent?: StringFilter<"Reviews"> | string
    reviewImg?: StringNullableFilter<"Reviews"> | string | null
    rating?: IntFilter<"Reviews"> | number
    stayedDate?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type TravelerInfoUpsertWithWhereUniqueWithoutUserInput = {
    where: TravelerInfoWhereUniqueInput
    update: XOR<TravelerInfoUpdateWithoutUserInput, TravelerInfoUncheckedUpdateWithoutUserInput>
    create: XOR<TravelerInfoCreateWithoutUserInput, TravelerInfoUncheckedCreateWithoutUserInput>
  }

  export type TravelerInfoUpdateWithWhereUniqueWithoutUserInput = {
    where: TravelerInfoWhereUniqueInput
    data: XOR<TravelerInfoUpdateWithoutUserInput, TravelerInfoUncheckedUpdateWithoutUserInput>
  }

  export type TravelerInfoUpdateManyWithWhereWithoutUserInput = {
    where: TravelerInfoScalarWhereInput
    data: XOR<TravelerInfoUpdateManyMutationInput, TravelerInfoUncheckedUpdateManyWithoutUserInput>
  }

  export type TravelerInfoScalarWhereInput = {
    AND?: TravelerInfoScalarWhereInput | TravelerInfoScalarWhereInput[]
    OR?: TravelerInfoScalarWhereInput[]
    NOT?: TravelerInfoScalarWhereInput | TravelerInfoScalarWhereInput[]
    id?: IntFilter<"TravelerInfo"> | number
    firstName?: StringNullableFilter<"TravelerInfo"> | string | null
    lastName?: StringNullableFilter<"TravelerInfo"> | string | null
    userId?: IntFilter<"TravelerInfo"> | number
  }

  export type UserCreateWithoutTravlersInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    rewards?: RewardsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTravlersInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTravlersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTravlersInput, UserUncheckedCreateWithoutTravlersInput>
  }

  export type UserUpsertWithoutTravlersInput = {
    update: XOR<UserUpdateWithoutTravlersInput, UserUncheckedUpdateWithoutTravlersInput>
    create: XOR<UserCreateWithoutTravlersInput, UserUncheckedCreateWithoutTravlersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTravlersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTravlersInput, UserUncheckedUpdateWithoutTravlersInput>
  }

  export type UserUpdateWithoutTravlersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    rewards?: RewardsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTravlersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HotelImgCreateWithoutHotelInput = {
    img1?: string | null
    img2?: string | null
    img3?: string | null
    img4?: string | null
  }

  export type HotelImgUncheckedCreateWithoutHotelInput = {
    id?: number
    img1?: string | null
    img2?: string | null
    img3?: string | null
    img4?: string | null
  }

  export type HotelImgCreateOrConnectWithoutHotelInput = {
    where: HotelImgWhereUniqueInput
    create: XOR<HotelImgCreateWithoutHotelInput, HotelImgUncheckedCreateWithoutHotelInput>
  }

  export type RoomCreateWithoutHotelInput = {
    roomType: string
    roomImg: string
    nightlyRate: number
    roomAmount?: number
    maxAdults?: number
    maxChildren?: number
    bedSetup?: string | null
    roomSize?: number | null
    isSmoking?: boolean
    bookings?: BookingCreateNestedManyWithoutRoomInput
    reviews?: ReviewsCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutHotelInput = {
    id?: number
    roomType: string
    roomImg: string
    nightlyRate: number
    roomAmount?: number
    maxAdults?: number
    maxChildren?: number
    bedSetup?: string | null
    roomSize?: number | null
    isSmoking?: boolean
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutHotelInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput>
  }

  export type RoomCreateManyHotelInputEnvelope = {
    data: RoomCreateManyHotelInput | RoomCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutHotelInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutHotelInput = {
    userId: number
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutHotelInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutHotelInput, LikeUncheckedCreateWithoutHotelInput>
  }

  export type LikeCreateManyHotelInputEnvelope = {
    data: LikeCreateManyHotelInput | LikeCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutHotelInput = {
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    room: RoomCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutHotelInput = {
    id?: number
    userId: number
    roomId: number
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
  }

  export type ReviewsCreateOrConnectWithoutHotelInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutHotelInput, ReviewsUncheckedCreateWithoutHotelInput>
  }

  export type ReviewsCreateManyHotelInputEnvelope = {
    data: ReviewsCreateManyHotelInput | ReviewsCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type DiscountCreateWithoutHotelsInput = {
    code: string
    description: string
    value: number
    type?: $Enums.DiscountType
    minSpend?: number | null
    maxDiscount?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUncheckedCreateWithoutHotelsInput = {
    id?: number
    code: string
    description: string
    value: number
    type?: $Enums.DiscountType
    minSpend?: number | null
    maxDiscount?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutDiscountInput
  }

  export type DiscountCreateOrConnectWithoutHotelsInput = {
    where: DiscountWhereUniqueInput
    create: XOR<DiscountCreateWithoutHotelsInput, DiscountUncheckedCreateWithoutHotelsInput>
  }

  export type HotelImgUpsertWithoutHotelInput = {
    update: XOR<HotelImgUpdateWithoutHotelInput, HotelImgUncheckedUpdateWithoutHotelInput>
    create: XOR<HotelImgCreateWithoutHotelInput, HotelImgUncheckedCreateWithoutHotelInput>
    where?: HotelImgWhereInput
  }

  export type HotelImgUpdateToOneWithWhereWithoutHotelInput = {
    where?: HotelImgWhereInput
    data: XOR<HotelImgUpdateWithoutHotelInput, HotelImgUncheckedUpdateWithoutHotelInput>
  }

  export type HotelImgUpdateWithoutHotelInput = {
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    img4?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HotelImgUncheckedUpdateWithoutHotelInput = {
    id?: IntFieldUpdateOperationsInput | number
    img1?: NullableStringFieldUpdateOperationsInput | string | null
    img2?: NullableStringFieldUpdateOperationsInput | string | null
    img3?: NullableStringFieldUpdateOperationsInput | string | null
    img4?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomUpsertWithWhereUniqueWithoutHotelInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutHotelInput, RoomUncheckedUpdateWithoutHotelInput>
    create: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutHotelInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutHotelInput, RoomUncheckedUpdateWithoutHotelInput>
  }

  export type RoomUpdateManyWithWhereWithoutHotelInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutHotelInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    roomType?: StringFilter<"Room"> | string
    roomImg?: StringFilter<"Room"> | string
    nightlyRate?: IntFilter<"Room"> | number
    roomAmount?: IntFilter<"Room"> | number
    maxAdults?: IntFilter<"Room"> | number
    maxChildren?: IntFilter<"Room"> | number
    bedSetup?: StringNullableFilter<"Room"> | string | null
    roomSize?: IntNullableFilter<"Room"> | number | null
    isSmoking?: BoolFilter<"Room"> | boolean
    hotelId?: IntFilter<"Room"> | number
  }

  export type LikeUpsertWithWhereUniqueWithoutHotelInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutHotelInput, LikeUncheckedUpdateWithoutHotelInput>
    create: XOR<LikeCreateWithoutHotelInput, LikeUncheckedCreateWithoutHotelInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutHotelInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutHotelInput, LikeUncheckedUpdateWithoutHotelInput>
  }

  export type LikeUpdateManyWithWhereWithoutHotelInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutHotelInput>
  }

  export type ReviewsUpsertWithWhereUniqueWithoutHotelInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutHotelInput, ReviewsUncheckedUpdateWithoutHotelInput>
    create: XOR<ReviewsCreateWithoutHotelInput, ReviewsUncheckedCreateWithoutHotelInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutHotelInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutHotelInput, ReviewsUncheckedUpdateWithoutHotelInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutHotelInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutHotelInput>
  }

  export type DiscountUpsertWithWhereUniqueWithoutHotelsInput = {
    where: DiscountWhereUniqueInput
    update: XOR<DiscountUpdateWithoutHotelsInput, DiscountUncheckedUpdateWithoutHotelsInput>
    create: XOR<DiscountCreateWithoutHotelsInput, DiscountUncheckedCreateWithoutHotelsInput>
  }

  export type DiscountUpdateWithWhereUniqueWithoutHotelsInput = {
    where: DiscountWhereUniqueInput
    data: XOR<DiscountUpdateWithoutHotelsInput, DiscountUncheckedUpdateWithoutHotelsInput>
  }

  export type DiscountUpdateManyWithWhereWithoutHotelsInput = {
    where: DiscountScalarWhereInput
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyWithoutHotelsInput>
  }

  export type DiscountScalarWhereInput = {
    AND?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
    OR?: DiscountScalarWhereInput[]
    NOT?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
    id?: IntFilter<"Discount"> | number
    code?: StringFilter<"Discount"> | string
    description?: StringFilter<"Discount"> | string
    value?: FloatFilter<"Discount"> | number
    type?: EnumDiscountTypeFilter<"Discount"> | $Enums.DiscountType
    minSpend?: FloatNullableFilter<"Discount"> | number | null
    maxDiscount?: FloatNullableFilter<"Discount"> | number | null
    startDate?: DateTimeNullableFilter<"Discount"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Discount"> | Date | string | null
    usageLimit?: IntNullableFilter<"Discount"> | number | null
    usedCount?: IntFilter<"Discount"> | number
    isActive?: BoolFilter<"Discount"> | boolean
    createdAt?: DateTimeFilter<"Discount"> | Date | string
    updatedAt?: DateTimeFilter<"Discount"> | Date | string
  }

  export type HotelCreateWithoutHotelImgInput = {
    name: string
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    rooms?: RoomCreateNestedManyWithoutHotelInput
    likes?: LikeCreateNestedManyWithoutHotelInput
    reviews?: ReviewsCreateNestedManyWithoutHotelInput
    discounts?: DiscountCreateNestedManyWithoutHotelsInput
  }

  export type HotelUncheckedCreateWithoutHotelImgInput = {
    id?: number
    name: string
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    likes?: LikeUncheckedCreateNestedManyWithoutHotelInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutHotelInput
    discounts?: DiscountUncheckedCreateNestedManyWithoutHotelsInput
  }

  export type HotelCreateOrConnectWithoutHotelImgInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutHotelImgInput, HotelUncheckedCreateWithoutHotelImgInput>
  }

  export type HotelCreateManyHotelImgInputEnvelope = {
    data: HotelCreateManyHotelImgInput | HotelCreateManyHotelImgInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithWhereUniqueWithoutHotelImgInput = {
    where: HotelWhereUniqueInput
    update: XOR<HotelUpdateWithoutHotelImgInput, HotelUncheckedUpdateWithoutHotelImgInput>
    create: XOR<HotelCreateWithoutHotelImgInput, HotelUncheckedCreateWithoutHotelImgInput>
  }

  export type HotelUpdateWithWhereUniqueWithoutHotelImgInput = {
    where: HotelWhereUniqueInput
    data: XOR<HotelUpdateWithoutHotelImgInput, HotelUncheckedUpdateWithoutHotelImgInput>
  }

  export type HotelUpdateManyWithWhereWithoutHotelImgInput = {
    where: HotelScalarWhereInput
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyWithoutHotelImgInput>
  }

  export type HotelScalarWhereInput = {
    AND?: HotelScalarWhereInput | HotelScalarWhereInput[]
    OR?: HotelScalarWhereInput[]
    NOT?: HotelScalarWhereInput | HotelScalarWhereInput[]
    id?: IntFilter<"Hotel"> | number
    name?: StringFilter<"Hotel"> | string
    hotelImgId?: IntFilter<"Hotel"> | number
    hotelDetails?: StringFilter<"Hotel"> | string
    address?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    country?: StringFilter<"Hotel"> | string
    surroundings?: StringFilter<"Hotel"> | string
    amenities?: StringFilter<"Hotel"> | string
    policies?: StringFilter<"Hotel"> | string
    reviewCount?: IntNullableFilter<"Hotel"> | number | null
    averageRating?: FloatNullableFilter<"Hotel"> | number | null
    latitude?: FloatFilter<"Hotel"> | number
    longitude?: FloatFilter<"Hotel"> | number
  }

  export type HotelCreateWithoutRoomsInput = {
    name: string
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    hotelImg: HotelImgCreateNestedOneWithoutHotelInput
    likes?: LikeCreateNestedManyWithoutHotelInput
    reviews?: ReviewsCreateNestedManyWithoutHotelInput
    discounts?: DiscountCreateNestedManyWithoutHotelsInput
  }

  export type HotelUncheckedCreateWithoutRoomsInput = {
    id?: number
    name: string
    hotelImgId: number
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    likes?: LikeUncheckedCreateNestedManyWithoutHotelInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutHotelInput
    discounts?: DiscountUncheckedCreateNestedManyWithoutHotelsInput
  }

  export type HotelCreateOrConnectWithoutRoomsInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
  }

  export type BookingCreateWithoutRoomInput = {
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutBookingsInput
    discount?: DiscountCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedManyWithoutBookingInput
    rewards?: RewardsCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutRoomInput = {
    id?: number
    userId: number
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    discountId?: number | null
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    rewards?: RewardsUncheckedCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutRoomInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingCreateManyRoomInputEnvelope = {
    data: BookingCreateManyRoomInput | BookingCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutRoomInput = {
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    hotel: HotelCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutRoomInput = {
    id?: number
    userId: number
    hotelId: number
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
  }

  export type ReviewsCreateOrConnectWithoutRoomInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutRoomInput, ReviewsUncheckedCreateWithoutRoomInput>
  }

  export type ReviewsCreateManyRoomInputEnvelope = {
    data: ReviewsCreateManyRoomInput | ReviewsCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithoutRoomsInput = {
    update: XOR<HotelUpdateWithoutRoomsInput, HotelUncheckedUpdateWithoutRoomsInput>
    create: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutRoomsInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutRoomsInput, HotelUncheckedUpdateWithoutRoomsInput>
  }

  export type HotelUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    hotelImg?: HotelImgUpdateOneRequiredWithoutHotelNestedInput
    likes?: LikeUpdateManyWithoutHotelNestedInput
    reviews?: ReviewsUpdateManyWithoutHotelNestedInput
    discounts?: DiscountUpdateManyWithoutHotelsNestedInput
  }

  export type HotelUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hotelImgId?: IntFieldUpdateOperationsInput | number
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    likes?: LikeUncheckedUpdateManyWithoutHotelNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutHotelNestedInput
    discounts?: DiscountUncheckedUpdateManyWithoutHotelsNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
  }

  export type BookingUpdateManyWithWhereWithoutRoomInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutRoomInput>
  }

  export type ReviewsUpsertWithWhereUniqueWithoutRoomInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutRoomInput, ReviewsUncheckedUpdateWithoutRoomInput>
    create: XOR<ReviewsCreateWithoutRoomInput, ReviewsUncheckedCreateWithoutRoomInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutRoomInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutRoomInput, ReviewsUncheckedUpdateWithoutRoomInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutRoomInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserCreateWithoutLikesInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    rewards?: RewardsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    travlers?: TravelerInfoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    travlers?: TravelerInfoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type HotelCreateWithoutLikesInput = {
    name: string
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    hotelImg: HotelImgCreateNestedOneWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
    reviews?: ReviewsCreateNestedManyWithoutHotelInput
    discounts?: DiscountCreateNestedManyWithoutHotelsInput
  }

  export type HotelUncheckedCreateWithoutLikesInput = {
    id?: number
    name: string
    hotelImgId: number
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutHotelInput
    discounts?: DiscountUncheckedCreateNestedManyWithoutHotelsInput
  }

  export type HotelCreateOrConnectWithoutLikesInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutLikesInput, HotelUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    rewards?: RewardsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    travlers?: TravelerInfoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    travlers?: TravelerInfoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HotelUpsertWithoutLikesInput = {
    update: XOR<HotelUpdateWithoutLikesInput, HotelUncheckedUpdateWithoutLikesInput>
    create: XOR<HotelCreateWithoutLikesInput, HotelUncheckedCreateWithoutLikesInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutLikesInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutLikesInput, HotelUncheckedUpdateWithoutLikesInput>
  }

  export type HotelUpdateWithoutLikesInput = {
    name?: StringFieldUpdateOperationsInput | string
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    hotelImg?: HotelImgUpdateOneRequiredWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    reviews?: ReviewsUpdateManyWithoutHotelNestedInput
    discounts?: DiscountUpdateManyWithoutHotelsNestedInput
  }

  export type HotelUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hotelImgId?: IntFieldUpdateOperationsInput | number
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutHotelNestedInput
    discounts?: DiscountUncheckedUpdateManyWithoutHotelsNestedInput
  }

  export type UserCreateWithoutBookingsInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    likes?: LikeCreateNestedManyWithoutUserInput
    rewards?: RewardsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    travlers?: TravelerInfoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    travlers?: TravelerInfoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type RoomCreateWithoutBookingsInput = {
    roomType: string
    roomImg: string
    nightlyRate: number
    roomAmount?: number
    maxAdults?: number
    maxChildren?: number
    bedSetup?: string | null
    roomSize?: number | null
    isSmoking?: boolean
    hotel: HotelCreateNestedOneWithoutRoomsInput
    reviews?: ReviewsCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBookingsInput = {
    id?: number
    roomType: string
    roomImg: string
    nightlyRate: number
    roomAmount?: number
    maxAdults?: number
    maxChildren?: number
    bedSetup?: string | null
    roomSize?: number | null
    isSmoking?: boolean
    hotelId: number
    reviews?: ReviewsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBookingsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
  }

  export type DiscountCreateWithoutBookingsInput = {
    code: string
    description: string
    value: number
    type?: $Enums.DiscountType
    minSpend?: number | null
    maxDiscount?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutDiscountsInput
  }

  export type DiscountUncheckedCreateWithoutBookingsInput = {
    id?: number
    code: string
    description: string
    value: number
    type?: $Enums.DiscountType
    minSpend?: number | null
    maxDiscount?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutDiscountsInput
  }

  export type DiscountCreateOrConnectWithoutBookingsInput = {
    where: DiscountWhereUniqueInput
    create: XOR<DiscountCreateWithoutBookingsInput, DiscountUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    paymentMethod: $Enums.PaymentMethod
    bankName?: string | null
    accountNo?: string | null
    accountName: string
    amount: number
    paymentDate: Date | string
    paymentRefNo: string
    paymentStatus: $Enums.PaymenStatus
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: number
    paymentMethod: $Enums.PaymentMethod
    bankName?: string | null
    accountNo?: string | null
    accountName: string
    amount: number
    paymentDate: Date | string
    paymentRefNo: string
    paymentStatus: $Enums.PaymenStatus
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateManyBookingInputEnvelope = {
    data: PaymentCreateManyBookingInput | PaymentCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type RewardsCreateWithoutBookingInput = {
    rewardPoints: number
    rewardStatus?: $Enums.RewardStatus
    user: UserCreateNestedOneWithoutRewardsInput
  }

  export type RewardsUncheckedCreateWithoutBookingInput = {
    id?: number
    rewardPoints: number
    userId: number
    rewardStatus?: $Enums.RewardStatus
  }

  export type RewardsCreateOrConnectWithoutBookingInput = {
    where: RewardsWhereUniqueInput
    create: XOR<RewardsCreateWithoutBookingInput, RewardsUncheckedCreateWithoutBookingInput>
  }

  export type RewardsCreateManyBookingInputEnvelope = {
    data: RewardsCreateManyBookingInput | RewardsCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type BookingGuestCreateWithoutBookingInput = {
    firstName: string
    lastName: string
  }

  export type BookingGuestUncheckedCreateWithoutBookingInput = {
    id?: number
    firstName: string
    lastName: string
  }

  export type BookingGuestCreateOrConnectWithoutBookingInput = {
    where: BookingGuestWhereUniqueInput
    create: XOR<BookingGuestCreateWithoutBookingInput, BookingGuestUncheckedCreateWithoutBookingInput>
  }

  export type BookingGuestCreateManyBookingInputEnvelope = {
    data: BookingGuestCreateManyBookingInput | BookingGuestCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: LikeUpdateManyWithoutUserNestedInput
    rewards?: RewardsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    travlers?: TravelerInfoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    travlers?: TravelerInfoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomUpsertWithoutBookingsInput = {
    update: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutBookingsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomUpdateWithoutBookingsInput = {
    roomType?: StringFieldUpdateOperationsInput | string
    roomImg?: StringFieldUpdateOperationsInput | string
    nightlyRate?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedSetup?: NullableStringFieldUpdateOperationsInput | string | null
    roomSize?: NullableIntFieldUpdateOperationsInput | number | null
    isSmoking?: BoolFieldUpdateOperationsInput | boolean
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
    reviews?: ReviewsUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    roomImg?: StringFieldUpdateOperationsInput | string
    nightlyRate?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedSetup?: NullableStringFieldUpdateOperationsInput | string | null
    roomSize?: NullableIntFieldUpdateOperationsInput | number | null
    isSmoking?: BoolFieldUpdateOperationsInput | boolean
    hotelId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type DiscountUpsertWithoutBookingsInput = {
    update: XOR<DiscountUpdateWithoutBookingsInput, DiscountUncheckedUpdateWithoutBookingsInput>
    create: XOR<DiscountCreateWithoutBookingsInput, DiscountUncheckedCreateWithoutBookingsInput>
    where?: DiscountWhereInput
  }

  export type DiscountUpdateToOneWithWhereWithoutBookingsInput = {
    where?: DiscountWhereInput
    data: XOR<DiscountUpdateWithoutBookingsInput, DiscountUncheckedUpdateWithoutBookingsInput>
  }

  export type DiscountUpdateWithoutBookingsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    minSpend?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutDiscountsNestedInput
  }

  export type DiscountUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    minSpend?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutDiscountsNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBookingInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBookingInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    bookingId?: IntFilter<"Payment"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    bankName?: StringNullableFilter<"Payment"> | string | null
    accountNo?: StringNullableFilter<"Payment"> | string | null
    accountName?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentRefNo?: StringFilter<"Payment"> | string
    paymentStatus?: EnumPaymenStatusFilter<"Payment"> | $Enums.PaymenStatus
  }

  export type RewardsUpsertWithWhereUniqueWithoutBookingInput = {
    where: RewardsWhereUniqueInput
    update: XOR<RewardsUpdateWithoutBookingInput, RewardsUncheckedUpdateWithoutBookingInput>
    create: XOR<RewardsCreateWithoutBookingInput, RewardsUncheckedCreateWithoutBookingInput>
  }

  export type RewardsUpdateWithWhereUniqueWithoutBookingInput = {
    where: RewardsWhereUniqueInput
    data: XOR<RewardsUpdateWithoutBookingInput, RewardsUncheckedUpdateWithoutBookingInput>
  }

  export type RewardsUpdateManyWithWhereWithoutBookingInput = {
    where: RewardsScalarWhereInput
    data: XOR<RewardsUpdateManyMutationInput, RewardsUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingGuestUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingGuestWhereUniqueInput
    update: XOR<BookingGuestUpdateWithoutBookingInput, BookingGuestUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingGuestCreateWithoutBookingInput, BookingGuestUncheckedCreateWithoutBookingInput>
  }

  export type BookingGuestUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingGuestWhereUniqueInput
    data: XOR<BookingGuestUpdateWithoutBookingInput, BookingGuestUncheckedUpdateWithoutBookingInput>
  }

  export type BookingGuestUpdateManyWithWhereWithoutBookingInput = {
    where: BookingGuestScalarWhereInput
    data: XOR<BookingGuestUpdateManyMutationInput, BookingGuestUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingGuestScalarWhereInput = {
    AND?: BookingGuestScalarWhereInput | BookingGuestScalarWhereInput[]
    OR?: BookingGuestScalarWhereInput[]
    NOT?: BookingGuestScalarWhereInput | BookingGuestScalarWhereInput[]
    id?: IntFilter<"BookingGuest"> | number
    firstName?: StringFilter<"BookingGuest"> | string
    lastName?: StringFilter<"BookingGuest"> | string
    bookingId?: IntFilter<"BookingGuest"> | number
  }

  export type BookingCreateWithoutBookingGuestsInput = {
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    discount?: DiscountCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedManyWithoutBookingInput
    rewards?: RewardsCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutBookingGuestsInput = {
    id?: number
    userId: number
    roomId: number
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    discountId?: number | null
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    rewards?: RewardsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutBookingGuestsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBookingGuestsInput, BookingUncheckedCreateWithoutBookingGuestsInput>
  }

  export type BookingUpsertWithoutBookingGuestsInput = {
    update: XOR<BookingUpdateWithoutBookingGuestsInput, BookingUncheckedUpdateWithoutBookingGuestsInput>
    create: XOR<BookingCreateWithoutBookingGuestsInput, BookingUncheckedCreateWithoutBookingGuestsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutBookingGuestsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutBookingGuestsInput, BookingUncheckedUpdateWithoutBookingGuestsInput>
  }

  export type BookingUpdateWithoutBookingGuestsInput = {
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    discount?: DiscountUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateManyWithoutBookingNestedInput
    rewards?: RewardsUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutBookingGuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountId?: NullableIntFieldUpdateOperationsInput | number | null
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    rewards?: RewardsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateWithoutDiscountInput = {
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedManyWithoutBookingInput
    rewards?: RewardsCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutDiscountInput = {
    id?: number
    userId: number
    roomId: number
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    rewards?: RewardsUncheckedCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutDiscountInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutDiscountInput, BookingUncheckedCreateWithoutDiscountInput>
  }

  export type BookingCreateManyDiscountInputEnvelope = {
    data: BookingCreateManyDiscountInput | BookingCreateManyDiscountInput[]
    skipDuplicates?: boolean
  }

  export type HotelCreateWithoutDiscountsInput = {
    name: string
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    hotelImg: HotelImgCreateNestedOneWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
    likes?: LikeCreateNestedManyWithoutHotelInput
    reviews?: ReviewsCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutDiscountsInput = {
    id?: number
    name: string
    hotelImgId: number
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    likes?: LikeUncheckedCreateNestedManyWithoutHotelInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutDiscountsInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutDiscountsInput, HotelUncheckedCreateWithoutDiscountsInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutDiscountInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutDiscountInput, BookingUncheckedUpdateWithoutDiscountInput>
    create: XOR<BookingCreateWithoutDiscountInput, BookingUncheckedCreateWithoutDiscountInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutDiscountInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutDiscountInput, BookingUncheckedUpdateWithoutDiscountInput>
  }

  export type BookingUpdateManyWithWhereWithoutDiscountInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutDiscountInput>
  }

  export type HotelUpsertWithWhereUniqueWithoutDiscountsInput = {
    where: HotelWhereUniqueInput
    update: XOR<HotelUpdateWithoutDiscountsInput, HotelUncheckedUpdateWithoutDiscountsInput>
    create: XOR<HotelCreateWithoutDiscountsInput, HotelUncheckedCreateWithoutDiscountsInput>
  }

  export type HotelUpdateWithWhereUniqueWithoutDiscountsInput = {
    where: HotelWhereUniqueInput
    data: XOR<HotelUpdateWithoutDiscountsInput, HotelUncheckedUpdateWithoutDiscountsInput>
  }

  export type HotelUpdateManyWithWhereWithoutDiscountsInput = {
    where: HotelScalarWhereInput
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyWithoutDiscountsInput>
  }

  export type BookingCreateWithoutPaymentInput = {
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    discount?: DiscountCreateNestedOneWithoutBookingsInput
    rewards?: RewardsCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentInput = {
    id?: number
    userId: number
    roomId: number
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    discountId?: number | null
    rewards?: RewardsUncheckedCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
  }

  export type BookingUpsertWithoutPaymentInput = {
    update: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingUpdateWithoutPaymentInput = {
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    discount?: DiscountUpdateOneWithoutBookingsNestedInput
    rewards?: RewardsUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountId?: NullableIntFieldUpdateOperationsInput | number | null
    rewards?: RewardsUncheckedUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    rewards?: RewardsCreateNestedManyWithoutUserInput
    travlers?: TravelerInfoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardsUncheckedCreateNestedManyWithoutUserInput
    travlers?: TravelerInfoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type HotelCreateWithoutReviewsInput = {
    name: string
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    hotelImg: HotelImgCreateNestedOneWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
    likes?: LikeCreateNestedManyWithoutHotelInput
    discounts?: DiscountCreateNestedManyWithoutHotelsInput
  }

  export type HotelUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    hotelImgId: number
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    likes?: LikeUncheckedCreateNestedManyWithoutHotelInput
    discounts?: DiscountUncheckedCreateNestedManyWithoutHotelsInput
  }

  export type HotelCreateOrConnectWithoutReviewsInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutReviewsInput, HotelUncheckedCreateWithoutReviewsInput>
  }

  export type RoomCreateWithoutReviewsInput = {
    roomType: string
    roomImg: string
    nightlyRate: number
    roomAmount?: number
    maxAdults?: number
    maxChildren?: number
    bedSetup?: string | null
    roomSize?: number | null
    isSmoking?: boolean
    hotel: HotelCreateNestedOneWithoutRoomsInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutReviewsInput = {
    id?: number
    roomType: string
    roomImg: string
    nightlyRate: number
    roomAmount?: number
    maxAdults?: number
    maxChildren?: number
    bedSetup?: string | null
    roomSize?: number | null
    isSmoking?: boolean
    hotelId: number
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutReviewsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutReviewsInput, RoomUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    rewards?: RewardsUpdateManyWithoutUserNestedInput
    travlers?: TravelerInfoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardsUncheckedUpdateManyWithoutUserNestedInput
    travlers?: TravelerInfoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HotelUpsertWithoutReviewsInput = {
    update: XOR<HotelUpdateWithoutReviewsInput, HotelUncheckedUpdateWithoutReviewsInput>
    create: XOR<HotelCreateWithoutReviewsInput, HotelUncheckedCreateWithoutReviewsInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutReviewsInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutReviewsInput, HotelUncheckedUpdateWithoutReviewsInput>
  }

  export type HotelUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    hotelImg?: HotelImgUpdateOneRequiredWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    likes?: LikeUpdateManyWithoutHotelNestedInput
    discounts?: DiscountUpdateManyWithoutHotelsNestedInput
  }

  export type HotelUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hotelImgId?: IntFieldUpdateOperationsInput | number
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    likes?: LikeUncheckedUpdateManyWithoutHotelNestedInput
    discounts?: DiscountUncheckedUpdateManyWithoutHotelsNestedInput
  }

  export type RoomUpsertWithoutReviewsInput = {
    update: XOR<RoomUpdateWithoutReviewsInput, RoomUncheckedUpdateWithoutReviewsInput>
    create: XOR<RoomCreateWithoutReviewsInput, RoomUncheckedCreateWithoutReviewsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutReviewsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutReviewsInput, RoomUncheckedUpdateWithoutReviewsInput>
  }

  export type RoomUpdateWithoutReviewsInput = {
    roomType?: StringFieldUpdateOperationsInput | string
    roomImg?: StringFieldUpdateOperationsInput | string
    nightlyRate?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedSetup?: NullableStringFieldUpdateOperationsInput | string | null
    roomSize?: NullableIntFieldUpdateOperationsInput | number | null
    isSmoking?: BoolFieldUpdateOperationsInput | boolean
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    roomImg?: StringFieldUpdateOperationsInput | string
    nightlyRate?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedSetup?: NullableStringFieldUpdateOperationsInput | string | null
    roomSize?: NullableIntFieldUpdateOperationsInput | number | null
    isSmoking?: BoolFieldUpdateOperationsInput | boolean
    hotelId?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateWithoutRewardsInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    travlers?: TravelerInfoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRewardsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    profileImg?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    travlers?: TravelerInfoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRewardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
  }

  export type BookingCreateWithoutRewardsInput = {
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    discount?: DiscountCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutRewardsInput = {
    id?: number
    userId: number
    roomId: number
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    discountId?: number | null
    payment?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    bookingGuests?: BookingGuestUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutRewardsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRewardsInput, BookingUncheckedCreateWithoutRewardsInput>
  }

  export type UserUpsertWithoutRewardsInput = {
    update: XOR<UserUpdateWithoutRewardsInput, UserUncheckedUpdateWithoutRewardsInput>
    create: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRewardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRewardsInput, UserUncheckedUpdateWithoutRewardsInput>
  }

  export type UserUpdateWithoutRewardsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    travlers?: TravelerInfoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRewardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    travlers?: TravelerInfoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingUpsertWithoutRewardsInput = {
    update: XOR<BookingUpdateWithoutRewardsInput, BookingUncheckedUpdateWithoutRewardsInput>
    create: XOR<BookingCreateWithoutRewardsInput, BookingUncheckedCreateWithoutRewardsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutRewardsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutRewardsInput, BookingUncheckedUpdateWithoutRewardsInput>
  }

  export type BookingUpdateWithoutRewardsInput = {
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    discount?: DiscountUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutRewardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountId?: NullableIntFieldUpdateOperationsInput | number | null
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyUserInput = {
    id?: number
    roomId: number
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    discountId?: number | null
  }

  export type LikeCreateManyUserInput = {
    hotelId: number
    createdAt?: Date | string
  }

  export type RewardsCreateManyUserInput = {
    id?: number
    rewardPoints: number
    bookingId: number
    rewardStatus?: $Enums.RewardStatus
  }

  export type ReviewsCreateManyUserInput = {
    id?: number
    hotelId: number
    roomId: number
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
  }

  export type TravelerInfoCreateManyUserInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
  }

  export type BookingUpdateWithoutUserInput = {
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    discount?: DiscountUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateManyWithoutBookingNestedInput
    rewards?: RewardsUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountId?: NullableIntFieldUpdateOperationsInput | number | null
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    rewards?: RewardsUncheckedUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    hotelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    hotelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardsUpdateWithoutUserInput = {
    rewardPoints?: IntFieldUpdateOperationsInput | number
    rewardStatus?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    booking?: BookingUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type RewardsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    rewardStatus?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
  }

  export type RewardsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    rewardStatus?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
  }

  export type ReviewsUpdateWithoutUserInput = {
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutReviewsNestedInput
    room?: RoomUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hotelId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hotelId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelerInfoUpdateWithoutUserInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TravelerInfoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TravelerInfoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomCreateManyHotelInput = {
    id?: number
    roomType: string
    roomImg: string
    nightlyRate: number
    roomAmount?: number
    maxAdults?: number
    maxChildren?: number
    bedSetup?: string | null
    roomSize?: number | null
    isSmoking?: boolean
  }

  export type LikeCreateManyHotelInput = {
    userId: number
    createdAt?: Date | string
  }

  export type ReviewsCreateManyHotelInput = {
    id?: number
    userId: number
    roomId: number
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
  }

  export type RoomUpdateWithoutHotelInput = {
    roomType?: StringFieldUpdateOperationsInput | string
    roomImg?: StringFieldUpdateOperationsInput | string
    nightlyRate?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedSetup?: NullableStringFieldUpdateOperationsInput | string | null
    roomSize?: NullableIntFieldUpdateOperationsInput | number | null
    isSmoking?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    reviews?: ReviewsUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutHotelInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    roomImg?: StringFieldUpdateOperationsInput | string
    nightlyRate?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedSetup?: NullableStringFieldUpdateOperationsInput | string | null
    roomSize?: NullableIntFieldUpdateOperationsInput | number | null
    isSmoking?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutHotelInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    roomImg?: StringFieldUpdateOperationsInput | string
    nightlyRate?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedSetup?: NullableStringFieldUpdateOperationsInput | string | null
    roomSize?: NullableIntFieldUpdateOperationsInput | number | null
    isSmoking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LikeUpdateWithoutHotelInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutHotelInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutHotelInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutHotelInput = {
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    room?: RoomUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutHotelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutHotelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUpdateWithoutHotelsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    minSpend?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateWithoutHotelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    minSpend?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateManyWithoutHotelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    minSpend?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDiscount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelCreateManyHotelImgInput = {
    id?: number
    name: string
    hotelDetails: string
    address: string
    city: string
    country: string
    surroundings: string
    amenities: string
    policies: string
    reviewCount?: number | null
    averageRating?: number | null
    latitude: number
    longitude: number
  }

  export type HotelUpdateWithoutHotelImgInput = {
    name?: StringFieldUpdateOperationsInput | string
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    likes?: LikeUpdateManyWithoutHotelNestedInput
    reviews?: ReviewsUpdateManyWithoutHotelNestedInput
    discounts?: DiscountUpdateManyWithoutHotelsNestedInput
  }

  export type HotelUncheckedUpdateWithoutHotelImgInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    likes?: LikeUncheckedUpdateManyWithoutHotelNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutHotelNestedInput
    discounts?: DiscountUncheckedUpdateManyWithoutHotelsNestedInput
  }

  export type HotelUncheckedUpdateManyWithoutHotelImgInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyRoomInput = {
    id?: number
    userId: number
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    discountId?: number | null
  }

  export type ReviewsCreateManyRoomInput = {
    id?: number
    userId: number
    hotelId: number
    reviewContent: string
    reviewImg?: string | null
    rating: number
    stayedDate: Date | string
  }

  export type BookingUpdateWithoutRoomInput = {
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    discount?: DiscountUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateManyWithoutBookingNestedInput
    rewards?: RewardsUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountId?: NullableIntFieldUpdateOperationsInput | number | null
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    rewards?: RewardsUncheckedUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewsUpdateWithoutRoomInput = {
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    hotel?: HotelUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hotelId?: IntFieldUpdateOperationsInput | number
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hotelId?: IntFieldUpdateOperationsInput | number
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewImg?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    stayedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyBookingInput = {
    id?: number
    paymentMethod: $Enums.PaymentMethod
    bankName?: string | null
    accountNo?: string | null
    accountName: string
    amount: number
    paymentDate: Date | string
    paymentRefNo: string
    paymentStatus: $Enums.PaymenStatus
  }

  export type RewardsCreateManyBookingInput = {
    id?: number
    rewardPoints: number
    userId: number
    rewardStatus?: $Enums.RewardStatus
  }

  export type BookingGuestCreateManyBookingInput = {
    id?: number
    firstName: string
    lastName: string
  }

  export type PaymentUpdateWithoutBookingInput = {
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRefNo?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymenStatusFieldUpdateOperationsInput | $Enums.PaymenStatus
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRefNo?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymenStatusFieldUpdateOperationsInput | $Enums.PaymenStatus
  }

  export type PaymentUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNo?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRefNo?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymenStatusFieldUpdateOperationsInput | $Enums.PaymenStatus
  }

  export type RewardsUpdateWithoutBookingInput = {
    rewardPoints?: IntFieldUpdateOperationsInput | number
    rewardStatus?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    user?: UserUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type RewardsUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rewardStatus?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
  }

  export type RewardsUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rewardStatus?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
  }

  export type BookingGuestUpdateWithoutBookingInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type BookingGuestUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type BookingGuestUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyDiscountInput = {
    id?: number
    userId: number
    roomId: number
    roomAmount?: number
    numGuest: number
    checkInDate: Date | string
    checkOutDate: Date | string
    bookingDate?: Date | string
    bookingStatus?: $Enums.bookingStatus
    originalPrice: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    taxesAndFees?: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
  }

  export type BookingUpdateWithoutDiscountInput = {
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateManyWithoutBookingNestedInput
    rewards?: RewardsUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutDiscountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    rewards?: RewardsUncheckedUpdateManyWithoutBookingNestedInput
    bookingGuests?: BookingGuestUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutDiscountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    roomAmount?: IntFieldUpdateOperationsInput | number
    numGuest?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingStatus?: EnumbookingStatusFieldUpdateOperationsInput | $Enums.bookingStatus
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxesAndFees?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type HotelUpdateWithoutDiscountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    hotelImg?: HotelImgUpdateOneRequiredWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    likes?: LikeUpdateManyWithoutHotelNestedInput
    reviews?: ReviewsUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutDiscountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hotelImgId?: IntFieldUpdateOperationsInput | number
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    likes?: LikeUncheckedUpdateManyWithoutHotelNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateManyWithoutDiscountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hotelImgId?: IntFieldUpdateOperationsInput | number
    hotelDetails?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    surroundings?: StringFieldUpdateOperationsInput | string
    amenities?: StringFieldUpdateOperationsInput | string
    policies?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
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