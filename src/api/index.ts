import { AXIOS_INSTANCE } from 'libs/axios-instance/axios-instance'

// Example of fetch api functions
export const getData = async () => {
  const { data } = await AXIOS_INSTANCE.get('/')

  return data
}
