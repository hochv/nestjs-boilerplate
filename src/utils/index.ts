export const checkHasProperties = (object: Object) => {
  const keys = Object.keys(object);
  return !!keys.length;
};
