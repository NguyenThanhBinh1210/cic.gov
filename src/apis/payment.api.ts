import http from '~/utils/http'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createPayment = (body: any) => http.post('/v1/payment/create', body)
export const getPayment = (params: any) => http.get('/v1/payment/info-bank-user', { params })
