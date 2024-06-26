import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function SimpleDialog(props) {
  const { onClose, open, initData } = props;

  return (
    <Dialog
      PaperProps={{
        sx: {
          borderRadius: "24px",
          margin: "16px",
        },
      }}
      onClose={onClose}
      open={open}
    >
      <div style={{ backgroundColor: "#B4B4B5", padding: "30px 25px" }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          size={"small"}
          sx={{
            position: "absolute",
            right: 4,
            top: 4,
            color: "black",
          }}
        >
          <CloseIcon />
        </IconButton>
        <div
          style={{
            paddingBottom: "5px",
            fontSize: "15px",
            lineHeight: "1.2rem",
          }}
        >
          <div
            style={{
              fontSize: "17px",
              paddingBottom: "5px",
              fontWeight: 550,
            }}
          >
            Scenario:
          </div>
          {initData.scenario}
        </div>
        <hr />
        <div>
          <div
            style={{
              fontSize: "17px",
              padding: "5px 0",
              fontWeight: 550,
            }}
          >
            Goal:
          </div>
          {initData.goal}
        </div>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo({ initData }) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        style={{
          cursor: "pointer",
          border: "white 1px solid",
          borderRadius: "10px",
          padding: "5px 10px",
        }}
        onClick={handleClickOpen}
      >
        Scenario and Goal
      </div>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        initData={initData}
      />
    </div>
  );
}
