import React from 'react'
import { StyleSheet } from 'react-native'
import Video from 'react-native-video'

export interface Props {
    uri: string
}

interface State {
    paused: boolean
}


export class VideoPlayer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)   
        this.state = {
            paused: true
        }     
    }

    play = () => {
        this.setState( {
            paused: false
        })
    }

    pause = () => {
        this.setState( {
            paused: true
        })
    }
    
    render() {       
        return (
            <Video 
                source = {{uri: this.props.uri}}             
                style = {styles.backgroundVideo} 
                resizeMode = "contain"
                repeat = {true}
                paused={this.state.paused}/>
        );
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });