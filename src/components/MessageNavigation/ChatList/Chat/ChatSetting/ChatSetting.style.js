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

    //============image===============
    
    chatImageWrapper: {
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
    },
    chatSettingImage: {
        width: 90,
        height: 90,
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
}