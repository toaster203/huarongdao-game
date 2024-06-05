import './App.css';
import React, {useEffect, useState} from 'react';
import { defaultBoard, board1, board2, board3, board4, board5 } from './createBoard';
import { checkAbove, checkBelow, checkLeft, checkRight } from './BlockChecks';

export const MOVE_DIR = {
  INVALID_MOVE : -1,
  MOVE_DOWN :1,
  MOVE_UP :2,
  MOVE_LEFT :3,
  MOVE_RIGHT : 4
}

const BLANK_ID_1 = 11;
const BLANK_ID_2 = 12;

function App() {
  const [blocks, setBlocks] = useState([]);
  const [currentBoard, setCurrentBoard] = useState(0);
  const [moves, setMoves] = useState([0,0,0,0,0,0]);
  const [squareBeingDragged, setSquareBeingDragged] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);

  useEffect(() => {
    setBlocks(defaultBoard());
  }, []);

  const getMoveDirection = (original, newPosition) => {
    if (original.width === 1 && original.height === 1) {
      if (original.positionX + original.width === newPosition.positionX && original.positionY === newPosition.positionY) {
        return MOVE_DIR.MOVE_RIGHT;
      } else if(original.positionX - 1 === newPosition.positionX && original.positionY === newPosition.positionY) {
        return MOVE_DIR.MOVE_LEFT;
      } else if(original.positionY - 1 === newPosition.positionY && original.positionX === newPosition.positionX) {
        return MOVE_DIR.MOVE_UP;
      } else if(original.positionY + original.height === newPosition.positionY && original.positionX === newPosition.positionX) {
        return MOVE_DIR.MOVE_DOWN;
      }
    } else if (original.width === 1 && original.height === 2) {
      if (original.positionX + original.width === newPosition.positionX && (original.positionY === newPosition.positionY || original.positionY + 1 === newPosition.positionY)) {
        return MOVE_DIR.MOVE_RIGHT;
      } else if(original.positionX - 1 === newPosition.positionX && (original.positionY === newPosition.positionY || original.positionY + 1 === newPosition.positionY)) {
        return MOVE_DIR.MOVE_LEFT;
      } else if(original.positionY - 1 === newPosition.positionY && original.positionX === newPosition.positionX) {
        return MOVE_DIR.MOVE_UP;
      } else if(original.positionY + original.height === newPosition.positionY && original.positionX === newPosition.positionX) {
        return MOVE_DIR.MOVE_DOWN;
      }
    } else if (original.width === 2 && original.height === 1) {
      if (original.positionX + original.width === newPosition.positionX && original.positionY === newPosition.positionY) {
        return MOVE_DIR.MOVE_RIGHT;
      } else if(original.positionX - 1 === newPosition.positionX && original.positionY === newPosition.positionY) {
        return MOVE_DIR.MOVE_LEFT;
      } else if(original.positionY - 1 === newPosition.positionY && (original.positionX === newPosition.positionX || original.positionX + 1 === newPosition.positionX)) {
        return MOVE_DIR.MOVE_UP;
      } else if(original.positionY + 1 === newPosition.positionY && (original.positionX === newPosition.positionX || original.positionX + 1 === newPosition.positionX)) {
        return MOVE_DIR.MOVE_DOWN;
      }
    } else if (original.width === 2 && original.height === 2) {
      if (original.positionX + original.width === newPosition.positionX && (original.positionY + 1 === newPosition.positionY || original.positionY === newPosition.positionY)) {
        return MOVE_DIR.MOVE_RIGHT;
      } else if(original.positionX - 1 === newPosition.positionX && (original.positionY === newPosition.positionY || original.positionY + 1 === newPosition.positionY)) {
        return MOVE_DIR.MOVE_LEFT;
      } else if(original.positionY - 1 === newPosition.positionY && (original.positionX === newPosition.positionX || original.positionX + 1 === newPosition.positionX)) {
        return MOVE_DIR.MOVE_UP;
      } else if(original.positionY + original.height === newPosition.positionY && (original.positionX === newPosition.positionX || original.positionX + 1 === newPosition.positionX)) {
        return MOVE_DIR.MOVE_DOWN;
      }
    }


    
    return MOVE_DIR.INVALID_MOVE
  }

  const findBlockByID = (id) => {
    return blocks.find(block => block.id === id);
  }

  const dragStart = (e) => {
    console.log("start", e.target);
    setSquareBeingDragged(e.target);
  }

  const dragDrop = (e) => {
    console.log("stop", e.target);
    setSquareBeingReplaced(e.target);
  }

  const dragEnd = (e) => {
    // check if the square is being dropped in a blank square
    const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'));
    const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'));
    console.log("dragged", squareBeingDraggedId, "replaced", squareBeingReplacedId);
    
    let originalBlock = findBlockByID(squareBeingDraggedId);
    let newBlock = findBlockByID(squareBeingReplacedId);
    console.log("x",originalBlock.positionX, "y", originalBlock.positionY);
    console.log("x",newBlock.positionX, "y", newBlock.positionY);

    if (squareBeingDraggedId && squareBeingReplacedId) {
      if (squareBeingDraggedId === BLANK_ID_1 || squareBeingDraggedId === BLANK_ID_2) {
        console.log('dragged a blank block')
        return
      }
      if (squareBeingReplacedId !== BLANK_ID_1 && squareBeingReplacedId !== BLANK_ID_2) {
        console.log('replaced a non-blank block')
        return
      }

      const moveDir = getMoveDirection(originalBlock, newBlock);
      console.log(moveDir);

      if (moveDir === MOVE_DIR.INVALID_MOVE) {
        console.log('Invalid move');
        return
      } else if (moveDir === MOVE_DIR.MOVE_UP) {
        if (originalBlock.width === 1){
          newBlock.positionY = originalBlock.positionY + originalBlock.height - 1
          originalBlock.positionY -= 1;
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
          originalBlock.positionY += 1;
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
      const updatedMoves = [...moves];
      updatedMoves[currentBoard] += 1;
      setMoves(updatedMoves);

      // add win condition
      if (originalBlock.name === 'caocao' || originalBlock.name === 'bigsquare') {
        if (originalBlock.positionX === 1 && originalBlock.positionY === 3) {
          alert('You win');
        }
      }
      
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
      <div className="menus">
        <div>
          <h2>Moves: {moves[currentBoard]}</h2>
        </div>

        <div>
          <button onClick={() => {setBlocks(defaultBoard()); setCurrentBoard(0)}}>default</button>
          <button onClick={() => {setBlocks(board1()); setCurrentBoard(1)}}>1</button>
          <button onClick={() => {setBlocks(board2()); setCurrentBoard(2)}}>2</button>
          <button onClick={() => {setBlocks(board3()); setCurrentBoard(3)}}>3</button>
          <button onClick={() => {setBlocks(board4()); setCurrentBoard(4)}}>4</button>
          <button onClick={() => {setBlocks(board5()); setCurrentBoard(5)}}>5</button>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;