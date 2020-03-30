import React from 'react';
import { StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import { Card } from '../components/Card';
import { Spinner } from '../components/UI/Spinner';


export class CompletedPostScreen extends React.Component{
    constructor(){
        super()
        this.state={
            data: [],
            page: 1,
            loading: true,
            moreLoading: false
        }
    }
    componentDidMount(){
        this.getData()        
    }
    handleLoadMore = ()=>{
        this.setState({page: this.state.page+1,moreLoading:true}, this.getData)
                
    }
    getData = async () =>{
        console.log('called on page' + this.state.page);
        const url = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${this.state.page}`
        fetch(url).then(res=>res.json())
        .then(res=>{
            
            this.setState({
                data: this.state.data.concat(res),
                loading:false,
                moreLoading:false
            })
        })
    }
    render(){
    return (
        <SafeAreaView  style={styles.container}>
            {this.state.loading
            ?<Spinner size="large"/>
            :<FlatList  
            style={styles.flatListStyle}
            data={this.state.data}
            renderItem={(data)=>(<Card data={data}/>)}
            keyExtractor={(data, index)=>index.toString()}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={this.state.moreLoading?(<Spinner size="small"/>): null}
            />}
           {/* {this.state.data.map((dataItem)=> <Card data={dataItem}/>)} */}
        </SafeAreaView>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    flatListStyle:{
        width: '100%',

    }
})



