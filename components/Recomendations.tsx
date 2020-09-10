import React from 'react'
import { StyleSheet, FlatList, View, Dimensions, ViewToken } from 'react-native'
import { VideoPlayer } from './VideoPlayer'
import { SideBar } from './SideBar'
import VideoContentApi from '../api/VideoContentApi'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

export interface Props {
    onAuthorPress?: (() => void)
    onCommentsPress?: (() => void)
    onLikePress?: (() => void)
    onSharePress?: (() => void)
}

export class Recomendations extends React.Component<Props> {
    cellRefs: Array<{playerRef: VideoPlayer | null}>
    
    constructor(props: Props) {
        super(props)
        this.cellRefs = new Array
    }   

    renderItem = ({ item }: {item: {id: string, uri: string, poster: string}}) => {
        return(
            <View style={styles.listItem}>            
                <VideoPlayer 
                    ref={ref=> this.cellRefs[parseInt(item.id)] = {playerRef: ref}}
                    uri={item.uri}/>
                <View style={styles.sidebarView}>
                    <SideBar onCommentsPress={this.props.onCommentsPress}/>
                </View>                   
            </View>
        )
    }

    onViewableItemsChanged = (info: {viewableItems: ViewToken[], changed: ViewToken[]}) => {
        info.changed.forEach(element => {
            var cell = this.cellRefs[parseInt(element.key)];
            if(cell) {
                element.isViewable ? cell.playerRef!.play() : cell.playerRef!.pause()
            }
        });
    }
    
    render() {
        return(
            <View style={styles.root}>
                <FlatList 
                    data={VideoContentApi.getVideoContent()}
                    renderItem={this.renderItem}
                    showsVerticalScrollIndicator={false}  
                    onViewableItemsChanged={this.onViewableItemsChanged}  
                    viewabilityConfig={viewabilityConfig}               
                />                
            </View>
        )
    }
}

var styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#0FF',
        borderWidth: 0,
        zIndex: 0
    },
    listItem: {
        flex: 1,
        width: windowWidth,
        height: windowHeight
    },   
    sidebarView: {
        width: 80,
        height: 320,
        position: "absolute",
        right: 0,
        top: windowHeight / 2 - 160
    },
})