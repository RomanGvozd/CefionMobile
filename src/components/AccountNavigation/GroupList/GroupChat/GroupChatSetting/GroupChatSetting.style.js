export const Style = {
    headerBlock: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingLeft: 20, 
        paddingRight: 20,
    },
    headerBlockLeft: {
        width: "25%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleWrapper: {
        width: "50%",
        justifyContent: "center",
        alignItems: 'center',
    },
    headerBlockRight: {
        width: "25%",
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: 'center',
    },

    //============image============

    blockImage: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    image: {
        width: 92,
        height: 92,
        borderRadius: 10,

    },

     //=============fileBlock==========

     fileHeader: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    fileHeaderButton: {
        width: "23%",
        height: 50,
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#424246",
        justifyContent: "center",
        alignItems: 'center',
    },
    fileHeaderButtonActive: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#2E9C3E",
        borderRadius: 10,
        zIndex: 1,

    },
    fileHeaderButtontextDark: {
        color: "#fff",
        fontSize: 15,
        zIndex: 5,

    },
    fileHeaderButtontextLight: {
        color: "#000",
        fontSize: 15,
        zIndex: 5,

    },

    //===========Task===============

    subTextDark: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: 18,
    },
    subTextLight: {
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: 18,
    },

    //=============button==============

    button: {
        width: "100%",
        padding: 16,
        borderWidth: 1,
        borderColor: "#2E9C3E",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: "#2E9C3E",
        fontSize: 15,
    },

    //===================AllUsers===================

    allUsersHeader: {
        width: "100%",
        height: "auto",
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    allUsersimage: {
        width: 10,
        height: 15,
        transform: [
            { rotate: "180deg" },
        ],
    },
    allUsersimageActive: {
        width: 10,
        height: 15,
        transform: [
            { rotate: "270deg" },
        ],
    },
    userBlockDark: {
        width: "100%",
        height: "auto",
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#424246",
        flexDirection: 'row',
        alignItems: 'center',
    },
    userBlockLight: {
        width: "100%",
        height: "auto",
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#d6d6d6",
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageUsers: {
        width: 40,
        height: 40,
        borderRadius: 5,

    },
}