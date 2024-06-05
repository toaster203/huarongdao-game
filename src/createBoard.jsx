import blank from './images/blank.png'
import caocao from './images/caocao.png'
import zhangfei from './images/zhangfei.png'
import zhaoyun from './images/zhaoyun.png'
import guanyu from './images/guanyu.png'
import huangzhong from './images/huangzhong.png'
import machao from './images/machao.png'
import soldier from './images/soldier.png'
import horizontal from './images/horizontal default.png'
import vertical from './images/vertical default.png'
import square from './images/default background.png'

export const defaultBoard = () => {
    const ZhangFei = {
        id: 1,
        name: 'zhangfei',
        image: zhangfei,
        positionX: 0,
        positionY: 0,
        width: 1,
        height: 2,
    }

    const CaoCao = {
        id: 2,
        name: 'caocao',
        image: caocao,
        positionX: 1,
        positionY: 0,
        width: 2,
        height: 2,
    }

    const ZhaoYun = {
        id: 3,
        name: 'zhaoyun',
        image: zhaoyun,
        positionX: 3,
        positionY: 0,
        width: 1,
        height: 2,
    }

    const MaChao = {
        id: 4,
        name: 'machao',
        image: machao,
        positionX: 0,
        positionY: 2,
        width: 1,
        height: 2,
    }

    const GuanYu = {
        id: 5,
        name: 'guanyu',
        image: guanyu,
        positionX: 1,
        positionY: 2,
        width: 2,
        height: 1,
    }

    const HuangZhong = {
        id: 6,
        name: 'huangzhong',
        image: huangzhong,
        positionX: 3,
        positionY: 2,
        width: 1,
        height: 2,
    }

    const soldier1 = {
        id: 7,
        name: 'soldier1',
        image: soldier,
        positionX: 0,
        positionY: 4,
        width: 1,
        height: 1,
    }

    const soldier2 = {
        id: 8,
        name: 'soldier2',
        image: soldier,
        positionX: 1,
        positionY: 3,
        width: 1,
        height: 1,
    }

    const soldier3 = {
        id: 9,
        name: 'soldier3',
        image: soldier,
        positionX: 2,
        positionY: 3,
        width: 1,
        height: 1,
    }

    const soldier4 = {
        id: 10,
        name: 'soldier4',
        image: soldier,
        positionX: 3,
        positionY: 4,
        width: 1,
        height: 1,
    }

    const blank1 = {
        id: 11,
        name: 'blank1',
        image: blank,
        positionX: 1,
        positionY: 4,
        width: 1,
        height: 1,
    }
    
    const blank2 = {
        id: 12,
        name: 'blank2',
        image: blank,
        positionX: 2,
        positionY: 4,
        width: 1,
        height: 1,
    }

    const boardArrangement = []
    boardArrangement.push(ZhangFei)
    boardArrangement.push(CaoCao)
    boardArrangement.push(ZhaoYun)
    boardArrangement.push(MaChao)
    boardArrangement.push(GuanYu)
    boardArrangement.push(HuangZhong)
    boardArrangement.push(soldier1)
    boardArrangement.push(soldier2)
    boardArrangement.push(soldier3)
    boardArrangement.push(soldier4)
    boardArrangement.push(blank1)
    boardArrangement.push(blank2)

    return boardArrangement

}

