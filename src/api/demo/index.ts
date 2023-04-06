import request from '@/utils/request'
import type { AxiosPromise } from 'axios'
import type { UserInfoReq, UserInfoRes } from './types'

export const getUserInfo = (params: UserInfoReq): AxiosPromise<UserInfoRes> => {
  return request({
    url: '/user-info',
    method: 'get',
    params
  })
}
