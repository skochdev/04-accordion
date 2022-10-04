import * as S from './FAQ.styled';
import Question from '../Question/Question';

const FAQ = ({ data }) => {
  return (
    <S.Container>
      <h1>FAQ</h1>
      <ul>
        {data.map((q) => {
          return (
            <li key={q.id}>
              <Question
                title={q.title}
                info={q.info}
              />
            </li>
          );
        })}
      </ul>
    </S.Container>
  );
};

export default FAQ;
