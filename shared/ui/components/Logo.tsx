import classNames from 'classnames'

export interface LogoProps {
  className?: string
  smLogoClassName?: string
  mdLogoClassName?: string
}

export const Logo = (props: LogoProps) => {
  const { className, smLogoClassName, mdLogoClassName } = props

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" zoomAndPan="magnify" viewBox="0 0 900 506.249968" height="75" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/></defs><g fill="#ffffff" fill-opacity="1"><g transform="translate(39.927546, 302.965856)"><g><path d="M 107.015625 0 L 86.984375 0 L 86.859375 -58.03125 L 65.4375 -8.921875 L 50.640625 -8.921875 L 29.203125 -58.03125 L 29.203125 0 L 8.921875 0 L 8.921875 -89.40625 L 33.796875 -89.40625 L 58.03125 -36.21875 L 82.265625 -89.40625 L 107.015625 -89.40625 Z M 107.015625 0 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(155.997294, 302.965856)"><g><path d="M 54.96875 -28.828125 L 54.96875 0 L 32.390625 0 L 32.390625 -28.1875 L -0.640625 -89.28125 L 22.0625 -89.28125 L 43.625 -50.375 L 64.671875 -89.28125 L 87.375 -89.28125 Z M 54.96875 -28.828125 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(242.730735, 302.965856)"><g/></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(272.322149, 302.965856)"><g><path d="M 78.828125 -71.421875 L 31.625 -71.421875 L 31.625 -53.703125 L 74.234375 -53.703125 L 74.234375 -35.84375 L 31.625 -35.84375 L 31.625 -17.859375 L 80.234375 -17.859375 L 80.234375 0 L 8.921875 0 L 8.921875 -89.28125 L 78.828125 -89.28125 Z M 78.828125 -71.421875 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(358.290267, 302.965856)"><g><path d="M 58.03125 0 L 34.5625 0 L -0.125 -89.28125 L 24.109375 -89.28125 L 46.9375 -23.59375 L 69.765625 -89.28125 L 93.109375 -89.28125 Z M 58.03125 0 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(451.273614, 302.965856)"><g><path d="M 107.015625 0 L 86.984375 0 L 86.859375 -58.03125 L 65.4375 -8.921875 L 50.640625 -8.921875 L 29.203125 -58.03125 L 29.203125 0 L 8.921875 0 L 8.921875 -89.40625 L 33.796875 -89.40625 L 58.03125 -36.21875 L 82.265625 -89.40625 L 107.015625 -89.40625 Z M 107.015625 0 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(567.343377, 302.965856)"><g/></g></g><g fill="#00fab2" fill-opacity="1"><g transform="translate(596.942171, 302.965856)"><g><path d="M 109.3125 0 L 85.96875 0 L 69.390625 -61.734375 L 52.546875 0 L 29.078125 0 L -0.125 -89.28125 L 24.109375 -89.28125 L 41.578125 -23.59375 L 58.671875 -89.28125 L 80.859375 -89.28125 L 98.34375 -23.59375 L 115.5625 -89.28125 L 138.765625 -89.28125 Z M 109.3125 0 "/></g></g></g><g fill="#00fab2" fill-opacity="1"><g transform="translate(734.822825, 302.965856)"><g><path d="M 31.625 0 L 8.921875 0 L 8.921875 -89.28125 L 31.625 -89.28125 Z M 31.625 0 "/></g></g></g><g fill="#00fab2" fill-opacity="1"><g transform="translate(775.383466, 302.965856)"><g><path d="M 91.328125 0 L 71.296875 0 L 30.234375 -54.96875 L 30.234375 0 L 8.921875 0 L 8.921875 -89.28125 L 28.953125 -89.28125 L 70.15625 -34.1875 L 70.15625 -89.28125 L 91.328125 -89.28125 Z M 91.328125 0 "/></g></g></g><g fill="#8f00ff" fill-opacity="1"><g transform="translate(875.641624, 302.965856)"><g/></g></g></svg>
    </>
  )
}
