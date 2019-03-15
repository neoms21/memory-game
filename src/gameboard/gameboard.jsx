import React, { Component } from 'react';

import Square from '../components/square';
import * as utils from '../utils/utils';
import { ResultsDiv, BlocksDiv, ErrorDiv, SuccessDiv, Button } from './styles';
import MemoryBoard from './memoryboard';
import * as constants from '../utils/constants';

const resultBlocks = utils.getBlocks(4, true);
const initialState = {
  blocks: 0,
  sequence: [],
  result: [],
  score: 0,
};

class GameBoard extends Component {
  state = { ...initialState };

  updateMemoryBoard = blocks => {
    this.setState(
      {
        gameOver: false,
        gameWon: false,
        blocks: blocks === 0 ? 4 : blocks + 1,
      },
      () => {
        const seq = utils.getBlocks(this.state.blocks);
        // console.log(seq);
        this.setState({ sequence: seq, result: seq, score: seq.length === 4 ? 0 : seq.length - 1 }, () => {
          setTimeout(() => {
            this.setState({ sequence: [] });
          }, constants.MEMORY_SHOW_TIME);
        });
      }
    );
  };

  verifySequence = color => {
    if (this.state.sequence.length > 0) return;
    const firstColor = this.state.result[0];
    if (firstColor === color) {
      this.setState({ result: [...this.state.result.slice().splice(1, this.state.result.length - 1)] }, () => {
        if (this.state.result.length === 0) {
          if (this.state.score + 1 === constants.MAX_SCORE) this.setState({ gameWon: true, ...initialState });
          else this.updateMemoryBoard(this.state.blocks);
        }
      });
    } else {
      this.setState({ gameOver: true, blocks: 0, sequence: [], result: [] });
    }
  };

  render() {
    const { sequence, blocks, result } = this.state;
    return (
      <div>
        <ResultsDiv>
          <span>Click the colored squares in sequence here after you've started the game</span>
          <BlocksDiv>
            {resultBlocks.map((b, i) => (
              <Square key={`${b}${i}`} color={b} handleClick={this.verifySequence} />
            ))}
          </BlocksDiv>
        </ResultsDiv>

        {this.state.gameOver ? (
          <ErrorDiv id="error">You lost the game!! you score is {this.state.score}</ErrorDiv>
        ) : null}
        {this.state.gameWon ? <SuccessDiv id="success">Congratulations!!! you won the game.</SuccessDiv> : null}
        <MemoryBoard sequence={sequence} duration={constants.MEMORY_SHOW_TIME / 1000} />
        {result.length === 0 && (
          <Button
            disabled={blocks === 9}
            onClick={() => {
              this.updateMemoryBoard(blocks);
            }}
          >
            Start Game
          </Button>
        )}
      </div>
    );
  }
}

export default GameBoard;
