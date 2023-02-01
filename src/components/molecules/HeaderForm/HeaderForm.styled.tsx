import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  width: 100%;
  max-width: 311px;
  flex-direction: column;
  gap: inherit;

& .p-account {
  display: flex;
  justify-content: center;
  gap: 10px;
  font-weight: 400;
}

& .or {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .line {
    width: 40%;
    border: .5px solid var(--gray-light);
  }
}

@media (min-width: 800px) {
  .p-account {
    justify-content: flex-start;
  }

    .title {
      justify-content: flex-start;
    }
  }

`