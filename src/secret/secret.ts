import { PROJECT_ENV, PROJECT_ENV_ENUM } from '@/constant';

export const JWT_SECRET = '**********'; // jwt秘钥

export const QINIU_ACCESSKEY = '**********'; // 七牛云秘钥
export const QINIU_SECRETKEY = '**********'; // 七牛云秘钥
export const QINIU_CALLBACK_URL = '**********'; // 七牛云回调

export const WWW_QQ_CLIENT_ID = '**********'; // qq登录APP ID
export const WWW_QQ_CLIENT_SECRET = '**********'; // qq登录APP Key
export const WWW_QQ_REDIRECT_URI = '**********'; // qq登录回调地址
export const ADMIN_QQ_CLIENT_ID = '**********'; // qq登录APP ID
export const ADMIN_QQ_CLIENT_SECRET = '**********'; // qq登录APP Key
export const ADMIN_QQ_REDIRECT_URI = '**********'; // qq登录回调地址

export const GITHUB_CLIENT_ID = '**********'; // github登录APP ID
export const GITHUB_CLIENT_SECRET = '**********'; // github登录APP Key
export const GITHUB_REDIRECT_URI =
  '**************************************************'; // github登录回调地址

export const GAODE_WEB_IP_URL = '**********'; // 高德地图url
export const GAODE_WEB_IP_KEY = '**********'; // 高德地图key

export const QQ_EMAIL_USER = '**********'; // qq邮箱auth的用户
export const QQ_EMAIL_PASS = '**********'; // qq邮箱auth的秘钥

export const IP_WHITE_LIST = ['127.0.0.1']; // ip白名单

export const MYSQL_CONFIG = {
  docker: {
    container: '**********',
    image: '**********',
    port: { 3306: 3306 },
    MYSQL_ROOT_PASSWORD: '**********',
    volume: '**********',
  },
  // 最大只有5M空间
  host: 'sql.wsfdb.cn',
  database: 'xtCloudnodeStudy',
  username: 'xtCloudnodeStudy',
  password: '123456',
  // 30M 连接不上
  // database: 'freedb_nodeStudy',
  // username: 'freedb_nodeStudy',
  // password: 'Auz8EaDj45!7#3W',
  // host: 'sql.freedb.tech',
  // host: '127.0.0.1',
  port: 3306,
}; // mysql配置

export const SSH_CONFIG = {
  username: '**********',
  password: '**********',
  host: '**********',
  port: 666,
}; // ssh配置

export enum REDIS_DATABASE {
  blog,
  live,
}

export const REDIS_CONFIG = {
  url: 'rediss://default:AYHfAAIncDFkMDUwM2NhODcxZDg0OWY5YTc5MmU2YWQwMTJmNzM5YXAxMzMyNDc@united-rodent-33247.upstash.io:6379',
  database: REDIS_DATABASE.blog,
  // database: 'nodeStudy',
  socket: {
    port: 6379,
    // host: '127.0.0.1',
    host: 'https://united-rodent-33247.upstash.io',
  },
  username: 'Enabled',
  // password: '123456',
  password: 'AYHfAAIncDFkMDUwM2NhODcxZDg0OWY5YTc5MmU2YWQwMTJmNzM5YXAxMzMyNDc',
}; // redis配置
