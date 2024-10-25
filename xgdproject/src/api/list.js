import request from './request/request'


// 获取图片列表接口
export const getCheckInfoAPI = (page) => {    
  return request({
    url: `/api/page/disAll/${page}`,
    method:'get'
  })
}