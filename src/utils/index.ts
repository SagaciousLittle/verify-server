
/**
 * Api Code
 *
 * @export
 * @enum {number}
 */
export enum ApiCode {
  SUCCESS,
  ERROR,
  TIMEOUT,
  // 被攻击
  ATTACKED,
  // 用户未注册
  UNREGISTERED,
  // 密码错误
  PASSWORD_WRONG,
}


/**
 * api包装器
 *
 * @export
 * @template T data类型
 * @param {T} data data
 * @param {ApiCode} [code=ApiCode.SUCCESS] 默认成功
 * @returns 统一格式的API返回值
 */
export function ApiWarpper<T> (data: T, code: ApiCode = ApiCode.SUCCESS) {
  return {
    data,
    code,
  }
}

/**
 * 从ENV获取参数
 *
 * @param {string} key
 * @returns
 */
export function getValFromEnv (key: string) {
  const v = process.env[key]
  if (!v) throw new Error(`the key: ${key} is not found in process.nev, you should config in env file`)
  return v
}