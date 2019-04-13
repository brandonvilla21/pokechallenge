export const timer = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}

export const getTypes = (types: any[]) => {
  return types.map((item: any) => item.type.name).join(", ");
};