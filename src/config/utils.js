import Vue from 'vue'
import store from '../store'
export const uploadImgBox = async (data) => {
        try {

            store.commit('changDialogImgVisible',data)
        } catch (error) {
            // Vue.prototype.$message.error('提交失败,请重试！')
        }

};
export const deleImg = async (data) => {
    try {
        store.commit('deleImgSrc',data)
    } catch (error) {
        // Vue.prototype.$message.error('提交失败,请重试！')
    }

};


