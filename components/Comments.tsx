import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ImageSourcePropType, TextInput, Keyboard, KeyboardAvoidingView } from 'react-native'
import { CommentItem } from './CommentItem'

export interface Props {
    toggleComments?: (() => void)
}

interface Comment  {
    id: string
    comment: string
    author:  {
        avatarUri: ImageSourcePropType
        name: string
    }
}

interface State {
    comments: Array<Comment>,   
}

export default class Comments extends React.Component<Props, State> {
    newComment: string
    input?: TextInput | null
    constructor(props: Props) {
        super(props)
        this.newComment = ''
        this.state = {
            comments: this.getComments()
        }
    }    

    getComments = () => {
        return [
            {
                id: '0',
                comment: 'Wow! this is a first comment!',
                author: {
                    avatarUri: require('./icons/author.png'),
                    name: 'Cute Kitty'
                }                
            },
            {
                id: '1',
                comment: 'I\'m second!',
                author: {
                    avatarUri: require('./icons/author.png'),
                    name: 'Weird Kitty'
                }
            }

        ]
    }

    renderComment = ({ item }: { item: { id: string, comment: string, author: { avatarUri: ImageSourcePropType, name: string}}}) => {
        return (
            <CommentItem item={item} />
        )   
    }
    
    onChangeText = (text: string) => {
        this.newComment = text
    }

    onSubmitEditing = () => {
        var newComment = {
            id: (this.state.comments.length + 1).toString(),
            comment: this.newComment,
            author: {
                avatarUri: require('./icons/author.png'),
                name: 'New Kitty Author'
            }
        }
        var comments = this.state.comments
        comments.push(newComment)
        this.setState({
            comments: comments
        })
        this.input!.clear()
        Keyboard.dismiss
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.commentsRoot} behavior={"padding"}>
                <View style={styles.commentsHeaderView}>
                    <Text style={styles.commentsHeaderTitle}>Comments: {this.state.comments.length}</Text>
                    <TouchableOpacity style={styles.commentsCross} onPress={this.props.toggleComments}>
                        <Image style={{resizeMode: 'contain', height: 25}} source={require('./icons/cross.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.commentsSection}>
                    <FlatList 
                        data={this.state.comments}
                        extraData={this.state.comments}
                        renderItem={this.renderComment}/>
                </View>                
                <View style={styles.commentsFooter}>
                    <TextInput 
                        ref={ref => this.input = ref}
                        style={styles.commentInput} multiline={false}
                        onSubmitEditing={this.onSubmitEditing}
                        onChangeText={this.onChangeText}
                        placeholder={'Enter comment...'}/>                    
                </View>
            </KeyboardAvoidingView>
        )
    }
}

var styles = StyleSheet.create({
    commentsRoot: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
    },
    commentsHeaderView: {
        flex: 1,        
        flexDirection: 'row'
    },
    commentsHeaderTitle: {
        flex: 1,
        textAlign: "center",
    },
    commentsSection: {
        flex: 20,
    },
    commentsFooter: {
        position: 'absolute',
        bottom: 0,
        flex: 2,
        flexDirection: 'row',
    },
    commentsCross: {
        flex: 1,
        position: 'absolute',
        right: 0,        
    },
    commentInput: {
        flex: 10,
    },
    commentSend: {
        flex: 1,
        resizeMode: 'contain',
    }
})