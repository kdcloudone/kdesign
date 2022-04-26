import React from 'react'
import classNames from 'classnames'

type ItemType = {
  key: string
  item: React.ReactNode
}
interface displayListProps {
  parentPrefixCls: string
  items: ItemType[]
  currentIndex: number
}
export const DisplayList = React.forwardRef((props: displayListProps, ref: any) => {
  const { items, parentPrefixCls, currentIndex } = props
  const itemRef = React.useRef<HTMLElement>(null)
  const displayListPrefixCls = `${parentPrefixCls}-list-display`
  const listPrefixCls = `${parentPrefixCls}-list`
  const renderItems = () => {
    return items.map((item, index) => {
      const opacityClassName =
        index === currentIndex ? `${listPrefixCls}-item-not-hidden` : `${listPrefixCls}-item-hidden`
      return (
        <li className={classNames(`${listPrefixCls}-item`, opacityClassName)} key={index} ref={itemRef as any}>
          {item}
        </li>
      )
    })
  }
  return (
    <ul className={`${listPrefixCls} ${displayListPrefixCls}`} ref={ref as any}>
      {renderItems()}
    </ul>
  )
})
