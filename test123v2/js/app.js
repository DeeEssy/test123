Vue.component('assortment-card', {
    props: ['props'],
    template: `
        <div class="card" :class="{cardBottom: props.cardPositionBottom}">
            <div class="card__text">
                <h3 class="card__title">{{props.cardName}}</h3>
                <p class="card__desc">{{props.cardDesc}}</p>
                <span class="card__price">
                    FROM 
                    <span class="card__price__img">` + '`' + `</span>
                    {{props.cardPrice}}
                </span>
            </div>
            <picture>
                <source :srcset="props.cardImgSrcWebp" type="image/webp">
                <img :src="props.cardImgSrc" alt="Image" class="card__img">
            </picture>
        </div>
    `
});


let assortment = new Vue({
    el: '#assortment',
    data: {
        cardInfo: [
            {
                cardId: '1',
                cardName: 'Lasagna',
                cardDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                cardPrice: '200',
                cardImgSrc: 'img/shutterstock_91005374.png',
                cardImgSrcWebp: 'img/shutterstock_91005374.webp',
                cardPositionBottom: false,
            },
            {
                cardId: '2',
                cardName: 'pizza',
                cardDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                cardPrice: '399',
                cardImgSrc: 'img/shutterstock_294636281.png',
                cardImgSrcWebp: 'img/shutterstock_294636281.webp',
                cardPositionBottom: false,
            },
            {
                cardId: '3',
                cardName: 'IDLIS',
                cardDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                cardPrice: '99',
                cardImgSrc: 'img/shutterstock_139456373.png',
                cardImgSrcWebp: 'img/shutterstock_139456373.webp',
                cardPositionBottom: true,
            },
            {
                cardId: '4',
                cardName: 'BURGER',
                cardDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                cardPrice: '129',
                cardImgSrc: 'img/shutterstock_361890518.png',
                cardImgSrcWebp: 'img/shutterstock_361890518.webp',
                cardPositionBottom: true,
            }
        ],
    },
});


Vue.component('menu-card', {
    props: ['props'],
    template: `
        <div class="menu__card">
            <div class="menu__card__text">
                <h3 class="menu__card__title">{{props.cardName}}</h3>
                <p class="menu__card__desc">{{props.cardDesc}}</p>
            </div>
            <div class="menu__card__price">
                ` + '`' + `
                <span class="menu__card__price__value">{{props.cardPrice}}</span>
            </div>
        </div>
    `
});

let appetizers = new Vue ({
    el: '#appetizers',
    data: {
        cardInfo: [
            {
                cardId: '1',
                cardName: 'PIZZA MEXICANA',
                cardDesc : 'Lorem ipsum  sit amet, consectetur adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '199',
            },
            {
                cardId: '2',
                cardName: 'QUESADILLA',
                cardDesc : 'Lorem ipsum  sit amet, consectetur adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '999',
            },
            {
                cardId: '3',
                cardName: 'TORTILLA CHIPS',
                cardDesc : 'Lorem  dolor sit amet, consectetur adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '129',
            },
            {
                cardId: '4',
                cardName: 'ROASTED ZUCCHINI',
                cardDesc : 'Lorem ipsum dolor sit amet,  adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '729',
            },
            {
                cardId: '5',
                cardName: 'GUACAMOLE MEXICANA',
                cardDesc : 'Lorem ipsum dolor sit amet,  adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '159',
            },
            {
                cardId: '6',
                cardName: 'SAUTEED GREEN PEPPERS',
                cardDesc : 'Lorem ipsum dolor  , consectetur adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '439',
            },
        ]
    }
});


let deserts = new Vue ({
    el: '#deserts',
    data: {
        cardInfo: [
            {
                cardId: '1',
                cardName: 'CHOCOLATE CHILLI CAKE',
                cardDesc : 'Lorem ipsum  sit amet, consectetur adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '429',
            },
            {
                cardId: '2',
                cardName: 'ICE CREAM (eggless)',
                cardDesc : 'Lorem ipsum  sit amet, consectetur adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '190',
            },
            {
                cardId: '3',
                cardName: 'FLAN',
                cardDesc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '299',
            },
            {
                cardId: '4',
                cardName: 'ICED CAFE CON LECHE',
                cardDesc : 'Lorem ipsum dolor sit amet,  adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '149',
            },
            {
                cardId: '5',
                cardName: 'CHURROS (eggless)',
                cardDesc : 'Lorem ipsum dolor sit amet,  adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '929',
            },
            {
                cardId: '6',
                cardName: 'PIZZA MEXICANA',
                cardDesc : 'Lorem ipsum dolor  , consectetur adipiscing elit. Nam vehicula massa quis _____________________',
                cardPrice: '109',
            },
        ]
    }
});

let app = new Vue ({
    el: '#app',
    data: {
        body: document.querySelector('body'),
    },
    methods: {
        backToTop() {
            if (window.scrollY > 0) {
                window.scrollBy(0, -90);
                setTimeout(this.backToTop, 0);
            }
        },
        toggleScroll() {
            this.body.classList.toggle('no-scroll');
        },
        btnToTop() {
            this.backToTop();
        },
        mMenu(e) {
            const target = e.target;
            if(target.closest('.m-menu').classList.contains('active')) {
                target.closest('.m-menu').classList.remove('active');
                document.querySelector('.header__group').classList.remove('active');
                document.querySelector('.overlay').style.display = 'none';
                this.toggleScroll();
            } else {
                target.closest('.m-menu').classList.add('active');
                document.querySelector('.header__group').classList.add('active');
                document.querySelector('.overlay').style.display = 'block';
                this.toggleScroll();
            }
        },
        closeOverlay() {
            document.querySelector('.overlay').style.display = 'none';
            document.querySelector('.header__group').classList.remove('active');
            document.querySelector('.m-menu').classList.remove('active');
            this.toggleScroll();
        }
    },
});