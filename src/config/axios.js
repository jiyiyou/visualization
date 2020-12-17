import Vue from 'vue'
import Axios from 'axios'
import qs from 'qs'
import router from '../router/router'
// import Router from 'vue-router'
// Vue.use(Router)
Axios.defaults.crossDomain = true;
Axios.defaults.withCredentials= true;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios=Axios;
// Axios.defaults.baseURL ="http://b2c.admin.com/";
// Axios.defaults.baseURL ="http://www.mingluob2c.com/";
// Axios.defaults.baseURL ="http://yanshi.mingluob2c.com/";

// Axios.defaults.baseURL ="https://www.2cshop.com/";
// Axios.defaults.baseURL ="http://yanshi.2cshop.com/";

// 全局网址http://www.wwtliu.com
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
Vue.config.productionTip = false

// Axios.request.credentials = true;
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {

    // 在发送请求之前做些什么
    // console.log("请求"+JSON.stringify(config))
    // if (config.method == "post") {
    //     config.data = qs.stringify(config.data, {indices: false})
    // }
    // if(config.method=="post" &&config.url!="http://192.168.1.179/demo_vue/public/home/demo/upload"){
    //     config.data=qs.stringify(config.data)
    // }
    config.headers.Authorization = window.sessionStorage.getItem('signature');
        // window.sessionStorage.getItem('signature');window.localStorage.getItem('signature')
    if(config.method=="post"){
        config.data=qs.stringify(config.data)
    }


    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
    // 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.data.code==401) {
        router.push('/login')
        let msg=response.data.msg
        Vue.prototype.$message.error({
            message:msg,
            duration: 1000

        })
    }
    if(response.data.code==200){
        // window.$Vue.$router.push({path: '/login'})
        let msg=response.data.msg
        Vue.prototype.$message.success({
            message:msg,
            duration: 1000

        })
    }else if(response.data.code==500){
        let msg=response.data.msg
        if(msg=="参数不能为空"){
            msg="请选择数据"
        }
        Vue.prototype.$message.error({
            message:msg,
            duration: 1000

        })
    }
    // if(response.data.status==1){
    //     Vue.prototype.$message.success(response.data.msg)
    // }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
