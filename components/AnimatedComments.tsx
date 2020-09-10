import React from 'react'
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'
import Animated, {
    withSpring,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,    
  } from 'react-native-reanimated';
import Comments from './Comments'

const windowHeight = Dimensions.get('window').height
  
export function AnimatedComments(props: {defaultPosition: number, targetPosition: number, animationCallback: (() => void)}) {
    const offset = useSharedValue(props.defaultPosition);
  
    const slideAnimationStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: withTiming(
            offset.value * 1, {
              duration: 300,
              easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }, () => {
            if(offset.value === windowHeight) {
                props.animationCallback()
            }
        })}],
    }});

    offset.value = (props.targetPosition);
  
    return (      
      <Animated.View style={[styles.commentsRoot, slideAnimationStyle]} >
          <TouchableOpacity style={styles.closeCommentsView} onPress={() => offset.value = props.defaultPosition}/>
          <View style={styles.commentsSection}>
              <Comments toggleComments={() => offset.value = props.defaultPosition}/>
          </View>
      </Animated.View>      
    );
}

var styles = StyleSheet.create({
    closeCommentsView: {
        width: '100%',
        height: '20%',
        backgroundColor: 'transparent',
    },
    commentsRoot: {        
        height: '100%',
        width: '100%',
    },
    commentsSection: {
        flex: 1,
        width: '100%',
        height: '80%',
    }, 
})   

// export {AnimatedComments}