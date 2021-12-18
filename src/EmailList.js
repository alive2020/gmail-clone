import React from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
// import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';

function EmailList() {
  return (
    <div className='emailList'>
      <div className='emailList-settings'>
        <div className='emailList-settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emailLise-settingsRight'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>

      <div className='emailList-sections'>
        <Section Icon={InboxIcon} title='Primary' color='red' selected={true} />
        <Section Icon={PeopleIcon} title='Social' color='#1a73e8' />
        <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
      </div>
      <div className='emailList-list'>
        <EmailRow
          title='Twitch'
          subject='Hey fellow streamer'
          description='This is a test'
          time='10pm'
        />
         <EmailRow
          title='Twitch'
          subject='Hey fellow streamer'
          description='This is a test'
          time='10pm'
        />
      </div>
    </div>
  );
}

export default EmailList;
