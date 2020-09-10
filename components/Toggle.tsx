import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ToggleItem } from './ToggleItem'
import { ToggleType } from '../api/ToggleType'


export interface Props {
    onPress: ((selectedScreen: ToggleType) => void),
    defaultScreen: ToggleType
}

interface State {
    selectedItem: ToggleType
}

export class Toggle extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state =  {
            selectedItem: this.props.defaultScreen
        }
    }

    onPress = (pressedItemType: ToggleType) =>  {        
        var newState = this.state.selectedItem === pressedItemType ? this.state.selectedItem : pressedItemType
        this.setState({
            selectedItem: newState
        })
        this.props.onPress(pressedItemType)        
    }   

    render() {
        return(
            <View style={styles.header}>
                <ToggleItem type={ToggleType.favourites} onPress={this.onPress} 
                    state={this.state.selectedItem === ToggleType.favourites}
                    style={this.state.selectedItem === ToggleType.favourites ? styles.selected : styles.inactive}/>
                <ToggleItem type={ToggleType.recomedations} onPress={this.onPress} 
                    state={this.state.selectedItem === ToggleType.recomedations}
                    style={this.state.selectedItem === ToggleType.recomedations ? styles.selected : styles.inactive}/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    header: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        marginTop: 10
    },
    
    selected: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        margin: 6,
        // backgroundColor: '#000'
    },
    inactive: {
        fontSize: 14,
        color: '#AAA',
        margin: 6,
        // backgroundColor: '#000'
    }
})