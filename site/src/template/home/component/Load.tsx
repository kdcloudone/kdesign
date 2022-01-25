import React, { Component } from 'react'
export class Load extends Component<any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    const { style } = this.props
    return (
      <svg viewBox="0 0 80 80" style={style}>
        <defs>
          <linearGradient x1="-30.0717213%" y1="0%" x2="120.747951%" y2="128.329918%" id="linearGradient-1">
            <stop stopColor="#5F90FF" stopOpacity="0.315696023" offset="0.0655594406%"></stop>
            <stop stopColor="#FFFFFF" stopOpacity="0.4" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g id="首页" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="画板" transform="translate(-1380.000000, -909.000000)">
            <g id="demandloading" transform="translate(1380.000000, 909.000000)">
              <rect id="矩形" x="0" y="0" width="80" height="80"></rect>
              <g id="编组-2备份" transform="translate(4.000000, 4.000000)">
                <rect id="矩形" fill="#3863FF" x="40" y="0" width="32" height="32"></rect>
                <rect
                  id="矩形"
                  fill="url(#linearGradient-1)"
                  fillRule="nonzero"
                  x="0"
                  y="12"
                  width="60"
                  height="60"
                ></rect>
                <g id="load">
                  <g transform="translate(16.000000, 28.000000)" fill="#3863FF">
                    <rect id="矩形" x="0" y="11" width="28" height="6"></rect>
                    <polygon
                      id="矩形备份"
                      transform="translate(14.000000, 14.000000) rotate(90.000000) translate(-14.000000, -14.000000) "
                      points="4.20330385e-15 11 28 11 28 17 4.20330385e-15 17"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default Load
