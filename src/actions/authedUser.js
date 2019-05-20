//cSpell: words AUTHED
export const AUTHED_USER = 'AUTHED_USER'

export function receiveAuthedUser (id){
  return{
    type: AUTHED_USER,
    id,
  }
}