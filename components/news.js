import axios from "axios";
import React from "react"
import Network2 from "./network";

class news extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newslist:[]
        };

    }
    componentDidMount(){
        axios.get('http://192.168.31.163:3000/getNews').then((res)=>{
            const newslist = res.data.data
            this.setState({newslist:newslist});
        })
    }

    render() {
        return (
            <>
                <Network2 newslist={ this.state.newslist}/>
            </>
        );
    }
}
export default news
