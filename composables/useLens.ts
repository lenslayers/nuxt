export const useLens = () => {
  const user = ref({
    address: '0x0',
    username: 'username',
  }) as any
  return {
    user
  }
}
