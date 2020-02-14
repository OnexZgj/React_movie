// @OnexZgj
import * as React from 'react';
import {Alert, Button, Icon, Spin} from 'antd';
import fetchJsonp from "fetch-jsonp";

//电源详情组件
export class MovieDetailComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            movieInfo: {},
            isLoading: true
        }
    }

    render() {
        return <div>
            <div>
                <Button type="primary" onClick={this.goBack}>
                    <Icon type="left"/>
                    返回
                </Button>
            </div>
            {this.renderDetail()}
        </div>
    };

    //返回上一层界面
    goBack = () => {
        console.log(this.props)
        this.props.history.go(-1)
    }

    renderDetail = () => {
        if (this.state.isLoading) {
            return <Spin tip="正在加载中，请稍候...">
                <Alert
                    message="正在请求电影详情"
                    description="精彩马上呈现..."
                    type="info"
                />
            </Spin>
        } else {
            return <div style={{textAlign: 'center'}}>
                {/*<img src={this.state.movieInfo.images.large}/>*/}
                <img src='http://img1.doubanio.com/view/photo/s_ratio_poster/public/p2315672647.webp'/>
                <h1> {this.state.movieInfo.title}</h1>
                <p style={{textWeight:'300'}}> 上映年份：{this.state.movieInfo.pubdate}  语言：{this.state.movieInfo.languages.join("、")}</p>
                <p> 标签：{this.state.movieInfo.tags.join("  ")} </p>
                <p style={{textIndent:'2em',lineHeight:'30px'}}> {this.state.movieInfo.summary}</p>
            </div>
        }
    }


    componentWillMount() {
        this.loadMovieDetail()
    }

    loadMovieDetail = () => {
        const url = 'http://api.douban.com/v2/movie/subject/' + this.props.match.params.id + '?apikey=0df993c66c0c636e29ecbb5344252a4a'

        fetchJsonp(url)
            .then(function (response) {
                return response.json()
            }).then(data => {
            console.log('parsed json', data)
            console.log(this)
            this.setState({
                movieInfo: data,
                isLoading: false,
            })
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }
};