import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationItem } from './NavigationItem'

const SIDEBAR_ITEMS = [
    {
        title: 'Author',
        src: require('./icons/author.png')
    },
    {
        title: '1.8m',
        src: require('./icons/like.png')
    },
    {
        title: 'Comments',
        src: require('./icons/comments.png'),
    },
    {
        title: 'Share',
        src: require('./icons/share.png')
    },
]

export interface Props {
    onAuthorPress?: (() => void)
    onCommentsPress?: (() => void)
    onLikePress?: (() => void)
    onSharePress?: (() => void)
}

interface State {
    showComments: boolean
}

export class SideBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }    

    getItems = () => {
        return [
            {
                title: 'Author',
                src: require('./icons/author.png'),
                onPress: this.props.onAuthorPress
            },
            {
                title: '1.8m',
                src: require('./icons/like.png'),
                onPress: this.props.onLikePress
            },
            {
                title: 'Comments',
                src: require('./icons/comments.png'),
                onPress: this.props.onCommentsPress
            },
            {
                title: 'Share',
                src: require('./icons/share.png'),
                onPress: this.props.onSharePress
            },
        ]
    }

    render() {
        return(
            <View style={styles.sideBarRoot}>
                {this.getItems().map(element => (<NavigationItem 
                    key={element.title} 
                    title={element.title} 
                    src={element.src} 
                    onPress={element.onPress}/>))}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    sideBarRoot: {
        flex: 1,
        flexDirection: 'column',        
    },
}) 