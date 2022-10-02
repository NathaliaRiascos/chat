import styled from 'styled-components'

export const LayoutAuth = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  

  & img {
    object-fit: cover;
    width: 100%;
    margin: auto;
    height: 262px;
    // background-color: var(--gray-light);
    border-radius: 15px;
  }

  & .left {
    display: flex;
    gap: 20px;
    max-width: 311px;
    width: 100%;
    height: 100%;
    flex-direction: column;
    margin-bottom: 20px;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;
  }

  & .right {
    width: 100%;
    display: flex;
    gap: 25px;
    flex-direction: column;
    align-items: center;
  }

@media (min-width: 800px) { 
  flex-direction: row;
  align-items: stretch;
  width: 100vw;
  gap: 0;
  margin-top: 0;

    & .left {
      display: flex;
      position: relative;
      width: 45%;
      // background-color: #f3f5f9;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0;
      max-width: 100%;

        & header {
          position: absolute;
          align-items: flex-start;
          width: 100%;
          z-index: 1;
          padding: 20px;
        }


        & img {
          position: relative;
          border-radius: 0;
          width: 100%;
          height: 100%;
        }
        
    }
  
    & .right {
      width: 55%;
      justify-content: center;
    }
  }
`


