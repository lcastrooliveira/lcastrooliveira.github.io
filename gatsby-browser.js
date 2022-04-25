// import { wrapRootElement as wrap } from './wrap-root-element'
import { wrapPageElement as wrap } from './wrap-page-element'
import SideBarBtns from './src/components/scrolltop/scrolltop'

export const wrapPageElement = wrap

export const onRouteUpdate = () => {
  const sidebarbtns = new SideBarBtns()
  if (document.getElementById('scroll-btn')) {
    sidebarbtns.Initialize()
    console.log('initized')
  }
}
