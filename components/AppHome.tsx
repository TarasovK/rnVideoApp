import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, Dimensions } from 'react-native'
import { Toggle } from './Toggle'
import { ToggleType } from '../api/ToggleType'
import { Footer } from './Footer'
import { Recomendations } from './Recomendations'
import  { AnimatedComments }  from './AnimatedComments'

const windowHeight = Dimensions.get('window').height;

interface StateHome {
    activeScreen: ToggleType,
    showComments: boolean,
}

export class AppHome extends React.Component<{}, StateHome> {
    constructor(props: {}) {
        super(props)
        this.state = {
            activeScreen: ToggleType.recomedations,
            showComments: false
        }
    }

    renderMainScreen = () => {
        return this.state.activeScreen === ToggleType.recomedations ? <Recomendations onCommentsPress={this.toggleComments}/> : this.renderSubscriptions();
    }

    renderSubscriptions = () => {
        return (
            <Text style={styles.subscriptionsRoot}> 
                    This is a subscriptions view
                </Text>
        )
    }    

    onScreenToggle = (selectedItem: ToggleType)  => {
        if(this.state.activeScreen !== selectedItem) {
            this.setState({activeScreen: selectedItem})
        }        
    }    
    
    toggleComments = () => {
        this.setState({
            showComments: !this.state.showComments
        })
    }

    renderComments = () => {
        if(this.state.showComments) {
            return <AnimatedComments defaultPosition={windowHeight} targetPosition={0} animationCallback={this.toggleComments}/>           
        }        
    }  
    
    render() {
        return(
            <SafeAreaView style={styles.root}>                   
                <View style={styles.playerView}>
                    {this.renderMainScreen()}  
                </View>
                <View style={styles.headerView}>
                    <Toggle 
                        onPress={this.onScreenToggle}
                        defaultScreen={this.state.activeScreen}/>    
                </View>
                <View style={styles.footerView}>
                    <Footer/>                              
                </View>      
                {this.renderComments()}                                      
            </SafeAreaView>
        )
    }
}

var styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#000'
    },         
    subscriptionsRoot: {
        flex: 1,
        justifyContent: "center",
        color: '#FFF',
        textAlignVertical: 'center'
    },
    playerView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0, 
        right: 0
    },
    headerView: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
    },
    footerView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    },
    closeCommentsView: {
        width: '100%',
        height: '20%',
        backgroundColor: 'transparent',
    },
    commentsRoot: {        
        height: '100%',
        width: '100%',
        borderColor: '#0F0',
    },
    commentsSection: {
        flex: 1,
        width: '100%',
        height: '80%',
    },
});