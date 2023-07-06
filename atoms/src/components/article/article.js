import Mixins from '../../mixins/mixins.js';

export default{
    name: "Article",
    props: {
        title: {
            type: String,
            required: true
        },
        tags: {
            type: String
        },
        author: {
            type: String,
            required: true
        },
        authorPic: {
            type: String,
            required: true
        },
        date: {
            type: String
        },
        backgroundImage: {
            type: String
        },
        backgroundColor: {
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
        },
        urlAudio: {
            type: String
        }
    },
    mixins: [Mixins],
    computed: {
        getClass(){
            if(this.type){
                return 'article--' + this.type;
            }
        },

        reduced(){
            return this.type.indexOf('186') >= 0 ? true : false;
        }
    }
}