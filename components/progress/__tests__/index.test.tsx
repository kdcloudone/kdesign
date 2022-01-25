import React from 'react'
import { render, mount } from 'enzyme'
import mountTest from '../../../tests/shared/mountTest'
import Progress, { ProgressType } from '../index'
import { ProgressTypes, ProgressStatuses } from '../progress'

describe('Progress', () => {
  // mount test
  mountTest(Progress)
  ProgressTypes.forEach((type) => {
    mountTest(() => <Progress type={type} />)
  })

  it('renders correctly', () => {
    ProgressTypes.forEach((type) => {
      expect(render(<Progress type={type} />)).toMatchSnapshot()
    })

    ProgressStatuses.forEach((status) => {
      expect(render(<Progress status={status} />)).toMatchSnapshot()
    })
  })

  it('warns if type is wrong', () => {
    const mockWarn = jest.fn()
    jest.spyOn(console, 'warn').mockImplementation(mockWarn)
    const type = 'Wrong Type' as any as ProgressType
    render(<Progress type={type} />)
    expect(mockWarn).toHaveBeenCalledTimes(1)
    expect(mockWarn.mock.calls[0][0]).toMatch("Warning: [kdesign]-progress: cannot found progress type 'Wrong Type'")
  })

  it('warns if width use wrong', () => {
    const mockWarn = jest.fn()
    jest.spyOn(console, 'warn').mockImplementation(mockWarn)
    render(<Progress width={10} />)
    expect(mockWarn).toHaveBeenCalledTimes(1)
    expect(mockWarn.mock.calls[0][0]).toMatch(
      'Warning: [kdesign]-progress: props width only effect when type is circle',
    )
  })

  it('should have displayName static property', () => {
    const wrapper = mount(<Progress />)
    expect((wrapper.type() as any).displayName).toBe('Progress')
  })

  it('should class use right', () => {
    const DefaultProgress = mount(<Progress />)
    expect(DefaultProgress.find('.kd-progress')).toHaveClassName('.kd-progress-status-normal')
    expect(DefaultProgress.find('.kd-progress')).toHaveClassName('.kd-progress-show-info')

    ProgressTypes.forEach((type) => {
      const TestProgress = mount(<Progress type={type} />)
      expect(TestProgress.find('.kd-progress')).toHaveClassName(`.kd-progress-type-${type}`)
    })

    ProgressStatuses.forEach((status) => {
      const TestProgress = mount(<Progress status={status} />)
      expect(TestProgress.find('.kd-progress')).toHaveClassName(`.kd-progress-status-${status}`)
    })
  })

  it('should props width render right', () => {
    const TestProgress = mount(<Progress type="circle" width={100} />)
    expect(TestProgress.find('.kd-progress-circle-box')).toHaveStyle('width', '100px')
  })

  it('should props percent render right', () => {
    const TestProgress = mount(<Progress percent={30} />)
    expect(TestProgress.find('.kd-progress-bg')).toHaveStyle('width', '30%')
  })

  it('should props strokeWidth render right', () => {
    const TestProgress = mount(<Progress percent={30} strokeWidth={10} />)
    expect(TestProgress.find('.kd-progress-bg')).toHaveStyle('height', '10px')
  })

  it('should props strokeColor render right', () => {
    const TestProgress = mount(<Progress percent={30} strokeColor="#333" />)
    expect(TestProgress.find('.kd-progress-bg')).toHaveStyle('background', '#333')
  })

  it('should props showInfo render right', () => {
    const LineProgress = mount(<Progress percent={30} showInfo={false} />)
    const CircleProgress = mount(<Progress type="circle" percent={30} showInfo={false} />)
    expect(LineProgress).not.toContainMatchingElement('.kd-progress-text')
    expect(CircleProgress).not.toContainMatchingElement('.kd-progress-special-text')
  })

  it("should progress's default text render right with infoPosition set", () => {
    const loadingProgress = mount(<Progress percent={30} infoPosition="bottom" />)
    const successProgress = mount(<Progress percent={100} infoPosition="bottom" />)
    const failureProgress = mount(<Progress percent={30} infoPosition="bottom" status="failure" />)
    expect(loadingProgress).toHaveText('正在加载中...')
    expect(successProgress).toHaveText('加载成功')
    expect(failureProgress).toHaveText('加载失败')
  })

  it('should gradient progress which type is circle render right', () => {
    const TestProgress = mount(
      <Progress
        type="circle"
        percent={30}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />,
    )
    expect(TestProgress).toContainMatchingElement('linearGradient')
  })
})
