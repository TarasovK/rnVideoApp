import React from 'react'
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'

export interface Props {
    item: {
        comment: string,
        author:  {
            avatarUri: ImageSourcePropType,
            name: string,
        }
    }
}

export class CommentItem extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.commentItemRoot}>
                <View >
                    <Image source={this.props.item.author.avatarUri} />
                </View>
                <View style={styles.commentContent}>
                    <Text style={styles.commentAuthor}>{this.props.item.author.name}</Text> 
                    <Text style={styles.commentText}>{this.props.item.comment}</Text> 
                </View>
                <View style={styles.commentLikes} ></View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    commentItemRoot: {
        flex: 1, 
        flexDirection: 'row',
    },
    commentAvatar: {
        flex: 1,
    },
    commentContent: {
        flex: 5,
        flexDirection: 'column',
    },
    commentAuthor: {
        flex: 1,
        fontSize: 12,
        paddingLeft: 5,
        color: '#555',
        textAlignVertical: 'center'
    },
    commentText: {
        flex: 7,
        paddingLeft: 5
    },
    commentLikes: {
        flex: 1,
        flexDirection: 'column'
    }
})