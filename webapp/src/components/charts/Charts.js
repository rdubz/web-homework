import React from 'react'
import { PieChart, Pie, Legend, Cell } from 'recharts'
import { useQuery } from '@apollo/client'
import GetTransactions from '../../gql/transactions.gql'
import { chartStyles } from '../../styles/global'

const COLORS = ['#0088FE', '#00C49F']

export function Charts () {
  const { loading, error, data = {} } = useQuery(GetTransactions)

  function createDebitCreditCategoryData () {
    return [{ name: 'Debit', value: data.transactions.filter(t => t.debit).map(t => t.amount).reduce((previous, current) => previous + current, 0) },
      { name: 'Credit', value: data.transactions.filter(t => t.credit).map(t => t.amount).reduce((previous, current) => previous + current, 0) }]
  }

  return (
    <PieChart css={chartStyles} height={600} width={1000}>
      <Legend align='center' verticalAlign='bottom' />
      <Pie
        align='center'
        className='pieChart'
        cx={120}
        cy={200}
        data={createDebitCreditCategoryData()}
        dataKey='value'
        fill='#8884d8'
        innerRadius={60}
        label
        outerRadius={80}
        paddingAngle={5}
      >
        {createDebitCreditCategoryData().map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]} key={`cell-${index}`} />
        ))}
      </Pie>
    </PieChart>

  )
}
