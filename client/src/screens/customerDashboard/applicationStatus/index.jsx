import React, { useState } from "react";
import { styles } from "./styles";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function customerApplicationStatus(props) {
  const mediaQuery = window.matchMedia("(max-width: 650px)");


  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post("/changeStatus", {
        applicantId: props.userData.id,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE2NjU5ODc1Njl9.ZCahkiAVSko1SoywOXXV39hBrPc7KXKhj0z6xvwnHdU",
        newStatus: "customerAccepted"
      })
      .then((res) => alert(res.data?.message));

  };

  const rejectHandler = async (e) => {
    e.preventDefault();
    axios
      .post("/changeStatus", {
        applicantId: props.userData.id,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE2NjU5ODc1Njl9.ZCahkiAVSko1SoywOXXV39hBrPc7KXKhj0z6xvwnHdU",
        newStatus : "customerRejected"
      })
      .then((res) => alert(res.data?.message));
  };

  return (
    <>
      <Container maxWidth="xl" sx={styles.container}>
        <img
          style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
          src={require("../../../assets/image/logo.png")}
          alt=""
          srcset=""
        />
        <Typography sx={styles.head}>Bulk Generation System</Typography>
        <Typography sx={styles.dashboardText}>
          Application Status Page
        </Typography>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Typography sx={styles.dashboardText}></Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Application No.</Typography>
                <Typography sx={styles.fieldData}>
                  {props.userData?.application_no}
                </Typography>
              </Box>
            </div>
            <div>
              <Typography sx={styles.dashboardText}></Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Application Status</Typography>
                <Typography sx={styles.fieldData}>{(props.userData?.application_status === "rejected")?"Rejected":(props.userData?.application_status === "customerAccepted")?"Accepted":"Pending"}</Typography>
              </Box>
            </div>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Typography sx={styles.dashboardText}>Personal Info</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Name</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.salutation+". "+props.userData?.first_name+" "+props.userData?.last_name}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Mobile Number</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.mobile_no}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Email</Typography>
                <Typography sx={styles.fieldData}>
                {props.userData?.email_id}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Designation</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.designation}</Typography>
              </Box>
            </div>
            <div>
              <Typography sx={styles.dashboardText}>
                Document Details
              </Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>{props.userData?.document_type_1}</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.document_no_1}</Typography>
              </Box>
              <Button variant="contained">view uploaded document</Button>
            </div>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Typography sx={styles.dashboardText}>Billing Address</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Establishment Name</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.billing_estb_name}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Street/ House No.</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.billing_street}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>City</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.billing_city}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Region</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.billing_region}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Country</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.billing_country}</Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Postal Code</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.billing_postal_code}</Typography>
              </Box>
            </div>

            <div>
              <Typography sx={styles.dashboardText}>
                Garbage Pickup Address
              </Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Establishment Name</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.pickup_estb_name}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Street/ House No.</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.pickup_street}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>City</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.pickup_city}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Region</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.pickup_region}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Country</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.pickup_country}</Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Postal Code</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.pickup_postal_code}</Typography>
              </Box>
            </div>
          </Box>
        </Paper>

        {/* jhsdkjfasdfhdlsakjfjshsadlfh */}
{
  (props.userData?.status==="accepted" || props.userData?.status==="customerAccepted" || props.userData?.status==="customerRejected")?
    <>
        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>
                  Frequency of Collection per day
                </Typography>
                <Typography sx={styles.fieldData}>{props.userData?.freq}</Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Customer Category</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.category}</Typography>
              </Box>
            </div>

            <div>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Area</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.area}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Rate</Typography>
                <Typography sx={styles.fieldData}>{props.userData?.rate} Rupees</Typography>
              </Box>
            </div>
          </Box>
        </Paper>
{
 (props.userData?.status==="accepted")?
        <Box>
          <Button
            sx={{ marginRight: "20px" }}
            variant="contained"
            color="success"
            onClick={submitHandler}
          >
            Accept
          </Button>
          {/* <Button  sx={{ marginRight: "20px" }} variant="contained" onClick={() => alert("Sent for review")}>
            Review
          </Button> */}
          <Button
            variant="contained"
            color="error"
            onClick={rejectHandler}
          >
            Reject
          </Button>
        </Box>:""}
        </>
        :
        ""
}
      </Container>
    </>
  );
}
