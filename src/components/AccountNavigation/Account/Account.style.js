export const Style = {
    mainDark: {
        flex: 1,
        backgroundColor: '#000',
        
    },
    mainLight: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },

    // ================Header=========================

    headerDark: {
        width: "100%",
        backgroundColor: "#1C1C1E",
        paddingTop: 6,
        paddingBottom: 6,
        position: "relative",
        borderBottomWidth: 1,
        borderBottomColor: "#424246",

    },
    headerLight: {
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: 6,
        paddingBottom: 6,
        position: "relative",
        borderBottomWidth: 1,
        borderBottomColor: "#D6D6D6",
    },
    headerTitleDark: {
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
    },
    headerTitleLight: {
        color: "#000",
        fontSize: 15,
        textAlign: "center",
    },
    headerSubTitleDark: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: 15,
        textAlign: "center",
    },
    headerSubTitleLight: {
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: 15,
        textAlign: "center",
    },
    headerImage: { 
        width: 20,
        height: 20,
        position: "absolute",
        right: 20,
        bottom: 5,
    },

    // ================BlockUser=========================

    userBlockWrapper: {
        width: "100%",
        height: 164,
    },
    userBlockDark: {
        width: "100%",
        height: "100%",
        backgroundColor: "#1C1C1E",
        padding: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#424246",
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    userBlockLight: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#D6D6D6",
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    userImage: {
        width: 92,
        height: 92,
    },
    radioButtonWrapper: {
        width: "auto",
        height: 36,
        borderRadius: 54,
    },
    radioButton: {
        borderWidth: 1,
        borderRadius: 54,
        padding: 2,
        borderColor: "#2E9C3E",
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        position: "relative",
    },
    TextDark: {
        color: "#fff",
        marginLeft: 20,
        marginRight: 20,
        zIndex: 20,
        fontSize: 15,
    },
    TextLight: {
        color: "#000",
        marginLeft: 20,
        marginRight: 20,
        zIndex: 20,
        fontSize: 15,
    },
    radioButtonCheckedDark: {
        width: "50%",
        height: "100%",
        backgroundColor: "#2E9C3E",
        borderRadius: 54,
        position: "absolute",
        right: 2,
        zIndex: 10,
        transition: "1s",
    },
    radioButtonCheckedLight: {
        width: "50%",
        height: "100%",
        backgroundColor: "#2E9C3E",
        borderRadius: 54,
        position: "absolute",
        left: 2,
        zIndex: 10,
        transition: "1s",
    },

    // ================BlockStatistic=========================

    statisticWrapper: {
        width: "100%",
        height: 56,
        marginTop: 20,

    },
    statisticDark: {
        width: "100%",
        height: "100%",
        backgroundColor: "#1C1C1E",
        padding: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#424246",
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    statisticLight: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#D6D6D6",
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },

    // ================BlockUserInfo=========================

    userInfoDark: {
        width: "100%",
        height: "auto",
        backgroundColor: "#1C1C1E",
        padding: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#424246",
        marginTop: 20,
    },
    userInfoLight: {
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#D6D6D6",
        marginTop: 20,

    },
    infoItem: {
        flexDirection: "row", 
        alignItems: "center",
        paddingTop: 8,
        paddingBottom: 8,
    },
    userInfoTextDark: {
        color: "#fff",
        marginLeft: 20,
        fontSize: 13,
    },
    userInfoTextLight: {
        color: "#000",
        marginLeft: 20,
        fontSize: 13,
    },

    // ================BlockPopularNews=========================

    popularNewsDark: {
        width: "100%",
        height: 160,
        backgroundColor: "#1C1C1E",
        padding: 8,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#424246",
        marginTop: 20,

    },
    popularNewsLight: {
        width: "100%",
        height: 160,
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#D6D6D6",
        marginTop: 20,
    },
    dot:{
        width: 5,
        height: 5,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        marginBottom: -35,
    },
    activeDot:{
        width: 5,
        height: 5,
        backgroundColor: "#2E9C3E",
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        marginBottom: -35,
        

    },
    slide: {
        width: "100%",
        height: "100%",
        flexDirection: "row",

    },
    slideInfo: {
        paddingLeft: 20,
        paddingTop: 5,
        width: "80%"

    },
    slideTitleDark: {
        fontSize: 20,
        color: "#fff",
    },
    slideTitleLight: {
        fontSize: 20,
        color: "#000",
    },
    slideDescriptionDark: {
        width: "80%",
        fontSize: 13,
        color: "#fff",
        marginTop: 5,

    },
    slideDescriptionLight: {
        width: "80%",
        fontSize: 13,
        color: "#000",
        marginTop: 5,

    },
    slideText: {
        fontSize: 13,
        color: "#2E9C3E",
        marginTop: 10,

    },
    
    // ================BlockNav=========================

    navDark: {
        width: "100%",
        height: "auto",
        backgroundColor: "#1C1C1E",
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#424246",
        marginTop: 20,
        marginBottom: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",

    },
    navLight: {
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#D6D6D6",
        marginTop: 20,
        marginBottom: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    navButton: {
        width: "48%",
        height: 65,
        backgroundColor: "#2E9C3E",
        borderRadius: 8,
        marginTop: 8,
        padding: 14,
        flexDirection: "row",
        alignItems: "center",

    },
    navButtonImage: {
        width: 20,
        height: 20,
    },
    navButtonInfo: {
        marginLeft: 14,
    },
    navButtonText: {
        fontSize: 15,
        color: "#fff",
    },
    navButtonSubText: {
        fontSize: 13,
        color: "rgba(255, 255, 255, 0.5)",
    },
}