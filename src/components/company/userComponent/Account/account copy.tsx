import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { useRouter } from "next/router";
import { getList, UpdateAccount } from "../../../../configs/componyApi/api";
import { width } from "@mui/system";

export function Account(userInfo: { userInfo: { tel: any } }) {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [compony, setCompony] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [alert, setAlert] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    getList().then((res: any) => {
      var userinfo = res.data[0];
      setFirstName(userinfo.firstName);
      setLastName(userinfo.lastName);
      setEmail(userinfo.email);
      setPhoneNumber(userinfo.tel);
      setCompony(userinfo.company);
      setDesignation(userinfo.Desi);
      setBio(userinfo.Bio);
    });
  }, []);

  const updateClick = () => {
    var data = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      Compony: compony,
      Desi: designation,
      Bio: bio,
      tel: phonenumber,
      oldTel: userInfo.userInfo.tel,
    };
    UpdateAccount(data).then((res: any) => {
      setAlert(true);
    });
  };

  const getback = () => {
    router.push("/");
  };
  return (
   <>
    <Box sx={{ flexGrow: 1 }}>
        <Grid><Typography variant="h4">Account Settings</Typography></Grid>
        <Grid>
        <FormControl sx={{ m: 1, width: "100%",border:'1px solid red'}} variant="outlined">
        <Typography variant="subtitle2">First Name</Typography>
        <OutlinedInput
          id="outlined-adornment-weight"
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight"
          }}
          size="small"
          sx ={{width:'30%'}}
        />
        <Typography variant="subtitle2">Last Name</Typography>
        <OutlinedInput
          id="outlined-adornment-weight"
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight"
          }}
          size="small"
          sx ={{width:'30%'}}
        />
      </FormControl>
        </Grid>
        <Grid></Grid>
        <Grid></Grid>
        <Grid></Grid>
        <Grid></Grid>
    </Box>
   </>

  );
}