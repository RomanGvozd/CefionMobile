export const Style = {
    mainDark: {
        flex: 1,
        backgroundColor: '#000',
        
    },
    mainLight: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    imageUser: {
        width: 100,
        height: 100,
    },

    //===============Header=====================

    headerDark: {
        width: "100%",
        backgroundColor: "#1C1C1E",
        paddingTop: 16,
        paddingBottom: 16,
        position: "relative",
        borderBottomWidth: 1,
        borderBottomColor: "#424246",
        alingItems: "center",
        

    },
    headerLight: {
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: 16,
        paddingBottom: 16,
        position: "relative",
        borderBottomWidth: 1,
        borderBottomColor: "#D6D6D6",
        alingItems: "center",

    },
    imageWrapper: {
        width: 30,
        height: "100%",
        alingItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 20,
        bottom: 15,

    },
    image: {
        width: 10,
        height: 15,
    },
    imageLanguage: {
        width: 10,
        height: 15,
        transform: [
            { rotate: "180deg" },
        ]
    },
    imageLanguageActive: {
        width: 10,
        height: 15,
        transform: [
            { rotate: "270deg" },
        ]
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

    //===============Block=====================

    blockDark: {
        width: "100%",
        height: "auto",
        backgroundColor: "#1C1C1E",
        padding: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#424246",
        marginBottom: 20,
    },
    blockLight: {
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#D6D6D6",
        marginBottom: 20,
    },
    blockItemOne: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    select: {
        paddingTop: 20,
    },

    //===============Title=====================

    titleDark: {
        fontSize: 20,
        fontWeight: "bolt",
        color: "#fff",
        marginBottom: 20,
    },
    titleLight: {
        fontSize: 20,
        fontWeight: "bolt",
        color: "#000",
        marginBottom: 20,

    },

    //===============Text=======================

    textDark: {
        color: "#fff",
        fontSize: 14,
    },
    textLight: {
        color: "#000",
        fontSize: 14,
    },
    subTextDark: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: 14,
    },
    subTtextDark: {
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: 14,
    },
}