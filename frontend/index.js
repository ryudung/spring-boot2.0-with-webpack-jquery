import Navigo from 'navigo'
import main from './view/main/main'

//라우터 생성.
const router = new Navigo(window.location.protocol + '//' + window.location.host);


//페이지 등록.
router.on({
    '/': () => {
        main.init();
    }
}).notFound(function () {
    alert('not found');
}).resolve();


