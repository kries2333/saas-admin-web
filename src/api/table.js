import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getTableData() {
  return request({
    url: 'http://localhost:8080/gaoxiaogif/get_table_data',
    method: 'post'
  })
}