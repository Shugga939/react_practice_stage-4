
export function phoneValidation (phone:string) {
  const reg = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  return reg.test(phone)
}

export function emailValidation (email:string) {
  const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return reg.test(email)
}
