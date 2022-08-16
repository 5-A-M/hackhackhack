import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import PopupAuthentication from './PopupAuthentication';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" className="login" style={{textTransform: "capitalize", fontSize: 16, color: "#fff"}} onClick={handleClickOpen}>
        Đăng nhập
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <PopupAuthentication handleClose={handleClose} is_login={true} title={"Đăng nhập"} />
      </Dialog>
    </div>
  );
}
