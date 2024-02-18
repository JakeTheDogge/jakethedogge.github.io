import {useEffect, useState} from 'react';
import {useInterval} from "./useInterval";
import {getNextRotation, getShape} from "./shapeFactory";

export const ROW_COUNT = 20;
export const COLUMN_COUNT = 10;

function copyScene(scene) {
  return scene.map(row => row.slice());
}

function mergeIntoStage(stage, shape, position) {
  let res = stage;

  shape.shape.forEach(point => {
    const x = point.x + position.x;
    const y = point.y + position.y;

    if (x < 0 || y < 0 || x >= COLUMN_COUNT || y >= ROW_COUNT) {
      return;
    }

    res = updateStage(res, x, y, point.v);
  });

  return res;
}

function updateStage(stage, x, y, value) {
  if (stage[y][x] === value) {
    return stage;
  }
  const res = stage.slice();
  res[y] = stage[y].slice();
  res[y][x] = value;
  return res;
}

function createEmptyScene() {
  return Array.from(Array(ROW_COUNT), () => Array(COLUMN_COUNT).fill(0));
}

export function useBoard() {

  const [scene, setScene] = useState(() => createEmptyScene());
  const [shape, setShape] = useState(() => getShape());
  const [position, setPosition] = useState({x: 0, y: 0});
  const [display, setDisplay] = useState(() => mergeIntoStage(scene, shape, position));
  const [score, setScore] = useState(0);
  const [linesCleared, setLinesCleared] = useState(0);
  const [level, setLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(updateDisplay, [scene, shape, position]);
  useEffect(removeFullLines, [linesCleared, scene]);
  useInterval(tick, 1000);

  function updateDisplay() {
    const newDisplay = mergeIntoStage(scene, shape, position);
    setDisplay(newDisplay);
  }

  function tick() {
    if (!movePosition(0, 1)) {
      placeShape();
    }
  }

  function placeShape() {
    setScene(mergeIntoStage(scene, shape, position));
    setShape(getShape());
    setPosition({x: 0, y: 0});
    if(display[0].slice(0,3).some((el) => el !== 0)) {
      setIsGameOver(true);
    }
  }

  const updateScore = (removedLines) => {
    let win = 0;
    if (removedLines === 1) win = 100;
    if (removedLines === 2) win = 300;
    if (removedLines === 3) win = 500;
    if (removedLines === 4) win = 800;
    if (removedLines > 4) win = 1200;
    setScore(oldScore => oldScore + win)
  };

  function removeFullLines() {

    const newScene = copyScene(scene);
    let touched = false;
    let removedLines = 0;

    const removeRow = (rY) => {
      for (let x = 0; x < COLUMN_COUNT; x++) {
        if (newScene[rY][x] === 'b1') newScene[rY + 1][x] = 0;
        if (newScene[rY][x] === 'b2') newScene[rY - 1][x] = 0;
      }

      for (let y = rY; y > 0; y--) {
        for (let x = 0; x < COLUMN_COUNT; x++) {
          newScene[y][x] = newScene[y - 1][x];
        }
      }


      // insert blank row at top
      for (let x = 0; x < COLUMN_COUNT; x++) {
        newScene[0][x] = 0;
      }

      touched = true;
    };


    for (let y = 0; y < ROW_COUNT; y++) {
      let rowHasEmptySpace = false;
      for (let x = 0; x < COLUMN_COUNT; x++) {
        if (newScene[y][x] === 0) {
          rowHasEmptySpace = true;
          break;
        }
      }
      if (!rowHasEmptySpace) {
        removedLines++;
        removeRow(y);
      }
    }
    updateScore(removedLines);
    setLinesCleared(old =>  old + removedLines)
    setLevel(Math.floor(linesCleared / 10));



    if (touched) {
      setScene(newScene);
    }
  }

  function onKeyDown(event) {
    switch (event.key) {
      case 'ArrowRight':
        movePosition(1, 0);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        movePosition(-1, 0);
        event.preventDefault();
        break;
      case 'ArrowDown':
        movePosition(0, 1);
        event.preventDefault();
        break;
      case 'ArrowUp':
        rotateShape();
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  function movePosition(x, y) {
    const res = {x: x + position.x, y: y + position.y};

    if (!validPosition(res, shape)) {
      return false;
    }

    setPosition(res);

    return true;
  }

  function rotateShape(){
    const newShape = getNextRotation(shape);

    if (validPosition(position, newShape)) {
      setShape(newShape);
    }
  }

  function validPosition(position, shape) {
    return shape.shape.every(point => {
      const tX = point.x + position.x;
      const tY = point.y + position.y;

      if (tX < 0 || tX >= COLUMN_COUNT) {
        return false;
      }

      if (tY < 0 || tY >= ROW_COUNT) {
        return false;
      }

      return scene[tY][tX] === 0;
    });
  }

  return [display, score, level, isGameOver, onKeyDown];
}