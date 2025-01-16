import axios from 'axios'

const usersInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

export { usersInstance }
