function omit(obj: Object, fields: string[]) {
  // eslint-disable-next-line prefer-object-spread
  const shallowCopy: any = Object.assign({}, obj);
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

export const sum = (x: number, y: number) => {
  return x + y;
};
export default omit;
