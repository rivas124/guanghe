import axios from "axios";
import React from "react";
import Network2 from "./network";
import { GetNews } from "../../configs/componyApi/api";

export class News extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      newslist: [],
    };
  }
  componentDidMount() {
    GetNews().then((res: any) => {
      console.log(res);
      const newslist = res.data;
      this.setState({ newslist: newslist });
    });
  }

  render() {
    return (
      <>
        <Network2 newslist={this.state.newslist} />
      </>
    );
  }
}
