import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        namesPage: 'block',
        scorePage: 'none',
        standingsPage: 'none',
        teamsPage: 'none',
        date: 'DD/MM/YY',
        team1: 'LEFT',
        team2: 'RIGHT',
        score1: 0,
        score2: 0,
        standing1:[],
        standing2: [],
        gameRecord: [],
        teamRankings:[{rank: 'Rank',
                       country: 'Country',
                       points: 'Points',
                       image: 'https://yt3.ggpht.com/ytc/AAUvwnhNPOfh0YxMODwkOcsY-aJyeMqUrMxXdXQMpBcyTQ=s900-c-k-c0x00ffffff-no-rj',
                    },
                    {  rank: '1',
                       country: 'China',
                       points: '344.000',
                       image: 'https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg',
                    },
                    {  rank: '2',
                       country: 'Poland',
                       points: '338.000',
                       image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/255px-Flag_of_Poland.svg.png',
                    },
                    {  rank: '3',
                       country: 'Russia',
                       points: '312.000',
                       image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png',
                    },
                    {  rank: '4',
                       country: 'Korea',
                       points: '290.000',
                       image: 'https://cdn.britannica.com/49/1949-004-8818300C/Flag-South-Korea.jpg',
                    },
                    {  rank: '5',
                       country: 'USA',
                       points: '288.000',
                       image: 'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg',
                    },
                    {  rank: '6',
                       country: 'Italy',
                       points: '286.000',
                       image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png',
                    },
                    {  rank: '7',
                       country: 'Estonia',
                       points: '228.000',
                       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/255px-Flag_of_Estonia.svg.png',
                    },
                    {  rank: '8',
                       country: 'Ukraine',
                       points: '212.000',
                       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Ukraine_%28pantone_colors%29.svg/255px-Flag_of_Ukraine_%28pantone_colors%29.svg.png',
                    },
                    {  rank: '9',
                       country: 'France',
                       points: '205.000',
                       image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png',
                    },
                    {  rank: '10',
                       country: 'Hungary',
                       points: '178.000',
                       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/255px-Flag_of_Hungary.svg.png',
                    },
                    ]
    }
    
    namesPagePress = () => this.setState(state => ({
        namesPage: 'block',
        scorePage: 'none',
        standingsPage: 'none',
        teamsPage: 'none',
    }));

    scorePagePress = () => this.setState(state => ({
        namesPage: 'none',
        scorePage: 'block',
        standingsPage: 'none',
        teamsPage: 'none',
    }));

    standingsPagePress = () => this.setState(state => ({
        namesPage: 'none',
        scorePage: 'none',
        standingsPage: 'block',
        teamsPage: 'none',
    }));
    teamsPagePress = () => this.setState(state => ({
        namesPage: 'none',
        scorePage: 'none',
        standingsPage: 'none',
        teamsPage: 'block',
    }));

    changeSc1 = () => {
        this.setState({ 
            score1: this.state.score1 + 1,
        })
    }
    changeSc2 = () => {
        this.setState({ 
            score2: this.state.score2 + 1,
        })
    }
    double = () => {
        this.setState({ 
            score1: this.state.score1 + 1,
            score2: this.state.score2 + 1,
        })
    }
    priority = () => {
        if (Math.floor(Math.random()*10) >= 5) {
            this.setState({ 
                score1: this.state.score1 + 1,
            })
        } else {
            this.setState({ 
                score2: this.state.score2 + 1,
            })
        } 
    }

    submit = () => {
        if ((this.state.score1 == 15 || this.state.score2 == 15) &&(this.state.score1>this.state.score2)){
            this.state.gameRecord.splice(this.state.gameRecord.length, 0, {
                date: this.state.date,
                score1: this.state.score1,
                score2: this.state.score2,
            },),
            this.setState({ 
                standing1: this.state.standing1 + '-1',
                standing2: this.state.standing2 + '-0',
                score1: 0,
                score2: 0,
                date: 'DD/MM/YY',
            })
        } else if ((this.state.score1 == 15 || this.state.score2 == 15) &&(this.state.score1<this.state.score2)){
            this.state.gameRecord.splice(this.state.gameRecord.length, 0, {
                date: this.state.date,
                score1: this.state.score1,
                score2: this.state.score2,
            },),
            this.setState({ 
                standing1: this.state.standing1 + '-0',
                standing2: this.state.standing2 + '-1',
                score1: 0,
                score2: 0,
                date: 'DD/MM/YY',
            })
        } 
    }

    render() {
        return (
            <View style={styles.container}>
            {/*logo*/}
                <View style={styles.titleContainer}>
                    <Image
                        source={{ uri: 'https://cdn.freelogovectors.net/wp-content/uploads/2020/03/fie-logo-international-fencing-federation.png' }}
                        style={{ height: deviceHeight/4, width: deviceWidth/3}}
                    ></Image>
                </View>
            {/*background*/}       
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://st3.depositphotos.com/1792747/i/600/depositphotos_171805412-stock-photo-colored-smokey-background.jpg'}}
                    style={{width: deviceWidth, height: 5.4*(deviceHeight/7)}}
                >
                
                {/*name page*/}
                    <View style={{ display: this.state.namesPage}}>
                        <View style={[{height: 4*(deviceHeight/7),},styles.contentContainer]}>
                            <Text style={styles.titleText}>
                                Change Team Names   
                            </Text>
                            <View style={styles.input}>
                                <TextInput style={styles.team1}
                                onChangeText={(team1) => this.setState({team1})}
                                value={this.state.team1}
                                style={{fontStyle: 'italic', fontSize: deviceHeight/27, color: 'grey', textAlign:'center'}}
                                />
                            </View>
                            <View style={styles.input}>
                                <TextInput style={styles.team2}
                                onChangeText={(team2) => this.setState({team2})}
                                value={this.state.team2}
                                style={{fontStyle: 'italic', fontSize:deviceHeight/27, color: 'grey',textAlign:'center'}}
                                />
                            </View>
                        </View> 
                        <TouchableHighlight style={[{height: (deviceHeight/15),},styles.contentContainer]}
                                            onPress= {this.teamsPagePress}>
                            <Text style={{fontSize:deviceHeight/27, color: 'grey', paddingTop:10}}>
                                See other teams  
                            </Text>
                        </TouchableHighlight> 
                    </View>
                {/*teams page*/}
                    <View style={{ display: this.state.teamsPage}}>
                        <View style={{height: deviceHeight/1.4,alignItems:'center'}}>
                            <View style={[{height: (deviceHeight/7),},styles.contentContainer]}>
                                <Text style={{color:'black', fontSize: 22, fontWeight:'bold'}}>
                                    Senior Women's Epee Teams and Rankings  
                                </Text>
                            </View>
                            <ScrollView> 
                                {this.state.teamRankings.map((ranking) => (
                                    <View>
                                        <View style={styles.teamContainer}>
                                            <Image
                                                source={{ uri: ranking.image }}
                                                style={{ height: deviceHeight/15, width: deviceWidth/5,borderWidth: 1}}
                                            ></Image>
                                            <Text style={styles.recordText}>
                                                {ranking.rank}
                                            </Text>
                                            <Text style={styles.recordText}>
                                                {ranking.country}
                                            </Text>
                                            <Text style={styles.recordText}>
                                                {ranking.points}
                                            </Text>
                                            <Text style={styles.recordText}>
                                                
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                
                {/*score page*/}
                    <View style={{ display: this.state.scorePage}}>
                        <View style ={[{height: 1.8*(deviceHeight/7),flexDirection: 'row'},styles.contentContainer]}>
                            <Text style={{fontWeight: 'bold', fontSize:deviceHeight/10, color: 'grey',textAlign:'center'}}>
                                {this.state.score1}
                            </Text>
                            <Text style={{fontWeight: 'bold', fontSize:deviceHeight/10, color: 'grey',textAlign:'center'}}>
                                {this.state.score2}
                            </Text>
                        </View>
                        {/*button fencer1 to change score*/}
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <TouchableHighlight onPress={this.changeSc1}>
                                <View style={styles.buttonScore}>
                                    <Text style={styles.textButton}>
                                        {this.state.team1}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        {/*button fencer2 to change score*/}                
                            <TouchableHighlight onPress={this.changeSc2}>
                                <View style={styles.buttonScore}>
                                    <Text style={styles.textButton}>
                                        {this.state.team2}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                {/*button double to change score*/}
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <TouchableHighlight onPress={this.double}>
                                <View style={styles.buttonScore}>
                                    <Text style={styles.textButton}>
                                        DOUBLE
                                    </Text>
                                </View>
                            </TouchableHighlight>
                    {/*button priority to change score*/}
                            <TouchableHighlight onPress={this.priority}>
                                <View style={styles.buttonScore}>
                                    <Text style={styles.textButton}>
                                        PRIORITY
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    {/*date and submit score button*/}
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                           <TextInput 
                                onChangeText={(date) => this.setState({date})}
                                value={this.state.date}
                                style={{fontStyle: 'italic', fontSize: deviceHeight/27, color: 'grey', 
                                textAlign:'center', width :deviceWidth/2, borderWidth:1, borderColor: 'white', borderRadius:deviceWidth/20}}
                            />
                            {/*submit score button*/}
                            <TouchableHighlight style = {{alignItems: 'center'}}
                                                        onPress={this.submit}>
                                <View style={[{backgroundColor: 'black'},styles.buttonScore]}>
                                    <Text style={styles.textButton}>
                                        SUBMIT SCORE
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    
                    {/*standings page*/}
                    <View style={{ display: this.state.standingsPage}}>
                        {/*standings */}
                        <View style={[{height: 2*(deviceHeight/7),},styles.contentContainer]}>
                            <Text style={styles.titleText}>
                                Standings
                            </Text>
                            <ScrollView horizontal={true}> 
                                <View style={{ justifyContent:'center'}}>
                                    <Text style={styles.titleText}>
                                        {this.state.team1}: {this.state.standing1}
                                    </Text>
                                    <Text style={styles.titleText}>
                                        {this.state.team2}: {this.state.standing2}
                                    </Text>
                                </View>
                            </ScrollView>  
                        </View> 
                        {/*previous standings*/}
                    
                        <View style={[{flexDirection:'column', paddingTop: deviceHeight/40, height:deviceHeight/3,},styles.contentContainer]}>
                            <ScrollView>    
                                <View style ={{flexDirection: 'row'}}>
                                    <View style ={{width: deviceWidth/5}}>
                                        <Text style={styles.recordText}>
                                            Date
                                        </Text>
                                    </View>
                                    <View style ={{width: deviceWidth/5}}>
                                        <Text style={styles.recordText}>
                                            {this.state.team1}
                                        </Text>
                                    </View>
                                    <View style ={{width: deviceWidth/5}}>
                                        <Text style={styles.recordText}>
                                            {this.state.team2}
                                        </Text>
                                    </View>
                                </View>
                                {this.state.gameRecord.map((record) => (
                                    <View style ={{flexDirection: 'row'}}>
                                        <View style ={{width: deviceWidth/5}}>
                                            <Text style={styles.recordText}>
                                                {record.date}
                                            </Text>
                                        </View>
                                        <View style ={{width: deviceWidth/5}}>
                                            <Text style={styles.recordText}>
                                                {record.score1}
                                            </Text>
                                        </View>
                                        <View style ={{width: deviceWidth/5}}>
                                            <Text style={styles.recordText}>
                                                {record.score2}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>

                    </View>
            {/*closing bracket backround image*/}
                </ImageBackground>
                
            {/*navbar*/}    
                <View style={styles.navbar}>
                    <TouchableHighlight style={styles.buttonNav}
                                        onPress = {this.namesPagePress}>
                        <Text style={styles.textButton}>
                            Team Names    
                        </Text>        
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonNav}
                                        onPress = {this.scorePagePress}>
                        <Text style={styles.textButton}>
                            Scoring    
                        </Text>        
                    </TouchableHighlight>
                     <TouchableHighlight style={styles.buttonNav}
                                        onPress = {this.standingsPagePress}>
                        <Text style={styles.textButton}>
                            Standings   
                        </Text>        
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    
    titleContainer:{
        height: deviceHeight/7,
        justifyContent:'center',
        paddingLeft: deviceWidth/20,
    },
    
    contentContainer:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-around',
        textAlign:'center',
        margin:deviceHeight/20,
        paddingBottom:deviceHeight/30,
        
        borderWidth: 1,
        borderColor:'white',
        borderRadius: 20,
    },
    
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop:deviceHeight/60,
    },
    
    input:{
        width: deviceWidth/3,
        height: deviceHeight/10,
        borderWidth: 1,
        
        borderColor: '#a19f9d',
        borderWidth: 1,
        borderRadius: 20,
        marginRight: deviceWidth/45,
        justifyContent: 'center',
    },
    
    navbar:{
        height: 0.6*(deviceHeight/7),
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
    },
    buttonNav:{
        backgroundColor: '#3a2751',
        borderRadius: 16,
        height: deviceHeight/15,
        width: deviceWidth/4,
        marginLeft: deviceWidth/20,
        marginRight: deviceWidth/20,
        borderBottomColor: '#818996',
        borderBottomWidth: 2,
        
        textAlign:'center',
        justifyContent:'center',
    },
    
    buttonScore:{
        borderRadius: 12,
        height: deviceHeight/10,
        width: deviceWidth/3,
        margin: deviceWidth/40,
        borderColor: 'white',
        borderWidth: 2,
        
        textAlign:'center',
        justifyContent:'center',
    },
    
    textButton:{
        color:'white',
        fontSize:15,
    },
    
    titleText:{
        color: '#3a2751',
        fontSize: 30,
        fontWeight: 'bold',
    },
    
    recordText:{
        color: 'black',
        fontSize: 15,
        paddingBottom: 10,
    },
    
    teamContainer:{
        height: deviceHeight/10,
        width: deviceWidth/1.1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-around',
        textAlign:'center',
        flexDirection:'row',
    },
});