import axios from 'axios'
import { ResourceFromSpreadsheet } from '@/src/types/index'

export const useSpreadsheet = () => {
  const resourcePath =
    'https://script.google.com/macros/s/AKfycby4nW4FWv7UZW93ugwOi2y7pxj_Y5PdTws72Oo2q-2e946c2yrsjkRYcSICzoBkmYAg/exec'
  const categoryPath =
    'https://script.googleusercontent.com/macros/echo?user_content_key=gYLwEwVH0Ph0fSBOSR6yEy-UrCyh3CzM59Mblxh-SYBUFJBBd1gRl--E_RMur_E-oBNscn8hTXyOFTA6iuxaXzQZ8ndGtxoVm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnACVIRMBm0oWsF62yZD8k5FHzPbv-YWvdztBqt25CJ1_anECvqLlyrBM9sZP3Zog3_Tm-Gv-DIHhRqt5J_vSzfYTIfXSnc-DENz9Jw9Md8uu&lib=MjUeIh89f3vRMntEzJ_nUTtqg_6pkuS_N'

  const fetchCategoriesFromSpreadsheet = async (): Promise<string[]> => {
    try {
      const res = await axios.get(categoryPath)
      return res.data
    } catch (e) {
      console.error(e.message)
      return e.message
    }
  }
  const fetchResourceFromSpreadsheet = async (): Promise<ResourceFromSpreadsheet[]> => {
    try {
      const res = await axios.get(resourcePath)
      return res.data
    } catch (e) {
      console.error(e.message)
      return e.message
    }
  }

  return {
    fetchCategoriesFromSpreadsheet,
    fetchResourceFromSpreadsheet,
  }
}
