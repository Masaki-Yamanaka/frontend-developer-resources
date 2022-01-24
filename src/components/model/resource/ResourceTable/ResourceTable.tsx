import styles from './ResourceTable.module.scss'
import { useModal } from '@/src/components/hooks/useModal'
// import { formatDateToSlashWithTime } from '@/src/components/utils/useFormatData'
// import Link from 'next/link'
import { Resource } from '@/src/API'
import { useResource } from '@/src/components/model/resource'
import { AiOutlinePlus, AiOutlineMore, AiFillCheckCircle } from 'react-icons/Ai'
import { ResourceTableProps } from '@/src/types'
import { Checkbox } from '@/src/components/ui/Checkbox'

export const ResourceTable = (props: ResourceTableProps) => {
  const { openModal } = useModal()
  // const { isCurrentUserChecked, deleteResource, updateResource, getCategoryName, handleCheck } =
  //   useResource()

  const openEditModal = (resource: Resource) => {
    props.updateResource(resource)
    openModal()
  }

  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.header}>
          <th className={`${styles.th} ${styles.flex}`}>
            <div className={styles.checkCircle}>
              <AiFillCheckCircle size={20} />
            </div>
            CHECK
          </th>
          <th className={styles.th}>TITLE</th>
          <th className={styles.th}>CATEGORY</th>
          <th className={styles.th}></th>
        </tr>
        {props.resources.map((resource: Resource) => (
          <tr className={styles.tr} key={resource.id}>
            <td className={styles.td}>
              <Checkbox
                checked={props.isCurrentUserChecked(resource)}
                handleCheck={() => props.handleCheck(resource)}
                resource={resource}
              />
            </td>

            <td className={styles.td} onClick={() => openEditModal(resource)}>
              {resource.title}
            </td>

            <td className={styles.td}>{props.getCategoryName(resource.categoryId)}</td>
            <td className={`${styles.td} ${styles.icon}`}>
              <AiOutlineMore size={30} />
            </td>
          </tr>
        ))}
        <tr className={`${styles.tr} ${styles.footer}`} onClick={props.openCreateModal}>
          <th className={`${styles.th} ${styles.add}`}>
            <AiOutlinePlus size={30} />
            <div className={styles.new}>NEW</div>
          </th>
          <th className={styles.th}></th>
          <th className={styles.th}></th>
          <th className={styles.th}></th>
        </tr>
      </tbody>
    </table>
    // <table className={styles.table}>
    //   <tbody>
    //     <tr className={styles.tr}>
    //       <th className={styles.th}></th>
    //       <th className={styles.th}>カテゴリー</th>
    //       <th className={styles.th}>タイトル</th>
    //       <th className={styles.th}>更新日</th>
    //       <th className={styles.th}>完了者</th>
    //       <th className={styles.th}>編集</th>
    //       <th className={styles.th}>削除</th>
    //     </tr>
    //     {resources.map((resource: Resource) => (
    //       <tr className={styles.tr} key={resource.id}>
    //         <td className={styles.td}>
    //           <form className={styles.form}>
    //             <input
    //               type='checkbox'
    //               checked={isCurrentUserChecked(resource)}
    //               onChange={() => {
    //                 handleCheck(resource)
    //               }}
    //             />
    //           </form>
    //         </td>
    //         <td className={styles.td}>{getCategoryName(resource.categoryId)}</td>
    //         <Link href={resource.url} passHref>
    //           <td className={styles.td}>{resource.title}</td>
    //         </Link>

    //         <td className={styles.td}>{formatDateToSlashWithTime(resource.createdAt)}</td>
    //         <td className={styles.td} style={{ display: 'flex' }}>
    //           {resource.users
    //             ? resource.users.items.map((item) => (
    //                 <div className={styles.image} key={item.id}>
    //                   {/* TODO:後でnext/imageを使う */}
    //                   <img src={item.user.profileImagePath} alt='sample' className={styles.img} />
    //                 </div>
    //               ))
    //             : null}
    //         </td>
    //         <td className={styles.td} onClick={() => openEditModal(resource)}>
    //           編集
    //         </td>
    //         <td className={styles.td} onClick={() => deleteResource(resource)}>
    //           削除
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  )
}
