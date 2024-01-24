/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '~/utils/http'

export const loginAccount = (body: any) => http.post('/v1/auth/login', body)
export const registerAccount = (body: any) => http.post('/v1/auth/register', body)
export const resetPassword = (body: any) => http.patch('/v1/auth/update-password', body)
