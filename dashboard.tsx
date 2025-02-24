import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUp, ArrowDown, Thermometer, Droplet, TestTube, Droplets, FileText } from "lucide-react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Dummy data for the chart
const monthlyData = [
  { month: "Mar", value: 24.5 },
  { month: "Apr", value: 24.2 },
  { month: "May", value: 23.8 },
  { month: "Jun", value: 24.0 },
  { month: "Jul", value: 24.3 },
  { month: "Aug", value: 24.5 },
  { month: "Sep", value: 24.2 },
  { month: "Oct", value: 24.0 },
  { month: "Nov", value: 24.1 },
]

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-full">
              <Thermometer className="w-4 h-4 text-blue-500" />
            </div>
            <span className="text-sm font-medium">수온</span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-2xl font-bold">24 C</span>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <ArrowUp className="w-3 h-3 mr-1" />
              0.1 C
            </Badge>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-full">
              <Droplet className="w-4 h-4 text-blue-500" />
            </div>
            <span className="text-sm font-medium">물 양</span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-2xl font-bold">105L</span>
            <Badge variant="secondary" className="bg-red-100 text-red-700">
              <ArrowDown className="w-3 h-3 mr-1" />2
            </Badge>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-purple-100 rounded-full">
              <TestTube className="w-4 h-4 text-purple-500" />
            </div>
            <span className="text-sm font-medium">PH</span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-2xl font-bold">7</span>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <ArrowUp className="w-3 h-3 mr-1" />
              0.1
            </Badge>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-green-100 rounded-full">
              <Droplets className="w-4 h-4 text-green-500" />
            </div>
            <span className="text-sm font-medium">GH</span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-2xl font-bold">7</span>
            <Badge variant="secondary" className="bg-red-100 text-red-700">
              <ArrowDown className="w-3 h-3 mr-1" />
              0.1
            </Badge>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <h2 className="text-lg font-semibold mb-4">수조 상태 기록</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: "#e0e0e0" }}
                />
                <YAxis
                  domain={[23, 25]}
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: "#e0e0e0" }}
                  tickFormatter={(value) => `${value}°C`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                  labelStyle={{ fontWeight: "bold", marginBottom: "4px" }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6", r: 6 }}
                  activeDot={{ r: 8, fill: "#2563eb" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 flex flex-col items-center justify-center">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
              />
              <circle
                className="text-emerald-400 transition-all duration-1000 ease-in-out"
                strokeWidth="8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
                style={{
                  strokeDasharray: `${2 * Math.PI * 42}`,
                  strokeDashoffset: `${2 * Math.PI * 42 * (1 - 0.91)}`,
                  transform: "rotate(-90deg)",
                  transformOrigin: "50% 50%",
                }}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-4xl font-bold text-gray-700">91%</div>
              <div className="text-emerald-400 font-semibold">Superb!</div>
            </div>
          </div>
          <p className="text-gray-600 mt-4 text-center">전체 수조 상태</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Activities */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">environmental data</h2>
        </Card>

        {/* Recent Invoices */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Data</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead>Temperature</TableHead>
                <TableHead>PH</TableHead>
                <TableHead>GH</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>13 Feb, 2025</TableCell>
                <TableCell>24.3</TableCell>
                <TableCell>7</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>14 Feb, 2025</TableCell>
                <TableCell>24.2</TableCell>
                <TableCell>7</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>15 Feb, 2025</TableCell>
                <TableCell>24.1</TableCell>
                <TableCell>7</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}

