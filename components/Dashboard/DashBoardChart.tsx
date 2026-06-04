"use client"

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const chartData = [
  { name: "January", uv: 100, pv: 200, amt: 5000 },
  { name: "February", uv: 500, pv: 200, amt: 5000 },
  { name: "March", uv: 900, pv: 200, amt: 5000 },
  { name: "April", uv: 400, pv: 200, amt: 5000 },
  { name: "May", uv: 800, pv: 200, amt: 5000 },
  { name: "June", uv: 1300, pv: 200, amt: 5000 },
]

export function DashBoardChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analystic for this year</CardTitle>
        <CardDescription>
          Views per month
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <Line type='monotone' dataKey='uv' stroke='#8884d8' />
              <CartesianGrid stroke='#ccc' />
              <XAxis dataKey='name' />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}