import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import { createBoard, blank1, blank2 } from './createBoard';
import { checkAbove, checkBelow, checkLeft, checkRight } from './BlockChecks';

export const MOVE_DIR = {
  INVALID_MOVE : -1,
  MOVE_DOWN :1,
  MOVE_UP :2,
  MOVE_LEFT :3,
  MOVE_RIGHT : 4
}

function App() {
  const [blocks, setBlocks] = useState([]);
  const [squareBeingDragged, setSquareBeingDragged] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);

  useEffect(() => {
    setBlocks(createBoard());
  }, []);

  const getMoveDirection = (original, newPosition) => {
    if (original.positionX + original.width === newPosition.positionX && original.positionY === newPosition.positionY) {
      return MOVE_DIR.MOVE_RIGHT;
    } else if(original.positionX - 1 === newPosition.positionX && original.positionY === newPosition.positionY) {
      return MOVE_DIR.MOVE_LEFT
    } else if(original.positionY - 1 === newPosition.positionY && original.positionX === newPosition.positionX) {
      return MOVE_DIR.MOVE_UP
    } else if(original.positionY + original.height === newPosition.positionY && original.positionX === newPosition.positionX) {
      return MOVE_DIR.MOVE_DOWN
    }
    return MOVE_DIR.INVALID_MOVE
  }

  const findBlockByID = (id) => {
    return blocks.find(block => block.id === id);
  }

  const dragStart = (e) => {
    console.log(e.target);
    setSquareBeingDragged(e.target);
  }

  const dragDrop = (e) => {
    console.log(e.target);
    setSquareBeingReplaced(e.target);
  }

  const dragEnd = (e) => {
    // check if the square is being dropped in a blank square
    const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'));
    const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'));
    console.log(squareBeingDraggedId, squareBeingReplacedId);

    if (squareBeingDraggedId && squareBeingReplacedId) {
      if (squareBeingDraggedId === blank1.id || squareBeingDraggedId === blank2.id) {
        console.log('dragged a blank block')
        return
      }
      if (squareBeingReplacedId !== blank1.id && squareBeingReplacedId !== blank2.id) {
        console.log('replaced a non-blank block')
        return
      }

      let originalBlock = findBlockByID(squareBeingDraggedId);
      let newBlock = findBlockByID(squareBeingReplacedId);

      const moveDir = getMoveDirection(originalBlock, newBlock);
      console.log(moveDir);

      if (moveDir === MOVE_DIR.INVALID_MOVE) {
        console.log('Invalid move')
        return
      } else if (moveDir === MOVE_DIR.MOVE_UP) {
        if (originalBlock.width === 1){
          newBlock.positionY = originalBlock.positionY + originalBlock.height - 1
          originalBlock.positionY -= 1
        } else {
          let [block1, block2] = checkAbove(blocks, originalBlock);
          if (block1 !== null && block2 !== null) {
            block1.positionY = block2.positionY = originalBlock.positionY + originalBlock.height - 1;
            originalBlock.positionY -= 1;
          }
        }
      } else if (moveDir === MOVE_DIR.MOVE_DOWN) {
        if (originalBlock.width === 1){
          newBlock.positionY = originalBlock.positionY
          originalBlock.positionY += 1
        } else{
          let [block1, block2] = checkBelow(blocks, originalBlock);
          if (block1 !== null && block2 !== null) {
            block1.positionY = block2.positionY = originalBlock.positionY;
            originalBlock.positionY += 1;
          }
        }
      } else if (moveDir === MOVE_DIR.MOVE_LEFT) {
        if (originalBlock.height === 1) {
          newBlock.positionX = originalBlock.positionX + originalBlock.width - 1;
          originalBlock.positionX -= 1;
        } else {
          let [block1, block2] = checkLeft(blocks, originalBlock);
          console.log(block1, block2);
          if (block1 !== null && block2 !== null) {
            block1.positionX = block2.positionX = originalBlock.positionX + originalBlock.width - 1;
            originalBlock.positionX -= 1;
          }
        }
      } else if (moveDir === MOVE_DIR.MOVE_RIGHT) {
        if (originalBlock.height === 1) {
          newBlock.positionX = originalBlock.positionX;
          originalBlock.positionX += 1;
        } else {
          let [block1, block2] = checkRight(blocks, originalBlock);
          if (block1 !== null && block2 !== null) {
            block1.positionX = block2.positionX = originalBlock.positionX;
            originalBlock.positionX += 1;
          }
        }
      }
      setBlocks([...blocks])
    }
  }

  
  return (
    <div className="App">
      <div className="Game">
        {blocks.map((block, index) => (
            <img 
              className={block.name}
              key={index}
              src={block.image}
              style={{width:block.width*70, height:block.height*70, position: 'absolute', top: block.positionY * 70 , left: block.positionX * 70}}
              alt={block.name}
              data-id={block.id}
              draggable={true}
              onDragStart={dragStart}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDrop={dragDrop}
              onDragEnd={dragEnd}
            />
        ))}
      </div>
    </div>
  );
}

export default App;