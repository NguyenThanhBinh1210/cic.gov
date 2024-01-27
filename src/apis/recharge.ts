/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '~/utils/http'

export const getWallet = () => http.get(`/v1/wallet/get-wallet`)
export const getHistoryPoint = () => http.get(`/v1/wallet/user-point-history`)
export const getHistoryWallet = () => http.get(`/v1/wallet/history-user`)
export const postWithdrawt = (body: any) => http.post('/v1/wallet/withdraw', body)
export const getTiso = () => http.get(`/v1/config-transition/get`)
export const getToiThieu = () => http.get(`/v1/config-transition/get-withdraw`)

export const createOrder = (body: any) => http.post('/v1/order/create', body)
export const getHistoryOrder = () => http.get(`/v1/order/get-history-user`)
