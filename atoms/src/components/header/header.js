export default{
    name: "Header",
    data(){
        return {
            topics: [
                {
                    "id": 1,
                    "label": "Ambiente",
                    "url": "#",
                    "additionalClasses": "header__topic-item--environment"
                },
                {
                    "id": 2,
                    "label": "Economia",
                    "url": "#",
                    "additionalClasses": ""
                },
                {
                    "id": 3,
                    "label": "Mondo",
                    "url": "#",
                    "additionalClasses": "header__topic-item--world"
                },
                {
                    "id": 4,
                    "label": "Non profit",
                    "url": "#",
                    "additionalClasses": ""
                },
                {
                    "id": 5,
                    "label": "Politica",
                    "url": "#",
                    "additionalClasses": "header__topic-item--politic"
                },
                {
                    "id": 6,
                    "label": "Società",
                    "url": "#",
                    "additionalClasses": ""
                },
                {
                    "id": 7,
                    "label": "Welfare",
                    "url": "#",
                    "additionalClasses": ""
                },
            ],
            megaMenu: false,
            menu: false
        }
    },
    methods: {
        toggleMegamenu(){
            this.megaMenu = this.megaMenu === true ? false : true;
        },

        toggleMenu(){
            this.menu = this.menu === true ? false : true;
        }
    }
}
