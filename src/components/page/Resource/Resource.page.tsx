import Resource from '@/src/components/page/Resource/Resource'
import { SideBar } from '@/src/components/model/sidebar'
import { Header } from '@/src/components/model/header'

export const ResourcePage = () => {
  return (
    <SideBar>
      <Header />
      <Resource />
    </SideBar>
  )
}
