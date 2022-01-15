import styles from './ResourceTable.module.scss'
import { useModal } from '@/src/components/hooks/useModal'
import { formatDateToSlashWithTime } from '@/src/components/utils/useFormatData'
import Link from 'next/link'
import { Resource } from '@/src/API'
import { useResource } from '@/src/components/model/resource'
export const ResourceTable = () => {
  const { openModal } = useModal()
  const { resources, isCurrentUserChecked, deleteResource, updateResource, getCategoryName, handleCheck } =
    useResource()

  const openEditModal = (resource: Resource) => {
    updateResource(resource)
    openModal()
  }
  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.tr}>
          <th className={styles.th}>Check</th>
          <th className={styles.th}>カテゴリー</th>
          <th className={styles.th}>タイトル</th>
        </tr>
        {resources.map((resource: Resource) => (
          <tr className={styles.tr} key={resource.id}>
            <td className={styles.td}>
              <form className={styles.form}>
                <input
                  type='checkbox'
                  checked={isCurrentUserChecked(resource)}
                  onChange={() => {
                    handleCheck(resource)
                  }}
                />
              </form>
            </td>
            <td className={styles.td}>{getCategoryName(resource.categoryId)}</td>
            <Link href={resource.url} passHref>
              <td className={styles.td}>{resource.title}</td>
            </Link>
          </tr>
        ))}
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
