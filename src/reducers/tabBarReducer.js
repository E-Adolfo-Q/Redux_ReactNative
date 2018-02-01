import { TabBar } from '../tabBar/NavigationConfiguration'

export const tabBarReducer = (state,action) => {  
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}