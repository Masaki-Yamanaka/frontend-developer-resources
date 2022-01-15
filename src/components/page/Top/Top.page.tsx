import { Top } from './Top'
import { SideBar } from '@/src/components/model/sidebar'
import { Header } from '@/src/components/model/header'
export const TopPage = () => (
  <>
    <SideBar>
      <Header />
      <Top />
    </SideBar>
  </>
)
