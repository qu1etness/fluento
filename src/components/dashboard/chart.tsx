"use client"

import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "January", learned: 186, noted: 80 },
  { month: "February", learned: 143, noted: 67 },
  { month: "March", learned: 210, noted: 95 },
  { month: "April", learned: 34, noted: 84 },
  { month: "May", learned: 122, noted: 72 },
  { month: "June", learned: 158, noted: 60 },
  { month: "July", learned: 188  , noted: 178 },
  { month: "August", learned: 173, noted: 173 },
  { month: "September", learned: 164, noted: 69 },
  { month: "October", learned: 219, noted: 91 },
  { month: "November", learned: 178, noted: 76 },
  { month: "December", learned: 199, noted: 82 },
];

const chartConfig = {
  learned: {
    label: "Learned",
    color: "#8764F6",
  },
  noted: {
    label: "Noted",
    color: "#6BBDD7",
  },
} satisfies ChartConfig

export function Chart() {
  return (
    <div className={'col-span-3 justify-start items-center'}>
      <div className={'w-full h-full max-h-[318px]'}>
        <ChartContainer config={chartConfig} className="max-h-full w-full">
          <LineChart data={chartData}
                     accessibilityLayer
                     margin={{
                       left: 12,
                       right: 12
                     }}

          >
            <Line
              dataKey="learned"
              type="natural"
              stroke="var(--color-learned)"
              fill="none"
              strokeWidth={4}
              dot={false}
            />
            <Line
              dataKey="noted"
              type="natural"
              stroke="var(--color-noted)"
              fill="none"
              strokeWidth={4}
              dot={false}
            />


            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}

