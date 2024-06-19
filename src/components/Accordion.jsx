import React, { useState } from 'react'
import PropTypes from "prop-types"
import AccordionSection from './AccordionSection';

const Accordion = (props) => {
    const [openSection, setOpenSection] = useState({});
    const onClickHandle = label=>{
        const {allowMultipleOpen } = props;
        const  isOpen = !!openSection[label];
        if(allowMultipleOpen){
            setOpenSection(prevState=>({
                ...prevState,
                [label]:!isOpen,
            }))
        }else{
            setOpenSection({[label]:!isOpen})  
        }
    }
  return (
    <div>
        {props.children?.map(child=>(
            <AccordionSection
            key={child.props.label}
            isOpen={!!openSection[child.props.label]}
            label={child.props.label}
            displayStatus={child.props.displayStatus}
            onClick={onClickHandle}
            >
                {child.props.children}
            </AccordionSection>
        ))}
    </div>
  )
}

export default Accordion;
Accordion.propTypes = {
    allowMultipleOpen:PropTypes.bool,
    childern:PropTypes.instanceOf(Object)
}