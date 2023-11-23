import { api } from 'boot/axios'

export default function UseApi() {

  const list =async () => {
    try {
        const { data } = await api.get('https://jsonplaceholder.typicode.com/todos/')
        return data
    } catch (error) {
        throw new Error(error)
    }
  }

  const post = async (form) => {
    try {
        const { data } = await api.post('https://jsonplaceholder.typicode.com/todos/', form)
        return data
    } catch (error) {
        throw new Error(error)
    }
  }

  const update = async (form) => {
    try {
        const { data } = await api.post(`https://jsonplaceholder.typicode.com/todos/${form.id}`, form)
        return data
    } catch (error) {
        throw new Error(error)
    }
  }

  const remove = async (id) => {
    try {
        const { data } = await api.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return data
    } catch (error) {
        throw new Error(error)
    }
  }


  return {
    list,
    post,
    update,
    remove
  }


}
