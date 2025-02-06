import axios from 'axios'

const usersInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

const membersInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

export { usersInstance, membersInstance }