export const board1 = () => {
    const vertical1 = {
        id: 1,
        name: 'vertical1',
        image: vertical,
        positionX: 0,
        positionY: 0,
        width: 1,
        height: 2,
    }

    const bigsquare = {
        id: 2,
        name: 'bigsquare',
        image: square,
        positionX: 1,
        positionY: 0,
        width: 2,
        height: 2,
    }

    const vertical2 = {
        id: 3,
        name: 'vertical2',
        image: vertical,
        positionX: 0,
        positionY: 3,
        width: 1,
        height: 2,
    }

    const horizontal1 = {
        id: 4,
        name: 'horizontal1',
        image: horizontal,
        positionX: 0,
        positionY: 2,
        width: 2,
        height: 1,
    }

    const horizontal2 = {
        id: 5,
        name: 'horizontal2',
        image: horizontal,
        positionX: 1,
        positionY: 3,
        width: 2,
        height: 1,
    }

    const vertical3 = {
        id: 6,
        name: 'vertical3',
        image: vertical,
        positionX: 3,
        positionY: 3,
        width: 1,
        height: 2,
    }

    const square1 = {
        id: 7,
        name: 'square1',
        image: square,
        positionX: 3,
        positionY: 0,
        width: 1,
        height: 1,
    }

    const square2 = {
        id: 8,
        name: 'square2',
        image: square,
        positionX: 3,
        positionY: 1,
        width: 1,
        height: 1,
    }

    const square3 = {
        id: 9,
        name: 'square3',
        image: square,
        positionX: 2,
        positionY: 2,
        width: 1,
        height: 1,
    }

    const square4 = {
        id: 10,
        name: 'square4',
        image: square,
        positionX: 3,
        positionY: 2,
        width: 1,
        height: 1,
    }

    const blank1 = {
        id: 11,
        name: 'blank1',
        image: blank,
        positionX: 1,
        positionY: 4,
        width: 1,
        height: 1,
    }
    
    const blank2 = {
        id: 12,
        name: 'blank2',
        image: blank,
        positionX: 2,
        positionY: 4,
        width: 1,
        height: 1,
    }

    const boardArrangement = []
    boardArrangement.push(vertical1)
    boardArrangement.push(vertical2)
    boardArrangement.push(vertical3)
    boardArrangement.push(horizontal1)
    boardArrangement.push(horizontal2)
    boardArrangement.push(bigsquare)
    boardArrangement.push(square1)
    boardArrangement.push(square2)
    boardArrangement.push(square3)
    boardArrangement.push(square4)
    boardArrangement.push(blank1)
    boardArrangement.push(blank2)

    return boardArrangement

}

export const board2 = () => {
    const vertical1 = {
        id: 1,
        name: 'vertical1',
        image: vertical,
        positionX: 0,
        positionY: 0,
        width: 1,
        height: 2,
    }

    const bigsquare = {
        id: 2,
        name: 'bigsquare',
        image: square,
        positionX: 1,
        positionY: 0,
        width: 2,
        height: 2,
    }

    const vertical2 = {
        id: 3,
        name: 'vertical2',
        image: vertical,
        positionX: 3,
        positionY: 0,
        width: 1,
        height: 2,
    }

    const square1 = {
        id: 4,
        name: 'square1',
        image: square,
        positionX: 0,
        positionY: 2,
        width: 1,
        height: 1,
    }

    const square2 = {
        id: 5,
        name: 'square2',
        image: square,
        positionX: 0,
        positionY: 3,
        width: 1,
        height: 1,
    }

    const square3 = {
        id: 6,
        name: 'square3',
        image: square,
        positionX: 3,
        positionY: 2,
        width: 1,
        height: 1,
    }

    const square4 = {
        id: 7,
        name: 'square4',
        image: square,
        positionX: 3,
        positionY: 3,
        width: 1,
        height: 1,
    }

    const horizontal1 = {
        id: 8,
        name: 'horizontal1',
        image: horizontal,
        positionX: 1,
        positionY: 2,
        width: 2,
        height: 1,
    }

    const horizontal2 = {
        id: 9,
        name: 'horizontal2',
        image: horizontal,
        positionX: 1,
        positionY: 3,
        width: 2,
        height: 1,
    }

    const horizontal3 = {
        id: 10,
        name: 'horizontal3',
        image: horizontal,
        positionX: 1,
        positionY: 4,
        width: 2,
        height: 1,
    }

    const blank1 = {
        id: 11,
        name: 'blank1',
        image: blank,
        positionX: 0,
        positionY: 4,
        width: 1,
        height: 1,
    }
    
    const blank2 = {
        id: 12,
        name: 'blank2',
        image: blank,
        positionX: 3,
        positionY: 4,
        width: 1,
        height: 1,
    }

    const boardArrangement = []
    boardArrangement.push(vertical1)
    boardArrangement.push(vertical2)
    boardArrangement.push(bigsquare)
    boardArrangement.push(square1)
    boardArrangement.push(square2)
    boardArrangement.push(square3)
    boardArrangement.push(square4)
    boardArrangement.push(horizontal1)
    boardArrangement.push(horizontal2)
    boardArrangement.push(horizontal3)
    boardArrangement.push(blank1)
    boardArrangement.push(blank2)

    return boardArrangement

}

