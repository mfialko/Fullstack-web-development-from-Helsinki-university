import React from 'react';


const Content = ({content}) => {

    return (
        <>
            {content.map((item) => {
                return (<p key={'part' + item.partNum}>
                    {item.partName} {item.exercisesNum}
                </p>)
            })}
        </>
    )
}

export default Content;