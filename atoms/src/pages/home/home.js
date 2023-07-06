import Mixins from '../../mixins/mixins.js';

import Header from '../../components/header/index.vue';
import Footer from '../../components/footer/index.vue';
import Article from '../../components/article/index.vue';
import CtaSection from '../../components/cta-section/index.vue';
import QuoteSection from '../../components/quote-section/index.vue';
import BlogAuthor from '../../components/blog-author/index.vue';

export default{
    name: "Home",
    components: {
        Header,
        Footer,
        Article,
        CtaSection,
        QuoteSection,
        BlogAuthor
    },
    mixins: [Mixins],
    data(){
        return {
            stickyArticles: [
                {
                    "id": 1,
                    "title": "Roccella Jonica, la Lampedusa che<br>l'Italia ignora",
                    "url": "#",
                    "tags": "Migranti",
                    "tagsAdditionalClasses": "",
                    "background_image": "article-sample-image.png",
                    "author": "Alessandro Puglia",
                    "author_pic": "author-sample-pic.png",
                    "date": "29 Giugno 2022",
                    "type": "full",
                    "arrowIcon": false
                },
                {
                    "id": 2,
                    "title": "Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura",
                    "url": "#",
                    "tags": "Allarmi",
                    "tagsAdditionalClasses": "article__tags--light-blue",
                    "background_image": "article-sample-image.png",
                    "author": "Ugo Lombi",
                    "author_pic": "author-sample-pic.png",
                    "date": "14 Luglio 2022",
                    "type": "854"
                },
                {
                    "id": 3,
                    "title": "Gli startupper? Li trovi al bistrot.<br>Così il DumBo incuba relazioni",
                    "url": "#",
                    "tags": "Esperimenti",
                    "tagsAdditionalClasses": "article__tags--light-blue",
                    "background_image": "article-sample-image.png",
                    "author": "Diletta Grella",
                    "author_pic": "author-sample-pic.png",
                    "date": "14 Luglio 2022",
                    "type": "half-height",
                    "urlAudio": "audio.wav"
                },
                {
                    "id": 4,
                    "title": "Nelle città italiane tutti in piazza per e con Kiev",
                    "url": "#",
                    "tags": "Ucraina",
                    "tagsAdditionalClasses": "article__tags--light-red",
                    "background_image": "article-sample-image.png",
                    "author": "Anna Spena",
                    "author_pic": "author-sample-pic.png",
                    "date": "14 Luglio 2022",
                    "type": "half-height"
                },
            ],
            firstWallArticles: [
                {
                    "id": 1,
                    "title": '“Qui Odessa”, fotografie, progetti e solidarietà',
                    "url": "#",
                    "tags": "Progetto Arca",
                    "tagsAdditionalClasses": "",
                    "background_image": '',
                    "background_color": "#E63036" ,
                    "author": "Redazione",
                    "author_pic": "author-sample-pic.png",
                    "date": "12 Luglio 2022",
                    "type": "436 justify-content-start",
                    "classCol": "col-12 col-lg-4"
                },
                {
                    "id": 2,
                    "title": 'Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne',
                    "url": "#",
                    "tags": "Adolescenti",
                    "tagsAdditionalClasses": "",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Luca Cereda",
                    "author_pic": "author-sample-pic.png",
                    "date": "12 Luglio 2022",
                    "type": "436 justify-content-start",
                    "classCol": "col-12 col-lg-4"
                },
                {
                    "id": 3,
                    "title": '“Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento',
                    "url": "#",
                    "tags": "Economia civile",
                    "tagsAdditionalClasses": "",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Emiliano Moccia",
                    "author_pic": "author-sample-pic.png",
                    "date": "12 Luglio 2022",
                    "type": "436 justify-content-start",
                    "classCol": "col-12 col-lg-4"
                },
                {
                    "id": 4,
                    "title": 'Il fundraising in rotta verso Giardini-Naxos',
                    "url": "#",
                    "tags": "Networkin",
                    "tagsAdditionalClasses": "",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Diletta Grella",
                    "author_pic": "author-sample-pic.png",
                    "date": "7 Luglio 2022",
                    "type": "436 justify-content-start",
                    "classCol": "col-12 col-lg-4"
                },
                {
                    "id": 5,
                    "title": 'Donne e nuove generazioni: con loro riparte l’Italia',
                    "url": "#",
                    "tags": "Società",
                    "tagsAdditionalClasses": "",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Anna Spena",
                    "author_pic": "author-sample-pic.png",
                    "date": "7 Luglio 2022",
                    "type": "436 justify-content-start align-items-end article--half-width",
                    "classCol": "col-12 col-lg-8"
                }
            ],
            secondWallArticles: [
                {
                    "id": 1,
                    "title": 'La Kasbah mazarese nella quale si gusta la cultura araba',
                    "url": "#",
                    "tags": "Impresa sociale",
                    "tagsAdditionalClasses": "",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Giovanni Gavardi",
                    "author_pic": "author-sample-pic.png",
                    "date": "3 Luglio 2022",
                    "type": "558 justify-content-start align-items-end article--half-width",
                    "classCol": "col-12"
                },
                {
                    "id": 2,
                    "title": 'Sostenibilità sociale: accordo tra Dynamo Academy e Acsi',
                    "url": "#",
                    "tags": "Sponsored",
                    "tagsAdditionalClasses": "",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Dynamo Academy",
                    "author_pic": "author-sample-pic.png",
                    "date": "",
                    "type": "372 justify-content-start",
                    "classCol": "col-12 col-lg-3"
                },
                {
                    "id": 3,
                    "title": 'Uccisa ad Haiti suor Luisa, era l\'angelo dei bambini',
                    "url": "#",
                    "tags": "Persone",
                    "tagsAdditionalClasses": "article__tags--light-red",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Lucia Capuzzi",
                    "author_pic": "author-sample-pic.png",
                    "date": "",
                    "type": "372 justify-content-start",
                    "classCol": "col-12 col-lg-3"
                },
                {
                    "id": 4,
                    "title": 'Il fundraising in rotta verso Giardini-Naxos',
                    "url": "#",
                    "tags": "Networking",
                    "tagsAdditionalClasses": "",
                    "background_image": "",
                    "background_color": "#E63036",
                    "author": "Diletta Grella",
                    "author_pic": "author-sample-pic.png",
                    "date": "7 Luglio 2022",
                    "type": "372 justify-content-start",
                    "classCol": "col-12 col-lg-3"
                },
                {
                    "id": 5,
                    "title": 'Lisa, il modello Croce Rossa per l\'inclusione lavorativa',
                    "url": "#",
                    "tags": "Società civile",
                    "tagsAdditionalClasses": "article__tags--light-blue",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Francesco Palazzo",
                    "author_pic": "author-sample-pic.png",
                    "date": "7 Luglio 2022",
                    "type": "372 justify-content-start",
                    "classCol": "col-12 col-lg-3"
                }
            ],
            thirdWallArticles: [
                {
                    "id": 1,
                    "title": 'Gli anziani del Sicomoro spopolano su TikTok',
                    "url": "#",
                    "tags": "Innovazione",
                    "tagsAdditionalClasses": "",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Luigi Alfonso",
                    "author_pic": "author-sample-pic.png",
                    "date": "1 Luglio 2022",
                    "type": "186 justify-content-start",
                    "classCol": "col-sm-12"
                },
                {
                    "id": 2,
                    "title": '"Emergenza sordi": quando un\'app ti salva la vita',
                    "url": "#",
                    "tags": "Disabilità",
                    "tagsAdditionalClasses": "",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Sara Bellingeri",
                    "author_pic": "author-sample-pic.png",
                    "date": "1 Luglio 2022",
                    "type": "186 justify-content-start",
                    "classCol": "col-sm-12"
                },
                {
                    "id": 3,
                    "title": 'Diego, il fruttivendolo che ha scelto la cooperazione sociale',
                    "url": "#",
                    "tags": "Traiettorie",
                    "tagsAdditionalClasses": "article__tags--light-red",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Giampaolo Cerri",
                    "author_pic": "author-sample-pic.png",
                    "date": "1 Luglio 2022",
                    "type": "186 justify-content-start",
                    "classCol": "col-sm-12"
                },
                {
                    "id": 4,
                    "title": 'Pedalare "Sicily Coast to Coast" per essere più inclusivi',
                    "url": "#",
                    "tags": "Sociale",
                    "tagsAdditionalClasses": "",
                    "background_image": "article-sample-image.png",
                    "background_color": "",
                    "author": "Giovanni Gamba",
                    "author_pic": "author-sample-pic.png",
                    "date": "1 Luglio 2022",
                    "type": "186 justify-content-start",
                    "classCol": "col-sm-12"
                }
            ],
            blogAuthors: [
                {
                    "id": 1,
                    "title": 'Il Becco delloca',
                    "url": "#",
                    "author": "Paolo Dell’Oca",
                    "authorPic": 'blog-author-sample-pic.png',
                    "classCol": "col-6 col-md-2"
                },
                {
                    "id": 2,
                    "title": 'Disarmato',
                    "url": "#",
                    "author": "Pasquale Pugliese",
                    "authorPic": 'blog-author-sample-pic.png',
                    "classCol": "col-6 col-md-2"
                },
                {
                    "id": 3,
                    "title": 'Battitiperminuto',
                    "url": "#",
                    "author": "Lorenzo Maria Alvaro",
                    "authorPic": 'blog-author-sample-pic.png',
                    "classCol": "col-6 col-md-2"
                },
                {
                    "id": 4,
                    "title": 'La Zanzarella',
                    "url": "#",
                    "author": "Elena Zanella",
                    "authorPic": 'blog-author-sample-pic.png',
                    "classCol": "col-6 col-md-2"
                },
                {
                    "id": 5,
                    "title": 'Impact Q&A',
                    "url": "#",
                    "author": "Laura Orestano",
                    "authorPic": 'blog-author-sample-pic.png',
                    "classCol": "col-6 col-md-2"
                }
            ]   
        }
    }
}
