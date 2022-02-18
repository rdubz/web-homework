import { render } from '@testing-library/react'
import { TxTable } from './TxTable'
import { transactions } from '../../../mocks/transactions-data'

describe('Transactions Table', () => {
  it('should show user "employee4" with amount "150"', () => {
    render(<TxTable data={transactions} />);
       expect(screen.getByTestId('5d5c1f747e01cd704f18f863-amount')).toBe(150);
  })

})

describe('Transactions Table', () => {
  it('should show user "employee3" with amount "250"', () => {
    render(<TxTable data={transactions} />);
       expect(screen.getByTestId('5d5c1f747e01cd704f18f864-amount')).toBe(250);
  })

})

describe('Transactions Table', () => {
  it('should show user "employee3" with amount debit as "No"', () => {
    render(<TxTable data={transactions} />);
       expect(screen.getByTestId('5d5c1f747e01cd704f18f864-debit')).toBe("No");
  })

})

describe('Transactions Table', () => {
  it('should display all transaction attributes', () => {
    render(<TxTable data={transactions} />);
       expect(screen.getByTestId('5d5c1f747e01cd704f18f864-id')).toBeInTheDocument();
       expect(screen.getByTestId('5d5c1f747e01cd704f18f864-userId')).toBeInTheDocument();
       expect(screen.getByTestId('5d5c1f747e01cd704f18f864-description')).toBeInTheDocument();
       expect(screen.getByTestId('5d5c1f747e01cd704f18f864-merchantId')).toBeInTheDocument();
       expect(screen.getByTestId('5d5c1f747e01cd704f18f864-debit')).toBeInTheDocument();
       expect(screen.getByTestId('5d5c1f747e01cd704f18f864-credit')).toBeInTheDocument();
       expect(screen.getByTestId('5d5c1f747e01cd704f18f864-amount')).toBeInTheDocument();
  })

})