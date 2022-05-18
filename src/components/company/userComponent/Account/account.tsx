import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { getList, UpdateAccount } from "../../../../configs/componyApi/api";

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
        <Grid direction="row-reverse" justifyContent="space-between">
          <Grid>
            <Typography variant="h4">Account Settings</Typography>
          </Grid>
          <FormControl variant="outlined" margin="normal">
            <Typography variant="subtitle2">First Name</Typography>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              sx={{width:'100%',marginRight:'8rem'}}
            />
            <Typography variant="subtitle2">Last Name</Typography>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              sx={{width:'100%',marginRight:'8rem'}}
            />
            <Typography variant="subtitle2">First Name</Typography>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <Typography variant="subtitle2">Last Name</Typography>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <FormControl variant="outlined" margin="normal">
            <Typography variant="subtitle2">First Name</Typography>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <Typography variant="subtitle2">Last Name</Typography>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <Typography variant="subtitle2">First Name</Typography>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <Typography variant="subtitle2">Last Name</Typography>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <Grid>
            <TextField
              multiline
              rows={4}
              fullWidth
              sx={{width: '30vw'}}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
