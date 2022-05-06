import * as React from "react";
import classNames from "classnames";

import { Link, Action } from "../../atoms";
import ImageBlock from "../../molecules/ImageBlock";
import Box from "@mui/material/Box";
import axios from "axios";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header(props) {
  const primaryColors = props.primaryColors || "colors-a";
  const headerStyles = props.styles?.self || {};
  const headerWidth = headerStyles.width || "narrow";
  return (
    <header
      className={classNames(
        "sb-component",
        "sb-component-header",
        primaryColors,
        "relative",
        headerStyles.padding || "py-5 px-4"
      )}
      data-sb-field-path={`${props.annotationPrefix}:header`}
    >
      <div className={classNames("mx-auto", mapMaxWidthStyles(headerWidth))}>
        <Link href="#main" className="sr-only">
          Skip to main content
        </Link>
        {headerVariants(props)}
      </div>
    </header>
  );
}

function headerVariants(props) {
  const headerVariant = "variant-a";
  switch (headerVariant) {
    case "variant-a":
      return headerVariantA(props);
  }
  return null;
}

let c=0;
console.log(global.sessionStorage)
function headerVariantA(props) {
  const primaryLinks = props.primaryLinks || [];
  const secondaryLinks = props.secondaryLinks || [];
  const [info, setInfo] = React.useState({ info: null });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const [alert , setAlert] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    router.push("/login");
    sessionStorage.clear()
  };

  const settingClick = () => {
      router.push('/user')
  }
  var userInfo = [];
  React.useEffect(() => {
    axios
      .get("http://192.168.31.163:3000/getUserInfo?tel=" + 919876543215)
      .then((res) => {
        userInfo = res.data.data[0];
        setInfo(userInfo);
        console.log(res);
      });
  }, []);

  let s = global.sessionStorage
  if(global.sessionStorage){
      console.log(s.length)
      c = s.length
  }
  return (
    <div className="flex items-center relative">
      {(props.logo || (props.title && props.isTitleVisible)) && (
        <div className="mr-8">{siteLogoLink(props)}</div>
      )}
      {primaryLinks.length > 0 && (
        <ul
          className="hidden lg:flex lg:items-center ml-auto space-x-8"
          data-sb-field-path=".primaryLinks"
        >
          {listOfLinks(primaryLinks)}
        </ul>
      )}
      {secondaryLinks.length > 0 && (
        <ul
          className={classNames(
            "hidden",
            "lg:flex",
            "lg:items-center",
            "space-x-8",
            primaryLinks.length > 0 ? "ml-8" : "ml-auto"
          )}
          data-sb-field-path=".secondaryLinks"
        >
          {listOfLinks(secondaryLinks)}
        </ul>
      )}
    {/* --------------------------------------------------------------------- */}
        {c>1 && secondaryLinks.length > 0 && (
        <ul
          className={classNames(
            "hidden",
            "lg:flex",
            "lg:items-center",
            "space-x-8",
            primaryLinks.length > 0 ? "ml-8" : "ml-auto"
          )}
          data-sb-field-path=".secondaryLinks"
        >
          <Box>
            <Box style={{display:'flex'}}>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
                style={{width:'20%'}}
              >
              <img
                src={"http://192.168.31.163:3000/" + info.imgurl}
                style={{ width: "100%", borderRadius: "50%" }}
              />
              </Button>
            </Box>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={settingClick}>用户设置</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </Box>
        </ul>
      )}
    </div>
  );
}

function siteLogoLink(props) {
  return (
    <Link
      href="/"
      aria-label={props.title}
      className="sb-header-logo flex items-center"
      data-sb-field-path=".title#span[1] .logo#img[1]"
    >
      {props.logo && (
        <ImageBlock
          {...props.logo}
          className={classNames("max-h-12", { "mr-2": props.isTitleVisible })}
        />
      )}
      {props.title && props.isTitleVisible && (
        <span className="text-2xl tracking-wide">{props.title}</span>
      )}
    </Link>
  );
}

function listOfLinks(links, inMobileMenu = false) {
  return links.map((link, index) => (
    <li key={index}>
      <Action
        {...link}
        className={classNames(
          inMobileMenu && link.type === "Button" ? "w-full" : ""
        )}
        data-sb-field-path={`.${index}`}
      />
    </li>
  ));
}

function mapMaxWidthStyles(width) {
  switch (width) {
    case "narrow":
      return "max-w-screen-xl";
    case "wide":
      return "max-w-screen-2xl";
    case "full":
      return "max-w-full";
  }
  return null;
}
