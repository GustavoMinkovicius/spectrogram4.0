import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {RFValue} from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false
        };
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.navigate("PostCard", {story: this.props.story})}>
                <View style={styles.container}>
                    <View style={styles.cardContainer}>
                        <View style={styles.authorContainer}>
                            <View style={styles.authorImageContainer}>
                                <Image
                                    source={require("../assets/profile_img.png")}
                                    style={styles.profileImage}></Image>
                            </View>
                            <View style={styles.authorNameContainer}>
                                <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                            </View>
                        </View>
                        <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                        <View style={styles.captionContainer}>
                            <Text style={styles.captionText}>
                                {this.props.post.caption}
                            </Text>
                        </View>
                        <View style={styles.actionContainer}>
                            <View style={styles.likeButto}>
                                <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                                <Text style={styles.likeText}>12k</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
