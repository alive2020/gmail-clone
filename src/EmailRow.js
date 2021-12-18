import React from 'react';
import './EmailRow.css';
import { Checkbox, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

function EmailRow({ title, subject, description, time, id }) {
  return (
    <div className='emailRow'>
      <div className='emailRow-options'>
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className='emailRow-title'>{title}</h3>
      <div className='emailRow-message'>
        <h4>
          {subject}{' '}
          <span className='emailRow-description'>- {description}</span>
        </h4>
      </div>
      <p className='emailRow-time'>{time}</p>
    </div>
  );
}

export default EmailRow;
