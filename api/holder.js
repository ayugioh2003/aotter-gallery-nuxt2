import { useContext } from '@nuxtjs/composition-api'

export const holderApi = () => {
  const { $api } = useContext()

  const fetchPhotos = async () => {
    const res = await $api.get('https://jsonplaceholder.typicode.com/photos')
    return res
  }

  return {
    fetchPhotos,
  }
}
