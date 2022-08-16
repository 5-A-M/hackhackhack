import axios from "axios"
import { SERVER_URL } from "../config/config"

export const chooseTable= async (id_lobby, setData)=> {
    const res= await axios({
        url: `${SERVER_URL}/api/v1/get/table/lobby`,
        method: "get",
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        params: {
          id_lobby: id_lobby
        },
        responseType: "json"
      })
      const result= await res.data
      setData(()=> result)
}