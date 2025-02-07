import React from 'react'


interface DynamicIconProps {
  name: string;
}

const DynamicIcon = ({ name }: DynamicIconProps) => {
  return (
    <>
      <i className={`devicon-${name}-plain colored`}></i>
    </>
  )
}

export default DynamicIcon
