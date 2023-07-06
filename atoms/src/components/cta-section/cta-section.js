export default{
    name: "CtaSection",
    props: {
        title: {
            type: String,
        },
        tags: {
            type: String
        },
        author: {
            type: String,
        },
        authorPic: {
            type: String,
        },
        date: {
            type: String,
        },
        backgroundImage: {
            type: String
        },
        type: {
            type: String
        },
        tagsAdditionalClasses: {
            type: String
        },
        arrowIcon: {
            type: Boolean,
            default: true
        },
        url: {
            type: String
        }
    },
}