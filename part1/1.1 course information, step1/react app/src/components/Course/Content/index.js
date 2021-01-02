import React from 'react';

//components
import Part from './Part';


const Content = ({content}) => {

    return (
        <div>
            {content.map((item, index) => {
                return (
                    <Part 
                        key={'part' + index}
                        name={item.partName}
                        num={item.exercisesNum} 
                    />
                )
            })}
        </div>
    )
}

export default Content;