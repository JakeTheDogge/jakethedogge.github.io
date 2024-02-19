export const Arrow = ({direction, className}) => {
  const yellow = '#EBFF00'
  if (direction === 'down') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 320 512" fill={yellow} className={className} >
        <path
          d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/>
      </svg>
    )
  }

  if (direction === 'left') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 256 512" fill={yellow} >
        <path
          d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/>
      </svg>
    )
  }

  if (direction === 'right') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 256 512" fill={yellow} >
        <path
          d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
      </svg>
    )
  }

  return (<svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 320 512" fill={yellow} className={className}>
    <path
      d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
  </svg>)
}