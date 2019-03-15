import React from 'react';
import { BlocksDiv, MemoryDiv } from './styles';
import Square from '../components/square';

const MemoryBoard = ({ sequence, duration }) => {
  return sequence.length === 0 ? null : (
    <MemoryDiv>
      <span>
        Memorise the seqeunce here from left to right and click the same sequence above. These blocks will disappear in {duration} seconds
      </span>
      <BlocksDiv>
        {sequence.map((s, i) => (
          <Square key={`${s}${i}`} color={s} />
        ))}
      </BlocksDiv>
    </MemoryDiv>
  );
};

export default MemoryBoard;
