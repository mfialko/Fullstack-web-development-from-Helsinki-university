import React from 'react';
//components
import Part from './Part';


const Content = ({content}) => {

    return (
        <div>
            {content.map((item) => {
                return (
                    <Part 
                        key={'part' + item.partNum}
                        name={item.partName}
                        num={item.exercisesNum} 
                    />
                )
            })}
        </div>
    )
}

export default Content;