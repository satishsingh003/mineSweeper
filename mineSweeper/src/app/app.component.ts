import { Component } from '@angular/core';
import { Board } from './ms_game/ms_board';
import { Cell } from './ms_game/ms_cell';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minesweeperApp';
  board: Board;
  constructor() {
    this.reset();
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      alert('You lose');
    } else if (result === 'win') {
      alert('you win');
    }
  }
  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    }
  }

  reset() {
    this.board = new Board(20, 50);
  }
}
