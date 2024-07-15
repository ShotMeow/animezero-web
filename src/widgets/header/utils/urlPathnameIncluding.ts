const urlPathnameIncluding = (url: string, pathname: string) => {
  return url.split("/")[1] === pathname.split("/")[1];
};

export default urlPathnameIncluding;
