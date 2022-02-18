import { css } from '@emotion/core'

export const transactionStyles = css`
.transactionsContainer {
    margin: 0 auto;
}

.createTransactionLink {
    text-align: center;
    margin-top: 20px;
}
`

export const formBoxStyles = css`
.formBox {
  margin: 0 auto;
  max-width: 500px;
}
`

export const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
`

export const navStyle = css`
  grid-row: 1;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }
  
  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }
`

export const contentStyle = css`
  grid-row: 2;
`

export const chartStyles = css`
 .pieChart {
   text-align: center;
 }
`

export const settingsStyles = css`
 .settingsContainer {
   text-align: center;
 }
`