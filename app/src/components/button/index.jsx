import React from 'react';
import { Button } from '@material-ui/core';
import { concatWithNumber } from 'utils/concatWithNumber';

export const CustomCoolButton = (props) => {
    return (
        <Button
            {...props}
            color="primary"
            variant="contained"
        >
            {
                concatWithNumber(props.text, 1234)
            }
        </Button>
    )
};
