import * as React from 'react'
import classNames from 'classnames'
import ConfigContext from '../config-provider/ConfigContext'
import { getCompProps } from '../_utils'
import { Menu, Item } from './menu'
import usePopper, { PopperProps } from '../_utils/usePopper'

type MenuItem = {
  key?: string
  label: string
  href?: string
  danger?: boolean
  divided?: boolean
  disabled?: boolean
  selected?: boolean
}

export interface DropDownProps extends PopperProps {
  defaultKey?: string
  selectable?: boolean
  children?: React.ReactNode
  onItemClick?: (key: string) => void
  menu: React.ReactElement | Array<MenuItem>
}

const Dropdown = React.forwardRef<unknown, DropDownProps>((props, ref) => {
  const { getPrefixCls, prefixCls: pkgPrefixCls, compDefaultProps: userDefaultProps } = React.useContext(ConfigContext)

  // 属性需要合并一遍用户定义的默认属性
  const allProps = getCompProps('Dropdown', userDefaultProps, props)

  const {
    menu,
    disabled,
    children,
    selectable,
    onItemClick,
    defaultVisible,
    onVisibleChange,
    prefixCls: customPrefixcls,
  } = allProps

  // className前缀
  const prefixCls = getPrefixCls!(pkgPrefixCls, 'dropdown', customPrefixcls)

  const [visible, setVisible] = React.useState(!!props.visible || defaultVisible)
  React.useEffect(() => {
    setVisible(!!props.visible)
  }, [props.visible])

  const child = React.cloneElement(React.Children.only(children), {
    ref,
    className: classNames(`${prefixCls}-trigger`, children.props.className, { disabled }),
  })

  const isMenu = menu.type === Menu

  const [defaultKey, setKeyValue] = React.useState(menu.props?.defaultKey || props.defaultKey || '')

  const menuSelectable = menu.props?.selectable === undefined ? selectable : menu.props?.selectable

  const handleItemClick = (e: any) => {
    const currentTarget = e.target
    const parentTarget = currentTarget.parentNode
    const key = currentTarget.dataset?.key || currentTarget.parentNode.dataset?.key
    if (
      currentTarget.className.indexOf('disabled') === -1 &&
      parentTarget.className.indexOf('disabled') === -1 &&
      key
    ) {
      if (isMenu && menu.props.onClick) {
        menu.props.onClick(key)
      } else if (onItemClick) {
        onItemClick(key)
      }
      menuSelectable && setKeyValue(key)
      props.visible === undefined && setVisible(false)
    }
  }

  const menuElement = isMenu ? (
    React.cloneElement(menu, {
      defaultKey,
      onClick: handleItemClick,
      selectable: menuSelectable,
    })
  ) : (
    <ul className={`${prefixCls}-menu`} onClick={handleItemClick} role="menu">
      {menu.map(({ key: itemKey, label, href, danger, divided, disabled }: MenuItem) => {
        const alinkProps = {
          href,
          target: '_blank',
          rel: 'noopener noreferrer',
        }
        const key: string = itemKey || label
        const selected = selectable && String(defaultKey) === String(key)
        return (
          <li
            title={label}
            key={key}
            data-key={key}
            className={classNames(`${prefixCls}-menu-item`, {
              danger,
              divided,
              disabled,
              selected,
            })}
            role="menuitem"
          >
            {href === undefined || disabled ? (
              <span>{label}</span>
            ) : (
              <a {...alinkProps}>
                <span>{label}</span>
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )

  const handleVisibleChange = (visible: boolean) => {
    props.visible === undefined && setVisible(visible)
    onVisibleChange && onVisibleChange(visible)
  }

  const popperProps = {
    ...allProps,
    visible,
    prefixCls,
    onVisibleChange: handleVisibleChange,
  }

  return usePopper(child, menuElement, popperProps)
})

Dropdown.displayName = 'Dropdown'

interface DropdownType extends React.ForwardRefExoticComponent<DropDownProps & React.RefAttributes<HTMLElement>> {
  Menu: typeof Menu
  Item: typeof Item
}

const OuterDropdown = Dropdown as DropdownType

OuterDropdown.Menu = Menu

OuterDropdown.Item = Item

export default OuterDropdown
