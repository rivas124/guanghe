import axios from "axios";
import http from "./request";

function getList() {
  return new Promise((resolve, reject) => {
    http(
      "get",
      "http://192.168.31.163:3000/getUserInfo?tel=" + 919876543215,
      ""
    ).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}

function Login(data) {
  return new Promise((resolve, reject) => {
    axios.post("http://192.168.31.163:3000/login", data).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}

function Register(data) {
  return new Promise((resolve, reject) => {
    axios.post("http://192.168.31.163:3000/register", data).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}

function UpdateAccount(data) {
  return new Promise((resolve, reject) => {
    axios.post("http://192.168.31.163:3000/updateUserInfo", data).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}

function UpdatePwd(data) {
  return new Promise((resolve, reject) => {
    axios.post("http://192.168.31.163:3000/updatePwd", data).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}

function UpdateFactor(data) {
  return new Promise((resolve, reject) => {
    axios.post("http://192.168.31.163:3000/updateFactor", data).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}

function UpdateNoti(data) {
  return new Promise((resolve, reject) => {
    axios.post("http://192.168.31.163:3000/updateNoti", data).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}

function UpdateApp(data) {
  return new Promise((resolve, reject) => {
    axios.post("http://192.168.31.163:3000/updateApp", data).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}

function GetNews() {
  return new Promise((resolve, reject) => {
    http("get", "http://192.168.31.163:3000/getNews", "").then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}

export {
  getList,
  Login,
  Register,
  UpdateAccount,
  UpdatePwd,
  UpdateFactor,
  UpdateNoti,
  UpdateApp,
  GetNews,
};

function data(arg0: string, data: any) {
  throw new Error("Function not implemented.");
}
