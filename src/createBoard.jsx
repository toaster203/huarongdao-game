import blank from './images/blank.png'
import caocao from './images/caocao.png'
import zhangfei from './images/zhangfei.png'
import zhaoyun from './images/zhaoyun.png'
import guanyu from './images/guanyu.png'
import huangzhong from './images/huangzhong.png'
import machao from './images/machao.png'
import soldier from './images/soldier.png'

export const blank1 = {
    id: 11,
    name: 'blank1',
    image: blank,
    positionX: 1,
    positionY: 4,
    width: 1,
    height: 1,
}

export const blank2 = {
    id: 12,
    name: 'blank2',
    image: blank,
    positionX: 2,
    positionY: 4,
    width: 1,
    height: 1,
}


export const createBoard = () => {
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