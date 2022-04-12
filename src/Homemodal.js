import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import { AiOutlineClose } from "react-icons/ai";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { SubscriptionsRounded } from "@material-ui/icons";
import axios from "axios";
import { useNavigate} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '15ch',
    },
  },
}));

export default function Homemodal () {
    const classes = useStyles();
    const navigate = useNavigate();
    
    const handleSubmit = e => {
      e.preventDefault();
      const subscribe = document.getElementById("subscribe").value;
      axios({
        method: "POST",
        url: "/api/form",
        data: {
          subscribe: subscribe,
        }
      });
      document.getElementById("contact-form").reset();
      navigate.replace('/submit')
    };
  return (
    <>
            <div className='home_popup'>
                <Modal.Dialog className='home_modal'>
          <Modal.Header closeButton className='modal_cross_btn'> <AiOutlineClose/>
          </Modal.Header>
          <div className='modal_content'>
            <div className='modal_inner_content'>
            <Modal.Body>
            <h6 class="modal_title">Subscribe to our newsletter for updates</h6>
            <p className='modal_subtitle'>Get 30% off on our new collection</p>
            <form autoCorrect="off" className="subscribe-form" onSubmit={e => handleSubmit(e)}  >
                      <div className="form-row">
                        <div className="form-group">
                          <TextField required label="Email Address" type="email" className="email_form" margin="normal" placeholder="Email Address" />
                        </div>
                        <div className="subscribe-form-group">
                          <Button variant="contained" size="large" type="submit" className={classes.button} endIcon={<SubscriptionsRounded />}> Subscribe</Button>
                        </div>
                      </div>
                    </form>
            </Modal.Body>
        </div>
          </div>
        </Modal.Dialog>
        </div>
    </>
  )
} 
