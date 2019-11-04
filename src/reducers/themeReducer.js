

// create action type
const MENUTHEME = 'MENUTHEME'





// create reducer 
export default function menuReducer(state, action) {
  if(!state) {
    return {
      menuTheme: 'home'
    }
  }

  switch (action.type) {
    case MENUTHEME:
      return {menuTheme: { ...state, ...action.menuTheme }}
    default:
      return false
  }
}




// create action update
export const changeMenuTheme = (menuTheme) => {
  return { type: MENUTHEME, menuTheme: menuTheme}
}