export const board3 = () => {
    const vertical1 = {
        id: 1,
        name: 'vertical1',
        image: vertical,
        positionX: 2,
        positionY: 0,
        width: 1,
        height: 2,
    }

    const bigsquare = {
        id: 2,
        name: 'bigsquare',
        image: square,
        positionX: 0,
        positionY: 0,
        width: 2,
        height: 2,
    }

    const vertical2 = {
        id: 3,
        name: 'vertical2',
        image: vertical,
        positionX: 3,
        positionY: 0,
        width: 1,
        height: 2,
    }

    const vertical3 = {
        id: 4,
        name: 'vertical3',
        image: vertical,
        positionX: 0,
        positionY: 3,
        width: 1,
        height: 2,
    }

    const vertical4 = {
        id: 5,
        name: 'vertical4',
        image: vertical,
        positionX: 1,
        positionY: 3,
        width: 1,
        height: 2,
    }

    const horizontal1 = {
        id: 6,
        name: 'horizontal1',
        image: horizontal,
        positionX: 0,
        positionY: 2,
        width: 2,
        height: 1,
    }

    const square1 = {
        id: 7,
        name: 'square1',
        image: square,
        positionX: 2,
        positionY: 2,
        width: 1,
        height: 1,
    }

    const square2 = {
        id: 8,
        name: 'square2',
        image: square,
        positionX: 2,
        positionY: 3,
        width: 1,
        height: 1,
    }

    const square3 = {
        id: 9,
        name: 'square3',
        image: square,
        positionX: 3,
        positionY: 3,
        width: 1,
        height: 1,
    }

    const square4 = {
        id: 10,
        name: 'square4',
        image: square,
        positionX: 3,
        positionY: 2,
        width: 1,
        height: 1,
    }

    const blank1 = {
        id: 11,
        name: 'blank1',
        image: blank,
        positionX: 3,
        positionY: 4,
        width: 1,
        height: 1,
    }
    
    const blank2 = {
        id: 12,
        name: 'blank2',
        image: blank,
        positionX: 2,
        positionY: 4,
        width: 1,
        height: 1,
    }

    const boardArrangement = []
    boardArrangement.push(vertical1)
    boardArrangement.push(vertical2)
    boardArrangement.push(vertical3)
    boardArrangement.push(vertical4)
    boardArrangement.push(bigsquare)
    boardArrangement.push(horizontal1)
    boardArrangement.push(square1)
    boardArrangement.push(square2)
    boardArrangement.push(square3)
    boardArrangement.push(square4)
    boardArrangement.push(blank1)
    boardArrangement.push(blank2)

    return boardArrangement

}

