export const useErrorAPI = (obj: object) => {
  return Object.hasOwn(obj, 'messageNumber')
}
