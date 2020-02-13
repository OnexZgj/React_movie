import React from 'react';
import fetchJsonp from 'fetch-jsonp'
import {Spin, Alert,Pagination } from 'antd';
import {MovieItem} from "./MovieItem";

//电影列表主键
export class MovieListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1,
            isLoading: true,
            total: 0,
            pageSize: 10,
            movieType: props.match.params.type
        }
    }

    componentWillMount() {
        this.loadMovieList()
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    };

    loadMovieList = () => {

        const start = this.state.pageSize * (this.state.nowPage - 1)

        const url = 'http://api.douban.com/v2/movie/' + this.state.movieType + '?apikey=0df993c66c0c636e29ecbb5344252a4a&start=' + start + '&count=' + this.state.pageSize

        fetchJsonp(url)
            .then(function (response) {
                return response.json()
            }).then( data=> {
            console.log('parsed json', data)
            console.log(this)
            this.setState({
                movies: data.subjects,
                isLoading: false,
                total: data.total
            })
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }

    renderList = () => {
        if (this.state.isLoading) {
            return <Spin tip="正在加载中，请稍候...">
                <Alert
                    message="正在请求电影列表"
                    description="精彩马上呈现..."
                    type="info"
                />
            </Spin>
        } else {
            return <div>
                <div style={{display:'flex',flexWrap:'wrap',text_align:'center',margin:'0 auto'}}>
                    {this.state.movies.map(item => {
                        return <MovieItem key = {item.id} {...item}></MovieItem>
                    })}
                </div>
                <div><Pagination onChange={this.pageChanged} defaultCurrent={this.state.nowPage} total={this.state.total } pageSize={this.state.pageSize} /></div>
            </div>
        }
    }
    //组件接受新属性
    componentWillReceiveProps(nextProps) {
        this.setState({
            nowPage: parseInt(nextProps.match.params.page) || 1,
            isLoading: true,
            movieType: nextProps.match.params.type
        },function () {
            this.loadMovieList()
        })

    }

    pageChanged= (page) =>{
        //手动实现BOM对象，操作路由跳转，实现方式不好
        window.location.href="#/movie/"+this.state.movieType+"/"+page
        // console.log(this)
        // this.props.histroy.push('/movie/'+this.state.movieType+"/"+page)
    }

};