import { ProgressBar } from "@/src/components/ui/ProgressBar"

export const SidebarProgressRanking = () => {
  return (
    <>
      <p>進捗率ランキング</p>
      <ProgressBar progressRate={40} />
    </>
  )
}