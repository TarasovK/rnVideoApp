import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationItem } from './NavigationItem'

const FOOTER_ITEMS = [
    {
        title: 'Home',
        src: require('./icons/home.png')
    },
    {
        title: 'Search',
        src: require('./icons/search.png')
    },
    {
        title: '',
        src: require('./icons/plus.png')
    },
    {
        title: 'Messages',
        src: require('./icons/messages.png')
    },
    {
        title: 'Profile',
        src: require('./icons/profile.png')
    }
]

export class Footer extends React.Component {


    render() {
        return(
            <View style={styles.footer} > 
                {FOOTER_ITEMS.map(element => (<NavigationItem key={element.title} title={element.title} src={element.src}/>))}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        height: 70,
    },
})