import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi';
import * as S from '../Question/Question.styled';
import { useState } from 'react';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <S.Card>
      <div>
        <S.Question>{title}</S.Question>

        {showInfo && <S.Answer>{info}</S.Answer>}
      </div>

      <S.Button
        type='button'
        onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? (
          <HiOutlineMinusCircle size='25px' />
        ) : (
          <HiOutlinePlusCircle size='25px' />
        )}
      </S.Button>
    </S.Card>
  );
};

export default Question;
