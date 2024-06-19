import React from 'react'

const AccordionSection = ({
    isOpen,
    displayStatus,
    label,
    onClick,
    children 
}) => {
    const onClickLabel = () =>{
        onClick(label)
    }
  return (
    <div
    className={
        isOpen?
        "accordionOpen accordionBorder"
        :"accordionClosed accordionBorder  "
    }
    style={displayStatus === "1"?{}:{display:"none"}}
    >
   <div
   onClick={onClickLabel}
   style={{cursor:"pointer"}}
   >
   {isOpen && <div>{children}</div>}
   </div>
    </div>
  )
}

export default AccordionSection