import http from './http'
export const derafe=(data:any)=>http.post('/user/register',data)
export const bannerApi=()=>http.get('/index-infos')
export const listApi=()=>http.get('/categories')