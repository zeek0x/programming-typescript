type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
  constructor(
    private file: File,
    private rank: Rank
  ) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}

abstract class Piece {
  protected position: Position
  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }
}

class King   extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Queen  extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook   extends Piece {}
class Pawn   extends Piece {}

// チェスのゲーム
class Game {
  constructor() {

  }

  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      new King('White', 'E', 1),
      new King('Black', 'E', 1),

      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),

      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 8),
      new Bishop('Black', 'C', 1),
      new Bishop('Black', 'F', 8),

      new Knight('White', 'B', 1),
      new Knight('White', 'G', 1),
      new Knight('Black', 'B', 8),
      new Knight('Black', 'G', 8),

      new Rook('White', 'A', 1),
      new Rook('White', 'H', 1),
      new Rook('Black', 'A', 8),
      new Rook('Black', 'H', 8),

      new Pawn('White', 'A', 2),
      new Pawn('White', 'B', 2),
      new Pawn('White', 'C', 2),
      new Pawn('White', 'D', 2),
      new Pawn('White', 'E', 2),
      new Pawn('White', 'F', 2),
      new Pawn('White', 'G', 2),
      new Pawn('White', 'H', 2),
      new Pawn('Black', 'A', 7),
      new Pawn('Black', 'B', 7),
      new Pawn('Black', 'C', 7),
      new Pawn('Black', 'D', 7),
      new Pawn('Black', 'E', 7),
      new Pawn('Black', 'F', 7),
      new Pawn('Black', 'G', 7),
      new Pawn('Black', 'H', 7),
    ]
  }
}
