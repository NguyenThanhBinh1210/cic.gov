import http from '~/utils/http'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createPayment = (body: any) => http.post('/v1/payment/create', body)
export const getPayment = (params: any) => http.get('/v1/payment/info-bank-user', { params })

export const getClientNewCode = () => http.get(`/v1/code-random/get-client-new-code`)
export const getFashionNewCode = () => http.get(`/v1/code-random/get-fashion-new-code`)
export const getProductNewCode = () => http.get(`/v1/code-random/get-product-new-code`)
export const getClientCode = () => http.get(`/v1/code-random/get-client-code`)
export const getFashionCode = () => http.get(`/v1/code-random/get-fashion-code`)
export const getProductCode = () => http.get(`/v1/code-random/get-product-code`)
