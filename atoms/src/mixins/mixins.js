const mixins = {
    methods: {
        getImageUrl(name) {
            return new URL(`${name}`, import.meta.url).href
        }
    }
};

export default mixins;