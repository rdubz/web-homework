import React, { useState } from 'react';
import { css } from '@emotion/core'
import { PieChart, Pie, Legend, Cell} from 'recharts';
import { useQuery } from '@apollo/client'
import GetTransactions from '../../gql/transactions.gql'
import { transactions } from '../../../mocks/transactions-data';


const styles = css`
 .settingsContainer {
   margin: 0 auto;
 }
`
const COLORS = ['#0088FE', '#00C49F'];

export function Charts()
{
    const { loading, error, data = {} } = useQuery(GetTransactions)

    function createDebitCreditCategoryData()
    {
        return [{name: 'Debit', value: transactions.filter(t => t.debit).map(t => t.amount).reduce((previous, current) => previous + current, 0)}, 
        {name: 'Credit', value: transactions.filter(t => t.credit).map(t => t.amount).reduce((previous, current) => previous + current, 0)}]
    }

    return(
        <PieChart width={1000} height={600}>
            <Legend verticalAlign="bottom" align="center" />
            <Pie
            data={createDebitCreditCategoryData()}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
            >
            {createDebitCreditCategoryData().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
        </PieChart>
        
    )
}
