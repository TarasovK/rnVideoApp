import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import { ToggleType } from '../api/ToggleType'



export interface Props {
    state: boolean
    type: ToggleType,
    onPress: ((type: ToggleType) => void),
    style: StyleProp<ViewStyle>
}

interface State {
    isSelected: boolean
}

export class ToggleItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isSelected: this.props.state
        }
    }

    onPress = () => {
        this.props.onPress(this.props.type)
    }

    render() {
        return(
            <TouchableOpacity 
                onPress={this.onPress}
                style={styles.defaultItemStyle}>
                <View> 
                    <Text style={[this.props.type === ToggleType.favourites ? styles.leftItem : styles.rightItem, this.props.style]}>
                        {this.props.type.toString()}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

}

var styles = StyleSheet.create({
    defaultItemStyle: {
        flex: 1,
        padding: 10
    },
    leftItem: {
        textAlign: 'right'
    },
    rightItem: {
        textAlign: 'left'
    },
})