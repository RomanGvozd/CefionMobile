export const Style = {
    headerDark: {
        width: "100%",
        backgroundColor: "#1C1C1E",
        paddingTop: 15,
        paddingBottom: 15,
        position: "relative",
        borderBottomWidth: 1,
        borderBottomColor: "#424246",
        alingItems: "center",
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 100,
    },
    headerLight: {
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: 15,
        paddingBottom: 15,
        position: "relative",
        borderBottomWidth: 1,
        borderBottomColor: "#D6D6D6",
        alingItems: "center",
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 100,
        
    },
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
    headerImage: {
        width: 36,
        height: 36,
        borderRadius: 36,
    },

    //==============blockMessage===========

    blockMessage: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingBottom: 15,

    },
    blockmessageAutorWrapper: {
        width: "20%",
        justifyContent: "center",
        alignItems: 'center',
    },
    messageAutorDark: {
        fontSize: 10,
        color: "rgba(255, 255, 255, 0.5)",
    },
    messageAutorLight: {
        fontSize: 10,
        color: "rgba(0, 0, 0, 0.5)",
    },
    blockMessageTextWrapperDark: {
        width: "80%",
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 15,
        position: "relative",
    },
    blockMessageTextWrapperLight: {
        width: "80%",
        backgroundColor: "#1C1C1E",
        padding: 12,
        borderRadius: 15,
        position: "relative",
    },
    messageVector: {
        position: "absolute",
        right: -8,
        top: 15,
    },
    messageVectorReverce: {
        position: "absolute",
        left: -8,
        top: 15,
        transform: [{rotate: "180deg"}],
    },
    textMessageDark: {
        fontSize: 10,
        color: "#fff",
    },
    textMessageLight: {
        fontSize: 10,
        color: "#000",
    },
    blockMessageImageWrapper: {
        width: "15%",
        justifyContent: "center",
        alignItems: 'center',
    },
    blockMessageImage: {
        width: 50,
        height: 50,
        borderRadius: 10,

    },


    //==============footer=================

    footerDark: {
        width: "100%",
        position: "absolute",
        left: 0,
        bottom: 0,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#1C1C1E',
        borderTopWidth: 1,
        borderTopColor: "#424246",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    footerLight: {
        width: "100%",
        position: "absolute",
        left: 0,
        bottom: 0,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: "#D6D6D6",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    footerImageWrapper: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",

    },
    footerImage: {
        width: 18,
        height: 20,

    },
    footerInputWrapperDark: {
        width: "70%",
        backgroundColor: '#000',
        borderRadius: 35,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,

    },
    footerInputWrapperLight: {
        width: "70%",
        backgroundColor: '#F5F5F5',
        borderRadius: 35,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    footerInputDark: {
        width: "90%",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        color: "#fff",
    },
    footerInputLight: {
        width: "90%",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        color: "#000",
    },
    inputImageWrapper: {
        width: "10%",
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    inputImage: {
        width: 20,
        height: 20,
    },
    footerButtonWrapper: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    footerButton: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#2E9C3E',
        justifyContent: "center",
        alignItems: "center",
    },
    footerButtonImage: {
        width: 15,
        height: 15,
    },

    //===========modal=======================

    modalActive: {
        transform: [{ translateY: 0 }]
    },
    modal: {
        transform: [{ translateY: 250 }]
    },
    modalDark: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#1C1C1E",
        padding: 0,
        borderRadius: 0,
        borderTopWidth: 1,
        borderTopColor: "#424246",
        paddingTop: 5,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,

    },
    modalLight: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff",
        padding: 0,
        borderRadius: 0,
        borderTopWidth: 1,
        borderTopColor: "#D6D6D6",
        paddingTop: 5,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    modalHeader: {
        width: "100%",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    modalHeaderButton: {
        width: 35,
        height: 5,
        backgroundColor: "#424246",
        borderRadius: 5,
    
    },
    modalButtonDark: {
        width: "100%",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#424246",

    },
    modalButtonLight: {
        width: "100%",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#D6D6D6",

    },
    modalButtonCancelDark: {
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderColor: "#424246",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "rgba(0, 0, 0, 0.05)",

    },
    modalButtonCancelLight: {
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderColor: "#D6D6D6",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "rgba(0, 0, 0, 0.05)",

    },
    modalButtonTextDark: {
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
        
    },
    modalButtonTextLight: {
        color: "#000",
        fontSize: 15,
        textAlign: "center",
        
    },

    //=================Subscribe===========

    groupSubscribeDark: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        padding: 20,
        backgroundColor: "#1C1C1E",
        borderTopWidth: 1,
        borderTopColor: "#424246",
        zIndex: 50,
    },
    groupSubscribeLight: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        padding: 20,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#d6d6d6",
        zIndex: 50,
    },
    groupSubscribeButtomDark: {
        width: "100%",
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#2E9C3E",
    },
    groupSubscribeButtomLight: {
        width: "100%",
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#2E9C3E",
    },
    groupSubscribeButtomTextDark: {
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
    },
    groupSubscribeButtomTextLight: {
        color: "#2E9C3E",
        fontSize: 15,
        textAlign: "center",
    },


}