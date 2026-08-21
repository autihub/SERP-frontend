import { request } from './request'

// ====== 采购 ======
export const purchaseApi = {
  /** 采购单列表 */
  list: (params: Record<string, unknown>) =>
    request({ url: '/purchase/list', method: 'get', params }),
}

// ====== 库存 ======
export const inventoryApi = {
  /** 库存列表 */
  list: (params: Record<string, unknown>) =>
    request({ url: '/inventory/list', method: 'get', params }),
}

// ====== 销售 ======
export const salesApi = {
  /** 销售单列表 */
  list: (params: Record<string, unknown>) =>
    request({ url: '/sales/list', method: 'get', params }),
}

// ====== 经营分析 ======
export const analyticsApi = {
  /** 经营概览 */
  overview: () => request({ url: '/analytics/overview', method: 'get' }),
}
