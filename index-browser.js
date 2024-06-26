
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.16.0
 * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
 */
Prisma.prismaVersion = {
  client: "5.16.0",
  engine: "34ace0eb2704183d2c05b60b52fba5c43c13f303"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProvinceScalarFieldEnum = {
  ID: 'ID',
  Name: 'Name',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.DistrictScalarFieldEnum = {
  ID: 'ID',
  Name: 'Name',
  ProvinceID: 'ProvinceID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.VillageScalarFieldEnum = {
  ID: 'ID',
  Name: 'Name',
  ProvinceID: 'ProvinceID',
  DistrictID: 'DistrictID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.AddressScalarFieldEnum = {
  ID: 'ID',
  Address: 'Address',
  ProvinceID: 'ProvinceID',
  DistrictID: 'DistrictID',
  ProfileID: 'ProfileID',
  BranchesID: 'BranchesID',
  IsDefault: 'IsDefault',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.BranchesScalarFieldEnum = {
  ID: 'ID',
  CompanyId: 'CompanyId',
  Name: 'Name',
  Address1: 'Address1',
  Address2: 'Address2',
  Address3: 'Address3',
  Status: 'Status',
  Lat: 'Lat',
  Long: 'Long',
  Zone: 'Zone',
  IsMain: 'IsMain',
  UploadURL: 'UploadURL',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.BranchesKeyScalarFieldEnum = {
  ID: 'ID',
  Key: 'Key',
  Secret: 'Secret',
  Remask: 'Remask',
  BranchesID: 'BranchesID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.BranchesSettingsScalarFieldEnum = {
  ID: 'ID',
  Titel: 'Titel',
  Setting: 'Setting',
  Remask: 'Remask',
  BranchesID: 'BranchesID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.WalletScalarFieldEnum = {
  ID: 'ID',
  Balance: 'Balance',
  Title: 'Title',
  Description: 'Description',
  IsReal: 'IsReal',
  UserID: 'UserID',
  Status: 'Status',
  Remask: 'Remask',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.TransactionScalarFieldEnum = {
  ID: 'ID',
  Type: 'Type',
  Info: 'Info',
  Status: 'Status',
  Result: 'Result',
  Balance: 'Balance',
  IsPayment: 'IsPayment',
  IsReceived: 'IsReceived',
  OrderPaymentID: 'OrderPaymentID',
  PaidByID: 'PaidByID',
  PaidToID: 'PaidToID',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.UsersScalarFieldEnum = {
  ID: 'ID',
  UserName: 'UserName',
  Password: 'Password',
  URL: 'URL',
  PhoneNumber: 'PhoneNumber',
  Email: 'Email',
  Pin: 'Pin',
  IsRemember: 'IsRemember',
  IsPin: 'IsPin',
  IsBiometric: 'IsBiometric',
  Status: 'Status',
  Remask: 'Remask',
  LastActive: 'LastActive',
  BranchesID: 'BranchesID',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.ProfileScalarFieldEnum = {
  ID: 'ID',
  Gender: 'Gender',
  Name: 'Name',
  SurName: 'SurName',
  ProfileURL: 'ProfileURL',
  UserID: 'UserID',
  AdminID: 'AdminID',
  RoleID: 'RoleID',
  AdminPin: 'AdminPin',
  Remask: 'Remask',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.OtpScalarFieldEnum = {
  ID: 'ID',
  OTP: 'OTP',
  IsVerify: 'IsVerify',
  UserName: 'UserName',
  Type: 'Type',
  Remask: 'Remask',
  UsersID: 'UsersID',
  BranchesID: 'BranchesID',
  SmsGatewayUUID: 'SmsGatewayUUID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.NotificationsScalarFieldEnum = {
  ID: 'ID',
  Titel: 'Titel',
  Details: 'Details',
  Type: 'Type',
  Provider: 'Provider',
  Remask: 'Remask',
  UsersID: 'UsersID',
  BranchesID: 'BranchesID',
  SmsGatewayUUID: 'SmsGatewayUUID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.ForgotPasswordScalarFieldEnum = {
  ID: 'ID',
  Titel: 'Titel',
  Token: 'Token',
  OldPassword: 'OldPassword',
  OtpID: 'OtpID',
  Provider: 'Provider',
  Remask: 'Remask',
  UsersID: 'UsersID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.UsersRolesScalarFieldEnum = {
  ID: 'ID',
  Titel: 'Titel',
  Type: 'Type',
  Role: 'Role',
  Permission: 'Permission',
  Remask: 'Remask',
  UsersID: 'UsersID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.UsersActivitiesScalarFieldEnum = {
  ID: 'ID',
  Activity: 'Activity',
  IP: 'IP',
  MacAddress: 'MacAddress',
  UDID: 'UDID',
  Remask: 'Remask',
  Log: 'Log',
  Error: 'Error',
  Messages: 'Messages',
  UsersID: 'UsersID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.OrderTypeScalarFieldEnum = {
  ID: 'ID',
  TypeCode: 'TypeCode',
  TypeNmae: 'TypeNmae',
  Remask: 'Remask',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.OrderCategoryScalarFieldEnum = {
  ID: 'ID',
  TypeCode: 'TypeCode',
  TypeNmae: 'TypeNmae',
  Remask: 'Remask',
  BranchesID: 'BranchesID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  ID: 'ID',
  Code: 'Code',
  PrimaryCode: 'PrimaryCode',
  SecondaryCode: 'SecondaryCode',
  OrderDate: 'OrderDate',
  Name: 'Name',
  UplaodURL: 'UplaodURL',
  CategoryID: 'CategoryID',
  BranchesID: 'BranchesID',
  CreateByID: 'CreateByID',
  Remask: 'Remask',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.OrderThreadingScalarFieldEnum = {
  ID: 'ID',
  Tasks: 'Tasks',
  ActivitieID: 'ActivitieID',
  OrderID: 'OrderID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.OrderPersonalScalarFieldEnum = {
  ID: 'ID',
  SenderName: 'SenderName',
  SenderPhoneNumber: 'SenderPhoneNumber',
  SenderUserID: 'SenderUserID',
  RecipientName: 'RecipientName',
  RecipientPhoneNumber: 'RecipientPhoneNumber',
  RecipientID: 'RecipientID',
  OrderID: 'OrderID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.OrderPaymentScalarFieldEnum = {
  ID: 'ID',
  PaymentStatus: 'PaymentStatus',
  AmountDeliver: 'AmountDeliver',
  IsPaid: 'IsPaid',
  OrderID: 'OrderID',
  PaidToID: 'PaidToID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.OrderDetailsScalarFieldEnum = {
  ID: 'ID',
  Detail: 'Detail',
  AmountX: 'AmountX',
  AmountY: 'AmountY',
  AmountH: 'AmountH',
  AmountW: 'AmountW',
  Amount: 'Amount',
  OrderID: 'OrderID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.TackingStatusScalarFieldEnum = {
  ID: 'ID',
  Status: 'Status',
  Description: 'Description',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.OrderTackingScalarFieldEnum = {
  ID: 'ID',
  Number: 'Number',
  PrimaryPhoneNumber: 'PrimaryPhoneNumber',
  SecondaryName: 'SecondaryName',
  SecondaryPhoneNumber: 'SecondaryPhoneNumber',
  OrderID: 'OrderID',
  BranchesID: 'BranchesID',
  TrackingStatusID: 'TrackingStatusID',
  Status: 'Status',
  IsActive: 'IsActive',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  province: 'province',
  district: 'district',
  village: 'village',
  address: 'address',
  branches: 'branches',
  branchesKey: 'branchesKey',
  branchesSettings: 'branchesSettings',
  wallet: 'wallet',
  transaction: 'transaction',
  users: 'users',
  profile: 'profile',
  otp: 'otp',
  notifications: 'notifications',
  forgotPassword: 'forgotPassword',
  usersRoles: 'usersRoles',
  usersActivities: 'usersActivities',
  orderType: 'orderType',
  orderCategory: 'orderCategory',
  order: 'order',
  orderThreading: 'orderThreading',
  orderPersonal: 'orderPersonal',
  orderPayment: 'orderPayment',
  orderDetails: 'orderDetails',
  tackingStatus: 'tackingStatus',
  orderTacking: 'orderTacking'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
