import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:
    {
        flex: 1,
    },
    bannerText:
    {
        color: "#fff",
        fontSize: 60,
        fontFamily: "NFL_Minnesota_Vikings",
        textAlign: "center"
    },
    bannerContainer:
    {
        flex: 1,
        backgroundColor: "#4F2683",
        borderBottomColor: "#FFC62F",
        borderBottomWidth: 5,
    },
    body:
    {
        flex: 9,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
    },
    textStyle:
    {
        color: "black",
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 10
    },
    titleStyle:
    {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10
    },
    articleContainer:
    {
        borderWidth: 1,
        borderColor: "#FFC62F"
    }
    });