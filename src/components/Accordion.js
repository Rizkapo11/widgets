import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState (null);

    const onTitleClicked = (index) => {
        setActiveIndex(index)
    }
    const RenderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '' ;
        return (
        <React.Fragment key ={item.title} >
            <div className = {`title ${active}`} onClick={() => onTitleClicked(index)} >
                <i classsName = "dropdown icon"></i>
                {item.title}
            </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
        </React.Fragment>
        )
    });


    return <div className = "ui styled accordion"> {RenderedItems}</div>
};
export default Accordion;