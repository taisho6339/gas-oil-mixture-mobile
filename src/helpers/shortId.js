const guid = () =>
  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

export default () => `${guid()}-${guid()}-${guid()}`;
