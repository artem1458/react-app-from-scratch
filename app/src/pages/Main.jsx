import React from 'react';
import { CustomCoolButton } from 'components/button';

export const Main = () => {
    const [count, setCount] = React.useState(0);

    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);

    return (
        <div className="main-page">
            <div className="counter-wrapper">
                { count }
            </div>
            <div className="buttons-wrapper">
                <CustomCoolButton onClick={dec} text="Dec" />
                <CustomCoolButton onClick={inc} text="Inc" />
            </div>
        </div>
    );
}
