import styled from "styled-components"

const Card = styled.div`
  background-color: var(--white);
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(6, 5, 43, 0.15);
  h3 {
    margin: 0.75em 0 0.25em;
    font-size: 1.563em;
  }
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 48em) {
    &:not(:last-of-type) {
      margin-bottom: 0px;
    }
  }
`

export default Card
