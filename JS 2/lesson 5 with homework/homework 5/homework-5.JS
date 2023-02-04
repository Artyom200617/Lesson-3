class ChessBoard {
  constructor() {
    this._board = new Array(8)
    for (let i = 0; i < 8; i++) {
      this._board[i] = new Array(8)
    }
  }
  getPiece(x, y) {
    return this._board[x][y]
  }
  setPiece(x, y, piece) {
    this._board[x][y] = piece
  }
  movePiece(x1, y1, x2, y2) {
    const piece = this.getPiece(x1, y1)
    // const pieceAvailableCoordinates = piece.getAvailableCoords(x1, y1)
    // console.log(pieceAvailableCoordinates, 'pieceAvailableCoordinates');

    // console.log(piece, "movePiece ");
    //  const newCoord= piece.availableCords.find(({x,y})=>x===x2&&y==y2)
    //  console.log(newCoord,'******************');
    if (piece.isAvailableMove(x1, y1, x2, y2)) {
      this.setPiece(x2, y2, piece);
      this.setPiece(x1, y1, null);
    }
    else {
      console.log(`${piece._color} ${piece.__proto__.constructor.name} in x:${x1} , y:${y1} position we cant move to x:${x2}, y:${y2} `)
    }
  }
}
class ChessPiece {
  constructor(color) {
    this._color = color
  }
  get color() {
    return this._color
  }
  set color(value) {
    this._color = value
  }
}

class Pawn extends ChessPiece {
  constructor(color) {
    super(color);
  }
  move(x, y) {
    if (this.color === "white") {
      if (this.y === 2) {
        if (y === this.y + 1 || y === this.y + 2) return true;
      } else if (y === this.y + 1) return true;
    } else {
      if (this.y === 7) {
        if (y === this.y - 1 || y === this.y - 2) return true;
      } else if (y === this.y - 1) return true;
    }
    return false;
  }
}
class King extends ChessPiece {
  constructor(color, x, y) {
    super(color)
    this.availableCords = []
    this.getAvailableCoords(x, y)
    chessBoard.setPiece(x, y, this)
  }
  getAvailableCoords(x, y) {
    let newAvailableCords = []
    newAvailableCords.push(
      {
        x: x + 1,
        y,
      },
      {
        x: x + 1,
        y: y + 1,
      },
      {
        x: x + 1,
        y: y - 1,
      },
      {
        x ,
        y: y + 1,
      },
      {
        x,
        y: y - 1,
      },
      {
        x: x - 1,
        y: y + 1,
      },
      {
        x: x -1,
        y: y - 1,
      },
      {
        x: x - 1,
        y ,
      },
    )
    newAvailableCords = newAvailableCords.filter(({ x, y }) => x >= 0 && x <= 7 && y >= 0 && y <= 7)
    this.availableCords = newAvailableCords
  }
  isAvailableMove(x, y, newX, newY) {
    let isAvailableMove = false
    this.getAvailableCoords(x, y)
    for (let i = 0; i < this.availableCords.length; i++) {
      const availableCoordinate = this.availableCords[i];
      if (newX === availableCoordinate.x && newY === availableCoordinate.y) {
        isAvailableMove = true
        break
      }
    }
    return isAvailableMove
  }
    
    // if (this.color === "white") {
    //   if (
    //     y === this.y + 1 &&
    //     (x === this.x || x === this.x - 1 || x === this.x + 1)
    //   )
    //     return true;
    //   else if (
    //     y === this.y - 1 &&
    //     (x === this.x || x === this.x - 1 || x === this.x + 1)
    //   )
    //     return true;
    //   else if (y === this.y && (x === this.x - 1 || x === this.x + 1))
    //     return true;
    // } else {
    //   if (
    //     y === this.y - 1 &&
    //     (x === this.x || x === this.x - 1 || x === this.x + 1)
    //   )
    //     return true;
    //   else if (
    //     y === this.y + 1 &&
    //     (x === this.x || x === this.x - 1 || x === this.x + 1)
    //   )
    //     return true;
    //   else if (y === this.y && (x === this.x - 1 || x === this.x + 1))
    //     return true;
    // }

  
}
class Rook extends ChessPiece {
  constructor(color) {
    super(color);
    this.availableCords = [];
  }
  getAvailableCoords(x, y) {
    for (let i = 0; i <= 7; i++) {
      if (i === x) {
        continue;
      } else {
        this.availableCords.push({
          x: i,
          y: y,
        });
      }
    }
    for (let i = 0; i <= 7; i++) {
      if (i === y) {
        continue;
      } else {
        this.availableCords.push({
          x: x,
          y: i,
        });
      }
    }
  }
}

class Horse extends ChessPiece {
  constructor(color, x, y) {
    super(color)
    this.availableCords = []
    this.getAvailableCoords(x, y)
    chessBoard.setPiece(x, y, this)
  }
  getAvailableCoords(x, y) {
    let newAvailableCords = []
    newAvailableCords.push(
      {
        x: x - 2,
        y: y + 1,
      },
      {
        x: x - 2,
        y: y - 1,
      },
      {
        x: x - 1,
        y: y + 2,
      },
      {
        x: x + 1,
        y: y + 2,
      },
      {
        x: x + 2,
        y: y - 1,
      },
      {
        x: x + 2,
        y: y + 1,
      },
      {
        x: x + 1,
        y: y - 2,
      },
      {
        x: x - 1,
        y: y - 2,
      },
    )
    newAvailableCords = newAvailableCords.filter(({ x, y }) => x >= 0 && x <= 7 && y >= 0 && y <= 7)
    this.availableCords = newAvailableCords
  }
  isAvailableMove(x, y, newX, newY) {
    let isAvailableMove = false
    this.getAvailableCoords(x, y)
    for (let i = 0; i < this.availableCords.length; i++) {
      const availableCoordinate = this.availableCords[i];
      if (newX === availableCoordinate.x && newY === availableCoordinate.y) {
        isAvailableMove = true
        break
      }
    }
    return isAvailableMove
  }
}

const chessBoard = new ChessBoard()
const pawn = new Pawn('white')
chessBoard.setPiece(1, 1, pawn)

const rook = new Rook('white')
chessBoard.setPiece(0, 0, rook)
chessBoard.setPiece(0, 7, rook)
chessBoard.setPiece(7, 0, rook)
chessBoard.setPiece(7, 7, rook)
// chessBoard.movePiece(0, 0, 0, 7)

const horseWhiteLeft = new Horse('white', 0, 1)
const horseWhiteRight = new Horse('white', 0, 6)
const horseBlackLeft = new Horse('black', 7, 1)
const horseBlackRight = new Horse('black', 7, 6)
chessBoard.movePiece(7, 1, 5, 5)
// chessBoard.setPiece(0, 1, horseWhiteLeft);
// chessBoard.setPiece(0, 6, horseWhiteRight);
// chessBoard.setPiece(7, 1, horseBlackLeft);
// chessBoard.setPiece(7, 6, horseBlackRight);
console.log(chessBoard)
// console.log(horseBlackRight, 'horseBlackRight');
const king = new King('white' , 1 , 4)
chessBoard.movePiece(2, 4 , king)