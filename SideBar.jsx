import { FullscreenExitTwoTone } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transition.create(['margin', 'width'],{
            easing
        })
    }
}))