export const board4 = () => {
    const vertical1 = {
        id: 1,
        name: 'vertical1',
        image: vertical,
        positionX: 0,
        positionY: 0,
        width: 1,
        height: 2,
    }

    const bigsquare = {
        id: 2,
        name: 'bigsquare',
        image: square,
        positionX: 1,
        positionY: 0,
        width: 2,
        height: 2,
    }

    const vertical2 = {
        id: 3,
        name: 'vertical2',
        image: vertical,
        positionX: 3,
        positionY: 0,
        width: 1,
        height: 2,
    }

    const vertical3 = {
        id: 4,
        name: 'vertical3',
        image: vertical,
        positionX: 1,
        positionY: 2,
        width: 1,
        height: 2,
    }

    const horizontal1 = {
        id: 5,
        name: 'horizontal1',
        image: horizontal,
        positionX: 0,
        positionY: 4,
        width: 2,
        height: 1,
    }

    const horizontal2 = {
        id: 6,
        name: 'horizontal2',
        image: horizontal,
        positionX: 2,
        positionY: 4,
        width: 2,
        height: 1,
    }

    const square1 = {
        id: 7,
        name: 'square1',
        image: square,
        positionX: 0,
        positionY: 2,
        width: 1,
        height: 1,
    }

    const square2 = {
        id: 8,
        name: 'square2',
        image: square,
        positionX: 0,
        positionY: 3,
        width: 1,
        height: 1,
    }

    const square3 = {
        id: 9,
        name: 'square3',
        image: square,
        positionX: 3,
        positionY: 2,
        width: 1,
        height: 1,
    }

    const square4 = {
        id: 10,
        name: 'square4',
        image: square,
        positionX: 3,
        positionY: 3,
        width: 1,
        height: 1,
    }

    const blank1 = {
        id: 11,
        name: 'blank1',
        image: blank,
        positionX: 2,
        positionY: 2,
        width: 1,
        height: 1,
    }
    
    const blank2 = {
        id: 12,
        name: 'blank2',
        image: blank,
        positionX: 2,
        positionY: 3,
        width: 1,
        height: 1,
    }

    const boardArrangement = []
    boardArrangement.push(vertical1)
    boardArrangement.push(vertical2)
    boardArrangement.push(vertical3)
    boardArrangement.push(bigsquare)
    boardArrangement.push(horizontal1)
    boardArrangement.push(horizontal2)
    boardArrangement.push(square1)
    boardArrangement.push(square2)
    boardArrangement.push(square3)
    boardArrangement.push(square4)
    boardArrangement.push(blank1)
    boardArrangement.push(blank2)

    return boardArrangement

}

export const board5 = () => {
    const square1 = {
        id: 1,
        name: 'square1',
        image: square,
        positionX: 0,
        positionY: 0,
        width: 1,
        height: 1,
    }

    const bigsquare = {
        id: 2,
        name: 'bigsquare',
        image: square,
        positionX: 1,
        positionY: 0,
        width: 2,
        height: 2,
    }

    const vertical1 = {
        id: 3,
        name: 'vertical1',
        image: vertical,
        positionX: 3,
        positionY: 0,
        width: 1,
        height: 2,
    }

    const square2 = {
        id: 4,
        name: 'square2',
        image: square,
        positionX: 0,
        positionY: 1,
        width: 1,
        height: 1,
    }

    const horizontal1 = {
        id: 5,
        name: 'horizontal1',
        image: horizontal,
        positionX: 0,
        positionY: 2,
        width: 2,
        height: 1,
    }

    const horizontal2 = {
        id: 6,
        name: 'horizontal2',
        image: horizontal,
        positionX: 0,
        positionY: 3,
        width: 2,
        height: 1,
    }

    const horizontal3 = {
        id: 7,
        name: 'horizontal3',
        image: horizontal,
        positionX: 2,
        positionY: 2,
        width: 2,
        height: 1,
    }

    const horizontal4 = {
        id: 8,
        name: 'horizontal4',
        image: horizontal,
        positionX: 2,
        positionY: 3,
        width: 2,
        height: 1,
    }

    const square3 = {
        id: 9,
        name: 'square3',
        image: square,
        positionX: 0,
        positionY: 4,
        width: 1,
        height: 1,
    }

    const square4 = {
        id: 10,
        name: 'square4',
        image: square,
        positionX: 3,
        positionY: 4,
        width: 1,
        height: 1,
    }

    const blank1 = {
        id: 11,
        name: 'blank1',
        image: blank,
        positionX: 1,
        positionY: 4,
        width: 1,
        height: 1,
    }
    
    const blank2 = {
        id: 12,
        name: 'blank2',
        image: blank,
        positionX: 2,
        positionY: 4,
        width: 1,
        height: 1,
    }

    const boardArrangement = []
    boardArrangement.push(vertical1)
    boardArrangement.push(bigsquare)
    boardArrangement.push(square1)
    boardArrangement.push(square2)
    boardArrangement.push(square3)
    boardArrangement.push(square4)
    boardArrangement.push(horizontal1)
    boardArrangement.push(horizontal2)
    boardArrangement.push(horizontal3)
    boardArrangement.push(horizontal4)
    boardArrangement.push(blank1)
    boardArrangement.push(blank2)

    return boardArrangement

}