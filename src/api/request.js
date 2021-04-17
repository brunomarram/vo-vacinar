import axios from 'axios'

const req = axios.create({
  baseURL: "http://vaccine-prediction.southcentralus.cloudapp.azure.com/api/"
})

const request = async (method, url, data) => {
  try {
    return await req.request({ method, url, data })
  } catch (ex) {
    console.log(ex)
  }
}

export default request