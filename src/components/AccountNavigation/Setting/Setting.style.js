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
    
    imageUser: {
        width: 100,
        height: 100,
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

    select: {
        paddingTop: 20,
    },

    //===============Switch=====================

    switch: {
        width: 45,
        height: 28,
    },

    //==============Button==================

    showButton: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderColor: "#2E9C3E",
        borderRadius: 10,
    },
    showButtonText: {
        color: "#2E9C3E",
        fontSize: 15,
    },
    logoutButton: {
        padding: 16,
        borderWidth: 1,
        borderColor: "#2E9C3E",
        borderRadius: 10,
        justifyContent: "center",
    },
    logoutButtonText: {
        color: "#2E9C3E",
        fontSize: 15,
        textAlign: "center",
    },

    //=============footer====================

    footerDark: {
        width: "100%",
        position: "absolute",
        left: 0,
        bottom: 0,
        backgroundColor: "#1C1C1E",
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "#424246",
    },
    footerLight: {
        width: "100%",
        position: "absolute",
        left: 0,
        bottom: 0,
        backgroundColor: "#fff",
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "#D6D6D6",
    },
}