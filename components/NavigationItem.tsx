import React from 'react'
import { StyleSheet, Text, Image, ImageSourcePropType, ToastAndroid, TouchableOpacity } from 'react-native'

export interface Props {
    title: string,
    src: ImageSourcePropType,
    onPress?: (() => void)
}

export class NavigationItem extends React.Component<Props> {
    constructor(props: Props) {
        super(props)        
    }

    onPress = () => {
        this.props.onPress ? this.props.onPress() : ToastAndroid.show('Navigating to ' + (this.props.title.length > 0 ? this.props.title : ' Add Video') + ' screen', ToastAndroid.SHORT)     
    }

    render() {
        return(
            <TouchableOpacity style={styles.itemRoot} onPress={this.onPress}> 
                <Image 
                    style={styles.itemIcon}
                    source={this.props.src}/>
                <Text style={styles.itemTitle}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    itemRoot: {
        flex: 1,
        alignItems: "center",
    },
    itemIcon: {
        flex: 1,
        resizeMode: 'contain',
    },
    itemTitle: {
        flex: 1,
        color: '#FFF',
        textAlign: 'center',
        fontSize: 12,
    }
})