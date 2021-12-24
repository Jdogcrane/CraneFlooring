export const hashToIndex = data => {
  const { hash } = window.location;
  const keys = Object.keys(data);
  
  if (!hash) return keys[0];
  
  const hashValue = hash.split('#')[1];
  const pages = keys.map(p => p.toLowerCase());
  const index = pages.indexOf(hashValue);
  return keys[index];
};
