import Sidebar from './Showcase-Sidebar'
import Topbar from './Showcase-Topbar'

import { container, content} from './Showcase.module.css'

export default function Showcase() {
  return (
    <div className={container}>
      <Sidebar />
      <div className={content}>
        <Topbar />
      </div>
    </div>
  )
}