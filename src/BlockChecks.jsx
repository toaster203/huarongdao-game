import { blank1, blank2 } from './createBoard';

function getBlock(blocks, x, y) {
    const block = blocks.find((block) => {return block.positionX === x && block.positionY === y});
    if (block.id === blank1.id || block.id === blank2.id) {
        return block;
    }
    return null;
}

export function checkAbove (blocks, original) {
    const x = original.positionX
    const y = original.positionY -1
    let block1 = getBlock(blocks, x, y)
    let block2 = getBlock(blocks, x + 1 , y)

    return [block1, block2]    
}

export function checkBelow (blocks, original) {
    const x = original.positionX;
    const y = original.positionY + original.height;
    let block1 = getBlock(blocks, x, y)
    let block2 = getBlock(blocks, x + 1, y)

    return [block1, block2];
}

export function checkLeft (blocks, original) {
    const x = original.positionX - 1;
    const y = original.positionY;
    let block1 = getBlock(blocks, x, y);
    let block2 = getBlock(blocks, x, y + 1);

    return [block1, block2];
}

export function checkRight(blocks, original) { 
    const x = original.positionX + original.width;
    const y = original.positionY;
    let block1 = getBlock(blocks, x, y);
    let block2 = getBlock(blocks, x, y + 1);

    return [block1, block2];
}