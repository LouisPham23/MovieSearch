import React from "react";

import { makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const Details = ({ handleClose, handleOpen, open, props }) => {
  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));

  const classes = useStyles;
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* <div>
              <h3>{props.Title}</h3>
              <img src={props.Poster} alt="title: link" />
              <h3>{props.Rated}</h3>
              <h4>{props.Year}</h4>
              <h5>{props.Released}</h5>
              <h6>{props.Genre}</h6>
              <h6>{props.Actor}</h6>
              <p>{props.Plot}</p>
              <h6>{props.imdbRating}</h6>
            </div> */}
            <h1>Hello modal</h1>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Details;
