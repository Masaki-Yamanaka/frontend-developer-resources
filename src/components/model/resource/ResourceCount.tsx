import { useState, createContext, ReactNode } from 'react'

type InResourceCountContext = {
  allResourceCount?: number
  updateResourceCount: (data: any) => void
}

const ResourceCountContext = createContext<InResourceCountContext>({
  allResourceCount: 10,
  // 初期値を作成するが、eslintに引っかかるのでeslint-disableにしてます
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateResourceCount: () => {},
})

const ResourceCountProvider = ({ children }: { children: ReactNode }) => {
  const [allResourceCount, setAllResourceCount] = useState<number>(0)

  const updateResourceCount = (resourceCount: number): void => {
    setAllResourceCount(resourceCount)
  }

  return (
    <ResourceCountContext.Provider
      value={{
        allResourceCount: allResourceCount,
        updateResourceCount: updateResourceCount,
      }}
    >
      {children}
    </ResourceCountContext.Provider>
  )
}

export { ResourceCountContext, ResourceCountProvider }
