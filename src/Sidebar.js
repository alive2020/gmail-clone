import React from 'react';
import { Button } from '@mui/material';
import './Sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className='sidebar'>
      <Button
        className='sidebar-compose'
        startIcon={<AddIcon fontSize='large' />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title='Inbox'
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title='Starred' number={54} />
      <SidebarOption Icon={AccessTimeFilledIcon} title='Snoozed' number={54} />
      <SidebarOption Icon={LabelImportantIcon} title='Important' number={54} />
      <SidebarOption Icon={NearMeIcon} title='Sent' number={54} />
      <SidebarOption Icon={NoteIcon} title='Drafts' number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title='More' number={54} />

      <div className='sidebar-footer'>
        <h3>Meet</h3>
        <SidebarOption Icon={VideocamIcon} title='New Meeting' />
        <SidebarOption Icon={KeyboardIcon} title='Join a meeting' />
      </div>
    </div>
  );
}

export default Sidebar;
