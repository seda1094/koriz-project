import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
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
        const url = `https://calm-everglades-49836.herokuapp.com/data/${this.state.page}/10`
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



